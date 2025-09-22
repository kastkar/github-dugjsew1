import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.title': 'SparkSTEM',
    'hero.subtitle': 'Start Studying and Playing Together!',
    'hero.playNow': 'PLAY NOW',
    'hero.teacherLounge': "Teacher's Lounge",
    'hero.adminPortal': 'Admin Portal',
    'hero.feature1.title': '100% Offline',
    'hero.feature1.desc': 'No internet? No problem! Play anywhere, anytime.',
    'hero.feature2.title': 'Interactive Learning',
    'hero.feature2.desc': 'Engaging content that makes learning fun and effective.',
    'hero.feature3.title': 'Epic Quests',
    'hero.feature3.desc': 'Turn boring lessons into thrilling adventures.',

    // Problem Section
    'problems.title': 'Studying STEM becomes so exciting with our platform!',
    'problems.subtitle': "We've created engaging solutions to make learning more effective and fun!",
    'problems.problem1.title': 'Hate Bad Internet?',
    'problems.problem1.desc': 'Our game is 100% OFFLINE. No lag, no loading, ever.',
    'problems.problem2.title': 'Complex Concepts?',
    'problems.problem2.desc': 'We break down difficult topics into simple, digestible lessons.',
    'problems.problem3.title': 'Need More Engagement?',
    'problems.problem3.desc': 'Our platform is more engaging with interactive quests and challenges.',
    'problems.problem4.title': 'Slow Phone?',
    'problems.problem4.desc': 'This game is super-light and runs on ANY device, fast.',
    'problems.cta': 'Ready to turn learning into an adventure?',

    // Game Worlds
    'games.title': 'Choose Your Adventure',
    'games.subtitle': 'Explore different STEM worlds and master new skills',
    'games.biology.title': 'Biology World',
    'games.biology.desc': 'Discover life sciences through interactive experiments',
    'games.physics.title': 'Physics World',
    'games.physics.desc': 'Explore forces, motion, and energy in fun ways',
    'games.chemistry.title': 'Chemistry World',
    'games.chemistry.desc': 'Mix elements and create compounds safely',
    'games.math.title': 'Math World',
    'games.math.desc': 'Solve puzzles and master mathematical concepts',
    'games.playNow': 'Play Now',

    // Teacher Section
    'teacher.title': 'A Superpower for Teachers',
    'teacher.subtitle': "The Teacher's Lounge",
    'teacher.description': 'Transform your classroom with AI-powered insights and gamified learning management',
    'teacher.powerUps': 'Teacher Power-Ups',
    'teacher.feature1': 'See exactly where students are stuck, in real-time',
    'teacher.feature1.desc': 'Live analytics dashboard shows student progress and identifies learning gaps instantly',
    'teacher.feature2': 'Get AI-alerts when a student needs help',
    'teacher.feature2.desc': 'Smart notifications ping you when students struggle, so no one gets left behind',
    'teacher.feature3': 'Stop grading homework! Our AI auto-grades quizzes',
    'teacher.feature3.desc': 'Intelligent assessment system grades automatically and provides detailed feedback',
    'teacher.feature4': 'Deploy custom challenges and assignments to the whole class',
    'teacher.feature4.desc': 'Create personalized quests and challenges tailored to your curriculum',
    'teacher.bestPart': 'Best Part: Zero Learning Curve!',
    'teacher.bestPartDesc': "Our interface is so intuitive, you'll be a pro in 5 minutes. Promise!",
    'teacher.dashboard': 'Class Dashboard',
    'teacher.live': 'Live',
    'teacher.activeStudents': 'Active Students',
    'teacher.avgLevel': 'Avg Level',
    'teacher.classProgress': 'Class Progress',
    'teacher.needsHelp': 'needs help with Chemistry!',

    // Student Features
    'student.title': 'Gear Up. Level Up!',
    'student.subtitle': 'Every quest completed, every lesson mastered brings epic rewards and recognition',
    'student.feature1.title': 'Climb the Leaderboard!',
    'student.feature1.desc': 'Compete with friends and become the #1 STEM Champion in your school.',
    'student.feature2.title': 'Earn Epic Loot!',
    'student.feature2.desc': 'Unlock rare badges, certificates, and new skins for your robot mascot.',
    'student.feature3.title': 'Form Your Guild!',
    'student.feature3.desc': "Team up with classmates in a 'study guild' to defeat special 'Boss Challenges' (aka exams).",
    'student.achievements': 'Achievement Gallery',
    'student.achievementsDesc': 'Collect rare achievements and show off your expertise',
    'student.offline.title': 'Offline Learning Mode',
    'student.offline.desc': 'Download video lectures and modules for offline learning. Perfect for areas with limited internet connectivity.',
    'student.download': 'Download Modules',
    'student.offlineFeatures': 'Works offline • Any device',
    'student.startJourney': 'Start Your Journey',
    'student.joinThousands': 'Join thousands of students already on their STEM adventure!',

    // Footer
    'footer.description': 'Transforming rural education in Odisha through gamified STEM learning. Making quality education accessible, engaging, and culturally relevant.',
    'footer.quickLinks': 'Quick Links',
    'footer.studentPortal': 'Student Portal',
    'footer.teacherDashboard': 'Teacher Dashboard',
    'footer.gameWorlds': 'Game Worlds',
    'footer.offlineDownloads': 'Offline Downloads',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.technicalIssues': 'Technical Issues',
    'footer.contentGuidelines': 'Content Guidelines',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.builtBy': 'Built by Team Kastkar',
    'footer.teamDesc': 'A passionate team of developers, designers, and educators working to revolutionize rural education in India.',
    'footer.copyright': '© 2025 SparkSTEM. Made with ❤️ by Team Kastkar for rural India.',
    'footer.tagline': 'Empowering minds, preserving culture, building futures.',
    'footer.mission': 'Mission: Digital Inclusion',
    'footer.vision': 'Vision: Educated Odisha',

    // Login Modal
    'login.title': 'Welcome to SparkSTEM',
    'login.subtitle': 'Choose your role and begin your journey',
    'login.student': 'Student',
    'login.teacher': 'Teacher',
    'login.admin': 'Admin',
    'login.student.desc': 'Access your learning adventures',
    'login.teacher.desc': 'Manage your classroom',
    'login.admin.desc': 'System administration',
    'login.studentId': 'Student ID',
    'login.schoolCode': 'School Code',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.enterStudentId': 'Enter your Student ID',
    'login.enterSchoolCode': 'Enter School Code',
    'login.enterEmail': 'Enter your email',
    'login.enterPassword': 'Enter your password',
    'login.enterPortal': 'Enter Portal',
    'login.needHelp': 'Need help? Contact your school administrator'
  },
  hi: {
    // Hero Section
    'hero.title': 'स्पार्कSTEM',
    'hero.subtitle': 'पढ़ाई और खेल एक साथ शुरू करें!',
    'hero.playNow': 'अभी खेलें',
    'hero.teacherLounge': 'शिक्षक कक्ष',
    'hero.adminPortal': 'प्रशासक पोर्टल',
    'hero.feature1.title': '100% ऑफलाइन',
    'hero.feature1.desc': 'इंटरनेट नहीं? कोई समस्या नहीं! कहीं भी, कभी भी खेलें।',
    'hero.feature2.title': 'इंटरैक्टिव लर्निंग',
    'hero.feature2.desc': 'आकर्षक सामग्री जो सीखने को मजेदार और प्रभावी बनाती है।',
    'hero.feature3.title': 'महाकाव्य खोज',
    'hero.feature3.desc': 'उबाऊ पाठों को रोमांचक रोमांच में बदलें।',

    // Problem Section
    'problems.title': 'हमारे प्लेटफॉर्म के साथ STEM की पढ़ाई बहुत रोमांचक हो जाती है!',
    'problems.subtitle': 'हमने सीखने को अधिक प्रभावी और मजेदार बनाने के लिए आकर्षक समाधान बनाए हैं!',
    'problems.problem1.title': 'खराब इंटरनेट से परेशान?',
    'problems.problem1.desc': 'हमारा गेम 100% ऑफलाइन है। कोई लैग नहीं, कोई लोडिंग नहीं।',
    'problems.problem2.title': 'जटिल अवधारणाएं?',
    'problems.problem2.desc': 'हम कठिन विषयों को सरल, समझने योग्य पाठों में तोड़ते हैं।',
    'problems.problem3.title': 'अधिक जुड़ाव चाहिए?',
    'problems.problem3.desc': 'हमारा प्लेटफॉर्म इंटरैक्टिव खोज और चुनौतियों के साथ अधिक आकर्षक है।',
    'problems.problem4.title': 'धीमा फोन?',
    'problems.problem4.desc': 'यह गेम सुपर-लाइट है और किसी भी डिवाइस पर तेज़ी से चलता है।',
    'problems.cta': 'सीखने को एक रोमांच में बदलने के लिए तैयार हैं?',

    // Game Worlds
    'games.title': 'अपना रोमांच चुनें',
    'games.subtitle': 'विभिन्न STEM दुनिया का अन्वेषण करें और नए कौशल में महारत हासिल करें',
    'games.biology.title': 'जीव विज्ञान की दुनिया',
    'games.biology.desc': 'इंटरैक्टिव प्रयोगों के माध्यम से जीवन विज्ञान की खोज करें',
    'games.physics.title': 'भौतिकी की दुनिया',
    'games.physics.desc': 'बल, गति और ऊर्जा को मजेदार तरीकों से समझें',
    'games.chemistry.title': 'रसायन विज्ञान की दुनिया',
    'games.chemistry.desc': 'तत्वों को मिलाएं और सुरक्षित रूप से यौगिक बनाएं',
    'games.math.title': 'गणित की दुनिया',
    'games.math.desc': 'पहेलियां सुलझाएं और गणितीय अवधारणाओं में महारत हासिल करें',
    'games.playNow': 'अभी खेलें',

    // Teacher Section
    'teacher.title': 'शिक्षकों के लिए एक महाशक्ति',
    'teacher.subtitle': 'शिक्षक कक्ष',
    'teacher.description': 'AI-संचालित अंतर्दृष्टि और गेमिफाइड लर्निंग प्रबंधन के साथ अपनी कक्षा को बदलें',
    'teacher.powerUps': 'शिक्षक पावर-अप्स',
    'teacher.feature1': 'देखें कि छात्र वास्तव में कहां अटके हैं, रियल-टाइम में',
    'teacher.feature1.desc': 'लाइव एनालिटिक्स डैशबोर्ड छात्र प्रगति दिखाता है और तुरंत सीखने की कमियों की पहचान करता है',
    'teacher.feature2': 'जब किसी छात्र को मदद की जरूरत हो तो AI-अलर्ट प्राप्त करें',
    'teacher.feature2.desc': 'स्मार्ट नोटिफिकेशन आपको बताते हैं जब छात्र संघर्ष करते हैं, ताकि कोई भी पीछे न रह जाए',
    'teacher.feature3': 'होमवर्क की जांच करना बंद करें! हमारा AI स्वचालित रूप से क्विज़ की जांच करता है',
    'teacher.feature3.desc': 'बुद्धिमान मूल्यांकन प्रणाली स्वचालित रूप से ग्रेड करती है और विस्तृत फीडबैक प्रदान करती है',
    'teacher.feature4': 'पूरी कक्षा के लिए कस्टम चुनौतियां और असाइनमेंट तैनात करें',
    'teacher.feature4.desc': 'अपने पाठ्यक्रम के अनुकूल व्यक्तिगत खोज और चुनौतियां बनाएं',
    'teacher.bestPart': 'सबसे अच्छी बात: शून्य सीखने की अवस्था!',
    'teacher.bestPartDesc': 'हमारा इंटरफेस इतना सहज है, आप 5 मिनट में प्रो बन जाएंगे। वादा!',
    'teacher.dashboard': 'कक्षा डैशबोर्ड',
    'teacher.live': 'लाइव',
    'teacher.activeStudents': 'सक्रिय छात्र',
    'teacher.avgLevel': 'औसत स्तर',
    'teacher.classProgress': 'कक्षा प्रगति',
    'teacher.needsHelp': 'को रसायन विज्ञान में मदद चाहिए!',

    // Student Features
    'student.title': 'तैयार हो जाओ। स्तर बढ़ाओ!',
    'student.subtitle': 'हर पूरी की गई खोज, हर महारत हासिल किया गया पाठ महाकाव्य पुरस्कार और मान्यता लाता है',
    'student.feature1.title': 'लीडरबोर्ड पर चढ़ें!',
    'student.feature1.desc': 'दोस्तों के साथ प्रतिस्पर्धा करें और अपने स्कूल में #1 STEM चैंपियन बनें।',
    'student.feature2.title': 'महाकाव्य लूट कमाएं!',
    'student.feature2.desc': 'दुर्लभ बैज, प्रमाणपत्र और अपने रोबोट मैस्कॉट के लिए नई स्किन अनलॉक करें।',
    'student.feature3.title': 'अपना गिल्ड बनाएं!',
    'student.feature3.desc': 'विशेष "बॉस चैलेंज" (यानी परीक्षा) को हराने के लिए सहपाठियों के साथ "स्टडी गिल्ड" में टीम बनाएं।',
    'student.achievements': 'उपलब्धि गैलरी',
    'student.achievementsDesc': 'दुर्लभ उपलब्धियां एकत्र करें और अपनी विशेषज्ञता दिखाएं',
    'student.offline.title': 'ऑफलाइन लर्निंग मोड',
    'student.offline.desc': 'ऑफलाइन सीखने के लिए वीडियो व्याख्यान और मॉड्यूल डाउनलोड करें। सीमित इंटरनेट कनेक्टिविटी वाले क्षेत्रों के लिए बिल्कुल सही।',
    'student.download': 'मॉड्यूल डाउनलोड करें',
    'student.offlineFeatures': 'ऑफलाइन काम करता है • कोई भी डिवाइस',
    'student.startJourney': 'अपनी यात्रा शुरू करें',
    'student.joinThousands': 'हजारों छात्रों के साथ जुड़ें जो पहले से ही अपने STEM रोमांच पर हैं!',

    // Footer
    'footer.description': 'गेमिफाइड STEM लर्निंग के माध्यम से ओडिशा में ग्रामीण शिक्षा को बदलना। गुणवत्तापूर्ण शिक्षा को सुलभ, आकर्षक और सांस्कृतिक रूप से प्रासंगिक बनाना।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.studentPortal': 'छात्र पोर्टल',
    'footer.teacherDashboard': 'शिक्षक डैशबोर्ड',
    'footer.gameWorlds': 'गेम वर्ल्ड्स',
    'footer.offlineDownloads': 'ऑफलाइन डाउनलोड',
    'footer.support': 'सहायता',
    'footer.helpCenter': 'सहायता केंद्र',
    'footer.technicalIssues': 'तकनीकी समस्याएं',
    'footer.contentGuidelines': 'सामग्री दिशानिर्देश',
    'footer.privacyPolicy': 'गोपनीयता नीति',
    'footer.builtBy': 'टीम कास्तकर द्वारा निर्मित',
    'footer.teamDesc': 'डेवलपर्स, डिजाइनरों और शिक्षकों की एक भावुक टीम जो भारत में ग्रामीण शिक्षा में क्रांति लाने के लिए काम कर रही है।',
    'footer.copyright': '© 2025 स्पार्कSTEM। ग्रामीण भारत के लिए टीम कास्तकर द्वारा ❤️ के साथ बनाया गया।',
    'footer.tagline': 'दिमाग को सशक्त बनाना, संस्कृति को संरक्षित करना, भविष्य का निर्माण करना।',
    'footer.mission': 'मिशन: डिजिटल समावेश',
    'footer.vision': 'दृष्टि: शिक्षित ओडिशा',

    // Login Modal
    'login.title': 'स्पार्कSTEM में आपका स्वागत है',
    'login.subtitle': 'अपनी भूमिका चुनें और अपनी यात्रा शुरू करें',
    'login.student': 'छात्र',
    'login.teacher': 'शिक्षक',
    'login.admin': 'प्रशासक',
    'login.student.desc': 'अपने सीखने के रोमांच तक पहुंचें',
    'login.teacher.desc': 'अपनी कक्षा का प्रबंधन करें',
    'login.admin.desc': 'सिस्टम प्रशासन',
    'login.studentId': 'छात्र आईडी',
    'login.schoolCode': 'स्कूल कोड',
    'login.email': 'ईमेल',
    'login.password': 'पासवर्ड',
    'login.enterStudentId': 'अपनी छात्र आईडी दर्ज करें',
    'login.enterSchoolCode': 'स्कूल कोड दर्ज करें',
    'login.enterEmail': 'अपना ईमेल दर्ज करें',
    'login.enterPassword': 'अपना पासवर्ड दर्ज करें',
    'login.enterPortal': 'पोर्टल में प्रवेश करें',
    'login.needHelp': 'मदद चाहिए? अपने स्कूल प्रशासक से संपर्क करें'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};