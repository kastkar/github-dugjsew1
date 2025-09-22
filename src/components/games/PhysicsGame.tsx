import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PhysicsGameProps {
  onClose: () => void;
}

const PhysicsGame = ({ onClose }: PhysicsGameProps) => {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="min-h-screen">
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Platform
          </button>
        </div>
        
        <iframe
          srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Physics Fun — Quiz · Motion · Race</title>

<!-- Minimal fonts & reset -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

<style>
  :root{
    --bg:#0f1724;
    --panel:#07102a;
    --accent:#6ee7b7;
    --primary:#5b21b6;
    --btn-grad: linear-gradient(90deg,#06b6d4,#3b82f6);
    --card-grad: linear-gradient(180deg,#0b1220,#0f1724);
  }
  *{box-sizing:border-box}
  body{
    margin:0;
    font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: linear-gradient(180deg, #071028 0%, #071025 100%);
    color:#e6eef8;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:18px;
  }

  .app {
    width:100%;
    max-width:980px;
    background: var(--card-grad);
    border-radius:14px;
    padding:18px;
    box-shadow: 0 20px 50px rgba(5,9,20,0.6);
    border:1px solid rgba(255,255,255,0.03);
  }

  header {
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    margin-bottom:8px;
  }
  header h1 {
    font-size:1.35rem;
    margin:0;
    color: #bfe9d8;
    display:flex;
    gap:8px;
    align-items:center;
  }
  header .small {
    color:#9fbac6;
    font-size:0.9rem;
  }

  main {
    display:grid;
    grid-template-columns: 1fr;
    gap:14px;
  }

  /* Panels */
  .panel {
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    padding:14px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.02);
  }

  /* Start screen */
  #start-screen {
    display:flex;
    flex-direction:column;
    gap:12px;
    align-items:center;
    text-align:center;
  }
  #start-screen p {margin:0;color:#cdeef1}
  .big-btn {
    padding:12px 20px;
    font-size:16px;
    border-radius:12px;
    border:none;
    cursor:pointer;
    background: var(--btn-grad);
    color:#021024;
    font-weight:700;
    box-shadow: 0 8px 18px rgba(10,20,40,0.5);
  }

  /* Quiz */
  #quiz-panel { display:none; }
  #question { font-size:1.05rem; margin:0 0 12px 0; color:#eafff6; }
  .options { display:flex; flex-direction:column; gap:10px; }
  .opt-btn {
    padding:12px;
    border-radius:10px;
    border:none;
    cursor:pointer;
    background: linear-gradient(90deg,#ffb86b,#ff6b6b);
    color:#041021;
    font-weight:600;
    box-shadow: 0 6px 12px rgba(0,0,0,0.4);
    font-size:15px;
  }
  .opt-btn.disabled { opacity:0.6; pointer-events:none; }

  .controls-row { display:flex; gap:10px; margin-top:12px; justify-content:center; }
  .small-btn {
    padding:10px 14px;border-radius:10px;border:none;cursor:pointer;
    background: linear-gradient(90deg,#60a5fa,#7c3aed); color:white; font-weight:600;
  }

  /* Motion simulation */
  #motion-panel { display:none; }
  .game-area {
    display:flex; gap:14px; flex-direction:row; align-items:center; justify-content:space-between;
    flex-wrap:wrap;
  }
  #track {
    flex:1 1 320px;
    height:120px;
    background: linear-gradient(180deg,#cdeccf, #bfe1b9);
    border-radius:10px;
    border:3px solid #06374c;
    position:relative;
    overflow:hidden;
  }
  #sim-car {
    width:56px;height:36px;background:linear-gradient(180deg,#ff6b6b,#ff3b3b);
    position:absolute; left:8px; top:42px; border-radius:8px; box-shadow:0 6px rgba(0,0,0,0.25);
    display:flex;align-items:center;justify-content:center;color:white;font-weight:700;
  }
  canvas#sim-graph {
    flex:0 0 320px;
    height:150px;
    background:#071323;
    border-radius:8px;
    border:2px solid rgba(255,255,255,0.04);
  }
  .label { font-size:0.95rem; color:#cfeee7; margin:0 0 6px 0 }

  /* Race mode */
  #race-panel { display:none; }
  #race-area {
    display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;
  }
  #race-track {
    flex:1 1 640px;
    height:320px;
    background: linear-gradient(180deg,#1f2a44,#0f1724);
    border-radius:12px; position:relative; overflow:hidden; border:3px solid #2f165a;
  }
  .road-strip {
    position:absolute; left:0; right:0; height:80px; top:20px; background:#2a2e4a;
    border-top:6px dashed #f6e08f; border-bottom:6px dashed #f6e08f;
  }
  #race-car {
    position:absolute; width:96px; height:56px; left:calc(50% - 48px); bottom:40px;
    background:linear-gradient(180deg,#06b6d4,#3b82f6);
    border-radius:12px; box-shadow: 0 12px rgba(0,0,0,0.45); display:flex;align-items:center;justify-content:center;
    color:white;font-weight:700;
    transition:left 0.15s ease;
  }
  #dashboard {
    width:260px; flex:0 0 260px; background: linear-gradient(180deg,#071125,#07102a); border-radius:10px;
    padding:12px; border:2px solid rgba(255,255,255,0.03);
  }
  .dash-row { display:flex; justify-content:space-between; margin-bottom:8px; color:#bfe7de; }
  .ctrls { display:flex; gap:8px; flex-wrap:wrap; margin-top:10px; justify-content:center; }
  .control {
    width:64px; height:64px; border-radius:12px; border:none; background: linear-gradient(180deg,#6b21a8,#4b1f7a);
    color:white; font-weight:700; font-size:18px; display:flex;align-items:center;justify-content:center;
    box-shadow:0 6px rgba(0,0,0,0.45); touch-action: manipulation;
  }

  /* Results */
  #result-panel { display:none; text-align:center; }
  #result-panel h2 { margin-top:6px; color:#dff7ee; }

  /* Responsive */
  @media (max-width:840px){
    .game-area{flex-direction:column}
    #sim-graph{flex-basis:100%}
    #race-track{flex-basis:100%}
    #dashboard{width:100%; flex-basis:100%;}
  }
</style>
</head>
<body>
  <div class="app" role="application" aria-label="Physics Fun App">
    <header>
      <h1>⚛ Physics Fun — Class 9</h1>
      <div class="small">Quiz · Motion · Race (touch friendly)</div>
    </header>

    <main>
      <!-- START SCREEN -->
      <section id="start-panel" class="panel" style="display:block">
        <div id="start-screen">
          <h2 style="margin:6px 0 0 0;color:#fff">Welcome!</h2>
          <p>Learn forces & motion with a quiz, see a live simulation (graph), then try an interactive race challenge.</p>
          <div class="controls-row" style="justify-content:center;margin-top:12px">
            <button id="btn-start-quiz" class="big-btn">Start Quiz</button>
            <button id="btn-skip-quiz" class="big-btn" style="background:linear-gradient(90deg,#34d399,#10b981);">Skip → Motion</button>
          </div>
        </div>
      </section>

      <!-- QUIZ PANEL -->
      <section id="quiz-panel" class="panel">
        <p id="question" class="label"></p>
        <div id="options" class="options" role="list"></div>
        <div class="controls-row">
          <button id="btn-next-quiz" class="small-btn">Next</button>
          <button id="btn-finish-quiz" class="small-btn" style="background:linear-gradient(90deg,#06b6d4,#3b82f6);">Finish & Go to Motion</button>
        </div>
      </section>

      <!-- MOTION SIMULATION PANEL -->
      <section id="motion-panel" class="panel">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
          <div>
            <h3 style="margin:0 0 6px 0;color:#dff7ef">Motion Simulation (Learn)</h3>
            <p class="label" id="sim-instruction">Formula: v = u + at  •  s = ½ a t²</p>
          </div>
          <div style="display:flex;gap:8px;">
            <button id="btn-run-sim" class="small-btn">Run Simulation</button>
            <button id="btn-to-race" class="small-btn" style="background:linear-gradient(90deg,#f97316,#f43f5e);">Go to Race Mode</button>
          </div>
        </div>

        <div class="game-area" style="margin-top:12px">
          <div id="track" aria-hidden="false">
            <div id="sim-car">🚗</div>
          </div>
          <canvas id="sim-graph" width="320" height="150"></canvas>
        </div>

        <div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap">
          <input id="sim-vel-input" type="number" placeholder="Enter predicted v (m/s)" style="padding:10px;border-radius:8px;border:2px solid #0ea5a4;background:#051423;color:#e6f7f5;width:220px;font-weight:600" />
          <button id="btn-check-vel" class="small-btn" style="background:linear-gradient(90deg,#f43f5e,#ef4444);">Check Answer</button>
          <div id="sim-feedback" style="min-width:160px;text-align:center;color:#e0f9ea;font-weight:700"></div>
        </div>
      </section>

      <!-- RACE PANEL -->
      <section id="race-panel" class="panel">
        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
          <div id="race-track" aria-label="race track">
            <div class="road-strip" style="top:40px"></div>
            <div class="road-strip" style="top:160px"></div>
            <div id="race-car">YOU</div>
          </div>

          <div id="dashboard">
            <div class="dash-row"><div>Speed (m/s)</div><div id="dash-speed">0</div></div>
            <div class="dash-row"><div>Acceleration</div><div id="dash-acc">0</div></div>
            <div class="dash-row"><div>Score</div><div id="dash-score">0</div></div>

            <div style="margin-top:8px">
              <div class="label" style="margin-bottom:6px">Controls (touch/press)</div>
              <div class="ctrls">
                <button id="accel" class="control">▲</button>
                <button id="brake" class="control">■</button>
                <button id="left" class="control">◀</button>
                <button id="right" class="control">▶</button>
              </div>
            </div>

            <div style="margin-top:12px">
              <button id="btn-start-race" class="small-btn" style="width:100%">Start Race</button>
              <button id="btn-reset-race" class="small-btn" style="width:100%;margin-top:6px;background:linear-gradient(90deg,#ef4444,#f97316);">Reset Race</button>
            </div>
          </div>
        </div>
      </section>

      <!-- RESULT -->
      <section id="result-panel" class="panel">
        <h2 id="final-title">Well done!</h2>
        <p id="final-text">You completed the activity.</p>
        <div style="display:flex;gap:8px;justify-content:center;margin-top:12px">
          <button id="btn-restart" class="big-btn">Play Again</button>
          <button id="btn-home" class="big-btn" style="background:linear-gradient(90deg,#34d399,#10b981);">Home</button>
        </div>
      </section>
    </main>
  </div>

<script>
/* ----------------------------
   Data: Quiz questions (simple CBSE Class 9)
   ---------------------------- */
const quizQuestions = [
  { q:"Which of the following is NOT a unit of force?", opts:["Newton","Dyne","Joule","Kg·m/s²"], a:"Joule" },
  { q:"If a body moves with constant velocity, its acceleration is:", opts:["Zero","Constant","Increasing","Decreasing"], a:"Zero" },
  { q:"If velocity is doubled, kinetic energy becomes:", opts:["Doubled","Tripled","Four times","Same"], a:"Four times" },
  { q:"Which of these is a vector quantity?", opts:["Speed","Mass","Velocity","Work"], a:"Velocity" }
];

let quizIndex = 0;
let quizScore = 0;

/* ----------------------------
   DOM references
   ---------------------------- */
const startPanel = document.getElementById('start-panel');
const quizPanel = document.getElementById('quiz-panel');
const motionPanel = document.getElementById('motion-panel');
const racePanel = document.getElementById('race-panel');
const resultPanel = document.getElementById('result-panel');

const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnSkipQuiz = document.getElementById('btn-skip-quiz');

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const btnNextQuiz = document.getElementById('btn-next-quiz');
const btnFinishQuiz = document.getElementById('btn-finish-quiz');

const btnRunSim = document.getElementById('btn-run-sim');
const btnToRace = document.getElementById('btn-to-race');
const simCar = document.getElementById('sim-car');
const simGraph = document.getElementById('sim-graph');
const simVelInput = document.getElementById('sim-vel-input');
const btnCheckVel = document.getElementById('btn-check-vel');
const simFeedback = document.getElementById('sim-feedback');

const raceCar = document.getElementById('race-car');
const dashSpeed = document.getElementById('dash-speed');
const dashAcc = document.getElementById('dash-acc');
const dashScore = document.getElementById('dash-score');
const accelBtn = document.getElementById('accel');
const brakeBtn = document.getElementById('brake');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const btnStartRace = document.getElementById('btn-start-race');
const btnResetRace = document.getElementById('btn-reset-race');

const btnRestart = document.getElementById('btn-restart');
const btnHome = document.getElementById('btn-home');

const btnStartMotion = document.getElementById('btn-run-sim');

/* ----------------------------
   App navigation helpers
   ---------------------------- */
function showPanel(p){
  // hide all
  [startPanel, quizPanel, motionPanel, racePanel, resultPanel].forEach(el => el.style.display = 'none');
  p.style.display = 'block';
}

/* ----------------------------
   QUIZ logic
   ---------------------------- */
function startQuiz(){
  quizIndex = 0; quizScore = 0;
  renderQuestion();
  showPanel(quizPanel);
}
function renderQuestion(){
  if(quizIndex >= quizQuestions.length){
    // auto finish
    finishQuiz();
    return;
  }
  const obj = quizQuestions[quizIndex];
  questionEl.textContent = \`Q\${quizIndex+1}. \${obj.q}\`;
  optionsEl.innerHTML = '';
  obj.opts.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.textContent = opt;
    b.setAttribute('role','listitem');
    b.onclick = () => {
      // disable other options briefly
      Array.from(optionsEl.children).forEach(x=>x.classList.add('disabled'));
      if(opt === obj.a){
        b.style.boxShadow = '0 6px rgba(0,0,0,0.15)';
        b.style.transform = 'scale(0.99)';
        quizScore++;
        b.style.background = 'linear-gradient(90deg,#34d399,#10b981)';
      } else {
        b.style.background = 'linear-gradient(90deg,#ef4444,#f97316)';
        // highlight correct one
        Array.from(optionsEl.children).forEach(x => {
          if(x.textContent === obj.a){ x.style.background = 'linear-gradient(90deg,#34d399,#10b981)'; }
        });
      }
      // auto next after short delay
      setTimeout(()=>{ quizIndex++; renderQuestion(); }, 700);
    };
    optionsEl.appendChild(b);
  });
}

function finishQuiz(){
  // show sim next
  showPanel(motionPanel);
  // reflect score somewhere (dashboard later)
  dashScore.textContent = quizScore;
}

/* ----------------------------
   MOTION simulation logic
   - runs a simulation with a = 2 m/s^2, u = 0
   - tRand between 2..6 seconds
   - draws distance-time graph on canvas using requestAnimationFrame
   ---------------------------- */
let simRunning = false;
let simState = null;
function runSimulation(){
  if(simRunning) return;
  // choose t randomly 2..6
  const tMax = Math.floor(Math.random()*5)+2; // 2..6
  const a = 2;
  const correctV = a * tMax;
  simFeedback.textContent = '';
  simVelInput.value = '';
  simState = {
    tMax, a, correctV,
    time:0,
    lastTs: null,
    sHistory: [] // [ {t, s} ]
  };
  // prepare canvas
  const canvas = simGraph;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // axes
  ctx.strokeStyle = '#284b4f';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40,10); ctx.lineTo(40,canvas.height-20); ctx.lineTo(canvas.width-10,canvas.height-20);
  ctx.stroke();
  ctx.fillStyle = '#9eead3';
  ctx.font = '12px Inter';
  ctx.fillText('Distance (m)', 6, 12);
  ctx.fillText('Time (s)', canvas.width-60, canvas.height-6);

  // position car initial
  simCar.style.left = '8px';

  simRunning = true;
  function step(ts){
    if(!simState.lastTs) simState.lastTs = ts;
    const delta = (ts - simState.lastTs)/1000; // seconds
    simState.lastTs = ts;
    simState.time += delta;
    const t = simState.time;
    const s = 0.5 * a * t * t;
    simState.sHistory.push({t,s});

    // move car proportional to s (scale visually)
    const maxVisual = (document.getElementById('track').clientWidth - 80);
    const maxS = 0.5 * a * simState.tMax * simState.tMax;
    const leftPx = 8 + Math.min(maxVisual, (s / maxS) * maxVisual);
    simCar.style.left = leftPx + 'px';

    // draw point on graph
    const ctx = canvas.getContext('2d');
    const plotX = 40 + ( (t / simState.tMax) * (canvas.width - 60) );
    const maxPlotY = maxS * 1.1;
    const plotY = (canvas.height - 20) - ( (s / maxPlotY) * (canvas.height - 40) );

    ctx.fillStyle = '#ffb86b';
    ctx.beginPath();
    ctx.arc(plotX, plotY, 3, 0, Math.PI*2);
    ctx.fill();

    // draw line connecting points
    if(simState.sHistory.length >= 2){
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const prev = simState.sHistory[simState.sHistory.length-2];
      const prevX = 40 + ((prev.t / simState.tMax) * (canvas.width - 60));
      const prevY = (canvas.height - 20) - ((prev.s / maxPlotY) * (canvas.height - 40));
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(plotX, plotY);
      ctx.stroke();
    }

    // stop condition
    if(simState.time >= simState.tMax + 0.05){
      simRunning = false;
      simState.time = simState.tMax;
      // snap car to end visual
      const finalLeft = 8 + Math.min(maxVisual, ( (0.5*a*simState.tMax*simState.tMax) / (0.5*a*simState.tMax*simState.tMax) ) * maxVisual);
      simCar.style.left = finalLeft + 'px';
      // show small hint
      simFeedback.textContent = \`Simulation finished. Predict v after \${simState.tMax}s and enter above.\`;
      return;
    }
    // continue
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// check velocity
btnCheckVel.addEventListener('click', () => {
  if(!simState){ simFeedback.textContent = 'Run the simulation first.'; return; }
  const val = Number(simVelInput.value);
  if(Number.isNaN(val)){ simFeedback.textContent = 'Enter a number.'; return; }
  if(Math.abs(val - simState.correctV) < 0.001){
    simFeedback.textContent = '✅ Correct! v = ' + simState.correctV + ' m/s';
    quizScore = Math.max(quizScore, quizScore); // keep
    // increment dashboard score
    dashScore.textContent = Number(dashScore.textContent) + 1;
  } else {
    simFeedback.textContent = \`❌ Wrong — correct v = \${simState.correctV} m/s\`;
  }
});

/* ----------------------------
   RACE mode
   - simple loop using requestAnimationFrame
   - accelerate/brake via touch/press buttons
   - small challenge: slow before the turn
   ---------------------------- */
let raceState = {
  running:false,
  speed:0,
  acc:0,
  maxSpeed:18,
  posX: 50, // left in %
  score: Number(dashScore.textContent) || 0,
  roadOffset:0,
  lastTs: null
};

function resetRace(){
  raceState = {...raceState, running:false, speed:0, acc:0, posX:50, roadOffset:0, lastTs:null, score: Number(dashScore.textContent) || 0};
  raceCar.style.left = 'calc(50% - 48px)';
  dashSpeed.textContent = '0.0';
  dashAcc.textContent = '0.0';
  dashScore.textContent = raceState.score;
}

function startRace(){
  if(raceState.running) return;
  raceState.running = true;
  raceState.lastTs = null;
  raceLoop();
}

function stopRace(){
  raceState.running = false;
  raceState.lastTs = null;
}

function raceLoop(ts){
  if(!raceState.running) return;
  if(!raceState.lastTs) raceState.lastTs = ts;
  const dt = (ts - raceState.lastTs)/1000;
  raceState.lastTs = ts;

  // update speed using acc
  raceState.speed += raceState.acc * dt;
  if(raceState.speed > raceState.maxSpeed) raceState.speed = raceState.maxSpeed;
  if(raceState.speed < 0) raceState.speed = 0;

  // move track vertically to simulate forward motion
  raceState.roadOffset += raceState.speed * dt * 10; // visual factor
  document.querySelectorAll('.road-strip').forEach((strip, i) => {
    strip.style.top = ( (i*120) - (raceState.roadOffset % 240) ) + 'px';
  });

  // update positions & UI
  dashSpeed.textContent = raceState.speed.toFixed(1);
  dashAcc.textContent = raceState.acc.toFixed(1);

  // simple challenge: if speed > 8 when road turns (simulate at offset multiple)
  if(Math.floor(raceState.roadOffset) % 800 > 380 && Math.floor(raceState.roadOffset) % 800 < 420){
    // challenge zone
    if(raceState.speed > 8){
      // fail: spinner effect and reset small penalty
      raceCar.style.transform = 'rotate(15deg)';
      setTimeout(()=> raceCar.style.transform = '', 800);
      raceState.speed = Math.max(0, raceState.speed - 5);
      raceState.score = Math.max(0, raceState.score - 1);
      dashScore.textContent = raceState.score;
    } else {
      // success small bonus
      raceState.score += 0.02; // accumulate small
      dashScore.textContent = Math.floor(raceState.score);
    }
  }

  // left/right movement is handled by posX
  raceCar.style.left = \`calc(\${raceState.posX}% - 48px)\`;

  // next frame
  requestAnimationFrame(raceLoop);
}

/* Button interaction: continuous press to accelerate/brake */
let accelPressed = false;
let brakePressed = false;

function setAccState(){
  if(accelPressed && !brakePressed) raceState.acc = 3.0;
  else if(brakePressed && !accelPressed) raceState.acc = -4.0;
  else raceState.acc = -1.0; // mild drag
}

/* Touch / mouse handlers for controls */
function attachPressHold(el, onDown, onUp){
  el.addEventListener('touchstart', e=>{ e.preventDefault(); onDown(); }, {passive:false});
  el.addEventListener('mousedown', e=>{ e.preventDefault(); onDown(); });
  document.addEventListener('touchend', e=>{ onUp(); }, {passive:true});
  document.addEventListener('mouseup', e=>{ onUp(); });
}

/* setup control button binding */
attachPressHold(accelBtn, ()=>{ accelPressed = true; setAccState(); startRace(); }, ()=>{ accelPressed = false; setAccState(); });
attachPressHold(brakeBtn, ()=>{ brakePressed = true; setAccState(); startRace(); }, ()=>{ brakePressed = false; setAccState(); });

leftBtn.addEventListener('click', ()=> {
  raceState.posX = Math.max(20, raceState.posX - 12);
});
rightBtn.addEventListener('click', ()=> {
  raceState.posX = Math.min(80, raceState.posX + 12);
});

btnStartRace.addEventListener('click', ()=> {
  startRace();
});
btnResetRace.addEventListener('click', ()=> {
  resetRace();
});

/* ----------------------------
   Wire up top-level navigation buttons
   ---------------------------- */
btnStartQuiz.addEventListener('click', () => {
  startQuiz();
});
btnSkipQuiz.addEventListener('click', ()=> {
  showPanel(motionPanel);
});

btnNextQuiz.addEventListener('click', ()=> {
  quizIndex++;
  renderQuestion();
});

btnFinishQuiz.addEventListener('click', ()=> {
  finishQuiz();
});

btnRunSim.addEventListener('click', ()=> {
  runSimulation();
});

btnToRace.addEventListener('click', ()=> {
  showPanel(racePanel);
  // ensure race reset
  resetRace();
});

btnStartMotion.addEventListener('click', ()=> {
  runSimulation();
});

btnHome.addEventListener('click', ()=> {
  // back to start
  showPanel(startPanel);
});

btnRestart.addEventListener('click', ()=> {
  // restart whole app
  quizIndex = 0; quizScore = 0;
  resetRace();
  showPanel(startPanel);
});

/* start default view */
showPanel(startPanel);
</script>
</body>
</html>`}
          className="w-full h-screen border-0"
          title="Physics Game - Motion & Forces"
        />
      </div>
    </div>
  );
};

export default PhysicsGame;