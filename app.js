// Main Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tools
    initTools();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load featured tools
    loadFeaturedTools();
    
    // Load all category tools
    loadCategoryTools();
    
    // Initialize AdSense (already in HTML)
});

// Tools Data
const toolsData = {
    featured: [
        {
            id: 'quiz-generator',
            title: 'Quiz Generator',
            description: 'Create custom quizzes from any text or topic',
            icon: 'fa-question-circle',
            category: 'education',
            tags: ['education', 'quiz', 'test']
        },
        {
            id: 'text-paraphrasing',
            title: 'Text Paraphrasing',
            description: 'Rephrase sentences and paragraphs while keeping the original meaning',
            icon: 'fa-paragraph',
            category: 'writing',
            tags: ['writing', 'editing', 'ai']
        },
        {
            id: 'pdf-to-word',
            title: 'PDF to Word',
            description: 'Convert PDF files to editable Word documents',
            icon: 'fa-file-pdf',
            category: 'file',
            tags: ['converter', 'pdf', 'word']
        },
        {
            id: 'to-do-list',
            title: 'To-Do List Manager',
            description: 'Organize your tasks with this simple to-do list',
            icon: 'fa-tasks',
            category: 'productivity',
            tags: ['productivity', 'tasks', 'organizer']
        },
        {
            id: 'ai-chatbot',
            title: 'AI Chatbot Assistant',
            description: 'Get answers to your questions from our AI assistant',
            icon: 'fa-robot',
            category: 'ai',
            tags: ['ai', 'chatbot', 'assistant']
        }
    ],
    education: [
        {
            id: 'quiz-generator',
            title: 'Quiz Generator',
            description: 'Create custom quizzes from any text or topic',
            icon: 'fa-question-circle',
            tags: ['quiz', 'test', 'education']
        },
        {
            id: 'flashcard-maker',
            title: 'Flashcard Maker',
            description: 'Create digital flashcards for effective memorization',
            icon: 'fa-layer-group',
            tags: ['study', 'memorization', 'education']
        },
        {
            id: 'essay-generator',
            title: 'Essay Generator',
            description: 'Generate structured essay outlines and drafts',
            icon: 'fa-pen-fancy',
            tags: ['writing', 'education', 'essay']
        },
        {
            id: 'math-solver',
            title: 'Math Solver',
            description: 'Solve math problems with step-by-step solutions',
            icon: 'fa-square-root-alt',
            tags: ['math', 'calculator', 'education']
        },
        {
            id: 'language-translator',
            title: 'Language Translator',
            description: 'Translate text between multiple languages',
            icon: 'fa-language',
            tags: ['language', 'translation', 'education']
        },
        {
            id: 'text-summarizer',
            title: 'Text Summarizer',
            description: 'Condense long articles or documents into key points',
            icon: 'fa-file-contract',
            tags: ['study', 'reading', 'education']
        },
        {
            id: 'citation-generator',
            title: 'Citation Generator',
            description: 'Generate citations in APA, MLA, Chicago and other formats',
            icon: 'fa-quote-right',
            tags: ['writing', 'research', 'education']
        },
        {
            id: 'plagiarism-checker',
            title: 'Plagiarism Checker',
            description: 'Check text for potential plagiarism (basic version)',
            icon: 'fa-search',
            tags: ['writing', 'education', 'checker']
        },
        {
            id: 'grammar-checker',
            title: 'Grammar Checker',
            description: 'Identify and correct grammar mistakes in your text',
            icon: 'fa-spell-check',
            tags: ['writing', 'education', 'grammar']
        },
        {
            id: 'study-planner',
            title: 'Study Planner',
            description: 'Create personalized study schedules',
            icon: 'fa-calendar-alt',
            tags: ['planning', 'education', 'organizer']
        },
        {
            id: 'timed-practice-tests',
            title: 'Timed Practice Tests',
            description: 'Take practice tests with time limits',
            icon: 'fa-stopwatch',
            tags: ['test', 'education', 'practice']
        },
        {
            id: 'mind-map-creator',
            title: 'Mind Map Creator',
            description: 'Visualize ideas and concepts with mind maps',
            icon: 'fa-project-diagram',
            tags: ['visual', 'education', 'planning']
        },
        {
            id: 'vocabulary-builder',
            title: 'Vocabulary Builder',
            description: 'Learn new words with definitions and examples',
            icon: 'fa-book-open',
            tags: ['language', 'education', 'vocabulary']
        },
        {
            id: 'lecture-notes-organizer',
            title: 'Lecture Notes Organizer',
            description: 'Organize and structure your lecture notes',
            icon: 'fa-clipboard-list',
            tags: ['notes', 'education', 'organizer']
        },
        {
            id: 'homework-helper',
            title: 'Homework Helper',
            description: 'Get guidance on homework problems',
            icon: 'fa-book-reader',
            tags: ['homework', 'education', 'help']
        },
        {
            id: 'concept-explanation',
            title: 'Concept Explanation AI',
            description: 'Get simple explanations for complex concepts',
            icon: 'fa-lightbulb',
            tags: ['education', 'learning', 'ai']
        },
        {
            id: 'reading-comprehension',
            title: 'Reading Comprehension Assistant',
            description: 'Improve reading comprehension with guided questions',
            icon: 'fa-book',
            tags: ['reading', 'education', 'comprehension']
        },
        {
            id: 'video-lecture-transcriber',
            title: 'Video Lecture Transcriber',
            description: 'Convert video lecture audio to text (requires upload)',
            icon: 'fa-closed-captioning',
            tags: ['video', 'education', 'transcription']
        },
        {
            id: 'formula-sheet-creator',
            title: 'Formula Sheet Creator',
            description: 'Create organized formula sheets for math and science',
            icon: 'fa-square-root-alt',
            tags: ['math', 'education', 'formulas']
        },
        {
            id: 'research-paper-outline',
            title: 'Research Paper Outline Tool',
            description: 'Generate structured outlines for research papers',
            icon: 'fa-file-alt',
            tags: ['research', 'writing', 'education']
        }
    ],
    writing: [
        {
            id: 'text-paraphrasing',
            title: 'Text Paraphrasing',
            description: 'Rephrase sentences and paragraphs while keeping the original meaning',
            icon: 'fa-paragraph',
            tags: ['writing', 'editing', 'ai']
        },
        {
            id: 'spelling-checker',
            title: 'Spelling Checker',
            description: 'Identify and correct spelling mistakes in your text',
            icon: 'fa-spell-check',
            tags: ['writing', 'editing', 'spelling']
        },
        {
            id: 'resume-builder',
            title: 'Resume Builder',
            description: 'Create professional resumes with templates',
            icon: 'fa-file-user',
            tags: ['writing', 'career', 'resume']
        },
        {
            id: 'cover-letter-creator',
            title: 'Cover Letter Creator',
            description: 'Generate customized cover letters for job applications',
            icon: 'fa-envelope-open-text',
            tags: ['writing', 'career', 'cover-letter']
        },
        {
            id: 'creative-writing-prompter',
            title: 'Creative Writing Prompter',
            description: 'Get inspiration with creative writing prompts',
            icon: 'fa-magic',
            tags: ['writing', 'creative', 'ideas']
        },
        {
            id: 'text-to-speech',
            title: 'Text-to-Speech Reader',
            description: 'Convert written text to spoken audio',
            icon: 'fa-volume-up',
            tags: ['writing', 'accessibility', 'audio']
        },
        {
            id: 'speech-to-text',
            title: 'Speech-to-Text Converter',
            description: 'Convert spoken words to written text (browser-based)',
            icon: 'fa-microphone',
            tags: ['writing', 'dictation', 'audio']
        },
        {
            id: 'email-template-builder',
            title: 'Email Template Builder',
            description: 'Create professional email templates',
            icon: 'fa-envelope',
            tags: ['writing', 'business', 'email']
        },
        {
            id: 'blog-post-planner',
            title: 'Blog Post Planner',
            description: 'Plan and structure your blog posts',
            icon: 'fa-blog',
            tags: ['writing', 'blogging', 'planning']
        },
        {
            id: 'seo-content-optimizer',
            title: 'SEO Content Optimizer',
            description: 'Optimize your content for search engines',
            icon: 'fa-search-plus',
            tags: ['writing', 'seo', 'marketing']
        },
        {
            id: 'article-rewriter',
            title: 'Article Rewriter',
            description: 'Rewrite articles while maintaining the original meaning',
            icon: 'fa-edit',
            tags: ['writing', 'editing', 'ai']
        },
        {
            id: 'proofreading-assistant',
            title: 'Proofreading Assistant',
            description: 'Get suggestions for improving your writing',
            icon: 'fa-highlighter',
            tags: ['writing', 'editing', 'proofreading']
        },
        {
            id: 'character-count',
            title: 'Character Count & Readability Analyzer',
            description: 'Analyze text for character count, word count and readability',
            icon: 'fa-font',
            tags: ['writing', 'analysis', 'stats']
        },
        {
            id: 'formatting-cleanup',
            title: 'Formatting Cleanup Tool',
            description: 'Clean up messy formatting in your text',
            icon: 'fa-broom',
            tags: ['writing', 'editing', 'formatting']
        },
        {
            id: 'markdown-editor',
            title: 'Markdown Editor',
            description: 'Write and preview markdown formatted text',
            icon: 'fa-code',
            tags: ['writing', 'markdown', 'editor']
        },
        {
            id: 'collaborative-writing',
            title: 'Collaborative Writing Workspace',
            description: 'Real-time collaborative writing environment',
            icon: 'fa-users',
            tags: ['writing', 'collaboration', 'real-time']
        },
        {
            id: 'auto-correct',
            title: 'Auto-correct and Suggestion Tool',
            description: 'Automatically correct common writing mistakes',
            icon: 'fa-check-circle',
            tags: ['writing', 'editing', 'auto-correct']
        },
        {
            id: 'style-tone-analyzer',
            title: 'Style and Tone Analyzer',
            description: 'Analyze the style and tone of your writing',
            icon: 'fa-chart-pie',
            tags: ['writing', 'analysis', 'style']
        },
        {
            id: 'text-comparison',
            title: 'Text Comparison Tool',
            description: 'Compare two texts to find differences',
            icon: 'fa-columns',
            tags: ['writing', 'editing', 'comparison']
        },
        {
            id: 'literature-quote-finder',
            title: 'Literature Quote Finder',
            description: 'Find relevant quotes from literature',
            icon: 'fa-quote-left',
            tags: ['writing', 'literature', 'quotes']
        }
    ],
    file: [
        {
            id: 'pdf-to-word',
            title: 'PDF to Word',
            description: 'Convert PDF files to editable Word documents',
            icon: 'fa-file-pdf',
            tags: ['converter', 'pdf', 'word']
        },
        {
            id: 'word-to-pdf',
            title: 'Word to PDF',
            description: 'Convert Word documents to PDF files',
            icon: 'fa-file-word',
            tags: ['converter', 'word', 'pdf']
        },
        {
            id: 'excel-to-csv',
            title: 'Excel to CSV',
            description: 'Convert Excel files to CSV format',
            icon: 'fa-file-excel',
            tags: ['converter', 'excel', 'csv']
        },
        {
            id: 'image-to-pdf',
            title: 'Image to PDF',
            description: 'Convert images to PDF documents',
            icon: 'fa-file-image',
            tags: ['converter', 'image', 'pdf']
        },
        {
            id: 'audio-to-text',
            title: 'Audio to Text (Transcription)',
            description: 'Transcribe audio files to text (browser-based)',
            icon: 'fa-file-audio',
            tags: ['converter', 'audio', 'text']
        },
        {
            id: 'video-to-audio',
            title: 'Video to Audio (MP3)',
            description: 'Extract audio from video files',
            icon: 'fa-file-video',
            tags: ['converter', 'video', 'audio']
        },
        {
            id: 'image-format-converter',
            title: 'Image Format Converter',
            description: 'Convert between JPG, PNG, GIF and other image formats',
            icon: 'fa-file-image',
            tags: ['converter', 'image', 'format']
        },
        {
            id: 'text-to-pdf',
            title: 'Text File to PDF',
            description: 'Convert text files to PDF documents',
            icon: 'fa-file-alt',
            tags: ['converter', 'text', 'pdf']
        },
        {
            id: 'ppt-to-pdf',
            title: 'PowerPoint to PDF',
            description: 'Convert PowerPoint presentations to PDF',
            icon: 'fa-file-powerpoint',
            tags: ['converter', 'powerpoint', 'pdf']
        },
        {
            id: 'pdf-compressor',
            title: 'PDF Compressor',
            description: 'Reduce PDF file size while maintaining quality',
            icon: 'fa-file-pdf',
            tags: ['pdf', 'compression', 'optimizer']
        },
        {
            id: 'epub-to-pdf',
            title: 'ePub to PDF',
            description: 'Convert ePub eBooks to PDF format',
            icon: 'fa-book-open',
            tags: ['converter', 'epub', 'pdf']
        },
        {
            id: 'csv-to-json',
            title: 'CSV to JSON Converter',
            description: 'Convert CSV data to JSON format',
            icon: 'fa-file-csv',
            tags: ['converter', 'csv', 'json']
        },
        {
            id: 'pdf-merger',
            title: 'PDF Merger & Splitter',
            description: 'Merge multiple PDFs or split PDF pages',
            icon: 'fa-file-pdf',
            tags: ['pdf', 'merge', 'split']
        },
        {
            id: 'audio-format-converter',
            title: 'Audio Format Converter',
            description: 'Convert between MP3, WAV, AAC and other audio formats',
            icon: 'fa-file-audio',
            tags: ['converter', 'audio', 'format']
        },
        {
            id: 'video-format-converter',
            title: 'Video Format Converter',
            description: 'Convert between MP4, MOV, AVI and other video formats',
            icon: 'fa-file-video',
            tags: ['converter', 'video', 'format']
        },
        {
            id: 'image-to-text',
            title: 'Online OCR (Image to Text)',
            description: 'Extract text from images using optical character recognition',
            icon: 'fa-image',
            tags: ['ocr', 'image', 'text']
        },
        {
            id: 'file-size-reducer',
            title: 'File Size Reducer',
            description: 'Compress files to reduce their size',
            icon: 'fa-compress-alt',
            tags: ['compression', 'optimizer', 'file']
        },
        {
            id: 'url-to-pdf',
            title: 'URL to PDF Capture',
            description: 'Convert web pages to PDF documents',
            icon: 'fa-globe',
            tags: ['converter', 'url', 'pdf']
        },
        {
            id: 'qr-code-generator',
            title: 'Barcode/QR Code Generator',
            description: 'Create QR codes and barcodes from text or URLs',
            icon: 'fa-qrcode',
            tags: ['generator', 'qr', 'barcode']
        },
        {
            id: 'subtitle-converter',
            title: 'Subtitle File Converter',
            description: 'Convert between subtitle file formats (SRT, VTT, etc.)',
            icon: 'fa-closed-captioning',
            tags: ['converter', 'subtitle', 'video']
        }
    ],
    productivity: [
        {
            id: 'to-do-list',
            title: 'To-Do List Manager',
            description: 'Organize your tasks with this simple to-do list',
            icon: 'fa-tasks',
            tags: ['productivity', 'tasks', 'organizer']
        },
        {
            id: 'note-taking',
            title: 'Note Taking App',
            description: 'Take and organize notes in a simple interface',
            icon: 'fa-sticky-note',
            tags: ['productivity', 'notes', 'organizer']
        },
        {
            id: 'calendar',
            title: 'Calendar & Event Planner',
            description: 'Manage your schedule with this calendar tool',
            icon: 'fa-calendar',
            tags: ['productivity', 'calendar', 'planning']
        },
        {
            id: 'time-tracking',
            title: 'Time Tracking & Pomodoro Timer',
            description: 'Track your time and use the Pomodoro technique',
            icon: 'fa-clock',
            tags: ['productivity', 'time', 'timer']
        },
        {
            id: 'habit-tracker',
            title: 'Habit Tracker',
            description: 'Build and track new habits',
            icon: 'fa-check-circle',
            tags: ['productivity', 'habits', 'tracking']
        },
        {
            id: 'password-generator',
            title: 'Password Generator',
            description: 'Create strong, secure passwords',
            icon: 'fa-key',
            tags: ['security', 'password', 'generator']
        },
        {
            id: 'password-manager',
            title: 'Password Manager (front-end demo)',
            description: 'Demo interface for managing passwords (local storage only)',
            icon: 'fa-lock',
            tags: ['security', 'password', 'manager']
        },
        {
            id: 'clipboard-manager',
            title: 'Clipboard History Manager',
            description: 'Keep track of your clipboard history (browser-based)',
            icon: 'fa-clipboard',
            tags: ['productivity', 'clipboard', 'history']
        },
        {
            id: 'screen-recorder',
            title: 'Screen Recorder (UI placeholder)',
            description: 'Interface for screen recording (requires browser extension)',
            icon: 'fa-video',
            tags: ['productivity', 'recording', 'screen']
        },
        {
            id: 'task-prioritization',
            title: 'Task Prioritization Assistant',
            description: 'Help prioritize your tasks using the Eisenhower Matrix',
            icon: 'fa-list-ol',
            tags: ['productivity', 'tasks', 'prioritization']
        },
        {
            id: 'meeting-scheduler',
            title: 'Meeting Scheduler',
            description: 'Schedule and plan meetings with time zone support',
            icon: 'fa-calendar-check',
            tags: ['productivity', 'meetings', 'scheduling']
        },
        {
            id: 'contact-manager',
            title: 'Contact Manager',
            description: 'Organize and manage your contacts',
            icon: 'fa-address-book',
            tags: ['productivity', 'contacts', 'organizer']
        },
        {
            id: 'budget-tracker',
            title: 'Budget Tracker',
            description: 'Track your income and expenses',
            icon: 'fa-wallet',
            tags: ['productivity', 'finance', 'budget']
        },
        {
            id: 'expense-splitter',
            title: 'Expense Split Calculator',
            description: 'Calculate how to split expenses among friends',
            icon: 'fa-money-bill-wave',
            tags: ['productivity', 'finance', 'calculator']
        },
        {
            id: 'conversion-calculators',
            title: 'Conversion Calculators',
            description: 'Convert between units, measurements and more',
            icon: 'fa-calculator',
            tags: ['productivity', 'conversion', 'calculator']
        },
        {
            id: 'currency-converter',
            title: 'Currency Converter',
            description: 'Convert between world currencies with up-to-date rates',
            icon: 'fa-money-bill-alt',
            tags: ['productivity', 'finance', 'converter']
        },
        {
            id: 'weather-widget',
            title: 'Weather Forecast Widget',
            description: 'Check current weather and forecasts',
            icon: 'fa-cloud-sun',
            tags: ['productivity', 'weather', 'forecast']
        },
        {
            id: 'file-encryption',
            title: 'File Encryption & Decryption (UI only)',
            description: 'Interface for file encryption (client-side demo)',
            icon: 'fa-lock',
            tags: ['security', 'encryption', 'files']
        },
        {
            id: 'backup-reminder',
            title: 'Backup Reminder & Tracker',
            description: 'Set reminders for important backups',
            icon: 'fa-save',
            tags: ['productivity', 'backup', 'reminder']
        },
        {
            id: 'url-shortener',
            title: 'URL Shortener',
            description: 'Create shortened URLs for sharing',
            icon: 'fa-link',
            tags: ['productivity', 'url', 'sharing']
        }
    ],
    ai: [
        {
            id: 'ai-chatbot',
            title: 'AI Chatbot Assistant',
            description: 'Get answers to your questions from our AI assistant',
            icon: 'fa-robot',
            tags: ['ai', 'chatbot', 'assistant']
        },
        {
            id: 'image-generation',
            title: 'Image Generation Tool',
            description: 'Generate images from text prompts using AI',
            icon: 'fa-image',
            tags: ['ai', 'image', 'generator']
        },
        {
            id: 'logo-maker',
            title: 'Logo Maker',
            description: 'Create professional logos with AI assistance',
            icon: 'fa-palette',
            tags: ['ai', 'design', 'logo']
        },
        {
            id: 'infographic-generator',
            title: 'Infographic Generator',
            description: 'Generate infographics from data or text',
            icon: 'fa-chart-bar',
            tags: ['ai', 'design', 'infographic']
        },
        {
            id: 'social-media-post',
            title: 'Social Media Post Creator',
            description: 'Create engaging social media posts with AI',
            icon: 'fa-share-alt',
            tags: ['ai', 'social', 'design']
        },
        {
            id: 'video-caption-generator',
            title: 'Video Caption Generator',
            description: 'Generate captions for videos automatically',
            icon: 'fa-closed-captioning',
            tags: ['ai', 'video', 'accessibility']
        },
        {
            id: 'keyword-research',
            title: 'Keyword Research Tool',
            description: 'Find relevant keywords for SEO and content',
            icon: 'fa-search',
            tags: ['ai', 'seo', 'keywords']
        },
        {
            id: 'code-snippet-generator',
            title: 'Code Snippet Generator',
            description: 'Generate code snippets in various languages',
            icon: 'fa-code',
            tags: ['ai', 'coding', 'developer']
        },
        {
            id: 'api-tester',
            title: 'API Tester & Explorer',
            description: 'Test and explore APIs with a simple interface',
            icon: 'fa-plug',
            tags: ['ai', 'api', 'developer']
        },
        {
            id: 'remote-desktop',
            title: 'Remote Desktop Client (UI stub)',
            description: 'Interface for remote desktop connections',
            icon: 'fa-desktop',
            tags: ['ai', 'remote', 'productivity']
        },
        {
            id: 'screenshot-capture',
            title: 'Screenshot Capture with Annotation',
            description: 'Capture and annotate screenshots (browser-based)',
            icon: 'fa-camera',
            tags: ['ai', 'screenshot', 'annotation']
        },
        {
            id: 'voice-assistant',
            title: 'Voice Assistant Integration (UI only)',
            description: 'Interface for voice assistant integration',
            icon: 'fa-microphone-alt',
            tags: ['ai', 'voice', 'assistant']
        },
        {
            id: 'pronunciation-tester',
            title: 'Language Pronunciation Tester',
            description: 'Test and improve your pronunciation with AI feedback',
            icon: 'fa-language',
            tags: ['ai', 'language', 'pronunciation']
        },
        {
            id: 'resume-keyword-optimizer',
            title: 'AI-Powered Resume Keyword Optimizer',
            description: 'Optimize your resume with relevant keywords',
            icon: 'fa-file-user',
            tags: ['ai', 'career', 'resume']
        },
        {
            id: 'text-emotion-analyzer',
            title: 'Text Emotion Analyzer',
            description: 'Analyze the emotional tone of written text',
            icon: 'fa-smile',
            tags: ['ai', 'analysis', 'sentiment']
        },
        {
            id: 'document-scanner',
            title: 'Document Scanner (with mobile camera upload)',
            description: 'Scan documents using your device camera',
            icon: 'fa-file-upload',
            tags: ['ai', 'scanning', 'documents']
        },
        {
            id: 'email-spam-checker',
            title: 'Email Spam Score Checker',
            description: 'Check how likely your email is to be marked as spam',
            icon: 'fa-envelope',
            tags: ['ai', 'email', 'spam']
        },
        {
            id: 'webpage-speed-test',
            title: 'Webpage Speed Test Tool',
            description: 'Test the loading speed of web pages',
            icon: 'fa-tachometer-alt',
            tags: ['ai', 'web', 'performance']
        },
        {
            id: 'link-checker',
            title: 'Link Checker & Validator',
            description: 'Check links for validity and status',
            icon: 'fa-link',
            tags: ['ai', 'web', 'validation']
        },
        {
            id: 'gdpr-compliance',
            title: 'GDPR Compliance Helper',
            description: 'Check your website for GDPR compliance issues',
            icon: 'fa-shield-alt',
            tags: ['ai', 'legal', 'compliance']
        },
        {
            id: 'accessibility-checker',
            title: 'Website Accessibility Checker',
            description: 'Check web pages for accessibility issues',
            icon: 'fa-universal-access',
            tags: ['ai', 'web', 'accessibility']
        },
        {
            id: 'browser-extension-guide',
            title: 'Browser Extension Installer Guide',
            description: 'Step-by-step guides for installing browser extensions',
            icon: 'fa-puzzle-piece',
            tags: ['ai', 'browser', 'guide']
        },
        {
            id: 'online-poll',
            title: 'Online Poll & Survey Creator',
            description: 'Create polls and surveys to gather feedback',
            icon: 'fa-poll',
            tags: ['ai', 'survey', 'feedback']
        },
        {
            id: 'collaborative-whiteboard',
            title: 'Collaborative Whiteboard',
            description: 'Real-time collaborative whiteboard for teams',
            icon: 'fa-chalkboard',
            tags: ['ai', 'collaboration', 'whiteboard']
        },
        {
            id: 'ai-music-composer',
            title: 'AI Music Composer (demo)',
            description: 'Generate simple music compositions with AI',
            icon: 'fa-music',
            tags: ['ai', 'music', 'generator']
        }
    ]
};

// Initialize Tools
function initTools() {
    // Initialize tool functions
    window.tools = {
        // Education Tools
        'quiz-generator': initQuizGenerator,
        'flashcard-maker': initFlashcardMaker,
        'essay-generator': initEssayGenerator,
        'math-solver': initMathSolver,
        'language-translator': initLanguageTranslator,
        'text-summarizer': initTextSummarizer,
        'citation-generator': initCitationGenerator,
        'plagiarism-checker': initPlagiarismChecker,
        'grammar-checker': initGrammarChecker,
        'study-planner': initStudyPlanner,
        'timed-practice-tests': initTimedPracticeTests,
        'mind-map-creator': initMindMapCreator,
        'vocabulary-builder': initVocabularyBuilder,
        'lecture-notes-organizer': initLectureNotesOrganizer,
        'homework-helper': initHomeworkHelper,
        'concept-explanation': initConceptExplanation,
        'reading-comprehension': initReadingComprehension,
        'video-lecture-transcriber': initVideoLectureTranscriber,
        'formula-sheet-creator': initFormulaSheetCreator,
        'research-paper-outline': initResearchPaperOutline,
        
        // Writing Tools
        'text-paraphrasing': initTextParaphrasing,
        'spelling-checker': initSpellingChecker,
        'resume-builder': initResumeBuilder,
        'cover-letter-creator': initCoverLetterCreator,
        'creative-writing-prompter': initCreativeWritingPrompter,
        'text-to-speech': initTextToSpeech,
        'speech-to-text': initSpeechToText,
        'email-template-builder': initEmailTemplateBuilder,
        'blog-post-planner': initBlogPostPlanner,
        'seo-content-optimizer': initSeoContentOptimizer,
        'article-rewriter': initArticleRewriter,
        'proofreading-assistant': initProofreadingAssistant,
        'character-count': initCharacterCount,
        'formatting-cleanup': initFormattingCleanup,
        'markdown-editor': initMarkdownEditor,
        'collaborative-writing': initCollaborativeWriting,
        'auto-correct': initAutoCorrect,
        'style-tone-analyzer': initStyleToneAnalyzer,
        'text-comparison': initTextComparison,
        'literature-quote-finder': initLiteratureQuoteFinder,
        
        // File Tools
        'pdf-to-word': initPdfToWord,
        'word-to-pdf': initWordToPdf,
        'excel-to-csv': initExcelToCsv,
        'image-to-pdf': initImageToPdf,
        'audio-to-text': initAudioToText,
        'video-to-audio': initVideoToAudio,
        'image-format-converter': initImageFormatConverter,
        'text-to-pdf': initTextToPdf,
        'ppt-to-pdf': initPptToPdf,
        'pdf-compressor': initPdfCompressor,
        'epub-to-pdf': initEpubToPdf,
        'csv-to-json': initCsvToJson,
        'pdf-merger': initPdfMerger,
        'audio-format-converter': initAudioFormatConverter,
        'video-format-converter': initVideoFormatConverter,
        'image-to-text': initImageToText,
        'file-size-reducer': initFileSizeReducer,
        'url-to-pdf': initUrlToPdf,
        'qr-code-generator': initQrCodeGenerator,
        'subtitle-converter': initSubtitleConverter,
        
        // Productivity Tools
        'to-do-list': initTodoList,
        'note-taking': initNoteTaking,
        'calendar': initCalendar,
        'time-tracking': initTimeTracking,
        'habit-tracker': initHabitTracker,
        'password-generator': initPasswordGenerator,
        'password-manager': initPasswordManager,
        'clipboard-manager': initClipboardManager,
        'screen-recorder': initScreenRecorder,
        'task-prioritization': initTaskPrioritization,
        'meeting-scheduler': initMeetingScheduler,
        'contact-manager': initContactManager,
        'budget-tracker': initBudgetTracker,
        'expense-splitter': initExpenseSplitter,
        'conversion-calculators': initConversionCalculators,
        'currency-converter': initCurrencyConverter,
        'weather-widget': initWeatherWidget,
        'file-encryption': initFileEncryption,
        'backup-reminder': initBackupReminder,
        'url-shortener': initUrlShortener,
        
        // AI Tools
        'ai-chatbot': initAiChatbot,
        'image-generation': initImageGeneration,
        'logo-maker': initLogoMaker,
        'infographic-generator': initInfographicGenerator,
        'social-media-post': initSocialMediaPost,
        'video-caption-generator': initVideoCaptionGenerator,
        'keyword-research': initKeywordResearch,
        'code-snippet-generator': initCodeSnippetGenerator,
        'api-tester': initApiTester,
        'remote-desktop': initRemoteDesktop,
        'screenshot-capture': initScreenshotCapture,
        'voice-assistant': initVoiceAssistant,
        'pronunciation-tester': initPronunciationTester,
        'resume-keyword-optimizer': initResumeKeywordOptimizer,
        'text-emotion-analyzer': initTextEmotionAnalyzer,
        'document-scanner': initDocumentScanner,
        'email-spam-checker': initEmailSpamChecker,
        'webpage-speed-test': initWebpageSpeedTest,
        'link-checker': initLinkChecker,
        'gdpr-compliance': initGdprCompliance,
        'accessibility-checker': initAccessibilityChecker,
        'browser-extension-guide': initBrowserExtensionGuide,
        'online-poll': initOnlinePoll,
        'collaborative-whiteboard': initCollaborativeWhiteboard,
        'ai-music-composer': initAiMusicComposer
    };
}

// Set up event listeners
function setupEventListeners() {
    // Mobile menu toggle
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
    
    // Search functionality
    document.querySelector('.search-box button').addEventListener('click', searchTools);
    document.querySelector('.search-box input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchTools();
        }
    });
    
    // Modal close button
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Execute tool button
    document.getElementById('execute-tool').addEventListener('click', executeTool);
    
    // Reset tool button
    document.getElementById('reset-tool').addEventListener('click', resetTool);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('tool-modal')) {
            closeModal();
        }
    });
}

// Load featured tools
function loadFeaturedTools() {
    const featuredGrid = document.querySelector('.featured-tools .tools-grid');
    featuredGrid.innerHTML = '';
    
    toolsData.featured.forEach(tool => {
        const toolCard = createToolCard(tool);
        featuredGrid.appendChild(toolCard);
    });
}

// Load category tools
function loadCategoryTools() {
    const categories = ['education', 'writing', 'file', 'productivity', 'ai'];
    
    categories.forEach(category => {
        const categoryGrid = document.getElementById(`${category}-tools`);
        if (categoryGrid) {
            categoryGrid.innerHTML = '';
            
            toolsData[category].forEach(tool => {
                const toolCard = createToolCard(tool);
                categoryGrid.appendChild(toolCard);
            });
        }
    });
}

// Create tool card element
function createToolCard(tool) {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';
    toolCard.setAttribute('data-tool-id', tool.id);
    
    let tagsHtml = '';
    if (tool.tags && tool.tags.length > 0) {
        tagsHtml = '<div class="tool-tags">';
        tool.tags.slice(0, 3).forEach(tag => {
            tagsHtml += `<span class="tool-tag">${tag}</span>`;
        });
        tagsHtml += '</div>';
    }
    
    toolCard.innerHTML = `
        <div class="tool-icon">
            <i class="fas ${tool.icon}"></i>
        </div>
        <h3>${tool.title}</h3>
        <p>${tool.description}</p>
        ${tagsHtml}
    `;
    
    toolCard.addEventListener('click', function() {
        openToolModal(tool.id);
    });
    
    return toolCard;
}

// Search tools
function searchTools() {
    const searchTerm = document.querySelector('.search-box input').value.toLowerCase();
    if (!searchTerm) return;
    
    // Combine all tools from all categories
    const allTools = [];
    Object.keys(toolsData).forEach(category => {
        if (category !== 'featured') {
            allTools.push(...toolsData[category]);
        }
    });
    
    // Filter tools based on search term
    const filteredTools = allTools.filter(tool => 
        tool.title.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm) ||
        (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
    
    // Display search results
    const featuredSection = document.querySelector('.featured-tools');
    featuredSection.innerHTML = `
        <h2>Search Results for "${searchTerm}"</h2>
        <div class="tools-grid" id="search-results"></div>
    `;
    
    const searchResultsGrid = document.getElementById('search-results');
    if (filteredTools.length > 0) {
        filteredTools.forEach(tool => {
            const toolCard = createToolCard(tool);
            searchResultsGrid.appendChild(toolCard);
        });
    } else {
        searchResultsGrid.innerHTML = '<p class="no-results">No tools found matching your search.</p>';
    }
    
    // Scroll to results
    featuredSection.scrollIntoView({ behavior: 'smooth' });
}

// Open tool modal
function openToolModal(toolId) {
    const tool = findToolById(toolId);
    if (!tool) return;
    
    document.getElementById('modal-title').textContent = tool.title;
    document.getElementById('modal-description').textContent = tool.description;
    
    // Show loading spinner
    showLoading();
    
    // Load tool content
    setTimeout(() => {
        if (window.tools[toolId]) {
            window.tools[toolId]();
        } else {
            document.getElementById('modal-body').innerHTML = `
                <div class="alert">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>This tool is currently under development. Please check back later.</p>
                </div>
            `;
        }
        
        // Hide loading spinner
        hideLoading();
        
        // Show modal
        document.getElementById('tool-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 500);
}

// Find tool by ID
function findToolById(toolId) {
    for (const category in toolsData) {
        const foundTool = toolsData[category].find(tool => tool.id === toolId);
        if (foundTool) return foundTool;
    }
    return null;
}

// Close modal
function closeModal() {
    document.getElementById('tool-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    resetTool();
}

// Execute tool
function executeTool() {
    const toolId = document.querySelector('.modal-content').getAttribute('data-tool-id');
    if (toolId && window.tools[`${toolId}Execute`]) {
        showLoading();
        setTimeout(() => {
            window.tools[`${toolId}Execute`]();
            hideLoading();
        }, 500);
    }
}

// Reset tool
function resetTool() {
    const toolId = document.querySelector('.modal-content').getAttribute('data-tool-id');
    if (toolId && window.tools[`${toolId}Reset`]) {
        window.tools[`${toolId}Reset`]();
    }
}

// Show loading spinner
function showLoading() {
    document.getElementById('loading-spinner').style.display = 'flex';
}

// Hide loading spinner
function hideLoading() {
    document.getElementById('loading-spinner').style.display = 'none';
}

/* ====================== */
/* TOOL IMPLEMENTATIONS  */
/* ====================== */

// Education Tools
function initQuizGenerator() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'quiz-generator');
    
    document.getElementById('modal-body').innerHTML = `
        <div class="tool-options">
            <div class="tool-option">
                <label for="quiz-topic">Topic or Subject:</label>
                <input type="text" id="quiz-topic" placeholder="Enter the topic for your quiz">
            </div>
            <div class="tool-option">
                <label for="quiz-level">Difficulty Level:</label>
                <select id="quiz-level">
                    <option value="easy">Easy</option>
                    <option value="medium" selected>Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div class="tool-option">
                <label for="quiz-questions">Number of Questions:</label>
                <input type="number" id="quiz-questions" min="1" max="20" value="10">
            </div>
            <div class="tool-option">
                <label for="quiz-type">Question Type:</label>
                <select id="quiz-type">
                    <option value="multiple-choice" selected>Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="short-answer">Short Answer</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>
        </div>
        <div class="tool-output" id="quiz-output" style="display:none;">
            <h3>Generated Quiz</h3>
            <div id="quiz-questions-container"></div>
        </div>
    `;
}

function quizGeneratorExecute() {
    const topic = document.getElementById('quiz-topic').value;
    const level = document.getElementById('quiz-level').value;
    const questions = document.getElementById('quiz-questions').value;
    const type = document.getElementById('quiz-type').value;
    
    if (!topic) {
        alert('Please enter a topic for your quiz.');
        return;
    }
    
    // Simulate quiz generation (in a real app, this would call an API)
    const quizOutput = document.getElementById('quiz-output');
    quizOutput.style.display = 'block';
    
    const container = document.getElementById('quiz-questions-container');
    container.innerHTML = '<p>Generating quiz questions about ' + topic + '...</p>';
    
    setTimeout(() => {
        let quizHtml = `<h4>Quiz: ${topic} (${level} level, ${questions} ${type} questions)</h4>`;
        
        for (let i = 1; i <= questions; i++) {
            quizHtml += `
                <div class="quiz-question">
                    <p><strong>Question ${i}:</strong> Sample question about ${topic}?</p>
                    <div class="quiz-options">
                        <label><input type="radio" name="q${i}" value="a"> Option A</label><br>
                        <label><input type="radio" name="q${i}" value="b"> Option B</label><br>
                        <label><input type="radio" name="q${i}" value="c"> Option C</label><br>
                        <label><input type="radio" name="q${i}" value="d"> Option D</label>
                    </div>
                </div>
            `;
        }
        
        quizHtml += `<button class="btn primary" id="submit-quiz">Submit Quiz</button>`;
        container.innerHTML = quizHtml;
        
        document.getElementById('submit-quiz').addEventListener('click', function() {
            alert('Quiz submitted! (This is a demo. In a real app, answers would be graded.)');
        });
    }, 1500);
}

function initFlashcardMaker() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'flashcard-maker');
    
    document.getElementById('modal-body').innerHTML = `
        <div class="tool-options">
            <div class="tool-option">
                <label for="flashcard-set-name">Flashcard Set Name:</label>
                <input type="text" id="flashcard-set-name" placeholder="Enter a name for this flashcard set">
            </div>
            <div class="tool-option">
                <label for="flashcard-count">Number of Flashcards:</label>
                <input type="number" id="flashcard-count" min="1" max="50" value="10">
            </div>
        </div>
        <div id="flashcard-inputs"></div>
        <button class="btn primary" id="add-flashcards">Generate Flashcards</button>
        <div class="tool-output" id="flashcard-output" style="display:none; margin-top:20px;">
            <h3>Your Flashcards</h3>
            <div id="flashcard-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;"></div>
        </div>
    `;
    
    document.getElementById('flashcard-count').addEventListener('change', function() {
        const count = parseInt(this.value);
        const container = document.getElementById('flashcard-inputs');
        container.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            container.innerHTML += `
                <div class="flashcard-input-group" style="margin-bottom: 15px;">
                    <h4>Flashcard ${i}</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <label for="fc-front-${i}">Front:</label>
                            <textarea id="fc-front-${i}" class="tool-input" rows="2" placeholder="Term or question"></textarea>
                        </div>
                        <div>
                            <label for="fc-back-${i}">Back:</label>
                            <textarea id="fc-back-${i}" class="tool-input" rows="2" placeholder="Definition or answer"></textarea>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    document.getElementById('add-flashcards').addEventListener('click', function() {
        const setName = document.getElementById('flashcard-set-name').value;
        const count = parseInt(document.getElementById('flashcard-count').value);
        
        if (!setName) {
            alert('Please enter a name for your flashcard set.');
            return;
        }
        
        const output = document.getElementById('flashcard-output');
        output.style.display = 'block';
        
        const container = document.getElementById('flashcard-container');
        container.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            const front = document.getElementById(`fc-front-${i}`).value || `Term ${i}`;
            const back = document.getElementById(`fc-back-${i}`).value || `Definition ${i}`;
            
            const card = document.createElement('div');
            card.className = 'flashcard';
            card.style.border = '1px solid #ddd';
            card.style.borderRadius = '8px';
            card.style.padding = '15px';
            card.style.backgroundColor = '#fff';
            card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            card.style.position = 'relative';
            card.style.minHeight = '150px';
            card.style.overflow = 'hidden';
            
            card.innerHTML = `
                <div class="flashcard-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transition: transform 0.6s; transform: rotateY(0deg); padding: 15px;">
                    <h4 style="margin-bottom: 10px;">${front}</h4>
                    <p style="color: #666;">Click to flip</p>
                </div>
                <div class="flashcard-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transition: transform 0.6s; transform: rotateY(180deg); padding: 15px; background-color: #f8f9fa;">
                    <h4 style="margin-bottom: 10px;">Answer</h4>
                    <p>${back}</p>
                </div>
            `;
            
            card.addEventListener('click', function() {
                const front = this.querySelector('.flashcard-front');
                const back = this.querySelector('.flashcard-back');
                
                if (front.style.transform === 'rotateY(0deg)') {
                    front.style.transform = 'rotateY(180deg)';
                    back.style.transform = 'rotateY(360deg)';
                } else {
                    front.style.transform = 'rotateY(0deg)';
                    back.style.transform = 'rotateY(180deg)';
                }
            });
            
            container.appendChild(card);
        }
    });
}

// Initialize other education tools (simplified implementations)
function initEssayGenerator() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'essay-generator');
    document.getElementById('modal-body').innerHTML = `
        <div class="tool-options">
            <div class="tool-option">
                <label for="essay-topic">Essay Topic:</label>
                <input type="text" id="essay-topic" placeholder="Enter your essay topic">
            </div>
            <div class="tool-option">
                <label for="essay-type">Essay Type:</label>
                <select id="essay-type">
                    <option value="argumentative">Argumentative</option>
                    <option value="descriptive">Descriptive</option>
                    <option value="narrative">Narrative</option>
                    <option value="expository">Expository</option>
                    <option value="persuasive">Persuasive</option>
                </select>
            </div>
            <div class="tool-option">
                <label for="essay-length">Length:</label>
                <select id="essay-length">
                    <option value="short">Short (300 words)</option>
                    <option value="medium" selected>Medium (500 words)</option>
                    <option value="long">Long (1000 words)</option>
                </select>
            </div>
        </div>
        <textarea class="tool-input" id="essay-input" placeholder="Enter any additional instructions or key points to include..." rows="4"></textarea>
        <button class="btn primary" id="generate-essay">Generate Essay</button>
        <div class="tool-output" id="essay-output" style="display:none; margin-top:20px;">
            <h3>Generated Essay</h3>
            <div id="essay-content" class="tool-output"></div>
        </div>
    `;
    
    document.getElementById('generate-essay').addEventListener('click', function() {
        const topic = document.getElementById('essay-topic').value;
        const type = document.getElementById('essay-type').value;
        const length = document.getElementById('essay-length').value;
        const instructions = document.getElementById('essay-input').value;
        
        if (!topic) {
            alert('Please enter an essay topic.');
            return;
        }
        
        const output = document.getElementById('essay-output');
        output.style.display = 'block';
        
        const content = document.getElementById('essay-content');
        content.innerHTML = '<p>Generating your essay... This may take a moment.</p>';
        
        // Simulate essay generation
        setTimeout(() => {
            let essay = `<h4>${topic} (${type} essay)</h4>`;
            essay += `<p>This is a generated ${type} essay about ${topic}. `;
            
            if (instructions) {
                essay += `The following additional instructions were provided: ${instructions}. `;
            }
            
            const wordCount = length === 'short' ? 300 : (length === 'medium' ? 500 : 1000);
            essay += `This essay is approximately ${wordCount} words long.</p>`;
            
            // Generate sample paragraphs
            for (let i = 1; i <= (length === 'short' ? 3 : (length === 'medium' ? 5 : 8)); i++) {
                essay += `<p>Paragraph ${i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `;
                essay += `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `;
                essay += `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. `;
                essay += `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. `;
                essay += `Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. `;
                essay += `Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
            }
            
            essay += `<p>In conclusion, ${topic} is an important topic that deserves careful consideration. `;
            essay += `The evidence presented in this essay clearly demonstrates the significance of this issue. `;
            essay += `Future research should continue to explore this subject in greater depth.</p>`;
            
            content.innerHTML = essay;
        }, 2000);
    });
}

function initMathSolver() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'math-solver');
    document.getElementById('modal-body').innerHTML = `
        <div class="tool-options">
            <div class="tool-option">
                <label for="math-problem">Enter Math Problem:</label>
                <input type="text" id="math-problem" placeholder="e.g., 2x + 5 = 15">
            </div>
            <div class="tool-option">
                <label for="math-category">Category:</label>
                <select id="math-category">
                    <option value="algebra">Algebra</option>
                    <option value="geometry">Geometry</option>
                    <option value="calculus">Calculus</option>
                    <option value="statistics">Statistics</option>
                    <option value="arithmetic">Arithmetic</option>
                </select>
            </div>
        </div>
        <button class="btn primary" id="solve-math">Solve Problem</button>
        <div class="tool-output" id="math-output" style="display:none; margin-top:20px;">
            <h3>Solution</h3>
            <div id="math-solution"></div>
            <div id="math-steps"></div>
        </div>
    `;
    
    document.getElementById('solve-math').addEventListener('click', function() {
        const problem = document.getElementById('math-problem').value;
        const category = document.getElementById('math-category').value;
        
        if (!problem) {
            alert('Please enter a math problem to solve.');
            return;
        }
        
        const output = document.getElementById('math-output');
        output.style.display = 'block';
        
        const solution = document.getElementById('math-solution');
        const steps = document.getElementById('math-steps');
        
        solution.innerHTML = '<p>Solving problem... Please wait.</p>';
        steps.innerHTML = '';
        
        // Simulate solving
        setTimeout(() => {
            solution.innerHTML = `<p><strong>Solution:</strong> x = 5</p>`;
            
            steps.innerHTML = `
                <h4>Step-by-Step Solution:</h4>
                <ol>
                    <li>Original equation: ${problem}</li>
                    <li>Subtract 5 from both sides: ${problem.replace('= 15', '= 10')}</li>
                    <li>Divide both sides by 2: x = 5</li>
                </ol>
                <p>This is a ${category} problem. The solution involves basic algebraic manipulation.</p>
            `;
        }, 1500);
    });
}

// Initialize other tools similarly...

// Writing Tools
function initTextParaphrasing() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'text-paraphrasing');
    document.getElementById('modal-body').innerHTML = `
        <div class="tool-options">
            <div class="tool-option">
                <label for="paraphrase-text">Text to Paraphrase:</label>
                <textarea class="tool-input" id="paraphrase-text" rows="6" placeholder="Enter the text you want to paraphrase"></textarea>
            </div>
            <div class="tool-option">
                <label for="paraphrase-level">Paraphrase Intensity:</label>
                <select id="paraphrase-level">
                    <option value="light">Light (keep most original wording)</option>
                    <option value="medium" selected>Medium (balance of original and new wording)</option>
                    <option value="heavy">Heavy (significant rewording)</option>
                </select>
            </div>
        </div>
        <button class="btn primary" id="paraphrase-button">Paraphrase Text</button>
        <div class="tool-output" id="paraphrase-output" style="display:none; margin-top:20px;">
            <h3>Paraphrased Text</h3>
            <div id="paraphrase-result" class="tool-output"></div>
        </div>
    `;
    
    document.getElementById('paraphrase-button').addEventListener('click', function() {
        const text = document.getElementById('paraphrase-text').value;
        const level = document.getElementById('paraphrase-level').value;
        
        if (!text) {
            alert('Please enter some text to paraphrase.');
            return;
        }
        
        const output = document.getElementById('paraphrase-output');
        output.style.display = 'block';
        
        const result = document.getElementById('paraphrase-result');
        result.innerHTML = '<p>Paraphrasing text... Please wait.</p>';
        
        // Simulate paraphrasing
        setTimeout(() => {
            let paraphrased = text;
            
            if (level === 'medium') {
                paraphrased = text.replace(/important/g, 'crucial')
                                 .replace(/good/g, 'positive')
                                 .replace(/bad/g, 'negative')
                                 .replace(/many/g, 'numerous')
                                 .replace(/big/g, 'large');
            } else if (level === 'heavy') {
                paraphrased = text.split(' ').reverse().join(' ');
                // This is just a silly example - in a real app you'd use an API
            }
            
            result.innerHTML = paraphrased;
        }, 1500);
    });
}

// File Tools
function initPdfToWord() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'pdf-to-word');
    document.getElementById('modal-body').innerHTML = `
        <div class="file-upload">
            <label for="pdf-upload" class="file-upload-label">
                <i class="fas fa-cloud-upload-alt" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>Drag & drop your PDF file here or click to browse</p>
                <p class="small-text">Maximum file size: 5MB</p>
            </label>
            <input type="file" id="pdf-upload" class="file-upload-input" accept=".pdf">
        </div>
        <div id="file-info" style="display: none; margin-bottom: 20px;">
            <p><strong>Selected file:</strong> <span id="file-name"></span> (<span id="file-size"></span>)</p>
        </div>
        <div class="tool-options" style="margin-top: 20px;">
            <div class="tool-option">
                <label for="word-format">Output Format:</label>
                <select id="word-format">
                    <option value="docx">DOCX (Microsoft Word)</option>
                    <option value="doc">DOC (Word 97-2003)</option>
                    <option value="odt">ODT (OpenDocument)</option>
                    <option value="rtf">RTF (Rich Text Format)</option>
                </select>
            </div>
        </div>
        <button class="btn primary" id="convert-button" style="display: none;">Convert to Word</button>
        <div class="tool-output" id="conversion-output" style="display:none; margin-top:20px;">
            <h3>Conversion Result</h3>
            <div id="conversion-result"></div>
            <a href="#" id="download-link" class="btn primary" style="margin-top: 15px; display: none;">
                <i class="fas fa-download"></i> Download Word File
            </a>
        </div>
    `;
    
    const fileUpload = document.getElementById('pdf-upload');
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');
    const fileSize = document.getElementById('file-size');
    const convertButton = document.getElementById('convert-button');
    
    fileUpload.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            const file = this.files[0];
            
            // Check file type
            if (file.type !== 'application/pdf') {
                alert('Please select a PDF file.');
                return;
            }
            
            // Check file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds 5MB limit.');
                return;
            }
            
            fileName.textContent = file.name;
            fileSize.textContent = formatFileSize(file.size);
            fileInfo.style.display = 'block';
            convertButton.style.display = 'inline-block';
        }
    });
    
    convertButton.addEventListener('click', function() {
        const file = fileUpload.files[0];
        const format = document.getElementById('word-format').value;
        
        if (!file) {
            alert('Please select a PDF file first.');
            return;
        }
        
        const output = document.getElementById('conversion-output');
        const result = document.getElementById('conversion-result');
        const downloadLink = document.getElementById('download-link');
        
        output.style.display = 'block';
        result.innerHTML = '<p>Converting PDF to Word format... Please wait.</p>';
        downloadLink.style.display = 'none';
        
        // Simulate conversion
        setTimeout(() => {
            result.innerHTML = `
                <p><i class="fas fa-check-circle" style="color: var(--success-color);"></i> 
                Conversion successful! Your PDF has been converted to ${format.toUpperCase()} format.</p>
                <p>File: ${file.name.replace('.pdf', `.${format}`)}</p>
            `;
            
            downloadLink.style.display = 'inline-block';
            downloadLink.href = '#';
            downloadLink.addEventListener('click', function(e) {
                e.preventDefault();
                alert('In a real application, this would download the converted file.');
            });
        }, 3000);
    });
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}

// Productivity Tools
function initTodoList() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'to-do-list');
    document.getElementById('modal-body').innerHTML = `
        <div class="tool-options">
            <div class="tool-option">
                <label for="new-task">Add New Task:</label>
                <div style="display: flex; gap: 10px;">
                    <input type="text" id="new-task" placeholder="Enter task description">
                    <button class="btn primary" id="add-task">Add</button>
                </div>
            </div>
            <div class="tool-option">
                <label>Task Filter:</label>
                <div style="display: flex; gap: 10px;">
                    <button class="btn secondary filter-btn active" data-filter="all">All</button>
                    <button class="btn secondary filter-btn" data-filter="active">Active</button>
                    <button class="btn secondary filter-btn" data-filter="completed">Completed</button>
                </div>
            </div>
        </div>
        <div id="task-list" style="margin-top: 20px;">
            <div class="no-tasks" style="text-align: center; padding: 20px; color: var(--secondary-color);">
                <i class="fas fa-clipboard-list" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>No tasks yet. Add your first task above!</p>
            </div>
        </div>
    `;
    
    let tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];
    
    function renderTasks(filter = 'all') {
        const taskList = document.getElementById('task-list');
        
        if (tasks.length === 0) {
            taskList.innerHTML = `
                <div class="no-tasks" style="text-align: center; padding: 20px; color: var(--secondary-color);">
                    <i class="fas fa-clipboard-list" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p>No tasks yet. Add your first task above!</p>
                </div>
            `;
            return;
        }
        
        let filteredTasks = tasks;
        if (filter === 'active') {
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        }
        
        if (filteredTasks.length === 0) {
            taskList.innerHTML = `
                <div class="no-tasks" style="text-align: center; padding: 20px; color: var(--secondary-color);">
                    <i class="fas fa-clipboard-check" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p>No ${filter} tasks found.</p>
                </div>
            `;
            return;
        }
        
        let html = '<div class="tasks-container">';
        
        filteredTasks.forEach((task, index) => {
            html += `
                <div class="task-item" data-id="${task.id}" style="display: flex; align-items: center; padding: 10px; border-bottom: 1px solid #eee;">
                    <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''} 
                           style="margin-right: 10px;" class="task-checkbox">
                    <label for="task-${task.id}" style="flex-grow: 1; ${task.completed ? 'text-decoration: line-through; color: var(--secondary-color);' : ''}">
                        ${task.text}
                    </label>
                    <button class="delete-task" data-id="${task.id}" style="background: none; border: none; color: var(--danger-color); cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
        
        html += '</div>';
        taskList.innerHTML = html;
        
        // Add event listeners
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const taskId = this.parentElement.getAttribute('data-id');
                const task = tasks.find(t => t.id === taskId);
                if (task) {
                    task.completed = this.checked;
                    saveTasks();
                    renderTasks(document.querySelector('.filter-btn.active').dataset.filter);
                }
            });
        });
        
        document.querySelectorAll('.delete-task').forEach(button => {
            button.addEventListener('click', function() {
                const taskId = this.getAttribute('data-id');
                tasks = tasks.filter(t => t.id !== taskId);
                saveTasks();
                renderTasks(document.querySelector('.filter-btn.active').dataset.filter);
            });
        });
    }
    
    function saveTasks() {
        localStorage.setItem('todo-tasks', JSON.stringify(tasks));
    }
    
    document.getElementById('add-task').addEventListener('click', function() {
        const taskInput = document.getElementById('new-task');
        const text = taskInput.value.trim();
        
        if (text) {
            tasks.push({
                id: Date.now().toString(),
                text: text,
                completed: false,
                createdAt: new Date().toISOString()
            });
            
            saveTasks();
            taskInput.value = '';
            renderTasks(document.querySelector('.filter-btn.active').dataset.filter);
        }
    });
    
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderTasks(this.dataset.filter);
        });
    });
    
    // Initial render
    renderTasks();
}

// AI Tools
function initAiChatbot() {
    document.querySelector('.modal-content').setAttribute('data-tool-id', 'ai-chatbot');
    document.getElementById('modal-body').innerHTML = `
        <div id="chat-container" style="height: 400px; overflow-y: auto; border: 1px solid #ddd; border-radius: var(--border-radius); padding: 15px; margin-bottom: 15px; background-color: #f9f9f9;">
            <div class="chat-message bot" style="margin-bottom: 10px; padding: 10px; background-color: #e3f2fd; border-radius: 10px; max-width: 80%;">
                <p>Hello! I'm your AI assistant. How can I help you today?</p>
            </div>
        </div>
        <div style="display: flex; gap: 10px;">
            <input type="text" id="chat-input" placeholder="Type your message here..." style="flex-grow: 1; padding: 10px; border: 1px solid #ddd; border-radius: var(--border-radius);">
            <button class="btn primary" id="send-message">Send</button>
        </div>
        <div class="tool-options" style="margin-top: 15px;">
            <div class="tool-option">
                <label for="chat-mode">Chat Mode:</label>
                <select id="chat-mode">
                    <option value="general">General Knowledge</option>
                    <option value="technical">Technical Support</option>
                    <option value="creative">Creative Writing</option>
                    <option value="study">Study Assistant</option>
                </select>
            </div>
        </div>
    `;
    
    const chatContainer = document.getElementById('chat-container');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.style.marginBottom = '10px';
        messageDiv.style.padding = '10px';
        messageDiv.style.borderRadius = '10px';
        messageDiv.style.maxWidth = '80%';
        messageDiv.style.wordWrap = 'break-word';
        
        if (isUser) {
            messageDiv.style.backgroundColor = '#4a6bff';
            messageDiv.style.color = 'white';
            messageDiv.style.marginLeft = 'auto';
        } else {
            messageDiv.style.backgroundColor = '#e3f2fd';
        }
        
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    function getBotResponse(userMessage) {
        const mode = document.getElementById('chat-mode').value;
        let response = '';
        
        if (mode === 'general') {
            response = `I'm a general knowledge AI. You asked: "${userMessage}". This is a simulated response. In a real application, this would connect to an AI API like OpenAI.`;
        } else if (mode === 'technical') {
            response = `As a technical support assistant, I would help with your issue: "${userMessage}". Try checking your settings or restarting the application.`;
        } else if (mode === 'creative') {
            response = `Here's a creative response to "${userMessage}": Once upon a time, in a land of algorithms and data structures, your question sparked a digital revolution that changed the course of binary history.`;
        } else if (mode === 'study') {
            response = `As a study assistant, I'd suggest breaking down "${userMessage}" into smaller parts and creating a study plan. Would you like me to generate a study schedule?`;
        }
        
        // Simulate typing effect
        addMessage('AI is typing...');
        
        setTimeout(() => {
            // Remove "typing" message
            chatContainer.removeChild(chatContainer.lastChild);
            // Add actual response
            addMessage(response);
        }, 1500);
    }
    
    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            getBotResponse(message);
        }
    });
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
}

// Initialize other tools similarly...

// Note: In a production environment, you would implement all 100+ tools with proper functionality
// and potentially connect to backend APIs for more complex operations. The above implementations
// are simplified examples to demonstrate the UI and basic functionality.

// For the sake of brevity, I've implemented a few representative tools from each category.
// The remaining tools would follow similar patterns with their specific functionality.
