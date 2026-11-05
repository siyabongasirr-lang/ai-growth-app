const title = document.getElementById('workspaceTitle');
const description = document.getElementById('workspaceDescription');
const content = document.getElementById('workspaceContent');

function showPanel(panelTitle, panelDescription, html) {
  title.textContent = panelTitle;
  description.textContent = panelDescription;
  content.innerHTML = html;
  document.getElementById('workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function makeIdeas() {
  showPanel(
    'Create content ideas',
    'Tell us what your account is about. This starter version creates prompts locally; an AI service will be connected in a later build.',
    `<label for="niche">What do you post about?</label>
     <input id="niche" placeholder="e.g. music, fashion, fitness">
     <label for="platform">Where will you post?</label>
     <select id="platform"><option>Instagram Reels</option><option>TikTok</option><option>Both</option></select>
     <button class="button button-primary" id="generateIdeas">Generate ideas</button>
     <div id="ideasResult"></div>`
  );
  document.getElementById('generateIdeas').addEventListener('click', () => {
    const niche = document.getElementById('niche').value.trim() || 'your topic';
    const platform = document.getElementById('platform').value;
    document.getElementById('ideasResult').innerHTML =
      `<div class="result">1. Share the story behind how you started with ${niche}.\n\n2. Show three things people misunderstand about ${niche}.\n\n3. Make a quick before-and-after or progress video about ${niche}.\n\n4. Answer a question your audience often asks.\n\n5. Share a behind-the-scenes moment.\n\nPlatform: ${platform}\nTip: Open with a strong first sentence, keep the video focused, and invite genuine conversation.</div>`;
  });
}

function makePlan() {
  showPanel(
    'Your weekly posting planner',
    'A simple starter schedule. Adjust it to your time and the content your audience responds to.',
    `<div class="result">MONDAY — Short tip or useful insight\nTUESDAY — Behind-the-scenes story\nWEDNESDAY — Short-form video with a strong hook\nTHURSDAY — Reply to comments or answer a question\nFRIDAY — Your strongest entertaining or educational idea\nSATURDAY — Community post or collaboration\nSUNDAY — Review results and plan next week</div>`
  );
}

document.getElementById('coachButton').addEventListener('click', () => {
  showPanel(
    'Your first growth moves',
    'Start with actions that build a real audience. No fake followers, spam or forced engagement.',
    `<div class="result">1. Make your profile instantly explain what people get by following you.\n\n2. Choose three content themes you can post about consistently.\n\n3. Create one short video with a clear hook in its first two seconds.\n\n4. Reply thoughtfully to comments and interact with creators in your niche.\n\n5. Review views, watch time, shares, saves and follows after posting.\n\nYour task: publish one useful or entertaining post today, then note what happened.</div>`
  );
});

document.getElementById('contentButton').addEventListener('click', makeIdeas);
document.getElementById('plannerButton').addEventListener('click', makePlan);

document.querySelectorAll('[data-platform]').forEach(button => {
  button.addEventListener('click', () => {
    const platform = button.dataset.platform;
    showPanel(
      `Set up ${platform}`,
      'This starter build does not connect to social accounts or ask for your password. We will add approved account integrations later.',
      `<label for="handle">Your public ${platform} username (optional)</label>
       <input id="handle" placeholder="@yourusername">
       <button class="button button-primary" id="saveProfile">Save on this device</button>
       <div id="profileResult"></div>`
    );
    document.getElementById('saveProfile').addEventListener('click', () => {
      const handle = document.getElementById('handle').value.trim();
      if (handle) localStorage.setItem(`ai-growth-${platform.toLowerCase()}`, handle);
      document.getElementById('profileResult').innerHTML =
        `<div class="result">${handle ? `${platform} username saved in this browser: ${handle}` : 'You can add your username whenever you are ready.'}</div>`;
    });
  });
});
