// DOM Elements
const loader = document.querySelector('.loader');
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const navLinks = document.querySelectorAll('.nav ul li a');
const mobileNavLinks = document.querySelectorAll('.mobile-menu ul li a');
const loginBtn = document.querySelector('.btn-login');
const signupBtn = document.querySelector('.btn-signup');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const modalCloseBtns = document.querySelectorAll('.modal-close');
const switchToLogin = document.querySelector('.switch-to-login');
const switchToSignup = document.querySelector('.switch-to-signup');
const toolCards = document.querySelectorAll('.category-card');
const toolModal = document.querySelector('.tool-modal');
const toolModalClose = document.querySelector('.tool-modal .modal-close');
const permissionModal = document.querySelector('.permission-modal');
const allowPermissionBtn = document.getElementById('allow-permission');
const denyPermissionBtn = document.getElementById('deny-permission');
const demoToolSelect = document.getElementById('demo-tool-select');
const demoAreas = document.querySelectorAll('.demo-area');
const generateBtn = document.querySelector('.generate-btn');
const outputArea = document.querySelector('.output-area');
const toolSearch = document.getElementById('tool-search');
const toolCategoryFilter = document.getElementById('tool-category-filter');
const sortToolsBtn = document.getElementById('sort-tools');
const allToolsGrid = document.querySelector('.all-tools-grid');
const featuredToolsGrid = document.querySelector('.tools-grid');
const testimonialSlides = document.querySelectorAll('.testimonial');
const testimonialDots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const contactForm = document.getElementById('contactForm');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const passwordInput = document.querySelector('#signupForm input[type="password"]');
const passwordStrength = document.querySelector('.password-strength .strength-bar');
const passwordStrengthText = document.querySelector('.strength-text');

// Tool Data - 100+ tools
const toolsData = [
    // Education Tools (20)
    {
        id: 'quiz-generator',
        name: 'Quiz Generator',
        description: 'Generate custom quizzes from any text or topic',
        category: 'education',
        icon: 'fa-question-circle',
        popular: true
    },
    {
        id: 'flashcard-maker',
        name: 'Flashcard Maker',
        description: 'Create printable flashcards for effective studying',
        category: 'education',
        icon: 'fa-layer-group'
    },
    {
        id: 'essay-generator',
        name: 'Essay Generator',
        description: 'Generate well-structured essays on any topic',
        category: 'education',
        icon: 'fa-file-alt',
        popular: true
    },
    {
        id: 'math-solver',
        name: 'Math Solver',
        description: 'Step-by-step solutions to math problems',
        category: 'education',
        icon: 'fa-square-root-alt'
    },
    {
        id: 'language-translator',
        name: 'Language Translator',
        description: 'Accurate translations between multiple languages',
        category: 'education',
        icon: 'fa-language'
    },
    {
        id: 'text-summarizer',
        name: 'Text Summarizer',
        description: 'Condense long articles into key points',
        category: 'education',
        icon: 'fa-file-contract'
    },
    {
        id: 'citation-generator',
        name: 'Citation Generator',
        description: 'Generate citations in APA, MLA, Chicago formats',
        category: 'education',
        icon: 'fa-quote-right'
    },
    {
        id: 'plagiarism-checker',
        name: 'Plagiarism Checker',
        description: 'Check text for plagiarism with detailed report',
        category: 'education',
        icon: 'fa-search'
    },
    {
        id: 'grammar-checker',
        name: 'Grammar Checker',
        description: 'Advanced grammar and spelling correction',
        category: 'education',
        icon: 'fa-spell-check'
    },
    {
        id: 'study-planner',
        name: 'Study Planner',
        description: 'Create personalized study schedules',
        category: 'education',
        icon: 'fa-calendar-alt'
    },
    {
        id: 'practice-tests',
        name: 'Timed Practice Tests',
        description: 'Simulate exam conditions with timed tests',
        category: 'education',
        icon: 'fa-stopwatch'
    },
    {
        id: 'mind-map-creator',
        name: 'Mind Map Creator',
        description: 'Visualize ideas and concepts with mind maps',
        category: 'education',
        icon: 'fa-project-diagram'
    },
    {
        id: 'vocabulary-builder',
        name: 'Vocabulary Builder',
        description: 'Learn new words with definitions and examples',
        category: 'education',
        icon: 'fa-book-open'
    },
    {
        id: 'notes-organizer',
        name: 'Lecture Notes Organizer',
        description: 'Organize and categorize your lecture notes',
        category: 'education',
        icon: 'fa-sticky-note'
    },
    {
        id: 'homework-helper',
        name: 'Homework Helper',
        description: 'Get step-by-step homework solutions',
        category: 'education',
        icon: 'fa-book-reader'
    },
    {
        id: 'concept-explainer',
        name: 'Concept Explanation AI',
        description: 'Get simple explanations for complex concepts',
        category: 'education',
        icon: 'fa-lightbulb'
    },
    {
        id: 'reading-assistant',
        name: 'Reading Comprehension Assistant',
        description: 'Improve reading comprehension with AI help',
        category: 'education',
        icon: 'fa-book'
    },
    {
        id: 'lecture-transcriber',
        name: 'Video Lecture Transcriber',
        description: 'Transcribe video lectures to text',
        category: 'education',
        icon: 'fa-closed-captioning'
    },
    {
        id: 'formula-sheet-creator',
        name: 'Formula Sheet Creator',
        description: 'Generate customized formula sheets',
        category: 'education',
        icon: 'fa-superscript'
    },
    {
        id: 'research-outline-tool',
        name: 'Research Paper Outline Tool',
        description: 'Create structured outlines for research papers',
        category: 'education',
        icon: 'fa-tasks'
    },

    // Writing & Editing Tools (20)
    {
        id: 'text-paraphraser',
        name: 'Text Paraphraser',
        description: 'Rephrase sentences while preserving meaning',
        category: 'writing',
        icon: 'fa-paragraph',
        popular: true
    },
    {
        id: 'spelling-checker',
        name: 'Spelling Checker',
        description: 'Advanced spell check with suggestions',
        category: 'writing',
        icon: 'fa-check-double'
    },
    {
        id: 'resume-builder',
        name: 'Resume Builder',
        description: 'Create professional resumes in minutes',
        category: 'writing',
        icon: 'fa-file-user'
    },
    {
        id: 'cover-letter-creator',
        name: 'Cover Letter Creator',
        description: 'Generate tailored cover letters',
        category: 'writing',
        icon: 'fa-envelope-open-text'
    },
    {
        id: 'writing-prompter',
        name: 'Creative Writing Prompter',
        description: 'Get creative writing prompts and ideas',
        category: 'writing',
        icon: 'fa-pen-nib'
    },
    {
        id: 'text-to-speech',
        name: 'Text-to-Speech Reader',
        description: 'Convert text to natural sounding speech',
        category: 'writing',
        icon: 'fa-volume-up'
    },
    {
        id: 'speech-to-text',
        name: 'Speech-to-Text Converter',
        description: 'Transcribe speech to text with high accuracy',
        category: 'writing',
        icon: 'fa-microphone-alt'
    },
    {
        id: 'email-template-builder',
        name: 'Email Template Builder',
        description: 'Create professional email templates',
        category: 'writing',
        icon: 'fa-envelope'
    },
    {
        id: 'blog-post-planner',
        name: 'Blog Post Planner',
        description: 'Plan and structure your blog posts',
        category: 'writing',
        icon: 'fa-blog'
    },
    {
        id: 'seo-optimizer',
        name: 'SEO Content Optimizer',
        description: 'Optimize content for search engines',
        category: 'writing',
        icon: 'fa-search-plus'
    },
    {
        id: 'article-rewriter',
        name: 'Article Rewriter',
        description: 'Rewrite articles while maintaining SEO value',
        category: 'writing',
        icon: 'fa-retweet'
    },
    {
        id: 'proofreading-assistant',
        name: 'Proofreading Assistant',
        description: 'Advanced proofreading with style suggestions',
        category: 'writing',
        icon: 'fa-highlighter'
    },
    {
        id: 'character-count-analyzer',
        name: 'Character Count & Readability Analyzer',
        description: 'Analyze text readability and character count',
        category: 'writing',
        icon: 'fa-font'
    },
    {
        id: 'formatting-cleanup',
        name: 'Formatting Cleanup Tool',
        description: 'Clean up and standardize text formatting',
        category: 'writing',
        icon: 'fa-broom'
    },
    {
        id: 'markdown-editor',
        name: 'Markdown Editor',
        description: 'Live preview Markdown editor with export',
        category: 'writing',
        icon: 'fa-markdown'
    },
    {
        id: 'collaborative-writing',
        name: 'Collaborative Writing Workspace',
        description: 'Real-time collaborative writing environment',
        category: 'writing',
        icon: 'fa-users'
    },
    {
        id: 'autocorrect-tool',
        name: 'Auto-correct and Suggestion Tool',
        description: 'Advanced autocorrect with AI suggestions',
        category: 'writing',
        icon: 'fa-magic'
    },
    {
        id: 'style-tone-analyzer',
        name: 'Style and Tone Analyzer',
        description: 'Analyze and adjust writing style and tone',
        category: 'writing',
        icon: 'fa-paint-brush'
    },
    {
        id: 'text-comparison',
        name: 'Text Comparison Tool',
        description: 'Compare two texts for similarities and differences',
        category: 'writing',
        icon: 'fa-not-equal'
    },
    {
        id: 'quote-finder',
        name: 'Literature Quote Finder',
        description: 'Find relevant quotes from literature',
        category: 'writing',
        icon: 'fa-quote-left'
    },

    // File Converter Tools (20)
    {
        id: 'pdf-to-word',
        name: 'PDF to Word Converter',
        description: 'Convert PDF files to editable Word documents',
        category: 'converter',
        icon: 'fa-file-pdf',
        popular: true
    },
    {
        id: 'word-to-pdf',
        name: 'Word to PDF Converter',
        description: 'Convert Word documents to PDF format',
        category: 'converter',
        icon: 'fa-file-word'
    },
    {
        id: 'excel-to-csv',
        name: 'Excel to CSV Converter',
        description: 'Convert Excel files to CSV format',
        category: 'converter',
        icon: 'fa-file-excel'
    },
    {
        id: 'image-to-pdf',
        name: 'Image to PDF Converter',
        description: 'Convert images to PDF documents',
        category: 'converter',
        icon: 'fa-file-image'
    },
    {
        id: 'audio-to-text',
        name: 'Audio to Text (Transcription)',
        description: 'Transcribe audio files to text',
        category: 'converter',
        icon: 'fa-file-audio'
    },
    {
        id: 'video-to-audio',
        name: 'Video to Audio (MP3)',
        description: 'Extract audio from video files',
        category: 'converter',
        icon: 'fa-file-video'
    },
    {
        id: 'image-format-converter',
        name: 'Image Format Converter',
        description: 'Convert between JPG, PNG, GIF formats',
        category: 'converter',
        icon: 'fa-exchange-alt'
    },
    {
        id: 'text-to-pdf',
        name: 'Text File to PDF',
        description: 'Convert text files to PDF documents',
        category: 'converter',
        icon: 'fa-file-alt'
    },
    {
        id: 'ppt-to-pdf',
        name: 'PowerPoint to PDF',
        description: 'Convert PowerPoint presentations to PDF',
        category: 'converter',
        icon: 'fa-file-powerpoint'
    },
    {
        id: 'pdf-compressor',
        name: 'PDF Compressor',
        description: 'Reduce PDF file size without quality loss',
        category: 'converter',
        icon: 'fa-compress-alt'
    },
    {
        id: 'epub-to-pdf',
        name: 'ePub to PDF Converter',
        description: 'Convert ePub eBooks to PDF format',
        category: 'converter',
        icon: 'fa-book'
    },
    {
        id: 'csv-to-json',
        name: 'CSV to JSON Converter',
        description: 'Convert CSV data to JSON format',
        category: 'converter',
        icon: 'fa-file-code'
    },
    {
        id: 'pdf-merger-splitter',
        name: 'PDF Merger & Splitter',
        description: 'Merge multiple PDFs or split PDF pages',
        category: 'converter',
        icon: 'fa-object-group'
    },
    {
        id: 'audio-format-converter',
        name: 'Audio Format Converter',
        description: 'Convert between MP3, WAV, AAC formats',
        category: 'converter',
        icon: 'fa-file-audio'
    },
    {
        id: 'video-format-converter',
        name: 'Video Format Converter',
        description: 'Convert between MP4, MOV, AVI formats',
        category: 'converter',
        icon: 'fa-file-video'
    },
    {
        id: 'online-ocr',
        name: 'Online OCR (Image to Text)',
        description: 'Extract text from images with OCR technology',
        category: 'converter',
        icon: 'fa-text-height'
    },
    {
        id: 'file-size-reducer',
        name: 'File Size Reducer',
        description: 'Compress files without losing quality',
        category: 'converter',
        icon: 'fa-weight-hanging'
    },
    {
        id: 'url-to-pdf',
        name: 'URL to PDF Capture',
        description: 'Convert web pages to PDF documents',
        category: 'converter',
        icon: 'fa-link'
    },
    {
        id: 'barcode-generator',
        name: 'Barcode/QR Code Generator',
        description: 'Create barcodes and QR codes',
        category: 'converter',
        icon: 'fa-barcode'
    },
    {
        id: 'subtitle-converter',
        name: 'Subtitle File Converter',
        description: 'Convert between subtitle file formats',
        category: 'converter',
        icon: 'fa-closed-captioning'
    },

    // Productivity Tools (20)
    {
        id: 'todo-list',
        name: 'To-Do List Manager',
        description: 'Organize tasks with priority and due dates',
        category: 'productivity',
        icon: 'fa-tasks',
        popular: true
    },
    {
        id: 'note-taking',
        name: 'Note Taking App',
        description: 'Digital notebook with rich text formatting',
        category: 'productivity',
        icon: 'fa-sticky-note'
    },
    {
        id: 'calendar-planner',
        name: 'Calendar & Event Planner',
        description: 'Schedule and manage events and reminders',
        category: 'productivity',
        icon: 'fa-calendar'
    },
    {
        id: 'time-tracker',
        name: 'Time Tracking & Pomodoro Timer',
        description: 'Track time and use Pomodoro technique',
        category: 'productivity',
        icon: 'fa-clock'
    },
    {
        id: 'habit-tracker',
        name: 'Habit Tracker',
        description: 'Build and track daily habits',
        category: 'productivity',
        icon: 'fa-calendar-check'
    },
    {
        id: 'password-generator',
        name: 'Password Generator',
        description: 'Generate strong, secure passwords',
        category: 'productivity',
        icon: 'fa-key'
    },
    {
        id: 'password-manager',
        name: 'Password Manager',
        description: 'Securely store and manage passwords',
        category: 'productivity',
        icon: 'fa-lock'
    },
    {
        id: 'clipboard-manager',
        name: 'Clipboard History Manager',
        description: 'Save and manage clipboard history',
        category: 'productivity',
        icon: 'fa-clipboard'
    },
    {
        id: 'screen-recorder',
        name: 'Screen Recorder',
        description: 'Record your screen with audio',
        category: 'productivity',
        icon: 'fa-video'
    },
    {
        id: 'task-prioritization',
        name: 'Task Prioritization Assistant',
        description: 'AI-powered task prioritization',
        category: 'productivity',
        icon: 'fa-flag'
    },
    {
        id: 'meeting-scheduler',
        name: 'Meeting Scheduler',
        description: 'Schedule and coordinate meetings',
        category: 'productivity',
        icon: 'fa-users'
    },
    {
        id: 'contact-manager',
        name: 'Contact Manager',
        description: 'Organize and manage contacts',
        category: 'productivity',
        icon: 'fa-address-book'
    },
    {
        id: 'budget-tracker',
        name: 'Budget Tracker',
        description: 'Track income and expenses',
        category: 'productivity',
        icon: 'fa-wallet'
    },
    {
        id: 'expense-splitter',
        name: 'Expense Split Calculator',
        description: 'Split bills and expenses among friends',
        category: 'productivity',
        icon: 'fa-money-bill-wave'
    },
    {
        id: 'conversion-calculators',
        name: 'Conversion Calculators',
        description: 'Convert between units and measurements',
        category: 'productivity',
        icon: 'fa-calculator'
    },
    {
        id: 'currency-converter',
        name: 'Currency Converter',
        description: 'Real-time currency conversion',
        category: 'productivity',
        icon: 'fa-money-bill-alt'
    },
    {
        id: 'weather-widget',
        name: 'Weather Forecast Widget',
        description: 'Local and global weather forecasts',
        category: 'productivity',
        icon: 'fa-cloud-sun'
    },
    {
        id: 'file-encryption',
        name: 'File Encryption & Decryption',
        description: 'Secure files with encryption',
        category: 'productivity',
        icon: 'fa-lock'
    },
    {
        id: 'backup-reminder',
        name: 'Backup Reminder & Tracker',
        description: 'Reminders for regular data backups',
        category: 'productivity',
        icon: 'fa-hdd'
    },
    {
        id: 'url-shortener',
        name: 'URL Shortener',
        description: 'Create short, shareable URLs',
        category: 'productivity',
        icon: 'fa-link'
    },

    // AI-Powered Tools (20)
    {
        id: 'ai-chatbot',
        name: 'AI Chatbot Assistant',
        description: 'Intelligent chatbot for various tasks',
        category: 'ai',
        icon: 'fa-robot',
        popular: true
    },
    {
        id: 'image-generation',
        name: 'Image Generation Tool',
        description: 'Generate images from text descriptions',
        category: 'ai',
        icon: 'fa-image'
    },
    {
        id: 'logo-maker',
        name: 'Logo Maker',
        description: 'AI-powered logo design tool',
        category: 'ai',
        icon: 'fa-palette'
    },
    {
        id: 'infographic-generator',
        name: 'Infographic Generator',
        description: 'Create professional infographics',
        category: 'ai',
        icon: 'fa-chart-pie'
    },
    {
        id: 'social-media-creator',
        name: 'Social Media Post Creator',
        description: 'Design engaging social media posts',
        category: 'ai',
        icon: 'fa-share-alt'
    },
    {
        id: 'video-caption-generator',
        name: 'Video Caption Generator',
        description: 'Auto-generate captions for videos',
        category: 'ai',
        icon: 'fa-closed-captioning'
    },
    {
        id: 'keyword-research',
        name: 'Keyword Research Tool',
        description: 'Find high-value keywords for SEO',
        category: 'ai',
        icon: 'fa-search-dollar'
    },
    {
        id: 'code-snippet-generator',
        name: 'Code Snippet Generator',
        description: 'Generate code snippets in multiple languages',
        category: 'ai',
        icon: 'fa-code'
    },
    {
        id: 'api-tester',
        name: 'API Tester & Explorer',
        description: 'Test and explore APIs',
        category: 'ai',
        icon: 'fa-plug'
    },
    {
        id: 'remote-desktop',
        name: 'Remote Desktop Client',
        description: 'Access computers remotely',
        category: 'ai',
        icon: 'fa-desktop'
    },
    {
        id: 'screenshot-tool',
        name: 'Screenshot Capture with Annotation',
        description: 'Capture and annotate screenshots',
        category: 'ai',
        icon: 'fa-camera'
    },
    {
        id: 'voice-assistant',
        name: 'Voice Assistant Integration',
        description: 'Voice-controlled assistant',
        category: 'ai',
        icon: 'fa-microphone'
    },
    {
        id: 'pronunciation-tester',
        name: 'Language Pronunciation Tester',
        description: 'Practice and improve pronunciation',
        category: 'ai',
        icon: 'fa-language'
    },
    {
        id: 'resume-optimizer',
        name: 'AI-Powered Resume Keyword Optimizer',
        description: 'Optimize resumes for ATS systems',
        category: 'ai',
        icon: 'fa-file-user'
    },
    {
        id: 'emotion-analyzer',
        name: 'Text Emotion Analyzer',
        description: 'Detect emotion in written text',
        category: 'ai',
        icon: 'fa-smile'
    },
    {
        id: 'document-scanner',
        name: 'Document Scanner',
        description: 'Scan documents with mobile camera',
        category: 'ai',
        icon: 'fa-file-upload'
    },
    {
        id: 'spam-score-checker',
        name: 'Email Spam Score Checker',
        description: 'Check email spam likelihood',
        category: 'ai',
        icon: 'fa-envelope'
    },
    {
        id: 'speed-test',
        name: 'Webpage Speed Test Tool',
        description: 'Test and optimize webpage speed',
        category: 'ai',
        icon: 'fa-tachometer-alt'
    },
    {
        id: 'link-checker',
        name: 'Link Checker & Validator',
        description: 'Check links for validity and SEO',
        category: 'ai',
        icon: 'fa-link'
    },
    {
        id: 'gdpr-helper',
        name: 'GDPR Compliance Helper',
        description: 'Ensure GDPR compliance for websites',
        category: 'ai',
        icon: 'fa-shield-alt'
    }
];

// Featured Tools (12 most popular)
const featuredTools = toolsData.filter(tool => tool.popular).slice(0, 12);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after 2 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    // Show permission modal after 5 seconds
    setTimeout(() => {
        if (!localStorage.getItem('permissionAsked')) {
            permissionModal.classList.add('active');
        }
    }, 5000);

    // Animate stats counting
    animateStats();

    // Load featured tools
    renderFeaturedTools();

    // Load all tools
    renderAllTools();

    // Set up demo tool selector
    setupDemoToolSelector();

    // Set first testimonial as active
    if (testimonialSlides.length > 0) {
        testimonialSlides[0].classList.add('active');
        testimonialDots[0].classList.add('active');
    }
});

// Event Listeners
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
closeMenuBtn.addEventListener('click', toggleMobileMenu);
navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

loginBtn.addEventListener('click', () => toggleModal(loginModal));
signupBtn.addEventListener('click', () => toggleModal(signupModal));
modalCloseBtns.forEach(btn => btn.addEventListener('click', closeAllModals));
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(loginModal);
    toggleModal(signupModal);
});
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(signupModal);
    toggleModal(loginModal);
});

toolCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        filterToolsByCategory(category);
        window.location.href = '#tools';
    });
});

toolModalClose.addEventListener('click', () => {
    toolModal.classList.remove('active');
});

allowPermissionBtn.addEventListener('click', () => {
    localStorage.setItem('permissionAsked', 'true');
    permissionModal.classList.remove('active');
    // In a real app, you would request actual permissions here
    alert('Thank you for allowing permissions. Some features may require additional permissions to work fully.');
});

denyPermissionBtn.addEventListener('click', () => {
    localStorage.setItem('permissionAsked', 'true');
    permissionModal.classList.remove('active');
    alert('Some features may be limited without permissions. You can enable them later in settings.');
});

demoToolSelect.addEventListener('change', changeDemoTool);
generateBtn.addEventListener('click', generateQuiz);

toolSearch.addEventListener('input', filterTools);
toolCategoryFilter.addEventListener('change', filterTools);
sortToolsBtn.addEventListener('click', sortTools);

prevBtn.addEventListener('click', showPrevTestimonial);
nextBtn.addEventListener('click', showNextTestimonial);
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
});

contactForm.addEventListener('submit', handleContactSubmit);
loginForm.addEventListener('submit', handleLoginSubmit);
signupForm.addEventListener('submit', handleSignupSubmit);

passwordInput.addEventListener('input', checkPasswordStrength);

// Scroll event for header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
}

function toggleModal(modal) {
    modal.classList.toggle('active');
}

function closeAllModals() {
    document.querySelectorAll('.auth-modal, .tool-modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const increment = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(increment);
            } else {
                stat.textContent = target;
            }
        };
        
        increment();
    });
}

function renderFeaturedTools() {
    featuredToolsGrid.innerHTML = '';
    
    featuredTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">
                <i class="fas ${tool.icon}"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</div>
            <div class="tool-actions">
                <button class="btn btn-try" data-tool="${tool.id}">Try Now</button>
                <i class="far fa-bookmark tool-save"></i>
            </div>
            ${tool.popular ? '<div class="tool-popular">Popular</div>' : ''}
        `;
        
        featuredToolsGrid.appendChild(toolCard);
    });
    
    // Add event listeners to try buttons
    document.querySelectorAll('.btn-try').forEach(btn => {
        btn.addEventListener('click', () => openToolModal(btn.dataset.tool));
    });
}

function renderAllTools() {
    allToolsGrid.innerHTML = '';
    
    toolsData.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">
                <i class="fas ${tool.icon}"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</div>
            <div class="tool-actions">
                <button class="btn btn-try" data-tool="${tool.id}">Try Now</button>
                <i class="far fa-bookmark tool-save"></i>
            </div>
            ${tool.popular ? '<div class="tool-popular">Popular</div>' : ''}
        `;
        
        allToolsGrid.appendChild(toolCard);
    });
    
    // Add event listeners to try buttons
    document.querySelectorAll('.btn-try').forEach(btn => {
        btn.addEventListener('click', () => openToolModal(btn.dataset.tool));
    });
}

function openToolModal(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;
    
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
    
    modalTitle.textContent = tool.name;
    
    // In a real app, you would load different UIs based on the tool
    // For this demo, we'll use a generic interface
    modalBody.innerHTML = `
        <div class="tool-interface">
            <div class="input-area">
                <textarea placeholder="Enter your input here..."></textarea>
                <div class="tool-options">
                    <!-- Tool-specific options would go here -->
                </div>
                <button class="btn btn-primary process-btn">Process</button>
            </div>
            
            <div class="output-area">
                <div class="tool-results">
                    <!-- Results would be displayed here -->
                    <p>Results will appear here after processing.</p>
                </div>
                <div class="output-actions">
                    <button class="btn btn-outline"><i class="fas fa-download"></i> Download</button>
                    <button class="btn btn-outline"><i class="fas fa-copy"></i> Copy</button>
                    <button class="btn btn-outline"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listener to process button
    const processBtn = modalBody.querySelector('.process-btn');
    processBtn.addEventListener('click', () => {
        const outputArea = modalBody.querySelector('.output-area');
        const results = modalBody.querySelector('.tool-results');
        
        // Simulate processing
        processBtn.textContent = 'Processing...';
        processBtn.disabled = true;
        
        setTimeout(() => {
            results.innerHTML = `
                <h4>Processed Results</h4>
                <p>Here are the results based on your input. This is a simulation - in the real app, 
                the ${tool.name} would process your actual input.</p>
                <div class="result-sample">
                    <p>Sample output generated by the tool.</p>
                </div>
            `;
            outputArea.style.display = 'block';
            processBtn.textContent = 'Process Again';
            processBtn.disabled = false;
        }, 1500);
    });
    
    toolModal.classList.add('active');
}

function setupDemoToolSelector() {
    // Show first demo area by default
    if (demoAreas.length > 0) {
        demoAreas[0].classList.add('active');
    }
}

function changeDemoTool() {
    const selectedTool = demoToolSelect.value;
    
    demoAreas.forEach(area => {
        area.classList.remove('active');
        if (area.id === `${selectedTool}-demo`) {
            area.classList.add('active');
        }
    });
    
    // Reset output area when changing tools
    outputArea.classList.remove('active');
}

function generateQuiz() {
    // Simulate quiz generation
    generateBtn.textContent = 'Generating...';
    generateBtn.disabled = true;
    
    setTimeout(() => {
        outputArea.classList.add('active');
        generateBtn.textContent = 'Generate Quiz';
        generateBtn.disabled = false;
    }, 1500);
}

function filterTools() {
    const searchTerm = toolSearch.value.toLowerCase();
    const category = toolCategoryFilter.value;
    
    const filteredTools = toolsData.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || tool.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderFilteredTools(filteredTools);
}

function renderFilteredTools(tools) {
    allToolsGrid.innerHTML = '';
    
    if (tools.length === 0) {
        allToolsGrid.innerHTML = '<p class="no-results">No tools found matching your criteria.</p>';
        return;
    }
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">
                <i class="fas ${tool.icon}"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</div>
            <div class="tool-actions">
                <button class="btn btn-try" data-tool="${tool.id}">Try Now</button>
                <i class="far fa-bookmark tool-save"></i>
            </div>
            ${tool.popular ? '<div class="tool-popular">Popular</div>' : ''}
        `;
        
        allToolsGrid.appendChild(toolCard);
    });
    
    // Add event listeners to try buttons
    document.querySelectorAll('.btn-try').forEach(btn => {
        btn.addEventListener('click', () => openToolModal(btn.dataset.tool));
    });
}

function filterToolsByCategory(category) {
    toolCategoryFilter.value = category;
    filterTools();
}

function sortTools() {
    const currentSort = sortToolsBtn.dataset.sort || 'asc';
    const newSort = currentSort === 'asc' ? 'desc' : 'asc';
    
    sortToolsBtn.dataset.sort = newSort;
    sortToolsBtn.innerHTML = `Sort ${newSort === 'asc' ? 'A-Z' : 'Z-A'} <i class="fas fa-sort-alpha-${newSort === 'asc' ? 'down' : 'up'}"></i>`;
    
    const tools = Array.from(document.querySelectorAll('.all-tools-grid .tool-card'));
    tools.sort((a, b) => {
        const nameA = a.querySelector('h3').textContent.toLowerCase();
        const nameB = b.querySelector('h3').textContent.toLowerCase();
        return newSort === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    
    tools.forEach(tool => allToolsGrid.appendChild(tool));
}

function showTestimonial(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    testimonialSlides[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    
    currentTestimonial = index;
}

function showNextTestimonial() {
    let nextIndex = currentTestimonial + 1;
    if (nextIndex >= testimonialSlides.length) nextIndex = 0;
    showTestimonial(nextIndex);
}

function showPrevTestimonial() {
    let prevIndex = currentTestimonial - 1;
    if (prevIndex < 0) prevIndex = testimonialSlides.length - 1;
    showTestimonial(prevIndex);
}

let currentTestimonial = 0;
let testimonialInterval = setInterval(showNextTestimonial, 5000);

// Pause autoplay on hover
document.querySelector('.testimonial-slider').addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.querySelector('.testimonial-slider').addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(showNextTestimonial, 5000);
});

function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }, 1500);
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Simulate login
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Logging in...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Login successful! Welcome back.');
        form.reset();
        submitBtn.textContent = 'Login';
        submitBtn.disabled = false;
        loginModal.classList.remove('active');
    }, 1500);
}

function handleSignupSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Simulate signup
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Creating account...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Account created successfully! Welcome to AI Tools Hub.');
        form.reset();
        submitBtn.textContent = 'Create Account';
        submitBtn.disabled = false;
        signupModal.classList.remove('active');
    }, 1500);
}

function checkPasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Character type checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Update UI
    const strengthBars = document.querySelectorAll('.strength-bar');
    strengthBars.forEach((bar, index) => {
        bar.style.width = index < strength ? '100%' : '0';
        bar.style.backgroundColor = getStrengthColor(strength);
    });
    
    passwordStrengthText.textContent = getStrengthText(strength);
    passwordStrengthText.style.color = getStrengthColor(strength);
}

function getStrengthColor(strength) {
    if (strength <= 2) return '#f56565'; // Weak (red)
    if (strength <= 4) return '#ed8936'; // Medium (orange)
    return '#48bb78'; // Strong (green)
}

function getStrengthText(strength) {
    if (strength <= 2) return 'Weak';
    if (strength <= 4) return 'Medium';
    return 'Strong';
}
