// Array of inappropriate words to filter
const stopwords = [
    "fuck",
    "shit",
    "bitch",
    "nigga",
    "nigger",
    "asshole",
    "bastard",
    "cunt",
    "damn",
    "motherfucker",
    "whore",
    "slut",
    "cock",
    "penis",
    "vagina",
    "chut",
    
    // Mohinis variations
    "mohinis", "mohinees", "mohiniss", "mohineez", "mohiniz", "mohiness",
    "mo-hi-nis", "mo hi nis", "mohinisss", "mohini's",
    
    // Hindi/Devanagari Mohinis variations
    "मोहिनिस", "मोहिनीस", "मोहिनिस्स", "मोहिनीज़", "मोहिनिज़", "मोहिनेस",
    "मो-हि-निस", "मो ही निस", "मोहिनिस्स्स", "मोहिनी'स",
    
    // Mohinish variations
    "mohinish", "mohinishh", "mohineesh", "moheenish", "moheanish",
    "mohinnish", "mo-hi-nish", "mo hi nish", "mohniish", "mohin-esh",
    
    // Hindi/Devanagari Mohinish variations
    "मोहिनिश", "मोहिनिश्ह", "मोहिनीश", "महीनिश", "मोहेनिश", "मोहिन्निश",
    "मो-हि-निश", "मो ही निश", "मोहनीश", "मोहिन-एश",
    
    // Shubham variations
    "shubham", "shubhaam", "shubhham", "shubam", "shubhamm", "shoobham",
    "shubhum", "shuubham", "s-h-u-b-h-a-m", "s h u b h a m", "shub-ham",
    "shubh-am", "shubhm", "shubaam", "shubhaam",
    
    // Hindi/Devanagari Shubham variations
    "शुभम", "शुभाम", "शुभ्हम", "शुबम", "शुभम्म", "शूबहम", "शुभुम", "शूभम",
    "एस-एच-यू-बी-एच-ए-एम", "एस एच यू बी एच ए एम", "शुभ-हम", "शुभ-अम",
    "शुभम", "शुबाम", "शुभाम",
    
    // Subham variations
    "subham", "subhaam", "subhham", "subam", "subhamm", "soobham",
    "subhum", "suubham", "s-u-b-h-a-m", "s u b h a m", "sub-ham",
    "subh-am",
    
    // Hindi/Devanagari Subham variations
    "सुभम", "सुभाम", "सुभ्हम", "सुबम", "सुभम्म", "सूबहम", "सुभुम", "सूब्हम",
    "एस-यू-बी-एच-ए-एम", "एस यू बी एच ए एम", "सुब-हम", "सुभ-अम",
    
    // Aaloo/Aloo variations
    "aaloo", "aloo", "aalo", "aalu", "alu", "aloooo", "a-loo", "a-lo",
    "aa-loo", "aa-lo", "a l o o", "alloo", "alooo", "al-loo",
    
    // Hindi/Devanagari Aaloo/Aloo variations
    "आलू", "आलो", "आलु", "अलु", "आलूऊ", "आ-लू", "आ-लो", "आ-लू", "आ-लो",
    "अ ल ऊ", "अल्लू", "आलूऊ", "अल-लू", "आ-लू", "अ ल ऊ", "आलो", "आलो",
    
    // Sarita variations
    "sarita", "saritha", "sareeta", "sareta", "saarita", "saaritha",
    "sa-rita", "sa rita", "sari-ta",
    
    // Hindi/Devanagari Sarita variations
    "सरिता", "सरिथा", "सरीता", "सरेता", "सारिता", "सारिथा", "स-रिता",
    "स रिता", "सरी-ता",
    
    // Babu variations
    "babu", "baboo", "babbu", "baabu", "baaabuu", "b-a-b-u", "ba-bu",
    "ba bu",
    
    // Hindi/Devanagari Babu variations
    "बाबू", "बब्बू", "बाबू", "बााआबू", "बब्बु", "बी-ए-बी-यू", "बा-बु", "बा बु",
    
    // Shubhamwa variations
    "shubhamwa", "shubhamvaa", "shubhamwaaa", "shubhamwva", "shubhamvva",
    "shubhamw-a", "shubham-wa", "shubham wa", "shub-ham-wa",
    "s-h-u-b-h-a-m-w-a", "sh-u-b-h-a-m", "s h u-b h a m",
    "s-hu-bh-am",
    
    // Hindi/Devanagari Shubhamwa variations
    "शुभमवा", "शुभमवाआ", "शुभमव्वा", "शुभम-व", "शुभम-वा", "शुभम वा",
    "शुभ-हम-वा", "एस-एच-यू-बी-एच-ए-एम-डब्लू-ए", "श-यू-बी-एच-ए-एम",
    "एस यू-बी एच ए एम",
    // Add more inappropriate words as needed
];

module.exports = stopwords; 