// ============================================================
// data.js — Βάση δεδομένων τροφίμων, συνταγών, γευμάτων
// ============================================================

const PHILOSOPHY_QUOTES = [
  // Επίκτητος
  { text: "Οὐ τὰ πράγματα ταράττει τοὺς ἀνθρώπους, ἀλλὰ αἱ περὶ τῶν πραγμάτων δόξαι.", author: "Επίκτητος", translation: "Δεν μας ταράζουν τα πράγματα, αλλά οι απόψεις μας γι' αυτά." },
  { text: "Κράτει τοῦ σώματος ἵνα μὴ κρατῇ σε.", author: "Επίκτητος", translation: "Κυρίαρχε στο σώμα σου, ώστε να μην σε κυριαρχεί." },
  { text: "Πρῶτον μάθε τί εἶ, εἶτα κόσμει σεαυτόν.", author: "Επίκτητος", translation: "Πρώτα μάθε τι είσαι, έπειτα καλλώπισε τον εαυτό σου." },
  { text: "Τῆς φύσεως ἕπου.", author: "Επίκτητος", translation: "Ακολούθησε τη φύση." },
  { text: "Ἕκαστος τοσοῦτον ἀσχολεῖται τοῖς ἄλλοις ὅσον ἐαυτοῦ ἀμελεῖ.", author: "Επίκτητος", translation: "Ο καθένας ασχολείται με τους άλλους όσο αμελεί τον εαυτό του." },
  { text: "Μηδὲν ἀγαν.", author: "Επίκτητος", translation: "Τίποτα σε υπερβολή." },
  { text: "Ζήτει τίνος ἐστὶ τοῦ σώματος ἐπιμελεῖσθαι.", author: "Επίκτητος", translation: "Ζήτησε πώς να φροντίζεις το σώμα." },
  // Αριστοτέλης
  { text: "Ἄνθρωπος φύσει πολιτικὸν ζῷον.", author: "Αριστοτέλης", translation: "Ο άνθρωπος είναι εκ φύσεως πολιτικό ζώο." },
  { text: "Ἀρχὴ ἥμισυ παντός.", author: "Αριστοτέλης", translation: "Η αρχή είναι το μισό του παντός." },
  { text: "Ἡ εὐδαιμονία ἐνέργειά τις τῆς ψυχῆς.", author: "Αριστοτέλης", translation: "Η ευδαιμονία είναι ενέργεια της ψυχής." },
  { text: "Ἡ ἀρετὴ ἐν τῷ μέσῳ ἐστίν.", author: "Αριστοτέλης", translation: "Η αρετή βρίσκεται στο μέσο." },
  { text: "Εἰ ἓν ἁμαρτάνεις, ἐν ᾧ μάλιστα δεῖ κατορθοῦν, ἁμαρτάνεις.", author: "Αριστοτέλης", translation: "Αν σφάλεις εκεί που πρέπει να επιτύχεις, τότε πραγματικά σφάλεις." },
  { text: "Ἐν ᾧ γὰρ ζῶμεν, ἐν τούτῳ καὶ ὑγιαίνομεν.", author: "Αριστοτέλης", translation: "Όσο ζούμε, χρειαζόμαστε και υγεία." },
  { text: "Τελεία φιλία ἐστὶ ἡ τῶν ἀγαθῶν.", author: "Αριστοτέλης", translation: "Τέλεια φιλία είναι αυτή που βασίζεται στην αρετή." },
  // Επίκουρος
  { text: "Οὐκ ἔστιν ἡδέως ζῆν ἄνευ τοῦ φρονίμως καὶ καλῶς καὶ δικαίως ζῆν.", author: "Επίκουρος", translation: "Δεν μπορείς να ζεις ευχάριστα χωρίς να ζεις φρόνιμα, καλά και δίκαια." },
  { text: "Λάθε βιώσας.", author: "Επίκουρος", translation: "Ζήσε αθόρυβα." },
  { text: "Ἡ εὐτέλεια ἡδίστη.", author: "Επίκουρος", translation: "Η λιτότητα είναι η πιο ευχάριστη." },
  { text: "Βέβαιον τε φιλίαν ἐπαγγέλλεσθαι καὶ ἀβέβαιον ποιεῖσθαι χαλεπόν.", author: "Επίκουρος", translation: "Να υπόσχεσαι φιλία και να μην την εκπληρώνεις είναι ανάρμοστο." },
  { text: "Ἡ φυσικὴ πλοῦτος εὐπόριστος ὁ δὲ κενοδοξία ἀπόριστος.", author: "Επίκουρος", translation: "Ο φυσικός πλούτος είναι εύκολος στην απόκτηση· η κενοδοξία δεν χορταίνει." },
  // Πλάτωνας
  { text: "Σῶμα καὶ ψυχὴ ἐν ἀσκήσει συντηρεῖται.", author: "Πλάτωνας", translation: "Σώμα και ψυχή διατηρούνται με άσκηση." },
  { text: "Ὁ ἀγύμναστος βίος οὐ βιωτός.", author: "Πλάτωνας", translation: "Η ζωή χωρίς άσκηση δεν αξίζει να ζιστεί." },
  { text: "Ὁ νοῦς ὑγιαίνων ἐν σώματι ὑγιαίνοντι.", author: "Πλάτωνας", translation: "Υγιής νους σε υγιές σώμα." },
  { text: "Τὸ ἄγνωστον ἑαυτοῦ πάντων χαλεπώτατον.", author: "Πλάτωνας", translation: "Το να μην γνωρίζεις τον εαυτό σου είναι το δυσκολότερο από όλα." },
  { text: "Ψυχῆς οὖν ἐπιμελεῖσθαι πρῶτον.", author: "Πλάτωνας", translation: "Φρόντισε πρώτα για την ψυχή." },
  // Σωκράτης / Άλλοι
  { text: "Γνῶθι σαυτόν.", author: "Σωκράτης", translation: "Γνώρισε τον εαυτό σου." },
  { text: "Ἓν οἶδα ὅτι οὐδὲν οἶδα.", author: "Σωκράτης", translation: "Ένα γνωρίζω: ότι δεν γνωρίζω τίποτα." },
  { text: "Μέτρον ἄριστον.", author: "Κλεόβουλος", translation: "Το μέτρο είναι το άριστο." },
  { text: "Ἐν ὑγιεῖ σώματι ὑγιὴς νοῦς.", author: "Αρχαία Γνώμη", translation: "Σε υγιές σώμα υγιής νους." },
  { text: "Τὸ εὖ πράττειν χωρὶς ἀρετῆς ἀδύνατον.", author: "Δημόκριτος", translation: "Το να ζεις καλά χωρίς αρετή είναι αδύνατο." },
  { text: "Πάντα ῥεῖ.", author: "Ηράκλειτος", translation: "Τα πάντα ρέουν." },
  { text: "Τὸ αὐτὸ ποταμῷ δὶς οὐκ ἔστιν ἐμβῆναι.", author: "Ηράκλειτος", translation: "Δεν μπορείς να μπεις δύο φορές στο ίδιο ποτάμι." },
  { text: "Ἐκ τῆς τέχνης σοφία, ἐκ τῆς σοφίας εὐδαιμονία.", author: "Δημόκριτος", translation: "Από την τέχνη η σοφία, από τη σοφία η ευδαιμονία." },
  { text: "Τολμᾶν χρή, τοῖς τολμῶσι γὰρ ἡ τύχη εὐμενής.", author: "Σοφοκλής", translation: "Πρέπει να τολμάς, γιατί η τύχη ευνοεί τους τολμηρούς." },
  { text: "Ὁ πόνος τίκτει δόξαν.", author: "Πίνδαρος", translation: "Ο κόπος γεννά τη δόξα." },
  { text: "Σιωπῇ καὶ πόνῳ τὰ μεγάλα πράττεται.", author: "Αρχαία Γνώμη", translation: "Τα μεγάλα πράγματα γίνονται με σιωπή και κόπο." },
];

const DEFAULT_GOALS = { kcal: 1000, protein: 60, carbs: 150, fat: 45 };

// Προεπιλεγμένο προφίλ χρήστη
const DEFAULT_PROFILE = {
  name: '',
  photoUrl: '',
  weight: 0,
  height: 0,
  age: 0,
  gender: 'male',
  activity: 0,    // weekly training sessions (0 = καμία δραστηριότητα)
  dailySteps: 0,  // μέσος αριθμός βημάτων/ημέρα για TDEE
  useCustomTDEE: false,  // αν true, χρησιμοποιεί customTDEE αντί υπολογισμού
  customTDEE: 0,         // χειροκίνητα εισαγμένο TDEE (0 = αχρησιμοποίητο)
  firstMealTime: '08:00', // ώρα πρώτου γεύματος — τα υπόλοιπα ακολουθούν ανά 3h
};

const FOODS_DB = [
  // ΠΡΩΤΕΪΝΕΣ
  { id: "f1",  name: "Κοτόπουλο στήθος ψητό",   nameI18n: { el: "Κοτόπουλο στήθος ψητό",  en: "Grilled Chicken Breast",    es: "Pechuga de pollo asada",   fr: "Blanc de poulet grillé" },   unit: "g",  per100: { kcal: 165, p: 31, c: 0,  f: 3.6 }, category: "protein" },
  { id: "f2",  name: "Κοτόπουλο μπούτι ψητό",   nameI18n: { el: "Κοτόπουλο μπούτι ψητό",  en: "Grilled Chicken Thigh",     es: "Muslo de pollo asado",     fr: "Cuisse de poulet grillée" }, unit: "g",  per100: { kcal: 215, p: 26, c: 0,  f: 12  }, category: "protein" },
  { id: "f3",  name: "Κιμάς μοσχαρίσιος 5%",    nameI18n: { el: "Κιμάς μοσχαρίσιος 5%",  en: "Lean Beef Mince 5%",        es: "Carne picada de res 5%",   fr: "Viande hachée bœuf 5%" },   unit: "g",  per100: { kcal: 150, p: 21, c: 0,  f: 7   }, category: "protein" },
  { id: "f4",  name: "Σολομός",                   nameI18n: { el: "Σολομός",                 en: "Salmon",                    es: "Salmón",                   fr: "Saumon" },                   unit: "g",  per100: { kcal: 208, p: 20, c: 0,  f: 13  }, category: "protein" },
  { id: "f5",  name: "Τόνος σε νερό",             nameI18n: { el: "Τόνος σε νερό",           en: "Tuna in Water",             es: "Atún en agua",             fr: "Thon à l'eau" },             unit: "g",  per100: { kcal: 116, p: 26, c: 0,  f: 1   }, category: "protein" },
  { id: "f6",  name: "Μπακαλίαρος",               nameI18n: { el: "Μπακαλίαρος",             en: "Cod",                       es: "Bacalao",                  fr: "Cabillaud" },                unit: "g",  per100: { kcal: 82,  p: 18, c: 0,  f: 0.7 }, category: "protein" },
  { id: "f7",  name: "Αυγό",                      nameI18n: { el: "Αυγό",                     en: "Egg",                       es: "Huevo",                    fr: "Œuf" },                      unit: "τεμ",per100: { kcal: 78,  p: 6,  c: 0.6,f: 5   }, category: "protein" },
  { id: "f8",  name: "Cottage Cheese",            nameI18n: { el: "Cottage Cheese",           en: "Cottage Cheese",            es: "Requesón",                 fr: "Cottage cheese" },           unit: "g",  per100: { kcal: 98,  p: 11, c: 3.4,f: 4.3 }, category: "protein" },
  { id: "f9",  name: "Whey Isolate",              nameI18n: { el: "Whey Isolate",             en: "Whey Isolate",              es: "Aislado de suero",         fr: "Isolat de whey" },           unit: "g",  per100: { kcal: 370, p: 90, c: 3,  f: 1   }, category: "protein" },
  { id: "f10", name: "Γαλοπούλα φέτα",            nameI18n: { el: "Γαλοπούλα φέτα",          en: "Turkey Slice",              es: "Lonchas de pavo",          fr: "Tranche de dinde" },         unit: "g",  per100: { kcal: 109, p: 17, c: 1,  f: 4   }, category: "protein" },
  { id: "f11", name: "Φακές μαγειρεμένες",        nameI18n: { el: "Φακές μαγειρεμένες",      en: "Cooked Lentils",            es: "Lentejas cocidas",         fr: "Lentilles cuites" },         unit: "g",  per100: { kcal: 116, p: 9,  c: 20, f: 0.4 }, category: "protein" },
  { id: "f12", name: "Ρεβύθια μαγειρεμένα",       nameI18n: { el: "Ρεβύθια μαγειρεμένα",     en: "Cooked Chickpeas",          es: "Garbanzos cocidos",        fr: "Pois chiches cuits" },       unit: "g",  per100: { kcal: 164, p: 9,  c: 27, f: 2.6 }, category: "protein" },
  // ΥΔΑΤΑΝΘΡΑΚΕΣ
  { id: "c1",  name: "Βρώμη",                     nameI18n: { el: "Βρώμη",                    en: "Oats",                      es: "Avena",                    fr: "Flocons d'avoine" },         unit: "g",  per100: { kcal: 389, p: 17, c: 66, f: 7   }, category: "carbs" },
  { id: "c2",  name: "Ρύζι μαγειρεμένο",          nameI18n: { el: "Ρύζι μαγειρεμένο",        en: "Cooked Rice",               es: "Arroz cocido",             fr: "Riz cuit" },                 unit: "g",  per100: { kcal: 130, p: 2.7,c: 28, f: 0.3 }, category: "carbs" },
  { id: "c3",  name: "Μακαρόνια ολικής μαγ.",     nameI18n: { el: "Μακαρόνια ολικής μαγ.",   en: "Cooked Wholegrain Pasta",   es: "Pasta integral cocida",    fr: "Pâtes complètes cuites" },   unit: "g",  per100: { kcal: 150, p: 5,  c: 30, f: 1   }, category: "carbs" },
  { id: "c4",  name: "Πατάτα βραστή",             nameI18n: { el: "Πατάτα βραστή",            en: "Boiled Potato",             es: "Patata hervida",           fr: "Pomme de terre bouillie" },  unit: "g",  per100: { kcal: 87,  p: 1.9,c: 20, f: 0.1 }, category: "carbs" },
  { id: "c5",  name: "Γλυκοπατάτα",               nameI18n: { el: "Γλυκοπατάτα",             en: "Sweet Potato",              es: "Batata",                   fr: "Patate douce" },             unit: "g",  per100: { kcal: 86,  p: 1.6,c: 20, f: 0.1 }, category: "carbs" },
  { id: "c6",  name: "Ψωμί ολικής φέτα",          nameI18n: { el: "Ψωμί ολικής φέτα",        en: "Wholegrain Bread Slice",    es: "Rebanada pan integral",    fr: "Tranche pain complet" },     unit: "g",  per100: { kcal: 247, p: 9,  c: 41, f: 4   }, category: "carbs" },
  { id: "c7",  name: "Ριζογκοφρέτα",              nameI18n: { el: "Ριζογκοφρέτα",            en: "Rice Cake",                 es: "Torta de arroz",           fr: "Galette de riz" },           unit: "τεμ",per100: { kcal: 35,  p: 0.7,c: 7,  f: 0.3 }, category: "carbs" },
  { id: "c8",  name: "Παξιμάδι χαρουπιού",        nameI18n: { el: "Παξιμάδι χαρουπιού",      en: "Carob Rusk",                es: "Galleta de algarroba",     fr: "Biscotte à la caroube" },    unit: "τεμ",per100: { kcal: 70,  p: 2,  c: 14, f: 0.5 }, category: "carbs" },
  { id: "c9",  name: "Πληγούρι μαγειρεμένο",      nameI18n: { el: "Πληγούρι μαγειρεμένο",    en: "Cooked Bulgur",             es: "Bulgur cocido",            fr: "Boulgour cuit" },            unit: "g",  per100: { kcal: 83,  p: 3,  c: 18, f: 0.2 }, category: "carbs" },
  { id: "c10", name: "Κους Κους μαγειρεμένο",     nameI18n: { el: "Κους Κους μαγειρεμένο",   en: "Cooked Couscous",           es: "Cuscús cocido",            fr: "Couscous cuit" },            unit: "g",  per100: { kcal: 112, p: 3.8,c: 23, f: 0.2 }, category: "carbs" },
  { id: "c11", name: "Κινόα μαγειρεμένη",         nameI18n: { el: "Κινόα μαγειρεμένη",       en: "Cooked Quinoa",             es: "Quinoa cocida",            fr: "Quinoa cuit" },              unit: "g",  per100: { kcal: 120, p: 4.4,c: 22, f: 2   }, category: "carbs" },
  // ΛΑΧΑΝΙΚΑ
  { id: "v1",  name: "Μαρούλι",                   nameI18n: { el: "Μαρούλι",                  en: "Lettuce",                   es: "Lechuga",                  fr: "Laitue" },                   unit: "g",  per100: { kcal: 15,  p: 1.4,c: 2.9,f: 0.2 }, category: "veggie" },
  { id: "v2",  name: "Ντοματίνια",                nameI18n: { el: "Ντοματίνια",               en: "Cherry Tomatoes",           es: "Tomates cherry",           fr: "Tomates cerises" },          unit: "g",  per100: { kcal: 18,  p: 0.9,c: 3.9,f: 0.2 }, category: "veggie" },
  { id: "v3",  name: "Αγγούρι",                   nameI18n: { el: "Αγγούρι",                  en: "Cucumber",                  es: "Pepino",                   fr: "Concombre" },                unit: "g",  per100: { kcal: 16,  p: 0.7,c: 3.6,f: 0.1 }, category: "veggie" },
  { id: "v4",  name: "Κόκκινη πιπεριά",           nameI18n: { el: "Κόκκινη πιπεριά",         en: "Red Bell Pepper",           es: "Pimiento rojo",            fr: "Poivron rouge" },            unit: "g",  per100: { kcal: 31,  p: 1,  c: 6,  f: 0.3 }, category: "veggie" },
  { id: "v5",  name: "Καρότο",                    nameI18n: { el: "Καρότο",                   en: "Carrot",                    es: "Zanahoria",                fr: "Carotte" },                  unit: "g",  per100: { kcal: 41,  p: 0.9,c: 10, f: 0.2 }, category: "veggie" },
  { id: "v6",  name: "Κολοκυθάκι",               nameI18n: { el: "Κολοκυθάκι",              en: "Zucchini",                  es: "Calabacín",                fr: "Courgette" },                unit: "g",  per100: { kcal: 17,  p: 1.2,c: 3.1,f: 0.3 }, category: "veggie" },
  { id: "v7",  name: "Σπανάκι",                   nameI18n: { el: "Σπανάκι",                  en: "Spinach",                   es: "Espinacas",                fr: "Épinards" },                 unit: "g",  per100: { kcal: 23,  p: 2.9,c: 3.6,f: 0.4 }, category: "veggie" },
  // ΛΙΠΑΡΑ
  // Ελαιόλαδο: μετριέται σε κ.γ. (κουταλάκι γλυκού = 5ml) ή κ.σ. (κουταλιά σούπας = 10ml)
  // per100 βάσει ml (884 kcal/100ml)
  // qty στις συνταγές = κ.γ. · εσωτερικά 1 κ.γ. → 5ml → kcal=5*8.84≈44.2kcal
  { id: "l1",  name: "Ελαιόλαδο", nameI18n: { el: "Ελαιόλαδο", en: "Olive Oil", es: "Aceite de oliva", fr: "Huile d'olive" }, unit: "κ.γ.", per100: { kcal: 884, p: 0, c: 0, f: 100 },
    // 1 κ.γ. = 5ml → kcal_per_unit ≈ 44.2, fat_per_unit ≈ 4.6g
    // 1 κ.σ. = 10ml (χρησιμοποίησε unit="κ.σ." για κουταλιές σούπας)
    sprayFactor: 5, // ml ανά μονάδα (κ.γ.)
    category: "fat" },
  { id: "l2",  name: "Αμύγδαλα",                  nameI18n: { el: "Αμύγδαλα",                en: "Almonds",                   es: "Almendras",                fr: "Amandes" },                  unit: "g",  per100: { kcal: 579, p: 21, c: 22, f: 50  }, category: "fat" },
  { id: "l3",  name: "Καρύδια",                   nameI18n: { el: "Καρύδια",                 en: "Walnuts",                   es: "Nueces",                   fr: "Noix" },                     unit: "g",  per100: { kcal: 654, p: 15, c: 14, f: 65  }, category: "fat" },
  { id: "l4",  name: "Φυστικοβούτυρο",            nameI18n: { el: "Φυστικοβούτυρο",         en: "Peanut Butter",             es: "Mantequilla de cacahuete", fr: "Beurre de cacahuète" },      unit: "g",  per100: { kcal: 588, p: 25, c: 20, f: 50  }, category: "fat" },
  { id: "l5",  name: "Ελιές",                     nameI18n: { el: "Ελιές",                   en: "Olives",                    es: "Aceitunas",                fr: "Olives" },                   unit: "τεμ",per100: { kcal: 10,  p: 0.1,c: 0.3,f: 1   }, category: "fat" },
  // ΓΑΛΑΚΤΟΚΟΜΙΚΑ
  { id: "d1",  name: "Γιαούρτι 2%",               nameI18n: { el: "Γιαούρτι 2%",             en: "Yogurt 2%",                 es: "Yogur 2%",                 fr: "Yaourt 2%" },                unit: "g",  per100: { kcal: 60,  p: 6,  c: 4.7,f: 1.5 }, category: "dairy" },
  { id: "d2",  name: "Γάλα 1.5%",                 nameI18n: { el: "Γάλα 1.5%",               en: "Milk 1.5%",                 es: "Leche 1,5%",               fr: "Lait 1,5%" },                unit: "g",  per100: { kcal: 47,  p: 3.4,c: 4.8,f: 1.5 }, category: "dairy" },
  { id: "d3",  name: "Κασέρι φέτα",               nameI18n: { el: "Κασέρι φέτα",             en: "Kasseri Cheese Slice",      es: "Loncha de queso amarillo", fr: "Tranche de kasseri" },       unit: "g",  per100: { kcal: 354, p: 26, c: 1.3,f: 27  }, category: "dairy" },
  { id: "d4",  name: "Φέτα",                      nameI18n: { el: "Φέτα",                     en: "Feta Cheese",               es: "Queso feta",               fr: "Fromage feta" },             unit: "g",  per100: { kcal: 264, p: 14, c: 4,  f: 21  }, category: "dairy" },
  // ΦΡΟΥΤΑ
  { id: "fr1", name: "Μπανάνα",                   nameI18n: { el: "Μπανάνα",                 en: "Banana",                    es: "Plátano",                  fr: "Banane" },                   unit: "g",  per100: { kcal: 89,  p: 1.1,c: 23, f: 0.3 }, category: "fruit" },
  { id: "fr2", name: "Μήλο",                      nameI18n: { el: "Μήλο",                     en: "Apple",                     es: "Manzana",                  fr: "Pomme" },                    unit: "g",  per100: { kcal: 52,  p: 0.3,c: 14, f: 0.2 }, category: "fruit" },
  { id: "fr3", name: "Ροδάκινο",                  nameI18n: { el: "Ροδάκινο",                en: "Peach",                     es: "Melocotón",                fr: "Pêche" },                    unit: "g",  per100: { kcal: 39,  p: 0.9,c: 10, f: 0.3 }, category: "fruit" },
  { id: "fr4", name: "Νεκταρίνι",                 nameI18n: { el: "Νεκταρίνι",               en: "Nectarine",                 es: "Nectarina",                fr: "Nectarine" },                unit: "g",  per100: { kcal: 44,  p: 1.1,c: 11, f: 0.3 }, category: "fruit" },
  { id: "fr5", name: "Ακτινίδιο",                 nameI18n: { el: "Ακτινίδιο",               en: "Kiwi",                      es: "Kiwi",                     fr: "Kiwi" },                     unit: "τεμ",per100: { kcal: 61,  p: 1.1,c: 15, f: 0.5 }, category: "fruit" },
  // ΑΛΛΑ
  { id: "o1",  name: "Μέλι",                      nameI18n: { el: "Μέλι",                     en: "Honey",                     es: "Miel",                     fr: "Miel" },                     unit: "g",  per100: { kcal: 304, p: 0.3,c: 82, f: 0   }, category: "other" },
  { id: "o2",  name: "Κακάο σκόνη",               nameI18n: { el: "Κακάο σκόνη",             en: "Cocoa Powder",              es: "Cacao en polvo",           fr: "Poudre de cacao" },          unit: "g",  per100: { kcal: 228, p: 20, c: 55, f: 14  }, category: "other" },
  { id: "o3",  name: "Μαύρη σοκολάτα 85%",        nameI18n: { el: "Μαύρη σοκολάτα 85%",     en: "Dark Chocolate 85%",        es: "Chocolate negro 85%",      fr: "Chocolat noir 85%" },        unit: "g",  per100: { kcal: 598, p: 8,  c: 46, f: 43  }, category: "other" },
  { id: "o4",  name: "Ξύδι βαλσάμικο",            nameI18n: { el: "Ξύδι βαλσάμικο",         en: "Balsamic Vinegar",          es: "Vinagre balsámico",        fr: "Vinaigre balsamique" },      unit: "ml", per100: { kcal: 88,  p: 0.5,c: 17, f: 0   }, category: "other" },
  { id: "o5",  name: "Μουστάρδα",                 nameI18n: { el: "Μουστάρδα",               en: "Mustard",                   es: "Mostaza",                  fr: "Moutarde" },                 unit: "g",  per100: { kcal: 66,  p: 4,  c: 6,  f: 4   }, category: "other" },
];

const RECIPES_DB = [
  // ─── ΠΡΩΙΝΑ ───
  {
    id: "r1", name: "Power Oat Bowl Σοκολάτα", nameI18n: { el: "Power Oat Bowl Σοκολάτα", en: "Chocolate Power Oat Bowl", es: "Bowl de avena chocolate", fr: "Bowl d'avoine chocolat" }, meal: "breakfast", emoji: "🍫",
    ingredients: [
      { foodId: "d2", qty: 250 }, { foodId: "c1", qty: 60 },
      { foodId: "f9", qty: 30 },  { foodId: "o2", qty: 10 },
      { foodId: "fr1", qty: 60 }
    ],
    instructions: "1. Βράσε βρώμη με γάλα σε κατσαρολάκι για 5 λεπτά, ανακατεύοντας συνεχώς.\n2. Άφησε να κρυώσει 2-3 λεπτά.\n3. Ανακάτεψε το whey και το κακάο μέχρι να ομογενοποιηθούν.\n4. Κόψε τη μπανάνα σε ροδέλες και βάλε από πάνω.\n5. Πασπάλισε με κανέλα και γλύκανε με στέβια αν χρειάζεται.",
    instructionsI18n: { el: "1. Βράσε βρώμη με γάλα σε κατσαρολάκι για 5 λεπτά, ανακατεύοντας συνεχώς.\n2. Άφησε να κρυώσει 2-3 λεπτά.\n3. Ανακάτεψε το whey και το κακάο μέχρι να ομογενοποιηθούν.\n4. Κόψε τη μπανάνα σε ροδέλες και βάλε από πάνω.\n5. Πασπάλισε με κανέλα και γλύκανε με στέβια αν χρειάζεται.", en: "1. Boil oats with milk in a small saucepan for 5 minutes, stirring constantly.\n2. Let cool for 2-3 minutes.\n3. Mix in the whey and cocoa until fully combined.\n4. Slice the banana into rounds and place on top.\n5. Sprinkle with cinnamon and sweeten with stevia if needed.", es: "1. Hierve la avena con la leche en un cazo pequeño durante 5 minutos, removiendo constantemente.\n2. Deja enfriar 2-3 minutos.\n3. Mezcla el whey y el cacao hasta que quede homogéneo.\n4. Corta el plátano en rodajas y colócalo encima.\n5. Espolvorea con canela y endulza con stevia si lo deseas.", fr: "1. Fais bouillir l'avoine avec le lait dans une petite casserole pendant 5 minutes, en remuant continuellement.\n2. Laisse refroidir 2-3 minutes.\n3. Incorpore le whey et le cacao jusqu'à obtenir un mélange homogène.\n4. Coupe la banane en rondelles et dispose-les par-dessus.\n5. Saupoudre de cannelle et sucre avec de la stévia si nécessaire." },
    serving: "Σέρβιρε αμέσως ζεστό. Μπορείς να προσθέσεις και λίγη μαύρη σοκολάτα τριμμένη για extra γεύση.",
    servingI18n: { el: "Σέρβιρε αμέσως ζεστό. Μπορείς να προσθέσεις και λίγη μαύρη σοκολάτα τριμμένη για extra γεύση.", en: "Serve immediately while hot. You can also add a little grated dark chocolate for extra flavour.", es: "Sirve inmediatamente caliente. Puedes añadir un poco de chocolate negro rallado para un sabor extra.", fr: "Sers immédiatement chaud. Tu peux aussi ajouter un peu de chocolat noir râpé pour plus de saveur." }
  },
  {
    id: "r2", name: "Overnight Oats Βανίλια & Ροδάκινο", nameI18n: { el: "Overnight Oats Βανίλια & Ροδάκινο", en: "Vanilla & Peach Overnight Oats", es: "Overnight oats vainilla y melocotón", fr: "Overnight oats vanille et pêche" }, meal: "breakfast", emoji: "🌙",
    ingredients: [
      { foodId: "d1", qty: 300 }, { foodId: "c1", qty: 40 },
      { foodId: "f9", qty: 30 },  { foodId: "fr3", qty: 150 },
      { foodId: "o1", qty: 10 }
    ],
    instructions: "1. Βράδυ: σε βαζάκι mason jar ανακάτεψε γιαούρτι, βρώμη, whey βανίλια και μέλι.\n2. Σκέπασε και βάλε στο ψυγείο για τουλάχιστον 6-8 ώρες.\n3. Πρωί: βγάλε από το ψυγείο 5 λεπτά πριν φας.",
    instructionsI18n: { el: "1. Βράδυ: σε βαζάκι mason jar ανακάτεψε γιαούρτι, βρώμη, whey βανίλια και μέλι.\n2. Σκέπασε και βάλε στο ψυγείο για τουλάχιστον 6-8 ώρες.\n3. Πρωί: βγάλε από το ψυγείο 5 λεπτά πριν φας.", en: "1. Evening: in a mason jar, mix together yogurt, oats, vanilla whey and honey.\n2. Cover and refrigerate for at least 6-8 hours.\n3. Morning: take out of the fridge 5 minutes before eating.", es: "1. Noche: en un frasco mason jar, mezcla yogur, avena, whey de vainilla y miel.\n2. Tapa y refrigera durante al menos 6-8 horas.\n3. Mañana: saca del frigorífico 5 minutos antes de comer.", fr: "1. Le soir : dans un pot mason jar, mélange le yaourt, l'avoine, le whey vanille et le miel.\n2. Couvre et réfrigère pendant au moins 6-8 heures.\n3. Le matin : sors du réfrigérateur 5 minutes avant de manger." },
    serving: "Κόψε το ροδάκινο σε κομμάτια και βάλε από πάνω. Πρόσθεσε λίγο επιπλέον μέλι αν θέλεις πιο γλυκό.",
    servingI18n: { el: "Κόψε το ροδάκινο σε κομμάτια και βάλε από πάνω. Πρόσθεσε λίγο επιπλέον μέλι αν θέλεις πιο γλυκό.", en: "Cut the peach into pieces and place on top. Add a little extra honey if you prefer it sweeter.", es: "Corta el melocotón en trozos y colócalo encima. Añade un poco más de miel si lo quieres más dulce.", fr: "Coupe la pêche en morceaux et dispose-les par-dessus. Ajoute un peu de miel supplémentaire si tu le veux plus sucré." }
  },
  {
    id: "r3", name: "Γιαούρτι Bowl Φρούτων", nameI18n: { el: "Γιαούρτι Bowl Φρούτων", en: "Fruit Yogurt Bowl", es: "Bowl de yogur con frutas", fr: "Bowl yaourt aux fruits" }, meal: "breakfast", emoji: "🫙",
    ingredients: [
      { foodId: "d1", qty: 300 }, { foodId: "c1", qty: 40 },
      { foodId: "f9", qty: 30 },  { foodId: "fr2", qty: 100 }
    ],
    instructions: "1. Σε μπολ ανακάτεψε το γιαούρτι με το whey μέχρι να γίνει ομοιόμορφο.\n2. Ρίξε τη βρώμη από πάνω.\n3. Τρίψε το μήλο με τον τρίφτη ή κόψε σε μικρά κομμάτια.",
    instructionsI18n: { el: "1. Σε μπολ ανακάτεψε το γιαούρτι με το whey μέχρι να γίνει ομοιόμορφο.\n2. Ρίξε τη βρώμη από πάνω.\n3. Τρίψε το μήλο με τον τρίφτη ή κόψε σε μικρά κομμάτια.", en: "1. In a bowl, mix the yogurt with the whey until smooth.\n2. Pour the oats on top.\n3. Grate the apple or cut into small pieces.", es: "1. En un bol, mezcla el yogur con el whey hasta que quede homogéneo.\n2. Vierte la avena por encima.\n3. Ralla la manzana o córtala en trozos pequeños.", fr: "1. Dans un bol, mélange le yaourt avec le whey jusqu'à obtenir une consistance homogène.\n2. Verse l'avoine par-dessus.\n3. Râpe la pomme ou coupe-la en petits morceaux." },
    serving: "Πασπάλισε με κανέλα από πάνω. Σέρβιρε αμέσως ώστε η βρώμη να παραμένει τραγανή.",
    servingI18n: { el: "Πασπάλισε με κανέλα από πάνω. Σέρβιρε αμέσως ώστε η βρώμη να παραμένει τραγανή.", en: "Sprinkle with cinnamon on top. Serve immediately so the oats stay crunchy.", es: "Espolvorea con canela por encima. Sirve inmediatamente para que la avena permanezca crujiente.", fr: "Saupoudre de cannelle par-dessus. Sers immédiatement pour que l'avoine reste croustillante." }
  },
  {
    id: "r4", name: "Τοστ Αβοκάντο & Αυγά Σκραμπλ", nameI18n: { el: "Τοστ Αβοκάντο & Αυγά Σκραμπλ", en: "Avocado Toast & Scrambled Eggs", es: "Tostada aguacate y huevos revueltos", fr: "Toast avocat et œufs brouillés" }, meal: "breakfast", emoji: "🥑",
    ingredients: [
      { foodId: "c6", qty: 80 },  { foodId: "f7", qty: 3 },
      { foodId: "v2", qty: 60 },  { foodId: "v3", qty: 80 }
    ],
    instructions: "1. Ψήσε το ψωμί στον τοστιέρα.\n2. Χτύπησε τα αυγά με αλατοπίπερο.\n3. Ψήσε σε αντικολλητικό τηγάνι σε μέτρια φωτιά, ανακατεύοντας αργά, χωρίς λάδι.\n4. Βγάλε από τη φωτιά όσο είναι ακόμα λίγο υγρά — θα συνεχίσουν να ψήνονται.",
    instructionsI18n: { el: "1. Ψήσε το ψωμί στον τοστιέρα.\n2. Χτύπησε τα αυγά με αλατοπίπερο.\n3. Ψήσε σε αντικολλητικό τηγάνι σε μέτρια φωτιά, ανακατεύοντας αργά, χωρίς λάδι.\n4. Βγάλε από τη φωτιά όσο είναι ακόμα λίγο υγρά — θα συνεχίσουν να ψήνονται.", en: "1. Toast the bread in the toaster.\n2. Beat the eggs with salt and pepper.\n3. Cook in a non-stick pan over medium heat, stirring slowly, without oil.\n4. Remove from heat while still slightly runny — they will continue cooking.", es: "1. Tuesta el pan en la tostadora.\n2. Bate los huevos con sal y pimienta.\n3. Cocina en una sartén antiadherente a fuego medio, removiendo lentamente, sin aceite.\n4. Retira del fuego mientras aún están un poco húmedos — seguirán cocinándose.", fr: "1. Fais griller le pain dans le grille-pain.\n2. Bats les œufs avec du sel et du poivre.\n3. Fais cuire dans une poêle antiadhésive à feu moyen, en remuant lentement, sans huile.\n4. Retire du feu quand ils sont encore légèrement humides — ils continueront à cuire." },
    serving: "Βάλε τα αυγά πάνω στο ψωμί. Γύρω γύρω ντοματίνια κομμένα στη μέση και αγγούρι σε φέτες. Λίγο πιπέρι φρέσκο από πάνω.",
    servingI18n: { el: "Βάλε τα αυγά πάνω στο ψωμί. Γύρω γύρω ντοματίνια κομμένα στη μέση και αγγούρι σε φέτες. Λίγο πιπέρι φρέσκο από πάνω.", en: "Place the eggs on top of the toast. Surround with halved cherry tomatoes and cucumber slices. Add a little fresh pepper on top.", es: "Coloca los huevos sobre el pan. Rodea con tomatitos cortados por la mitad y pepino en rodajas. Añade un poco de pimienta fresca por encima.", fr: "Place les œufs sur le pain grillé. Entoure de tomates cerises coupées en deux et de tranches de concombre. Ajoute un peu de poivre frais par-dessus." }
  },
  {
    id: "r5", name: "Βρώμη με Μήλο & Κανέλα", nameI18n: { el: "Βρώμη με Μήλο & Κανέλα", en: "Oats with Apple & Cinnamon", es: "Avena con manzana y canela", fr: "Avoine pomme et cannelle" }, meal: "breakfast", emoji: "🍎",
    ingredients: [
      { foodId: "c1", qty: 80 },  { foodId: "d2", qty: 200 },
      { foodId: "f9", qty: 30 },  { foodId: "fr2", qty: 120 },
      { foodId: "o1", qty: 8 }
    ],
    instructions: "1. Βράσε τη βρώμη με το γάλα σε χαμηλή φωτιά για 3-4 λεπτά.\n2. Άφησε να κρυώσει 2 λεπτά.\n3. Ανακάτεψε το whey μέχρι να διαλυθεί πλήρως.\n4. Τρίψε ή κόψε το μήλο.",
    instructionsI18n: { el: "1. Βράσε τη βρώμη με το γάλα σε χαμηλή φωτιά για 3-4 λεπτά.\n2. Άφησε να κρυώσει 2 λεπτά.\n3. Ανακάτεψε το whey μέχρι να διαλυθεί πλήρως.\n4. Τρίψε ή κόψε το μήλο.", en: "1. Boil the oats with the milk over low heat for 3-4 minutes.\n2. Let cool for 2 minutes.\n3. Stir in the whey until fully dissolved.\n4. Grate or cut the apple.", es: "1. Hierve la avena con la leche a fuego lento durante 3-4 minutos.\n2. Deja enfriar 2 minutos.\n3. Mezcla el whey hasta que se disuelva completamente.\n4. Ralla o corta la manzana.", fr: "1. Fais bouillir l'avoine avec le lait à feu doux pendant 3-4 minutes.\n2. Laisse refroidir 2 minutes.\n3. Incorpore le whey jusqu'à ce qu'il soit complètement dissous.\n4. Râpe ou coupe la pomme." },
    serving: "Βάλε το μήλο από πάνω, πασπάλισε με κανέλα και στάξε το μέλι. Σέρβιρε ζεστό.",
    servingI18n: { el: "Βάλε το μήλο από πάνω, πασπάλισε με κανέλα και στάξε το μέλι. Σέρβιρε ζεστό.", en: "Place the apple on top, sprinkle with cinnamon and drizzle with honey. Serve hot.", es: "Coloca la manzana encima, espolvorea con canela y chorrea la miel. Sirve caliente.", fr: "Dispose la pomme par-dessus, saupoudre de cannelle et arrose de miel. Sers chaud." }
  },
  {
    id: "r6", name: "Cottage Bowl Πρωτεΐνης", nameI18n: { el: "Cottage Bowl Πρωτεΐνης", en: "Protein Cottage Bowl", es: "Bowl proteico de cottage", fr: "Bowl cottage protéiné" }, meal: "breakfast", emoji: "🧀",
    ingredients: [
      { foodId: "f8", qty: 200 }, { foodId: "c1", qty: 40 },
      { foodId: "fr1", qty: 80 }, { foodId: "o1", qty: 10 }
    ],
    instructions: "1. Βάλε το cottage cheese σε μπολ.\n2. Ρίξε τη βρώμη ωμή από πάνω (δεν χρειάζεται μαγείρεμα).\n3. Κόψε τη μπανάνα σε ροδέλες.",
    instructionsI18n: { el: "1. Βάλε το cottage cheese σε μπολ.\n2. Ρίξε τη βρώμη ωμή από πάνω (δεν χρειάζεται μαγείρεμα).\n3. Κόψε τη μπανάνα σε ροδέλες.", en: "1. Place the cottage cheese in a bowl.\n2. Pour the raw oats on top (no cooking needed).\n3. Slice the banana into rounds.", es: "1. Coloca el cottage cheese en un bol.\n2. Vierte la avena cruda por encima (no necesita cocción).\n3. Corta el plátano en rodajas.", fr: "1. Place le cottage cheese dans un bol.\n2. Verse l'avoine crue par-dessus (pas de cuisson nécessaire).\n3. Coupe la banane en rondelles." },
    serving: "Στρώσε τη μπανάνα από πάνω και στάξε το μέλι. Έτοιμο σε 2 λεπτά — χωρίς μαγείρεμα.",
    servingI18n: { el: "Στρώσε τη μπανάνα από πάνω και στάξε το μέλι. Έτοιμο σε 2 λεπτά — χωρίς μαγείρεμα.", en: "Lay the banana slices on top and drizzle with honey. Ready in 2 minutes — no cooking required.", es: "Coloca el plátano encima y chorrea la miel. Listo en 2 minutos — sin cocción.", fr: "Dispose les rondelles de banane par-dessus et arrose de miel. Prêt en 2 minutes — sans cuisson." }
  },
  {
    id: "r7", name: "Smoothie Πρωτεΐνης", nameI18n: { el: "Smoothie Πρωτεΐνης", en: "Protein Smoothie", es: "Batido de proteínas", fr: "Smoothie protéiné" }, meal: "breakfast", emoji: "🥤",
    ingredients: [
      { foodId: "d2", qty: 300 }, { foodId: "f9", qty: 30 },
      { foodId: "fr1", qty: 100 },{ foodId: "c1", qty: 30 },
      { foodId: "l4", qty: 15 }
    ],
    instructions: "1. Βάλε πρώτα το γάλα στο blender.\n2. Πρόσθεσε τη μπανάνα (κατεψυγμένη αν θέλεις πιο κρεμώδη υφή), τη βρώμη, το whey και το φυστικοβούτυρο.\n3. Πολτοποίησε σε υψηλή ταχύτητα για 60 δευτερόλεπτα.",
    instructionsI18n: { el: "1. Βάλε πρώτα το γάλα στο blender.\n2. Πρόσθεσε τη μπανάνα (κατεψυγμένη αν θέλεις πιο κρεμώδη υφή), τη βρώμη, το whey και το φυστικοβούτυρο.\n3. Πολτοποίησε σε υψηλή ταχύτητα για 60 δευτερόλεπτα.", en: "1. Add the milk to the blender first.\n2. Add the banana (frozen for a creamier texture), oats, whey and peanut butter.\n3. Blend on high speed for 60 seconds.", es: "1. Añade primero la leche a la batidora.\n2. Incorpora el plátano (congelado para una textura más cremosa), la avena, el whey y la mantequilla de cacahuete.\n3. Mezcla a alta velocidad durante 60 segundos.", fr: "1. Mets d'abord le lait dans le blender.\n2. Ajoute la banane (congelée pour une texture plus crémeuse), l'avoine, le whey et le beurre de cacahuètes.\n3. Mixe à haute vitesse pendant 60 secondes." },
    serving: "Πίνε αμέσως. Μπορείς να προσθέσεις παγάκια για πιο δροσερό αποτέλεσμα.",
    servingI18n: { el: "Πίνε αμέσως. Μπορείς να προσθέσεις παγάκια για πιο δροσερό αποτέλεσμα.", en: "Drink immediately. You can add ice cubes for a cooler result.", es: "Bebe inmediatamente. Puedes añadir cubitos de hielo para un resultado más fresco.", fr: "Bois immédiatement. Tu peux ajouter des glaçons pour un résultat plus frais." }
  },
  {
    id: "r8", name: "Γιαούρτι με Παξιμάδι & Ελιές", nameI18n: { el: "Γιαούρτι με Παξιμάδι & Ελιές", en: "Yogurt with Rusk & Olives", es: "Yogur con tostada y aceitunas", fr: "Yaourt avec biscotte et olives" }, meal: "dinner", emoji: "🫒",
    ingredients: [
      { foodId: "d1", qty: 200 }, { foodId: "c5", qty: 2 },
      { foodId: "l4", qty: 30 },  { foodId: "l1", qty: 1 }
    ],
    instructions: "1. Βάλε το γιαούρτι σε μπολ.\n2. Σπάσε τα παξιμάδια σε κομμάτια ή άφησε τα ολόκληρα δίπλα.\n3. Πρόσθεσε τις ελιές.",
    instructionsI18n: { el: "1. Βάλε το γιαούρτι σε μπολ.\n2. Σπάσε τα παξιμάδια σε κομμάτια ή άφησε τα ολόκληρα δίπλα.\n3. Πρόσθεσε τις ελιές.", en: "1. Place the yogurt in a bowl.\n2. Break the rusks into pieces or leave them whole alongside.\n3. Add the olives.", es: "1. Coloca el yogur en un bol.\n2. Rompe las tostadas en trozos o déjalas enteras al lado.\n3. Añade las aceitunas.", fr: "1. Place le yaourt dans un bol.\n2. Casse les biscottes en morceaux ou laisse-les entières à côté.\n3. Ajoute les olives." },
    serving: "Στάξε το ελαιόλαδο από πάνω και πασπάλισε με ρίγανη. Γρήγορο, χορταστικό και μεσογειακό.",
    servingI18n: { el: "Στάξε το ελαιόλαδο από πάνω και πασπάλισε με ρίγανη. Γρήγορο, χορταστικό και μεσογειακό.", en: "Drizzle olive oil on top and sprinkle with oregano. Quick, filling and Mediterranean.", es: "Chorrea aceite de oliva por encima y espolvorea con orégano. Rápido, saciante y mediterráneo.", fr: "Arrose d'huile d'olive par-dessus et saupoudre d'origan. Rapide, rassasiant et méditerranéen." }
  },
  // ─── ΜΕΣΗΜΕΡΙΑΝΑ ───
  {
    id: "r10", name: "Σουβλάκι Κοτόπουλο + Ρύζι", nameI18n: { el: "Σουβλάκι Κοτόπουλο + Ρύζι", en: "Chicken Souvlaki + Rice", es: "Pollo a la brocheta + arroz", fr: "Brochette de poulet + riz" }, meal: "lunch", emoji: "🍗",
    ingredients: [
      { foodId: "f1", qty: 200 }, { foodId: "c2", qty: 150 },
      { foodId: "v2", qty: 80 },  { foodId: "v3", qty: 80 },
      { foodId: "v4", qty: 60 },  { foodId: "l1", qty: 2 }
    ],
    instructions: "1. Μαρίνα το κοτόπουλο με λεμόνι, ρίγανη, πιπέρι και σκόρδο για τουλάχιστον 30 λεπτά (ή overnight).\n2. Βράσε το ρύζι σύμφωνα με τις οδηγίες της συσκευασίας.\n3. Ψήσε το κοτόπουλο σε σχάρα ή τηγάνι για 7-8 λεπτά ανά πλευρά σε μέτρια-υψηλή φωτιά.",
    instructionsI18n: { el: "1. Μαρίνα το κοτόπουλο με λεμόνι, ρίγανη, πιπέρι και σκόρδο για τουλάχιστον 30 λεπτά (ή overnight).\n2. Βράσε το ρύζι σύμφωνα με τις οδηγίες της συσκευασίας.\n3. Ψήσε το κοτόπουλο σε σχάρα ή τηγάνι για 7-8 λεπτά ανά πλευρά σε μέτρια-υψηλή φωτιά.", en: "1. Marinate the chicken with lemon, oregano, pepper and garlic for at least 30 minutes (or overnight).\n2. Cook the rice according to the packet instructions.\n3. Grill the chicken on a grill or pan for 7-8 minutes per side over medium-high heat.", es: "1. Marina el pollo con limón, orégano, pimienta y ajo durante al menos 30 minutos (o toda la noche).\n2. Cuece el arroz según las instrucciones del paquete.\n3. Asa el pollo en una parrilla o sartén durante 7-8 minutos por lado a fuego medio-alto.", fr: "1. Marine le poulet avec du citron, de l'origan, du poivre et de l'ail pendant au moins 30 minutes (ou toute une nuit).\n2. Cuis le riz selon les instructions du paquet.\n3. Fais griller le poulet sur un gril ou une poêle 7-8 minutes de chaque côté à feu moyen-vif." },
    serving: "Σέρβιρε το κοτόπουλο πάνω στο ρύζι. Δίπλα βάλε σαλάτα με ντοματίνια, αγγούρι και πιπεριά με ελαιόλαδο και λεμόνι.",
    servingI18n: { el: "Σέρβιρε το κοτόπουλο πάνω στο ρύζι. Δίπλα βάλε σαλάτα με ντοματίνια, αγγούρι και πιπεριά με ελαιόλαδο και λεμόνι.", en: "Serve the chicken on top of the rice. Alongside, add a salad with cherry tomatoes, cucumber and pepper with olive oil and lemon.", es: "Sirve el pollo sobre el arroz. Al lado, coloca una ensalada con tomatitos, pepino y pimiento con aceite de oliva y limón.", fr: "Sers le poulet sur le riz. À côté, ajoute une salade de tomates cerises, concombre et poivron avec de l'huile d'olive et du citron." }
  },
  {
    id: "r11", name: "Μακαρόνια με Κιμά", nameI18n: { el: "Μακαρόνια με Κιμά", en: "Pasta with Meat Sauce", es: "Pasta con carne picada", fr: "Pâtes à la viande hachée" }, meal: "lunch", emoji: "🍝",
    ingredients: [
      { foodId: "c3", qty: 150 }, { foodId: "f3", qty: 150 },
      { foodId: "v2", qty: 100 }, { foodId: "v1", qty: 80 },
      { foodId: "v5", qty: 60 }
    ],
    instructions: "1. Βράσε τα μακαρόνια σε αλατισμένο νερό σύμφωνα με τις οδηγίες (συνήθως 10-12 λεπτά).\n2. Σε αντικολλητικό τηγάνι σε μέτρια-υψηλή φωτιά, σοτάρισε τον κιμά χωρίς λάδι μέχρι να ροδίσει (5-6 λεπτά), σπάζοντάς τον με ξύλινη κουτάλα.\n3. Πρόσθεσε τριμμένα ντοματίνια (ή έτοιμη σάλτσα ντομάτας), σκόρδο, κανέλα και ρίγανη.\n4. Σιγόβρασε τη σάλτσα για 10 λεπτά σε χαμηλή φωτιά.\n5. Στράγγισε τα μακαρόνια και ανακάτεψε με τη σάλτσα.",
    instructionsI18n: { el: "1. Βράσε τα μακαρόνια σε αλατισμένο νερό σύμφωνα με τις οδηγίες (συνήθως 10-12 λεπτά).\n2. Σε αντικολλητικό τηγάνι σε μέτρια-υψηλή φωτιά, σοτάρισε τον κιμά χωρίς λάδι μέχρι να ροδίσει (5-6 λεπτά), σπάζοντάς τον με ξύλινη κουτάλα.\n3. Πρόσθεσε τριμμένα ντοματίνια (ή έτοιμη σάλτσα ντομάτας), σκόρδο, κανέλα και ρίγανη.\n4. Σιγόβρασε τη σάλτσα για 10 λεπτά σε χαμηλή φωτιά.\n5. Στράγγισε τα μακαρόνια και ανακάτεψε με τη σάλτσα.", en: "1. Boil the pasta in salted water according to the instructions (usually 10-12 minutes).\n2. In a non-stick pan over medium-high heat, sauté the minced meat without oil until browned (5-6 minutes), breaking it up with a wooden spoon.\n3. Add grated tomatoes (or ready tomato sauce), garlic, cinnamon and oregano.\n4. Simmer the sauce for 10 minutes over low heat.\n5. Drain the pasta and mix with the sauce.", es: "1. Hierve la pasta en agua salada según las instrucciones (normalmente 10-12 minutos).\n2. En una sartén antiadherente a fuego medio-alto, saltea la carne picada sin aceite hasta que se dore (5-6 minutos), rompiéndola con una cuchara de madera.\n3. Añade tomates triturados (o salsa de tomate lista), ajo, canela y orégano.\n4. Hierve la salsa a fuego lento durante 10 minutos.\n5. Escurre la pasta y mezcla con la salsa.", fr: "1. Fais bouillir les pâtes dans de l'eau salée selon les instructions (généralement 10-12 minutes).\n2. Dans une poêle antiadhésive à feu moyen-vif, fais revenir la viande hachée sans huile jusqu'à ce qu'elle soit dorée (5-6 minutes), en la émiettant avec une cuillère en bois.\n3. Ajoute des tomates râpées (ou de la sauce tomate prête), de l'ail, de la cannelle et de l'origan.\n4. Laisse mijoter la sauce pendant 10 minutes à feu doux.\n5. Égoutte les pâtes et mélange avec la sauce." },
    serving: "Σέρβιρε σε πιάτο. Δίπλα βάλε σαλάτα με μαρούλι και καρότο τριμμένο, με λίγο ελαιόλαδο και λεμόνι.",
    servingI18n: { el: "Σέρβιρε σε πιάτο. Δίπλα βάλε σαλάτα με μαρούλι και καρότο τριμμένο, με λίγο ελαιόλαδο και λεμόνι.", en: "Serve on a plate. Alongside, add a salad of lettuce and grated carrot with a little olive oil and lemon.", es: "Sirve en un plato. Al lado, añade una ensalada de lechuga y zanahoria rallada con un poco de aceite de oliva y limón.", fr: "Sers dans une assiette. À côté, ajoute une salade de laitue et de carotte râpée avec un peu d'huile d'olive et de citron." }
  },
  {
    id: "r12", name: "Μπιφτέκια Κοτόπουλο + Πουρές", nameI18n: { el: "Μπιφτέκια Κοτόπουλο + Πουρές", en: "Chicken Burgers + Mash", es: "Hamburguesas de pollo + puré", fr: "Burgers de poulet + purée" }, meal: "lunch", emoji: "🍔",
    ingredients: [
      { foodId: "f1", qty: 200 }, { foodId: "c4", qty: 200 },
      { foodId: "v4", qty: 80 },  { foodId: "v3", qty: 100 },
      { foodId: "d2", qty: 100 }, { foodId: "l1", qty: 1 }
    ],
    instructions: "1. Πολτοποίησε το κοτόπουλο στο multi ή ψιλοκόψε. Ανάμιξε με ψιλοκομμένη κόκκινη πιπεριά, ρίγανη, αλατοπίπερο.\n2. Μόρφωσε σε μπιφτέκια και ψήσε σε αντικολλητικό για 4 λεπτά ανά πλευρά σε μέτρια φωτιά.\n3. Για τον πουρέ: βράσε τις πατάτες, στράγγισε και λιώσε. Πρόσθεσε γάλα και λίγο ελαιόλαδο, αλατοπίπερο.",
    instructionsI18n: { el: "1. Πολτοποίησε το κοτόπουλο στο multi ή ψιλοκόψε. Ανάμιξε με ψιλοκομμένη κόκκινη πιπεριά, ρίγανη, αλατοπίπερο.\n2. Μόρφωσε σε μπιφτέκια και ψήσε σε αντικολλητικό για 4 λεπτά ανά πλευρά σε μέτρια φωτιά.\n3. Για τον πουρέ: βράσε τις πατάτες, στράγγισε και λιώσε. Πρόσθεσε γάλα και λίγο ελαιόλαδο, αλατοπίπερο.", en: "1. Mince the chicken in a food processor or chop finely. Mix with finely chopped red pepper, oregano, salt and pepper.\n2. Shape into patties and cook in a non-stick pan for 4 minutes per side over medium heat.\n3. For the mash: boil the potatoes, drain and mash. Add milk and a little olive oil, salt and pepper.", es: "1. Tritura el pollo en el robot de cocina o pícalo finamente. Mezcla con pimiento rojo picado fino, orégano, sal y pimienta.\n2. Forma hamburguesas y cocina en una sartén antiadherente durante 4 minutos por lado a fuego medio.\n3. Para el puré: hierve las patatas, escurre y tritura. Añade leche y un poco de aceite de oliva, sal y pimienta.", fr: "1. Mixe le poulet au robot ou hache-le finement. Mélange avec du poivron rouge émincé, de l'origan, du sel et du poivre.\n2. Forme en galettes et fais cuire dans une poêle antiadhésive 4 minutes de chaque côté à feu moyen.\n3. Pour la purée : fais bouillir les pommes de terre, égoutte et écrase. Ajoute du lait et un peu d'huile d'olive, sel et poivre." },
    serving: "Σέρβιρε τα μπιφτέκια πάνω στον πουρέ. Δίπλα βάλε αγγούρι σε φέτες.",
    servingI18n: { el: "Σέρβιρε τα μπιφτέκια πάνω στον πουρέ. Δίπλα βάλε αγγούρι σε φέτες.", en: "Serve the patties on top of the mash. Alongside, add cucumber slices.", es: "Sirve las hamburguesas sobre el puré. Al lado, coloca pepino en rodajas.", fr: "Sers les galettes sur la purée. À côté, ajoute des tranches de concombre." }
  },
  {
    id: "r13", name: "Σολομός + Ρύζι & Λαχανικά", nameI18n: { el: "Σολομός + Ρύζι & Λαχανικά", en: "Salmon + Rice & Vegetables", es: "Salmón + arroz y verduras", fr: "Saumon + riz et légumes" }, meal: "lunch", emoji: "🐟",
    ingredients: [
      { foodId: "f4", qty: 180 }, { foodId: "c2", qty: 130 },
      { foodId: "v4", qty: 80 },  { foodId: "v6", qty: 100 },
      { foodId: "l1", qty: 1.5 }
    ],
    instructions: "1. Προθέρμανε τον φούρνο στους 180°C.\n2. Βάλε τον σολομό σε ταψάκι, πρόσθεσε χυμό λεμονιού, δεντρολίβανο και πιπέρι. Ψήσε για 16-18 λεπτά.\n3. Βράσε το ρύζι παράλληλα.\n4. Κόψε πιπεριά και κολοκυθάκι σε κομμάτια, σοτάρισε σε ελαιόλαδο για 5-6 λεπτά.",
    instructionsI18n: { el: "1. Προθέρμανε τον φούρνο στους 180°C.\n2. Βάλε τον σολομό σε ταψάκι, πρόσθεσε χυμό λεμονιού, δεντρολίβανο και πιπέρι. Ψήσε για 16-18 λεπτά.\n3. Βράσε το ρύζι παράλληλα.\n4. Κόψε πιπεριά και κολοκυθάκι σε κομμάτια, σοτάρισε σε ελαιόλαδο για 5-6 λεπτά.", en: "1. Preheat the oven to 180°C.\n2. Place the salmon in a baking dish, add lemon juice, rosemary and pepper. Bake for 16-18 minutes.\n3. Cook the rice in parallel.\n4. Cut the pepper and courgette into pieces, sauté in olive oil for 5-6 minutes.", es: "1. Precalienta el horno a 180°C.\n2. Coloca el salmón en una bandeja, añade zumo de limón, romero y pimienta. Hornea durante 16-18 minutos.\n3. Cuece el arroz en paralelo.\n4. Corta el pimiento y el calabacín en trozos, saltea en aceite de oliva durante 5-6 minutos.", fr: "1. Préchauffe le four à 180°C.\n2. Place le saumon dans un plat allant au four, ajoute du jus de citron, du romarin et du poivre. Fais cuire 16-18 minutes.\n3. Cuis le riz en parallèle.\n4. Coupe le poivron et la courgette en morceaux, fais-les revenir dans de l'huile d'olive pendant 5-6 minutes." },
    serving: "Σέρβιρε το ρύζι σαν βάση, πάνω τα λαχανικά και τελευταίο τον σολομό. Στάξε λίγο επιπλέον λεμόνι.",
    servingI18n: { el: "Σέρβιρε το ρύζι σαν βάση, πάνω τα λαχανικά και τελευταίο τον σολομό. Στάξε λίγο επιπλέον λεμόνι.", en: "Serve the rice as a base, top with the vegetables and finally the salmon. Drizzle a little extra lemon.", es: "Sirve el arroz como base, encima las verduras y por último el salmón. Chorrea un poco más de limón.", fr: "Sers le riz comme base, par-dessus les légumes et enfin le saumon. Arrose d'un peu de citron supplémentaire." }
  },
  {
    id: "r14", name: "Ρεβύθια Σαλάτα + Ψωμί", nameI18n: { el: "Ρεβύθια Σαλάτα + Ψωμί", en: "Chickpea Salad + Bread", es: "Ensalada de garbanzos + pan", fr: "Salade de pois chiches + pain" }, meal: "lunch", emoji: "🫘",
    ingredients: [
      { foodId: "f12", qty: 250 },{ foodId: "v4", qty: 80 },
      { foodId: "v2", qty: 100 }, { foodId: "v3", qty: 80 },
      { foodId: "l1", qty: 2 },   { foodId: "c6", qty: 40 }
    ],
    instructions: "1. Στράγγισε και ξέπλυνε τα ρεβύθια (κονσέρβα) ή χρησιμοποίησε βρασμένα.\n2. Κόψε πιπεριά, ντοματίνια και αγγούρι σε κομμάτια.\n3. Σε μπολ ανακάτεψε όλα τα λαχανικά με τα ρεβύθια.\n4. Πρόσθεσε ελαιόλαδο, χυμό λεμονιού, κύμινο, αλατοπίπερο.\n5. Φτιάξε σος μουστάρδας: 1 κγ μουστάρδα + χυμός λεμονιού — ανακάτεψε καλά.",
    serving: "Σέρβιρε σε βαθύ πιάτο με μια φέτα ψωμί ολικής δίπλα. Βάλε τη σος μουστάρδας χωριστά ή ρίξε από πάνω."
  },
  {
    id: "r15", name: "Κοτόπουλο + Πατάτες Φούρνου", nameI18n: { el: "Κοτόπουλο + Πατάτες Φούρνου", en: "Chicken + Oven Potatoes", es: "Pollo + patatas al horno", fr: "Poulet + pommes de terre au four" }, meal: "lunch", emoji: "🥔",
    ingredients: [
      { foodId: "f1", qty: 200 }, { foodId: "c4", qty: 250 },
      { foodId: "v1", qty: 80 },  { foodId: "v2", qty: 80 },
      { foodId: "l1", qty: 2 }
    ],
    instructions: "1. Προθέρμανε τον φούρνο στους 200°C.\n2. Κόψε τις πατάτες σε τέταρτα, βάλε σε ταψί με ελαιόλαδο, ρίγανη, αλάτι, πιπέρι και χυμό λεμονιού.\n3. Ψήσε για 40 λεπτά μέχρι να ροδίσουν.\n4. Παράλληλα ψήσε το κοτόπουλο στη σχάρα ή σε αντικολλητικό για 7-8 λεπτά ανά πλευρά.",
    serving: "Σέρβιρε κοτόπουλο και πατάτες μαζί. Δίπλα βάλε σαλάτα με μαρούλι, ντοματίνια και ελαιόλαδο με λεμόνι."
  },
  {
    id: "r16", name: "Φακές + Λαχανικά", nameI18n: { el: "Φακές + Λαχανικά", en: "Lentils + Vegetables", es: "Lentejas + verduras", fr: "Lentilles + légumes" }, meal: "lunch", emoji: "🥗",
    ingredients: [
      { foodId: "f11", qty: 250 },{ foodId: "v5", qty: 80 },
      { foodId: "v2", qty: 100 }, { foodId: "l1", qty: 2 },
      { foodId: "c6", qty: 40 }
    ],
    instructions: "1. Χρησιμοποίησε έτοιμες βρασμένες φακές ή βράσε ξερές φακές για 20-25 λεπτά.\n2. Στράγγισε και άφησε να κρυώσουν λίγο.\n3. Κόψε καρότο σε ροδέλες ή τρίψε το, κόψε τα ντοματίνια στη μέση.\n4. Ανακάτεψε φακές + λαχανικά + ελαιόλαδο + χυμό λεμονιού + αλατοπίπερο.",
    serving: "Σέρβιρε σε βαθύ πιάτο ή μπολ. Βάλε μια φέτα ψωμί ολικής δίπλα. Μπορείς να προσθέσεις λίγο ξύδι βαλσάμικο για επιπλέον γεύση."
  },
  {
    id: "r17", name: "Τόνος + Ρύζι & Σαλάτα", nameI18n: { el: "Τόνος + Ρύζι & Σαλάτα", en: "Tuna + Rice & Salad", es: "Atún + arroz y ensalada", fr: "Thon + riz et salade" }, meal: "lunch", emoji: "🐠",
    ingredients: [
      { foodId: "f5", qty: 150 }, { foodId: "c2", qty: 150 },
      { foodId: "v1", qty: 80 },  { foodId: "v2", qty: 80 },
      { foodId: "l1", qty: 1.5 }
    ],
    instructions: "1. Βράσε το ρύζι σύμφωνα με τις οδηγίες.\n2. Στράγγισε τον τόνο καλά, πρόσθεσε χυμό λεμονιού και ρίγανη, ανακάτεψε.\n3. Κόψε το μαρούλι και τα ντοματίνια.",
    serving: "Σέρβιρε το ρύζι σε πιάτο, από πάνω τον τόνο. Βάλε τη σαλάτα δίπλα με ελαιόλαδο και λεμόνι."
  },
  {
    id: "r18", name: "Κοτόσουπα με Ρύζι", nameI18n: { el: "Κοτόσουπα με Ρύζι", en: "Chicken Soup with Rice", es: "Sopa de pollo con arroz", fr: "Soupe de poulet au riz" }, meal: "lunch", emoji: "🍲",
    ingredients: [
      { foodId: "f1", qty: 150 }, { foodId: "c2", qty: 120 },
      { foodId: "v5", qty: 60 },  { foodId: "v6", qty: 60 }
    ],
    instructions: "1. Βάλε το κοτόπουλο ολόκληρο ή σε κομμάτια σε κατσαρόλα με νερό (να σκεπάζει), καρότο και κολοκυθάκι.\n2. Βράσε σε μέτρια φωτιά για 40-45 λεπτά.\n3. Βγάλε το κοτόπουλο, κόψε σε κομμάτια και επέστρεψε στην κατσαρόλα.\n4. Πρόσθεσε το ρύζι και βράσε για ακόμα 15 λεπτά.\n5. Προσθέσε αλάτι και πιπέρι.",
    serving: "Σέρβιρε ζεστό σε βαθύ πιάτο. Στύψε χυμό λεμονιού από πάνω. Ιδανικό για κρύες μέρες ή μετά από άσκηση."
  },
  // ─── ΒΡΑΔΙΝΑ ───
  {
    id: "r20", name: "Μεσογειακό Μπολ Γιαουρτιού", nameI18n: { el: "Μεσογειακό Μπολ Γιαουρτιού", en: "Mediterranean Yogurt Bowl", es: "Bowl mediterráneo de yogur", fr: "Bowl méditerranéen au yaourt" }, meal: "dinner", emoji: "🫙",
    ingredients: [
      { foodId: "d1", qty: 200 }, { foodId: "c8", qty: 2 },
      { foodId: "l5", qty: 5 },   { foodId: "v2", qty: 80 },
      { foodId: "v3", qty: 80 },  { foodId: "l1", qty: 1 }
    ],
    instructions: "1. Κόψε τα ντοματίνια στη μέση και το αγγούρι σε φέτες ή κύβους.\n2. Βάλε το γιαούρτι σε μπολ.\n3. Σπάσε τα παξιμάδια σε κομμάτια και βάλε από πάνω.\n4. Πρόσθεσε τα λαχανικά και τις ελιές.",
    serving: "Στάξε ελαιόλαδο, πασπάλισε με ρίγανη. Ελαφρύ, γρήγορο και χορταστικό βραδινό."
  },
  {
    id: "r21", name: "Ομελέτα Πιπεριάς", nameI18n: { el: "Ομελέτα Πιπεριάς", en: "Bell Pepper Omelette", es: "Tortilla de pimiento", fr: "Omelette au poivron" }, meal: "dinner", emoji: "🍳",
    ingredients: [
      { foodId: "f7", qty: 3 },   { foodId: "v4", qty: 100 },
      { foodId: "v2", qty: 80 },  { foodId: "c6", qty: 40 }
    ],
    instructions: "1. Χτύπησε τα 3 αυγά με αλατοπίπερο και ρίγανη.\n2. Ψιλοκόψε την κόκκινη πιπεριά, κόψε τα ντοματίνια στη μέση.\n3. Ζέστανε αντικολλητικό τηγάνι σε μέτρια φωτιά — χωρίς λάδι.\n4. Σοτάρισε την πιπεριά για 2 λεπτά.\n5. Ρίξε τα αυγά, σκέπασε με καπάκι και ψήσε για 3-4 λεπτά.",
    serving: "Βγάλε σε πιάτο, βάλε τα ντοματίνια δίπλα και σέρβιρε με μια φέτα ψωμί ολικής."
  },
  {
    id: "r22", name: "Τονοσαλάτα", nameI18n: { el: "Τονοσαλάτα", en: "Tuna Salad", es: "Ensalada de atún", fr: "Salade de thon" }, meal: "dinner", emoji: "🥗",
    ingredients: [
      { foodId: "f5", qty: 100 }, { foodId: "v1", qty: 100 },
      { foodId: "v2", qty: 80 },  { foodId: "v3", qty: 80 },
      { foodId: "l1", qty: 2 }
    ],
    instructions: "1. Στράγγισε καλά τον τόνο από τη συσκευασία.\n2. Κόψε μαρούλι σε λωρίδες, ντοματίνια στη μέση, αγγούρι σε φέτες.\n3. Ανακάτεψε όλα σε μπολ.",
    serving: "Πρόσθεσε ελαιόλαδο, χυμό λεμονιού και αλατοπίπερο. Σέρβιρε αμέσως — απλό και πολύ θρεπτικό βραδινό."
  },
  {
    id: "r23", name: "Σαλάτα Κοτόπουλο", nameI18n: { el: "Σαλάτα Κοτόπουλο", en: "Chicken Salad", es: "Ensalada de pollo", fr: "Salade de poulet" }, meal: "dinner", emoji: "🥙",
    ingredients: [
      { foodId: "f1", qty: 150 }, { foodId: "v1", qty: 100 },
      { foodId: "v5", qty: 60 },  { foodId: "v2", qty: 80 },
      { foodId: "d1", qty: 80 },  { foodId: "o5", qty: 10 }
    ],
    instructions: "1. Ψήσε το κοτόπουλο σε σχάρα ή τηγάνι, αλατοπίπερο. Άφησε να κρυώσει λίγο και κόψε σε λωρίδες.\n2. Φτιάξε τη σος: ανακάτεψε γιαούρτι, μουστάρδα, χυμό λεμονιού και ρίγανη μέχρι να γίνει ομοιόμορφη.\n3. Κόψε μαρούλι, τρίψε καρότο, κόψε ντοματίνια.",
    serving: "Στρώσε τη σαλάτα σε πιάτο, βάλε το κοτόπουλο από πάνω και ρίξε τη σος. Ιδανικό ελαφρύ βραδινό."
  },
  {
    id: "r24", name: "Αυγά Βραστά + Σαλάτα", nameI18n: { el: "Αυγά Βραστά + Σαλάτα", en: "Boiled Eggs + Salad", es: "Huevos cocidos + ensalada", fr: "Œufs durs + salade" }, meal: "dinner", emoji: "🥚",
    ingredients: [
      { foodId: "f7", qty: 3 },   { foodId: "v1", qty: 100 },
      { foodId: "v2", qty: 80 },  { foodId: "v3", qty: 80 },
      { foodId: "l5", qty: 5 },   { foodId: "l1", qty: 1.5 }
    ],
    instructions: "1. Βράσε 3 αυγά: σε κρύο νερό, μέτρησε 8 λεπτά από τη στιγμή που βράσει το νερό για σφιχτά.\n2. Κρύωσε σε κρύο νερό, ξεφλούδισε και κόψε στη μέση.\n3. Κόψε μαρούλι, ντοματίνια και αγγούρι.",
    serving: "Στρώσε τη σαλάτα, βάλε τα αυγά και τις ελιές. Ρίξε ελαιόλαδο και βαλσάμικο. Απλό, γρήγορο και πλούσιο σε πρωτεΐνη."
  },
  {
    id: "r25", name: "Cottage Μπολ Βραδινό", nameI18n: { el: "Cottage Μπολ Βραδινό", en: "Evening Cottage Bowl", es: "Bowl nocturno de cottage", fr: "Bowl cottage du soir" }, meal: "dinner", emoji: "🧀",
    ingredients: [
      { foodId: "f8", qty: 200 }, { foodId: "c8", qty: 2 },
      { foodId: "v2", qty: 100 }, { foodId: "l1", qty: 2 }
    ],
    instructions: "1. Βάλε το cottage cheese σε μπολ.\n2. Κόψε τα ντοματίνια στη μέση.\n3. Σπάσε τα παξιμάδια δίπλα ή από πάνω.",
    serving: "Στάξε ελαιόλαδο, πασπάλισε με ρίγανη. Ελαφρύ βραδινό, πλούσιο σε πρωτεΐνη — ιδανικό πριν τον ύπνο."
  },
  // ─── ΝΕΕΣ ΣΥΝΤΑΓΕΣ ΜΕΣΗΜΕΡΙΑΝΩΝ ───
  {
    id: "r40", name: "Γεμιστά (Κιμάς + Ρύζι)", nameI18n: { el: "Γεμιστά (Κιμάς + Ρύζι)", en: "Stuffed Peppers (Meat + Rice)", es: "Pimientos rellenos (carne + arroz)", fr: "Poivrons farcis (viande + riz)" }, meal: "lunch", emoji: "🫑",
    // Μερίδα ~250g: πιπεριά 50g + κιμάς 30g + ρύζι μαγ. 150g + ντομάτα 20g + λάδι 20ml
    // Αναλογία κιμά:ρύζι = 1:5 (μαγειρεμένο)
    ingredients: [
      { foodId: "f3", qty: 30 },   // κιμάς
      { foodId: "c2", qty: 150 },  // ρύζι μαγειρεμένο (5× τον κιμά)
      { foodId: "v4", qty: 50 },   // πιπεριά (δοχείο) max 50g
      { foodId: "v2", qty: 20 },   // ντομάτα τριμμένη στη γέμιση
      { foodId: "l1", qty: 4 }     // 4 κ.γ. = 20ml
    ],
    instructions: "1. Κόψε τα καπάκια από πιπεριές και ντομάτες, άδειασε τη μέσα χωρίς να σπάσεις τα τοιχώματα.\n2. Σοτάρισε τον κιμά σε τηγάνι χωρίς λάδι, πρόσθεσε ρύζι (ωμό), αλάτι, πιπέρι, ρίγανη και λίγη τριμμένη ντομάτα.\n3. Γέμισε τα λαχανικά με τη γέμιση μέχρι τα ¾ — το ρύζι φουσκώνει κατά το ψήσιμο.\n4. Βάλε σε ταψί με λίγο νερό στον πάτο, ρίξε 2 κ.σ. ελαιόλαδο πάνω.\n5. Φούρνος 180°C για 50 λεπτά — τα πρώτα 30 με αλουμινόχαρτο, μετά χωρίς για να ροδίσουν.",
    serving: "Σέρβιρε 1 γεμιστό (~250g) ανά μερίδα. Κλασική ελληνική συνταγή — ακόμα καλύτερη την επόμενη μέρα."
  },
  {
    id: "r41", name: "Ρεβύθια Σούπα", nameI18n: { el: "Ρεβύθια Σούπα", en: "Chickpea Soup", es: "Sopa de garbanzos", fr: "Soupe de pois chiches" }, meal: "lunch", emoji: "🫘",
    ingredients: [
      { foodId: "f12", qty: 150 }, { foodId: "v5", qty: 60 },
      { foodId: "v2", qty: 80 },  { foodId: "l1", qty: 1 },
      { foodId: "c6", qty: 30 }
    ],
    instructions: "1. Χρησιμοποίησε έτοιμα ρεβύθια κονσέρβας ή μούλιαξε ξερά βράδυ και βράσε 1 ώρα.\n2. Σε κατσαρόλα, σοτάρισε καρότο σε κύβους με λίγο ελαιόλαδο για 3 λεπτά.\n3. Πρόσθεσε τα ρεβύθια, ντοματίνια, ζωμό ή νερό (να σκεπάζει).\n4. Βράσε για 20 λεπτά. Πρόσθεσε χυμό λεμονιού στο τέλος.",
    serving: "Σέρβιρε ζεστό σε βαθύ πιάτο. Βάλε μια φέτα ψωμί ολικής δίπλα. Ρίξε λίγο επιπλέον ελαιόλαδο για γεύση."
  },
  {
    id: "r44", name: "Ψάρι Πλακί (Μπακαλίαρος)", nameI18n: { el: "Ψάρι Πλακί (Μπακαλίαρος)", en: "Baked Fish (Cod)", es: "Pescado al horno (bacalao)", fr: "Poisson au four (cabillaud)" }, meal: "lunch", emoji: "🐟",
    ingredients: [
      { foodId: "f6", qty: 180 }, { foodId: "v2", qty: 150 },
      { foodId: "v4", qty: 80 },  { foodId: "l1", qty: 2 },
      { foodId: "c6", qty: 30 }
    ],
    instructions: "1. Προθέρμανε τον φούρνο στους 180°C.\n2. Σε ταψάκι στρώσε τομάτες κομμένες, πιπεριά, σκόρδο φέτες και ελαιόλαδο.\n3. Τοποθέτησε τον μπακαλίαρο από πάνω, αλατοπίπερο, ρίγανη.\n4. Ψήσε για 28-30 λεπτά μέχρι το ψάρι να ξεκολλά εύκολα.",
    serving: "Σέρβιρε το ψάρι με τη σάλτσα λαχανικών από κάτω. Βάλε μια φέτα ψωμί δίπλα για να πιάνεις τη σάλτσα."
  },
  {
    id: "r45", name: "Κινόα Bowl Κοτόπουλο", nameI18n: { el: "Κινόα Bowl Κοτόπουλο", en: "Chicken Quinoa Bowl", es: "Bowl de quinoa y pollo", fr: "Bowl quinoa poulet" }, meal: "lunch", emoji: "🥣",
    ingredients: [
      { foodId: "c11", qty: 130 }, { foodId: "f1", qty: 120 },
      { foodId: "v7", qty: 80 },   { foodId: "v2", qty: 80 },
      { foodId: "l1", qty: 1.5 }
    ],
    instructions: "1. Βράσε κινόα σε αναλογία 1:2 με νερό για 15 λεπτά — ανακάτεψε, σκέπασε και άφησε 5 λεπτά.\n2. Ψήσε το κοτόπουλο σε σχάρα με αλατοπίπερο, 7 λεπτά ανά πλευρά. Κόψε σε κομμάτια.\n3. Σοτάρισε σπανάκι με λίγο ελαιόλαδο για 1-2 λεπτά μέχρι να μαραθεί.",
    serving: "Στρώσε κινόα σαν βάση στο μπολ. Πρόσθεσε σπανάκι, κοτόπουλο, ντοματίνια. Ρίξε ελαιόλαδο και χυμό λεμονιού."
  },
  {
    id: "r46", name: "Σπανακόρυζο", nameI18n: { el: "Σπανακόρυζο", en: "Spinach Rice", es: "Arroz con espinacas", fr: "Riz aux épinards" }, meal: "lunch", emoji: "🌿",
    ingredients: [
      { foodId: "c2", qty: 100 }, { foodId: "v7", qty: 150 },
      { foodId: "l1", qty: 1.5 }, { foodId: "d4", qty: 20 },
      { foodId: "v2", qty: 80 }
    ],
    instructions: "1. Σε κατσαρόλα ζέστανε ελαιόλαδο σε μέτρια φωτιά.\n2. Πρόσθεσε σπανάκι και ανακάτεψε μέχρι να μαραθεί (2-3 λεπτά).\n3. Πρόσθεσε ντομάτες κομμένες, ρύζι, άνηθο, αλατοπίπερο και νερό να σκεπάζει.\n4. Σιγόβρασε με καπάκι για 20 λεπτά μέχρι να μαλακώσει το ρύζι.",
    serving: "Σέρβιρε ζεστό με φέτα τυρί τριμμένη από πάνω. Κλασικό ελληνικό πιάτο — νόστιμο και θρεπτικό."
  },
  {
    id: "r48", name: "Κοτόπουλο Κάρυ + Ρύζι", nameI18n: { el: "Κοτόπουλο Κάρυ + Ρύζι", en: "Chicken Curry + Rice", es: "Pollo al curry + arroz", fr: "Poulet curry + riz" }, meal: "lunch", emoji: "🍛",
    ingredients: [
      { foodId: "f1", qty: 140 }, { foodId: "c2", qty: 90 },
      { foodId: "d1", qty: 60 },  { foodId: "v4", qty: 80 },
      { foodId: "l1", qty: 1 }
    ],
    instructions: "1. Κόψε κοτόπουλο και πιπεριά σε κομμάτια.\n2. Σοτάρισε σε ελαιόλαδο για 5 λεπτά.\n3. Πρόσθεσε κάρυ (1 κγ), κουρκουμά (½ κγ), αλατοπίπερο και ανακάτεψε.\n4. Ρίξε το γιαούρτι, χαμήλωσε τη φωτιά και σιγόβρασε για 8-10 λεπτά.\n5. Βράσε το ρύζι παράλληλα.",
    serving: "Σέρβιρε το κάρυ πάνω στο ρύζι. Αρωματικό, εύκολο και νόστιμο — ιδανικό για να αλλάξεις ρουτίνα."
  },
  // ─── ΝΕΕΣ ΣΥΝΤΑΓΕΣ ΒΡΑΔΙΝΩΝ ───
  {
    id: "r49", name: "Αβγά Σκραμπλ με Σπανάκι", nameI18n: { el: "Αβγά Σκραμπλ με Σπανάκι", en: "Scrambled Eggs with Spinach", es: "Huevos revueltos con espinacas", fr: "Œufs brouillés aux épinards" }, meal: "dinner", emoji: "🍳",
    ingredients: [
      { foodId: "f7", qty: 3 },   { foodId: "v7", qty: 150 },
      { foodId: "v2", qty: 80 },  { foodId: "l1", qty: 1 },
      { foodId: "d4", qty: 15 }
    ],
    instructions: "1. Σοτάρισε σπανάκι με λίγο ελαιόλαδο σε τηγάνι για 1-2 λεπτά μέχρι να μαραθεί. Βγάλε στο πλάι.\n2. Χτύπησε τα αυγά με αλατοπίπερο.\n3. Ρίξε στο ίδιο τηγάνι, ανακάτεψε αργά σε χαμηλή φωτιά.\n4. Λίγο πριν στεγνώσουν εντελώς, ρίξε το σπανάκι και τα ντοματίνια κομμένα.",
    serving: "Βγάλε σε πιάτο και τρίψε λίγη φέτα από πάνω. Ελαφρύ, πρωτεϊνούχο βραδινό έτοιμο σε 10 λεπτά."
  },
  // ─── ΝΕΕΣ ΣΥΝΤΑΓΕΣ ΣΝΑΚ ───
  {
    id: "r50", name: "Cottage + Ριζογκοφρέτες", nameI18n: { el: "Cottage + Ριζογκοφρέτες", en: "Cottage + Rice Cakes", es: "Cottage + tortas de arroz", fr: "Cottage + galettes de riz" }, meal: "snack", emoji: "🧀",
    ingredients: [{ foodId: "c7", qty: 3 }, { foodId: "f8", qty: 100 }],
    instructions: "1. Βάλε το cottage cheese σε μικρό μπολ.\n2. Βάλε τις ριζογκοφρέτες δίπλα.",
    serving: "Άπλωσε cottage στις ριζογκοφρέτες ή τρώγε χωριστά. Υψηλή πρωτεΐνη, χαμηλές θερμίδες — ιδανικό σνακ."
  },
  // ─── ΣΝΑΚ (original) ───
  {
    id: "r30", name: "Shaker Πρωτεΐνης + Φρούτο", nameI18n: { el: "Shaker Πρωτεΐνης + Φρούτο", en: "Protein Shaker + Fruit", es: "Batido de proteínas + fruta", fr: "Shaker protéiné + fruit" }, meal: "snack", emoji: "💪",
    ingredients: [{ foodId: "f9", qty: 30 }, { foodId: "fr2", qty: 150 }],
    instructions: "1. Ανακάτεψε 30g whey σε 250-300ml νερό ή γάλα με κουτάλι ή σέικερ.",
    serving: "Πίνε αμέσως. Φάε το φρούτο δίπλα ή μέσα στο σέικ. Ιδανικό post-workout σνακ."
  },
  {
    id: "r31", name: "Μήλο + Αμύγδαλα", nameI18n: { el: "Μήλο + Αμύγδαλα", en: "Apple + Almonds", es: "Manzana + almendras", fr: "Pomme + amandes" }, meal: "snack", emoji: "🍎",
    ingredients: [{ foodId: "fr2", qty: 150 }, { foodId: "l2", qty: 20 }],
    instructions: "1. Κόψε το μήλο σε φέτες ή τρώγε ολόκληρο.",
    serving: "Φάε τα αμύγδαλα μαζί με το μήλο — συνδυασμός φυτικών ινών, πρωτεΐνης και καλών λιπαρών. Γρήγορο και θρεπτικό."
  },
  {
    id: "r32", name: "Ριζογκοφρέτες + Πρωτεϊνούχο Σέικ", nameI18n: { el: "Ριζογκοφρέτες + Πρωτεϊνούχο Σέικ", en: "Rice Cakes + Protein Shake", es: "Tortas de arroz + batido proteico", fr: "Galettes de riz + shake protéiné" }, meal: "snack", emoji: "🌾",
    ingredients: [{ foodId: "c7", qty: 2 }, { foodId: "f9", qty: 30 }],
    instructions: "1. Ανακάτεψε 30g whey σε 250ml νερό με σέικερ ή κουτάλι.",
    serving: "Πίνε το σέικ και φάε τις ριζογκοφρέτες δίπλα. Απλό και πρακτικό σνακ για κάθε ώρα."
  },
  {
    id: "r33", name: "Γιαούρτι + Καρύδια + Μέλι", nameI18n: { el: "Γιαούρτι + Καρύδια + Μέλι", en: "Yogurt + Walnuts + Honey", es: "Yogur + nueces + miel", fr: "Yaourt + noix + miel" }, meal: "snack", emoji: "🫙",
    ingredients: [{ foodId: "d1", qty: 200 }, { foodId: "l3", qty: 20 }, { foodId: "o1", qty: 10 }],
    instructions: "1. Βάλε το γιαούρτι σε μπολ.\n2. Πρόσθεσε καρύδια σπασμένα.",
    serving: "Στάξε το μέλι από πάνω. Απλό, χορταστικό και πλούσιο σε omega-3 από τα καρύδια."
  },
  {
    id: "r51", name: "Ομελέτα + Παξιμάδι Χαρουπί", nameI18n: { el: "Ομελέτα + Παξιμάδι Χαρουπί", en: "Omelette + Carob Rusk", es: "Tortilla + galleta de algarroba", fr: "Omelette + biscotte carob" }, meal: "dinner", emoji: "🍳",
    ingredients: [
      { foodId: "f7", qty: 2   },
      { foodId: "l1", qty: 1   },
      { foodId: "f8", qty: 200 },
      { foodId: "v2", qty: 100 },
      { foodId: "c8", qty: 1   }
    ],
    instructions: "1. Χτύπησε τα αυγά με αλάτι, πιπέρι.\n2. Ψήσε σε αντικολλητικό με λίγο ελαιόλαδο σε μέτρια φωτιά.\n3. Διπλωσε την ομελέτα όταν είναι σχεδόν έτοιμη.",
    serving: "Σέρβιρε με ντοματίνια κομμένα, το παξιμάδι χαρουπί και cottage cheese στο πλάι. Ελαφρύ βραδινό."
  },
];

// Άδεια εβδομάδα — χρησιμοποιείται ως αρχική κατάσταση πριν δημιουργηθεί πρόγραμμα
const EMPTY_WEEK = [1,2,3,4,5,6,7].map(d => ({ day: d, label: `Ημέρα ${d}`, meals: [] }));

// Πρότυπη εβδομάδα (7 ημέρες) — βελτιστοποιημένη για ~1700 kcal/ημέρα
// Κανόνας: αν πρωί γιαούρτι → δεκατ ΟΧΙ γιαούρτι · ποικιλία ανά ημέρα
const DEFAULT_WEEK = [
  {
    // Ημ1: γιαούρτι+βρώμη / μήλο / κοτόσουπα / whey / ομελέτα+παξιμάδι ≈ 1680 kcal
    // Κανόνας: πρωί γιαούρτι → βραδινό ΟΧΙ γιαούρτι (r51 αντί r20)
    day: 1, label: "Ημέρα 1",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r3",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r31", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r18", done: false, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r30", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r51", done: false, waterNoteIdx: 4 },
    ]
  },
  {
    // Ημ2: smoothie / whey / μακαρόνια κιμά / μήλο / τονοσαλάτα ≈ 1673 kcal
    day: 2, label: "Ημέρα 2",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r7",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r32", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r11", done: false, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r31", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r22", done: false, waterNoteIdx: 4 },
    ]
  },
  {
    // Ημ3: power oat / cottage+ριζογκ / κινόα bowl / whey / αβγά σπανάκι ≈ 1756 kcal
    day: 3, label: "Ημέρα 3",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r1",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r50", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r45", done: false, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r32", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r49", done: false, waterNoteIdx: 4 },
    ]
  },
  {
    // Ημ4: τοστ αυγά / μήλο / ρεβύθια σούπα / whey / αβγά βραστά σαλάτα ≈ 1639 kcal
    day: 4, label: "Ημέρα 4",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r4",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r31", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r41", done: false, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r32", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r24", done: false, waterNoteIdx: 4 },
    ]
  },
  {
    // Ημ5: cottage bowl / whey / σολομός light / μήλο / ομελέτα πιπεριάς ≈ 1701 kcal
    day: 5, label: "Ημέρα 5",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r6",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r32", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r13", done: false, scaleFactor: 0.8, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r31", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r21", done: false, waterNoteIdx: 4 },
    ]
  },
  {
    // Ημ6: overnight oats / μήλο / φακές / cottage+ριζογκ / τονοσαλάτα ≈ 1608 kcal
    day: 6, label: "Ημέρα 6",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r2",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r31", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r16", done: false, scaleFactor: 0.85, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r50", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r22", done: false, waterNoteIdx: 4 },
    ]
  },
  {
    // Ημ7: γιαούρτι+παξιμάδι / whey / κοτόπουλο κάρυ / μήλο / cottage βραδ ≈ 1612 kcal
    day: 7, label: "Ημέρα 7",
    meals: [
      { time: "07:00", type: "breakfast", recipeId: "r3",  done: false, waterNoteIdx: 0 },
      { time: "10:00", type: "snack",     recipeId: "r32", done: false, waterNoteIdx: 1 },
      { time: "13:00", type: "lunch",     recipeId: "r48", done: false, waterNoteIdx: 2 },
      { time: "16:00", type: "afternoon",     recipeId: "r31", done: false, waterNoteIdx: 3 },
      { time: "19:30", type: "dinner",    recipeId: "r25", done: false, waterNoteIdx: 4 },
    ]
  },
];

// ============================================================
// STANDARD_MEALS — Πραγματικά στάνταρ γεύματα χρήστη
// Οι θερμίδες είναι εκτιμητικές (+/- 10%)
// Δομή: { id, name, emoji, meal, kcal_est, note, items[] }
// ============================================================
const STANDARD_MEALS = [

  // ─── ΠΡΩΙΝΑ ───
  {
    id: "sm1", meal: "breakfast", emoji: "🫙",
    name: "Ταχίνι 2κγ & 2 φέτες τοστ",
    nameI18n: { el: "Ταχίνι 2κγ & 2 φέτες τοστ", en: "Tahini 2 tsp & 2 slices of toast", es: "Tahini 2 cdita & 2 tostadas", fr: "Tahini 2 càc & 2 tranches de toast" },
    kcal_est: 250, p: 8, c: 32, f: 10,
    note: "Κλασικό γρήγορο πρωινό",
    items: ["2 κγ ταχίνι (~30g)", "2 φέτες ψωμί τοστ (~60g)"]
  },
  {
    id: "sm2", meal: "breakfast", emoji: "🫙",
    name: "Γιαούρτι 2% 200g",
    nameI18n: { el: "Γιαούρτι 2% 200g", en: "Yogurt 2% 200g", es: "Yogur 2% 200g", fr: "Yaourt 2% 200g" },
    kcal_est: 136, p: 16, c: 8, f: 8,
    note: "Συχνά ως συμπλήρωμα πρωινού",
    items: ["200g γιαούρτι 2%"]
  },
  {
    id: "sm3", meal: "breakfast", emoji: "🍯",
    name: "Μέλι 2κγ & 2 φέτες τοστ",
    nameI18n: { el: "Μέλι 2κγ & 2 φέτες τοστ", en: "Honey 2 tsp & 2 slices of toast", es: "Miel 2 cdita & 2 tostadas", fr: "Miel 2 càc & 2 tranches de toast" },
    kcal_est: 200, p: 5, c: 40, f: 2,
    note: "Γλυκό εναλλακτικό πρωινό",
    items: ["2 κγ μέλι (~30g)", "2 φέτες ψωμί τοστ (~60g)"]
  },
  {
    id: "sm4", meal: "breakfast", emoji: "🫙",
    name: "Γιαούρτι 200g + Πρωτεΐνη 30g + Βρώμη 5κσ",
    nameI18n: { el: "Γιαούρτι 200g + Πρωτεΐνη 30g + Βρώμη 5κσ", en: "Yogurt 200g + Protein 30g + Oats 5 tbsp", es: "Yogur 200g + Proteína 30g + Avena 5 cdas", fr: "Yaourt 200g + Protéine 30g + Avoine 5 càs" },
    kcal_est: 350, p: 42, c: 30, f: 5,
    note: "Υψηλή πρωτεΐνη, χορταστικό",
    items: ["200g γιαούρτι 2%", "30g whey isolate", "5 κ.σ. βρώμη (~50g)"]
  },
  {
    id: "sm5", meal: "breakfast", emoji: "🌾",
    name: "Ταχίνι 2κγ & 4 ριζογκοφρέτες",
    nameI18n: { el: "Ταχίνι 2κγ & 4 ριζογκοφρέτες", en: "Tahini 2 tsp & 4 rice cakes", es: "Tahini 2 cdita & 4 tortas de arroz", fr: "Tahini 2 càc & 4 galettes de riz" },
    kcal_est: 240, p: 7, c: 28, f: 11,
    note: "Gluten-free εναλλακτικό",
    items: ["2 κγ ταχίνι (~30g)", "4 ριζογκοφρέτες"]
  },
  {
    id: "sm6", meal: "breakfast", emoji: "🍞",
    name: "1 φέτα τοστ, ξηροί καρποί, μέλι & ταχίνι",
    nameI18n: { el: "1 φέτα τοστ, ξηροί καρποί, μέλι & ταχίνι", en: "1 slice of toast, nuts, honey & tahini", es: "1 tostada, frutos secos, miel & tahini", fr: "1 tranche de toast, noix, miel & tahini" },
    kcal_est: 220, p: 6, c: 24, f: 11,
    note: "Ενεργειακό & γρήγορο πρωινό",
    items: ["1 φέτα ψωμί τοστ (~30g)", "10g ξηροί καρποί", "1 κγ μέλι (~15g)", "1 κγ ταχίνι (~15g)"]
  },
  {
    id: "sm7", meal: "breakfast", emoji: "🍞",
    name: "1 φέτα τοστ, ξηροί καρποί, μέλι & φυστικοβούτυρο",
    nameI18n: { el: "1 φέτα τοστ, ξηροί καρποί, μέλι & φυστικοβούτυρο", en: "1 slice of toast, nuts, honey & peanut butter", es: "1 tostada, frutos secos, miel & mantequilla de cacahuete", fr: "1 tranche de toast, noix, miel & beurre de cacahuète" },
    kcal_est: 225, p: 7, c: 24, f: 12,
    note: "Ενεργειακό με φυστικοβούτυρο",
    items: ["1 φέτα ψωμί τοστ (~30g)", "10g ξηροί καρποί", "1 κγ μέλι (~15g)", "1 κγ φυστικοβούτυρο (~15g)"]
  },
  {
    id: "sm8", meal: "breakfast", emoji: "🥚",
    name: "1 φέτα τοστ, κασέρι, γαλοπούλα & 2 ασπράδια",
    nameI18n: { el: "1 φέτα τοστ, κασέρι, γαλοπούλα & 2 ασπράδια", en: "1 slice of toast, kasseri cheese, turkey & 2 egg whites", es: "1 tostada, queso kaseri, pavo & 2 claras de huevo", fr: "1 tranche de toast, fromage kasseri, dinde & 2 blancs d'œufs" },
    kcal_est: 210, p: 24, c: 14, f: 6,
    note: "Υψηλή πρωτεΐνη, χαμηλά λίπη",
    items: ["1 φέτα ψωμί τοστ (~30g)", "1 φέτα κασέρι light (~20g)", "30g γαλοπούλα φέτα", "2 βραστά ασπράδια αυγού"]
  },
  {
    id: "sm9", meal: "breakfast", emoji: "🥚",
    name: "Αυγό βραστό, ντοματίνια & παξιμαδάκια",
    nameI18n: { el: "Αυγό βραστό, ντοματίνια & παξιμαδάκια", en: "Boiled egg, cherry tomatoes & rusks", es: "Huevo cocido, tomatitos & tostadas", fr: "Œuf dur, tomates cerises & biscottes" },
    kcal_est: 250, p: 8, c: 28, f: 6,
    note: "Ελαφρύ & χορταστικό",
    items: ["1 αυγό βραστό", "4-5 ντοματίνια", "2 παξιμαδάκια χαρουπιού (~30g)"]
  },
  {
    id: "sm19", meal: "breakfast", emoji: "🥨",
    name: "Κουλούρι Θεσσαλονίκης ολικής",
    nameI18n: { el: "Κουλούρι Θεσσαλονίκης ολικής", en: "Thessaloniki sesame bagel (whole grain)", es: "Rosca de sésamo de Salónica integral", fr: "Bagel au sésame de Thessalonique complet" },
    kcal_est: 300, p: 10, c: 56, f: 4,
    note: "Γρήγορο & ενεργειακό",
    items: ["1 κουλούρι Θεσσαλονίκης ολικής άλεσης"]
  },
  {
    id: "sm25", meal: "breakfast", emoji: "🥪",
    name: "Τοστ ολικής με γαλοπούλα & Philadelphia",
    nameI18n: { el: "Τοστ ολικής με γαλοπούλα & Philadelphia", en: "Whole grain toast with turkey & Philadelphia", es: "Tostada integral con pavo & Philadelphia", fr: "Toast complet avec dinde & Philadelphia" },
    kcal_est: 260, p: 12, c: 32, f: 7,
    note: "Πλήρες & ισορροπημένο πρωινό",
    items: ["2 φέτες ψωμί ολικής", "1 φέτα γαλοπούλα", "½ φέτα κίτρινο τυρί", "1 κγ Philadelphia Light", "μαρούλι & ντομάτα"]
  },
  {
    id: "sm26", meal: "breakfast", emoji: "🥣",
    name: "Porridge βρώμης (Σαββατοκύριακο)",
    nameI18n: { el: "Porridge βρώμης (Σαββατοκύριακο)", en: "Oat porridge (Weekend)", es: "Porridge de avena (Fin de semana)", fr: "Porridge d'avoine (Week-end)" },
    kcal_est: 290, p: 9, c: 46, f: 5,
    note: "Χορταστικό & ζεστό — με κανέλα",
    items: ["250ml γάλα 1,5%", "30g βρώμη (3 κσ)", "1 κγ μέλι", "1 κγ κακάο άγλυκο (προαιρετικό)", "κανέλα"]
  },

  // ─── ΣΝΑΚ / ΔΕΚΑΤΙΑΝΑ / ΠΡΟΑΡΙΣΤΟ ───
  {
    id: "sm10", meal: "snack", emoji: "🍎",
    name: "Μήλο & 5 αμύγδαλα",
    nameI18n: { el: "Μήλο & 5 αμύγδαλα", en: "Apple & 5 almonds", es: "Manzana & 5 almendras", fr: "Pomme & 5 amandes" },
    kcal_est: 140, p: 3, c: 22, f: 5,
    note: "Ελαφρύ πρωινό σνακ",
    items: ["1 μήλο (~150g)", "5 αμύγδαλα (~10g)"]
  },
  {
    id: "sm11", meal: "snack", emoji: "🍌",
    name: "Μπανάνα & 5 αμύγδαλα",
    nameI18n: { el: "Μπανάνα & 5 αμύγδαλα", en: "Banana & 5 almonds", es: "Plátano & 5 almendras", fr: "Banane & 5 amandes" },
    kcal_est: 170, p: 4, c: 30, f: 5,
    note: "Ενέργεια pre-workout",
    items: ["1 μπανάνα (~120g)", "5 αμύγδαλα (~10g)"]
  },
  {
    id: "sm12", meal: "snack", emoji: "🧀",
    name: "3 παξιμάδια & 2 φέτες κασέρι χαμηλά λιπαρά",
    nameI18n: { el: "3 παξιμάδια & 2 φέτες κασέρι χαμηλά λιπαρά", en: "3 rusks & 2 slices of low-fat kasseri cheese", es: "3 tostadas & 2 lonchas de queso kaseri bajo en grasa", fr: "3 biscottes & 2 tranches de fromage kasseri allégé" },
    kcal_est: 250, p: 14, c: 28, f: 8,
    note: "Πρωτεΐνη + υδατάνθρακες",
    items: ["3 παξιμάδια (~90g)", "2 φέτες κασέρι light (~40g)"]
  },
  {
    id: "sm13", meal: "snack", emoji: "🥪",
    name: "Τοστ γαλοπούλα / κασέρι",
    nameI18n: { el: "Τοστ γαλοπούλα / κασέρι", en: "Toast turkey / kasseri cheese", es: "Tostada pavo / queso kaseri", fr: "Toast dinde / fromage kasseri" },
    kcal_est: 260, p: 18, c: 24, f: 9,
    note: "Κλασικό δεκατιανό",
    items: ["2 φέτες ψωμί τοστ", "60g γαλοπούλα", "30g κασέρι"]
  },
  {
    id: "sm14", meal: "snack", emoji: "🥨",
    name: "3 κριτσίνια & 2 φέτες κασέρι light",
    nameI18n: { el: "3 κριτσίνια & 2 φέτες κασέρι light", en: "3 breadsticks & 2 slices of light kasseri cheese", es: "3 palitos de pan & 2 lonchas de queso kaseri light", fr: "3 gressins & 2 tranches de fromage kasseri light" },
    kcal_est: 230, p: 13, c: 22, f: 9,
    note: "Τραγανό & χορταστικό",
    items: ["3 κριτσίνια (~30g)", "2 φέτες κασέρι light (~40g)"]
  },
  {
    id: "sm15", meal: "snack", emoji: "🥕",
    name: "5 καρότα",
    nameI18n: { el: "5 καρότα", en: "5 carrots", es: "5 zanahorias", fr: "5 carottes" },
    kcal_est: 100, p: 2, c: 23, f: 0,
    note: "Ελαφρύ & χορταστικό",
    items: ["5 μεσαία καρότα (~250g)"]
  },
  {
    id: "sm16", meal: "snack", emoji: "🥝",
    name: "2 ακτινίδια",
    nameI18n: { el: "2 ακτινίδια", en: "2 kiwis", es: "2 kiwis", fr: "2 kiwis" },
    kcal_est: 90, p: 2, c: 20, f: 1,
    note: "Βιταμίνη C + φυτικές ίνες",
    items: ["2 ακτινίδια (~140g)"]
  },
  {
    id: "sm17", meal: "snack", emoji: "💪",
    name: "Πρωτεϊνούχο Σέικ",
    nameI18n: { el: "Πρωτεϊνούχο Σέικ", en: "Protein Shake", es: "Batido de Proteínas", fr: "Shake Protéiné" },
    kcal_est: 150, p: 27, c: 3, f: 1,
    note: "Post-workout ή απόγευμα",
    items: ["1 σκούπ whey isolate (~30g)", "300ml νερό"]
  },
  {
    id: "sm18", meal: "snack", emoji: "🍮",
    name: "Φρουί Ζελέ",
    nameI18n: { el: "Φρουί Ζελέ", en: "Fruit Jelly", es: "Gelatina de Frutas", fr: "Gelée de Fruits" },
    kcal_est: 90, p: 1, c: 20, f: 0,
    note: "Ελαφρύ γλυκό σνακ",
    items: ["1 φρουί ζελέ (~90g)"]
  },

  // ─── ΜΕΣΗΜΕΡΙΑΝΑ ───
  {
    id: "sm50", meal: "lunch", emoji: "🍗",
    name: "Φιλέτο κοτόπουλο 200g + ψητά λαχανικά & μανιτάρια + σαλάτα",
    nameI18n: { el: "Φιλέτο κοτόπουλο 200g + ψητά λαχανικά & μανιτάρια + σαλάτα", en: "Chicken fillet 200g + grilled vegetables & mushrooms + salad", es: "Filete de pollo 200g + verduras a la plancha & champiñones + ensalada", fr: "Filet de poulet 200g + légumes grillés & champignons + salade" },
    kcal_est: 610, p: 50, c: 14, f: 18,
    note: "Μαρινάδα: λεμόνι, μουστάρδα, σκόρδο, πάπρικα, ρίγανη, θυμάρι. Φούρνος/air fryer 190°C 16-18'. Ψήσε τα λαχανικά μαζί με σκόρδο και ρίγανη.",
    items: ["200g φιλέτο κοτόπουλο", "150g κολοκύθι, πιπεριά, κρεμμύδι", "100g μανιτάρια", "σαλάτα εποχής", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm51", meal: "lunch", emoji: "🍳",
    name: "Ομελέτα 4 αυγών + cottage + ψωμί ολικής + σαλάτα",
    nameI18n: { el: "Ομελέτα 4 αυγών + cottage + ψωμί ολικής + σαλάτα", en: "4-egg omelette + cottage cheese + whole grain bread + salad", es: "Tortilla de 4 huevos + cottage + pan integral + ensalada", fr: "Omelette de 4 œufs + cottage cheese + pain complet + salade" },
    kcal_est: 600, p: 38, c: 18, f: 38,
    note: "Σόταρε πρώτα τα λαχανικά, μετά τα αυγά. Ρίξε cottage πριν δέσει. Μπαχαρικά: κουρκουμάς, πάπρικα, ρίγανη, μαϊντανός.",
    items: ["4 αυγά", "ντομάτα, πιπεριά, μανιτάρια", "40g cottage cheese", "30g ψωμί ολικής", "σαλάτα", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm52", meal: "lunch", emoji: "🫘",
    name: "Ρεβύθια φούρνου + cottage + σαλάτα",
    nameI18n: { el: "Ρεβύθια φούρνου + cottage + σαλάτα", en: "Baked chickpeas + cottage cheese + salad", es: "Garbanzos al horno + cottage + ensalada", fr: "Pois chiches au four + cottage cheese + salade" },
    kcal_est: 662, p: 28, c: 72, f: 18,
    note: "Ψήσε με ντομάτα, κρεμμύδι, καρότο, πιπεριά. Μπαχαρικά: κύμινο, πάπρικα καπνιστή, κουρκουμάς, δάφνη. Πρόσθεσε cottage αφού βγουν.",
    items: ["250g ρεβύθια μαγειρεμένα (1½ φλ.)", "60g cottage cheese", "καρότο & πιπεριά", "σαλάτα", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm53", meal: "lunch", emoji: "🍝",
    name: "Μακαρόνια με σάλτσα ντομάτας & μανιτάρια + σαλάτα",
    nameI18n: { el: "Μακαρόνια με σάλτσα ντομάτας & μανιτάρια + σαλάτα", en: "Pasta with tomato sauce & mushrooms + salad", es: "Fideos con salsa de tomate & champiñones + ensalada", fr: "Pâtes à la sauce tomate & champignons + salade" },
    kcal_est: 622, p: 18, c: 96, f: 16,
    note: "Σάλτσα με ντομάτα, σκόρδο, κρεμμύδι. Σόταρε μανιτάρια χωρίς πολύ λάδι. Μπαχαρικά: βασιλικός, ρίγανη, θυμάρι.",
    items: ["300g βρασμένα μακαρόνια (2 φλ.)", "σάλτσα ντομάτας", "100g μανιτάρια", "σαλάτα", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm54", meal: "lunch", emoji: "🥘",
    name: "Μπριάμ + ψωμί ολικής + cottage + φέτα",
    nameI18n: { el: "Μπριάμ + ψωμί ολικής + cottage + φέτα", en: "Mixed vegetable roast + whole grain bread + cottage cheese + feta", es: "Verduras al horno + pan integral + cottage + feta", fr: "Légumes rôtis + pain complet + cottage cheese + feta" },
    kcal_est: 616, p: 20, c: 54, f: 28,
    note: "Ψήσε κολοκύθι, μελιτζάνα, πατάτα, πιπεριά, κρεμμύδι, ντομάτα. Μπαχαρικά: ρίγανη, θυμάρι, μαϊντανός. Cottage και φέτα στο σερβίρισμα.",
    items: ["300g μπριάμ (κολοκύθι, μελιτζάνα, πατάτα, ντομάτα)", "30g ψωμί ολικής", "60g cottage cheese", "30g φέτα"]
  },
  {
    id: "sm55", meal: "lunch", emoji: "🐟",
    name: "Ψάρι φούρνου + σαλάτα",
    nameI18n: { el: "Ψάρι φούρνου + σαλάτα", en: "Baked fish + salad", es: "Pescado al horno + ensalada", fr: "Poisson au four + salade" },
    kcal_est: 558, p: 52, c: 4, f: 28,
    note: "Τσιπούρα ή λαυράκι στον φούρνο με λεμόνι, σκόρδο και ελαιόλαδο, 180°C 25'. Μπαχαρικά: θυμάρι, ρίγανη, λευκό πιπέρι. Σερβίρισε με βραστά χόρτα.",
    items: ["250g τσιπούρα ή λαυράκι (καθαρό βάρος)", "σαλάτα εποχής", "1 κγ ελαιόλαδο", "λεμόνι"]
  },
  {
    id: "sm56", meal: "lunch", emoji: "🥩",
    name: "Μοσχαρίσιο συκώτι + βραστά λαχανικά + ψωμί ολικής",
    nameI18n: { el: "Μοσχαρίσιο συκώτι + βραστά λαχανικά + ψωμί ολικής", en: "Veal liver + steamed vegetables + whole grain bread", es: "Hígado de ternera + verduras al vapor + pan integral", fr: "Foie de veau + légumes vapeur + pain complet" },
    kcal_est: 615, p: 44, c: 28, f: 24,
    note: "Ψήσε σε δυνατή φωτιά 2-3 λεπτά ανά πλευρά. Λεμόνι μόνο μετά. Μπαχαρικά: πιπέρι, πάπρικα, ρίγανη, σκόρδο σε σκόνη.",
    items: ["180g μοσχαρίσιο συκώτι", "βρασμένα λαχανικά (μπρόκολο, κουνουπίδι, καρότα)", "30g ψωμί ολικής", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm57", meal: "lunch", emoji: "🥩",
    name: "Συκώτι βοδινό + πατάτα + σαλάτα",
    nameI18n: { el: "Συκώτι βοδινό + πατάτα + σαλάτα", en: "Beef liver + potato + salad", es: "Hígado de res + patata + ensalada", fr: "Foie de bœuf + pomme de terre + salade" },
    kcal_est: 580, p: 46, c: 36, f: 20,
    note: "Υψηλή συγκέντρωση σιδήρου και βιταμίνης Β12. Ψήσε σε δυνατή φωτιά με κρεμμύδι και λεμόνι. Μην παραψήσεις — μένει τρυφερό.",
    items: ["180g συκώτι βοδινό", "200g πατάτα βραστή", "σαλάτα εποχής", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm20", meal: "lunch", emoji: "🍗",
    name: "Κοτόπουλο φιλέτο 250g + ρύζι 100g + σαλάτα",
    nameI18n: { el: "Κοτόπουλο φιλέτο 250g + ρύζι 100g + σαλάτα", en: "Chicken fillet 250g + rice 100g + salad", es: "Filete de pollo 250g + arroz 100g + ensalada", fr: "Filet de poulet 250g + riz 100g + salade" },
    kcal_est: 640, p: 55, c: 62, f: 12,
    note: "Κλασικό μεσημεριανό με υψηλή πρωτεΐνη",
    items: ["250g κοτόπουλο φιλέτο ψητό", "100g ρύζι μαγ.", "σαλάτα ντομάτα + 1 κγ ελαιόλαδο"]
  },
  {
    id: "sm21", meal: "lunch", emoji: "🍗",
    name: "Κοτόπουλο μπούτι 250g + ρύζι 100g",
    nameI18n: { el: "Κοτόπουλο μπούτι 250g + ρύζι 100g", en: "Chicken thigh 250g + rice 100g", es: "Muslo de pollo 250g + arroz 100g", fr: "Cuisse de poulet 250g + riz 100g" },
    kcal_est: 720, p: 52, c: 60, f: 22,
    note: "Πιο λιπαρό, πιο γευστικό",
    items: ["250g κοτόπουλο μπούτι ψητό", "100g ρύζι μαγ.", "λίγη σαλάτα"]
  },
  {
    id: "sm22", meal: "lunch", emoji: "🐟",
    name: "Τόνος σε νερό (2 κουτάκια) + σαλάτα",
    nameI18n: { el: "Τόνος σε νερό (2 κουτάκια) + σαλάτα", en: "Tuna in water (2 cans) + salad", es: "Atún en agua (2 latas) + ensalada", fr: "Thon à l'eau (2 boîtes) + salade" },
    kcal_est: 300, p: 42, c: 8, f: 10,
    note: "Ελαφρύ & υψηλή πρωτεΐνη",
    items: ["2 κουτάκια τόνος (~160g)", "σαλάτα λαχανικών", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm23", meal: "lunch", emoji: "🥗",
    name: "Χωριάτικη σαλάτα + 2 αυγά",
    nameI18n: { el: "Χωριάτικη σαλάτα + 2 αυγά", en: "Greek salad + 2 eggs", es: "Ensalada griega + 2 huevos", fr: "Salade grecque + 2 œufs" },
    kcal_est: 350, p: 18, c: 12, f: 24,
    note: "Καλοκαιρινό γεύμα",
    items: ["200g ντομάτα+αγγούρι+ελιές+φέτα", "2 βραστά αυγά", "1 κσ ελαιόλαδο"]
  },
  {
    id: "sm24", meal: "lunch", emoji: "🫘",
    name: "Φακές με ρύζι (Mujadarah)",
    nameI18n: { el: "Φακές με ρύζι (Mujadarah)", en: "Lentils with rice (Mujadarah)", es: "Lentejas con arroz (Mujadarah)", fr: "Lentilles au riz (Mujadarah)" },
    kcal_est: 480, p: 22, c: 78, f: 10,
    note: "Πλήρης φυτική πρωτεΐνη",
    items: ["200g φακές μαγ.", "80g ρύζι μαγ.", "1 κσ ελαιόλαδο", "κρεμμύδι"]
  },

  // ─── ΑΠΟΓΕΥΜΑΤΙΝΑ ───
  {
    id: "sm40", meal: "afternoon", emoji: "🍎",
    name: "Μήλο & 5 αμύγδαλα",
    nameI18n: { el: "Μήλο & 5 αμύγδαλα", en: "Apple & 5 almonds", es: "Manzana & 5 almendras", fr: "Pomme & 5 amandes" },
    kcal_est: 140, p: 3, c: 22, f: 5,
    note: "Ελαφρύ απογευματινό σνακ",
    items: ["1 μήλο (~150g)", "5 αμύγδαλα (~10g)"]
  },
  {
    id: "sm41", meal: "afternoon", emoji: "💪",
    name: "Πρωτεϊνούχο Σέικ",
    nameI18n: { el: "Πρωτεϊνούχο Σέικ", en: "Protein Shake", es: "Batido de Proteínas", fr: "Shake Protéiné" },
    kcal_est: 150, p: 27, c: 3, f: 1,
    note: "Post-workout ιδανικό",
    items: ["1 σκούπ whey isolate (~30g)", "300ml νερό"]
  },
  {
    id: "sm42", meal: "afternoon", emoji: "🫙",
    name: "Γιαούρτι 2% 200g & μέλι",
    nameI18n: { el: "Γιαούρτι 2% 200g & μέλι", en: "Yogurt 2% 200g & honey", es: "Yogur 2% 200g & miel", fr: "Yaourt 2% 200g & miel" },
    kcal_est: 196, p: 16, c: 20, f: 8,
    note: "Γλυκό & πρωτεϊνούχο",
    items: ["200g γιαούρτι 2%", "1 κγ μέλι (~15g)"]
  },
  {
    id: "sm43", meal: "afternoon", emoji: "🍌",
    name: "Μπανάνα & φυστικοβούτυρο",
    nameI18n: { el: "Μπανάνα & φυστικοβούτυρο", en: "Banana & peanut butter", es: "Plátano & mantequilla de cacahuete", fr: "Banane & beurre de cacahuète" },
    kcal_est: 210, p: 6, c: 32, f: 8,
    note: "Ενέργεια & χορτασμός",
    items: ["1 μπανάνα (~120g)", "1 κγ φυστικοβούτυρο (~15g)"]
  },
  {
    id: "sm44", meal: "afternoon", emoji: "🥕",
    name: "Λαχανικά & χούμους",
    nameI18n: { el: "Λαχανικά & χούμους", en: "Vegetables & hummus", es: "Verduras & hummus", fr: "Légumes & houmous" },
    kcal_est: 150, p: 5, c: 18, f: 6,
    note: "Υγιεινό & χορταστικό",
    items: ["150g καρότο+αγγούρι+πιπεριά", "50g χούμους"]
  },
  {
    id: "sm45", meal: "afternoon", emoji: "🧀",
    name: "Τοστ γαλοπούλα & τυρί",
    nameI18n: { el: "Τοστ γαλοπούλα & τυρί", en: "Toast turkey & cheese", es: "Tostada pavo & queso", fr: "Toast dinde & fromage" },
    kcal_est: 260, p: 18, c: 24, f: 9,
    note: "Πρωτεΐνη πριν την προπόνηση",
    items: ["2 φέτες ψωμί τοστ", "60g γαλοπούλα", "30g τυρί light"]
  },
  {
    id: "sm46", meal: "afternoon", emoji: "🥝",
    name: "2 ακτινίδια & cottage cheese",
    nameI18n: { el: "2 ακτινίδια & cottage cheese", en: "2 kiwis & cottage cheese", es: "2 kiwis & cottage cheese", fr: "2 kiwis & cottage cheese" },
    kcal_est: 180, p: 14, c: 24, f: 4,
    note: "Βιταμίνη C + πρωτεΐνη",
    items: ["2 ακτινίδια (~140g)", "100g cottage cheese"]
  },
  {
    id: "sm47", meal: "afternoon", emoji: "🍮",
    name: "Ρυζόγαλο light",
    nameI18n: { el: "Ρυζόγαλο light", en: "Light rice pudding", es: "Arroz con leche light", fr: "Riz au lait light" },
    kcal_est: 200, p: 6, c: 38, f: 2,
    note: "Γλυκό ανέσεως",
    items: ["1 ρυζόγαλο light (~200g)"]
  },

  // ─── ΒΡΑΔΙΝΑ ───
  {
    id: "sm30", meal: "dinner", emoji: "🥗",
    name: "Τυρί cottage 200g + σαλάτα",
    nameI18n: { el: "Τυρί cottage 200g + σαλάτα", en: "Cottage cheese 200g + salad", es: "Queso cottage 200g + ensalada", fr: "Cottage cheese 200g + salade" },
    kcal_est: 250, p: 24, c: 10, f: 12,
    note: "Ελαφρύ & πρωτεϊνούχο βραδινό",
    items: ["200g cottage cheese", "σαλάτα λαχανικών", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm31", meal: "dinner", emoji: "🍳",
    name: "Ομελέτα 3 αυγών + σαλάτα",
    nameI18n: { el: "Ομελέτα 3 αυγών + σαλάτα", en: "3-egg omelette + salad", es: "Tortilla de 3 huevos + ensalada", fr: "Omelette de 3 œufs + salade" },
    kcal_est: 320, p: 22, c: 8, f: 22,
    note: "Γρήγορο & χορταστικό",
    items: ["3 αυγά", "λίγο τυρί", "σαλάτα", "1 κγ ελαιόλαδο"]
  },
  {
    id: "sm32", meal: "dinner", emoji: "🐟",
    name: "Σολομός κονσέρβα + ψωμί",
    nameI18n: { el: "Σολομός κονσέρβα + ψωμί", en: "Canned salmon + bread", es: "Salmón en conserva + pan", fr: "Saumon en conserve + pain" },
    kcal_est: 380, p: 28, c: 32, f: 16,
    note: "Ωμέγα-3 + εύκολο",
    items: ["1 κονσέρβα σολομός (~125g)", "2 φέτες ψωμί ολικής"]
  },
  {
    id: "sm33", meal: "dinner", emoji: "🧀",
    name: "Γιαούρτι 200g + 2 μπανάνες",
    nameI18n: { el: "Γιαούρτι 200g + 2 μπανάνες", en: "Yogurt 200g + 2 bananas", es: "Yogur 200g + 2 plátanos", fr: "Yaourt 200g + 2 bananes" },
    kcal_est: 280, p: 10, c: 52, f: 4,
    note: "Ελαφρύ βραδινό",
    items: ["200g γιαούρτι 2%", "2 μπανάνες (~240g)"]
  },
  {
    id: "sm60", meal: "dinner", emoji: "🥗",
    name: "Κοτοσαλάτα με παξιμαδάκια & σως γιαουρτιού",
    nameI18n: { el: "Κοτοσαλάτα με παξιμαδάκια & σως γιαουρτιού", en: "Chicken salad with rusks & yogurt dressing", es: "Ensalada de pollo con tostadas & salsa de yogur", fr: "Salade de poulet avec biscottes & sauce au yaourt" },
    kcal_est: 520, p: 36, c: 42, f: 14,
    note: "Σως: γιαούρτι 2%, μουστάρδα, μέλι. Κόψε κοτόπουλο σε λωρίδες, σπάσε τα παξιμαδάκια σε κομμάτια. Μπαχαρικά: πιπέρι, πάπρικα, ρίγανη, θυμάρι.",
    items: ["100g ψητό φιλέτο κοτόπουλο", "120g ντομάτα", "80g πιπεριά", "40g παξιμαδάκια χαρουπιού (2 τεμ.)", "40g γιαούρτι 2%", "1 κσ μουστάρδα", "1 κγ μέλι"]
  },
  {
    id: "sm61", meal: "dinner", emoji: "🐟",
    name: "Σαλάτα με τόνο σε λάδι + παξιμαδάκια",
    nameI18n: { el: "Σαλάτα με τόνο σε λάδι + παξιμαδάκια", en: "Salad with tuna in oil + rusks", es: "Ensalada con atún en aceite + tostadas", fr: "Salade au thon à l'huile + biscottes" },
    kcal_est: 500, p: 30, c: 36, f: 22,
    note: "Στράγγισε καλά τον τόνο. Πρόσθεσε λεμόνι και κάπαρη. Μπαχαρικά: ρίγανη, πιπέρι, άνηθος.",
    items: ["120g τόνος σε λάδι (στραγγισμένος)", "80g μαρούλι", "120g ντομάτα", "100g αγγούρι", "80g πιπεριά", "40g παξιμαδάκια χαρουπιού"]
  },
  {
    id: "sm62", meal: "dinner", emoji: "🥚",
    name: "Σαλάτα με βραστά αυγά & σως γιαουρτιού",
    nameI18n: { el: "Σαλάτα με βραστά αυγά & σως γιαουρτιού", en: "Salad with boiled eggs & yogurt dressing", es: "Ensalada con huevos cocidos & salsa de yogur", fr: "Salade avec œufs durs & sauce au yaourt" },
    kcal_est: 490, p: 22, c: 44, f: 18,
    note: "Κόψε αυγά στα 4. Σως: γιαούρτι, μουστάρδα, μέλι — περιέχυσε λίγο πριν σερβίρεις. Μπαχαρικά: πάπρικα, πιπέρι, σχοινόπρασο.",
    items: ["2 βραστά αυγά", "80g μαρούλι", "120g ντομάτα", "100g αγγούρι", "40g παξιμαδάκια χαρουπιού", "40g γιαούρτι 2%", "1 κσ μουστάρδα", "1 κγ μέλι"]
  },
  {
    id: "sm63", meal: "dinner", emoji: "🐟",
    name: "Σαλάτα με τόνο σε νερό + παξιμαδάκια",
    nameI18n: { el: "Σαλάτα με τόνο σε νερό + παξιμαδάκια", en: "Salad with tuna in water + rusks", es: "Ensalada con atún en agua + tostadas", fr: "Salade au thon à l'eau + biscottes" },
    kcal_est: 470, p: 28, c: 36, f: 10,
    note: "Ιδανικό για ζεστές μέρες. Πρόσθεσε χυμό λεμονιού και λίγο ξίδι. Μπαχαρικά: ρίγανη, πιπέρι, βασιλικός.",
    items: ["120g τόνος σε νερό (στραγγισμένος)", "80g μαρούλι", "120g ντομάτα", "100g αγγούρι", "80g πιπεριά", "40g παξιμαδάκια χαρουπιού"]
  },
  {
    id: "sm64", meal: "dinner", emoji: "🫐",
    name: "Γιαούρτι με φρούτα δάσους, βρώμη & καρύδια",
    nameI18n: { el: "Γιαούρτι με φρούτα δάσους, βρώμη & καρύδια", en: "Yogurt with berries, oats & walnuts", es: "Yogur con frutos del bosque, avena & nueces", fr: "Yaourt aux fruits des bois, avoine & noix" },
    kcal_est: 535, p: 16, c: 58, f: 22,
    note: "Σέρβιρε παγωμένο. Ανακάτεψε βρώμη με γιαούρτι, φρούτα από πάνω. Προαιρετικά: κανέλα, βανίλια.",
    items: ["200g γιαούρτι 2%", "100g φρούτα του δάσους", "40g βρώμη", "1 κγ μέλι", "20g καρύδια"]
  },
  {
    id: "sm65", meal: "dinner", emoji: "🌯",
    name: "Τορτίγια ολικής με γαλοπούλα, κασέρι & αυγό",
    nameI18n: { el: "Τορτίγια ολικής με γαλοπούλα, κασέρι & αυγό", en: "Whole grain wrap with turkey, kasseri cheese & egg", es: "Tortilla integral con pavo, queso kaseri & huevo", fr: "Wrap complet avec dinde, fromage kasseri & œuf" },
    kcal_est: 501, p: 30, c: 38, f: 20,
    note: "Ζέστανε τορτίγια 30-60\". Άλειψε Philadelphia, βάλε υλικά, τύλιξε. Ψήσε 2' σε τοστιέρα. Μπαχαρικά: πιπέρι, πάπρικα, ρίγανη.",
    items: ["60g τορτίγια ολικής", "15g Philadelphia Light", "60g γαλοπούλα βραστή", "40g άπαχο κασέρι", "40g μαρούλι", "80g ντομάτα", "1 βραστό αυγό"]
  },
  {
    id: "sm66", meal: "dinner", emoji: "🫐",
    name: "Γιαούρτι με φρούτα δάσους, βρώμη & αμύγδαλα",
    nameI18n: { el: "Γιαούρτι με φρούτα δάσους, βρώμη & αμύγδαλα", en: "Yogurt with berries, oats & almonds", es: "Yogur con frutos del bosque, avena & almendras", fr: "Yaourt aux fruits des bois, avoine & amandes" },
    kcal_est: 529, p: 16, c: 56, f: 20,
    note: "Overnight oats: ετοίμασε από το προηγούμενο βράδυ. Αμύγδαλα χοντροκομμένα. Προαιρετικά: κανέλα, βανίλια, ξύσμα λεμονιού.",
    items: ["200g γιαούρτι 2%", "100g φρούτα του δάσους", "40g βρώμη", "1 κγ μέλι", "20g αμύγδαλα"]
  },
  {
    id: "sm34", meal: "breakfast", emoji: "🥣",
    name: "Overnight Oats Πρωτεΐνης (1 μπολάκι/6)",
    nameI18n: { el: "Overnight Oats Πρωτεΐνης (1 μπολάκι/6)", en: "Protein Overnight Oats (1 bowl/6)", es: "Avena nocturna proteica (1 bol/6)", fr: "Overnight Oats protéinés (1 bol/6)" },
    kcal_est: 447, p: 22, c: 52, f: 16,
    note: "Ετοιμάζεις 6 μπολάκια μαζί — διαρκούν 2 μέρες στο ψυγείο",
    items: ["300g βρώμη ÷6", "30g chia ÷6", "20g κακάο ÷6", "120g φυστικοβούτυρο ÷6", "600ml γάλα ÷6", "40g μέλι ÷6", "30g γιαούρτι στρ. garnish"]
  },
  {
    id: "sm35", meal: "lunch", emoji: "🥫",
    name: "Τοστ Γαλοπούλα & Ντομάτα",
    nameI18n: { el: "Τοστ Γαλοπούλα & Ντομάτα", en: "Turkey & Tomato Toast", es: "Tostada de Pavo & Tomate", fr: "Toast Dinde & Tomate" },
    kcal_est: 302, p: 20, c: 30, f: 10,
    note: "Γρήγορο & πλούσιο σε πρωτεΐνη",
    items: ["2 φέτες ψωμί τοστ (~60g)", "80g γαλοπούλα φέτα", "15g μαγιονέζα light", "80g ντομάτα"]
  },
  {
    id: "sm36", meal: "lunch", emoji: "🌯",
    name: "Γύρος Κοτόπουλο Σπιτικός",
    nameI18n: { el: "Γύρος Κοτόπουλο Σπιτικός", en: "Homemade Chicken Gyros", es: "Gyros de Pollo Casero", fr: "Gyros de Poulet Maison" },
    kcal_est: 490, p: 34, c: 48, f: 14,
    note: "Ψήσε το κοτόπουλο με μπαχαρικά - τζατζίκι, ντομάτα, κρεμμύδι στην πίτα",
    items: ["150g κοτόπουλο στήθος ψητό", "1 πίτα (~70g)", "50g τζατζίκι", "50g ντομάτα", "20g κρεμμύδι"]
  },
  {
    id: "sm37", meal: "dinner", emoji: "🥩",
    name: "Μπριζόλα Χοιρινή + Σαλάτα",
    nameI18n: { el: "Μπριζόλα Χοιρινή + Σαλάτα", en: "Pork Chop + Salad", es: "Chuleta de Cerdo + Ensalada", fr: "Côtelette de Porc + Salade" },
    kcal_est: 498, p: 40, c: 8, f: 32,
    note: "Χοιρινή χωρίς κόκκαλο - ψητή με λεμόνι, ρίγανη, σκόρδο",
    items: ["200g μπριζόλα χοιρινή", "4 ψεκ. ελαιόλαδο", "λεμόνι, ρίγανη, σκόρδο, πιπέρι"]
  },
  {
    id: "sm38", meal: "dinner", emoji: "🍳",
    name: "Ομελέτα + Παξιμάδι Χαρουπιού + Κότατζ",
    nameI18n: { el: "Ομελέτα + Παξιμάδι Χαρουπιού + Κότατζ", en: "Omelette + Carob Rusk + Cottage Cheese", es: "Tortilla + Tostada de Algarroba + Cottage", fr: "Omelette + Biscotte de Caroube + Cottage Cheese" },
    kcal_est: 516, p: 38, c: 22, f: 28,
    note: "Ελαφρύ αλλά χορταστικό βραδινό - υψηλή πρωτεΐνη",
    items: ["2 αυγά", "4 ψεκ. ελαιόλαδο", "200g cottage cheese", "100g ντοματίνια", "1.5 παξιμάδι χαρουπιού", "βαλσαμικό ξύδι, πιπέρι"]
  },

  // ─── ΝΕΕΣ ΠΡΟΣΘΗΚΕΣ ───
  {
    id: "sm70", meal: "breakfast", emoji: "🫙",
    name: "Protein Yogurt Bowl",
    nameI18n: { el: "Protein Yogurt Bowl", en: "Protein Yogurt Bowl", es: "Bol de Yogur Proteico", fr: "Bol de Yaourt Protéiné" },
    kcal_est: 420, p: 28, c: 38, f: 17,
    note: "Ανακάτεψε γιαούρτι + βρώμη, πρόσθεσε φυστικοβούτυρο & σιρόπι zero",
    items: ["300g γιαούρτι στραγγιστό 2%", "30g βρώμη", "20g φυστικοβούτυρο", "10–15g σιρόπι Zero"]
  },
  {
    id: "sm71", meal: "breakfast", emoji: "🍳",
    name: "Protein Στραπατσάδα",
    nameI18n: { el: "Protein Στραπατσάδα", en: "Protein Scrambled Eggs", es: "Huevos Revueltos Proteicos", fr: "Œufs Brouillés Protéinés" },
    kcal_est: 410, p: 40, c: 17, f: 20,
    note: "Χτύπησε αυγά + ασπράδια, ψήσε σε αντικολλητικό, πρόσθεσε Philadelphia & καλαμπόκι",
    items: ["3 αυγά", "100g ασπράδια αυγού", "50g Philadelphia Extra Protein", "60g καλαμπόκι", "αλάτι, πιπέρι, πάπρικα ή ρίγανη"]
  },
  {
    id: "sm72", meal: "dinner", emoji: "🍳",
    name: "Protein Στραπατσάδα (Βραδινό)",
    nameI18n: { el: "Protein Στραπατσάδα (Βραδινό)", en: "Protein Scrambled Eggs (Dinner)", es: "Huevos Revueltos Proteicos (Cena)", fr: "Œufs Brouillés Protéinés (Dîner)" },
    kcal_est: 410, p: 40, c: 17, f: 20,
    note: "Ίδια με πρωινό — σέρβιρε με σαλάτα ή λαχανικά",
    items: ["3 αυγά", "100g ασπράδια αυγού", "50g Philadelphia Extra Protein", "60g καλαμπόκι", "αλάτι, πιπέρι, πάπρικα ή ρίγανη"]
  },
  {
    id: "sm73", meal: "dinner", emoji: "🌮",
    name: "Viral Taco Burger",
    nameI18n: { el: "Viral Taco Burger", en: "Viral Taco Burger", es: "Viral Taco Burger", fr: "Viral Taco Burger" },
    kcal_est: 900, p: 62, c: 37, f: 54,
    note: "Άπλωσε κιμά στην τορτίγια, ψήσε από κιμά πρώτα 3-4', γύρισε, βάλε gouda. Σως: μαγιονέζα+κέτσαπ+μουστάρδα+χυμό πίκλας.",
    items: ["1 τορτίγια ολικής (~60g)", "225g κιμάς μοσχαρίσιος 5-10%", "40g Gouda (2 φέτες)", "30g μαρούλι", "50g ντομάτα", "20g κρεμμύδι", "15g κέτσαπ", "15g μαγιονέζα", "8g μουστάρδα", "30-45ml χυμός πίκλας", "αλάτι, πιπέρι, σκόνη σκόρδου"]
  },

  // ─── ΜΕΣΗΜΕΡΙΑΝΑ — ΚΡΕΑΤΑ & ΨΑΡΙΑ ───
  // foodGroup = same food, different portion — wizard shows one row per group
  { id: "ex_l1",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο φιλέτο 150γρ",       nameI18n: { el: "Κοτόπουλο φιλέτο 150γρ", en: "Chicken fillet 150g", es: "Filete de pollo 150g", fr: "Filet de poulet 150g" }, kcal_est: 250, p: 47, c: 0,  f: 6,  foodGroup: "g_chicken_fillet", wizardName: "Κοτόπουλο φιλέτο ψητό",      items: ["150γρ κοτόπουλο φιλέτο ψητό"] },
  { id: "ex_l2",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο φιλέτο 200γρ",       nameI18n: { el: "Κοτόπουλο φιλέτο 200γρ", en: "Chicken fillet 200g", es: "Filete de pollo 200g", fr: "Filet de poulet 200g" }, kcal_est: 330, p: 62, c: 0,  f: 7,  foodGroup: "g_chicken_fillet", items: ["200γρ κοτόπουλο φιλέτο ψητό"] },
  { id: "ex_l3",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο φιλέτο 250γρ",       nameI18n: { el: "Κοτόπουλο φιλέτο 250γρ", en: "Chicken fillet 250g", es: "Filete de pollo 250g", fr: "Filet de poulet 250g" }, kcal_est: 410, p: 78, c: 0,  f: 9,  foodGroup: "g_chicken_fillet", items: ["250γρ κοτόπουλο φιλέτο ψητό"] },
  { id: "ex_l4",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο φιλέτο 300γρ",       nameI18n: { el: "Κοτόπουλο φιλέτο 300γρ", en: "Chicken fillet 300g", es: "Filete de pollo 300g", fr: "Filet de poulet 300g" }, kcal_est: 500, p: 93, c: 0,  f: 11, foodGroup: "g_chicken_fillet", items: ["300γρ κοτόπουλο φιλέτο ψητό"] },
  { id: "ex_l5",  meal: "lunch", emoji: "🍡", name: "Σουβλάκια κοτόπουλο ×2",       nameI18n: { el: "Σουβλάκια κοτόπουλο ×2", en: "Chicken souvlaki ×2", es: "Souvlaki de pollo ×2", fr: "Souvlaki de poulet ×2" }, kcal_est: 330, p: 40, c: 2,  f: 16, foodGroup: "g_souvlaki_chk",  wizardName: "Σουβλάκι κοτόπουλο",          items: ["2 σουβλάκια κοτόπουλο"] },
  { id: "ex_l6",  meal: "lunch", emoji: "🍡", name: "Σουβλάκια κοτόπουλο ×3",       nameI18n: { el: "Σουβλάκια κοτόπουλο ×3", en: "Chicken souvlaki ×3", es: "Souvlaki de pollo ×3", fr: "Souvlaki de poulet ×3" }, kcal_est: 500, p: 60, c: 3,  f: 24, foodGroup: "g_souvlaki_chk",  items: ["3 σουβλάκια κοτόπουλο"] },
  { id: "ex_l7",  meal: "lunch", emoji: "🍡", name: "Σουβλάκια κοτόπουλο ×4",       nameI18n: { el: "Σουβλάκια κοτόπουλο ×4", en: "Chicken souvlaki ×4", es: "Souvlaki de pollo ×4", fr: "Souvlaki de poulet ×4" }, kcal_est: 660, p: 80, c: 4,  f: 32, foodGroup: "g_souvlaki_chk",  items: ["4 σουβλάκια κοτόπουλο"] },
  { id: "ex_l8",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο τηγανία 200γρ",      nameI18n: { el: "Κοτόπουλο τηγανία 200γρ", en: "Pan-fried chicken 200g", es: "Pollo a la sartén 200g", fr: "Poulet à la poêle 200g" }, kcal_est: 440, p: 44, c: 2,  f: 28, foodGroup: "g_chicken_pan",   wizardName: "Κοτόπουλο τηγανία",           items: ["200γρ κοτόπουλο τηγανία"] },
  { id: "ex_l9",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο τηγανία 250γρ",      nameI18n: { el: "Κοτόπουλο τηγανία 250γρ", en: "Pan-fried chicken 250g", es: "Pollo a la sartén 250g", fr: "Poulet à la poêle 250g" }, kcal_est: 550, p: 55, c: 3,  f: 35, foodGroup: "g_chicken_pan",   items: ["250γρ κοτόπουλο τηγανία"] },
  { id: "ex_l10", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι κοτόπουλο 150γρ",     nameI18n: { el: "Μπιφτέκι κοτόπουλο 150γρ", en: "Chicken burger 150g", es: "Hamburguesa de pollo 150g", fr: "Burger de poulet 150g" }, kcal_est: 270, p: 32, c: 4,  f: 14, foodGroup: "g_burger_chk",    wizardName: "Μπιφτέκι κοτόπουλο",          items: ["150γρ μπιφτέκι κοτόπουλο"] },
  { id: "ex_l11", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι κοτόπουλο 200γρ",     nameI18n: { el: "Μπιφτέκι κοτόπουλο 200γρ", en: "Chicken burger 200g", es: "Hamburguesa de pollo 200g", fr: "Burger de poulet 200g" }, kcal_est: 360, p: 43, c: 5,  f: 18, foodGroup: "g_burger_chk",    items: ["200γρ μπιφτέκι κοτόπουλο"] },
  { id: "ex_l12", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι κοτόπουλο 250γρ",     nameI18n: { el: "Μπιφτέκι κοτόπουλο 250γρ", en: "Chicken burger 250g", es: "Hamburguesa de pollo 250g", fr: "Burger de poulet 250g" }, kcal_est: 450, p: 54, c: 6,  f: 23, foodGroup: "g_burger_chk",    items: ["250γρ μπιφτέκι κοτόπουλο"] },
  { id: "ex_l13", meal: "lunch", emoji: "🥩", name: "Χοιρινά μπριζολάκια 150γρ",    nameI18n: { el: "Χοιρινά μπριζολάκια 150γρ", en: "Pork chops 150g", es: "Chuletas de cerdo 150g", fr: "Côtelettes de porc 150g" }, kcal_est: 380, p: 30, c: 0,  f: 28, foodGroup: "g_pork_chop",     wizardName: "Χοιρινά μπριζολάκια ψητά",    items: ["150γρ χοιρινά μπριζολάκια ψητά"] },
  { id: "ex_l14", meal: "lunch", emoji: "🥩", name: "Χοιρινά μπριζολάκια 200γρ",    nameI18n: { el: "Χοιρινά μπριζολάκια 200γρ", en: "Pork chops 200g", es: "Chuletas de cerdo 200g", fr: "Côtelettes de porc 200g" }, kcal_est: 500, p: 40, c: 0,  f: 37, foodGroup: "g_pork_chop",     items: ["200γρ χοιρινά μπριζολάκια ψητά"] },
  { id: "ex_l15", meal: "lunch", emoji: "🥩", name: "Χοιρινά μπριζολάκια 250γρ",    nameI18n: { el: "Χοιρινά μπριζολάκια 250γρ", en: "Pork chops 250g", es: "Chuletas de cerdo 250g", fr: "Côtelettes de porc 250g" }, kcal_est: 630, p: 50, c: 0,  f: 47, foodGroup: "g_pork_chop",     items: ["250γρ χοιρινά μπριζολάκια ψητά"] },
  { id: "ex_l16", meal: "lunch", emoji: "🥩", name: "Χοιρινά μπριζολάκια 300γρ",    nameI18n: { el: "Χοιρινά μπριζολάκια 300γρ", en: "Pork chops 300g", es: "Chuletas de cerdo 300g", fr: "Côtelettes de porc 300g" }, kcal_est: 750, p: 60, c: 0,  f: 56, foodGroup: "g_pork_chop",     items: ["300γρ χοιρινά μπριζολάκια ψητά"] },
  { id: "ex_l17", meal: "lunch", emoji: "🥩", name: "Τηγανία χοιρινή 200γρ",         nameI18n: { el: "Τηγανία χοιρινή 200γρ", en: "Pan-fried pork 200g", es: "Cerdo a la sartén 200g", fr: "Porc à la poêle 200g" }, kcal_est: 560, p: 38, c: 2,  f: 44, foodGroup: "g_pork_pan",      wizardName: "Τηγανία χοιρινή",             items: ["200γρ τηγανία χοιρινή"] },
  { id: "ex_l18", meal: "lunch", emoji: "🥩", name: "Τηγανία χοιρινή 250γρ",         nameI18n: { el: "Τηγανία χοιρινή 250γρ", en: "Pan-fried pork 250g", es: "Cerdo a la sartén 250g", fr: "Porc à la poêle 250g" }, kcal_est: 700, p: 48, c: 3,  f: 55, foodGroup: "g_pork_pan",      items: ["250γρ τηγανία χοιρινή"] },
  { id: "ex_l19", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι ανάμεικτο 150γρ",     nameI18n: { el: "Μπιφτέκι ανάμεικτο 150γρ", en: "Mixed meat burger 150g", es: "Hamburguesa mixta 150g", fr: "Burger mixte 150g" }, kcal_est: 350, p: 28, c: 4,  f: 24, foodGroup: "g_burger_mix",    wizardName: "Μπιφτέκι ανάμεικτο",          items: ["150γρ μπιφτέκι ανάμεικτο"] },
  { id: "ex_l20", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι ανάμεικτο 200γρ",     nameI18n: { el: "Μπιφτέκι ανάμεικτο 200γρ", en: "Mixed meat burger 200g", es: "Hamburguesa mixta 200g", fr: "Burger mixte 200g" }, kcal_est: 460, p: 37, c: 5,  f: 32, foodGroup: "g_burger_mix",    items: ["200γρ μπιφτέκι ανάμεικτο"] },
  { id: "ex_l21", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι ανάμεικτο 250γρ",     nameI18n: { el: "Μπιφτέκι ανάμεικτο 250γρ", en: "Mixed meat burger 250g", es: "Hamburguesa mixta 250g", fr: "Burger mixte 250g" }, kcal_est: 580, p: 46, c: 6,  f: 40, foodGroup: "g_burger_mix",    items: ["250γρ μπιφτέκι ανάμεικτο"] },
  { id: "ex_l22", meal: "lunch", emoji: "🥩", name: "Φιλέτο μοσχάρι 200γρ",          nameI18n: { el: "Φιλέτο μοσχάρι 200γρ", en: "Beef fillet 200g", es: "Filete de ternera 200g", fr: "Filet de bœuf 200g" }, kcal_est: 360, p: 46, c: 0,  f: 18, foodGroup: "g_beef_fillet",   wizardName: "Φιλέτο μοσχάρι ψητό",         items: ["200γρ φιλέτο μοσχάρι ψητό"] },
  { id: "ex_l23", meal: "lunch", emoji: "🥩", name: "Φιλέτο μοσχάρι 300γρ",          nameI18n: { el: "Φιλέτο μοσχάρι 300γρ", en: "Beef fillet 300g", es: "Filete de ternera 300g", fr: "Filet de bœuf 300g" }, kcal_est: 540, p: 69, c: 0,  f: 27, foodGroup: "g_beef_fillet",   items: ["300γρ φιλέτο μοσχάρι ψητό"] },
  { id: "ex_l24", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι μοσχάρι 150γρ",        nameI18n: { el: "Μπιφτέκι μοσχάρι 150γρ", en: "Beef burger 150g", es: "Hamburguesa de ternera 150g", fr: "Burger de bœuf 150g" }, kcal_est: 320, p: 32, c: 3,  f: 20, foodGroup: "g_burger_beef",   wizardName: "Μπιφτέκι μοσχάρι",            items: ["150γρ μπιφτέκι μοσχάρι"] },
  { id: "ex_l25", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι μοσχάρι 200γρ",        nameI18n: { el: "Μπιφτέκι μοσχάρι 200γρ", en: "Beef burger 200g", es: "Hamburguesa de ternera 200g", fr: "Burger de bœuf 200g" }, kcal_est: 420, p: 43, c: 4,  f: 26, foodGroup: "g_burger_beef",   items: ["200γρ μπιφτέκι μοσχάρι"] },
  { id: "ex_l26", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι μοσχάρι 250γρ",        nameI18n: { el: "Μπιφτέκι μοσχάρι 250γρ", en: "Beef burger 250g", es: "Hamburguesa de ternera 250g", fr: "Burger de bœuf 250g" }, kcal_est: 530, p: 54, c: 5,  f: 33, foodGroup: "g_burger_beef",   items: ["250γρ μπιφτέκι μοσχάρι"] },
  { id: "ex_l27", meal: "lunch", emoji: "🍔", name: "Μπιφτέκι μοσχάρι 300γρ",        nameI18n: { el: "Μπιφτέκι μοσχάρι 300γρ", en: "Beef burger 300g", es: "Hamburguesa de ternera 300g", fr: "Burger de bœuf 300g" }, kcal_est: 630, p: 65, c: 6,  f: 39, foodGroup: "g_burger_beef",   items: ["300γρ μπιφτέκι μοσχάρι"] },
  { id: "ex_l28", meal: "lunch", emoji: "🐟", name: "Σολομός 100γρ",                  nameI18n: { el: "Σολομός 100γρ", en: "Salmon 100g", es: "Salmón 100g", fr: "Saumon 100g" }, kcal_est: 210, p: 20, c: 0,  f: 13, foodGroup: "g_salmon",        wizardName: "Σολομός ψητός",               items: ["100γρ σολομός ψητός"] },
  { id: "ex_l29", meal: "lunch", emoji: "🐟", name: "Σολομός 150γρ",                  nameI18n: { el: "Σολομός 150γρ", en: "Salmon 150g", es: "Salmón 150g", fr: "Saumon 150g" }, kcal_est: 310, p: 30, c: 0,  f: 20, foodGroup: "g_salmon",        items: ["150γρ σολομός ψητός"] },
  { id: "ex_l30", meal: "lunch", emoji: "🐟", name: "Σολομός 200γρ",                  nameI18n: { el: "Σολομός 200γρ", en: "Salmon 200g", es: "Salmón 200g", fr: "Saumon 200g" }, kcal_est: 410, p: 40, c: 0,  f: 26, foodGroup: "g_salmon",        items: ["200γρ σολομός ψητός"] },
  { id: "ex_l31", meal: "lunch", emoji: "🐟", name: "Μπακαλίαρος 150γρ",             nameI18n: { el: "Μπακαλίαρος 150γρ", en: "Cod 150g", es: "Bacalao 150g", fr: "Cabillaud 150g" }, kcal_est: 180, p: 27, c: 0,  f: 1,  foodGroup: "g_cod",           wizardName: "Μπακαλίαρος ψητός",           items: ["150γρ μπακαλίαρος ψητός"] },
  { id: "ex_l32", meal: "lunch", emoji: "🐟", name: "Μπακαλίαρος 200γρ",             nameI18n: { el: "Μπακαλίαρος 200γρ", en: "Cod 200g", es: "Bacalao 200g", fr: "Cabillaud 200g" }, kcal_est: 240, p: 36, c: 0,  f: 1,  foodGroup: "g_cod",           items: ["200γρ μπακαλίαρος ψητός"] },
  { id: "ex_l33", meal: "lunch", emoji: "🐟", name: "Μπακαλίαρος 250γρ",             nameI18n: { el: "Μπακαλίαρος 250γρ", en: "Cod 250g", es: "Bacalao 250g", fr: "Cabillaud 250g" }, kcal_est: 300, p: 45, c: 0,  f: 2,  foodGroup: "g_cod",           items: ["250γρ μπακαλίαρος ψητός"] },
  { id: "ex_l34", meal: "lunch", emoji: "🐟", name: "Μπακαλίαρος 300γρ",             nameI18n: { el: "Μπακαλίαρος 300γρ", en: "Cod 300g", es: "Bacalao 300g", fr: "Cabillaud 300g" }, kcal_est: 360, p: 54, c: 0,  f: 2,  foodGroup: "g_cod",           items: ["300γρ μπακαλίαρος ψητός"] },
  { id: "ex_l35", meal: "lunch", emoji: "🍳", name: "Ομελέτα λαχανικών 2 αυγά",      nameI18n: { el: "Ομελέτα λαχανικών 2 αυγά", en: "Vegetable omelette 2 eggs", es: "Tortilla de verduras 2 huevos", fr: "Omelette aux légumes 2 œufs" }, kcal_est: 180, p: 12, c: 1,  f: 14, foodGroup: "g_omelette",      wizardName: "Ομελέτα λαχανικών",           items: ["2 αυγά", "1 κγ ελαιόλαδο"] },
  { id: "ex_l36", meal: "lunch", emoji: "🍳", name: "Ομελέτα λαχανικών 3 αυγά",      nameI18n: { el: "Ομελέτα λαχανικών 3 αυγά", en: "Vegetable omelette 3 eggs", es: "Tortilla de verduras 3 huevos", fr: "Omelette aux légumes 3 œufs" }, kcal_est: 270, p: 18, c: 2,  f: 21, foodGroup: "g_omelette",      items: ["3 αυγά", "1 κγ ελαιόλαδο"] },
  { id: "ex_l37", meal: "lunch", emoji: "🍳", name: "Ομελέτα λαχανικών 4 αυγά",      nameI18n: { el: "Ομελέτα λαχανικών 4 αυγά", en: "Vegetable omelette 4 eggs", es: "Tortilla de verduras 4 huevos", fr: "Omelette aux légumes 4 œufs" }, kcal_est: 360, p: 24, c: 2,  f: 28, foodGroup: "g_omelette",      items: ["4 αυγά", "1 κγ ελαιόλαδο"] },
  { id: "ex_l38", meal: "lunch", emoji: "🫘", name: "Ρεβύθια",                        nameI18n: { el: "Ρεβύθια", en: "Chickpeas", es: "Garbanzos", fr: "Pois chiches" }, kcal_est: 400, p: 22, c: 67, f: 6,  items: ["250γρ ρεβύθια μαγειρεμένα"] },
  { id: "ex_l39", meal: "lunch", emoji: "🥣", name: "Φακές",                          nameI18n: { el: "Φακές", en: "Lentils", es: "Lentejas", fr: "Lentilles" }, kcal_est: 290, p: 22, c: 50, f: 1,  items: ["250γρ φακές μαγειρεμένες"] },
  { id: "ex_l40", meal: "lunch", emoji: "🍝", name: "Μακαρόνια με μανιτάρια & κόκκινη σάλτσα", nameI18n: { el: "Μακαρόνια με μανιτάρια & κόκκινη σάλτσα", en: "Pasta with mushrooms & tomato sauce", es: "Fideos con champiñones & salsa roja", fr: "Pâtes aux champignons & sauce tomate" }, kcal_est: 410, p: 14, c: 72, f: 8, items: ["250γρ μακαρόνια", "100γρ κόκκινη σάλτσα", "μανιτάρια"] },
  { id: "ex_l41", meal: "lunch", emoji: "🍝", name: "Μακαρόνια με κιμά",              nameI18n: { el: "Μακαρόνια με κιμά", en: "Pasta with meat sauce", es: "Fideos con carne picada", fr: "Pâtes à la bolognaise" }, kcal_est: 550, p: 30, c: 62, f: 18, items: ["250γρ μακαρόνια", "150γρ σάλτσα κιμά"] },
  { id: "ex_l42", meal: "lunch", emoji: "🫑", name: "Γεμιστές πιπεριές με κιμά",     nameI18n: { el: "Γεμιστές πιπεριές με κιμά", en: "Stuffed peppers with minced meat", es: "Pimientos rellenos con carne picada", fr: "Poivrons farcis à la viande hachée" }, kcal_est: 500, p: 28, c: 44, f: 20, foodGroup: "g_gemista",       wizardName: "Γεμιστές πιπεριές με κιμά",   items: ["2 γεμιστές πιπεριές με κιμά"] },
  { id: "ex_l43", meal: "lunch", emoji: "🫑", name: "Γεμιστές πιπεριές κιμά ×3",     nameI18n: { el: "Γεμιστές πιπεριές κιμά ×3", en: "Stuffed peppers with minced meat ×3", es: "Pimientos rellenos con carne ×3", fr: "Poivrons farcis à la viande ×3" }, kcal_est: 750, p: 42, c: 66, f: 30, foodGroup: "g_gemista",       items: ["3 γεμιστές πιπεριές με κιμά"] },
  { id: "ex_l44", meal: "lunch", emoji: "🫑", name: "Γεμιστές πιπεριές κιμά ×4",     nameI18n: { el: "Γεμιστές πιπεριές κιμά ×4", en: "Stuffed peppers with minced meat ×4", es: "Pimientos rellenos con carne ×4", fr: "Poivrons farcis à la viande ×4" }, kcal_est:1000, p: 56, c: 88, f: 40, foodGroup: "g_gemista",       items: ["4 γεμιστές πιπεριές με κιμά"] },
  { id: "ex_l45", meal: "lunch", emoji: "🍡", name: "Σουβλάκια χοιρινά ×2",          nameI18n: { el: "Σουβλάκια χοιρινά ×2", en: "Pork souvlaki ×2", es: "Souvlaki de cerdo ×2", fr: "Souvlaki de porc ×2" }, kcal_est: 400, p: 32, c: 2,  f: 28, foodGroup: "g_souvlaki_pork", wizardName: "Σουβλάκι χοιρινό",            items: ["2 σουβλάκια χοιρινά"] },
  { id: "ex_l46", meal: "lunch", emoji: "🍡", name: "Σουβλάκια χοιρινά ×3",          nameI18n: { el: "Σουβλάκια χοιρινά ×3", en: "Pork souvlaki ×3", es: "Souvlaki de cerdo ×3", fr: "Souvlaki de porc ×3" }, kcal_est: 580, p: 48, c: 3,  f: 42, foodGroup: "g_souvlaki_pork", items: ["3 σουβλάκια χοιρινά"] },
  { id: "ex_l47", meal: "lunch", emoji: "🍡", name: "Σουβλάκια χοιρινά ×4",          nameI18n: { el: "Σουβλάκια χοιρινά ×4", en: "Pork souvlaki ×4", es: "Souvlaki de cerdo ×4", fr: "Souvlaki de porc ×4" }, kcal_est: 760, p: 64, c: 4,  f: 56, foodGroup: "g_souvlaki_pork", items: ["4 σουβλάκια χοιρινά"] },
  { id: "ex_l48", meal: "lunch", emoji: "🍲", name: "Κοτόσουπα με ρύζι",             nameI18n: { el: "Κοτόσουπα με ρύζι", en: "Chicken soup with rice", es: "Sopa de pollo con arroz", fr: "Soupe de poulet au riz" }, kcal_est: 420, p: 38, c: 36, f: 12, items: ["1½ φλ σούπα", "120γρ κοτόπουλο"] },
  { id: "ex_l49", meal: "lunch", emoji: "🥣", name: "Γιουβαρλάκια σούπα",            nameI18n: { el: "Γιουβαρλάκια σούπα", en: "Giouvetsi meatball soup", es: "Sopa de albóndigas de arroz", fr: "Soupe de boulettes de riz" }, kcal_est: 480, p: 26, c: 38, f: 20, items: ["1½ φλ σούπα", "5 γιουβαρλάκια ~180γρ"] },
  { id: "ex_l50", meal: "lunch", emoji: "🥩", name: "Συκώτι μοσχαρίσιο ψητό + σαλάτα + ψωμί", nameI18n: { el: "Συκώτι μοσχαρίσιο ψητό + σαλάτα + ψωμί", en: "Grilled veal liver + salad + bread", es: "Hígado de ternera a la plancha + ensalada + pan", fr: "Foie de veau grillé + salade + pain" }, kcal_est: 520, p: 40, c: 20, f: 28, items: ["150γρ συκώτι", "1 φλ σαλάτα", "1 φέτα ψωμί"] },
  { id: "ex_l51", meal: "lunch", emoji: "🥘", name: "Μοσχάρι κοκκινιστό + ρύζι",    nameI18n: { el: "Μοσχάρι κοκκινιστό + ρύζι", en: "Beef in tomato sauce + rice", es: "Ternera en salsa roja + arroz", fr: "Bœuf à la sauce tomate + riz" }, kcal_est: 550, p: 42, c: 46, f: 18, items: ["120γρ μοσχάρι", "150γρ ρύζι", "1 κσ ελαιόλαδο"] },
  { id: "ex_l52", meal: "lunch", emoji: "🥗", name: "Ψητά λαχανικά με φέτα + ψωμί", nameI18n: { el: "Ψητά λαχανικά με φέτα + ψωμί", en: "Grilled vegetables with feta + bread", es: "Verduras a la plancha con feta + pan", fr: "Légumes grillés avec feta + pain" }, kcal_est: 460, p: 14, c: 48, f: 22, items: ["250γρ λαχανικά ψητά", "40γρ φέτα", "1 φέτα ψωμί"] },
  { id: "ex_l53", meal: "lunch", emoji: "🌿", name: "Σπανακόρυζο + φέτα",            nameI18n: { el: "Σπανακόρυζο + φέτα", en: "Spinach rice + feta", es: "Arroz con espinacas + feta", fr: "Riz aux épinards + feta" }, kcal_est: 490, p: 16, c: 62, f: 18, items: ["300γρ σπανακόρυζο", "40γρ φέτα"] },
  { id: "ex_l54", meal: "lunch", emoji: "🍽️", name: "Φαγητό εξω εστιατόριο",        nameI18n: { el: "Φαγητό εξω εστιατόριο", en: "Eating out - restaurant", es: "Comer fuera - restaurante", fr: "Restaurant - repas à l'extérieur" }, kcal_est: 800, p: 30, c: 70, f: 38, items: ["Εξωτερικό εστιατόριο ~800 kcal"] },
  { id: "ex_l55", meal: "lunch", emoji: "🥙", name: "Φαγητό εξω σουβλάκι",           nameI18n: { el: "Φαγητό εξω σουβλάκι", en: "Eating out - souvlaki", es: "Comer fuera - souvlaki", fr: "Souvlaki à l'extérieur" }, kcal_est: 800, p: 36, c: 72, f: 34, items: ["Σουβλάκι + πίτα + σάλτσα"] },
  { id: "ex_l56", meal: "lunch", emoji: "🍕", name: "Πίτσα εξω",                     nameI18n: { el: "Πίτσα εξω", en: "Pizza out", es: "Pizza fuera", fr: "Pizza à l'extérieur" }, kcal_est: 700, p: 28, c: 80, f: 28, items: ["Πίτσα εξω ~700 kcal"] },
  { id: "ex_l57", meal: "lunch", emoji: "🍝", name: "Μακαρόνια εξω",                  nameI18n: { el: "Μακαρόνια εξω", en: "Pasta out", es: "Pasta fuera", fr: "Pâtes à l'extérieur" }, kcal_est: 800, p: 26, c: 100, f:28, items: ["Μακαρόνια εστιατόριο ~800 kcal"] },

  // ─── ΜΕΣΗΜΕΡΙΑΝΑ — ΣΥΝΟΔΕΥΤΙΚΑ (side:true → excluded from plan generator) ───
  { id: "ex_s1",  meal: "lunch", side: true, emoji: "🍚", name: "Ρύζι 100γρ",              nameI18n: { el: "Ρύζι 100γρ", en: "Rice 100g", es: "Arroz 100g", fr: "Riz 100g" }, kcal_est: 130, p: 3,  c: 28, f: 0,  foodGroup: "g_rice",         wizardName: "Ρύζι",              items: ["100γρ ρύζι μαγειρεμένο"] },
  { id: "ex_s2",  meal: "lunch", side: true, emoji: "🍚", name: "Ρύζι 150γρ",              nameI18n: { el: "Ρύζι 150γρ", en: "Rice 150g", es: "Arroz 150g", fr: "Riz 150g" }, kcal_est: 200, p: 4,  c: 43, f: 0,  foodGroup: "g_rice",         items: ["150γρ ρύζι μαγειρεμένο"] },
  { id: "ex_s3",  meal: "lunch", side: true, emoji: "🍚", name: "Ρύζι 200γρ",              nameI18n: { el: "Ρύζι 200γρ", en: "Rice 200g", es: "Arroz 200g", fr: "Riz 200g" }, kcal_est: 260, p: 5,  c: 56, f: 1,  foodGroup: "g_rice",         items: ["200γρ ρύζι μαγειρεμένο"] },
  { id: "ex_s4",  meal: "lunch", side: true, emoji: "🍚", name: "Ρύζι ανάμεικτο 100γρ",   nameI18n: { el: "Ρύζι ανάμεικτο 100γρ", en: "Mixed rice 100g", es: "Arroz mixto 100g", fr: "Riz mélangé 100g" }, kcal_est: 150, p: 3,  c: 30, f: 2,  foodGroup: "g_rice_mix",     wizardName: "Ρύζι ανάμεικτο",   items: ["100γρ ρύζι ανάμεικτο"] },
  { id: "ex_s5",  meal: "lunch", side: true, emoji: "🍚", name: "Ρύζι ανάμεικτο 150γρ",   nameI18n: { el: "Ρύζι ανάμεικτο 150γρ", en: "Mixed rice 150g", es: "Arroz mixto 150g", fr: "Riz mélangé 150g" }, kcal_est: 230, p: 5,  c: 45, f: 3,  foodGroup: "g_rice_mix",     items: ["150γρ ρύζι ανάμεικτο"] },
  { id: "ex_s6",  meal: "lunch", side: true, emoji: "🍚", name: "Ρύζι ανάμεικτο 200γρ",   nameI18n: { el: "Ρύζι ανάμεικτο 200γρ", en: "Mixed rice 200g", es: "Arroz mixto 200g", fr: "Riz mélangé 200g" }, kcal_est: 300, p: 6,  c: 60, f: 4,  foodGroup: "g_rice_mix",     items: ["200γρ ρύζι ανάμεικτο"] },
  { id: "ex_s7",  meal: "lunch", side: true, emoji: "🌾", name: "Πληγούρι 100γρ",          nameI18n: { el: "Πληγούρι 100γρ", en: "Bulgur 100g", es: "Bulgur 100g", fr: "Boulgour 100g" }, kcal_est: 120, p: 3,  c: 18, f: 0,  foodGroup: "g_bulghur",      wizardName: "Πληγούρι",          items: ["100γρ πληγούρι μαγειρεμένο"] },
  { id: "ex_s8",  meal: "lunch", side: true, emoji: "🌾", name: "Πληγούρι 150γρ",          nameI18n: { el: "Πληγούρι 150γρ", en: "Bulgur 150g", es: "Bulgur 150g", fr: "Boulgour 150g" }, kcal_est: 180, p: 5,  c: 27, f: 0,  foodGroup: "g_bulghur",      items: ["150γρ πληγούρι μαγειρεμένο"] },
  { id: "ex_s9",  meal: "lunch", side: true, emoji: "🌾", name: "Πληγούρι 200γρ",          nameI18n: { el: "Πληγούρι 200γρ", en: "Bulgur 200g", es: "Bulgur 200g", fr: "Boulgour 200g" }, kcal_est: 240, p: 6,  c: 36, f: 1,  foodGroup: "g_bulghur",      items: ["200γρ πληγούρι μαγειρεμένο"] },
  { id: "ex_s10", meal: "lunch", side: true, emoji: "🌾", name: "Κους Κους 100γρ",         nameI18n: { el: "Κους Κους 100γρ", en: "Couscous 100g", es: "Cuscús 100g", fr: "Couscous 100g" }, kcal_est: 110, p: 4,  c: 23, f: 0,  foodGroup: "g_couscous",     wizardName: "Κους Κους",         items: ["100γρ κους κους μαγειρεμένο"] },
  { id: "ex_s11", meal: "lunch", side: true, emoji: "🌾", name: "Κους Κους 150γρ",         nameI18n: { el: "Κους Κους 150γρ", en: "Couscous 150g", es: "Cuscús 150g", fr: "Couscous 150g" }, kcal_est: 170, p: 6,  c: 35, f: 0,  foodGroup: "g_couscous",     items: ["150γρ κους κους μαγειρεμένο"] },
  { id: "ex_s12", meal: "lunch", side: true, emoji: "🌾", name: "Κους Κους 200γρ",         nameI18n: { el: "Κους Κους 200γρ", en: "Couscous 200g", es: "Cuscús 200g", fr: "Couscous 200g" }, kcal_est: 220, p: 8,  c: 46, f: 0,  foodGroup: "g_couscous",     items: ["200γρ κους κους μαγειρεμένο"] },
  { id: "ex_s13", meal: "lunch", side: true, emoji: "🥦", name: "Λαχανικά ψητά",           nameI18n: { el: "Λαχανικά ψητά", en: "Grilled vegetables", es: "Verduras a la plancha", fr: "Légumes grillés" }, kcal_est: 120, p: 3,  c: 14, f: 5,  items: ["200γρ λαχανικά ψητά + λάδι"] },
  { id: "ex_s14", meal: "lunch", side: true, emoji: "🥗", name: "Σαλάτα πράσινη",          nameI18n: { el: "Σαλάτα πράσινη", en: "Green salad", es: "Ensalada verde", fr: "Salade verte" }, kcal_est: 100, p: 2,  c: 6,  f: 6,  items: ["σαλάτα πράσινη + 1κγ λάδι"] },
  { id: "ex_s15", meal: "lunch", side: true, emoji: "🍅", name: "Σαλάτα ντομάτα",          nameI18n: { el: "Σαλάτα ντομάτα", en: "Tomato salad", es: "Ensalada de tomate", fr: "Salade de tomates" }, kcal_est: 100, p: 1,  c: 8,  f: 6,  items: ["σαλάτα ντομάτα + 1κγ λάδι"] },
  { id: "ex_s16", meal: "lunch", side: true, emoji: "🥗", name: "Σαλάτα λάχανο",           nameI18n: { el: "Σαλάτα λάχανο", en: "Cabbage salad", es: "Ensalada de repollo", fr: "Salade de chou" }, kcal_est: 100, p: 2,  c: 10, f: 6,  items: ["σαλάτα λάχανο + 1κγ λάδι"] },
  { id: "ex_s17", meal: "lunch", side: true, emoji: "🥕", name: "Σαλάτα καρότο",           nameI18n: { el: "Σαλάτα καρότο", en: "Carrot salad", es: "Ensalada de zanahoria", fr: "Salade de carottes" }, kcal_est: 100, p: 1,  c: 12, f: 6,  items: ["σαλάτα καρότο + 1κγ λάδι"] },
  { id: "ex_s18", meal: "lunch", side: true, emoji: "🥗", name: "Σαλάτα σπανάκι",          nameI18n: { el: "Σαλάτα σπανάκι", en: "Spinach salad", es: "Ensalada de espinacas", fr: "Salade d'épinards" }, kcal_est: 100, p: 3,  c: 5,  f: 6,  items: ["σαλάτα σπανάκι + 1κγ λάδι"] },
  { id: "ex_s19", meal: "lunch", side: true, emoji: "🥗", name: "Σαλάτα ανάμεικτη",        nameI18n: { el: "Σαλάτα ανάμεικτη", en: "Mixed salad", es: "Ensalada mixta", fr: "Salade mélangée" }, kcal_est: 100, p: 2,  c: 8,  f: 6,  items: ["σαλάτα ανάμεικτη + 1κγ λάδι"] },
  { id: "ex_s20", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα βραστή 150γρ",     nameI18n: { el: "Πατάτα βραστή 150γρ", en: "Boiled potato 150g", es: "Patata cocida 150g", fr: "Pomme de terre bouillie 150g" }, kcal_est: 120, p: 2,  c: 28, f: 0,  foodGroup: "g_potato_boiled",wizardName: "Πατάτα βραστή",     items: ["150γρ πατάτα βραστή"] },
  { id: "ex_s21", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα βραστή 250γρ",     nameI18n: { el: "Πατάτα βραστή 250γρ", en: "Boiled potato 250g", es: "Patata cocida 250g", fr: "Pomme de terre bouillie 250g" }, kcal_est: 190, p: 4,  c: 44, f: 0,  foodGroup: "g_potato_boiled",items: ["250γρ πατάτα βραστή"] },
  { id: "ex_s22", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα βραστή 350γρ",     nameI18n: { el: "Πατάτα βραστή 350γρ", en: "Boiled potato 350g", es: "Patata cocida 350g", fr: "Pomme de terre bouillie 350g" }, kcal_est: 270, p: 6,  c: 62, f: 0,  foodGroup: "g_potato_boiled",items: ["350γρ πατάτα βραστή"] },
  { id: "ex_s23", meal: "lunch", side: true, emoji: "🥔", name: "Πουρές 150γρ",             nameI18n: { el: "Πουρές 150γρ", en: "Mashed potato 150g", es: "Puré de patata 150g", fr: "Purée de pommes de terre 150g" }, kcal_est: 160, p: 3,  c: 28, f: 4,  foodGroup: "g_puree",        wizardName: "Πουρές πατάτας",    items: ["150γρ πατατοπουρές"] },
  { id: "ex_s24", meal: "lunch", side: true, emoji: "🥔", name: "Πουρές 200γρ",             nameI18n: { el: "Πουρές 200γρ", en: "Mashed potato 200g", es: "Puré de patata 200g", fr: "Purée de pommes de terre 200g" }, kcal_est: 220, p: 4,  c: 38, f: 5,  foodGroup: "g_puree",        items: ["200γρ πατατοπουρές"] },
  { id: "ex_s25", meal: "lunch", side: true, emoji: "🥔", name: "Πουρές 250γρ",             nameI18n: { el: "Πουρές 250γρ", en: "Mashed potato 250g", es: "Puré de patata 250g", fr: "Purée de pommes de terre 250g" }, kcal_est: 270, p: 5,  c: 46, f: 6,  foodGroup: "g_puree",        items: ["250γρ πατατοπουρές"] },
  { id: "ex_s26", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα φούρνου 150γρ",    nameI18n: { el: "Πατάτα φούρνου 150γρ", en: "Baked potato 150g", es: "Patata al horno 150g", fr: "Pomme de terre au four 150g" }, kcal_est: 200, p: 2,  c: 32, f: 6,  foodGroup: "g_potato_oven",  wizardName: "Πατάτα φούρνου",    items: ["150γρ πατάτα ψητή φούρνου"] },
  { id: "ex_s27", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα φούρνου 250γρ",    nameI18n: { el: "Πατάτα φούρνου 250γρ", en: "Baked potato 250g", es: "Patata al horno 250g", fr: "Pomme de terre au four 250g" }, kcal_est: 330, p: 4,  c: 54, f: 10, foodGroup: "g_potato_oven",  items: ["250γρ πατάτα ψητή φούρνου"] },
  { id: "ex_s28", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα φούρνου 350γρ",    nameI18n: { el: "Πατάτα φούρνου 350γρ", en: "Baked potato 350g", es: "Patata al horno 350g", fr: "Pomme de terre au four 350g" }, kcal_est: 460, p: 5,  c: 74, f: 14, foodGroup: "g_potato_oven",  items: ["350γρ πατάτα ψητή φούρνου"] },
  { id: "ex_s29", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα air fryer 150γρ",  nameI18n: { el: "Πατάτα air fryer 150γρ", en: "Air fryer potato 150g", es: "Patata air fryer 150g", fr: "Pomme de terre air fryer 150g" }, kcal_est: 210, p: 2,  c: 34, f: 7,  foodGroup: "g_potato_af",    wizardName: "Πατάτα air fryer",  items: ["150γρ πατάτα air fryer"] },
  { id: "ex_s30", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα air fryer 250γρ",  nameI18n: { el: "Πατάτα air fryer 250γρ", en: "Air fryer potato 250g", es: "Patata air fryer 250g", fr: "Pomme de terre air fryer 250g" }, kcal_est: 350, p: 4,  c: 56, f: 12, foodGroup: "g_potato_af",    items: ["250γρ πατάτα air fryer"] },
  { id: "ex_s31", meal: "lunch", side: true, emoji: "🥔", name: "Πατάτα air fryer 350γρ",  nameI18n: { el: "Πατάτα air fryer 350γρ", en: "Air fryer potato 350g", es: "Patata air fryer 350g", fr: "Pomme de terre air fryer 350g" }, kcal_est: 490, p: 5,  c: 78, f: 16, foodGroup: "g_potato_af",    items: ["350γρ πατάτα air fryer"] },
  { id: "ex_s32", meal: "lunch", side: true, emoji: "🍠", name: "Γλυκοπατάτα 150γρ",       nameI18n: { el: "Γλυκοπατάτα 150γρ", en: "Sweet potato 150g", es: "Boniato 150g", fr: "Patate douce 150g" }, kcal_est: 180, p: 2,  c: 42, f: 0,  foodGroup: "g_sweet_potato", wizardName: "Γλυκοπατάτα",       items: ["150γρ γλυκοπατάτα"] },
  { id: "ex_s33", meal: "lunch", side: true, emoji: "🍠", name: "Γλυκοπατάτα 200γρ",       nameI18n: { el: "Γλυκοπατάτα 200γρ", en: "Sweet potato 200g", es: "Boniato 200g", fr: "Patate douce 200g" }, kcal_est: 240, p: 3,  c: 56, f: 0,  foodGroup: "g_sweet_potato", items: ["200γρ γλυκοπατάτα"] },
  { id: "ex_s34", meal: "lunch", side: true, emoji: "🌽", name: "Καλαμπόκι",               nameI18n: { el: "Καλαμπόκι", en: "Corn", es: "Maíz", fr: "Maïs" }, kcal_est: 100, p: 3,  c: 21, f: 1,  items: ["100γρ καλαμπόκι"] },
  { id: "ex_s35", meal: "lunch", side: true, emoji: "🍝", name: "Μακαρόνια",               nameI18n: { el: "Μακαρόνια", en: "Pasta", es: "Fideos", fr: "Pâtes" }, kcal_est: 130, p: 4,  c: 26, f: 1,  items: ["100γρ μακαρόνια μαγειρεμένα"] },
  { id: "ex_s36", meal: "lunch", side: true, emoji: "🍆", name: "Μελιτζάνες ψητές",        nameI18n: { el: "Μελιτζάνες ψητές", en: "Grilled aubergines", es: "Berenjenas a la plancha", fr: "Aubergines grillées" }, kcal_est: 120, p: 2,  c: 10, f: 7,  items: ["200γρ μελιτζάνες ψητές"] },
  { id: "ex_s37", meal: "lunch", side: true, emoji: "🌾", name: "Κινόα",                   nameI18n: { el: "Κινόα", en: "Quinoa", es: "Quinoa", fr: "Quinoa" }, kcal_est: 240, p: 9,  c: 44, f: 4,  items: ["200γρ κινόα μαγειρεμένη"] },

  // ─── ΣΝΑΚ — ΝΕΕΣ ΕΠΙΛΟΓΕΣ ───
  { id: "ex_sn1",  meal: "snack", emoji: "🍍", name: "Χυμός ανανά 300ml & 2 παξιμάδια", nameI18n: { el: "Χυμός ανανά 300ml & 2 παξιμάδια", en: "Pineapple juice 300ml & 2 rusks", es: "Zumo de piña 300ml & 2 tostadas", fr: "Jus d'ananas 300ml & 2 biscottes" }, kcal_est: 230, p: 4,  c: 52, f: 1, items: ["300ml χυμός ανανά", "2 παξιμάδια"] },
  { id: "ex_sn2",  meal: "snack", emoji: "🍊", name: "1 πορτοκάλι & 1 παξιμάδι",        nameI18n: { el: "1 πορτοκάλι & 1 παξιμάδι", en: "1 orange & 1 rusk", es: "1 naranja & 1 tostada", fr: "1 orange & 1 biscotte" }, kcal_est: 140, p: 3,  c: 30, f: 1, items: ["1 πορτοκάλι", "1 παξιμάδι"] },
  { id: "ex_sn3",  meal: "snack", emoji: "🫙", name: "Γιαούρτι 2% με 1κγ μέλι",         nameI18n: { el: "Γιαούρτι 2% με 1κγ μέλι", en: "Yogurt 2% with 1 tsp honey", es: "Yogur 2% con 1 cdita de miel", fr: "Yaourt 2% avec 1 càc de miel" }, kcal_est: 160, p: 8,  c: 20, f: 4, items: ["200γρ γιαούρτι 2%", "1 κγ μέλι"] },
  { id: "ex_sn4",  meal: "snack", emoji: "🍎", name: "1 φρούτο & 10 αμύγδαλα",          nameI18n: { el: "1 φρούτο & 10 αμύγδαλα", en: "1 fruit & 10 almonds", es: "1 fruta & 10 almendras", fr: "1 fruit & 10 amandes" }, kcal_est: 170, p: 4,  c: 22, f: 8, items: ["1 φρούτο", "10 αμύγδαλα"] },
  { id: "ex_sn5",  meal: "snack", emoji: "🫙", name: "Γιαούρτι 2% & 3 καρύδια & 10 αμύγδαλα", nameI18n: { el: "Γιαούρτι 2% & 3 καρύδια & 10 αμύγδαλα", en: "Yogurt 2% & 3 walnuts & 10 almonds", es: "Yogur 2% & 3 nueces & 10 almendras", fr: "Yaourt 2% & 3 noix & 10 amandes" }, kcal_est: 250, p: 12, c: 14, f: 16, items: ["1 γιαούρτι 2%", "3 καρύδια", "10 αμύγδαλα"] },
  { id: "ex_sn6",  meal: "snack", emoji: "🌾", name: "Μπάρα δημητριακών & 10 αμύγδαλα & 1 φρούτο", nameI18n: { el: "Μπάρα δημητριακών & 10 αμύγδαλα & 1 φρούτο", en: "Cereal bar & 10 almonds & 1 fruit", es: "Barrita de cereales & 10 almendras & 1 fruta", fr: "Barre de céréales & 10 amandes & 1 fruit" }, kcal_est: 280, p: 7, c: 42, f: 10, items: ["1 μπάρα δημητριακών", "10 αμύγδαλα", "1 φρούτο"] },
  { id: "ex_sn7",  meal: "snack", emoji: "🍮", name: "Κρέμα χαμηλών θερμίδων",          nameI18n: { el: "Κρέμα χαμηλών θερμίδων", en: "Low-calorie pudding cream", es: "Crema de bajas calorías", fr: "Crème allégée" }, kcal_est: 120, p: 4,  c: 22, f: 2, items: ["1 μερίδα κρέμα light (~150g)"] },

  // ─── ΠΡΩΙΝΑ — ΝΕΕΣ ΕΠΙΛΟΓΕΣ ───
  { id: "ex_b1",  meal: "breakfast", emoji: "🍯", name: "Μέλι 2κγ & 2 φέτες τοστ",      nameI18n: { el: "Μέλι 2κγ & 2 φέτες τοστ", en: "Honey 2 tsp & 2 slices of toast", es: "Miel 2 cdita & 2 tostadas", fr: "Miel 2 càc & 2 tranches de toast" }, kcal_est: 200, p: 5,  c: 40, f: 2, items: ["2 κγ μέλι", "2 φέτες τοστ"] },
  { id: "ex_b2",  meal: "breakfast", emoji: "🌾", name: "Βρώμη 150γρ, σοκολάτα & γάλα", nameI18n: { el: "Βρώμη 150γρ, σοκολάτα & γάλα", en: "Oats 150g, chocolate & milk", es: "Avena 150g, chocolate & leche", fr: "Avoine 150g, chocolat & lait" }, kcal_est: 520, p: 18, c: 68, f: 20, items: ["150γρ βρώμη", "30γρ μαύρη σοκολάτα", "100ml γάλα 2%"] },
  { id: "ex_b3",  meal: "breakfast", emoji: "🫙", name: "Γιαούρτι 2% Activia",           nameI18n: { el: "Γιαούρτι 2% Activia", en: "Yogurt 2% Activia", es: "Yogur 2% Activia", fr: "Yaourt 2% Activia" }, kcal_est: 120, p: 5,  c: 16, f: 4, items: ["1 Activia γιαούρτι 2%"] },
  { id: "ex_b4",  meal: "breakfast", emoji: "🫙", name: "Γιαούρτι, δημητριακά, cranberries, μέλι, καρύδια", nameI18n: { el: "Γιαούρτι, δημητριακά, cranberries, μέλι, καρύδια", en: "Yogurt, cereals, cranberries, honey, walnuts", es: "Yogur, cereales, arándanos rojos, miel, nueces", fr: "Yaourt, céréales, cranberries, miel, noix" }, kcal_est: 350, p: 14, c: 46, f: 12, items: ["γιαούρτι 2%", "3 κσ δημητριακά", "1 κσ cranberries", "1 κγ μέλι", "3 καρύδια"] },
  { id: "ex_b5",  meal: "breakfast", emoji: "🌯", name: "Τορτίγια ολικής, γαλοπούλα, κασέρι & χυμός", nameI18n: { el: "Τορτίγια ολικής, γαλοπούλα, κασέρι & χυμός", en: "Whole grain wrap, turkey, kasseri cheese & juice", es: "Tortilla integral, pavo, queso kaseri & zumo", fr: "Wrap complet, dinde, fromage kasseri & jus" }, kcal_est: 390, p: 22, c: 46, f: 12, items: ["1 τορτίγια ολικής", "2 φέτες γαλοπούλα", "1 φέτα κασέρι", "ντοματίνια", "1 ποτήρι χυμό πορτοκάλι"] },
  { id: "ex_b6",  meal: "breakfast", emoji: "🧀", name: "Τοστ κασέρι γαλοπούλα & ποτήρι γάλα", nameI18n: { el: "Τοστ κασέρι γαλοπούλα & ποτήρι γάλα", en: "Toast kasseri cheese turkey & glass of milk", es: "Tostada queso kaseri pavo & vaso de leche", fr: "Toast fromage kasseri dinde & verre de lait" }, kcal_est: 360, p: 22, c: 34, f: 14, items: ["2 φέτες τοστ", "κασέρι", "γαλοπούλα", "1 ποτήρι γάλα 2%"] },

  // ─── ΒΡΑΔΙΝΑ — ΝΕΕΣ ΕΠΙΛΟΓΕΣ ───
  { id: "ex_d1",  meal: "dinner", emoji: "🍗", name: "Κοτόπουλο 150γρ & σαλάτα",           nameI18n: { el: "Κοτόπουλο 150γρ & σαλάτα", en: "Chicken 150g & salad", es: "Pollo 150g & ensalada", fr: "Poulet 150g & salade" }, kcal_est: 300, p: 40, c: 5,  f: 12, foodGroup: "g_d_chicken_salad",    wizardName: "Κοτόπουλο ψητό & σαλάτα",   items: ["150γρ κοτόπουλο", "1 φλ σαλάτα", "1 κγ λάδι"] },
  { id: "ex_d2",  meal: "dinner", emoji: "🍗", name: "Κοτόπουλο 200γρ & σαλάτα",           nameI18n: { el: "Κοτόπουλο 200γρ & σαλάτα", en: "Chicken 200g & salad", es: "Pollo 200g & ensalada", fr: "Poulet 200g & salade" }, kcal_est: 360, p: 53, c: 5,  f: 13, foodGroup: "g_d_chicken_salad",    items: ["200γρ κοτόπουλο", "1 φλ σαλάτα", "1 κγ λάδι"] },
  { id: "ex_d3",  meal: "dinner", emoji: "🍗", name: "Κοτόπουλο 250γρ & σαλάτα",           nameI18n: { el: "Κοτόπουλο 250γρ & σαλάτα", en: "Chicken 250g & salad", es: "Pollo 250g & ensalada", fr: "Poulet 250g & salade" }, kcal_est: 420, p: 66, c: 5,  f: 15, foodGroup: "g_d_chicken_salad",    items: ["250γρ κοτόπουλο", "1 φλ σαλάτα", "1 κγ λάδι"] },
  { id: "ex_d4",  meal: "dinner", emoji: "🍡", name: "Σουβλάκια κοτόπουλο ×2 & σαλάτα",   nameI18n: { el: "Σουβλάκια κοτόπουλο ×2 & σαλάτα", en: "Chicken souvlaki ×2 & salad", es: "Souvlaki de pollo ×2 & ensalada", fr: "Souvlaki de poulet ×2 & salade" }, kcal_est: 390, p: 46, c: 6,  f: 20, foodGroup: "g_d_souvlaki_chk",    wizardName: "Σουβλάκι κοτόπουλο & σαλάτα",items: ["2 σουβλάκια κοτόπουλο", "1 φλ σαλάτα"] },
  { id: "ex_d5",  meal: "dinner", emoji: "🍡", name: "Σουβλάκια κοτόπουλο ×3 & σαλάτα",   nameI18n: { el: "Σουβλάκια κοτόπουλο ×3 & σαλάτα", en: "Chicken souvlaki ×3 & salad", es: "Souvlaki de pollo ×3 & ensalada", fr: "Souvlaki de poulet ×3 & salade" }, kcal_est: 560, p: 68, c: 8,  f: 28, foodGroup: "g_d_souvlaki_chk",    items: ["3 σουβλάκια κοτόπουλο", "1 φλ σαλάτα"] },
  { id: "ex_d6",  meal: "dinner", emoji: "🍡", name: "Σουβλάκια κοτόπουλο ×4 & σαλάτα",   nameI18n: { el: "Σουβλάκια κοτόπουλο ×4 & σαλάτα", en: "Chicken souvlaki ×4 & salad", es: "Souvlaki de pollo ×4 & ensalada", fr: "Souvlaki de poulet ×4 & salade" }, kcal_est: 720, p: 90, c: 10, f: 36, foodGroup: "g_d_souvlaki_chk",    items: ["4 σουβλάκια κοτόπουλο", "1 φλ σαλάτα"] },
  { id: "ex_d7",  meal: "dinner", emoji: "🍳", name: "Ομελέτα 3 αυγά & σαλάτα & ψωμί",nameI18n: { el: "Ομελέτα 3 αυγά & σαλάτα & ψωμί", en: "3-egg omelette & salad & bread", es: "Tortilla de 3 huevos & ensalada & pan", fr: "Omelette de 3 œufs & salade & pain" }, kcal_est: 400, p: 24, c: 22, f: 26, items: ["3 αυγά", "1 φλ σαλάτα", "1 φέτα ψωμί", "1 κγ λάδι"] },
  { id: "ex_d8",  meal: "dinner", emoji: "🧀", name: "2 παξιμάδια, ντομάτα & cottage 200γρ", nameI18n: { el: "2 παξιμάδια, ντομάτα & cottage 200γρ", en: "2 rusks, tomato & cottage cheese 200g", es: "2 tostadas, tomate & cottage 200g", fr: "2 biscottes, tomate & cottage cheese 200g" }, kcal_est: 350, p: 26, c: 28, f: 12, items: ["2 παξιμάδια", "ντομάτα", "200γρ cottage", "2 κγ λάδι"] },
  { id: "ex_d9",  meal: "dinner", emoji: "🐟", name: "Τόνος νερό & σαλάτα & 2 παξιμάδια", nameI18n: { el: "Τόνος νερό & σαλάτα & 2 παξιμάδια", en: "Tuna in water & salad & 2 rusks", es: "Atún en agua & ensalada & 2 tostadas", fr: "Thon à l'eau & salade & 2 biscottes" }, kcal_est: 320, p: 30, c: 24, f: 8, items: ["80-100γρ τόνος σε νερό", "1 φλ σαλάτα", "2 παξιμάδια", "1 κγ λάδι"] },
  { id: "ex_d10", meal: "dinner", emoji: "🫙", name: "Γιαούρτι 200γρ & μούρα & μέλι", nameI18n: { el: "Γιαούρτι 200γρ & μούρα & μέλι", en: "Yogurt 200g & berries & honey", es: "Yogur 200g & moras & miel", fr: "Yaourt 200g & baies & miel" }, kcal_est: 230, p: 10, c: 36, f: 6, items: ["200γρ γιαούρτι", "50γρ μπέριες", "2 κγ μέλι"] },
  { id: "ex_d11", meal: "dinner", emoji: "🥗", name: "Αγγουροντομάτα, βαλσάμικο & παξιμάδι 60γρ", nameI18n: { el: "Αγγουροντομάτα, βαλσάμικο & παξιμάδι 60γρ", en: "Cucumber-tomato salad, balsamic & rusk 60g", es: "Ensalada pepino-tomate, balsámico & tostada 60g", fr: "Salade concombre-tomate, balsamique & biscotte 60g" }, kcal_est: 260, p: 5, c: 32, f: 12, items: ["αγγουροντομάτα", "2 κσ λάδι", "βαλσάμικο", "60γρ παξιμάδι"] },
  { id: "ex_d12", meal: "dinner", emoji: "🧀", name: "Cottage 150γρ, ντομάτα & παξιμάδι 60γρ", nameI18n: { el: "Cottage 150γρ, ντομάτα & παξιμάδι 60γρ", en: "Cottage cheese 150g, tomato & rusk 60g", es: "Cottage 150g, tomate & tostada 60g", fr: "Cottage cheese 150g, tomate & biscotte 60g" }, kcal_est: 350, p: 20, c: 28, f: 18, items: ["150γρ cottage", "1 ντομάτα", "2 κσ λάδι", "60γρ παξιμάδι"] },
  { id: "ex_d13", meal: "dinner", emoji: "🥗", name: "Σαλάτα πράσινη & 2 αυγά βραστά", nameI18n: { el: "Σαλάτα πράσινη & 2 αυγά βραστά", en: "Green salad & 2 boiled eggs", es: "Ensalada verde & 2 huevos cocidos", fr: "Salade verte & 2 œufs durs" }, kcal_est: 300, p: 16, c: 6,  f: 22, items: ["σαλάτα πράσινη", "2 αυγά βραστά", "1 κγ λάδι"] },
  { id: "ex_d14", meal: "dinner", emoji: "🍡", name: "Σουβλάκια χοιρινά ×2 & σαλάτα",  nameI18n: { el: "Σουβλάκια χοιρινά ×2 & σαλάτα", en: "Pork souvlaki ×2 & salad", es: "Souvlaki de cerdo ×2 & ensalada", fr: "Souvlaki de porc ×2 & salade" }, kcal_est: 450, p: 38, c: 6,  f: 30, foodGroup: "g_d_souvlaki_pork", wizardName: "Σουβλάκι χοιρινό & σαλάτα", items: ["2 σουβλάκια χοιρινά", "1 φλ σαλάτα"] },
  { id: "ex_d15", meal: "dinner", emoji: "🍡", name: "Σουβλάκια χοιρινά ×3 & σαλάτα",  nameI18n: { el: "Σουβλάκια χοιρινά ×3 & σαλάτα", en: "Pork souvlaki ×3 & salad", es: "Souvlaki de cerdo ×3 & ensalada", fr: "Souvlaki de porc ×3 & salade" }, kcal_est: 650, p: 56, c: 8,  f: 44, foodGroup: "g_d_souvlaki_pork", items: ["3 σουβλάκια χοιρινά", "1 φλ σαλάτα"] },
  { id: "ex_d16", meal: "dinner", emoji: "🍡", name: "Σουβλάκια χοιρινά ×4 & σαλάτα",  nameI18n: { el: "Σουβλάκια χοιρινά ×4 & σαλάτα", en: "Pork souvlaki ×4 & salad", es: "Souvlaki de cerdo ×4 & ensalada", fr: "Souvlaki de porc ×4 & salade" }, kcal_est: 820, p: 74, c: 10, f: 58, foodGroup: "g_d_souvlaki_pork", items: ["4 σουβλάκια χοιρινά", "1 φλ σαλάτα"] },
  { id: "ex_d17", meal: "dinner", emoji: "🌯", name: "Λουκάνικο σε τορτίγια & σαλάτα", nameI18n: { el: "Λουκάνικο σε τορτίγια & σαλάτα", en: "Sausage in a wrap & salad", es: "Salchicha en tortilla & ensalada", fr: "Saucisse en wrap & salade" }, kcal_est: 380, p: 18, c: 38, f: 16, items: ["1 κοτολουκάνικο", "1 τορτίγια ολικής", "ντομάτα, μαρούλι, γιαούρτι", "150γρ σαλάτα"] },
  { id: "ex_d18", meal: "dinner", emoji: "🐟", name: "Τονοσαλάτα με καλαμπόκι",        nameI18n: { el: "Τονοσαλάτα με καλαμπόκι", en: "Tuna salad with corn", es: "Ensalada de atún con maíz", fr: "Salade de thon au maïs" }, kcal_est: 300, p: 24, c: 18, f: 10, items: ["1 κουτί τόνος νερό", "1 ντομάτα", "3 κσ καλαμπόκι", "1 κσ ελαιόλαδο"] },
  { id: "ex_d19", meal: "dinner", emoji: "🥝", name: "Ακτινίδια, μπανάνα, γιαούρτι & χυμός ανανά", nameI18n: { el: "Ακτινίδια, μπανάνα, γιαούρτι & χυμός ανανά", en: "Kiwis, banana, yogurt & pineapple juice", es: "Kiwis, plátano, yogur & zumo de piña", fr: "Kiwis, banane, yaourt & jus d'ananas" }, kcal_est: 460, p: 12, c: 88, f: 8, items: ["1½ ακτινίδιο", "1 γιαούρτι 2%", "1 μπανάνα", "4 καρύδια", "2 κγ μέλι", "250ml χυμός ανανά"] },
  { id: "ex_d20", meal: "dinner", emoji: "🥝", name: "Ακτινίδια, μπανάνα & καρύδια",   nameI18n: { el: "Ακτινίδια, μπανάνα & καρύδια", en: "Kiwis, banana & walnuts", es: "Kiwis, plátano & nueces", fr: "Kiwis, banane & noix" }, kcal_est: 260, p: 5,  c: 50, f: 8, items: ["1½ ακτινίδιο", "1 μπανάνα", "4 καρύδια", "1 κγ μέλι", "1 κσ cranberries"] },
  { id: "ex_d21", meal: "dinner", emoji: "🍽️", name: "Φαγητό εξω εστιατόριο",         nameI18n: { el: "Φαγητό εξω εστιατόριο", en: "Eating out - restaurant", es: "Comer fuera - restaurante", fr: "Restaurant - repas à l'extérieur" }, kcal_est: 800, p: 30, c: 70, f: 38, items: ["Εξωτερικό εστιατόριο ~800 kcal"] },
  { id: "ex_d22", meal: "dinner", emoji: "🥙", name: "Φαγητό εξω σουβλάκι",            nameI18n: { el: "Φαγητό εξω σουβλάκι", en: "Eating out - souvlaki", es: "Comer fuera - souvlaki", fr: "Souvlaki à l'extérieur" }, kcal_est: 800, p: 36, c: 72, f: 34, items: ["Σουβλάκι + πίτα + σάλτσα"] },
  { id: "ex_d23", meal: "dinner", emoji: "🍕", name: "Πίτσα εξω",                      nameI18n: { el: "Πίτσα εξω", en: "Pizza out", es: "Pizza fuera", fr: "Pizza à l'extérieur" }, kcal_est: 700, p: 28, c: 80, f: 28, items: ["Πίτσα εξω ~700 kcal"] },
  { id: "ex_d24", meal: "dinner", emoji: "🍝", name: "Μακαρόνια εξω",                  nameI18n: { el: "Μακαρόνια εξω", en: "Pasta out", es: "Pasta fuera", fr: "Pâtes à l'extérieur" }, kcal_est: 800, p: 26, c: 100,f: 28, items: ["Μακαρόνια εστιατόριο ~800 kcal"] },

  // ─── ΠΡΩΙΝΑ — EXTRA ΣΥΝΔΥΑΣΜΟΙ ───
  { id: "cb_b1",  meal: "breakfast", emoji: "🥚", name: "3 αυγά scramble + ντοματίνια + ψωμί ολικής",         nameI18n: { el: "3 αυγά scramble + ντοματίνια + ψωμί ολικής", en: "3 scrambled eggs + cherry tomatoes + whole grain bread", es: "3 huevos revueltos + tomatitos + pan integral", fr: "3 œufs brouillés + tomates cerises + pain complet" }, kcal_est: 370, p: 24, c: 28, f: 18, note: "Χτύπησε αυγά με λίγο γάλα. Ψήσε σε αντικολλητικό, βγάλε ζουμερά. Σέρβιρε με ντοματίνια και ψωμί.", items: ["3 αυγά", "50ml γάλα 1,5%", "80g ντοματίνια", "60g ψωμί ολικής", "1 κγ ελαιόλαδο"] },
  { id: "cb_b2",  meal: "breakfast", emoji: "🧇", name: "Pancakes βρώμης 3τεμ + μέλι + μπανάνα",              nameI18n: { el: "Pancakes βρώμης 3τεμ + μέλι + μπανάνα", en: "Oat pancakes 3pcs + honey + banana", es: "Tortitas de avena 3 uds + miel + plátano", fr: "Pancakes à l'avoine 3 pcs + miel + banane" }, kcal_est: 430, p: 22, c: 62, f: 10, note: "Blender: βρώμη + αυγά + γάλα + μπέικιν. 2 λεπτά ανά πλευρά σε μέτρια φωτιά.", items: ["80g βρώμη", "2 αυγά", "100ml γάλα", "1 κγ μπέικιν", "1 μπανάνα", "1 κγ μέλι"] },
  { id: "cb_b3",  meal: "breakfast", emoji: "🫙", name: "Γιαούρτι στραγγιστό + granola + φράουλες",           nameI18n: { el: "Γιαούρτι στραγγιστό + granola + φράουλες", en: "Greek yogurt + granola + strawberries", es: "Yogur griego + granola + fresas", fr: "Yaourt grec + granola + fraises" }, kcal_est: 340, p: 18, c: 44, f: 8,  note: "Βάλε πρώτα γιαούρτι, ρίξε granola από πάνω τελευταία στιγμή για τραγανή υφή.", items: ["250g γιαούρτι στραγγιστό 2%", "30g granola", "100g φράουλες", "1 κγ μέλι"] },
  { id: "cb_b4",  meal: "breakfast", emoji: "🥑", name: "Αβοκάντο toast + 2 αυγά ποσέ + φέτα",                nameI18n: { el: "Αβοκάντο toast + 2 αυγά ποσέ + φέτα", en: "Avocado toast + 2 poached eggs + feta", es: "Tostada de aguacate + 2 huevos escalfados + feta", fr: "Toast à l'avocat + 2 œufs pochés + feta" }, kcal_est: 490, p: 22, c: 32, f: 30, note: "Λίγο ξύδι στο νερό για τέλεια ποσέ αυγά. Πατσατέ αβοκάντο με λεμόνι, αλάτι, νιφάδες πιπεριάς.", items: ["2 φέτες ψωμί ολικής", "½ αβοκάντο", "2 αυγά", "20g φέτα", "λεμόνι, πιπέρι"] },
  { id: "cb_b5",  meal: "breakfast", emoji: "🥤", name: "Green smoothie: σπανάκι, μπανάνα, γάλα & whey",       nameI18n: { el: "Green smoothie: σπανάκι, μπανάνα, γάλα & whey", en: "Green smoothie: spinach, banana, milk & whey", es: "Smoothie verde: espinacas, plátano, leche & whey", fr: "Smoothie vert: épinards, banane, lait & whey" }, kcal_est: 380, p: 32, c: 44, f: 6,  note: "Βάλε πρώτα το υγρό, μετά σπανάκι, μετά μπανάνα και whey. Blender 60\". Κρύο γάλα = καλύτερη υφή.", items: ["50g σπανάκι φρέσκο", "1 μπανάνα κατεψυγμένη", "250ml γάλα 1,5%", "25g whey isolate"] },
  { id: "cb_b6",  meal: "breakfast", emoji: "🍞", name: "French toast πρωτεΐνης + μέλι",                       nameI18n: { el: "French toast πρωτεΐνης + μέλι", en: "Protein French toast + honey", es: "French toast proteico + miel", fr: "French toast protéiné + miel" }, kcal_est: 410, p: 28, c: 46, f: 12, note: "Βούτηξε ψωμί σε μείγμα αυγών+γάλακτος+κανέλας. Ψήσε σε αντικολλητικό. Σέρβιρε με μέλι.", items: ["3 φέτες ψωμί ολικής", "2 αυγά", "80ml γάλα", "κανέλα", "15g μέλι", "4 ψεκ. ελαιόλαδο"] },
  { id: "cb_b7",  meal: "breakfast", emoji: "🌯", name: "Wrap αυγών & γαλοπούλας",                              nameI18n: { el: "Wrap αυγών & γαλοπούλας", en: "Egg & turkey wrap", es: "Wrap de huevos & pavo", fr: "Wrap aux œufs & dinde" }, kcal_est: 420, p: 32, c: 38, f: 14, note: "Κάνε scramble αυγά+ασπράδια. Ζέστανε τορτίγια, βάλε αυγά+γαλοπούλα+ντοματίνια+σπανάκι.", items: ["2 αυγά + 2 ασπράδια", "60g γαλοπούλα", "1 τορτίγια ολικής", "30g σπανάκι μωρό", "50g ντοματίνια"] },
  { id: "cb_b8",  meal: "breakfast", emoji: "🍌", name: "Banana protein muffin + καφές",                        nameI18n: { el: "Banana protein muffin + καφές", en: "Banana protein muffin + coffee", es: "Muffin proteico de plátano + café", fr: "Muffin protéiné à la banane + café" }, kcal_est: 290, p: 18, c: 36, f: 7,  note: "Χτύπησε μπανάνα+αυγά+βρώμη+whey+μπέικιν. Φούρνος 180°C 20'. Μπορείς να φτιάξεις παρτίδα 6 τεμ.", items: ["1 μπανάνα", "2 αυγά", "40g βρώμη", "20g whey", "½ κγ μπέικιν πάουντερ"] },
  { id: "cb_b9",  meal: "breakfast", emoji: "☕", name: "Καφές με γάλα + 2 παξιμάδια & ανθότυρο",              nameI18n: { el: "Καφές με γάλα + 2 παξιμάδια & ανθότυρο", en: "Coffee with milk + 2 rusks & soft white cheese", es: "Café con leche + 2 tostadas & queso blanco", fr: "Café au lait + 2 biscottes & fromage blanc" }, kcal_est: 260, p: 14, c: 32, f: 7,  note: "Ελαφρύ και γρήγορο. Ανθότυρο ή cottage αντί βουτύρου.", items: ["200ml γάλα 1,5%", "2 παξιμάδια", "60g ανθότυρο ή cottage", "κανέλα"] },
  { id: "cb_b10", meal: "breakfast", emoji: "🫙", name: "Γιαούρτι 0% + αχλάδι + καρύδια + κανέλα",             nameI18n: { el: "Γιαούρτι 0% + αχλάδι + καρύδια + κανέλα", en: "Yogurt 0% + pear + walnuts + cinnamon", es: "Yogur 0% + pera + nueces + canela", fr: "Yaourt 0% + poire + noix + cannelle" }, kcal_est: 310, p: 24, c: 34, f: 8,  note: "Γιαούρτι στραγγιστό 0% — υψηλή πρωτεΐνη, χαμηλά λίπη. Τέλειο αν θέλεις ελαφρύ αλλά χορταστικό.", items: ["250g γιαούρτι στραγγιστό 0%", "1 αχλάδι (~150g)", "15g καρύδια", "κανέλα"] },

  // ─── ΣΝΑΚ — EXTRA ΣΥΝΔΥΑΣΜΟΙ ───
  { id: "cb_sn1",  meal: "snack", emoji: "🧀", name: "Rice cakes + φυστικοβούτυρο + μπανάνα",                 nameI18n: { el: "Rice cakes + φυστικοβούτυρο + μπανάνα", en: "Rice cakes + peanut butter + banana", es: "Tortas de arroz + mantequilla de cacahuete + plátano", fr: "Galettes de riz + beurre de cacahuète + banane" }, kcal_est: 250, p: 8,  c: 38, f: 8,  note: "Απλό, γρήγορο, ισορροπημένο. 2 rice cakes + 1 κγ φυστικοβούτυρο + μισή μπανάνα.", items: ["2 rice cakes", "15g φυστικοβούτυρο", "½ μπανάνα"] },
  { id: "cb_sn2",  meal: "snack", emoji: "🫙", name: "Cottage + αγγούρι + ελιές",                              nameI18n: { el: "Cottage + αγγούρι + ελιές", en: "Cottage cheese + cucumber + olives", es: "Cottage + pepino + aceitunas", fr: "Cottage cheese + concombre + olives" }, kcal_est: 180, p: 16, c: 5,  f: 10, note: "Αλμυρό σνακ υψηλής πρωτεΐνης. Λίγο ρίγανη και ελαιόλαδο από πάνω.", items: ["150g cottage cheese", "½ αγγούρι", "5-6 ελιές", "ρίγανη"] },
  { id: "cb_sn3",  meal: "snack", emoji: "🥚", name: "2 αυγά βραστά + 1 φέτα ψωμί ολικής",                   nameI18n: { el: "2 αυγά βραστά + 1 φέτα ψωμί ολικής", en: "2 boiled eggs + 1 slice of whole grain bread", es: "2 huevos cocidos + 1 rebanada de pan integral", fr: "2 œufs durs + 1 tranche de pain complet" }, kcal_est: 220, p: 16, c: 18, f: 10, note: "Κλασικό πρωτεϊνούχο σνακ. Λίγο αλατοπίπερο αρκεί.", items: ["2 αυγά βραστά", "1 φέτα ψωμί ολικής"] },
  { id: "cb_sn4",  meal: "snack", emoji: "🍇", name: "Σταφύλι 150γρ + 10 αμύγδαλα",                           nameI18n: { el: "Σταφύλι 150γρ + 10 αμύγδαλα", en: "Grapes 150g + 10 almonds", es: "Uvas 150g + 10 almendras", fr: "Raisins 150g + 10 amandes" }, kcal_est: 190, p: 4,  c: 30, f: 7,  note: "Φρέσκο και ενεργειακό. Καλό pre-workout σνακ.", items: ["150g σταφύλι", "10 αμύγδαλα"] },
  { id: "cb_sn5",  meal: "snack", emoji: "🥤", name: "Protein shake + μπανάνα",                                nameI18n: { el: "Protein shake + μπανάνα", en: "Protein shake + banana", es: "Batido de proteínas + plátano", fr: "Shake protéiné + banane" }, kcal_est: 280, p: 28, c: 34, f: 2,  note: "Ιδανικό post-workout. Μπανάνα για γρήγορους υδατάνθρακες.", items: ["30g whey isolate", "300ml νερό", "1 μπανάνα"] },
  { id: "cb_sn6",  meal: "snack", emoji: "🍫", name: "Μαύρη σοκολάτα 85% + καρύδια",                          nameI18n: { el: "Μαύρη σοκολάτα 85% + καρύδια", en: "Dark chocolate 85% + walnuts", es: "Chocolate negro 85% + nueces", fr: "Chocolat noir 85% + noix" }, kcal_est: 200, p: 4,  c: 12, f: 16, note: "20g σοκολάτα + 15g καρύδια. Αντιοξειδωτικό σνακ, κορέννει γλυκές λιγούρες.", items: ["20g μαύρη σοκολάτα 85%", "15g καρύδια"] },
  { id: "cb_sn7",  meal: "snack", emoji: "🥛", name: "Γάλα 250ml + 2 μπισκότα ολικής",                        nameI18n: { el: "Γάλα 250ml + 2 μπισκότα ολικής", en: "Milk 250ml + 2 whole grain biscuits", es: "Leche 250ml + 2 galletas integrales", fr: "Lait 250ml + 2 biscuits complets" }, kcal_est: 210, p: 10, c: 28, f: 6,  note: "Απλό και χορταστικό. Μπισκότα ολικής ή digestive.", items: ["250ml γάλα 1,5%", "2 μπισκότα ολικής"] },
  { id: "cb_sn8",  meal: "snack", emoji: "🫐", name: "Γιαούρτι + μύρτιλλα + 1 κγ μέλι",                      nameI18n: { el: "Γιαούρτι + μύρτιλλα + 1 κγ μέλι", en: "Yogurt + blueberries + 1 tsp honey", es: "Yogur + arándanos + 1 cdita de miel", fr: "Yaourt + myrtilles + 1 càc de miel" }, kcal_est: 175, p: 9,  c: 28, f: 3,  note: "Αντιοξειδωτικό και ελαφρύ. Μύρτιλλα κατεψυγμένα δουλεύουν εξίσου.", items: ["150g γιαούρτι 2%", "80g μύρτιλλα", "1 κγ μέλι"] },
  { id: "cb_sn9",  meal: "snack", emoji: "🌰", name: "Χούμους 60γρ + καρότο + πιτάκι ολικής",                 nameI18n: { el: "Χούμους 60γρ + καρότο + πιτάκι ολικής", en: "Hummus 60g + carrot + whole grain pita", es: "Hummus 60g + zanahoria + pan de pita integral", fr: "Houmous 60g + carotte + pita complet" }, kcal_est: 240, p: 8,  c: 34, f: 8,  note: "Φυτική πρωτεΐνη + φυτικές ίνες. Χούμους ready-made ή σπιτικό.", items: ["60g χούμους", "100g καρότο σε μπαστουνάκια", "½ πίτα ολικής"] },
  { id: "cb_sn10", meal: "snack", emoji: "🍊", name: "2 μανταρίνια + 1 γιαούρτι 2%",                          nameI18n: { el: "2 μανταρίνια + 1 γιαούρτι 2%", en: "2 mandarins + 1 yogurt 2%", es: "2 mandarinas + 1 yogur 2%", fr: "2 mandarines + 1 yaourt 2%" }, kcal_est: 165, p: 8,  c: 26, f: 3,  note: "Βιταμίνη C + πρωτεΐνη. Ιδανικό χειμωνιάτικο σνακ.", items: ["2 μανταρίνια", "150g γιαούρτι 2%"] },

  // ─── ΜΕΣΗΜΕΡΙΑΝΑ — EXTRA ΣΥΝΔΥΑΣΜΟΙ ───
  { id: "cb_l1",  meal: "lunch", emoji: "🥗", name: "Σαλάτα τόνου με ρεβύθια & feta",                          nameI18n: { el: "Σαλάτα τόνου με ρεβύθια & feta", en: "Tuna salad with chickpeas & feta", es: "Ensalada de atún con garbanzos & feta", fr: "Salade de thon aux pois chiches & feta" }, kcal_est: 520, p: 38, c: 44, f: 18, note: "Ανάμειξε τόνο, ρεβύθια, ντομάτα, αγγούρι, φέτα, ελιές. Ντρέσινγκ: λεμόνι+λάδι+ρίγανη.", items: ["160g τόνος νερό", "150g ρεβύθια μαγ.", "80g ντομάτα", "60g αγγούρι", "40g φέτα", "1 κσ ελαιόλαδο"] },
  { id: "cb_l2",  meal: "lunch", emoji: "🍛", name: "Κοτόπουλο κάρυ με κινόα",                                  nameI18n: { el: "Κοτόπουλο κάρυ με κινόα", en: "Chicken curry with quinoa", es: "Pollo al curry con quinoa", fr: "Poulet au curry avec quinoa" }, kcal_est: 590, p: 52, c: 52, f: 14, note: "Σόταρε κρεμμύδι+σκόρδο, πρόσθεσε κοτόπουλο+κάρυ+κουρκουμά+κανέλα, μετά γάλα καρύδας λίγο.", items: ["200g κοτόπουλο στήθος", "150g κινόα μαγ.", "50ml γάλα καρύδας light", "1 κγ κάρυ", "½ κγ κουρκουμάς"] },
  { id: "cb_l3",  meal: "lunch", emoji: "🥩", name: "Μοσχάρι stir-fry με λαχανικά & ρύζι",                    nameI18n: { el: "Μοσχάρι stir-fry με λαχανικά & ρύζι", en: "Beef stir-fry with vegetables & rice", es: "Ternera stir-fry con verduras & arroz", fr: "Bœuf sauté avec légumes & riz" }, kcal_est: 580, p: 46, c: 54, f: 16, note: "Κόψε μοσχάρι λεπτό. Wok σε δυνατή φωτιά: πρώτα λαχανικά, μετά κρέας. Σάλτσα: σόγια+τζίντζερ+σκόρδο.", items: ["180g φιλέτο μοσχάρι", "200g μίξ λαχανικών (πιπεριά, μπρόκολο, καρότο)", "150g ρύζι μαγ.", "1 κσ σάλτσα σόγιας", "1 κγ ελαιόλαδο"] },
  { id: "cb_l4",  meal: "lunch", emoji: "🫙", name: "Greek power bowl: κοτόπουλο, ρύζι, τζατζίκι, σαλάτα",    nameI18n: { el: "Greek power bowl: κοτόπουλο, ρύζι, τζατζίκι, σαλάτα", en: "Greek power bowl: chicken, rice, tzatziki, salad", es: "Greek power bowl: pollo, arroz, tzatziki, ensalada", fr: "Greek power bowl: poulet, riz, tzatziki, salade" }, kcal_est: 650, p: 55, c: 64, f: 16, note: "Η ελληνική εκδοχή του rice bowl. Ψητό κοτόπουλο σε κύβους, ρύζι, τζατζίκι, ντομάτα, αγγούρι, ελιές.", items: ["200g κοτόπουλο ψητό", "150g ρύζι μαγ.", "60g τζατζίκι", "σαλάτα εποχής", "5 ελιές"] },
  { id: "cb_l5",  meal: "lunch", emoji: "🐟", name: "Σολομός με γλυκοπατάτα & σπανάκι",                        nameI18n: { el: "Σολομός με γλυκοπατάτα & σπανάκι", en: "Salmon with sweet potato & spinach", es: "Salmón con boniato & espinacas", fr: "Saumon avec patate douce & épinards" }, kcal_est: 580, p: 42, c: 44, f: 22, note: "Φούρνος 200°C: σολομός 12-15', γλυκοπατάτα 25'. Σπανάκι σοταρισμένο με σκόρδο.", items: ["180g σολομός", "200g γλυκοπατάτα", "100g σπανάκι", "1 κγ ελαιόλαδο", "λεμόνι, άνηθος"] },
  { id: "cb_l6",  meal: "lunch", emoji: "🥚", name: "Ομελέτα λαχανικών στον φούρνο (5 αυγά)",                  nameI18n: { el: "Ομελέτα λαχανικών στον φούρνο (5 αυγά)", en: "Baked vegetable omelette (5 eggs)", es: "Tortilla de verduras al horno (5 huevos)", fr: "Omelette aux légumes au four (5 œufs)" }, kcal_est: 490, p: 34, c: 14, f: 34, note: "Σόταρε λαχανικά, ρίξε χτυπημένα αυγά+γάλα+τυρί. Φούρνος 180°C 15-18'. Μπορείς να κόψεις σε μερίδες.", items: ["5 αυγά", "150g κολοκύθι+πιπεριά+μανιτάρια", "40g φέτα", "30ml γάλα", "1 κγ ελαιόλαδο"] },
  { id: "cb_l7",  meal: "lunch", emoji: "🌯", name: "Wrap κοτόπουλο ψητό + τζατζίκι + πιπεριά",               nameI18n: { el: "Wrap κοτόπουλο ψητό + τζατζίκι + πιπεριά", en: "Grilled chicken wrap + tzatziki + pepper", es: "Wrap de pollo a la plancha + tzatziki + pimiento", fr: "Wrap poulet grillé + tzatziki + poivron" }, kcal_est: 530, p: 44, c: 46, f: 14, note: "Ζέστανε τορτίγια, βάλε κοτόπουλο σε λωρίδες, τζατζίκι, πιπεριά, μαρούλι. Τύλιξε σφιχτά.", items: ["160g κοτόπουλο στήθος ψητό", "1 τορτίγια ολικής", "50g τζατζίκι", "60g πιπεριά", "30g μαρούλι"] },
  { id: "cb_l8",  meal: "lunch", emoji: "🍲", name: "Φακόσουπα με καρότο & κρεμμύδι",                         nameI18n: { el: "Φακόσουπα με καρότο & κρεμμύδι", en: "Lentil soup with carrot & onion", es: "Sopa de lentejas con zanahoria & cebolla", fr: "Soupe de lentilles aux carottes & oignon" }, kcal_est: 420, p: 24, c: 64, f: 6,  note: "Κλασική. Βράσε φακές με καρότο, σέλινο, κρεμμύδι, δαφνόφυλλο. Ξύδι στο τέλος. Με ψωμί.", items: ["200g φακές ωμές", "1 καρότο", "1 κρεμμύδι", "σέλινο", "1 φέτα ψωμί ολικής", "1 κσ ξύδι"] },
  { id: "cb_l9",  meal: "lunch", emoji: "🍗", name: "Κοτόπουλο με κους κους & ντομάτα",                        nameI18n: { el: "Κοτόπουλο με κους κους & ντομάτα", en: "Chicken with couscous & tomato", es: "Pollo con cuscús & tomate", fr: "Poulet au couscous & tomate" }, kcal_est: 560, p: 48, c: 60, f: 12, note: "Βράσε κους κους με ζωμό. Κοτόπουλο ψητό με ντομάτα+σκόρδο+κανέλα. Ανάμειξε.", items: ["200g κοτόπουλο", "200g κους κους μαγ.", "100g ντομάτα τριμμένη", "σκόρδο, κανέλα, μαϊντανός"] },
  { id: "cb_l10", meal: "lunch", emoji: "🥘", name: "Μπακαλίαρος πλακί με πατάτα",                             nameI18n: { el: "Μπακαλίαρος πλακί με πατάτα", en: "Baked cod with potato", es: "Bacalao al horno con patata", fr: "Cabillaud au four avec pomme de terre" }, kcal_est: 510, p: 44, c: 48, f: 10, note: "Σε ταψί: πατάτα σε φέτες, κρεμμύδι, σκόρδο, ντομάτα, μπακαλίαρος. Φούρνος 180°C 35'. Πλούσια γεύση.", items: ["220g μπακαλίαρος", "200g πατάτα", "100g ντομάτα", "κρεμμύδι, σκόρδο, μαϊντανός", "1 κσ ελαιόλαδο"] },
  { id: "cb_l11", meal: "lunch", emoji: "🥗", name: "Νικουάζ σαλάτα με τόνο & αυγό",                          nameI18n: { el: "Νικουάζ σαλάτα με τόνο & αυγό", en: "Niçoise salad with tuna & egg", es: "Ensalada niçoise con atún & huevo", fr: "Salade niçoise au thon & œuf" }, kcal_est: 480, p: 36, c: 28, f: 24, note: "Τόνος, βραστό αυγό, πράσινα φασολάκια, πατάτα, ελιές, ντομάτα. Ντρέσινγκ: λεμόνι+μουστάρδα+λάδι.", items: ["160g τόνος νερό", "2 αυγά βραστά", "100g φασολάκια", "100g πατάτα βραστή", "5 ελιές", "1 κσ ελαιόλαδο"] },
  { id: "cb_l12", meal: "lunch", emoji: "🫘", name: "Μαυρομάτικα με λαχανικά & φέτα",                         nameI18n: { el: "Μαυρομάτικα με λαχανικά & φέτα", en: "Black-eyed peas with vegetables & feta", es: "Alubias de ojo negro con verduras & feta", fr: "Haricots à œil noir avec légumes & feta" }, kcal_est: 500, p: 22, c: 68, f: 14, note: "Μαυρομάτικα με ντομάτα, πιπεριά, κρεμμύδι. Φέτα στο τέλος. Μπαχαρικά: θυμάρι, κύμινο.", items: ["250g μαυρομάτικα μαγ.", "100g ντομάτα", "1 πιπεριά", "40g φέτα", "1 κγ ελαιόλαδο"] },
  { id: "cb_l13", meal: "lunch", emoji: "🍝", name: "Ολικής μακαρόνια με σολομό & σπανάκι",                   nameI18n: { el: "Ολικής μακαρόνια με σολομό & σπανάκι", en: "Whole grain pasta with salmon & spinach", es: "Pasta integral con salmón & espinacas", fr: "Pâtes complètes au saumon & épinards" }, kcal_est: 620, p: 42, c: 68, f: 18, note: "Σολομός ψητός σε κομμάτια. Ανάμειξε με μαγ. μακαρόνια, σπανάκι, λεμόνι, λίγο ελαιόλαδο.", items: ["160g σολομός", "200g μακαρόνια ολικής μαγ.", "80g σπανάκι", "λεμόνι", "1 κγ ελαιόλαδο"] },
  { id: "cb_l14", meal: "lunch", emoji: "🥙", name: "Γύρος γαλοπούλας σπιτικός",                               nameI18n: { el: "Γύρος γαλοπούλας σπιτικός", en: "Homemade turkey gyros", es: "Gyros de pavo casero", fr: "Gyros de dinde maison" }, kcal_est: 500, p: 38, c: 48, f: 14, note: "Γαλοπούλα σε μπαχαρικά+ξύδι, ψητή σε τηγάνι. Πίτα, τζατζίκι, ντομάτα, κρεμμύδι.", items: ["180g γαλοπούλα φέτα", "1 πίτα (~70g)", "50g τζατζίκι", "ντομάτα, κρεμμύδι, πάπρικα"] },
  { id: "cb_l15", meal: "lunch", emoji: "🍆", name: "Μουσακάς light",                                           nameI18n: { el: "Μουσακάς light", en: "Light moussaka", es: "Moussaka light", fr: "Moussaka allégée" }, kcal_est: 580, p: 34, c: 44, f: 24, note: "Μελιτζάνα ψημένη (όχι τηγανητή). Κιμάς άπαχος με κανέλα+μοσχοκάρυδο. Μπεσαμέλ με γάλα 1,5%.", items: ["200g κιμάς μοσχάρι 5%", "250g μελιτζάνα ψητή", "50g μπεσαμέλ light", "ντομάτα, κανέλα"] },

  // ─── ΒΡΑΔΙΝΑ — EXTRA ΣΥΝΔΥΑΣΜΟΙ ───
  { id: "cb_d1",  meal: "dinner", emoji: "🥗", name: "Σαλάτα κοτόπουλο με αβοκάντο & λάιμ",                   nameI18n: { el: "Σαλάτα κοτόπουλο με αβοκάντο & λάιμ", en: "Chicken salad with avocado & lime", es: "Ensalada de pollo con aguacate & lima", fr: "Salade de poulet à l'avocat & citron vert" }, kcal_est: 430, p: 38, c: 10, f: 26, note: "Κοτόπουλο ψητό κομμένο, αβοκάντο, μαρούλι, ντομάτα, κόρν. Ντρέσινγκ: λάιμ+λάδι+κύμινο.", items: ["150g κοτόπουλο ψητό", "½ αβοκάντο", "60g μαρούλι", "60g ντομάτα", "30g κόρν", "λάιμ"] },
  { id: "cb_d2",  meal: "dinner", emoji: "🍳", name: "Ομελέτα λαχανικών + φέτα + τοστ ολικής",                 nameI18n: { el: "Ομελέτα λαχανικών + φέτα + τοστ ολικής", en: "Vegetable omelette + feta + whole grain toast", es: "Tortilla de verduras + feta + tostada integral", fr: "Omelette aux légumes + feta + toast complet" }, kcal_est: 420, p: 26, c: 30, f: 22, note: "3 αυγά, πιπεριά+μανιτάρια+σπανάκι σοταρισμένα, φέτα. Σέρβιρε με 1 φέτα ψωμί ολικής.", items: ["3 αυγά", "100g λαχανικά μίξ", "30g φέτα", "1 φέτα ψωμί ολικής", "1 κγ ελαιόλαδο"] },
  { id: "cb_d3",  meal: "dinner", emoji: "🐟", name: "Σολομός ψητός + σαλάτα + λεμόνι",                        nameI18n: { el: "Σολομός ψητός + σαλάτα + λεμόνι", en: "Grilled salmon + salad + lemon", es: "Salmón a la plancha + ensalada + limón", fr: "Saumon grillé + salade + citron" }, kcal_est: 390, p: 38, c: 6,  f: 24, note: "Σολομός αλατοπιπερωμένος με ελαιόλαδο και λεμόνι. Φούρνος 200°C 12-14'. Σαλάτα απλή.", items: ["160g σολομός", "σαλάτα εποχής", "λεμόνι", "1 κγ ελαιόλαδο", "άνηθος"] },
  { id: "cb_d4",  meal: "dinner", emoji: "🫙", name: "Tzatziki bowl: γιαούρτι, αγγούρι, μέντα, καρύδια",       nameI18n: { el: "Tzatziki bowl: γιαούρτι, αγγούρι, μέντα, καρύδια", en: "Tzatziki bowl: yogurt, cucumber, mint, walnuts", es: "Bol de tzatziki: yogur, pepino, menta, nueces", fr: "Bol tzatziki: yaourt, concombre, menthe, noix" }, kcal_est: 280, p: 14, c: 18, f: 16, note: "Χαλαρό βραδινό. Ελαφρύ και δροσιστικό. Ιδανικό τελευταίο γεύμα.", items: ["250g γιαούρτι στραγγιστό", "½ αγγούρι τριμμένο", "1 σκ. σκόρδο", "15g καρύδια", "μέντα φρέσκια"] },
  { id: "cb_d5",  meal: "dinner", emoji: "🥚", name: "Shakshuka (αυγά σε σάλτσα ντομάτας)",                    nameI18n: { el: "Shakshuka (αυγά σε σάλτσα ντομάτας)", en: "Shakshuka (eggs in tomato sauce)", es: "Shakshuka (huevos en salsa de tomate)", fr: "Shakshuka (œufs en sauce tomate)" }, kcal_est: 360, p: 22, c: 26, f: 18, note: "Σάλτσα: ντομάτα+πιπεριά+κρεμμύδι+κύμινο+πάπρικα. Σπάσε αυγά μέσα, σκέπασε 5-7'. Με ψωμί.", items: ["3 αυγά", "200g ντομάτα κονκασέ", "1 πιπεριά", "κρεμμύδι", "κύμινο, πάπρικα", "1 φέτα ψωμί"] },
  { id: "cb_d6",  meal: "dinner", emoji: "🧀", name: "Cottage με ντομάτα, ελιές & τοστ ολικής",                 nameI18n: { el: "Cottage με ντομάτα, ελιές & τοστ ολικής", en: "Cottage cheese with tomato, olives & whole grain toast", es: "Cottage con tomate, aceitunas & tostada integral", fr: "Cottage cheese avec tomate, olives & toast complet" }, kcal_est: 340, p: 22, c: 28, f: 14, note: "Ελαφρύ βραδινό υψηλής πρωτεΐνης. Ρίγανη, ελαιόλαδο και βαλσάμικο κάνουν τη διαφορά.", items: ["200g cottage cheese", "150g ντομάτα", "8 ελιές", "1 φέτα ψωμί ολικής", "1 κγ ελαιόλαδο", "ρίγανη"] },
  { id: "cb_d7",  meal: "dinner", emoji: "🥩", name: "Μπριζόλα μοσχάρι 200γρ + σαλάτα",                       nameI18n: { el: "Μπριζόλα μοσχάρι 200γρ + σαλάτα", en: "Beef steak 200g + salad", es: "Bistec de ternera 200g + ensalada", fr: "Steak de bœuf 200g + salade" }, kcal_est: 440, p: 48, c: 6,  f: 24, note: "Τηγάνι σε δυνατή φωτιά 3' ανά πλευρά. Ξεκούραση 5' πριν κόψεις. Λεμόνι+θυμάρι.", items: ["200g μπριζόλα μοσχάρι", "σαλάτα πράσινη", "λεμόνι, θυμάρι", "4 ψεκ. ελαιόλαδο"] },
  { id: "cb_d8",  meal: "dinner", emoji: "🌯", name: "Wrap τόνου με αβοκάντο",                                  nameI18n: { el: "Wrap τόνου με αβοκάντο", en: "Tuna wrap with avocado", es: "Wrap de atún con aguacate", fr: "Wrap au thon avec avocat" }, kcal_est: 420, p: 30, c: 38, f: 16, note: "Αναμείξε τόνο+αβοκάντο+λεμόνι+αλάτι. Τορτίγια, μαρούλι, ντοματίνια.", items: ["160g τόνος νερό", "½ αβοκάντο", "1 τορτίγια ολικής", "30g μαρούλι", "50g ντοματίνια"] },
  { id: "cb_d9",  meal: "dinner", emoji: "🍲", name: "Σούπα κοτόπουλο με λαχανικά (avgolemono)",               nameI18n: { el: "Σούπα κοτόπουλο με λαχανικά (avgolemono)", en: "Chicken vegetable soup (avgolemono)", es: "Sopa de pollo con verduras (avgolemono)", fr: "Soupe de poulet aux légumes (avgolemono)" }, kcal_est: 380, p: 36, c: 28, f: 10, note: "Βράσε κοτόπουλο, βγάλε+κόψε. Πρόσθεσε λαχανικά, ρύζι. Avgolemono: αυγό+λεμόνι χτυπημένο.", items: ["150g κοτόπουλο", "60g ρύζι μαγ.", "καρότο, σέλινο", "αυγό+λεμόνι", "ζωμός"] },
  { id: "cb_d10", meal: "dinner", emoji: "🥗", name: "Σαλάτα σπανάκι, παντζάρι & κατσικίσιο τυρί",            nameI18n: { el: "Σαλάτα σπανάκι, παντζάρι & κατσικίσιο τυρί", en: "Spinach, beetroot & goat cheese salad", es: "Ensalada de espinacas, remolacha & queso de cabra", fr: "Salade épinards, betterave & fromage de chèvre" }, kcal_est: 330, p: 14, c: 22, f: 20, note: "Σπανάκι μωρό, βρασμένο παντζάρι, κατσικίσιο τυρί τριμμένο. Ντρέσινγκ: μέλι+μουστάρδα+ξύδι.", items: ["80g σπανάκι μωρό", "100g παντζάρι βραστό", "40g κατσικίσιο τυρί", "15g καρύδια", "1 κγ μέλι+ξύδι"] },
  { id: "cb_d11", meal: "dinner", emoji: "🐟", name: "Ψάρι φούρνου + πουρές & σαλάτα",                        nameI18n: { el: "Ψάρι φούρνου + πουρές & σαλάτα", en: "Baked fish + mashed potato & salad", es: "Pescado al horno + puré & ensalada", fr: "Poisson au four + purée & salade" }, kcal_est: 460, p: 40, c: 40, f: 14, note: "Τσιπούρα/λαβράκι 200γρ στον φούρνο με λεμόνι και ελαιόλαδο. Πουρές ελαφρύς με γάλα. Απλή πράσινη σαλάτα.", items: ["200g τσιπούρα ή λαβράκι", "150g πουρές", "σαλάτα πράσινη", "λεμόνι"] },
  { id: "cb_d12", meal: "dinner", emoji: "🍳", name: "Κλαρκ αυγά (3τεμ) + μανιτάρια + γαλοπούλα",             nameI18n: { el: "Κλαρκ αυγά (3τεμ) + μανιτάρια + γαλοπούλα", en: "Shirred eggs (3) + mushrooms + turkey", es: "Huevos al plato (3) + champiñones + pavo", fr: "Œufs cocotte (3) + champignons + dinde" }, kcal_est: 350, p: 30, c: 4,  f: 22, note: "Σόταρε μανιτάρια+γαλοπούλα. Σπάσε αυγά από πάνω, σκέπασε με καπάκι 4'. Πιπέρι+ρίγανη.", items: ["3 αυγά", "100g μανιτάρια", "80g γαλοπούλα", "1 κγ ελαιόλαδο", "πιπέρι, ρίγανη"] },
  { id: "cb_d13", meal: "dinner", emoji: "🫙", name: "High-protein overnight pudding chia",                     nameI18n: { el: "High-protein overnight pudding chia", en: "High-protein overnight chia pudding", es: "Pudín de chía nocturno alto en proteínas", fr: "Pudding chia de nuit riche en protéines" }, kcal_est: 390, p: 28, c: 38, f: 14, note: "Βράδυ: ανάμειξε γιαούρτι+γάλα+chia+whey+μέλι. Ψυγείο overnight. Φρούτα από πάνω.", items: ["200g γιαούρτι 2%", "100ml γάλα", "20g chia seeds", "20g whey vanilla", "1 κγ μέλι", "φρούτα"] },
  { id: "cb_d14", meal: "dinner", emoji: "🥩", name: "Χοιρινό φιλέτο + μήλο + σαλάτα",                        nameI18n: { el: "Χοιρινό φιλέτο + μήλο + σαλάτα", en: "Pork fillet + apple + salad", es: "Filete de cerdo + manzana + ensalada", fr: "Filet de porc + pomme + salade" }, kcal_est: 410, p: 42, c: 20, f: 16, note: "Χοιρινό φιλέτο (άπαχο) με σάλτσα μήλου+σινάπι. Φούρνος 185°C 20'. Απλή πράσινη σαλάτα.", items: ["200g χοιρινό φιλέτο", "½ μήλο τριμμένο", "1 κγ μουστάρδα", "σαλάτα πράσινη"] },
  { id: "cb_d15", meal: "dinner", emoji: "🌿", name: "Lentil soup βραδινό (φακές λαχανικά)",                   nameI18n: { el: "Lentil soup βραδινό (φακές λαχανικά)", en: "Lentil soup dinner (lentils & vegetables)", es: "Sopa de lentejas cena (lentejas & verduras)", fr: "Soupe de lentilles dîner (lentilles & légumes)" }, kcal_est: 320, p: 18, c: 50, f: 6,  note: "Ελαφρύ και χορταστικό. Φακές+καρότο+σέλινο+ντομάτα. Με λεμόνι στο τέλος.", items: ["200g φακές μαγ.", "καρότο, σέλινο, ντομάτα", "λεμόνι", "1 κγ ελαιόλαδο"] },
];

// ============================================================
// SUPPLEMENTS LIBRARY — Βιβλιοθήκη συμπληρωμάτων
// Βασισμένο σε NIH, EFSA, ISSN συστάσεις
// ============================================================
const SUPPLEMENTS_LIBRARY = [
  // ── ΑΘΛΗΤΙΚΗ ΑΠΟΔΟΣΗ ──────────────────────────────────────────
  {
    id: 'whey',
    name: 'Whey Protein 🥛',
    nameI18n: { el: 'Whey Protein 🥛', en: 'Whey Protein 🥛', es: 'Proteína Whey 🥛', fr: 'Protéine Whey 🥛' },
    category: 'sport',
    qty: '1 σκούπ (25–30g)',
    qtyI18n: { el: '1 σκούπ (25–30g)', en: '1 scoop (25–30g)', es: '1 medida (25–30g)', fr: '1 mesure (25–30g)' },
    timing: 'Μετά την προπόνηση / Πρωί',
    timingI18n: { el: 'Μετά την προπόνηση / Πρωί', en: 'After workout / Morning', es: 'Después del entrenamiento / Mañana', fr: 'Après l\'entraînement / Matin' },
    intake: 'Με νερό ή γάλα',
    intakeI18n: { el: 'Με νερό ή γάλα', en: 'With water or milk', es: 'Con agua o leche', fr: 'Avec de l\'eau ou du lait' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Κατανάλωσέ το εντός 30–60 λεπτών μετά την προπόνηση για μέγιστη αποκατάσταση.',
    tipI18n: { el: 'Κατανάλωσέ το εντός 30–60 λεπτών μετά την προπόνηση για μέγιστη αποκατάσταση.', en: 'Consume within 30–60 minutes after training for maximum recovery.', es: 'Consúmelo en los 30–60 minutos después del entrenamiento para máxima recuperación.', fr: 'Consommez dans les 30–60 minutes après l\'entraînement pour une récupération maximale.' },
    boosts: 'Συνδυασμός με υδατάνθρακες βελτιώνει την απορρόφηση.',
    boostsI18n: { el: 'Συνδυασμός με υδατάνθρακες βελτιώνει την απορρόφηση.', en: 'Combining with carbohydrates improves absorption.', es: 'Combinar con carbohidratos mejora la absorción.', fr: 'La combinaison avec des glucides améliore l\'absorption.' },
    reduces: 'Υψηλή θερμοκρασία (π.χ. ζεστό νερό) μπορεί να αλλοιώσει πρωτεΐνη.',
    reducesI18n: { el: 'Υψηλή θερμοκρασία (π.χ. ζεστό νερό) μπορεί να αλλοιώσει πρωτεΐνη.', en: 'High temperature (e.g. hot water) can denature protein.', es: 'Alta temperatura (ej. agua caliente) puede desnaturalizar la proteína.', fr: 'Une température élevée (ex. eau chaude) peut dénaturer les protéines.' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις.', en: 'No significant contraindications.', es: 'Sin contraindicaciones significativas.', fr: 'Pas de contre-indications significatives.' },
    drinks: '🟡 Αποδεκτό με γάλα — αποφύγετε ζεστά ροφήματα.',
    drinksI18n: { el: '🟡 Αποδεκτό με γάλα — αποφύγετε ζεστά ροφήματα.', en: '🟡 OK with milk — avoid hot beverages.', es: '🟡 Aceptable con leche — evitar bebidas calientes.', fr: '🟡 Acceptable avec du lait — éviter les boissons chaudes.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη μετά προπόνηση',
    idealI18n: { el: '🟢 Ιδανική λήψη μετά προπόνηση', en: '🟢 Ideal intake after workout', es: '🟢 Toma ideal después del entrenamiento', fr: '🟢 Prise idéale après l\'entraînement' },
  },
  {
    id: 'casein',
    name: 'Καζεΐνη 🌙',
    nameI18n: { el: 'Καζεΐνη 🌙', en: 'Casein 🌙', es: 'Caseína 🌙', fr: 'Caséine 🌙' },
    category: 'sport',
    qty: '25–40g',
    qtyI18n: { el: '25–40g', en: '25–40g', es: '25–40g', fr: '25–40g' },
    timing: 'Πριν τον ύπνο',
    timingI18n: { el: 'Πριν τον ύπνο', en: 'Before sleep', es: 'Antes de dormir', fr: 'Avant le sommeil' },
    intake: 'Με νερό ή γάλα',
    intakeI18n: { el: 'Με νερό ή γάλα', en: 'With water or milk', es: 'Con agua o leche', fr: 'Avec eau ou lait' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Σταδιακή αποδέσμευση αμινοξέων 6–8 ώρες. Ιδανική για αντικαταβολισμό κατά τη νύχτα.',
    tipI18n: { el: 'Σταδιακή αποδέσμευση αμινοξέων 6–8 ώρες. Ιδανική για αντικαταβολισμό κατά τη νύχτα.', en: 'Slow-release amino acids over 6–8 hours. Ideal for overnight anti-catabolism.', es: 'Liberación lenta de aminoácidos durante 6–8 horas. Ideal para anticatabolismo nocturno.', fr: 'Libération lente des acides aminés sur 6–8 heures. Idéale pour l\'anti-catabolisme nocturne.' },
    boosts: 'Συνδυασμός με λίγο γεύμα πριν τον ύπνο (π.χ. cottage cheese) ενισχύει αποτέλεσμα.',
    boostsI18n: { el: 'Συνδυασμός με λίγο γεύμα πριν τον ύπνο (π.χ. cottage cheese) ενισχύει αποτέλεσμα.', en: 'Combining with a light pre-sleep snack (e.g. cottage cheese) enhances results.', es: 'Combinar con un pequeño snack antes de dormir (ej. requesón) mejora resultados.', fr: 'Associer à une petite collation avant le coucher (ex. cottage cheese) améliore les résultats.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Αποφύγετε αν έχετε δυσανεξία στη λακτόζη ή στο γάλα.',
    avoidI18n: { el: 'Αποφύγετε αν έχετε δυσανεξία στη λακτόζη ή στο γάλα.', en: 'Avoid if you have lactose or milk intolerance.', es: 'Evitar si tiene intolerancia a la lactosa o leche.', fr: 'Éviter en cas d\'intolérance au lactose ou au lait.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη 30–60 λεπτά πριν τον ύπνο',
    idealI18n: { el: '🟢 Ιδανική λήψη 30–60 λεπτά πριν τον ύπνο', en: '🟢 Ideal intake 30–60 minutes before sleep', es: '🟢 Toma ideal 30–60 minutos antes de dormir', fr: '🟢 Prise idéale 30–60 minutes avant le sommeil' },
  },
  {
    id: 'creatine',
    name: 'Κρεατίνη 💪',
    nameI18n: { el: 'Κρεατίνη 💪', en: 'Creatine 💪', es: 'Creatina 💪', fr: 'Créatine 💪' },
    category: 'sport',
    qty: '3–5g',
    qtyI18n: { el: '3–5g', en: '3–5g', es: '3–5g', fr: '3–5g' },
    timing: 'Οποιαδήποτε ώρα (η συνέπεια μετράει)',
    timingI18n: { el: 'Οποιαδήποτε ώρα (η συνέπεια μετράει)', en: 'Any time (consistency matters)', es: 'Cualquier hora (la constancia importa)', fr: 'N\'importe quand (la constance compte)' },
    intake: 'Με γεύμα ή post-workout',
    intakeI18n: { el: 'Με γεύμα ή post-workout', en: 'With a meal or post-workout', es: 'Con comida o post-entrenamiento', fr: 'Avec un repas ou post-entraînement' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Πάρτη κάθε μέρα — ακόμα και τις μέρες που δεν προπονείσαι. Δεν χρειάζεται φόρτωση.',
    tipI18n: { el: 'Πάρτη κάθε μέρα — ακόμα και τις μέρες που δεν προπονείσαι. Δεν χρειάζεται φόρτωση.', en: 'Take it every day — even on rest days. No loading phase needed.', es: 'Tómala todos los días — incluso en días de descanso. No necesita fase de carga.', fr: 'Prenez-le tous les jours — même les jours de repos. Pas besoin de phase de charge.' },
    boosts: 'Συνδυασμός με υδατάνθρακες ή πρωτεΐνη βελτιώνει την πρόσληψη από τους μύες.',
    boostsI18n: { el: 'Συνδυασμός με υδατάνθρακες ή πρωτεΐνη βελτιώνει την πρόσληψη από τους μύες.', en: 'Combining with carbs or protein improves muscle uptake.', es: 'Combinar con carbohidratos o proteínas mejora la absorción muscular.', fr: 'Associer à des glucides ou protéines améliore l\'absorption musculaire.' },
    reduces: 'Καφεΐνη σε πολύ υψηλές δόσεις μπορεί να μειώσει αποτελεσματικότητα.',
    reducesI18n: { el: 'Καφεΐνη σε πολύ υψηλές δόσεις μπορεί να μειώσει αποτελεσματικότητα.', en: 'Very high caffeine doses may reduce effectiveness.', es: 'Dosis muy altas de cafeína pueden reducir la efectividad.', fr: 'De très fortes doses de caféine peuvent réduire l\'efficacité.' },
    avoid: 'Αποφύγετε ταυτόχρονη λήψη με μεγάλες δόσεις καφεΐνης.',
    avoidI18n: { el: 'Αποφύγετε ταυτόχρονη λήψη με μεγάλες δόσεις καφεΐνης.', en: 'Avoid taking with high doses of caffeine simultaneously.', es: 'Evitar tomar simultáneamente con altas dosis de cafeína.', fr: 'Éviter de prendre simultanément avec de fortes doses de caféine.' },
    drinks: '🟡 Αποδεκτό με καφέ σε κανονικές ποσότητες.',
    drinksI18n: { el: '🟡 Αποδεκτό με καφέ σε κανονικές ποσότητες.', en: '🟡 OK with coffee in normal amounts.', es: '🟡 Aceptable con café en cantidades normales.', fr: '🟡 Acceptable avec du café en quantités normales.' },
    gap: '2 ώρες από υψηλές δόσεις καφεΐνης.',
    gapI18n: { el: '2 ώρες από υψηλές δόσεις καφεΐνης.', en: '2 hours from high caffeine doses.', es: '2 horas desde altas dosis de cafeína.', fr: '2 heures après de fortes doses de caféine.' },
    ideal: '🟢 Ιδανική λήψη μετά προπόνηση ή με γεύμα',
    idealI18n: { el: '🟢 Ιδανική λήψη μετά προπόνηση ή με γεύμα', en: '🟢 Ideal intake after workout or with a meal', es: '🟢 Toma ideal después del entrenamiento o con comida', fr: '🟢 Prise idéale après l\'entraînement ou avec un repas' },
  },
  {
    id: 'eaa',
    name: 'EAA (Απαραίτητα Αμινοξέα) 🌿',
    nameI18n: { el: 'EAA (Απαραίτητα Αμινοξέα) 🌿', en: 'EAA (Essential Amino Acids) 🌿', es: 'EAA (Aminoácidos Esenciales) 🌿', fr: 'EAA (Acides Aminés Essentiels) 🌿' },
    category: 'sport',
    qty: '10–15g',
    qtyI18n: { el: '10–15g', en: '10–15g', es: '10–15g', fr: '10–15g' },
    timing: 'Πριν ή κατά τη διάρκεια της προπόνησης',
    timingI18n: { el: 'Πριν ή κατά τη διάρκεια της προπόνησης', en: 'Before or during training', es: 'Antes o durante el entrenamiento', fr: 'Avant ou pendant l\'entraînement' },
    intake: 'Διαλυμένα σε νερό',
    intakeI18n: { el: 'Διαλυμένα σε νερό', en: 'Dissolved in water', es: 'Disuelto en agua', fr: 'Dissous dans l\'eau' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Χρήσιμα κυρίως όταν η προπόνηση γίνεται νηστικός ή με χαμηλή πρωτεΐνη στη διατροφή.',
    tipI18n: { el: 'Χρήσιμα κυρίως όταν η προπόνηση γίνεται νηστικός ή με χαμηλή πρωτεΐνη στη διατροφή.', en: 'Most useful when training fasted or with low dietary protein.', es: 'Más útil cuando se entrena en ayunas o con baja proteína en la dieta.', fr: 'Plus utile lorsqu\'on s\'entraîne à jeun ou avec peu de protéines.' },
    boosts: 'Καλύπτουν και τα 9 απαραίτητα αμινοξέα — πληρέστερα από τα BCAA.',
    boostsI18n: { el: 'Καλύπτουν και τα 9 απαραίτητα αμινοξέα — πληρέστερα από τα BCAA.', en: 'Covers all 9 essential amino acids — more complete than BCAAs.', es: 'Cubre los 9 aminoácidos esenciales — más completo que los BCAA.', fr: 'Couvre les 9 acides aminés essentiels — plus complet que les BCAA.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Περιττά αν η ημερήσια πρόσληψη πρωτεΐνης είναι επαρκής (>1.6g/kg).',
    avoidI18n: { el: 'Περιττά αν η ημερήσια πρόσληψη πρωτεΐνης είναι επαρκής (>1.6g/kg).', en: 'Unnecessary if daily protein intake is adequate (>1.6g/kg).', es: 'Innecesario si la ingesta diaria de proteínas es adecuada (>1.6g/kg).', fr: 'Inutile si l\'apport journalier en protéines est suffisant (>1,6g/kg).' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη πριν ή κατά την προπόνηση, ειδικά νηστικός',
    idealI18n: { el: '🟢 Ιδανική λήψη πριν ή κατά την προπόνηση, ειδικά νηστικός', en: '🟢 Ideal intake before or during training, especially fasted', es: '🟢 Toma ideal antes o durante el entrenamiento, especialmente en ayunas', fr: '🟢 Prise idéale avant ou pendant l\'entraînement, surtout à jeun' },
  },
  {
    id: 'bcaa',
    name: 'BCAA ⚡',
    nameI18n: { el: 'BCAA ⚡', en: 'BCAA ⚡', es: 'BCAA ⚡', fr: 'BCAA ⚡' },
    category: 'sport',
    qty: '5–10g',
    qtyI18n: { el: '5–10g', en: '5–10g', es: '5–10g', fr: '5–10g' },
    timing: 'Πριν ή κατά την προπόνηση',
    timingI18n: { el: 'Πριν ή κατά την προπόνηση', en: 'Before or during training', es: 'Antes o durante el entrenamiento', fr: 'Avant ou pendant l\'entraînement' },
    intake: 'Διαλυμένα σε νερό',
    intakeI18n: { el: 'Διαλυμένα σε νερό', en: 'Dissolved in water', es: 'Disuelto en agua', fr: 'Dissous dans l\'eau' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Περιορισμένο πρόσθετο όφελος αν η συνολική πρωτεΐνη ημέρας είναι επαρκής.',
    tipI18n: { el: 'Περιορισμένο πρόσθετο όφελος αν η συνολική πρωτεΐνη ημέρας είναι επαρκής.', en: 'Limited additional benefit if total daily protein is adequate.', es: 'Beneficio adicional limitado si la proteína diaria total es adecuada.', fr: 'Bénéfice supplémentaire limité si l\'apport journalier en protéines est adéquat.' },
    boosts: 'Λευκίνη ενεργοποιεί mTOR — υποστηρίζει σύνθεση μυϊκής πρωτεΐνης.',
    boostsI18n: { el: 'Λευκίνη ενεργοποιεί mTOR — υποστηρίζει σύνθεση μυϊκής πρωτεΐνης.', en: 'Leucine activates mTOR — supports muscle protein synthesis.', es: 'La leucina activa mTOR — apoya la síntesis de proteínas musculares.', fr: 'La leucine active mTOR — soutient la synthèse des protéines musculaires.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Εάν παίρνεις EAA, τα BCAA δεν προσφέρουν επιπλέον όφελος.',
    avoidI18n: { el: 'Εάν παίρνεις EAA, τα BCAA δεν προσφέρουν επιπλέον όφελος.', en: 'If taking EAA, BCAAs offer no additional benefit.', es: 'Si tomas EAA, los BCAA no ofrecen beneficio adicional.', fr: 'Si vous prenez des EAA, les BCAA n\'apportent aucun bénéfice supplémentaire.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟡 Αποδεκτή λήψη πριν/κατά προπόνηση αν η πρωτεΐνη είναι χαμηλή',
    idealI18n: { el: '🟡 Αποδεκτή λήψη πριν/κατά προπόνηση αν η πρωτεΐνη είναι χαμηλή', en: '🟡 Acceptable intake before/during training if protein is low', es: '🟡 Toma aceptable antes/durante entrenamiento si la proteína es baja', fr: '🟡 Prise acceptable avant/pendant l\'entraînement si les protéines sont faibles' },
  },
  {
    id: 'caffeine',
    name: 'Καφεΐνη ☕',
    nameI18n: { el: 'Καφεΐνη ☕', en: 'Caffeine ☕', es: 'Cafeína ☕', fr: 'Caféine ☕' },
    category: 'sport',
    qty: '100–300mg',
    qtyI18n: { el: '100–300mg', en: '100–300mg', es: '100–300mg', fr: '100–300mg' },
    timing: '30–60 λεπτά πριν την προπόνηση',
    timingI18n: { el: '30–60 λεπτά πριν την προπόνηση', en: '30–60 minutes before training', es: '30–60 minutos antes del entrenamiento', fr: '30–60 minutes avant l\'entraînement' },
    intake: 'Με νερό ή καφέ',
    intakeI18n: { el: 'Με νερό ή καφέ', en: 'With water or coffee', es: 'Con agua o café', fr: 'Avec de l\'eau ou du café' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Αποφύγετε μετά τις 14:00 για να μην επηρεαστεί ο ύπνος. Tolerance αυξάνεται γρήγορα — κάνε διαλείμματα.',
    tipI18n: { el: 'Αποφύγετε μετά τις 14:00 για να μην επηρεαστεί ο ύπνος. Tolerance αυξάνεται γρήγορα — κάνε διαλείμματα.', en: 'Avoid after 2pm to prevent sleep disruption. Tolerance builds fast — take breaks.', es: 'Evitar después de las 14:00 para no afectar el sueño. La tolerancia aumenta rápido — haz descansos.', fr: 'Éviter après 14h pour ne pas perturber le sommeil. La tolérance augmente vite — faites des pauses.' },
    boosts: 'Συνδυασμός με L-Θεανίνη μειώνει νευρικότητα διατηρώντας εγρήγορση.',
    boostsI18n: { el: 'Συνδυασμός με L-Θεανίνη μειώνει νευρικότητα διατηρώντας εγρήγορση.', en: 'Combining with L-Theanine reduces jitteriness while maintaining alertness.', es: 'Combinar con L-Teanina reduce el nerviosismo manteniendo el estado de alerta.', fr: 'La combinaison avec la L-Théanine réduit l\'agitation tout en maintenant la vigilance.' },
    reduces: 'Αφυδάτωση αν δεν πίνεις αρκετό νερό.',
    reducesI18n: { el: 'Αφυδάτωση αν δεν πίνεις αρκετό νερό.', en: 'Dehydration if not drinking enough water.', es: 'Deshidratación si no bebes suficiente agua.', fr: 'Déshydratation si vous ne buvez pas assez d\'eau.' },
    avoid: 'Αποφύγετε με Κρεατίνη σε μεγάλες δόσεις. Μην υπερβαίνετε 400mg/ημέρα.',
    avoidI18n: { el: 'Αποφύγετε με Κρεατίνη σε μεγάλες δόσεις. Μην υπερβαίνετε 400mg/ημέρα.', en: 'Avoid with high-dose Creatine. Do not exceed 400mg/day.', es: 'Evitar con Creatina en dosis altas. No superar 400mg/día.', fr: 'Éviter avec de la Créatine à haute dose. Ne pas dépasser 400mg/jour.' },
    drinks: '🟡 Είναι η ίδια η καφεΐνη — προσοχή στη σώρευση από καφέ + pre-workout.',
    drinksI18n: { el: '🟡 Είναι η ίδια η καφεΐνη — προσοχή στη σώρευση από καφέ + pre-workout.', en: '🟡 This IS caffeine — watch cumulative intake from coffee + pre-workout.', es: '🟡 Es la misma cafeína — cuidado con la acumulación de café + pre-entrenamiento.', fr: '🟡 C\'est la caféine elle-même — attention à l\'accumulation café + pré-entraînement.' },
    gap: '6 ώρες πριν τον ύπνο.',
    gapI18n: { el: '6 ώρες πριν τον ύπνο.', en: '6 hours before sleep.', es: '6 horas antes de dormir.', fr: '6 heures avant le sommeil.' },
    ideal: '🟢 Ιδανική λήψη 30–60 λεπτά πριν την προπόνηση',
    idealI18n: { el: '🟢 Ιδανική λήψη 30–60 λεπτά πριν την προπόνηση', en: '🟢 Ideal intake 30–60 minutes before training', es: '🟢 Toma ideal 30–60 minutos antes del entrenamiento', fr: '🟢 Prise idéale 30–60 minutes avant l\'entraînement' },
  },
  {
    id: 'citrulline',
    name: 'Citrulline Malate 🚀',
    nameI18n: { el: 'Citrulline Malate 🚀', en: 'Citrulline Malate 🚀', es: 'Citruline Malato 🚀', fr: 'Citrulline Malate 🚀' },
    category: 'sport',
    qty: '6–8g',
    qtyI18n: { el: '6–8g', en: '6–8g', es: '6–8g', fr: '6–8g' },
    timing: '30–60 λεπτά πριν την προπόνηση',
    timingI18n: { el: '30–60 λεπτά πριν την προπόνηση', en: '30–60 minutes before training', es: '30–60 minutos antes del entrenamiento', fr: '30–60 minutes avant l\'entraînement' },
    intake: 'Με νερό',
    intakeI18n: { el: 'Με νερό', en: 'With water', es: 'Con agua', fr: 'Avec de l\'eau' },
    evidence: 'Μέτρια-Υψηλή',
    evidenceI18n: { el: 'Μέτρια-Υψηλή', en: 'Moderate-High', es: 'Moderada-Alta', fr: 'Modérée-Élevée' },
    tip: 'Βελτιώνει αιματική ροή (pump) και μειώνει κόπωση. Αποτελεσματικότερη από απλή L-Αργινίνη.',
    tipI18n: { el: 'Βελτιώνει αιματική ροή (pump) και μειώνει κόπωση. Αποτελεσματικότερη από απλή L-Αργινίνη.', en: 'Improves blood flow (pump) and reduces fatigue. More effective than plain L-Arginine.', es: 'Mejora el flujo sanguíneo (pump) y reduce la fatiga. Más efectivo que la L-Arginina simple.', fr: 'Améliore le flux sanguin (pump) et réduit la fatigue. Plus efficace que la L-Arginine simple.' },
    boosts: 'Συνδυασμός με καφεΐνη ενισχύει αθλητική απόδοση.',
    boostsI18n: { el: 'Συνδυασμός με καφεΐνη ενισχύει αθλητική απόδοση.', en: 'Combining with caffeine enhances athletic performance.', es: 'Combinar con cafeína mejora el rendimiento atlético.', fr: 'La combinaison avec la caféine améliore les performances sportives.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Προσοχή με φάρμακα για αρτηριακή πίεση.',
    avoidI18n: { el: 'Προσοχή με φάρμακα για αρτηριακή πίεση.', en: 'Caution with blood pressure medications.', es: 'Precaución con medicamentos para la presión arterial.', fr: 'Prudence avec les médicaments contre l\'hypertension.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη 45–60 λεπτά πριν την προπόνηση',
    idealI18n: { el: '🟢 Ιδανική λήψη 45–60 λεπτά πριν την προπόνηση', en: '🟢 Ideal intake 45–60 minutes before training', es: '🟢 Toma ideal 45–60 minutos antes del entrenamiento', fr: '🟢 Prise idéale 45–60 minutes avant l\'entraînement' },
  },
  {
    id: 'beta_alanine',
    name: 'Βήτα-Αλανίνη 🔥',
    nameI18n: { el: 'Βήτα-Αλανίνη 🔥', en: 'Beta-Alanine 🔥', es: 'Beta-Alanina 🔥', fr: 'Bêta-Alanine 🔥' },
    category: 'sport',
    qty: '3.2–6.4g',
    qtyI18n: { el: '3.2–6.4g', en: '3.2–6.4g', es: '3.2–6.4g', fr: '3.2–6.4g' },
    timing: 'Οποιαδήποτε ώρα',
    timingI18n: { el: 'Οποιαδήποτε ώρα', en: 'Any time', es: 'Cualquier hora', fr: 'N\'importe quand' },
    intake: 'Με γεύμα για μείωση παραισθησίας',
    intakeI18n: { el: 'Με γεύμα για μείωση παραισθησίας', en: 'With food to reduce tingling', es: 'Con comida para reducir el hormigueo', fr: 'Avec de la nourriture pour réduire les picotements' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Μπορεί να προκαλέσει μυρμήγκιασμα (παραισθησία) — φυσιολογικό και αβλαβές. Χωρίστε τη δόση.',
    tipI18n: { el: 'Μπορεί να προκαλέσει μυρμήγκιασμα (παραισθησία) — φυσιολογικό και αβλαβές. Χωρίστε τη δόση.', en: 'May cause tingling (paraesthesia) — normal and harmless. Split the dose.', es: 'Puede causar hormigueo (parestesia) — normal e inofensivo. Dividir la dosis.', fr: 'Peut provoquer des picotements (paresthésie) — normal et inoffensif. Diviser la dose.' },
    boosts: 'Αυξάνει καρνοσίνη στους μύες — βελτιώνει αντοχή σε υψηλής έντασης άσκηση.',
    boostsI18n: { el: 'Αυξάνει καρνοσίνη στους μύες — βελτιώνει αντοχή σε υψηλής έντασης άσκηση.', en: 'Increases muscle carnosine — improves endurance in high-intensity exercise.', es: 'Aumenta la carnosina muscular — mejora la resistencia en ejercicio de alta intensidad.', fr: 'Augmente la carnosine musculaire — améliore l\'endurance lors d\'exercices de haute intensité.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις.', en: 'No significant contraindications.', es: 'Sin contraindicaciones significativas.', fr: 'Pas de contre-indications significatives.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Η καθημερινή λήψη έχει σημασία περισσότερο από την ώρα',
    idealI18n: { el: '🟢 Η καθημερινή λήψη έχει σημασία περισσότερο από την ώρα', en: '🟢 Daily consistency matters more than timing', es: '🟢 La consistencia diaria importa más que el horario', fr: '🟢 La régularité quotidienne compte plus que l\'heure de prise' },
  },
  {
    id: 'electrolytes',
    name: 'Ηλεκτρολύτες 💧',
    nameI18n: { el: 'Ηλεκτρολύτες 💧', en: 'Electrolytes 💧', es: 'Electrolitos 💧', fr: 'Électrolytes 💧' },
    category: 'sport',
    qty: 'Κατά οδηγίες συσκευασίας',
    qtyI18n: { el: 'Κατά οδηγίες συσκευασίας', en: 'As per package instructions', es: 'Según las instrucciones del envase', fr: 'Selon les instructions de l\'emballage' },
    timing: 'Πριν / Κατά τη διάρκεια άσκησης',
    timingI18n: { el: 'Πριν / Κατά τη διάρκεια άσκησης', en: 'Before / During exercise', es: 'Antes / Durante el ejercicio', fr: 'Avant / Pendant l\'exercice' },
    intake: 'Διαλυμένοι σε νερό',
    intakeI18n: { el: 'Διαλυμένοι σε νερό', en: 'Dissolved in water', es: 'Disueltos en agua', fr: 'Dissous dans l\'eau' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Απαραίτητοι σε έντονη εφίδρωση, ζέστη ή >60 λεπτά άσκηση. Αποφύγετε κατά τη νύχτα.',
    tipI18n: { el: 'Απαραίτητοι σε έντονη εφίδρωση, ζέστη ή >60 λεπτά άσκηση. Αποφύγετε κατά τη νύχτα.', en: 'Essential during heavy sweating, heat or >60 min exercise. Avoid at night.', es: 'Esenciales durante sudoración intensa, calor o >60 min de ejercicio. Evitar por la noche.', fr: 'Essentiels lors de transpiration intense, de chaleur ou >60 min d\'exercice. Éviter la nuit.' },
    boosts: 'Νάτριο, κάλιο, μαγνήσιο — ισορροπούν υγρά και μυϊκή λειτουργία.',
    boostsI18n: { el: 'Νάτριο, κάλιο, μαγνήσιο — ισορροπούν υγρά και μυϊκή λειτουργία.', en: 'Sodium, potassium, magnesium — balance fluids and muscle function.', es: 'Sodio, potasio, magnesio — equilibran líquidos y función muscular.', fr: 'Sodium, potassium, magnésium — équilibrent les fluides et la fonction musculaire.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Περιττοί για ελαφριά άσκηση <45 λεπτά σε κανονικές συνθήκες.',
    avoidI18n: { el: 'Περιττοί για ελαφριά άσκηση <45 λεπτά σε κανονικές συνθήκες.', en: 'Unnecessary for light exercise <45 minutes in normal conditions.', es: 'Innecesarios para ejercicio ligero <45 minutos en condiciones normales.', fr: 'Inutiles pour un exercice léger <45 minutes dans des conditions normales.' },
    drinks: '🟢 Είναι τα ίδια ροφήματα αθλητικά.',
    drinksI18n: { el: '🟢 Είναι τα ίδια ροφήματα αθλητικά.', en: '🟢 These ARE sports drinks.', es: '🟢 Son las mismas bebidas deportivas.', fr: '🟢 Ce sont des boissons sportives elles-mêmes.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανικοί σε έντονη εφίδρωση ή ζέστη',
    idealI18n: { el: '🟢 Ιδανικοί σε έντονη εφίδρωση ή ζέστη', en: '🟢 Ideal during heavy sweating or heat', es: '🟢 Ideal durante sudoración intensa o calor', fr: '🟢 Idéal lors de transpiration intense ou de chaleur' },
  },
  // ── ΥΓΕΙΑ ───────────────────────────────────────────────────────
  {
    id: 'vitd3',
    name: 'Βιταμίνη D3 ☀️',
    nameI18n: { el: 'Βιταμίνη D3 ☀️', en: 'Vitamin D3 ☀️', es: 'Vitamina D3 ☀️', fr: 'Vitamine D3 ☀️' },
    category: 'health',
    qty: '1000–4000 IU',
    qtyI18n: { el: '1000–4000 IU', en: '1000–4000 IU', es: '1000–4000 UI', fr: '1000–4000 UI' },
    timing: 'Πρωί ή Μεσημέρι',
    timingI18n: { el: 'Πρωί ή Μεσημέρι', en: 'Morning or Midday', es: 'Mañana o Mediodía', fr: 'Matin ou Midi' },
    intake: 'Με λιπαρό γεύμα',
    intakeI18n: { el: 'Με λιπαρό γεύμα', en: 'With a fatty meal', es: 'Con una comida grasa', fr: 'Avec un repas gras' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Πάντα με φαγητό που περιέχει λίπος (π.χ. αυγά, ελαιόλαδο). Συνδύασε με Κ2 αν παίρνεις υψηλή δόση.',
    tipI18n: { el: 'Πάντα με φαγητό που περιέχει λίπος (π.χ. αυγά, ελαιόλαδο). Συνδύασε με Κ2 αν παίρνεις υψηλή δόση.', en: 'Always with food containing fat (e.g. eggs, olive oil). Combine with K2 if taking high doses.', es: 'Siempre con alimentos que contengan grasa (ej. huevos, aceite de oliva). Combinar con K2 si tomas dosis altas.', fr: 'Toujours avec des aliments contenant des graisses (ex. œufs, huile d\'olive). Associer à K2 si forte dose.' },
    boosts: 'Λιπαρά τρόφιμα αυξάνουν την απορρόφηση έως 50%. Μαγνήσιο βοηθά στη μεταβολισμό της D3.',
    boostsI18n: { el: 'Λιπαρά τρόφιμα αυξάνουν την απορρόφηση έως 50%. Μαγνήσιο βοηθά στη μεταβολισμό της D3.', en: 'Fatty foods increase absorption by up to 50%. Magnesium helps metabolise D3.', es: 'Los alimentos grasos aumentan la absorción hasta un 50%. El magnesio ayuda a metabolizar la D3.', fr: 'Les aliments gras augmentent l\'absorption jusqu\'à 50%. Le magnésium aide à métaboliser la D3.' },
    reduces: 'Νηστικός στομάχι μειώνει σημαντικά την απορρόφηση.',
    reducesI18n: { el: 'Νηστικός στομάχι μειώνει σημαντικά την απορρόφηση.', en: 'Empty stomach significantly reduces absorption.', es: 'El estómago vacío reduce significativamente la absorción.', fr: 'L\'estomac vide réduit considérablement l\'absorption.' },
    avoid: 'Μεγάλες δόσεις ασβεστίου ταυτόχρονα μπορεί να επηρεάσουν ισορροπία.',
    avoidI18n: { el: 'Μεγάλες δόσεις ασβεστίου ταυτόχρονα μπορεί να επηρεάσουν ισορροπία.', en: 'High calcium doses simultaneously may affect balance.', es: 'Dosis altas de calcio simultáneamente pueden afectar el equilibrio.', fr: 'De fortes doses de calcium simultanées peuvent affecter l\'équilibre.' },
    drinks: '🟢 Χωρίς πρόβλημα με καφέ ή τσάι.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα με καφέ ή τσάι.', en: '🟢 No issues with coffee or tea.', es: '🟢 Sin problema con café o té.', fr: '🟢 Aucun problème avec le café ou le thé.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με πρωινό ή μεσημεριανό που περιέχει λίπος',
    idealI18n: { el: '🟢 Ιδανική λήψη με πρωινό ή μεσημεριανό που περιέχει λίπος', en: '🟢 Ideal intake with breakfast or lunch containing fat', es: '🟢 Toma ideal con desayuno o almuerzo que contenga grasa', fr: '🟢 Prise idéale avec le petit-déjeuner ou déjeuner contenant des graisses' },
  },
  {
    id: 'vitk2',
    name: 'Βιταμίνη K2 🟢',
    nameI18n: { el: 'Βιταμίνη K2 🟢', en: 'Vitamin K2 🟢', es: 'Vitamina K2 🟢', fr: 'Vitamine K2 🟢' },
    category: 'health',
    qty: '90–180mcg',
    qtyI18n: { el: '90–180mcg', en: '90–180mcg', es: '90–180mcg', fr: '90–180mcg' },
    timing: 'Μαζί με τη D3',
    timingI18n: { el: 'Μαζί με τη D3', en: 'Together with D3', es: 'Junto con D3', fr: 'Avec la D3' },
    intake: 'Με λιπαρό γεύμα',
    intakeI18n: { el: 'Με λιπαρό γεύμα', en: 'With a fatty meal', es: 'Con una comida grasa', fr: 'Avec un repas gras' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Η K2 (MK-7 μορφή) κατευθύνει το ασβέστιο στα οστά και απομακρύνει από αρτηρίες.',
    tipI18n: { el: 'Η K2 (MK-7 μορφή) κατευθύνει το ασβέστιο στα οστά και απομακρύνει από αρτηρίες.', en: 'K2 (MK-7 form) directs calcium to bones and away from arteries.', es: 'K2 (forma MK-7) dirige el calcio a los huesos y lo aleja de las arterias.', fr: 'K2 (forme MK-7) dirige le calcium vers les os et l\'éloigne des artères.' },
    boosts: 'Συνεργεί με D3 και Ασβέστιο για υγεία οστών και καρδιαγγειακό.',
    boostsI18n: { el: 'Συνεργεί με D3 και Ασβέστιο για υγεία οστών και καρδιαγγειακό.', en: 'Synergises with D3 and Calcium for bone health and cardiovascular system.', es: 'Sinergia con D3 y Calcio para la salud ósea y cardiovascular.', fr: 'Synergie avec D3 et Calcium pour la santé osseuse et cardiovasculaire.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Προσοχή αν παίρνεις αντιπηκτικά (π.χ. Βαρφαρίνη) — ενημέρωσε γιατρό.',
    avoidI18n: { el: 'Προσοχή αν παίρνεις αντιπηκτικά (π.χ. Βαρφαρίνη) — ενημέρωσε γιατρό.', en: 'Caution if taking anticoagulants (e.g. Warfarin) — inform your doctor.', es: 'Precaución si toma anticoagulantes (ej. Warfarina) — informar al médico.', fr: 'Prudence si vous prenez des anticoagulants (ex. Warfarine) — informez votre médecin.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική συνδυαστική λήψη με D3 και λιπαρό γεύμα',
    idealI18n: { el: '🟢 Ιδανική συνδυαστική λήψη με D3 και λιπαρό γεύμα', en: '🟢 Ideal combined intake with D3 and a fatty meal', es: '🟢 Toma ideal combinada con D3 y una comida grasa', fr: '🟢 Prise idéale combinée avec D3 et un repas gras' },
  },
  {
    id: 'magnesium',
    name: 'Μαγνήσιο 🧲',
    nameI18n: { el: 'Μαγνήσιο 🧲', en: 'Magnesium 🧲', es: 'Magnesio 🧲', fr: 'Magnésium 🧲' },
    category: 'health',
    qty: '300–400mg',
    qtyI18n: { el: '300–400mg', en: '300–400mg', es: '300–400mg', fr: '300–400mg' },
    timing: 'Βράδυ / Πριν τον ύπνο',
    timingI18n: { el: 'Βράδυ / Πριν τον ύπνο', en: 'Evening / Before sleep', es: 'Tarde / Antes de dormir', fr: 'Soir / Avant le sommeil' },
    intake: 'Με ελαφρύ γεύμα ή νερό',
    intakeI18n: { el: 'Με ελαφρύ γεύμα ή νερό', en: 'With a light meal or water', es: 'Con una comida ligera o agua', fr: 'Avec un repas léger ou de l\'eau' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Πάρε το 30–60 λεπτά πριν τον ύπνο για μυϊκή αποκατάσταση και καλύτερη ποιότητα ύπνου.',
    tipI18n: { el: 'Πάρε το 30–60 λεπτά πριν τον ύπνο για μυϊκή αποκατάσταση και καλύτερη ποιότητα ύπνου.', en: 'Take 30–60 minutes before sleep for muscle recovery and better sleep quality.', es: 'Tomar 30–60 minutos antes de dormir para recuperación muscular y mejor calidad de sueño.', fr: 'Prendre 30–60 minutes avant le sommeil pour la récupération musculaire et une meilleure qualité de sommeil.' },
    boosts: 'Ελαφρύ γεύμα βελτιώνει ανοχή στομάχου. Βιταμίνη D3 συνεργεί.',
    boostsI18n: { el: 'Ελαφρύ γεύμα βελτιώνει ανοχή στομάχου. Βιταμίνη D3 συνεργεί.', en: 'A light meal improves stomach tolerance. Vitamin D3 synergises.', es: 'Una comida ligera mejora la tolerancia estomacal. La vitamina D3 actúa sinérgicamente.', fr: 'Un repas léger améliore la tolérance gastrique. La vitamine D3 agit en synergie.' },
    reduces: 'Ασβέστιο σε υψηλές δόσεις ανταγωνίζεται για απορρόφηση. Φυτικό οξύ (δημητριακά) μειώνει απορρόφηση.',
    reducesI18n: { el: 'Ασβέστιο σε υψηλές δόσεις ανταγωνίζεται για απορρόφηση. Φυτικό οξύ (δημητριακά) μειώνει απορρόφηση.', en: 'High-dose calcium competes for absorption. Phytic acid (cereals) reduces absorption.', es: 'El calcio en dosis altas compite por la absorción. El ácido fítico (cereales) reduce la absorción.', fr: 'Le calcium à haute dose entre en compétition pour l\'absorption. L\'acide phytique (céréales) réduit l\'absorption.' },
    avoid: 'Μην παίρνεις μαζί με ασβέστιο ή ψευδάργυρο σε υψηλές δόσεις.',
    avoidI18n: { el: 'Μην παίρνεις μαζί με ασβέστιο ή ψευδάργυρο σε υψηλές δόσεις.', en: 'Do not take with calcium or zinc at high doses.', es: 'No tomar con calcio o zinc en dosis altas.', fr: 'Ne pas prendre avec du calcium ou du zinc à fortes doses.' },
    drinks: '🔴 Αποφύγετε καφέ/τσάι ταυτόχρονα — μειώνουν απορρόφηση.',
    drinksI18n: { el: '🔴 Αποφύγετε καφέ/τσάι ταυτόχρονα — μειώνουν απορρόφηση.', en: '🔴 Avoid coffee/tea simultaneously — they reduce absorption.', es: '🔴 Evitar café/té simultáneamente — reducen la absorción.', fr: '🔴 Éviter café/thé simultanément — ils réduisent l\'absorption.' },
    gap: '2 ώρες από ασβέστιο και ψευδάργυρο.',
    gapI18n: { el: '2 ώρες από ασβέστιο και ψευδάργυρο.', en: '2 hours from calcium and zinc.', es: '2 horas desde calcio y zinc.', fr: '2 heures après calcium et zinc.' },
    ideal: '🟢 Ιδανική λήψη πριν τον ύπνο',
    idealI18n: { el: '🟢 Ιδανική λήψη πριν τον ύπνο', en: '🟢 Ideal intake before sleep', es: '🟢 Toma ideal antes de dormir', fr: '🟢 Prise idéale avant le sommeil' },
  },
  {
    id: 'zinc',
    name: 'Ψευδάργυρος ⚡',
    nameI18n: { el: 'Ψευδάργυρος ⚡', en: 'Zinc ⚡', es: 'Zinc ⚡', fr: 'Zinc ⚡' },
    category: 'health',
    qty: '15–25mg',
    qtyI18n: { el: '15–25mg', en: '15–25mg', es: '15–25mg', fr: '15–25mg' },
    timing: 'Βράδυ (με Μαγνήσιο)',
    timingI18n: { el: 'Βράδυ (με Μαγνήσιο)', en: 'Evening (with Magnesium)', es: 'Tarde (con Magnesio)', fr: 'Soir (avec Magnésium)' },
    intake: 'Νηστικός ή με ελαφρύ γεύμα',
    intakeI18n: { el: 'Νηστικός ή με ελαφρύ γεύμα', en: 'Fasted or with a light meal', es: 'En ayunas o con una comida ligera', fr: 'À jeun ou avec un repas léger' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Συνδύαζε με μαγνήσιο πριν τον ύπνο (ZMA). Αποφύγετε με γαλακτοκομικά.',
    tipI18n: { el: 'Συνδύαζε με μαγνήσιο πριν τον ύπνο (ZMA). Αποφύγετε με γαλακτοκομικά.', en: 'Combine with magnesium before sleep (ZMA). Avoid with dairy.', es: 'Combinar con magnesio antes de dormir (ZMA). Evitar con lácteos.', fr: 'Associer au magnésium avant le sommeil (ZMA). Éviter avec les produits laitiers.' },
    boosts: 'Ζωική πρωτεΐνη βελτιώνει απορρόφηση.',
    boostsI18n: { el: 'Ζωική πρωτεΐνη βελτιώνει απορρόφηση.', en: 'Animal protein improves absorption.', es: 'La proteína animal mejora la absorción.', fr: 'La protéine animale améliore l\'absorption.' },
    reduces: 'Ασβέστιο, σίδηρος και φυτικό οξύ μειώνουν σημαντικά την απορρόφηση.',
    reducesI18n: { el: 'Ασβέστιο, σίδηρος και φυτικό οξύ μειώνουν σημαντικά την απορρόφηση.', en: 'Calcium, iron and phytic acid significantly reduce absorption.', es: 'El calcio, el hierro y el ácido fítico reducen significativamente la absorción.', fr: 'Le calcium, le fer et l\'acide phytique réduisent significativement l\'absorption.' },
    avoid: 'Μην παίρνεις μαζί με σίδηρο, ασβέστιο, ή γαλακτοκομικά.',
    avoidI18n: { el: 'Μην παίρνεις μαζί με σίδηρο, ασβέστιο, ή γαλακτοκομικά.', en: 'Do not take with iron, calcium, or dairy.', es: 'No tomar con hierro, calcio o lácteos.', fr: 'Ne pas prendre avec du fer, du calcium ou des produits laitiers.' },
    drinks: '🔴 Αποφύγετε γάλα και γαλακτοκομικά ταυτόχρονα.',
    drinksI18n: { el: '🔴 Αποφύγετε γάλα και γαλακτοκομικά ταυτόχρονα.', en: '🔴 Avoid milk and dairy simultaneously.', es: '🔴 Evitar leche y lácteos simultáneamente.', fr: '🔴 Éviter lait et produits laitiers simultanément.' },
    gap: '2 ώρες από σίδηρο και ασβέστιο.',
    gapI18n: { el: '2 ώρες από σίδηρο και ασβέστιο.', en: '2 hours from iron and calcium.', es: '2 horas desde hierro y calcio.', fr: '2 heures après fer et calcium.' },
    ideal: '🟢 Ιδανική λήψη πριν τον ύπνο μακριά από γαλακτοκομικά',
    idealI18n: { el: '🟢 Ιδανική λήψη πριν τον ύπνο μακριά από γαλακτοκομικά', en: '🟢 Ideal intake before sleep away from dairy', es: '🟢 Toma ideal antes de dormir lejos de los lácteos', fr: '🟢 Prise idéale avant le sommeil loin des produits laitiers' },
  },
  {
    id: 'omega3',
    name: 'Ω-3 Λιπαρά 🐟',
    nameI18n: { el: 'Ω-3 Λιπαρά 🐟', en: 'Omega-3 Fatty Acids 🐟', es: 'Ácidos Grasos Omega-3 🐟', fr: 'Acides Gras Oméga-3 🐟' },
    category: 'health',
    qty: '1–3g EPA+DHA',
    qtyI18n: { el: '1–3g EPA+DHA', en: '1–3g EPA+DHA', es: '1–3g EPA+DHA', fr: '1–3g EPA+DHA' },
    timing: 'Με γεύμα (Πρωί ή Μεσημέρι)',
    timingI18n: { el: 'Με γεύμα (Πρωί ή Μεσημέρι)', en: 'With a meal (Morning or Midday)', es: 'Con comida (Mañana o Mediodía)', fr: 'Avec un repas (Matin ou Midi)' },
    intake: 'Με λιπαρό γεύμα',
    intakeI18n: { el: 'Με λιπαρό γεύμα', en: 'With a fatty meal', es: 'Con una comida grasa', fr: 'Avec un repas gras' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Πάντα με φαγητό για καλύτερη απορρόφηση και αποφυγή ψαρίλας. Κρατήστε στο ψυγείο.',
    tipI18n: { el: 'Πάντα με φαγητό για καλύτερη απορρόφηση και αποφυγή ψαρίλας. Κρατήστε στο ψυγείο.', en: 'Always with food for better absorption and to avoid fishy aftertaste. Keep refrigerated.', es: 'Siempre con comida para mejor absorción y evitar regusto a pescado. Mantener refrigerado.', fr: 'Toujours avec de la nourriture pour une meilleure absorption et éviter l\'arrière-goût de poisson. Conserver au réfrigérateur.' },
    boosts: 'Λιπαρά τρόφιμα αυξάνουν βιοδιαθεσιμότητα. Βιταμίνη Ε ως αντιοξειδωτικό.',
    boostsI18n: { el: 'Λιπαρά τρόφιμα αυξάνουν βιοδιαθεσιμότητα. Βιταμίνη Ε ως αντιοξειδωτικό.', en: 'Fatty foods increase bioavailability. Vitamin E acts as antioxidant.', es: 'Los alimentos grasos aumentan la biodisponibilidad. La vitamina E como antioxidante.', fr: 'Les aliments gras augmentent la biodisponibilité. La vitamine E comme antioxydant.' },
    reduces: 'Νηστικός στομάχι — χαμηλότερη απορρόφηση και γαστρεντερική δυσφορία.',
    reducesI18n: { el: 'Νηστικός στομάχι — χαμηλότερη απορρόφηση και γαστρεντερική δυσφορία.', en: 'Empty stomach — lower absorption and gastrointestinal discomfort.', es: 'Estómago vacío — menor absorción y malestar gastrointestinal.', fr: 'Estomac vide — absorption réduite et inconfort gastro-intestinal.' },
    avoid: 'Προσοχή με αντιπηκτικά φάρμακα (ενημέρωσε γιατρό).',
    avoidI18n: { el: 'Προσοχή με αντιπηκτικά φάρμακα (ενημέρωσε γιατρό).', en: 'Caution with anticoagulant medications (inform your doctor).', es: 'Precaución con medicamentos anticoagulantes (informar al médico).', fr: 'Prudence avec les anticoagulants (informez votre médecin).' },
    drinks: '🟢 Χωρίς πρόβλημα με καφέ ή τσάι.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα με καφέ ή τσάι.', en: '🟢 No issues with coffee or tea.', es: '🟢 Sin problema con café o té.', fr: '🟢 Aucun problème avec le café ou le thé.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με γεύμα που περιέχει λίπος',
    idealI18n: { el: '🟢 Ιδανική λήψη με γεύμα που περιέχει λίπος', en: '🟢 Ideal intake with a meal containing fat', es: '🟢 Toma ideal con comida que contenga grasa', fr: '🟢 Prise idéale avec un repas contenant des graisses' },
  },
  {
    id: 'vitc',
    name: 'Βιταμίνη C 🍊',
    nameI18n: { el: 'Βιταμίνη C 🍊', en: 'Vitamin C 🍊', es: 'Vitamina C 🍊', fr: 'Vitamine C 🍊' },
    category: 'health',
    qty: '500–1000mg',
    qtyI18n: { el: '500–1000mg', en: '500–1000mg', es: '500–1000mg', fr: '500–1000mg' },
    timing: 'Πρωί ή Μεσημέρι',
    timingI18n: { el: 'Πρωί ή Μεσημέρι', en: 'Morning or Midday', es: 'Mañana o Mediodía', fr: 'Matin ou Midi' },
    intake: 'Με γεύμα',
    intakeI18n: { el: 'Με γεύμα', en: 'With a meal', es: 'Con comida', fr: 'Avec un repas' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Χώρισε τη δόση σε 2 λήψεις (πρωί/μεσημέρι) για καλύτερη αξιοποίηση. Δεν αποθηκεύεται στον οργανισμό.',
    tipI18n: { el: 'Χώρισε τη δόση σε 2 λήψεις (πρωί/μεσημέρι) για καλύτερη αξιοποίηση. Δεν αποθηκεύεται στον οργανισμό.', en: 'Split dose into 2 intakes (morning/midday) for better utilisation. Not stored in the body.', es: 'Dividir la dosis en 2 tomas (mañana/mediodía) para mejor aprovechamiento. No se almacena en el cuerpo.', fr: 'Diviser la dose en 2 prises (matin/midi) pour une meilleure utilisation. N\'est pas stockée dans l\'organisme.' },
    boosts: 'Βελτιώνει σημαντικά την απορρόφηση σιδήρου από φυτικές πηγές.',
    boostsI18n: { el: 'Βελτιώνει σημαντικά την απορρόφηση σιδήρου από φυτικές πηγές.', en: 'Significantly improves iron absorption from plant sources.', es: 'Mejora significativamente la absorción de hierro de fuentes vegetales.', fr: 'Améliore significativement l\'absorption du fer des sources végétales.' },
    reduces: 'Βράσιμο τροφών καταστρέφει τη βιταμίνη C. Κάπνισμα αυξάνει κατανάλωση.',
    reducesI18n: { el: 'Βράσιμο τροφών καταστρέφει τη βιταμίνη C. Κάπνισμα αυξάνει κατανάλωση.', en: 'Boiling foods destroys Vitamin C. Smoking increases consumption.', es: 'Hervir los alimentos destruye la vitamina C. Fumar aumenta el consumo.', fr: 'La cuisson détruit la vitamine C. Le tabac augmente la consommation.' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις σε φυσιολογικές δόσεις.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις σε φυσιολογικές δόσεις.', en: 'No significant contraindications at normal doses.', es: 'Sin contraindicaciones significativas en dosis normales.', fr: 'Pas de contre-indications significatives aux doses normales.' },
    drinks: '🟡 Αποδεκτό με τσάι — αποφύγετε με αλκαλικά ροφήματα.',
    drinksI18n: { el: '🟡 Αποδεκτό με τσάι — αποφύγετε με αλκαλικά ροφήματα.', en: '🟡 OK with tea — avoid with alkaline beverages.', es: '🟡 Aceptable con té — evitar con bebidas alcalinas.', fr: '🟡 Acceptable avec du thé — éviter avec les boissons alcalines.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με γεύμα, ειδικά αν περιέχει σίδηρο',
    idealI18n: { el: '🟢 Ιδανική λήψη με γεύμα, ειδικά αν περιέχει σίδηρο', en: '🟢 Ideal intake with a meal, especially if it contains iron', es: '🟢 Toma ideal con comida, especialmente si contiene hierro', fr: '🟢 Prise idéale avec un repas, surtout s\'il contient du fer' },
  },
  {
    id: 'iron',
    name: 'Σίδηρος 🩸',
    nameI18n: { el: 'Σίδηρος 🩸', en: 'Iron 🩸', es: 'Hierro 🩸', fr: 'Fer 🩸' },
    category: 'health',
    qty: 'Κατά συνταγή',
    qtyI18n: { el: 'Κατά συνταγή', en: 'As prescribed', es: 'Según prescripción', fr: 'Sur ordonnance' },
    timing: 'Πρωί — Νηστικός',
    timingI18n: { el: 'Πρωί — Νηστικός', en: 'Morning — Fasted', es: 'Mañana — En ayunas', fr: 'Matin — À jeun' },
    intake: 'Νηστικός ή με χυμό πορτοκάλι',
    intakeI18n: { el: 'Νηστικός ή με χυμό πορτοκάλι', en: 'Fasted or with orange juice', es: 'En ayunas o con zumo de naranja', fr: 'À jeun ou avec du jus d\'orange' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Πάρε με χυμό πορτοκάλι (Βιτ. C) για διπλάσια απορρόφηση. Αποφύγετε καφέ/τσάι για 1 ώρα.',
    tipI18n: { el: 'Πάρε με χυμό πορτοκάλι (Βιτ. C) για διπλάσια απορρόφηση. Αποφύγετε καφέ/τσάι για 1 ώρα.', en: 'Take with orange juice (Vit. C) to double absorption. Avoid coffee/tea for 1 hour.', es: 'Tomar con zumo de naranja (Vit. C) para duplicar la absorción. Evitar café/té durante 1 hora.', fr: 'Prendre avec du jus d\'orange (Vit. C) pour doubler l\'absorption. Éviter café/thé pendant 1 heure.' },
    boosts: 'Βιταμίνη C αυξάνει δραματικά την απορρόφηση. Κρέας βοηθά στη μη-αιμικής μορφή.',
    boostsI18n: { el: 'Βιταμίνη C αυξάνει δραματικά την απορρόφηση. Κρέας βοηθά στη μη-αιμικής μορφή.', en: 'Vitamin C dramatically increases absorption. Meat helps with non-heme form.', es: 'La vitamina C aumenta dramáticamente la absorción. La carne ayuda con la forma no hemo.', fr: 'La vitamine C augmente considérablement l\'absorption. La viande aide pour la forme non-hémique.' },
    reduces: 'Ασβέστιο, καφέ, τσάι, γαλακτοκομικά, ψευδάργυρος μειώνουν απορρόφηση.',
    reducesI18n: { el: 'Ασβέστιο, καφέ, τσάι, γαλακτοκομικά, ψευδάργυρος μειώνουν απορρόφηση.', en: 'Calcium, coffee, tea, dairy, zinc reduce absorption.', es: 'Calcio, café, té, lácteos, zinc reducen la absorción.', fr: 'Calcium, café, thé, produits laitiers, zinc réduisent l\'absorption.' },
    avoid: 'Μην παίρνεις με ψευδάργυρο, ασβέστιο, καφέ, τσάι ή γαλακτοκομικά.',
    avoidI18n: { el: 'Μην παίρνεις με ψευδάργυρο, ασβέστιο, καφέ, τσάι ή γαλακτοκομικά.', en: 'Do not take with zinc, calcium, coffee, tea or dairy.', es: 'No tomar con zinc, calcio, café, té o lácteos.', fr: 'Ne pas prendre avec zinc, calcium, café, thé ou produits laitiers.' },
    drinks: '🔴 Αποφύγετε καφέ και τσάι τουλάχιστον 1 ώρα πριν και μετά.',
    drinksI18n: { el: '🔴 Αποφύγετε καφέ και τσάι τουλάχιστον 1 ώρα πριν και μετά.', en: '🔴 Avoid coffee and tea at least 1 hour before and after.', es: '🔴 Evitar café y té al menos 1 hora antes y después.', fr: '🔴 Éviter café et thé au moins 1 heure avant et après.' },
    gap: '2 ώρες από ψευδάργυρο, ασβέστιο και γαλακτοκομικά.',
    gapI18n: { el: '2 ώρες από ψευδάργυρο, ασβέστιο και γαλακτοκομικά.', en: '2 hours from zinc, calcium and dairy.', es: '2 horas desde zinc, calcio y lácteos.', fr: '2 heures après zinc, calcium et produits laitiers.' },
    ideal: '🟢 Ιδανική λήψη νηστικός με χυμό πορτοκάλι',
    idealI18n: { el: '🟢 Ιδανική λήψη νηστικός με χυμό πορτοκάλι', en: '🟢 Ideal intake fasted with orange juice', es: '🟢 Toma ideal en ayunas con zumo de naranja', fr: '🟢 Prise idéale à jeun avec du jus d\'orange' },
  },
  {
    id: 'calcium',
    name: 'Ασβέστιο 🦴',
    nameI18n: { el: 'Ασβέστιο 🦴', en: 'Calcium 🦴', es: 'Calcio 🦴', fr: 'Calcium 🦴' },
    category: 'health',
    qty: '500–1000mg',
    qtyI18n: { el: '500–1000mg', en: '500–1000mg', es: '500–1000mg', fr: '500–1000mg' },
    timing: 'Με γεύμα (χωριστά από σίδηρο)',
    timingI18n: { el: 'Με γεύμα (χωριστά από σίδηρο)', en: 'With a meal (separately from iron)', es: 'Con comida (separado del hierro)', fr: 'Avec un repas (séparé du fer)' },
    intake: 'Με γεύμα',
    intakeI18n: { el: 'Με γεύμα', en: 'With a meal', es: 'Con comida', fr: 'Avec un repas' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Χώρισε σε 2 δόσεις ≤500mg. Συνδύαζε με D3 και Κ2 για μέγιστη αξιοποίηση στα οστά.',
    tipI18n: { el: 'Χώρισε σε 2 δόσεις ≤500mg. Συνδύαζε με D3 και Κ2 για μέγιστη αξιοποίηση στα οστά.', en: 'Split into 2 doses ≤500mg. Combine with D3 and K2 for maximum bone utilisation.', es: 'Dividir en 2 dosis ≤500mg. Combinar con D3 y K2 para máximo aprovechamiento óseo.', fr: 'Diviser en 2 doses ≤500mg. Associer avec D3 et K2 pour une utilisation osseuse maximale.' },
    boosts: 'Βιταμίνη D3 απαραίτητη για απορρόφηση. Βιταμίνη Κ2 κατευθύνει στα οστά.',
    boostsI18n: { el: 'Βιταμίνη D3 απαραίτητη για απορρόφηση. Βιταμίνη Κ2 κατευθύνει στα οστά.', en: 'Vitamin D3 essential for absorption. Vitamin K2 directs it to bones.', es: 'Vitamina D3 esencial para la absorción. Vitamina K2 dirige al hueso.', fr: 'Vitamine D3 essentielle à l\'absorption. Vitamine K2 dirige vers les os.' },
    reduces: 'Φυτικό οξύ, οξαλικό οξύ (σπανάκι), υπερβολικές φυτικές ίνες.',
    reducesI18n: { el: 'Φυτικό οξύ, οξαλικό οξύ (σπανάκι), υπερβολικές φυτικές ίνες.', en: 'Phytic acid, oxalic acid (spinach), excessive dietary fibre.', es: 'Ácido fítico, ácido oxálico (espinacas), exceso de fibra dietética.', fr: 'Acide phytique, acide oxalique (épinards), excès de fibres alimentaires.' },
    avoid: 'Μην παίρνεις ταυτόχρονα με σίδηρο, μαγνήσιο ή ψευδάργυρο.',
    avoidI18n: { el: 'Μην παίρνεις ταυτόχρονα με σίδηρο, μαγνήσιο ή ψευδάργυρο.', en: 'Do not take simultaneously with iron, magnesium or zinc.', es: 'No tomar simultáneamente con hierro, magnesio o zinc.', fr: 'Ne pas prendre simultanément avec fer, magnésium ou zinc.' },
    drinks: '🟢 Χωρίς πρόβλημα με καφέ σε μέτριες ποσότητες.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα με καφέ σε μέτριες ποσότητες.', en: '🟢 No issues with coffee in moderate amounts.', es: '🟢 Sin problema con café en cantidades moderadas.', fr: '🟢 Aucun problème avec le café en quantités modérées.' },
    gap: '2 ώρες από σίδηρο, μαγνήσιο και ψευδάργυρο.',
    gapI18n: { el: '2 ώρες από σίδηρο, μαγνήσιο και ψευδάργυρο.', en: '2 hours from iron, magnesium and zinc.', es: '2 horas desde hierro, magnesio y zinc.', fr: '2 heures après fer, magnésium et zinc.' },
    ideal: '🟢 Ιδανική λήψη με γεύμα, χωριστά από άλλα μέταλλα',
    idealI18n: { el: '🟢 Ιδανική λήψη με γεύμα, χωριστά από άλλα μέταλλα', en: '🟢 Ideal intake with a meal, separately from other minerals', es: '🟢 Toma ideal con comida, separado de otros minerales', fr: '🟢 Prise idéale avec un repas, séparément des autres minéraux' },
  },
  {
    id: 'b12',
    name: 'Βιταμίνη Β12 🔋',
    nameI18n: { el: 'Βιταμίνη Β12 🔋', en: 'Vitamin B12 🔋', es: 'Vitamina B12 🔋', fr: 'Vitamine B12 🔋' },
    category: 'health',
    qty: '500–1000mcg',
    qtyI18n: { el: '500–1000mcg', en: '500–1000mcg', es: '500–1000mcg', fr: '500–1000mcg' },
    timing: 'Πρωί',
    timingI18n: { el: 'Πρωί', en: 'Morning', es: 'Mañana', fr: 'Matin' },
    intake: 'Νηστικός ή με ελαφρύ γεύμα',
    intakeI18n: { el: 'Νηστικός ή με ελαφρύ γεύμα', en: 'Fasted or with a light meal', es: 'En ayunas o con una comida ligera', fr: 'À jeun ou avec un repas léger' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Sublingual (κάτω από γλώσσα) αυξάνει σημαντικά την απορρόφηση. Ιδανικό για χορτοφάγους.',
    tipI18n: { el: 'Sublingual (κάτω από γλώσσα) αυξάνει σημαντικά την απορρόφηση. Ιδανικό για χορτοφάγους.', en: 'Sublingual (under the tongue) significantly increases absorption. Ideal for vegetarians.', es: 'Sublingual (bajo la lengua) aumenta significativamente la absorción. Ideal para vegetarianos.', fr: 'Sublinguale (sous la langue) augmente considérablement l\'absorption. Idéal pour les végétariens.' },
    boosts: 'Ασβέστιο βοηθά στην απορρόφηση από τον ειλεό. Sublingual παρακάμπτει πρόβλημα απορρόφησης.',
    boostsI18n: { el: 'Ασβέστιο βοηθά στην απορρόφηση από τον ειλεό. Sublingual παρακάμπτει πρόβλημα απορρόφησης.', en: 'Calcium helps absorption via the ileum. Sublingual bypasses absorption issues.', es: 'El calcio ayuda a la absorción a través del íleon. Sublingual evita problemas de absorción.', fr: 'Le calcium facilite l\'absorption via l\'iléon. La voie sublinguale contourne les problèmes d\'absorption.' },
    reduces: 'Μετφορμίνη (αντιδιαβητικό), αντόξινα μειώνουν απορρόφηση. Αλκοόλ.',
    reducesI18n: { el: 'Μετφορμίνη (αντιδιαβητικό), αντόξινα μειώνουν απορρόφηση. Αλκοόλ.', en: 'Metformin (antidiabetic), antacids reduce absorption. Alcohol.', es: 'Metformina (antidiabético), antiácidos reducen la absorción. Alcohol.', fr: 'Metformine (antidiabétique), antiacides réduisent l\'absorption. Alcool.' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις με άλλα συμπληρώματα.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις με άλλα συμπληρώματα.', en: 'No significant contraindications with other supplements.', es: 'Sin contraindicaciones significativas con otros suplementos.', fr: 'Pas de contre-indications significatives avec d\'autres suppléments.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη το πρωί, κατά προτίμηση sublingual',
    idealI18n: { el: '🟢 Ιδανική λήψη το πρωί, κατά προτίμηση sublingual', en: '🟢 Ideal intake in the morning, preferably sublingual', es: '🟢 Toma ideal por la mañana, preferiblemente sublingual', fr: '🟢 Prise idéale le matin, de préférence sublinguale' },
  },
  {
    id: 'vitb_complex',
    name: 'Βιταμίνες Β (Σύμπλεγμα) 💛',
    nameI18n: { el: 'Βιταμίνες Β (Σύμπλεγμα) 💛', en: 'Vitamin B Complex 💛', es: 'Complejo Vitamínico B 💛', fr: 'Complexe Vitamine B 💛' },
    category: 'health',
    qty: 'Κατά οδηγίες συσκευασίας',
    qtyI18n: { el: 'Κατά οδηγίες συσκευασίας', en: 'As per package instructions', es: 'Según las instrucciones del envase', fr: 'Selon les instructions de l\'emballage' },
    timing: 'Πρωί',
    timingI18n: { el: 'Πρωί', en: 'Morning', es: 'Mañana', fr: 'Matin' },
    intake: 'Με γεύμα',
    intakeI18n: { el: 'Με γεύμα', en: 'With a meal', es: 'Con comida', fr: 'Avec un repas' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Πάντα με πρωινό — μειώνει την αίσθηση ναυτίας. Μπορεί να κάνει τα ούρα έντονα κίτρινα (φυσιολογικό).',
    tipI18n: { el: 'Πάντα με πρωινό — μειώνει την αίσθηση ναυτίας. Μπορεί να κάνει τα ούρα έντονα κίτρινα (φυσιολογικό).', en: 'Always with breakfast — reduces nausea. May turn urine bright yellow (normal).', es: 'Siempre con el desayuno — reduce las náuseas. Puede volver la orina amarillo intenso (normal).', fr: 'Toujours avec le petit-déjeuner — réduit les nausées. Peut rendre l\'urine jaune vif (normal).' },
    boosts: 'Γεύμα βελτιώνει ανοχή και μειώνει γαστρεντερική δυσφορία.',
    boostsI18n: { el: 'Γεύμα βελτιώνει ανοχή και μειώνει γαστρεντερική δυσφορία.', en: 'A meal improves tolerance and reduces gastrointestinal discomfort.', es: 'Una comida mejora la tolerancia y reduce el malestar gastrointestinal.', fr: 'Un repas améliore la tolérance et réduit l\'inconfort gastro-intestinal.' },
    reduces: 'Αλκοόλ μειώνει τα επίπεδα Β1, Β6, φολικό οξύ.',
    reducesI18n: { el: 'Αλκοόλ μειώνει τα επίπεδα Β1, Β6, φολικό οξύ.', en: 'Alcohol reduces levels of B1, B6, and folic acid.', es: 'El alcohol reduce los niveles de B1, B6 y ácido fólico.', fr: 'L\'alcool réduit les niveaux de B1, B6 et d\'acide folique.' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις με άλλα συμπληρώματα.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις με άλλα συμπληρώματα.', en: 'No significant contraindications with other supplements.', es: 'Sin contraindicaciones significativas con otros suplementos.', fr: 'Pas de contre-indications significatives avec d\'autres suppléments.' },
    drinks: '🟢 Χωρίς πρόβλημα με καφέ ή τσάι.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα με καφέ ή τσάι.', en: '🟢 No issues with coffee or tea.', es: '🟢 Sin problema con café o té.', fr: '🟢 Aucun problème avec le café ou le thé.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με πρωινό γεύμα',
    idealI18n: { el: '🟢 Ιδανική λήψη με πρωινό γεύμα', en: '🟢 Ideal intake with breakfast', es: '🟢 Toma ideal con el desayuno', fr: '🟢 Prise idéale avec le petit-déjeuner' },
  },
  {
    id: 'coq10',
    name: 'CoQ10 ❤️',
    nameI18n: { el: 'CoQ10 ❤️', en: 'CoQ10 ❤️', es: 'CoQ10 ❤️', fr: 'CoQ10 ❤️' },
    category: 'health',
    qty: '100–200mg',
    qtyI18n: { el: '100–200mg', en: '100–200mg', es: '100–200mg', fr: '100–200mg' },
    timing: 'Πρωί ή Μεσημέρι',
    timingI18n: { el: 'Πρωί ή Μεσημέρι', en: 'Morning or Midday', es: 'Mañana o Mediodía', fr: 'Matin ou Midi' },
    intake: 'Με λιπαρό γεύμα',
    intakeI18n: { el: 'Με λιπαρό γεύμα', en: 'With a fatty meal', es: 'Con una comida grasa', fr: 'Avec un repas gras' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Προτιμήστε μορφή Ubiquinol (πιο απορροφήσιμη) αντί Ubiquinone, ειδικά άνω των 40 ετών.',
    tipI18n: { el: 'Προτιμήστε μορφή Ubiquinol (πιο απορροφήσιμη) αντί Ubiquinone, ειδικά άνω των 40 ετών.', en: 'Prefer Ubiquinol form (more absorbable) over Ubiquinone, especially over age 40.', es: 'Preferir forma Ubiquinol (más absorbible) sobre Ubiquinona, especialmente mayores de 40 años.', fr: 'Préférer la forme Ubiquinol (plus absorbable) à l\'Ubiquinone, surtout après 40 ans.' },
    boosts: 'Λιπαρά τρόφιμα αυξάνουν απορρόφηση. Σημαντικό αν παίρνεις στατίνες.',
    boostsI18n: { el: 'Λιπαρά τρόφιμα αυξάνουν απορρόφηση. Σημαντικό αν παίρνεις στατίνες.', en: 'Fatty foods increase absorption. Important if taking statins.', es: 'Los alimentos grasos aumentan la absorción. Importante si toma estatinas.', fr: 'Les aliments gras augmentent l\'absorption. Important si vous prenez des statines.' },
    reduces: 'Στατίνες μειώνουν φυσικά τα επίπεδα CoQ10.',
    reducesI18n: { el: 'Στατίνες μειώνουν φυσικά τα επίπεδα CoQ10.', en: 'Statins naturally reduce CoQ10 levels.', es: 'Las estatinas reducen naturalmente los niveles de CoQ10.', fr: 'Les statines réduisent naturellement les niveaux de CoQ10.' },
    avoid: 'Προσοχή με αντιπηκτικά — ενημέρωσε γιατρό.',
    avoidI18n: { el: 'Προσοχή με αντιπηκτικά — ενημέρωσε γιατρό.', en: 'Caution with anticoagulants — inform your doctor.', es: 'Precaución con anticoagulantes — informar al médico.', fr: 'Prudence avec les anticoagulants — informez votre médecin.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με γεύμα που περιέχει λίπος',
    idealI18n: { el: '🟢 Ιδανική λήψη με γεύμα που περιέχει λίπος', en: '🟢 Ideal intake with a meal containing fat', es: '🟢 Toma ideal con comida que contenga grasa', fr: '🟢 Prise idéale avec un repas contenant des graisses' },
  },
  {
    id: 'probiotics',
    name: 'Προβιοτικά 🦠',
    nameI18n: { el: 'Προβιοτικά 🦠', en: 'Probiotics 🦠', es: 'Probióticos 🦠', fr: 'Probiotiques 🦠' },
    category: 'health',
    qty: '1–10 δισεκ. CFU',
    qtyI18n: { el: '1–10 δισεκ. CFU', en: '1–10 billion CFU', es: '1–10 mil millones de UFC', fr: '1–10 milliards UFC' },
    timing: 'Πρωί — Νηστικός',
    timingI18n: { el: 'Πρωί — Νηστικός', en: 'Morning — Fasted', es: 'Mañana — En ayunas', fr: 'Matin — À jeun' },
    intake: 'Νηστικός (30 λεπτά πριν φαγητό)',
    intakeI18n: { el: 'Νηστικός (30 λεπτά πριν φαγητό)', en: 'Fasted (30 minutes before eating)', es: 'En ayunas (30 minutos antes de comer)', fr: 'À jeun (30 minutes avant de manger)' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Πάρε 30 λεπτά πριν το πρωινό. Τα προβιοτικά επιβιώνουν καλύτερα χωρίς γαστρικό οξύ.',
    tipI18n: { el: 'Πάρε 30 λεπτά πριν το πρωινό. Τα προβιοτικά επιβιώνουν καλύτερα χωρίς γαστρικό οξύ.', en: 'Take 30 minutes before breakfast. Probiotics survive better without gastric acid.', es: 'Tomar 30 minutos antes del desayuno. Los probióticos sobreviven mejor sin ácido gástrico.', fr: 'Prendre 30 minutes avant le petit-déjeuner. Les probiotiques survivent mieux sans acide gastrique.' },
    boosts: 'Πρεβιοτικές ίνες (μπανάνα, σκόρδο, κρεμμύδι) τρέφουν τα προβιοτικά.',
    boostsI18n: { el: 'Πρεβιοτικές ίνες (μπανάνα, σκόρδο, κρεμμύδι) τρέφουν τα προβιοτικά.', en: 'Prebiotic fibres (banana, garlic, onion) feed the probiotics.', es: 'Las fibras prebióticas (plátano, ajo, cebolla) alimentan los probióticos.', fr: 'Les fibres prébiotiques (banane, ail, oignon) nourrissent les probiotiques.' },
    reduces: 'Αντιβιοτικά, ζεστά ροφήματα, επεξεργασμένα τρόφιμα.',
    reducesI18n: { el: 'Αντιβιοτικά, ζεστά ροφήματα, επεξεργασμένα τρόφιμα.', en: 'Antibiotics, hot beverages, processed foods.', es: 'Antibióticos, bebidas calientes, alimentos procesados.', fr: 'Antibiotiques, boissons chaudes, aliments transformés.' },
    avoid: 'Μην παίρνεις ταυτόχρονα με αντιβιοτικά (2 ώρες διαφορά).',
    avoidI18n: { el: 'Μην παίρνεις ταυτόχρονα με αντιβιοτικά (2 ώρες διαφορά).', en: 'Do not take simultaneously with antibiotics (2 hour gap).', es: 'No tomar simultáneamente con antibióticos (2 horas de diferencia).', fr: 'Ne pas prendre simultanément avec des antibiotiques (2 heures d\'écart).' },
    drinks: '🔴 Αποφύγετε ζεστά ροφήματα αμέσως πριν/μετά — σκοτώνουν τα βακτήρια.',
    drinksI18n: { el: '🔴 Αποφύγετε ζεστά ροφήματα αμέσως πριν/μετά — σκοτώνουν τα βακτήρια.', en: '🔴 Avoid hot beverages immediately before/after — they kill the bacteria.', es: '🔴 Evitar bebidas calientes inmediatamente antes/después — matan las bacterias.', fr: '🔴 Éviter les boissons chaudes immédiatement avant/après — elles tuent les bactéries.' },
    gap: '2 ώρες από αντιβιοτικά.',
    gapI18n: { el: '2 ώρες από αντιβιοτικά.', en: '2 hours from antibiotics.', es: '2 horas desde antibióticos.', fr: '2 heures après les antibiotiques.' },
    ideal: '🟢 Ιδανική λήψη νηστικός το πρωί με κρύο ή χλιαρό νερό',
    idealI18n: { el: '🟢 Ιδανική λήψη νηστικός το πρωί με κρύο ή χλιαρό νερό', en: '🟢 Ideal intake fasted in the morning with cold or lukewarm water', es: '🟢 Toma ideal en ayunas por la mañana con agua fría o tibia', fr: '🟢 Prise idéale à jeun le matin avec de l\'eau froide ou tiède' },
  },
  // ── ΕΥΕΞΙΑ ──────────────────────────────────────────────────────
  {
    id: 'ashwagandha',
    name: 'Ashwagandha 🌿',
    nameI18n: { el: 'Ashwagandha 🌿', en: 'Ashwagandha 🌿', es: 'Ashwagandha 🌿', fr: 'Ashwagandha 🌿' },
    category: 'wellness',
    qty: '300–600mg',
    qtyI18n: { el: '300–600mg', en: '300–600mg', es: '300–600mg', fr: '300–600mg' },
    timing: 'Βράδυ ή Πρωί',
    timingI18n: { el: 'Βράδυ ή Πρωί', en: 'Evening or Morning', es: 'Tarde o Mañana', fr: 'Soir ou Matin' },
    intake: 'Με γεύμα ή γάλα',
    intakeI18n: { el: 'Με γεύμα ή γάλα', en: 'With a meal or milk', es: 'Con comida o leche', fr: 'Avec un repas ou du lait' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Τα αποτελέσματα εμφανίζονται μετά από 4–8 εβδομάδες συνεχούς χρήσης. KSM-66 ή Sensoril είναι τα καλύτερα εκχυλίσματα.',
    tipI18n: { el: 'Τα αποτελέσματα εμφανίζονται μετά από 4–8 εβδομάδες συνεχούς χρήσης. KSM-66 ή Sensoril είναι τα καλύτερα εκχυλίσματα.', en: 'Results appear after 4–8 weeks of continuous use. KSM-66 or Sensoril are the best extracts.', es: 'Los resultados aparecen después de 4–8 semanas de uso continuo. KSM-66 o Sensoril son los mejores extractos.', fr: 'Les résultats apparaissent après 4–8 semaines d\'utilisation continue. KSM-66 ou Sensoril sont les meilleurs extraits.' },
    boosts: 'Μειώνει κορτιζόλη — βοηθά αποκατάσταση και ύπνο. Συνδυάζεται καλά με Μαγνήσιο.',
    boostsI18n: { el: 'Μειώνει κορτιζόλη — βοηθά αποκατάσταση και ύπνο. Συνδυάζεται καλά με Μαγνήσιο.', en: 'Reduces cortisol — helps recovery and sleep. Pairs well with Magnesium.', es: 'Reduce el cortisol — ayuda a la recuperación y el sueño. Combina bien con Magnesio.', fr: 'Réduit le cortisol — aide à la récupération et au sommeil. Se combine bien avec le Magnésium.' },
    reduces: 'Αλκοόλ και υπερβολικό στρες μειώνουν αποτελεσματικότητα.',
    reducesI18n: { el: 'Αλκοόλ και υπερβολικό στρες μειώνουν αποτελεσματικότητα.', en: 'Alcohol and excessive stress reduce effectiveness.', es: 'El alcohol y el estrés excesivo reducen la efectividad.', fr: 'L\'alcool et le stress excessif réduisent l\'efficacité.' },
    avoid: 'Αποφύγετε αν έχετε αυτοάνοσα νοσήματα ή παίρνετε ανοσοκατασταλτικά.',
    avoidI18n: { el: 'Αποφύγετε αν έχετε αυτοάνοσα νοσήματα ή παίρνετε ανοσοκατασταλτικά.', en: 'Avoid if you have autoimmune conditions or are taking immunosuppressants.', es: 'Evitar si tiene enfermedades autoinmunes o toma inmunosupresores.', fr: 'Éviter si vous avez des maladies auto-immunes ou prenez des immunosuppresseurs.' },
    drinks: '🟢 Αποδεκτό με γάλα — παραδοσιακά λαμβάνεται με ζεστό γάλα.',
    drinksI18n: { el: '🟢 Αποδεκτό με γάλα — παραδοσιακά λαμβάνεται με ζεστό γάλα.', en: '🟢 OK with milk — traditionally taken with warm milk.', es: '🟢 Aceptable con leche — tradicionalmente se toma con leche caliente.', fr: '🟢 Acceptable avec du lait — traditionnellement pris avec du lait chaud.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη βράδυ για αποκατάσταση και ποιότητα ύπνου',
    idealI18n: { el: '🟢 Ιδανική λήψη βράδυ για αποκατάσταση και ποιότητα ύπνου', en: '🟢 Ideal evening intake for recovery and sleep quality', es: '🟢 Toma ideal por la tarde para recuperación y calidad del sueño', fr: '🟢 Prise idéale le soir pour la récupération et la qualité du sommeil' },
  },
  {
    id: 'melatonin',
    name: 'Μελατονίνη 🌙',
    nameI18n: { el: 'Μελατονίνη 🌙', en: 'Melatonin 🌙', es: 'Melatonina 🌙', fr: 'Mélatonine 🌙' },
    category: 'wellness',
    qty: '0.5–3mg',
    qtyI18n: { el: '0.5–3mg', en: '0.5–3mg', es: '0.5–3mg', fr: '0.5–3mg' },
    timing: '30–60 λεπτά πριν τον ύπνο',
    timingI18n: { el: '30–60 λεπτά πριν τον ύπνο', en: '30–60 minutes before sleep', es: '30–60 minutos antes de dormir', fr: '30–60 minutes avant le sommeil' },
    intake: 'Με λίγο νερό',
    intakeI18n: { el: 'Με λίγο νερό', en: 'With a little water', es: 'Con un poco de agua', fr: 'Avec un peu d\'eau' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Ξεκίνα με τη μικρότερη αποτελεσματική δόση (0.5mg). Μεγαλύτερη δόση ≠ καλύτερο αποτέλεσμα.',
    tipI18n: { el: 'Ξεκίνα με τη μικρότερη αποτελεσματική δόση (0.5mg). Μεγαλύτερη δόση ≠ καλύτερο αποτέλεσμα.', en: 'Start with the lowest effective dose (0.5mg). Higher dose ≠ better result.', es: 'Comenzar con la dosis efectiva más baja (0.5mg). Mayor dosis ≠ mejor resultado.', fr: 'Commencer avec la dose minimale efficace (0.5mg). Dose plus élevée ≠ meilleur résultat.' },
    boosts: 'Σκοτάδι και χαμηλή θερμοκρασία δωματίου ενισχύουν αποτέλεσμα.',
    boostsI18n: { el: 'Σκοτάδι και χαμηλή θερμοκρασία δωματίου ενισχύουν αποτέλεσμα.', en: 'Darkness and cool room temperature enhance results.', es: 'La oscuridad y la baja temperatura de la habitación mejoran los resultados.', fr: 'L\'obscurité et une température ambiante fraîche améliorent les résultats.' },
    reduces: 'Μπλε φως (κινητό/οθόνη) μειώνει φυσική έκκριση μελατονίνης.',
    reducesI18n: { el: 'Μπλε φως (κινητό/οθόνη) μειώνει φυσική έκκριση μελατονίνης.', en: 'Blue light (phone/screen) reduces natural melatonin secretion.', es: 'La luz azul (móvil/pantalla) reduce la secreción natural de melatonina.', fr: 'La lumière bleue (téléphone/écran) réduit la sécrétion naturelle de mélatonine.' },
    avoid: 'Αποφύγετε μακροχρόνια καθημερινή χρήση χωρίς ιατρική συμβουλή.',
    avoidI18n: { el: 'Αποφύγετε μακροχρόνια καθημερινή χρήση χωρίς ιατρική συμβουλή.', en: 'Avoid long-term daily use without medical advice.', es: 'Evitar el uso diario a largo plazo sin consejo médico.', fr: 'Éviter une utilisation quotidienne à long terme sans avis médical.' },
    drinks: '🔴 Αποφύγετε αλκοόλ — ενισχύει αρχικά αλλά διαταράσσει ύπνο.',
    drinksI18n: { el: '🔴 Αποφύγετε αλκοόλ — ενισχύει αρχικά αλλά διαταράσσει ύπνο.', en: '🔴 Avoid alcohol — initially sedating but disrupts sleep.', es: '🔴 Evitar alcohol — inicialmente sedante pero perturba el sueño.', fr: '🔴 Éviter l\'alcool — initialement sédatif mais perturbe le sommeil.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική για βελτίωση έναρξης ύπνου και jet lag',
    idealI18n: { el: '🟢 Ιδανική για βελτίωση έναρξης ύπνου και jet lag', en: '🟢 Ideal for improving sleep onset and jet lag', es: '🟢 Ideal para mejorar el inicio del sueño y el jet lag', fr: '🟢 Idéale pour améliorer l\'endormissement et le jet lag' },
  },
  {
    id: 'collagen',
    name: 'Κολλαγόνο 🦴',
    nameI18n: { el: 'Κολλαγόνο 🦴', en: 'Collagen 🦴', es: 'Colágeno 🦴', fr: 'Collagène 🦴' },
    category: 'wellness',
    qty: '10–15g',
    qtyI18n: { el: '10–15g', en: '10–15g', es: '10–15g', fr: '10–15g' },
    timing: 'Πρωί ή Βράδυ',
    timingI18n: { el: 'Πρωί ή Βράδυ', en: 'Morning or Evening', es: 'Mañana o Tarde', fr: 'Matin ou Soir' },
    intake: 'Με βιταμίνη C',
    intakeI18n: { el: 'Με βιταμίνη C', en: 'With Vitamin C', es: 'Con vitamina C', fr: 'Avec de la vitamine C' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Πάρε πάντα μαζί με βιταμίνη C — απαραίτητη για σύνθεση κολλαγόνου. Υδρολυμένο κολλαγόνο απορροφάται καλύτερα.',
    tipI18n: { el: 'Πάρε πάντα μαζί με βιταμίνη C — απαραίτητη για σύνθεση κολλαγόνου. Υδρολυμένο κολλαγόνο απορροφάται καλύτερα.', en: 'Always take with Vitamin C — essential for collagen synthesis. Hydrolysed collagen absorbs better.', es: 'Tomar siempre con vitamina C — esencial para la síntesis de colágeno. El colágeno hidrolizado se absorbe mejor.', fr: 'Toujours prendre avec de la vitamine C — essentielle à la synthèse du collagène. Le collagène hydrolysé est mieux absorbé.' },
    boosts: 'Βιταμίνη C διπλασιάζει την αποτελεσματικότητα. Υαλουρονικό οξύ συνεργεί.',
    boostsI18n: { el: 'Βιταμίνη C διπλασιάζει την αποτελεσματικότητα. Υαλουρονικό οξύ συνεργεί.', en: 'Vitamin C doubles effectiveness. Hyaluronic acid synergises.', es: 'La vitamina C duplica la efectividad. El ácido hialurónico actúa sinérgicamente.', fr: 'La vitamine C double l\'efficacité. L\'acide hyaluronique agit en synergie.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις.', en: 'No significant contraindications.', es: 'Sin contraindicaciones significativas.', fr: 'Pas de contre-indications significatives.' },
    drinks: '🟢 Χωρίς πρόβλημα — διαλύεται εύκολα σε ροφήματα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα — διαλύεται εύκολα σε ροφήματα.', en: '🟢 No issues — dissolves easily in beverages.', es: '🟢 Sin problema — se disuelve fácilmente en bebidas.', fr: '🟢 Aucun problème — se dissout facilement dans les boissons.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με βιταμίνη C για μέγιστη σύνθεση κολλαγόνου',
    idealI18n: { el: '🟢 Ιδανική λήψη με βιταμίνη C για μέγιστη σύνθεση κολλαγόνου', en: '🟢 Ideal intake with Vitamin C for maximum collagen synthesis', es: '🟢 Toma ideal con vitamina C para máxima síntesis de colágeno', fr: '🟢 Prise idéale avec vitamine C pour une synthèse maximale de collagène' },
  },
  {
    id: 'curcumin',
    name: 'Κουρκουμίνη 🌼',
    nameI18n: { el: 'Κουρκουμίνη 🌼', en: 'Curcumin 🌼', es: 'Curcumina 🌼', fr: 'Curcumine 🌼' },
    category: 'wellness',
    qty: '500–1000mg',
    qtyI18n: { el: '500–1000mg', en: '500–1000mg', es: '500–1000mg', fr: '500–1000mg' },
    timing: 'Με γεύμα',
    timingI18n: { el: 'Με γεύμα', en: 'With a meal', es: 'Con comida', fr: 'Avec un repas' },
    intake: 'Με λιπαρό γεύμα και πιπερίνη',
    intakeI18n: { el: 'Με λιπαρό γεύμα και πιπερίνη', en: 'With a fatty meal and piperine', es: 'Con comida grasa y piperina', fr: 'Avec un repas gras et pipérine' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Η κουρκουμίνη μόνη της απορροφάται ελάχιστα. Πιπερίνη (πιπέρι) αυξάνει βιοδιαθεσιμότητα κατά 2000%.',
    tipI18n: { el: 'Η κουρκουμίνη μόνη της απορροφάται ελάχιστα. Πιπερίνη (πιπέρι) αυξάνει βιοδιαθεσιμότητα κατά 2000%.', en: 'Curcumin alone is barely absorbed. Piperine (pepper) increases bioavailability by 2000%.', es: 'La curcumina sola apenas se absorbe. La piperina (pimienta) aumenta la biodisponibilidad en un 2000%.', fr: 'La curcumine seule est à peine absorbée. La pipérine (poivre) augmente la biodisponibilité de 2000%.' },
    boosts: 'Πιπερίνη + λιπαρά τρόφιμα = μέγιστη απορρόφηση.',
    boostsI18n: { el: 'Πιπερίνη + λιπαρά τρόφιμα = μέγιστη απορρόφηση.', en: 'Piperine + fatty foods = maximum absorption.', es: 'Piperina + alimentos grasos = absorción máxima.', fr: 'Pipérine + aliments gras = absorption maximale.' },
    reduces: 'Θερμεπεξεργασία μειώνει δραστικότητα.',
    reducesI18n: { el: 'Θερμεπεξεργασία μειώνει δραστικότητα.', en: 'Heat processing reduces potency.', es: 'El procesamiento por calor reduce la potencia.', fr: 'Le traitement thermique réduit la puissance.' },
    avoid: 'Προσοχή με αντιπηκτικά — ενημέρωσε γιατρό.',
    avoidI18n: { el: 'Προσοχή με αντιπηκτικά — ενημέρωσε γιατρό.', en: 'Caution with anticoagulants — inform your doctor.', es: 'Precaución con anticoagulantes — informar al médico.', fr: 'Prudence avec les anticoagulants — informez votre médecin.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με λιπαρό γεύμα που περιέχει μαύρο πιπέρι',
    idealI18n: { el: '🟢 Ιδανική λήψη με λιπαρό γεύμα που περιέχει μαύρο πιπέρι', en: '🟢 Ideal intake with a fatty meal containing black pepper', es: '🟢 Toma ideal con comida grasa que contenga pimienta negra', fr: '🟢 Prise idéale avec un repas gras contenant du poivre noir' },
  },
  {
    id: 'psyllium',
    name: 'Psyllium (Φυτικές Ίνες) 🌾',
    nameI18n: { el: 'Psyllium (Φυτικές Ίνες) 🌾', en: 'Psyllium (Dietary Fibre) 🌾', es: 'Psyllium (Fibra Dietética) 🌾', fr: 'Psyllium (Fibres Alimentaires) 🌾' },
    category: 'wellness',
    qty: '5–10g',
    qtyI18n: { el: '5–10g', en: '5–10g', es: '5–10g', fr: '5–10g' },
    timing: 'Πριν από γεύμα',
    timingI18n: { el: 'Πριν από γεύμα', en: 'Before a meal', es: 'Antes de una comida', fr: 'Avant un repas' },
    intake: 'Με άφθονο νερό (≥250ml)',
    intakeI18n: { el: 'Με άφθονο νερό (≥250ml)', en: 'With plenty of water (≥250ml)', es: 'Con abundante agua (≥250ml)', fr: 'Avec beaucoup d\'eau (≥250ml)' },
    evidence: 'Υψηλή',
    evidenceI18n: { el: 'Υψηλή', en: 'High', es: 'Alta', fr: 'Élevée' },
    tip: 'Πιες ΑΜΕΣΑ μετά την ανάμιξη — πήζει γρήγορα. Αύξησε δόση σταδιακά για αποφυγή φουσκώματος.',
    tipI18n: { el: 'Πιες ΑΜΕΣΑ μετά την ανάμιξη — πήζει γρήγορα. Αύξησε δόση σταδιακά για αποφυγή φουσκώματος.', en: 'Drink IMMEDIATELY after mixing — it gels fast. Increase dose gradually to avoid bloating.', es: 'Beber INMEDIATAMENTE después de mezclar — se gelifica rápido. Aumentar dosis gradualmente para evitar hinchazón.', fr: 'Boire IMMÉDIATEMENT après mélange — il gèle vite. Augmenter la dose progressivement pour éviter les ballonnements.' },
    boosts: 'Βελτιώνει εντερική κινητικότητα, γλυκαιμικό δείκτη και χοληστερίνη.',
    boostsI18n: { el: 'Βελτιώνει εντερική κινητικότητα, γλυκαιμικό δείκτη και χοληστερίνη.', en: 'Improves bowel motility, glycaemic index and cholesterol.', es: 'Mejora la motilidad intestinal, el índice glucémico y el colesterol.', fr: 'Améliore la motilité intestinale, l\'index glycémique et le cholestérol.' },
    reduces: 'Αφυδάτωση μειώνει αποτελεσματικότητα και αυξάνει κίνδυνο δυσκοιλιότητας.',
    reducesI18n: { el: 'Αφυδάτωση μειώνει αποτελεσματικότητα και αυξάνει κίνδυνο δυσκοιλιότητας.', en: 'Dehydration reduces effectiveness and increases constipation risk.', es: 'La deshidratación reduce la efectividad y aumenta el riesgo de estreñimiento.', fr: 'La déshydratation réduit l\'efficacité et augmente le risque de constipation.' },
    avoid: 'Λαμβάνετε χωριστά (2 ώρες) από φάρμακα — μπορεί να μειώσει απορρόφηση.',
    avoidI18n: { el: 'Λαμβάνετε χωριστά (2 ώρες) από φάρμακα — μπορεί να μειώσει απορρόφηση.', en: 'Take separately (2 hours) from medications — may reduce absorption.', es: 'Tomar por separado (2 horas) de los medicamentos — puede reducir la absorción.', fr: 'Prendre séparément (2 heures) des médicaments — peut réduire l\'absorption.' },
    drinks: '🔴 Μόνο με άφθονο νερό — ποτέ χωρίς νερό.',
    drinksI18n: { el: '🔴 Μόνο με άφθονο νερό — ποτέ χωρίς νερό.', en: '🔴 Only with plenty of water — never without water.', es: '🔴 Solo con abundante agua — nunca sin agua.', fr: '🔴 Uniquement avec beaucoup d\'eau — jamais sans eau.' },
    gap: '2 ώρες από φάρμακα.',
    gapI18n: { el: '2 ώρες από φάρμακα.', en: '2 hours from medications.', es: '2 horas desde medicamentos.', fr: '2 heures après les médicaments.' },
    ideal: '🟢 Ιδανική λήψη 30 λεπτά πριν από γεύμα με άφθονο νερό',
    idealI18n: { el: '🟢 Ιδανική λήψη 30 λεπτά πριν από γεύμα με άφθονο νερό', en: '🟢 Ideal intake 30 minutes before a meal with plenty of water', es: '🟢 Toma ideal 30 minutos antes de una comida con abundante agua', fr: '🟢 Prise idéale 30 minutes avant un repas avec beaucoup d\'eau' },
  },
  {
    id: 'glucosamine_chondroitin',
    name: 'Γλυκοζαμίνη + Χονδροϊτίνη 🦵',
    nameI18n: { el: 'Γλυκοζαμίνη + Χονδροϊτίνη 🦵', en: 'Glucosamine + Chondroitin 🦵', es: 'Glucosamina + Condroitina 🦵', fr: 'Glucosamine + Chondroïtine 🦵' },
    category: 'wellness',
    qty: '1500mg + 1200mg',
    qtyI18n: { el: '1500mg + 1200mg', en: '1500mg + 1200mg', es: '1500mg + 1200mg', fr: '1500mg + 1200mg' },
    timing: 'Με γεύμα',
    timingI18n: { el: 'Με γεύμα', en: 'With a meal', es: 'Con comida', fr: 'Avec un repas' },
    intake: 'Με γεύμα',
    intakeI18n: { el: 'Με γεύμα', en: 'With a meal', es: 'Con comida', fr: 'Avec un repas' },
    evidence: 'Μέτρια',
    evidenceI18n: { el: 'Μέτρια', en: 'Moderate', es: 'Moderada', fr: 'Modérée' },
    tip: 'Αποτελέσματα εμφανίζονται μετά 2–3 μήνες συνεχούς χρήσης. Για υποστήριξη αρθρώσεων κυρίως.',
    tipI18n: { el: 'Αποτελέσματα εμφανίζονται μετά 2–3 μήνες συνεχούς χρήσης. Για υποστήριξη αρθρώσεων κυρίως.', en: 'Results appear after 2–3 months of continuous use. Primarily for joint support.', es: 'Los resultados aparecen después de 2–3 meses de uso continuo. Principalmente para apoyo articular.', fr: 'Les résultats apparaissent après 2–3 mois d\'utilisation continue. Principalement pour le soutien articulaire.' },
    boosts: 'Κολλαγόνο τύπου II συνεργεί για αποκατάσταση χόνδρου.',
    boostsI18n: { el: 'Κολλαγόνο τύπου II συνεργεί για αποκατάσταση χόνδρου.', en: 'Type II collagen synergises for cartilage repair.', es: 'El colágeno tipo II actúa sinérgicamente para la reparación del cartílago.', fr: 'Le collagène de type II agit en synergie pour la réparation du cartilage.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Προσοχή αν αλλεργία σε οστρακοειδή (πηγή γλυκοζαμίνης).',
    avoidI18n: { el: 'Προσοχή αν αλλεργία σε οστρακοειδή (πηγή γλυκοζαμίνης).', en: 'Caution if allergic to shellfish (source of glucosamine).', es: 'Precaución si alergia a mariscos (fuente de glucosamina).', fr: 'Prudence en cas d\'allergie aux crustacés (source de glucosamine).' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με γεύμα για μακροχρόνια υποστήριξη αρθρώσεων',
    idealI18n: { el: '🟢 Ιδανική λήψη με γεύμα για μακροχρόνια υποστήριξη αρθρώσεων', en: '🟢 Ideal intake with a meal for long-term joint support', es: '🟢 Toma ideal con comida para soporte articular a largo plazo', fr: '🟢 Prise idéale avec un repas pour un soutien articulaire à long terme' },
  },
  // ── ΛΙΠΟΔΙΑΛΥΣΗ ─────────────────────────────────────────────────
  {
    id: 'l_carnitine',
    name: 'L-Καρνιτίνη 🚴',
    nameI18n: { el: 'L-Καρνιτίνη 🚴', en: 'L-Carnitine 🚴', es: 'L-Carnitina 🚴', fr: 'L-Carnitine 🚴' },
    category: 'fatburn',
    qty: '1–2g',
    qtyI18n: { el: '1–2g', en: '1–2g', es: '1–2g', fr: '1–2g' },
    timing: 'Πρωί ή πριν την άσκηση',
    timingI18n: { el: 'Πρωί ή πριν την άσκηση', en: 'Morning or before exercise', es: 'Mañana o antes del ejercicio', fr: 'Matin ou avant l\'exercice' },
    intake: 'Νηστικός ή με ελαφρύ γεύμα',
    intakeI18n: { el: 'Νηστικός ή με ελαφρύ γεύμα', en: 'Fasted or with a light meal', es: 'En ayunas o con una comida ligera', fr: 'À jeun ou avec un repas léger' },
    evidence: 'Χαμηλή-Μέτρια',
    evidenceI18n: { el: 'Χαμηλή-Μέτρια', en: 'Low-Moderate', es: 'Baja-Moderada', fr: 'Faible-Modérée' },
    tip: 'Τα οφέλη είναι κυρίως για vegans/χορτοφάγους που έχουν χαμηλή φυσική πρόσληψη. Δεν είναι "λιποδιαλυτικό".',
    tipI18n: { el: 'Τα οφέλη είναι κυρίως για vegans/χορτοφάγους που έχουν χαμηλή φυσική πρόσληψη. Δεν είναι "λιποδιαλυτικό".', en: 'Benefits are mainly for vegans/vegetarians with low natural intake. Not a "fat burner".', es: 'Los beneficios son principalmente para veganos/vegetarianos con baja ingesta natural. No es un "quemador de grasa".', fr: 'Les bénéfices concernent principalement les végans/végétariens avec une faible consommation naturelle. Ce n\'est pas un "brûleur de graisses".' },
    boosts: 'Ασκήσεις αντοχής σε συνδυασμό μεγιστοποιούν αποτέλεσμα.',
    boostsI18n: { el: 'Ασκήσεις αντοχής σε συνδυασμό μεγιστοποιούν αποτέλεσμα.', en: 'Endurance exercise in combination maximises results.', es: 'El ejercicio de resistencia en combinación maximiza los resultados.', fr: 'L\'exercice d\'endurance en combinaison maximise les résultats.' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Δεν υπάρχουν σημαντικές αντενδείξεις.',
    avoidI18n: { el: 'Δεν υπάρχουν σημαντικές αντενδείξεις.', en: 'No significant contraindications.', es: 'Sin contraindicaciones significativas.', fr: 'Pas de contre-indications significatives.' },
    drinks: '🟢 Χωρίς πρόβλημα.',
    drinksI18n: { el: '🟢 Χωρίς πρόβλημα.', en: '🟢 No issues.', es: '🟢 Sin problema.', fr: '🟢 Aucun problème.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟡 Περιορισμένο όφελος στους περισσότερους υγιείς ενήλικες',
    idealI18n: { el: '🟡 Περιορισμένο όφελος στους περισσότερους υγιείς ενήλικες', en: '🟡 Limited benefit in most healthy adults', es: '🟡 Beneficio limitado en la mayoría de adultos sanos', fr: '🟡 Bénéfice limité chez la plupart des adultes en bonne santé' },
  },
  {
    id: 'lipodrene',
    name: 'Lipodrene (Λιποδιαλύτης) 🔥',
    nameI18n: { el: 'Lipodrene (Λιποδιαλύτης) 🔥', en: 'Lipodrene (Fat Burner) 🔥', es: 'Lipodrene (Quemador de grasa) 🔥', fr: 'Lipodrene (Brûleur de graisses) 🔥' },
    category: 'fatburn',
    qty: 'Κατά οδηγίες',
    qtyI18n: { el: 'Κατά οδηγίες', en: 'As instructed', es: 'Según instrucciones', fr: 'Selon les instructions' },
    timing: 'Πρωί — Νηστικός',
    timingI18n: { el: 'Πρωί — Νηστικός', en: 'Morning — Fasted', es: 'Mañana — En ayunas', fr: 'Matin — À jeun' },
    intake: 'Νηστικός ή με τον καφέ',
    intakeI18n: { el: 'Νηστικός ή με τον καφέ', en: 'Fasted or with coffee', es: 'En ayunas o con café', fr: 'À jeun ou avec le café' },
    evidence: 'Περιορισμένη',
    evidenceI18n: { el: 'Περιορισμένη', en: 'Limited', es: 'Limitada', fr: 'Limitée' },
    tip: 'Πάρε νωρίς το πρωί για να αποφύγεις αϋπνία. Μην υπερβαίνεις τη συνιστώμενη δόση.',
    tipI18n: { el: 'Πάρε νωρίς το πρωί για να αποφύγεις αϋπνία. Μην υπερβαίνεις τη συνιστώμενη δόση.', en: 'Take early in the morning to avoid insomnia. Do not exceed the recommended dose.', es: 'Tomar temprano por la mañana para evitar el insomnio. No superar la dosis recomendada.', fr: 'Prendre tôt le matin pour éviter l\'insomnie. Ne pas dépasser la dose recommandée.' },
    boosts: 'Συνδυασμός με καφέ ενισχύει θερμογένεση (προσοχή στην καρδιά).',
    boostsI18n: { el: 'Συνδυασμός με καφέ ενισχύει θερμογένεση (προσοχή στην καρδιά).', en: 'Combining with coffee enhances thermogenesis (caution: heart).', es: 'Combinar con café mejora la termogénesis (precaución: corazón).', fr: 'La combinaison avec le café renforce la thermogenèse (prudence : cœur).' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Μην παίρνεις αργά το απόγευμα — αϋπνία. Αποφύγετε με άλλα διεγερτικά.',
    avoidI18n: { el: 'Μην παίρνεις αργά το απόγευμα — αϋπνία. Αποφύγετε με άλλα διεγερτικά.', en: 'Do not take late afternoon — insomnia. Avoid with other stimulants.', es: 'No tomar a última hora de la tarde — insomnio. Evitar con otros estimulantes.', fr: 'Ne pas prendre en fin d\'après-midi — insomnie. Éviter avec d\'autres stimulants.' },
    drinks: '🟡 Αποδεκτό με καφέ σε μέτρια ποσότητα — όχι πάνω από 1 καφέ.',
    drinksI18n: { el: '🟡 Αποδεκτό με καφέ σε μέτρια ποσότητα — όχι πάνω από 1 καφέ.', en: '🟡 OK with coffee in moderate amount — no more than 1 coffee.', es: '🟡 Aceptable con café en cantidad moderada — no más de 1 café.', fr: '🟡 Acceptable avec du café en quantité modérée — pas plus d\'1 café.' },
    gap: '4 ώρες πριν τον ύπνο.',
    gapI18n: { el: '4 ώρες πριν τον ύπνο.', en: '4 hours before sleep.', es: '4 horas antes de dormir.', fr: '4 heures avant le sommeil.' },
    ideal: '🟡 Αποδεκτή λήψη νωρίς το πρωί',
    idealI18n: { el: '🟡 Αποδεκτή λήψη νωρίς το πρωί', en: '🟡 Acceptable intake early in the morning', es: '🟡 Toma aceptable temprano por la mañana', fr: '🟡 Prise acceptable tôt le matin' },
  },
  // ── ΠΡΟΣΩΠΙΚΑ ───────────────────────────────────────────────────
  {
    id: 'benetdea',
    name: 'Benetdea Vitta 💊',
    nameI18n: { el: 'Benetdea Vitta 💊', en: 'Benetdea Vitta 💊', es: 'Benetdea Vitta 💊', fr: 'Benetdea Vitta 💊' },
    category: 'personal',
    qty: 'Κατά οδηγίες',
    qtyI18n: { el: 'Κατά οδηγίες', en: 'As instructed', es: 'Según instrucciones', fr: 'Selon les instructions' },
    timing: 'Πρωί',
    timingI18n: { el: 'Πρωί', en: 'Morning', es: 'Mañana', fr: 'Matin' },
    intake: 'Με τον καφέ ή αμέσως μετά',
    intakeI18n: { el: 'Με τον καφέ ή αμέσως μετά', en: 'With coffee or immediately after', es: 'Con el café o inmediatamente después', fr: 'Avec le café ou juste après' },
    evidence: 'Περιορισμένη',
    evidenceI18n: { el: 'Περιορισμένη', en: 'Limited', es: 'Limitada', fr: 'Limitée' },
    tip: 'Πάρε με τον πρωινό καφέ για ευκολία και σταθερή ρουτίνα.',
    tipI18n: { el: 'Πάρε με τον πρωινό καφέ για ευκολία και σταθερή ρουτίνα.', en: 'Take with morning coffee for convenience and consistent routine.', es: 'Tomar con el café matutino para mayor comodidad y rutina constante.', fr: 'Prendre avec le café du matin pour la commodité et une routine régulière.' },
    boosts: '—',
    boostsI18n: { el: '—', en: '—', es: '—', fr: '—' },
    reduces: '—',
    reducesI18n: { el: '—', en: '—', es: '—', fr: '—' },
    avoid: 'Διάβασε τη συσκευασία για συγκεκριμένες αντενδείξεις.',
    avoidI18n: { el: 'Διάβασε τη συσκευασία για συγκεκριμένες αντενδείξεις.', en: 'Read the packaging for specific contraindications.', es: 'Leer el envase para contraindicaciones específicas.', fr: 'Lire l\'emballage pour les contre-indications spécifiques.' },
    drinks: '🟢 Σχεδιασμένο για λήψη με καφέ.',
    drinksI18n: { el: '🟢 Σχεδιασμένο για λήψη με καφέ.', en: '🟢 Designed to be taken with coffee.', es: '🟢 Diseñado para tomarse con café.', fr: '🟢 Conçu pour être pris avec du café.' },
    gap: '—',
    gapI18n: { el: '—', en: '—', es: '—', fr: '—' },
    ideal: '🟢 Ιδανική λήψη με πρωινό καφέ',
    idealI18n: { el: '🟢 Ιδανική λήψη με πρωινό καφέ', en: '🟢 Ideal intake with morning coffee', es: '🟢 Toma ideal con el café matutino', fr: '🟢 Prise idéale avec le café du matin' },
  },
];

// Default user supplement state
const SUPPLEMENTS_STATE_DEFAULT = {
  enabled: false,
  activeIds: [],
  done: {},
};
