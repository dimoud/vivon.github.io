// ============================================================
// ai.js — Gemini AI for meal plan generation & optimization
// ============================================================

const GEMINI_PROXY_URL = 'https://tqasuwcnzfxjkthmjooz.supabase.co/functions/v1/gemini-proxy';

// ── Shared helpers ──────────────────────────────────────────

function _buildRecipesByType() {
  const map = {};
  RECIPES_DB.forEach(r => {
    if (!map[r.meal]) map[r.meal] = [];
    map[r.meal].push({ id: r.id, name: r.name });
  });
  return map;
}

function _buildRecipeGroups() {
  const groups = {};
  RECIPES_DB.forEach(r => {
    const cats = new Set();
    r.ingredients.forEach(ing => {
      const food = FOODS_DB.find(f => f.id === ing.foodId);
      if (food) cats.add(food.category);
    });
    groups[r.id] = {
      name: r.meal_type || r.meal,
      meal: r.meal,
      hasYogurt: r.ingredients.some(i => i.foodId === 'd1'),
      categories: [...cats],
    };
  });
  return groups;
}

function _applyAIWeek(optimized) {
  const mealTimes = getMealTimes();
  const typeToTime = {
    breakfast: mealTimes.breakfast,
    snack:     mealTimes.snack,
    lunch:     mealTimes.lunch,
    afternoon: mealTimes.afternoon,
    dinner:    mealTimes.dinner,
  };
  const waterNotes = [
    "Πιες 500ml νερό 💧 — Σύνολο ως τώρα: 0.5L",
    "Πιες 500ml νερό 💧 — Σύνολο ως τώρα: 1.0L",
    "Πιες 500ml νερό 💧 — Σύνολο ως τώρα: 1.5L",
    "Πιες 500ml νερό 💧 — Σύνολο ως τώρα: 2.0L",
    "Πιες 1L νερό 💧 — Στόχος: 3L ✅",
  ];

  optimized.forEach((optDay, di) => {
    if (!state.week[di]) return;
    optDay.meals.forEach((optMeal, mi) => {
      const recipe = RECIPES_DB.find(r => r.id === optMeal.recipeId);
      if (!recipe) return;
      if (!state.week[di].meals[mi]) return;
      const m = state.week[di].meals[mi];
      m.recipeId    = optMeal.recipeId;
      m.type        = optMeal.type;
      m.time        = typeToTime[optMeal.type] || m.time;
      m.waterNote   = waterNotes[mi] || m.waterNote;
      m.done        = false;
      m.scaleFactor = undefined;
    });
  });
}

async function _callGemini(prompt) {
  const response = await fetch(GEMINI_PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }
  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const jsonMatch = rawText.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error('Δεν βρέθηκε έγκυρο JSON στην απάντηση');
  const result = JSON.parse(jsonMatch[0]);
  if (!Array.isArray(result) || result.length !== 7) throw new Error('Αναμενόταν 7 ημέρες');
  return result;
}

const _RULES = `ΚΑΝΟΝΕΣ:
1. Αν πρωινό hasYogurt:true → βραδινό ΚΑΙ σνακ ΔΕΝ πρέπει να έχουν hasYogurt:true
2. Μέγιστη επανάληψη ίδιου recipeId: 2 φορές σε ΟΛΗ την εβδομάδα
3. Ποικιλία protein: μην επαναλαμβάνεις κοτόπουλο >3 ημέρες
4. Κάθε γεύμα να παραμένει στο σωστό meal type (breakfast→breakfast, snack→snack, κλπ)
5. Κάθε ημέρα έχει ακριβώς 5 γεύματα: breakfast, snack, lunch, afternoon, dinner`;

const _FORMAT = `Επίστρεψε ΜΟΝΟ JSON array, χωρίς markdown, χωρίς εξήγηση:
[
  { "day": 1, "meals": [
    { "type": "breakfast", "recipeId": "rXX" },
    { "type": "snack",     "recipeId": "rXX" },
    { "type": "lunch",     "recipeId": "rXX" },
    { "type": "afternoon", "recipeId": "rXX" },
    { "type": "dinner",    "recipeId": "rXX" }
  ]},
  ... (7 ημέρες συνολικά)
]`;

// ── Optimize existing plan ───────────────────────────────────

async function optimizeWeekWithAI() {
  const btns = [
    document.getElementById('ai-optimize-btn'),
    document.getElementById('ai-optimize-btn-settings'),
  ].filter(Boolean);
  btns.forEach(b => { b.disabled = true; b.innerHTML = '⏳ Βελτιστοποίηση...'; });

  try {
    const recipesByType = _buildRecipesByType();
    const recipeGroups  = _buildRecipeGroups();

    const currentWeek = state.week.map(day => ({
      day: day.day,
      meals: day.meals.map(m => {
        const r = RECIPES_DB.find(x => x.id === m.recipeId);
        return { type: m.type, recipeId: m.recipeId, name: r ? r.name : m.recipeId };
      })
    }));

    const prompt = `Είσαι διατροφολόγος AI. Βελτιστοποίησε το παρακάτω εβδομαδιαίο πλάνο.

${_RULES}

ΔΙΑΘΕΣΙΜΕΣ ΣΥΝΤΑΓΕΣ:
breakfast: ${JSON.stringify(recipesByType['breakfast'] || [])}
snack: ${JSON.stringify(recipesByType['snack'] || [])}
lunch: ${JSON.stringify(recipesByType['lunch'] || [])}
afternoon: ${JSON.stringify(recipesByType['snack'] || [])}
dinner: ${JSON.stringify(recipesByType['dinner'] || [])}

ΠΛΗΡΟΦΟΡΙΕΣ ΣΥΝΤΑΓΩΝ:
${JSON.stringify(recipeGroups)}

ΤΡΕΧΟΝ ΠΛΑΝΟ (άλλαξε μόνο ό,τι χρειάζεται):
${JSON.stringify(currentWeek)}

${_FORMAT}`;

    const optimized = await _callGemini(prompt);
    _applyAIWeek(optimized);
    saveState();
    renderWeek();
    showToast('✅ Το πλάνο βελτιστοποιήθηκε με AI!');

  } catch (e) {
    console.error('AI optimize error:', e);
    showToast('❌ ' + (e.message || 'Σφάλμα AI'));
  } finally {
    const b1 = document.getElementById('ai-optimize-btn');
    const b2 = document.getElementById('ai-optimize-btn-settings');
    if (b1) { b1.disabled = false; b1.innerHTML = '✨ AI'; }
    if (b2) { b2.disabled = false; b2.innerHTML = '✨ Βελτιστοποίηση με AI'; }
  }
}

// ── Generate brand-new plan from settings ───────────────────

async function generateWeekWithAI() {
  const btn = document.getElementById('ai-generate-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = '⏳ Δημιουργία...'; }

  try {
    const recipesByType = _buildRecipesByType();
    const recipeGroups  = _buildRecipeGroups();
    const g = state.goals;
    const p = state.profile;

    const prompt = `Είσαι διατροφολόγος AI. Δημιούργησε εβδομαδιαίο πλάνο 7 ημερών από την αρχή.

ΣΤΟΧΟΙ ΧΡΗΣΤΗ:
- Θερμίδες/ημέρα: ${g.kcal} kcal
- Πρωτεΐνη: ${g.protein}g
- Υδατάνθρακες: ${g.carbs}g
- Λίπος: ${g.fat}g
- Βάρος: ${p.weight}kg, Ύψος: ${p.height}cm, Ηλικία: ${p.age}

${_RULES}

ΔΙΑΘΕΣΙΜΕΣ ΣΥΝΤΑΓΕΣ:
breakfast: ${JSON.stringify(recipesByType['breakfast'] || [])}
snack: ${JSON.stringify(recipesByType['snack'] || [])}
lunch: ${JSON.stringify(recipesByType['lunch'] || [])}
afternoon: ${JSON.stringify(recipesByType['snack'] || [])}
dinner: ${JSON.stringify(recipesByType['dinner'] || [])}

ΠΛΗΡΟΦΟΡΙΕΣ ΣΥΝΤΑΓΩΝ (hasYogurt, categories, meal type):
${JSON.stringify(recipeGroups)}

Επίλεξε συνταγές που μαζί πλησιάζουν τον ημερήσιο στόχο θερμίδων και μακροθρεπτικών.

${_FORMAT}`;

    const generated = await _callGemini(prompt);
    _applyAIWeek(generated);
    saveState();
    renderWeek();
    showToast('✅ Νέο πλάνο δημιουργήθηκε με AI!');

  } catch (e) {
    console.error('AI generate error:', e);
    showToast('❌ ' + (e.message || 'Σφάλμα AI'));
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '✨ Δημιουργία Πλάνου με AI'; }
  }
}
