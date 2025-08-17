// 100+ Feature list
const featuresList = [
  // Education (sample)
  {name: "Quiz Generator", desc:"Create quizzes from notes/topics.", badge:"Education"},
  {name: "Flashcard Maker", desc:"Turn facts into flashcards.", badge:"Education"},
  {name: "Essay Helper", desc:"Get prompts and outlines.", badge:"Education"},
  {name: "Math Solver", desc:"Solve complex equations.", badge:"Education"},
  {name: "Language Translator", desc:"Translate any language.", badge:"Education"},
  {name: "Summary Tool", desc:"Summarize long texts.", badge:"Education"},
  {name: "Citation Generator", desc:"Make proper citations.", badge:"Education"},
  {name: "Plagiarism Detector", desc:"Check for originality.", badge:"Education"},
  // Editing
  {name: "Grammar Checker", desc:"Spot and fix grammatical errors.", badge:"Editing"},
  {name: "Text Paraphraser", desc:"Rewrite and simplify any text.", badge:"Editing"},
  {name: "Text Formatter", desc:"Format plain text.", badge:"Editing"},
  {name: "Spelling Checker", desc:"Spot spelling mistakes.", badge:"Editing"},
  {name: "Resume Builder", desc:"Build creative CVs.", badge:"Editing"},
  {name: "Cover Letter Maker", desc:"Quick cover letters.", badge:"Editing"},
  // File Conversion
  {name: "PDF to Word", desc:"Convert PDF files to DOC.", badge:"Conversion"},
  {name: "Word to PDF", desc:"Export DOCs to PDF.", badge:"Conversion"},
  {name: "Image to PDF", desc:"Join multiple images as PDF.", badge:"Conversion"},
  {name: "Audio to Text", desc:"Transcribe audio files.", badge:"Conversion"},
  {name: "Video to Audio", desc:"Extract MP3 from video.", badge:"Conversion"},
  {name: "Excel to CSV", desc:"Convert Excel to CSV.", badge:"Conversion"},
  {name: "Compress PDF", desc:"Reduce PDF file size.", badge:"Conversion"},
  // Productivity/Utility
  {name: "To-Do List", desc:"Organize tasks.", badge:"Productivity"},
  {name: "Notes App", desc:"Take quick notes.", badge:"Productivity"},
  {name: "Mind Map Creator", desc:"Visualize concepts.", badge:"Productivity"},
  {name: "Calendar Planner", desc:"Plan your month.", badge:"Productivity"},
  {name: "Timer & Stopwatch", desc:"Quick timer tool.", badge:"Productivity"},
  {name: "Habit Tracker", desc:"Track your habits.", badge:"Productivity"},
  // 70+ additional tools (examples below)
  ...Array.from({length:70},(_,i)=>({
    name:"AI Tool "+(i+31),
    desc:"Description for tool "+(i+31),
    badge: i%3==0 ? "Editing" : i%3==1 ? "Education" : "Conversion"
  }))
];

function displayTools(filter='') {
  const grid = document.getElementById('tools-grid');
  let shown = 0;
  grid.innerHTML = '';
  featuresList.forEach(tool=>{
    if(!filter || tool.name.toLowerCase().includes(filter.toLowerCase()) || tool.desc.toLowerCase().includes(filter.toLowerCase()) || tool.badge.toLowerCase().includes(filter.toLowerCase())) {
      const div = document.createElement('div');
      div.className = 'tool-card';
      div.innerHTML = `<h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <span class="feature-badge">${tool.badge}</span>`;
      div.onclick = ()=>openToolModal(tool);
      grid.appendChild(div);
      shown++;
    }
  });
  if(shown==0){
    grid.innerHTML = `<p style="grid-column:1/4;font-size:1.2em;">No tools found.</p>`;
  }
}

document.getElementById('search-input').addEventListener('input', function(e){
  displayTools(e.target.value);
});

function openToolModal(tool){
  document.getElementById('tool-modal').style.display='block';
  document.getElementById('modal-tool-content').innerHTML=
    `<h2>${tool.name}</h2>
      <p><strong>${tool.badge}</strong> Category</p>
      <p>${tool.desc}</p>
      <div style="margin-top:1.1em;">
        <div class="result">(Tool UI coming soon. Integrate backend or API here.)</div>
      </div>`;
}
document.getElementById('close-modal').onclick = function(){
  document.getElementById('tool-modal').style.display='none';
};
window.onclick = function(event){
  const modal = document.getElementById('tool-modal');
  if(event.target==modal) modal.style.display='none';
}

// Google Login integration
function handleCredentialResponse(response){
  // JWT parsing for user's name/email
  const data = JSON.parse(atob(response.credential.split('.')[1])); // Quick parse
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
window.onload = ()=>displayTools();
