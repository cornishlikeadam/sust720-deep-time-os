// =========================================================
// SUST 720: THE PALACE OF DEEP TIME — JAVASCRIPT OS
// Ambient Canvas Stardust • Interactive Governance • Simulator
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initAmbientStardust();
  initPalaceTabs();
  initRoyalTableData();
  initBoundaryFilters();
  initRoyalTransparencyLog();
  initDeepTimeSandbox();
  initRoyalExport();
  initStorybookReader();
});

// ---------------------------------------------------------
// Ambient Stardust Canvas Engine (Solar Motes)
// ---------------------------------------------------------
function initAmbientStardust() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const motes = [];
  const count = 45;

  for (let i = 0; i < count; i++) {
    motes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      speedY: - (Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.8 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    motes.forEach(m => {
      m.y += m.speedY;
      m.x += m.speedX;

      if (m.y < 0) {
        m.y = height;
        m.x = Math.random() * width;
      }
      if (m.x < 0) m.x = width;
      if (m.x > width) m.x = 0;

      ctx.beginPath();
      ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${m.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#ffd700';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// ---------------------------------------------------------
// Navigation Tabs
// ---------------------------------------------------------
function initPalaceTabs() {
  const tabs = document.querySelectorAll('.gallery-tab');
  const panes = document.querySelectorAll('.palace-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

// ---------------------------------------------------------
// Royal Specification Grid Data (Pure English)
// ---------------------------------------------------------
const courseSteps = [
  {
    step: "1",
    goal: "Understand deep time, geological scales, and Indigenous relational temporalities.",
    activity: "Epistemic & Temporal Grounding: Exploring scientific deep time vs. Indigenous temporal frameworks. Mapping 500-year ecological cycles using analog canvases and primary scholarly texts (Kimmerer, Whyte, Bjornerud).",
    output: "Output 1: 500-Year Bioregional Baseline Canvas & Ontological Covenant.",
    studentRole: "Ground research in non-extractive scholarship; define ecological keystones.",
    facultyRole: "Facilitate Socratic debate; deconstruct linear Western progress biases.",
    decision: "Decision: Selecting the bioregional baseline & core ontological framework.<br><strong style='color:#ffd700;'>Decider: Student Team</strong>",
    feedback: "Formative faculty critique on cultural humility and epistemic integrity."
  },
  {
    step: "2",
    goal: "Apply superforecasting and anti-fragility to complex socio-ecological systems.",
    activity: "Superforecasting & Volatility Stress-Testing: Modeling system anti-fragility under compounding 500-year climate shocks (salinity inversion, permafrost thaw, biome migration lag).",
    output: "Output 2: 4-Quadrant Volatility Matrix & Anti-Fragility Stress-Test Log.",
    studentRole: "Formulate resilience hypotheses; probe cascading failure modes.",
    facultyRole: "Introduce scenario planning frameworks (Kahane, Dator); audit climate perturbation realism.",
    decision: "Decision: Selecting the non-linear biophysical shock to model.<br><strong style='color:#ffd700;'>Deciders: Student Team with Faculty</strong>",
    feedback: "Peer review; validation against empirical climate models (IPCC AR6)."
  },
  {
    step: "3",
    goal: "Design regenerative system architectures and define AI application boundaries.",
    activity: "Regenerative System Design & AI Governance: Specifying the physical/systemic design intervention across 5 centuries, defining how AI is applied and where it is strictly bounded.",
    output: "Output 3: 500-Year Regenerative System Architecture & AI Governance Specification.",
    studentRole: "Author original circular system architecture; define the Assistance Line and Non-Use boundaries.",
    facultyRole: "Critique systemic coherence; verify that AI is confined to assistance and not substitution.",
    decision: "Decision: Setting the system architecture and AI ethical limits.<br><strong style='color:#ffd700;'>Decider: Student Team</strong>",
    feedback: "Studio critique on system viability, circularity, and ethical rigor."
  },
  {
    step: "4",
    goal: "Test assumptions through co-creation workshops and rapid prototyping.",
    activity: "Co-Creation Workshop & Relational Stress-Testing: Physical prototyping and live multi-stakeholder workshop testing temporal empathy, social equity, and community durability.",
    output: "Output 4: Physical Prototype Exhibition + Multi-Stakeholder Feedback Ledger.",
    studentRole: "Present prototype live; facilitate peer dialogue; defend system choices under audience interrogation.",
    facultyRole: "Moderate cross-team critique; evaluate design craft, relational empathy, and ethical rigor.",
    decision: "Decision: Validating system resilience and inter-species equity.<br><strong style='color:#ffd700;'>Decider: Peer Cohort & External Jurors</strong>",
    feedback: "Structured feedback cards scoring Anti-Fragility, Relational Empathy, and Plausibility."
  },
  {
    step: "5",
    goal: "Synthesize cultural, scientific, and moral perspectives into one capstone deliverable.",
    activity: "Master Synthesis & Seventh-Generation Moral Defense: Finalizing the unified Blueprint and defending its intergenerational stewardship covenant across 7 generations.",
    output: "Output 5 (The Capstone Deliverable): The Deep-Time Anti-Fragility Blueprint & Generational Ethics Charter.",
    studentRole: "Defend ethical footprint; sign the 7th-generation accountability covenant.",
    facultyRole: "Final evaluative grading against SCAD graduate rubric; assess deep-time mastery.",
    decision: "Decision: Final project certification and grading.<br><strong style='color:#ffd700;'>Decider: SCAD Course Faculty</strong>",
    feedback: "Summative rubric: Epistemic Rigor, Anti-Fragility, Systemic Craft, and Moral Duty."
  }
];

function initRoyalTableData() {
  const tbody = document.getElementById('course-table-body');
  if (!tbody) return;

  tbody.innerHTML = courseSteps.map(s => `
    <tr>
      <td><strong style="color:var(--gold-pure); font-family:var(--font-royal);">Step ${s.step}</strong></td>
      <td>${s.goal}</td>
      <td>${s.activity}</td>
      <td><strong style="color:#fff;">${s.output}</strong></td>
      <td>${s.studentRole}</td>
      <td>${s.facultyRole}</td>
      <td>${s.decision}</td>
      <td>${s.feedback}</td>
    </tr>
  `).join('');
}

// ---------------------------------------------------------
// Boundary Filters (Hall of Mirrors)
// ---------------------------------------------------------
function initBoundaryFilters() {
  const filterBtns = document.querySelectorAll('.rf-btn');
  const panels = document.querySelectorAll('.mirror-panel');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      panels.forEach(p => {
        if (filter === 'all') {
          p.style.opacity = '1';
          p.style.borderColor = 'rgba(212, 175, 55, 0.35)';
        } else {
          const boundaries = p.getAttribute('data-boundaries') || '';
          if (boundaries.includes(filter)) {
            p.style.opacity = '1';
            p.style.borderColor = filter === 'ai' ? '#ffd700' :
                                  filter === 'nonuse' ? '#f43f5e' : '#a855f7';
            p.style.boxShadow = filter === 'ai' ? '0 0 25px rgba(255, 215, 0, 0.4)' :
                                filter === 'nonuse' ? '0 0 25px rgba(244, 63, 94, 0.4)' : '0 0 25px rgba(168, 85, 247, 0.4)';
          } else {
            p.style.opacity = '0.2';
            p.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            p.style.boxShadow = 'none';
          }
        }
      });
    });
  });
}

// ---------------------------------------------------------
// Transparency Log Storage & Rendering
// ---------------------------------------------------------
const defaultLogs = [
  {
    date: "2026-09-03",
    actor: "Chrono-Relational Studio (Team 04)",
    type: "Course Activity Scoping",
    desc: "Formally scoped course activity to 'Developing a 500-Year Anti-Fragile Regenerative System & Generational Ethics Charter'. Identified risk of cognitive offloading in sustainable architecture. Designated Step 3 as an unassisted human design zone."
  },
  {
    date: "2026-09-08",
    actor: "Team 04 & Team 06 (Cross-Audit)",
    type: "Missing-Person Discovery",
    desc: "Cross-audit revealed omission of non-human ecological entities and Year 2526 descendants. Officially added the Savannah River Basin as a stakeholder and instituted the mandatory 7th-Generation Peer Proxy role for studio reviews."
  },
  {
    date: "2026-09-11",
    actor: "Team Lead & Faculty Advisor",
    type: "Director Check Revision",
    desc: "First draft of bounded question rejected by department director for generic scope. Revised to bound specifically to 500-year deep time, anti-fragility superforecasting, and Indigenous Data Sovereignty (CARE principles). Approved by director."
  },
  {
    date: "2026-09-14",
    actor: "Team 04 & Review Panel",
    type: "Boundary Adjustment",
    desc: "Evicted AI from Step 3 (Regenerative System Design). Confined AI strictly to Step 2 as an environmental antagonist modeling biophysical climate shocks. Rationed team to a 5-query compute quota to address data center water burdens."
  },
  {
    date: "2026-09-17",
    actor: "Team 04 (Exchanged with Team 03)",
    type: "Assistance Line Review",
    desc: "Formalized the Three-Stage Friction Review Path. Condemned the failure mode where 'AI recommends and instructor/student merely approves without review'. Certified the Visible Human Decisions (VHD) ledger."
  }
];

function initRoyalTransparencyLog() {
  const form = document.getElementById('transparency-form');
  const list = document.getElementById('log-entries-list');
  const countBadge = document.getElementById('entry-count-badge');

  let logs = JSON.parse(localStorage.getItem('sust720_english_logs')) || defaultLogs;

  function render() {
    if (!list) return;
    list.innerHTML = logs.map(l => `
      <div class="palace-log-entry">
        <div class="ple-top">
          <span class="ple-actor">⚜️ ${escapeHtml(l.actor)}</span>
          <span>${escapeHtml(l.date)} • ${escapeHtml(l.type)}</span>
        </div>
        <div class="ple-desc">${escapeHtml(l.desc)}</div>
      </div>
    `).join('');

    if (countBadge) {
      countBadge.textContent = `${logs.length} Verified Entries`;
    }
  }

  render();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const date = document.getElementById('log-date').value;
      const actor = document.getElementById('log-actor').value;
      const type = document.getElementById('log-type').value;
      const desc = document.getElementById('log-desc').value;

      logs.unshift({ date, actor, type, desc });
      localStorage.setItem('sust720_english_logs', JSON.stringify(logs));
      render();
      form.reset();
      document.getElementById('log-date').value = "2026-09-17";
    });
  }
}

// ---------------------------------------------------------
// Deep Time Sandbox (Governed Volatility Simulator)
// ---------------------------------------------------------
function initDeepTimeSandbox() {
  const btn = document.getElementById('run-stress-btn');
  const out = document.getElementById('sandbox-output');
  const tokenDisplay = document.getElementById('token-count');

  let tokens = 5;

  if (btn && out) {
    btn.addEventListener('click', () => {
      if (tokens <= 0) {
        alert("Imperial Decree: Compute Quota Depleted! In accordance with Evidence Card 04 (Ecological Cost of Compute), your team has reached its sovereign limit of 5 queries.");
        return;
      }

      tokens--;
      if (tokenDisplay) {
        tokenDisplay.textContent = `⚜️ COMPUTE QUOTA : ${tokens} / 5 REMAINING`;
      }

      const region = document.getElementById('sandbox-region').value;
      const horizon = document.getElementById('sandbox-horizon').value;
      const hypothesis = document.getElementById('sandbox-hypothesis').value;

      out.innerHTML = `
        <div class="royal-boundary-item b-ai" style="margin-bottom: 1rem;">
          <div class="rb-header">
            <span class="rb-title">🟡 TRI-VECTOR VOLATILITY SIMULATION (Year +${horizon})</span>
            <span class="rb-loc">${escapeHtml(region)}</span>
          </div>
          <p style="font-size:0.85rem; color:#fff; margin-top:0.35rem;">
            <strong>Human Hypothesis Tested:</strong> “${escapeHtml(hypothesis)}”
          </p>
        </div>

        <div class="royal-boundary-item b-ai" style="margin-bottom: 0.75rem;">
          <h4 style="color:#ffd700; font-family:var(--font-royal); font-size:0.95rem;">Vector Alpha : Deep Aquifer Salinity Inversion (Year +${parseInt(horizon) - 40})</h4>
          <p style="font-size:0.85rem; color:var(--text-parchment); line-height:1.5;">
            Subterranean seawater intrusion contaminates the primary freshwater lens, triggering immediate die-off of mature coastal maritime live oaks and accelerated root liquefaction in salt marsh revetments.
          </p>
          <span style="font-size:0.75rem; color:var(--gold-light); font-family:var(--font-code);">Empirical Basis: IPCC AR6 Sea Level Inundation Models & Regional Coastal Hydro-geology.</span>
        </div>

        <div class="royal-boundary-item b-ai" style="margin-bottom: 0.75rem;">
          <h4 style="color:#ffd700; font-family:var(--font-royal); font-size:0.95rem;">Vector Beta : Thermal Pulse & Methanogenesis Surge (Year +${horizon})</h4>
          <p style="font-size:0.85rem; color:var(--text-parchment); line-height:1.5;">
            Prolonged anaerobic peat warming triggers runaway bacterial methane outgassing, degrading mycorrhizal bio-revetments 60% faster than engineered bio-revetment specifications.
          </p>
          <span style="font-size:0.75rem; color:var(--gold-light); font-family:var(--font-code);">Empirical Basis: Nature Geoscience Peatland Feedback Studies.</span>
        </div>

        <div class="royal-boundary-item b-ai" style="margin-bottom: 1rem;">
          <h4 style="color:#ffd700; font-family:var(--font-royal); font-size:0.95rem;">Vector Gamma : Clustered Major Cyclonic Waveforms (Year +${parseInt(horizon) + 25})</h4>
          <p style="font-size:0.85rem; color:var(--text-parchment); line-height:1.5;">
            Three Category 5 storm surges strike within a narrow 36-month window, preventing seasonal vegetative succession and scouring sedimentary accretion banks.
          </p>
          <span style="font-size:0.75rem; color:var(--gold-light); font-family:var(--font-code);">Empirical Basis: Paleoclimate Clustered Hurricane Analyses.</span>
        </div>

        <div class="royal-boundary-item b-judgment" style="background: rgba(76, 29, 149, 0.25); border-left-color: #a855f7;">
          <div class="rb-header">
            <span class="rb-title" style="color:#e9d5ff;">🟣 MANDATORY RELATIONAL FRICTION GATE</span>
          </div>
          <p style="font-size:0.85rem; color:#fff; line-height:1.5; margin-top:0.35rem;">
            The AI stops here. It is constitutionally forbidden from designing the solution for you. 
            <strong>Next Pedagogical Action:</strong> Your team must choose one vector, cite 2 empirical peer-reviewed studies, and draft a 100-word statement on intergenerational consequences before Step 3 system architecture.
          </p>
        </div>
      `;
    });
  }
}

// ---------------------------------------------------------
// Exporting Log to Markdown and JSON
// ---------------------------------------------------------
function initRoyalExport() {
  const exportBtn = document.getElementById('export-log-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const logs = JSON.parse(localStorage.getItem('sust720_english_logs')) || defaultLogs;
      let md = "# SUST 720: Designing in Deep Time — The Transparency Log\n";
      md += `*Exported on: ${new Date().toISOString()}*\n\n`;
      md += "## What is the Transparency Log?\n";
      md += "The Transparency Log is the central accountability instrument mandated by the SCAD AI Governance Framework (September 17, 2026). It documents every consequential decision where human agency, AI capability, and ethical boundaries intersect.\n\n---\n\n";
      logs.forEach((l, idx) => {
        md += `### Entry ${String(idx + 1).padStart(3, '0')}: ${l.type}\n`;
        md += `- **Date:** ${l.date}\n`;
        md += `- **Deciding Role:** ${l.actor}\n`;
        md += `- **Rationale & Protected Values:** ${l.desc}\n\n`;
      });

      downloadFile(md, 'sust720_transparency_log.md', 'text/markdown');
    });
  }

  const exportJsonBtn = document.getElementById('export-json-btn');
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', () => {
      const logs = JSON.parse(localStorage.getItem('sust720_english_logs')) || defaultLogs;
      const data = {
        course: "SUST 720: Designing in Deep Time",
        institution: "Savannah College of Art and Design (SCAD)",
        exportedAt: new Date().toISOString(),
        entries: logs
      };
      downloadFile(JSON.stringify(data, null, 2), 'sust720_transparency_log.json', 'application/json');
    });
  }

  const printBtn = document.getElementById('print-map-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function downloadFile(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ---------------------------------------------------------
// The Deep Time Storybook Interactive Reader
// ---------------------------------------------------------
const storybookChapters = [
  {
    title: "Chapter 0: What on Earth is \"Deep Time\"?",
    subtitle: "The Acorn, The Clock, and the 500-Year Secret",
    body: `
      <p>Imagine you found a clock that doesn't tick every second. Instead, it ticks <strong>once every human lifetime</strong>—about once every 80 years! ⏳</p>
      <p>Most people live their lives on the fast clock: <em>"Hurry up, eat your breakfast in 10 minutes!"</em> or <em>"How much money can a company make in the next 3 months?"</em> This fast clock makes people build things quickly, buy plastic toys that break tomorrow, and forget about the trash.</p>
      <div class="royal-boundary-item b-ai" style="margin: 1.5rem 0;">
        <h4 style="color:#ffd700; font-family:var(--font-royal);">The Fast Clock ⏱️ vs. The Deep Time Clock 🌍</h4>
        <p><strong>Fast Clock:</strong> "I want it right now! Throw the plastic fork in the landfill forever."<br>
        <strong>Deep Time Clock:</strong> "Will the rivers be clean and full of fish for children in the year 2526?"</p>
      </div>
      <p>In our course, <strong>SUST 720: Designing in Deep Time</strong> at SCAD, we decided to design something for the year <strong>2526 CE</strong>—that is <strong>500 years from today!</strong></p>
      <p>We want to design living systems that are <strong>ANTI-FRAGILE</strong>: like a muscle that gets stronger every time you run and play outside!</p>
    `
  },
  {
    title: "Chapter 1: The Circle of Friends (Who are we helping?)",
    subtitle: "The Stakeholder Snapshot & The River That Couldn't Speak",
    body: `
      <p>When engineers and designers start a project, they usually sit in fancy chairs and only think about themselves. In <strong>Step 1</strong>, we sat in a circle and put on <strong>FOUR PAIRS OF EYEGLASSES</strong>:</p>
      <ul style="padding-left:1.5rem; margin:1rem 0; line-height:1.8;">
        <li>👓 <strong>The Students:</strong> The hardworking designers who want to heal the earth without getting lazy.</li>
        <li>👓 <strong>The Teachers:</strong> The professors who make sure students do honest, deep work.</li>
        <li>👓 <strong>The Elders:</strong> Native knowledge keepers who teach the <em>Seventh Generation Principle</em>: look 7 generations ahead!</li>
        <li>👓 <strong>The River & Data Workers:</strong> The underpaid workers cleaning up internet data, and the <strong>Savannah River</strong> whose water cools the hot computer towers!</li>
      </ul>
      <div class="royal-audit-callout" style="margin: 1.5rem 0;">
        <p class="rac-quote">"Hey! You forgot the future! Where are the children of 2526?"</p>
        <p>Another team caught our mistake! So we made an official promise: in every presentation, one student must pretend they traveled from the year 2226 to judge our design from the future!</p>
      </div>
    `
  },
  {
    title: "Chapter 2: The Magic Question & The Written Promise",
    subtitle: "How to ask a computer a question without letting it take over",
    body: `
      <p>Have you ever played a game with a friend who tried to change all the rules so they always won? If you don't give an AI computer very strict rules, it will guess, make up silly stories, or do your homework for you.</p>
      <p>In <strong>Step 2</strong>, our teachers told us: <em>"You can only write ONE question for your whole team. But that question must be built like an unbreakable castle!"</em></p>
      <div class="royal-monument-proclamation" style="margin: 1.5rem 0; padding: 1.5rem;">
        <div class="rmp-crown">THE UNBREAKABLE QUESTION</div>
        <div class="rmp-text" style="font-size:1.15rem;">
          “How can we use a super-smart climate simulator to throw giant storms at our 500-year tree and marsh designs, while making sure we don't cheat, we don't steal Native stories, and we protect our great-great-great grandchildren?”
        </div>
      </div>
      <p>And we signed our <strong>Written Non-Goal</strong>: We promised NEVER to use an AI to write our ethics rules, choose our moral values, or replace our real human discussions!</p>
    `
  },
  {
    title: "Chapter 3: Watch Out for the Lazy Robot Traps!",
    subtitle: "The 6 Danger Cards that teach us why computers shouldn't do our thinking",
    body: `
      <p>In Week 1, our teachers handed us <strong>Six Danger Cards</strong> showing what happens when people get lazy with AI:</p>
      <div class="palace-cards-grid" style="margin: 1.5rem 0;">
        <div class="palace-evidence-card">
          <h4 style="color:#ffd700;">Card 1: The Steamroller</h4>
          <p class="pec-harm">The computer squishes all the beautiful circular, ancient ideas into one boring straight line.</p>
        </div>
        <div class="palace-evidence-card">
          <h4 style="color:#ffd700;">Card 5: Brain Muscle Atrophy</h4>
          <p class="pec-harm">If you never walk, your legs get weak. If a computer writes your ideas, your brain gets weak!</p>
        </div>
        <div class="palace-evidence-card">
          <h4 style="color:#ffd700;">Card 6: The Rubber Stamp</h4>
          <p class="pec-harm">You get tired and click "Approve" without even reading what the machine wrote!</p>
        </div>
      </div>
      <p>Because of these cards, we <strong>kicked the AI completely out of Step 3!</strong> Human students do 100% of the designing, and each team was given <strong>only 5 computer tokens</strong> for the entire semester!</p>
    `
  },
  {
    title: "Chapter 4: The Golden Rule: The Assistance Line",
    subtitle: "The difference between holding a flashlight and stealing your homework",
    body: `
      <p>Imagine your bedroom is a mess with Lego blocks and toys everywhere!</p>
      <p><strong>Good Assistance 🔦:</strong> You ask the robot to hold the flashlight in the dark closet so YOU can see which books to put away. You did the work!</p>
      <p><strong>Toxic Substitution 👾:</strong> You tell the robot to clean the room, and it shoves everything under the bed and lies to your parents. You learned nothing, and the room is still dirty!</p>
      <div class="royal-boundary-item b-nonuse" style="margin: 1.5rem 0;">
        <h4 style="color:#fda4af; font-family:var(--font-royal);">THE SCAD GOLDEN RULE:</h4>
        <p style="font-size:1.05rem; color:#fff;">"If your project says the AI recommends something, and the human just approves it with no real review path... YOUR PROJECT FAILS!"</p>
      </div>
      <p>We built a <strong>3-Step Friction Gate</strong>: before any computer suggestion is accepted, students must find 2 real science books that agree, write 100 words on who gets affected, and defend it orally to their teacher!</p>
    `
  },
  {
    title: "Chapter 5: The Secret Detective Test (Peer Trace)",
    subtitle: "Can your friends follow your map without you saying a single word?",
    body: `
      <p>Have you ever drawn a treasure map for your friends? 🗺️</p>
      <p>In <strong>Step 5</strong>, we handed our entire course map to a different team of students (Team 02: Bio-Regional Futures), and we had to <strong>SIT QUIETLY WITH OUR HANDS FOLDED</strong> while they tried to solve our map!</p>
      <div class="royal-checklist" style="margin: 1.5rem 0;">
        <div class="rc-item"><div class="rc-seal">✓</div><div><strong>1. Can they follow the path from Step 1 to 5?</strong> (Passed!)</div></div>
        <div class="rc-item"><div class="rc-seal">✓</div><div><strong>2. Can they spot who makes the big choices?</strong> (Passed!)</div></div>
        <div class="rc-item"><div class="rc-seal">✓</div><div><strong>3. Can they spot the yellow circle where AI helps?</strong> (Passed!)</div></div>
        <div class="rc-item"><div class="rc-seal">✓</div><div><strong>4. Can they spot the red shield where AI is FORBIDDEN?</strong> (Passed!)</div></div>
        <div class="rc-item"><div class="rc-seal">✓</div><div><strong>5. Can they spot the purple crown where only humans decide?</strong> (Passed!)</div></div>
      </div>
      <p>They passed every check! Our map was so honest and clear that anyone could follow it without any secret tricks.</p>
    `
  },
  {
    title: "Chapter 6: The Golden Diary (The Transparency Log)",
    subtitle: "Why honest inventors write down every mistake, every secret, and every promise",
    body: `
      <p>Most diaries are secret books kept under your pillow. But the <strong>Transparency Log</strong> is a <strong>Golden Diary of Truth</strong> that you leave wide open on the table for everyone to read!</p>
      <div class="palace-log-scroll" style="margin: 1.5rem 0;">
        <div class="palace-log-entry">
          <div class="ple-top"><span>⚜️ SEPTEMBER 08, 2026</span><span>THE MISTAKE WE CAUGHT</span></div>
          <div class="ple-desc">We realized our design forgot the river and the children of 2526! We wrote down the mistake and added them immediately.</div>
        </div>
        <div class="palace-log-entry">
          <div class="ple-top"><span>⚜️ SEPTEMBER 14, 2026</span><span>THE DIRECTOR'S WARNING</span></div>
          <div class="ple-desc">The teacher caught us trying to let AI help in Step 3. We wrote it down and kicked the AI out of the design room!</div>
        </div>
      </div>
      <p>When you write down your mistakes and your promises, you prove to your teachers, your classmates, and future generations that you never cheated.</p>
    `
  },
  {
    title: "Chapter 7: Epilogue — The 500-Year Treasure Box",
    subtitle: "The Capstone Blueprint and our gift to the Seventh Generation",
    body: `
      <p>At the end of the journey, our teachers didn't ask for ten tiny pieces of homework. They asked for <strong>ONE MASTER TREASURE</strong>:</p>
      <div class="royal-boundary-item b-ai" style="margin: 1.5rem 0; padding: 1.5rem;">
        <h3 style="color:#ffd700; font-family:var(--font-royal); font-size:1.3rem;">The Deep-Time Anti-Fragility Blueprint & Generational Ethics Charter</h3>
        <p style="margin-top:0.5rem; font-size:1.05rem; line-height:1.7;">
          1. <strong>The 500-Year Living Design:</strong> Moving salt-marsh roots that grow and adapt with rising seas instead of concrete walls that crack.<br>
          2. <strong>The Governed AI Helper:</strong> A climate simulator that tests our designs against giant storms without taking our pencil.<br>
          3. <strong>The Seventh-Generation Promise:</strong> A signed covenant promising to protect the clean water, birds, and children of Year 2526!
        </p>
      </div>
      <p>Thank you for traveling through deep time with us! Remember: being a great designer doesn't mean having the fastest computer—it means having the <strong>biggest heart</strong> and the <strong>courage to think 500 years ahead</strong>! 🌟</p>
    `
  }
];

function initStorybookReader() {
  let currentChapter = 0;
  const titleEl = document.getElementById('storybook-chapter-title');
  const contentEl = document.getElementById('storybook-content-area');
  const selectEl = document.getElementById('storybook-chapter-select');
  const indicatorEl = document.getElementById('sb-page-indicator');
  const prevBtn = document.getElementById('sb-prev-btn');
  const nextBtn = document.getElementById('sb-next-btn');

  if (!contentEl) return;

  function renderChapter(idx) {
    currentChapter = Math.max(0, Math.min(storybookChapters.length - 1, idx));
    const ch = storybookChapters[currentChapter];

    titleEl.textContent = ch.title;
    contentEl.innerHTML = `
      <div style="font-family:var(--font-serif); font-style:italic; font-size:1.3rem; color:var(--gold-light); margin-bottom:1.5rem;">
        ${ch.subtitle}
      </div>
      ${ch.body}
    `;

    if (selectEl) selectEl.value = currentChapter;
    if (indicatorEl) indicatorEl.textContent = `Chapter ${currentChapter + 1} of ${storybookChapters.length}`;
    if (prevBtn) prevBtn.disabled = currentChapter === 0;
    if (nextBtn) nextBtn.disabled = currentChapter === storybookChapters.length - 1;
  }

  renderChapter(0);

  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      renderChapter(parseInt(e.target.value));
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      renderChapter(currentChapter - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      renderChapter(currentChapter + 1);
    });
  }
}
