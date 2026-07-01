// ============================================================
// i18n.js — Internationalization / Language support
// ============================================================

const LANGUAGES = {
  el: { label: 'Ελληνικά', flag: '🇬🇷' },
  en: { label: 'English',  flag: '🇬🇧' },
  es: { label: 'Español',  flag: '🇪🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
};

const I18N = {
  // ── Navigation labels ──
  nav_today:        { el: 'Ημερήσιο',     en: 'Daily',       es: 'Diario',      fr: 'Quotidien' },
  nav_week:         { el: 'Εβδομαδιαίο',  en: 'Weekly',      es: 'Semanal',     fr: 'Hebdomadaire' },
  nav_ideas:        { el: 'Ιδέες',        en: 'Ideas',       es: 'Ideas',       fr: 'Idées' },
  nav_builder:      { el: 'Σχεδιαστής',   en: 'Builder',     es: 'Diseñador',   fr: 'Planificateur' },
  nav_body:         { el: 'Μετρήσεις',    en: 'Measurements',es: 'Medidas',     fr: 'Mesures' },
  nav_stats:        { el: 'Στατιστικά',   en: 'Statistics',  es: 'Estadísticas',fr: 'Statistiques' },
  nav_settings:     { el: 'Ρυθμίσεις',    en: 'Settings',    es: 'Ajustes',     fr: 'Paramètres' },
  nav_week_short:   { el: 'Εβδομάδα',     en: 'Week',        es: 'Semana',      fr: 'Semaine' },
  nav_progress:     { el: 'Πρόοδος',      en: 'Progress',    es: 'Progreso',    fr: 'Progrès' },
  nav_menu:         { el: 'Μενού',        en: 'Menu',        es: 'Menú',        fr: 'Menu' },

  // ── Drawer sections ──
  drawer_main:      { el: 'Κύριο',        en: 'Main',        es: 'Principal',   fr: 'Principal' },
  drawer_nutrition: { el: 'Διατροφή',     en: 'Nutrition',   es: 'Nutrición',   fr: 'Nutrition' },
  drawer_health:    { el: 'Υγεία',        en: 'Health',      es: 'Salud',       fr: 'Santé' },
  drawer_settings:  { el: 'Ρυθμίσεις',    en: 'Settings',    es: 'Ajustes',     fr: 'Paramètres' },
  drawer_pdf:       { el: 'Εξαγωγή PDF',  en: 'Export PDF',  es: 'Exportar PDF',fr: 'Exporter PDF' },
  drawer_logout:    { el: 'Αποσύνδεση',   en: 'Sign out',    es: 'Cerrar sesión',fr: 'Déconnexion' },
  drawer_plan:      { el: 'Σχεδιαστής',   en: 'Planner',     es: 'Planificador',fr: 'Planificateur' },

  // ── Sidebar ──
  sidebar_subtitle: { el: 'Διαιτολόγιο',  en: 'Diet plan',   es: 'Dieta',       fr: 'Régime' },
  sidebar_pdf:      { el: '🖨️ PDF',       en: '🖨️ PDF',      es: '🖨️ PDF',      fr: '🖨️ PDF' },
  sidebar_logout:   { el: '⏏ Αποσύνδεση',en: '⏏ Sign out',  es: '⏏ Salir',     fr: '⏏ Déconnexion' },

  // ── Settings tabs ──
  settings_profile:     { el: 'Προφίλ',         en: 'Profile',         es: 'Perfil',         fr: 'Profil' },
  settings_optimize:    { el: 'Βελτίωση',        en: 'Optimize',        es: 'Optimizar',      fr: 'Optimiser' },
  settings_supplements: { el: 'Συμπληρώματα',    en: 'Supplements',     es: 'Suplementos',    fr: 'Suppléments' },
  settings_language:    { el: 'Γλώσσα',          en: 'Language',        es: 'Idioma',         fr: 'Langue' },
  settings_feedback:    { el: 'Σχόλια & Δωρεά',  en: 'Feedback & Donate',es: 'Opinión & Donación',fr: 'Avis & Don' },
  settings_save:        { el: '💾 Αποθήκευση ρυθμίσεων', en: '💾 Save settings', es: '💾 Guardar ajustes', fr: '💾 Enregistrer' },
  settings_saving:      { el: 'Αποθήκευση...',       en: 'Saving...',          es: 'Guardando...',      fr: 'Enregistrement...' },
  settings_saved:       { el: '✅ Οι ρυθμίσεις αποθηκεύτηκαν!', en: '✅ Settings saved!', es: '✅ ¡Ajustes guardados!', fr: '✅ Paramètres enregistrés !' },
  settings_save_error:  { el: '❌ Σφάλμα αποθήκευσης. Δοκιμάστε ξανά.', en: '❌ Save error. Try again.', es: '❌ Error al guardar. Inténtalo de nuevo.', fr: '❌ Erreur d\'enregistrement. Réessayez.' },

  // ── Language section ──
  lang_title:       { el: 'Γλώσσα Εφαρμογής', en: 'App Language', es: 'Idioma de la app', fr: 'Langue de l\'application' },
  lang_subtitle:    { el: 'Επιλέξτε τη γλώσσα της εφαρμογής', en: 'Choose your app language', es: 'Elige el idioma de la aplicación', fr: 'Choisissez la langue de l\'application' },

  // ── Supplements ──
  suppl_title:      { el: 'Συμπληρώματα διατροφής', en: 'Dietary supplements', es: 'Suplementos dietéticos', fr: 'Compléments alimentaires' },
  suppl_subtitle:   { el: 'Ενεργοποίησε για να εμφανίζονται στην ημερήσια σελίδα', en: 'Enable to show on the daily page', es: 'Activa para mostrar en la página diaria', fr: 'Activer pour afficher sur la page quotidienne' },
  suppl_choose:     { el: 'Επίλεξε τα συμπληρώματά σου', en: 'Choose your supplements', es: 'Elige tus suplementos', fr: 'Choisissez vos suppléments' },

  // ── Profile ──
  prof_edit_hint:   { el: 'Πάτα για επεξεργασία ✏️', en: 'Tap to edit ✏️', es: 'Toca para editar ✏️', fr: 'Appuyez pour modifier ✏️' },
  prof_body:        { el: '🏃 Σωματικά Στοιχεία', en: '🏃 Body Data', es: '🏃 Datos corporales', fr: '🏃 Données corporelles' },
  prof_weight:      { el: 'Βάρος (kg)', en: 'Weight (kg)', es: 'Peso (kg)', fr: 'Poids (kg)' },
  prof_height:      { el: 'Ύψος (cm)', en: 'Height (cm)', es: 'Altura (cm)', fr: 'Taille (cm)' },
  prof_age:         { el: 'Ηλικία', en: 'Age', es: 'Edad', fr: 'Âge' },
  prof_gender:      { el: 'Φύλο', en: 'Gender', es: 'Sexo', fr: 'Sexe' },
  prof_male:        { el: '👤 Άνδρας', en: '👤 Male', es: '👤 Hombre', fr: '👤 Homme' },
  prof_female:      { el: '👤 Γυναίκα', en: '👤 Female', es: '👤 Mujer', fr: '👤 Femme' },
  prof_activity:    { el: 'Επίπεδο Δραστηριότητας (προπονήσεις)', en: 'Activity Level (workouts)', es: 'Nivel de actividad (entrenamientos)', fr: 'Niveau d\'activité (entraînements)' },
  prof_steps:       { el: '👣 Μέσα Βήματα / Ημέρα', en: '👣 Avg Steps / Day', es: '👣 Pasos medios / Día', fr: '👣 Pas moyens / Jour' },

  // ── Feedback section ──
  feedback_title:        { el: '💬 Σχόλια & Πρόταση', en: '💬 Feedback & Suggestion', es: '💬 Comentarios y Sugerencia', fr: '💬 Avis et Suggestion' },
  feedback_subtitle:     { el: 'Πες μας τη γνώμη σου για να βελτιώσουμε την εφαρμογή!', en: 'Tell us your thoughts to help us improve the app!', es: '¡Dinos tu opinión para mejorar la app!', fr: 'Dites-nous votre avis pour améliorer l\'application !' },
  feedback_placeholder:  { el: 'Γράψε εδώ τo σχόλιό σου, τη γνώμη σου ή μια ιδέα...', en: 'Write your comment, opinion or idea here...', es: 'Escribe aquí tu comentario, opinión o idea...', fr: 'Écrivez ici votre commentaire, avis ou idée...' },
  feedback_send:         { el: '📤 Αποστολή Σχολίου', en: '📤 Send Feedback', es: '📤 Enviar Comentario', fr: '📤 Envoyer l\'avis' },
  feedback_sending:      { el: 'Αποστολή...', en: 'Sending...', es: 'Enviando...', fr: 'Envoi...' },
  feedback_sent:         { el: '✅ Το σχόλιό σου στάλθηκε! Ευχαριστούμε!', en: '✅ Your feedback was sent! Thank you!', es: '✅ ¡Tu comentario fue enviado! ¡Gracias!', fr: '✅ Votre avis a été envoyé ! Merci !' },
  feedback_empty:        { el: '⚠️ Γράψε κάτι πριν το στείλεις.', en: '⚠️ Write something before sending.', es: '⚠️ Escribe algo antes de enviar.', fr: '⚠️ Écrivez quelque chose avant d\'envoyer.' },
  feedback_error:        { el: '❌ Σφάλμα αποστολής. Δοκιμάστε ξανά.', en: '❌ Send error. Try again.', es: '❌ Error al enviar. Inténtalo de nuevo.', fr: '❌ Erreur d\'envoi. Réessayez.' },
  feedback_type_label:   { el: 'Τύπος:', en: 'Type:', es: 'Tipo:', fr: 'Type :' },
  feedback_type_general: { el: 'Γενικό', en: 'General', es: 'General', fr: 'Général' },
  feedback_type_bug:     { el: 'Πρόβλημα', en: 'Bug', es: 'Error', fr: 'Problème' },
  feedback_type_idea:    { el: 'Ιδέα', en: 'Idea', es: 'Idea', fr: 'Idée' },

  // ── Donate section ──
  donate_title:    { el: '❤️ Υποστήριξε το VIVON', en: '❤️ Support VIVON', es: '❤️ Apoya VIVON', fr: '❤️ Soutenez VIVON' },
  donate_subtitle: { el: 'Αν σου αρέσει η εφαρμογή, μπορείς να με στηρίξεις με μια μικρή δωρεά!', en: 'If you enjoy the app, you can support me with a small donation!', es: 'Si te gusta la app, ¡puedes apoyarme con una pequeña donación!', fr: 'Si vous aimez l\'application, vous pouvez me soutenir avec un petit don !' },
  donate_revolut:  { el: '🔄 Δωρεά μέσω Revolut', en: '🔄 Donate via Revolut', es: '🔄 Donar vía Revolut', fr: '🔄 Don via Revolut' },
  donate_thanks:   { el: 'Κάθε βοήθεια μετράει! 🙏', en: 'Every bit helps! 🙏', es: '¡Cualquier ayuda cuenta! 🙏', fr: 'Chaque aide compte ! 🙏' },

  // ── Disclaimer (shown at registration) ──
  disclaimer_title: {
    el: '⚠️ Σημαντική Ανακοίνωση',
    en: '⚠️ Important Notice',
    es: '⚠️ Aviso Importante',
    fr: '⚠️ Avis Important',
  },
  disclaimer_body: {
    el: 'Το VIVON είναι εφαρμογή καταγραφής διατροφής και προσωπικής παρακολούθησης. ΔΕΝ παρέχει ιατρικές, διαιτολογικές ή άλλες επαγγελματικές συμβουλές. Οι πληροφορίες και υπολογισμοί στην εφαρμογή είναι ενδεικτικοί και ενδέχεται να περιέχουν ανακρίβειες. ΔΕΝ αντικαθιστούν τη γνώμη ιατρού, διαιτολόγου ή άλλου ειδικού. Χρησιμοποιείτε την εφαρμογή αποκλειστικά με δική σας ευθύνη. Σε περίπτωση υγειονομικών ανησυχιών, συμβουλευτείτε πάντα ειδικό.',
    en: 'VIVON is a personal nutrition tracking app. It does NOT provide medical, dietary, or professional advice of any kind. All information and calculations are indicative only and may contain inaccuracies. Nothing in this app should be considered a substitute for advice from a qualified doctor, dietitian, or healthcare professional. You use this app entirely at your own risk. If you have any health concerns, always consult a qualified professional.',
    es: 'VIVON es una aplicación personal de seguimiento nutricional. NO proporciona asesoramiento médico, dietético ni profesional de ningún tipo. Toda la información y los cálculos son meramente indicativos y pueden contener inexactitudes. Nada en esta aplicación debe considerarse un sustituto del consejo de un médico, dietista u otro profesional de la salud. Usas esta aplicación bajo tu propia responsabilidad. Si tienes alguna preocupación de salud, consulta siempre a un profesional.',
    fr: 'VIVON est une application personnelle de suivi nutritionnel. Elle ne fournit AUCUN conseil médical, diététique ou professionnel. Toutes les informations et calculs sont indicatifs et peuvent contenir des inexactitudes. Rien dans cette application ne remplace l\'avis d\'un médecin, diététicien ou autre professionnel de santé qualifié. Vous utilisez cette application entièrement à vos propres risques. En cas de préoccupation de santé, consultez toujours un professionnel qualifié.',
  },
  disclaimer_check: {
    el: 'Διάβασα και αποδέχομαι τους παραπάνω όρους. Κατανοώ ότι η εφαρμογή δεν παρέχει ιατρικές συμβουλές.',
    en: 'I have read and accept the above notice. I understand this app does not provide medical advice.',
    es: 'He leído y acepto el aviso anterior. Entiendo que esta aplicación no proporciona asesoramiento médico.',
    fr: 'J\'ai lu et j\'accepte l\'avis ci-dessus. Je comprends que cette application ne fournit pas de conseils médicaux.',
  },
  disclaimer_required: {
    el: 'Πρέπει να αποδεχτείς τους όρους για να εγγραφείς.',
    en: 'You must accept the notice to create an account.',
    es: 'Debes aceptar el aviso para crear una cuenta.',
    fr: 'Vous devez accepter l\'avis pour créer un compte.',
  },

  // ── Meal types ──
  meal_breakfast:   { el: 'Πρωινό',       en: 'Breakfast',   es: 'Desayuno',    fr: 'Petit-déjeuner' },
  meal_snack:       { el: 'Δεκατιανό',    en: 'Snack',       es: 'Merienda',    fr: 'Collation' },
  meal_lunch:       { el: 'Μεσημεριανό',  en: 'Lunch',       es: 'Almuerzo',    fr: 'Déjeuner' },
  meal_afternoon:   { el: 'Απογευματινό', en: 'Afternoon',   es: 'Merienda tarde', fr: 'Goûter' },
  meal_dinner:      { el: 'Βραδινό',      en: 'Dinner',      es: 'Cena',        fr: 'Dîner' },

  // Plural / header forms
  meal_breakfasts:  { el: 'Πρωινά',       en: 'Breakfasts',  es: 'Desayunos',   fr: 'Petits-déjeuners' },
  meal_snacks:      { el: 'Δεκατιανά',    en: 'Snacks',      es: 'Meriendas',   fr: 'Collations' },
  meal_lunches:     { el: 'Μεσημεριανά',  en: 'Lunches',     es: 'Almuerzos',   fr: 'Déjeuners' },
  meal_afternoons:  { el: 'Απογευματινά', en: 'Afternoons',  es: 'Meriendas tarde', fr: 'Goûters' },
  meal_dinners:     { el: 'Βραδινά',      en: 'Dinners',     es: 'Cenas',       fr: 'Dîners' },

  // ── Activity levels ──
  activity_0: { el: 'Καμία (0 προπονήσεις/εβδ.)',         en: 'None (0 workouts/week)',            es: 'Ninguna (0 entrenamientos/sem.)',   fr: 'Aucune (0 entraînements/sem.)' },
  activity_2: { el: 'Ελαφριά (1–2 προπονήσεις/εβδ.)',    en: 'Light (1–2 workouts/week)',         es: 'Ligera (1–2 entrenamientos/sem.)', fr: 'Légère (1–2 entraînements/sem.)' },
  activity_3: { el: 'Μέτρια (3 προπονήσεις/εβδ.)',       en: 'Moderate (3 workouts/week)',        es: 'Moderada (3 entrenamientos/sem.)', fr: 'Modérée (3 entraînements/sem.)' },
  activity_5: { el: 'Έντονη (4–5 προπονήσεις/εβδ.)',     en: 'Intense (4–5 workouts/week)',       es: 'Intensa (4–5 entrenamientos/sem.)',fr: 'Intense (4–5 entraînements/sem.)' },
  activity_7: { el: 'Πολύ έντονη (6–7 προπονήσεις/εβδ.)',en: 'Very intense (6–7 workouts/week)', es: 'Muy intensa (6–7 entren./sem.)',   fr: 'Très intense (6–7 entraîn./sem.)' },

  // ── Food categories ──
  cat_protein: { el: '🥩 Πρωτεΐνες',       en: '🥩 Proteins',       es: '🥩 Proteínas',      fr: '🥩 Protéines' },
  cat_carbs:   { el: '🍚 Υδατάνθρακες',    en: '🍚 Carbohydrates',  es: '🍚 Carbohidratos',  fr: '🍚 Glucides' },
  cat_veggie:  { el: '🥦 Λαχανικά',        en: '🥦 Vegetables',     es: '🥦 Verduras',       fr: '🥦 Légumes' },
  cat_fat:     { el: '🫒 Λιπαρά',          en: '🫒 Fats',           es: '🫒 Grasas',         fr: '🫒 Lipides' },
  cat_dairy:   { el: '🥛 Γαλακτοκομικά',   en: '🥛 Dairy',          es: '🥛 Lácteos',        fr: '🥛 Produits laitiers' },
  cat_fruit:   { el: '🍎 Φρούτα',          en: '🍎 Fruits',         es: '🍎 Frutas',         fr: '🍎 Fruits' },
  cat_other:   { el: '🧂 Άλλα',            en: '🧂 Other',          es: '🧂 Otros',          fr: '🧂 Autres' },

  // ── Supplement categories ──
  suppl_cat_sport:     { el: 'Αθλητική Απόδοση', en: 'Sports Performance', es: 'Rendimiento deportivo', fr: 'Performance sportive' },
  suppl_cat_health:    { el: 'Υγεία',            en: 'Health',             es: 'Salud',                 fr: 'Santé' },
  suppl_cat_immunity:  { el: 'Ανοσοποιητικό',    en: 'Immunity',           es: 'Inmunidad',             fr: 'Immunité' },
  suppl_cat_joint:     { el: 'Αρθρώσεις',        en: 'Joint Health',       es: 'Articulaciones',        fr: 'Articulations' },
  suppl_cat_hair:      { el: 'Μαλλιά & Νύχια',   en: 'Hair & Nails',       es: 'Cabello y uñas',        fr: 'Cheveux et ongles' },

  // ── Gender ──
  gender_male:   { el: '👤 Άνδρας',  en: '👤 Male',   es: '👤 Hombre', fr: '👤 Homme' },
  gender_female: { el: '👤 Γυναίκα', en: '👤 Female', es: '👤 Mujer',  fr: '👤 Femme' },

  // ── Day names ──
  day_sun: { el: 'Κυριακή',   en: 'Sunday',    es: 'Domingo',    fr: 'Dimanche' },
  day_mon: { el: 'Δευτέρα',   en: 'Monday',    es: 'Lunes',      fr: 'Lundi' },
  day_tue: { el: 'Τρίτη',     en: 'Tuesday',   es: 'Martes',     fr: 'Mardi' },
  day_wed: { el: 'Τετάρτη',   en: 'Wednesday', es: 'Miércoles',  fr: 'Mercredi' },
  day_thu: { el: 'Πέμπτη',    en: 'Thursday',  es: 'Jueves',     fr: 'Jeudi' },
  day_fri: { el: 'Παρασκευή', en: 'Friday',    es: 'Viernes',    fr: 'Vendredi' },
  day_sat: { el: 'Σάββατο',   en: 'Saturday',  es: 'Sábado',     fr: 'Samedi' },

  // ── Month abbreviations ──
  month_jan: { el: 'Ιαν', en: 'Jan', es: 'Ene', fr: 'Jan' },
  month_feb: { el: 'Φεβ', en: 'Feb', es: 'Feb', fr: 'Fév' },
  month_mar: { el: 'Μαρ', en: 'Mar', es: 'Mar', fr: 'Mar' },
  month_apr: { el: 'Απρ', en: 'Apr', es: 'Abr', fr: 'Avr' },
  month_may: { el: 'Μαΐ', en: 'May', es: 'May', fr: 'Mai' },
  month_jun: { el: 'Ιουν', en: 'Jun', es: 'Jun', fr: 'Juin' },
  month_jul: { el: 'Ιουλ', en: 'Jul', es: 'Jul', fr: 'Juil' },
  month_aug: { el: 'Αυγ', en: 'Aug', es: 'Ago', fr: 'Août' },
  month_sep: { el: 'Σεπ', en: 'Sep', es: 'Sep', fr: 'Sep' },
  month_oct: { el: 'Οκτ', en: 'Oct', es: 'Oct', fr: 'Oct' },
  month_nov: { el: 'Νοε', en: 'Nov', es: 'Nov', fr: 'Nov' },
  month_dec: { el: 'Δεκ', en: 'Dec', es: 'Dic', fr: 'Déc' },

  // ── Common UI actions / labels ──
  btn_save:       { el: 'Αποθήκευση',   en: 'Save',        es: 'Guardar',    fr: 'Enregistrer' },
  btn_cancel:     { el: 'Ακύρωση',      en: 'Cancel',      es: 'Cancelar',   fr: 'Annuler' },
  btn_delete:     { el: 'Διαγραφή',     en: 'Delete',      es: 'Eliminar',   fr: 'Supprimer' },
  btn_edit:       { el: 'Επεξεργασία',  en: 'Edit',        es: 'Editar',     fr: 'Modifier' },
  btn_add:        { el: 'Προσθήκη',     en: 'Add',         es: 'Añadir',     fr: 'Ajouter' },
  btn_close:      { el: 'Κλείσιμο',     en: 'Close',       es: 'Cerrar',     fr: 'Fermer' },
  btn_confirm:    { el: 'Επιβεβαίωση',  en: 'Confirm',     es: 'Confirmar',  fr: 'Confirmer' },
  btn_back:       { el: '← Πίσω',       en: '← Back',      es: '← Atrás',    fr: '← Retour' },
  btn_next:       { el: 'Επόμενο →',    en: 'Next →',      es: 'Siguiente →',fr: 'Suivant →' },
  btn_done:       { el: 'Ολοκλήρωση ✓', en: 'Done ✓',      es: 'Listo ✓',    fr: 'Terminé ✓' },
  btn_generate:   { el: '🚀 Δημιουργία πλάνου', en: '🚀 Generate plan', es: '🚀 Generar plan', fr: '🚀 Générer le plan' },
  btn_new_recipe: { el: '+ Νέα συνταγή', en: '+ New recipe', es: '+ Nueva receta', fr: '+ Nouvelle recette' },
  btn_new_food:   { el: '➕ Νέα', en: '➕ New', es: '➕ Nuevo', fr: '➕ Nouveau' },

  // ── Search / empty states ──
  search_recipe:  { el: 'Αναζήτηση συνταγής...', en: 'Search recipe...', es: 'Buscar receta...', fr: 'Rechercher une recette...' },
  search_food:    { el: 'Αναζήτηση τροφής...',   en: 'Search food...',   es: 'Buscar alimento...', fr: 'Rechercher un aliment...' },
  search_meal:    { el: 'Αναζήτηση γεύματος...', en: 'Search meal...',   es: 'Buscar comida...', fr: 'Rechercher un repas...' },
  empty_meals:    { el: 'Δεν βρέθηκαν γεύματα',  en: 'No meals found',   es: 'No se encontraron comidas', fr: 'Aucun repas trouvé' },
  empty_recipes:  { el: 'Δεν βρέθηκαν συνταγές', en: 'No recipes found', es: 'No se encontraron recetas', fr: 'Aucune recette trouvée' },

  // ── Recipe / Food page ──
  recipes_title:    { el: '📖 Συνταγές',       en: '📖 Recipes',      es: '📖 Recetas',       fr: '📖 Recettes' },
  foods_title:      { el: '🔬 Λεξικό Τροφών',  en: '🔬 Food Lexicon', es: '🔬 Léxico de alimentos', fr: '🔬 Lexique alimentaire' },
  filter_all:       { el: 'Όλες',              en: 'All',             es: 'Todas',            fr: 'Toutes' },
  recipe_serving:   { el: 'Σερβίρισμα',        en: 'Serving',         es: 'Servicio',         fr: 'Service' },
  recipe_instruct:  { el: 'Οδηγίες',           en: 'Instructions',    es: 'Instrucciones',    fr: 'Instructions' },
  recipe_ingred:    { el: 'Υλικά',             en: 'Ingredients',     es: 'Ingredientes',     fr: 'Ingrédients' },
  add_to_day:       { el: 'Προσθήκη στην ημέρα', en: 'Add to day',    es: 'Añadir al día',    fr: 'Ajouter au jour' },
  add_to_week:      { el: 'Προσθήκη στην εβδομάδα', en: 'Add to week', es: 'Añadir a la semana', fr: 'Ajouter à la semaine' },

  // ── Today page ──
  today_no_plan:    { el: 'Δεν έχεις πλάνο για σήμερα', en: 'No plan for today', es: 'Sin plan para hoy', fr: 'Pas de plan pour aujourd\'hui' },
  today_create_plan: { el: 'Δημιούργησε πλάνο', en: 'Create plan', es: 'Crear plan', fr: 'Créer un plan' },
  water_note_label: { el: '💧 Νερό', en: '💧 Water', es: '💧 Agua', fr: '💧 Eau' },
  mark_done:        { el: 'Ολοκληρώθηκε', en: 'Done', es: 'Listo', fr: 'Terminé' },

  // ── Week page ──
  week_avg_intake:  { el: 'Μέση πρόσληψη',          en: 'Avg intake',          es: 'Ingesta media',       fr: 'Apport moyen' },
  week_balance_good: { el: 'Εξαιρετική ισορροπία',  en: 'Excellent balance',   es: 'Equilibrio excelente',fr: 'Excellent équilibre' },
  week_balance_low:  { el: 'Λίγο χαμηλά',           en: 'A bit low',           es: 'Un poco bajo',        fr: 'Un peu bas' },
  week_balance_high: { el: 'Λίγο υπερβολικά',       en: 'A bit over',          es: 'Un poco alto',        fr: 'Un peu trop' },
  week_keep_going:   { el: 'Συνέχισε έτσι',         en: 'Keep it up',          es: '¡Sigue así!',         fr: 'Continue comme ça' },
  week_increase_kcal:{ el: 'Αύξησε λίγο τις θερμίδες', en: 'Increase calories a bit', es: 'Aumenta un poco las calorías', fr: 'Augmente un peu les calories' },
  week_decrease_kcal:{ el: 'Μείωσε λίγο τις θερμίδες', en: 'Decrease calories a bit', es: 'Reduce un poco las calorías', fr: 'Réduis un peu les calories' },
  week_day_prefix:   { el: 'Ημ',                    en: 'D',                   es: 'D',                   fr: 'J' },
  week_reset_confirm: { el: 'Επαναφορά εβδομαδιαίου πλάνου στις προεπιλογές;', en: 'Reset weekly plan to defaults?', es: '¿Restablecer el plan semanal?', fr: 'Réinitialiser le plan hebdomadaire ?' },
  week_reset_done:   { el: '✅ Εβδομαδιαίο πλάνο επαναφέρθηκε στις προεπιλογές', en: '✅ Weekly plan reset to defaults', es: '✅ Plan semanal restablecido', fr: '✅ Plan hebdomadaire réinitialisé' },

  // ── Wizard ──
  wizard_style_title:   { el: '🍽️ Στυλ διατροφής',   en: '🍽️ Eating style',    es: '🍽️ Estilo alimentario', fr: '🍽️ Style alimentaire' },
  wizard_step_label:    { el: 'Βήμα {n} από {total} — Επίλεξε στυλ', en: 'Step {n} of {total} — Choose style', es: 'Paso {n} de {total} — Elige estilo', fr: 'Étape {n} sur {total} — Choisir le style' },
  wizard_style_desc:    { el: 'Τα απλά γεύματα είναι εύκολα στην παρασκευή. Τα gourmet έχουν περισσότερη διαδικασία.', en: 'Simple meals are easy to prepare. Gourmet meals require more work.', es: 'Las comidas simples son fáciles. Las gourmet requieren más elaboración.', fr: 'Les repas simples sont faciles. Les gourmet demandent plus de travail.' },
  wizard_simple_title:  { el: 'Απλά γεύματα', en: 'Simple meals', es: 'Comidas simples', fr: 'Repas simples' },
  wizard_simple_sub:    { el: 'Κοτόπουλο, ρύζι, πατάτα, αυγά, σαλάτες — γρήγορα & χωρίς μεγάλη διαδικασία', en: 'Chicken, rice, potato, eggs, salads — quick & easy', es: 'Pollo, arroz, patata, huevos, ensaladas — rápido y fácil', fr: 'Poulet, riz, pomme de terre, œufs, salades — rapide et facile' },
  wizard_mixed_title:   { el: 'Μεικτά', en: 'Mixed', es: 'Mixto', fr: 'Mixte' },
  wizard_mixed_sub:     { el: 'Συνδυασμός απλών και σύνθετων — καθημερινή ισορροπία', en: 'Mix of simple and complex — daily balance', es: 'Combinación de simples y complejas — equilibrio diario', fr: 'Mélange de simples et complexes — équilibre quotidien' },
  wizard_gourmet_title: { el: 'Gourmet', en: 'Gourmet', es: 'Gourmet', fr: 'Gourmet' },
  wizard_gourmet_sub:   { el: 'Μουσακάς, avocado toast, shakshuka, ποικιλία υλικών — για όταν έχεις χρόνο', en: 'Moussaka, avocado toast, shakshuka, variety — for when you have time', es: 'Musaka, tostada de aguacate, shakshuka, variedad — para cuando tienes tiempo', fr: 'Moussaka, toast avocat, shakshuka, variété — pour quand tu as le temps' },
  wizard_deselect:      { el: 'Αποεπίλεξε τα γεύματα που ΔΕΝ θέλεις', en: 'Deselect meals you do NOT want', es: 'Deselecciona las comidas que NO quieres', fr: 'Désélectionne les repas que tu NE veux PAS' },
  wizard_meal_sublabel: { el: 'Αποεπίλεξε τα γεύματα που ΔΕΝ θέλεις στο {slot}.', en: 'Deselect meals you do NOT want for {slot}.', es: 'Deselecciona las comidas que NO quieres en {slot}.', fr: 'Désélectionne les repas que tu NE veux PAS pour {slot}.' },
  wizard_confirm_title: { el: '✅ Επιβεβαίωση πλάνου', en: '✅ Confirm plan', es: '✅ Confirmar plan', fr: '✅ Confirmer le plan' },
  wizard_confirm_sub:   { el: 'Το πλάνο θα δημιουργηθεί με τις επιλογές σου.', en: 'The plan will be created with your choices.', es: 'El plan se creará con tus opciones.', fr: 'Le plan sera créé avec tes choix.' },

  // ── Stats / Progress ──
  stats_title:      { el: '📊 Στατιστικά', en: '📊 Statistics', es: '📊 Estadísticas', fr: '📊 Statistiques' },
  stats_kcal:       { el: 'Θερμίδες', en: 'Calories', es: 'Calorías', fr: 'Calories' },
  stats_protein:    { el: 'Πρωτεΐνη', en: 'Protein',  es: 'Proteína', fr: 'Protéines' },
  stats_carbs:      { el: 'Υδατ.',    en: 'Carbs',    es: 'Carbos.',  fr: 'Glucides' },
  stats_fat:        { el: 'Λιπαρά',   en: 'Fat',      es: 'Grasas',   fr: 'Lipides' },
  stats_goal:       { el: 'Στόχος',   en: 'Goal',     es: 'Objetivo', fr: 'Objectif' },
  stats_avg:        { el: 'Μέσος Όρος', en: 'Average', es: 'Promedio', fr: 'Moyenne' },
  stats_week:       { el: 'Εβδομάδα',  en: 'Week',    es: 'Semana',   fr: 'Semaine' },
  stats_day:        { el: 'Ημέρα',     en: 'Day',     es: 'Día',      fr: 'Jour' },

  // ── BMI labels ──
  bmi_underweight:  { el: 'Λιποβαρής',      en: 'Underweight',    es: 'Bajo peso',      fr: 'Insuffisance pondérale' },
  bmi_normal:       { el: 'Κανονικό',       en: 'Normal',         es: 'Normal',         fr: 'Normal' },
  bmi_overweight:   { el: 'Υπέρβαρος',      en: 'Overweight',     es: 'Sobrepeso',      fr: 'Surpoids' },
  bmi_obese:        { el: 'Παχυσαρκία',     en: 'Obese',          es: 'Obesidad',       fr: 'Obésité' },

  // ── Profile / Optimize ──
  prof_custom_tdee:     { el: 'Χειροκίνητο TDEE', en: 'Manual TDEE', es: 'TDEE manual', fr: 'TDEE manuel' },
  prof_first_meal:      { el: 'Ώρα πρώτου γεύματος', en: 'First meal time', es: 'Hora del primer plato', fr: 'Heure du premier repas' },
  prof_name_placeholder:{ el: 'Το όνομά σου...', en: 'Your name...', es: 'Tu nombre...', fr: 'Ton prénom...' },

  // ── Optimize / Goals ──
  opt_title:        { el: 'Βελτίωση',              en: 'Optimize',            es: 'Optimizar',            fr: 'Optimiser' },
  opt_goal_kcal:    { el: 'Στόχος Θερμίδων',       en: 'Calorie Goal',        es: 'Objetivo calórico',    fr: 'Objectif calorique' },
  opt_goal_protein: { el: 'Στόχος Πρωτεΐνης (g)',  en: 'Protein Goal (g)',    es: 'Objetivo proteína (g)',fr: 'Objectif protéines (g)' },
  opt_goal_carbs:   { el: 'Στόχος Υδατανθράκων (g)',en: 'Carb Goal (g)',      es: 'Objetivo carbos (g)',  fr: 'Objectif glucides (g)' },
  opt_goal_fat:     { el: 'Στόχος Λιπαρών (g)',    en: 'Fat Goal (g)',        es: 'Objetivo grasas (g)',  fr: 'Objectif lipides (g)' },

  // ── Body / Measurements ──
  body_title:       { el: 'Μετρήσεις',   en: 'Measurements', es: 'Medidas',    fr: 'Mesures' },
  body_weight:      { el: 'Βάρος',       en: 'Weight',       es: 'Peso',       fr: 'Poids' },
  body_log_empty:   { el: 'Δεν υπάρχουν μετρήσεις ακόμα', en: 'No measurements yet', es: 'Sin medidas aún', fr: 'Pas encore de mesures' },

  // ── Toasts / notifications ──
  toast_saved:      { el: '✅ Αποθηκεύτηκε!',   en: '✅ Saved!',          es: '✅ ¡Guardado!',      fr: '✅ Enregistré !' },
  toast_deleted:    { el: '🗑️ Διαγράφηκε',     en: '🗑️ Deleted',        es: '🗑️ Eliminado',      fr: '🗑️ Supprimé' },
  toast_added:      { el: '✅ Προστέθηκε!',     en: '✅ Added!',           es: '✅ ¡Añadido!',       fr: '✅ Ajouté !' },
  toast_error:      { el: '❌ Σφάλμα',          en: '❌ Error',            es: '❌ Error',            fr: '❌ Erreur' },
  toast_plan_created: { el: '✅ Πλάνο δημιουργήθηκε!', en: '✅ Plan created!', es: '✅ ¡Plan creado!', fr: '✅ Plan créé !' },

  // ── Supplement detail fields ──
  suppl_qty:      { el: 'Δοσολογία',    en: 'Dosage',       es: 'Dosis',        fr: 'Dosage' },
  suppl_timing:   { el: 'Χρονισμός',    en: 'Timing',       es: 'Momento',      fr: 'Moment' },
  suppl_intake:   { el: 'Λήψη',         en: 'Intake',       es: 'Ingesta',      fr: 'Prise' },
  suppl_evidence: { el: 'Αποδείξεις',   en: 'Evidence',     es: 'Evidencia',    fr: 'Preuves' },
  suppl_tip:      { el: 'Συμβουλή',     en: 'Tip',          es: 'Consejo',      fr: 'Conseil' },
  suppl_boosts:   { el: 'Ενισχύεται με', en: 'Boosted by',  es: 'Potenciado por',fr: 'Renforcé par' },
  suppl_reduces:  { el: 'Μειώνεται από', en: 'Reduced by',  es: 'Reducido por', fr: 'Réduit par' },
  suppl_avoid:    { el: 'Αποφύγετε',    en: 'Avoid',        es: 'Evitar',       fr: 'Éviter' },
  suppl_drinks:   { el: 'Ροφήματα',     en: 'Drinks',       es: 'Bebidas',      fr: 'Boissons' },
  suppl_gap:      { el: 'Απόσταση',     en: 'Gap',          es: 'Intervalo',    fr: 'Intervalle' },
  suppl_ideal:    { el: 'Ιδανικό',      en: 'Ideal',        es: 'Ideal',        fr: 'Idéal' },

  // ── Evidence levels ──
  evidence_high:   { el: 'Υψηλή',  en: 'High',   es: 'Alta',  fr: 'Élevée' },
  evidence_medium: { el: 'Μέτρια', en: 'Medium', es: 'Media', fr: 'Moyenne' },
  evidence_low:    { el: 'Χαμηλή', en: 'Low',    es: 'Baja',  fr: 'Faible' },

  // ── Auth page ──
  auth_login:          { el: 'Σύνδεση',              en: 'Sign in',              es: 'Iniciar sesión',       fr: 'Connexion' },
  auth_register:       { el: 'Εγγραφή',              en: 'Create account',       es: 'Crear cuenta',         fr: 'Créer un compte' },
  auth_email:          { el: 'Email',                en: 'Email',                es: 'Correo',               fr: 'E-mail' },
  auth_password:       { el: 'Κωδικός',              en: 'Password',             es: 'Contraseña',           fr: 'Mot de passe' },
  auth_name:           { el: 'Όνομα',                en: 'Name',                 es: 'Nombre',               fr: 'Prénom' },
  auth_forgot:         { el: 'Ξέχασες τον κωδικό;', en: 'Forgot password?',     es: '¿Olvidaste tu contraseña?', fr: 'Mot de passe oublié ?' },
  auth_reset_send:     { el: 'Αποστολή',             en: 'Send',                 es: 'Enviar',               fr: 'Envoyer' },
  auth_reset_sent:     { el: '✅ Email επαναφοράς εστάλη!', en: '✅ Reset email sent!', es: '✅ ¡Email de restablecimiento enviado!', fr: '✅ E-mail de réinitialisation envoyé !' },
  auth_error_generic:  { el: '❌ Σφάλμα. Δοκιμάστε ξανά.', en: '❌ Error. Try again.', es: '❌ Error. Inténtalo de nuevo.', fr: '❌ Erreur. Réessayez.' },
  auth_no_account:     { el: 'Δεν έχεις λογαριασμό;', en: 'No account?',         es: '¿Sin cuenta?',         fr: 'Pas de compte ?' },
  auth_have_account:   { el: 'Έχεις ήδη λογαριασμό;', en: 'Already have an account?', es: '¿Ya tienes cuenta?', fr: 'Déjà un compte ?' },

  // ── Units ──
  unit_piece:  { el: 'τεμ.', en: 'pc',  es: 'u.',  fr: 'pièce' },
  unit_tsp:    { el: 'κ.γ.', en: 'tsp', es: 'cdta.',fr: 'c.à.c.' },
  unit_tbsp:   { el: 'κ.σ.', en: 'tbsp',es: 'cda.', fr: 'c.à.s.' },

  // ── Macro abbreviations for display ──
  macro_p_abbr: { el: 'Π', en: 'P', es: 'P', fr: 'P' },
  macro_c_abbr: { el: 'Υ', en: 'C', es: 'C', fr: 'G' },
  macro_f_abbr: { el: 'Λ', en: 'F', es: 'G', fr: 'L' },

  // ── Builder / Planner page ──
  builder_title:      { el: 'Σχεδιαστής Ημέρας', en: 'Day Planner', es: 'Planificador diario', fr: 'Planificateur journalier' },
  builder_your_day:   { el: 'Η μέρα σου',         en: 'Your day',    es: 'Tu día',              fr: 'Ta journée' },
  builder_templates:  { el: 'Πρότυπα',             en: 'Templates',   es: 'Plantillas',          fr: 'Modèles' },
  builder_save_tpl:   { el: '💾 Αποθήκευση ως πρότυπο', en: '💾 Save as template', es: '💾 Guardar como plantilla', fr: '💾 Enregistrer comme modèle' },
  builder_apply_day:  { el: 'Εφαρμογή στην εβδομάδα', en: 'Apply to week', es: 'Aplicar a la semana', fr: 'Appliquer à la semaine' },

  // ── Macro display labels (full) ──
  macro_protein:  { el: 'Πρωτεΐνη', en: 'Protein',       es: 'Proteína',  fr: 'Protéines' },
  macro_carbs:    { el: 'Υδατάνθρακες', en: 'Carbohydrates', es: 'Carbohidratos', fr: 'Glucides' },
  macro_fat:      { el: 'Λιπαρά',    en: 'Fat',           es: 'Grasas',    fr: 'Lipides' },
  macro_kcal:     { el: 'Θερμίδες',  en: 'Calories',      es: 'Calorías',  fr: 'Calories' },

  // ── Training / steps ──
  training_label:   { el: '🏋️ Προπόνηση Βαρών', en: '🏋️ Weight Training', es: '🏋️ Entrenamiento de pesas', fr: '🏋️ Musculation' },
  steps_label:      { el: '👣 Βήματα', en: '👣 Steps', es: '👣 Pasos', fr: '👣 Pas' },
  steps_done:       { el: 'Βήματα ολοκληρώθηκαν', en: 'Steps completed', es: 'Pasos completados', fr: 'Pas complétés' },

  // ── Custom TDEE ──
  tdee_label:     { el: 'TDEE (kcal/ημέρα)', en: 'TDEE (kcal/day)', es: 'TDEE (kcal/día)', fr: 'TDEE (kcal/jour)' },
  tdee_suggested: { el: 'Προτεινόμενο TDEE', en: 'Suggested TDEE',  es: 'TDEE sugerido',   fr: 'TDEE suggéré' },
  tdee_custom:    { el: 'Χειροκίνητο',       en: 'Manual',          es: 'Manual',           fr: 'Manuel' },
};

// ── Current language (default: Greek) ──
let _currentLang = 'el';

function getLang() {
  return _currentLang;
}

function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return entry[_currentLang] || entry['el'] || key;
}

function setLang(lang) {
  if (!LANGUAGES[lang]) return;
  _currentLang = lang;
  try { localStorage.setItem('vivon_lang', lang); } catch(e) {}
  document.documentElement.lang = lang;
  updateUILanguage();
}

function initLang() {
  let saved = 'el';
  try { saved = localStorage.getItem('vivon_lang') || 'el'; } catch(e) {}
  if (!LANGUAGES[saved]) saved = 'el';
  _currentLang = saved;
  document.documentElement.lang = saved;
}

function updateUILanguage() {
  // Bottom bar
  _setTextContent('[data-tab="today"] .tab-label-i18n',    t('nav_today'));
  _setTextContent('[data-tab="week"] .tab-label-i18n',     t('nav_week_short'));
  _setTextContent('[data-tab="ideas"] .tab-label-i18n',    t('nav_ideas'));
  _setTextContent('[data-tab="stats"] .tab-label-i18n',    t('nav_progress'));
  _setI18nMenuLabel(t('nav_menu'));

  // Sidebar items
  _setTextContent('.sidebar-item[data-tab="today"] .sidebar-label',    t('nav_today'));
  _setTextContent('.sidebar-item[data-tab="week"] .sidebar-label',     t('nav_week'));
  _setTextContent('.sidebar-item[data-tab="ideas"] .sidebar-label',    t('nav_ideas'));
  _setTextContent('.sidebar-item[data-tab="builder"] .sidebar-label',  t('nav_builder'));
  _setTextContent('.sidebar-item[data-tab="body"] .sidebar-label',     t('nav_body'));
  _setTextContent('.sidebar-item[data-tab="stats"] .sidebar-label',    t('nav_stats'));
  _setTextContent('.sidebar-item[data-tab="settings"] .sidebar-label', t('nav_settings'));
  _setTextContent('#sidebar-user-sub', t('sidebar_subtitle'));

  // Sidebar footer buttons
  const sidebarPDF = document.querySelector('.sidebar-footer .btn:first-child');
  if (sidebarPDF) sidebarPDF.textContent = t('sidebar_pdf');
  const sidebarLogout = document.querySelector('.sidebar-footer .btn:last-child');
  if (sidebarLogout) sidebarLogout.textContent = t('sidebar_logout');

  // Drawer item labels
  const _setDrawerLabel = (tab, label) => {
    const el = document.querySelector(`.drawer-item[data-tab="${tab}"] .drawer-item-label`);
    if (el) el.textContent = label;
  };
  _setDrawerLabel('today',    t('nav_today'));
  _setDrawerLabel('week',     t('nav_week'));
  _setDrawerLabel('builder',  t('drawer_plan'));
  _setDrawerLabel('ideas',    t('nav_ideas'));
  _setDrawerLabel('body',     t('nav_body'));
  _setDrawerLabel('stats',    t('nav_stats'));
  _setDrawerLabel('settings', t('nav_settings'));

  // Re-render settings page if currently open
  if (typeof renderSettingsPage === 'function' && document.getElementById('page-settings').classList.contains('active')) {
    renderSettingsPage();
  }
}

function _setTextContent(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function _setI18nMenuLabel(text) {
  const btns = document.querySelectorAll('.tab-menu-btn');
  btns.forEach(btn => {
    const labels = btn.querySelectorAll('.tab-label-i18n');
    labels.forEach(l => l.textContent = text);
  });
}

function _setTextContentAll(selector, texts) {
  const els = document.querySelectorAll(selector);
  els.forEach((el, i) => { if (texts[i] !== undefined) el.textContent = texts[i]; });
}

// ── Localized data field resolver ──
// Use for food/recipe/meal/supplement objects that carry a `nameI18n`, `noteI18n`, etc. field.
// Falls back to the original `name` field (Greek) when no i18n entry exists.
function tName(item, field = 'name') {
  const i18nField = field + 'I18n';
  const obj = item[i18nField];
  if (!obj) return item[field] || '';
  return obj[_currentLang] || obj['el'] || item[field] || '';
}

// ── Meal type label helper ──
// Returns the translated display name for a meal slot key (breakfast, snack, …)
function tMeal(key) {
  return t('meal_' + key) || key;
}

// ── Meal type plural label helper ──
function tMealPlural(key) {
  return t('meal_' + key + 's') || tMeal(key);
}

// ── Activity label helper ──
function tActivity(level) {
  return t('activity_' + level) || String(level);
}

// ── Month array helper (0-indexed) ──
function tMonths() {
  return [
    t('month_jan'), t('month_feb'), t('month_mar'), t('month_apr'),
    t('month_may'), t('month_jun'), t('month_jul'), t('month_aug'),
    t('month_sep'), t('month_oct'), t('month_nov'), t('month_dec'),
  ];
}

// ── Day names array helper (0=Sunday) ──
function tDays() {
  return [
    t('day_sun'), t('day_mon'), t('day_tue'), t('day_wed'),
    t('day_thu'), t('day_fri'), t('day_sat'),
  ];
}

// ── String interpolation for i18n keys with placeholders ──
// Usage: tFmt('wizard_step_label', { n: 2, total: 6 })
function tFmt(key, vars) {
  let str = t(key);
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), v);
    });
  }
  return str;
}

// ── Food category label helper ──
function tCategory(catKey) {
  return t('cat_' + catKey) || catKey;
}

// ── Supplement category label helper ──
function tSupplCat(catKey) {
  return t('suppl_cat_' + catKey) || catKey;
}
