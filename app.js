// 105+ feature list (from your provided list – each with its category)
const featuresList = [
  // Education
  {name: "Quiz Generator", desc:"Create quizzes from notes/topics.", badge:"Education"},
  {name: "Flashcard Maker", desc:"Turn facts into flashcards.", badge:"Education"},
  {name: "Essay Generator", desc:"Generate essays from prompts.", badge:"Education"},
  {name: "Math Solver", desc:"Solve math equations (API required).", badge:"Education"},
  {name: "Language Translator", desc:"Translate any language.", badge:"Education"},
  {name: "Text Summarizer", desc:"Summarize long passages.", badge:"Education"},
  {name: "Citation/Bibliography Generator", desc:"Create citations in any format.", badge:"Education"},
  {name: "Plagiarism Checker", desc:"Check text originality.", badge:"Education"},
  {name: "Grammar Checker", desc:"Catch grammar mistakes.", badge:"Education"},
  {name: "Study Planner", desc:"Organize your study times.", badge:"Education"},
  {name: "Timed Practice Tests", desc:"Timed quizzes for learning.", badge:"Education"},
  {name: "Mind Map Creator", desc:"Visualize concepts.", badge:"Education"},
  {name: "Vocabulary Builder", desc:"Improve your vocabulary.", badge:"Education"},
  {name: "Lecture Notes Organizer", desc:"Sort and organize notes.", badge:"Education"},
  {name: "Homework Helper", desc:"AI-powered homework helper.", badge:"Education"},
  {name: "Concept Explanation AI", desc:"Explain tough concepts.", badge:"Education"},
  {name: "Reading Comprehension Assistant", desc:"Practice reading skills.", badge:"Education"},
  {name: "Video Lecture Transcriber", desc:"Transcribe video lectures.", badge:"Education"},
  {name: "Formula Sheet Creator", desc:"Make formula sheets.", badge:"Education"},
  {name: "Research Paper Outline Tool", desc:"Build research outlines.", badge:"Education"},
  // Editing & Writing
  {name: "Text Paraphrasing", desc:"Rewrite your text easily.", badge:"Editing"},
  {name: "Spelling Checker", desc:"Detect spelling errors.", badge:"Editing"},
  {name: "Resume Builder", desc:"Build professional resumes.", badge:"Editing"},
  {name: "Cover Letter Creator", desc:"Write great cover letters.", badge:"Editing"},
  {name: "Creative Writing Prompter", desc:"Spark creative writing ideas.", badge:"Editing"},
  {name: "Text-to-Speech Reader", desc:"Listen to your writing.", badge:"Editing"},
  {name: "Speech-to-Text Converter", desc:"Voice to text notes.", badge:"Editing"},
  {name: "Email Template Builder", desc:"Ready-to-use email formats.", badge:"Editing"},
  {name: "Blog Post Planner", desc:"Organize blog writing.", badge:"Editing"},
  {name: "SEO Content Optimizer", desc:"Improve SEO for content.", badge:"Editing"},
  {name: "Article Rewriter", desc:"Rewrite articles for clarity.", badge:"Editing"},
  {name: "Proofreading Assistant", desc:"Get proofreading help.", badge:"Editing"},
  {name: "Character Count & Readability Analyzer", desc:"Analyze your text.", badge:"Editing"},
  {name: "Formatting Cleanup Tool", desc:"Clean up document formatting.", badge:"Editing"},
  {name: "Markdown Editor", desc:"Edit in markdown format.", badge:"Editing"},
  {name: "Collaborative Writing Workspace", desc:"Work together on documents.", badge:"Editing"},
  {name: "Auto-correct and Suggestion Tool", desc:"Auto-correct as you type.", badge:"Editing"},
  {name: "Style and Tone Analyzer", desc:"Get feedback on writing style.", badge:"Editing"},
  {name: "Text Comparison Tool", desc:"Compare two versions of text.", badge:"Editing"},
  {name: "Literature Quote Finder", desc:"Find quotes in literature.", badge:"Editing"},
  // File Conversion
  {name: "PDF to Word", desc:"Convert PDFs to editable Word files.", badge:"Conversion"},
  {name: "Word to PDF", desc:"Convert Word docs to PDF.", badge:"Conversion"},
  {name: "Excel to CSV", desc:"Excel file to CSV.", badge:"Conversion"},
  {name: "Image to PDF", desc:"Images as a PDF.", badge:"Conversion"},
  {name: "Audio to Text (Transcription)", desc:"Transcribe audio files.", badge:"Conversion"},
  {name: "Video to Audio (MP3)", desc:"Extract MP3 from video.", badge:"Conversion"},
  {name: "Image Format Converter (JPG, PNG, GIF)", desc:"Convert image formats.", badge:"Conversion"},
  {name: "Text File to PDF", desc:"Convert .txt files to PDF.", badge:"Conversion"},
  {name: "PowerPoint to PDF", desc:"Export PPTs to PDF.", badge:"Conversion"},
  {name: "PDF Compressor", desc:"Reduce PDF file size.", badge:"Conversion"},
  {name: "ePub to PDF", desc:"ePub to PDF files.", badge:"Conversion"},
  {name: "CSV to JSON Converter", desc:"CSV to JSON conversion.", badge:"Conversion"},
  {name: "PDF Merger & Splitter", desc:"Merge/split PDFs.", badge:"Conversion"},
  {name: "Audio Format Converter (MP3, WAV, AAC)", desc:"Convert audio formats.", badge:"Conversion"},
  {name: "Video Format Converter (MP4, MOV, AVI)", desc:"Convert video formats.", badge:"Conversion"},
  {name: "Online OCR (Image to Text)", desc:"Extract text from images.", badge:"Conversion"},
  {name: "File Size Reducer", desc:"Compress any file size.", badge:"Conversion"},
  {name: "URL to PDF Capture", desc:"Convert web pages to PDF.", badge:"Conversion"},
  {name: "Barcode/QR Code Generator", desc:"Create barcodes and QR codes.", badge:"Conversion"},
  {name: "Subtitle File Converter", desc:"Convert subtitle files.", badge:"Conversion"},
  // Productivity Utilities
  {name: "To-Do List Manager", desc:"Smart to-do lists.", badge:"Productivity"},
  {name: "Note Taking App", desc:"Fast note taking.", badge:"Productivity"},
  {name: "Calendar & Event Planner", desc:"Plan events and deadlines.", badge:"Productivity"},
  {name: "Time Tracking & Pomodoro Timer", desc:"Track time and focus.", badge:"Productivity"},
  {name: "Habit Tracker", desc:"Track daily habits.", badge:"Productivity"},
  {name: "Password Generator", desc:"Generate strong passwords.", badge:"Productivity"},
  {name: "Password Manager (demo)", desc:"Manage your passwords.", badge:"Productivity"},
  {name: "Clipboard History Manager", desc:"Track your clipboard history.", badge:"Productivity"},
  {name: "Screen Recorder (UI)", desc:"Record screen (UI placeholder).", badge:"Productivity"},
  {name: "Task Prioritization Assistant", desc:"Prioritize your tasks.", badge:"Productivity"},
  {name: "Meeting Scheduler", desc:"Schedule meetings.", badge:"Productivity"},
  {name: "Contact Manager", desc:"Manage your contacts.", badge:"Productivity"},
  {name: "Budget Tracker", desc:"Track spending and budgets.", badge:"Productivity"},
  {name: "Expense Split Calculator", desc:"Split expenses with friends.", badge:"Productivity"},
  {name: "Conversion Calculators", desc:"Calculate unit/currency conversions.", badge:"Productivity"},
  {name: "Currency Converter", desc:"Convert global currencies.", badge:"Productivity"},
  {name: "Weather Forecast Widget", desc:"Get instant forecasts.", badge:"Productivity"},
  {name: "File Encryption & Decryption (UI only)", desc:"Encrypt/decrypt files (UI only).", badge:"Productivity"},
  {name: "Backup Reminder & Tracker", desc:"Backup files tracker.", badge:"Productivity"},
  {name: "URL Shortener", desc:"Shorten links pretty easily.", badge:"Productivity"},
  // AI Powered & Tech
  {name: "AI Chatbot Assistant", desc:"Chatbot for help.", badge:"AI"},
  {name: "Image Generation Tool", desc:"Generate images using AI.", badge:"AI"},
  {name: "Logo Maker", desc:"Create logos with AI.", badge:"AI"},
  {name: "Infographic Generator", desc:"Infographic from your input.", badge:"AI"},
  {name: "Social Media Post Creator", desc:"Make creative posts for socials.", badge:"AI"},
  {name: "Video Caption Generator", desc:"Get captions for videos.", badge:"AI"},
  {name: "Keyword Research Tool", desc:"Research keywords for SEO.", badge:"AI"},
  {name: "Code Snippet Generator", desc:"Generate code examples.", badge:"AI"},
  {name: "API Tester & Explorer", desc:"Test APIs with ease.", badge:"AI"},
  {name: "Remote Desktop Client (UI stub)", desc:"Connect remotely via UI.", badge:"Tech"},
  {name: "Screenshot Capture with Annotation", desc:"Capture/annotate screenshots.", badge:"Tech"},
  {name: "Voice Assistant Integration (UI only)", desc:"Voice control demo.", badge:"AI"},
  {name: "Language Pronunciation Tester", desc:"Test pronunciations AI.", badge:"AI"},
  {name: "AI-Powered Resume Keyword Optimizer", desc:"Optimize resume keywords.", badge:"AI"},
  {name: "Text Emotion Analyzer", desc:"Analyze emotion in writing.", badge:"AI"},
  {name: "Document Scanner (mobile upload)", desc:"Scan documents (UI only).", badge:"Tech"},
  {name: "Email Spam Score Checker", desc:"Check your spam score.", badge:"Tech"},
  {name: "Webpage Speed Test Tool", desc:"Test website speeds.", badge:"Tech"},
  {name: "Link Checker & Validator", desc:"Check if links work.", badge:"Tech"},
  {name: "GDPR Compliance Helper", desc:"Help with GDPR.", badge:"Tech"},
  {name: "Website Accessibility Checker", desc:"Is web page accessible?", badge:"Tech"},
  {name: "Browser Extension Installer Guide", desc:"Guide to install extensions.", badge:"Tech"},
  {name: "Online Poll & Survey Creator", desc:"Create polls and surveys.", badge:"Tech"},
  {name: "Collaborative Whiteboard", desc:"Whiteboard for team up.", badge:"Tech"},
  {name: "AI Music Composer (demo)", desc:"Generate music with AI.", badge:"AI"}
];

// Grid Display
function displayTools(filter='') {
  const grid = document.getElementById('tools-grid');
  let shown = 0;
  grid.innerHTML = '';
  featuresList.forEach(tool => {
    if (!filter ||
        tool.name.toLowerCase().includes(filter.toLowerCase()) ||
        tool.desc.toLowerCase().includes(filter.toLowerCase()) ||
        tool.badge.toLowerCase().includes(filter.toLowerCase())) 
    {
      const div = document.createElement('div');
      div.className = 'tool-card';
      div.innerHTML = `<h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <span class="feature-badge">${tool.badge}</span>`;
      div.onclick = () => openToolModal(tool);
      grid.appendChild(div);
      shown++;
    }
  });
  if (shown === 0) {
    grid.innerHTML = `<p style="grid-column: 1/4; font-size: 1.2em;">No tools found.</p>`;
  }
}

document.getElementById('search-input').addEventListener('input', function(e){
  displayTools(e.target.value);
});

// Modal Display
function openToolModal(tool) {
  document.getElementById('tool-modal').style.display = 'block';
  document.getElementById('modal-tool-content').innerHTML =
    `<h2>${tool.name}</h2>
      <p><strong>${tool.badge}</strong> Category</p>
      <p>${tool.desc}</p>
      <div style="margin-top:1.1em;">
        <div class="result">
          <em>Sample UI placeholder – integrate your backend/API here for full functionality.</em>
        </div>
      </div>`;
}
document.getElementById('close-modal').onclick = function(){
  document.getElementById('tool-modal').style.display = 'none';
};
window.onclick = function(event){
  const modal = document.getElementById('tool-modal');
  if(event.target === modal) modal.style.display = 'none';
};

// Google Login integration
function handleCredentialResponse(response){
  const data = JSON.parse(atob(response.credential.split('.')[1]));
  document.getElementById('user-info').innerHTML = `Welcome, ${data.name||data.email||'User'}!`;
  document.getElementById('logoutBtn').style.display = 'inline-block';
  document.querySelector('.g_id_signin').style.display = 'none';
}
function logout(){
  document.getElementById('user-info').innerHTML = '';
  document.getElementById('logoutBtn').style.display = 'none';
  document.querySelector('.g_id_signin').style.display = 'block';
  window.location.reload();
}

// Initial grid load
window.onload = () => displayTools();
