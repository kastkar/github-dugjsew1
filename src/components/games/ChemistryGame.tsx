import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ChemistryGameProps {
  onClose: () => void;
}

const ChemistryGame = ({ onClose }: ChemistryGameProps) => {
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chemistry Quest: Periodic Table Adventure</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      color: white;
      overflow-x: auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      text-align: center;
      margin-bottom: 30px;
    }

    .header h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .game-section {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 25px;
      margin-bottom: 25px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .hidden {
      display: none;
    }

    /* Level Selection */
    .level-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .level-card {
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      padding: 20px;
      border-radius: 12px;
      cursor: pointer;
      transition: transform 0.3s ease;
      text-align: center;
    }

    .level-card:hover {
      transform: translateY(-5px);
    }

    .level-card h3 {
      margin-bottom: 10px;
      font-size: 1.3rem;
    }

    /* Periodic Table */
    .periodic-table {
      display: grid;
      grid-template-columns: repeat(18, 1fr);
      gap: 2px;
      max-width: 100%;
      overflow-x: auto;
      margin: 20px 0;
    }

    .element {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      padding: 8px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      min-height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.8rem;
    }

    .element:hover {
      transform: scale(1.1);
      z-index: 10;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .element.metal {
      background: linear-gradient(135deg, #ffeaa7, #fdcb6e);
      color: #2d3436;
    }

    .element.nonmetal {
      background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    }

    .element.metalloid {
      background: linear-gradient(135deg, #fd79a8, #e84393);
    }

    .element.noble-gas {
      background: linear-gradient(135deg, #00cec9, #00b894);
    }

    .element.correct {
      background: linear-gradient(135deg, #00b894, #00cec9) !important;
      animation: pulse 0.5s ease-in-out;
    }

    .element.wrong {
      background: linear-gradient(135deg, #e17055, #d63031) !important;
      animation: shake 0.5s ease-in-out;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }

    .atomic-number {
      font-size: 0.7rem;
      font-weight: bold;
    }

    .symbol {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 2px 0;
    }

    .name {
      font-size: 0.6rem;
    }

    /* Quiz Section */
    .quiz-question {
      font-size: 1.3rem;
      margin-bottom: 20px;
      text-align: center;
    }

    .quiz-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }

    .quiz-option {
      background: linear-gradient(135deg, #74b9ff, #0984e3);
      padding: 15px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      border: none;
      color: white;
      font-size: 1rem;
    }

    .quiz-option:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    /* Compound Builder */
    .compound-builder {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }

    .element-selector {
      background: linear-gradient(135deg, #fd79a8, #fdcb6e);
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #2d3436;
      font-weight: bold;
    }

    .element-selector:hover {
      transform: scale(1.05);
    }

    .compound-display {
      background: rgba(255, 255, 255, 0.2);
      padding: 15px 25px;
      border-radius: 10px;
      font-size: 1.5rem;
      font-weight: bold;
      min-width: 100px;
      text-align: center;
      border: 2px dashed rgba(255, 255, 255, 0.5);
    }

    /* Controls */
    .controls {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    .btn {
      background: linear-gradient(135deg, #00b894, #00cec9);
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .btn.secondary {
      background: linear-gradient(135deg, #636e72, #2d3436);
    }

    .score {
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 20px 0;
    }

    .info-panel {
      background: rgba(0, 0, 0, 0.3);
      padding: 20px;
      border-radius: 10px;
      margin-top: 20px;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin: 20px 0;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .legend-color {
      width: 20px;
      height: 20px;
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .periodic-table {
        grid-template-columns: repeat(9, 1fr);
      }
      
      .element {
        font-size: 0.7rem;
        padding: 4px;
        min-height: 50px;
      }
      
      .symbol {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🧪 Chemistry Quest: Periodic Table Adventure</h1>
      <p>Master the elements and become a chemistry champion!</p>
    </div>

    <!-- Level Selection -->
    <div id="level-selection" class="game-section">
      <h2>Choose Your Chemistry Adventure</h2>
      <div class="level-grid">
        <div class="level-card" onclick="startLevel('explore')">
          <h3>🔍 Explore the Table</h3>
          <p>Discover elements and their properties</p>
        </div>
        <div class="level-card" onclick="startLevel('quiz')">
          <h3>🧠 Element Quiz</h3>
          <p>Test your knowledge of the periodic table</p>
        </div>
        <div class="level-card" onclick="startLevel('compounds')">
          <h3>⚗️ Compound Builder</h3>
          <p>Create chemical compounds</p>
        </div>
        <div class="level-card" onclick="startLevel('challenge')">
          <h3>🏆 Ultimate Challenge</h3>
          <p>Master-level chemistry puzzles</p>
        </div>
      </div>
    </div>

    <!-- Explore Level -->
    <div id="explore-level" class="game-section hidden">
      <h2>🔍 Explore the Periodic Table</h2>
      <p>Click on any element to learn about it!</p>
      
      <div class="legend">
        <div class="legend-item">
          <div class="legend-color" style="background: linear-gradient(135deg, #ffeaa7, #fdcb6e);"></div>
          <span>Metals</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: linear-gradient(135deg, #a29bfe, #6c5ce7);"></div>
          <span>Non-metals</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: linear-gradient(135deg, #fd79a8, #e84393);"></div>
          <span>Metalloids</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: linear-gradient(135deg, #00cec9, #00b894);"></div>
          <span>Noble Gases</span>
        </div>
      </div>

      <div id="periodic-table" class="periodic-table"></div>
      
      <div id="element-info" class="info-panel" style="display: none;">
        <h3 id="element-title"></h3>
        <p id="element-description"></p>
        <div id="element-properties"></div>
      </div>

      <div class="controls">
        <button class="btn secondary" onclick="goHome()">Back to Menu</button>
      </div>
    </div>

    <!-- Quiz Level -->
    <div id="quiz-level" class="game-section hidden">
      <h2>🧠 Element Quiz Challenge</h2>
      <div class="score">Score: <span id="quiz-score">0</span></div>
      
      <div id="quiz-question" class="quiz-question"></div>
      <div id="quiz-options" class="quiz-options"></div>
      
      <div class="controls">
        <button class="btn" id="next-question" onclick="nextQuestion()" style="display: none;">Next Question</button>
        <button class="btn secondary" onclick="goHome()">Back to Menu</button>
      </div>
    </div>

    <!-- Compound Builder Level -->
    <div id="compounds-level" class="game-section hidden">
      <h2>⚗️ Compound Builder Lab</h2>
      <p>Create the compound: <span id="target-compound">H₂O</span></p>
      <div class="score">Score: <span id="compound-score">0</span></div>
      
      <div class="compound-builder">
        <div class="element-selector" onclick="addElement('H')">H (Hydrogen)</div>
        <div class="element-selector" onclick="addElement('O')">O (Oxygen)</div>
        <div class="element-selector" onclick="addElement('C')">C (Carbon)</div>
        <div class="element-selector" onclick="addElement('N')">N (Nitrogen)</div>
        <div class="element-selector" onclick="addElement('Na')">Na (Sodium)</div>
        <div class="element-selector" onclick="addElement('Cl')">Cl (Chlorine)</div>
      </div>
      
      <div class="compound-display" id="current-compound">Click elements to build</div>
      
      <div class="controls">
        <button class="btn" onclick="checkCompound()">Check Compound</button>
        <button class="btn secondary" onclick="clearCompound()">Clear</button>
        <button class="btn secondary" onclick="goHome()">Back to Menu</button>
      </div>
    </div>

    <!-- Challenge Level -->
    <div id="challenge-level" class="game-section hidden">
      <h2>🏆 Ultimate Chemistry Challenge</h2>
      <p>Find the element with atomic number: <span id="challenge-number">6</span></p>
      <div class="score">Score: <span id="challenge-score">0</span></div>
      
      <div id="challenge-table" class="periodic-table"></div>
      
      <div class="controls">
        <button class="btn" onclick="newChallenge()">New Challenge</button>
        <button class="btn secondary" onclick="goHome()">Back to Menu</button>
      </div>
    </div>
  </div>

  <script>
    // Periodic table data (simplified)
    const elements = [
      {symbol: 'H', name: 'Hydrogen', number: 1, type: 'nonmetal', description: 'The lightest and most abundant element in the universe.'},
      {symbol: 'He', name: 'Helium', number: 2, type: 'noble-gas', description: 'A noble gas used in balloons and as a coolant.'},
      {symbol: 'Li', name: 'Lithium', number: 3, type: 'metal', description: 'A soft metal used in batteries and mood stabilizers.'},
      {symbol: 'Be', name: 'Beryllium', number: 4, type: 'metal', description: 'A lightweight metal used in aerospace applications.'},
      {symbol: 'B', name: 'Boron', number: 5, type: 'metalloid', description: 'A metalloid used in glass and ceramics.'},
      {symbol: 'C', name: 'Carbon', number: 6, type: 'nonmetal', description: 'The basis of all organic life on Earth.'},
      {symbol: 'N', name: 'Nitrogen', number: 7, type: 'nonmetal', description: 'Makes up 78% of Earth\\'s atmosphere.'},
      {symbol: 'O', name: 'Oxygen', number: 8, type: 'nonmetal', description: 'Essential for breathing and combustion.'},
      {symbol: 'F', name: 'Fluorine', number: 9, type: 'nonmetal', description: 'The most reactive element, used in toothpaste.'},
      {symbol: 'Ne', name: 'Neon', number: 10, type: 'noble-gas', description: 'A noble gas that glows orange-red in electric discharge.'},
      {symbol: 'Na', name: 'Sodium', number: 11, type: 'metal', description: 'A soft metal that reacts violently with water.'},
      {symbol: 'Mg', name: 'Magnesium', number: 12, type: 'metal', description: 'A light metal that burns with a bright white flame.'},
      {symbol: 'Al', name: 'Aluminum', number: 13, type: 'metal', description: 'A lightweight metal used in cans and aircraft.'},
      {symbol: 'Si', name: 'Silicon', number: 14, type: 'metalloid', description: 'The basis of computer chips and glass.'},
      {symbol: 'P', name: 'Phosphorus', number: 15, type: 'nonmetal', description: 'Essential for DNA and bones, used in matches.'},
      {symbol: 'S', name: 'Sulfur', number: 16, type: 'nonmetal', description: 'A yellow element that smells like rotten eggs.'},
      {symbol: 'Cl', name: 'Chlorine', number: 17, type: 'nonmetal', description: 'A green gas used to disinfect water.'},
      {symbol: 'Ar', name: 'Argon', number: 18, type: 'noble-gas', description: 'An inert gas used in light bulbs.'},
      {symbol: 'K', name: 'Potassium', number: 19, type: 'metal', description: 'Essential for nerve function, found in bananas.'},
      {symbol: 'Ca', name: 'Calcium', number: 20, type: 'metal', description: 'Essential for strong bones and teeth.'}
    ];

    const quizQuestions = [
      {question: 'What is the symbol for Gold?', options: ['Au', 'Ag', 'Go', 'Gd'], correct: 'Au'},
      {question: 'Which element has atomic number 6?', options: ['Oxygen', 'Carbon', 'Nitrogen', 'Boron'], correct: 'Carbon'},
      {question: 'What type of element is Helium?', options: ['Metal', 'Non-metal', 'Noble gas', 'Metalloid'], correct: 'Noble gas'},
      {question: 'Which element is essential for breathing?', options: ['Nitrogen', 'Carbon', 'Oxygen', 'Hydrogen'], correct: 'Oxygen'},
      {question: 'What is the lightest element?', options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'], correct: 'Hydrogen'}
    ];

    const compounds = [
      {formula: 'H₂O', elements: ['H', 'H', 'O'], name: 'Water'},
      {formula: 'CO₂', elements: ['C', 'O', 'O'], name: 'Carbon Dioxide'},
      {formula: 'NaCl', elements: ['Na', 'Cl'], name: 'Salt'},
      {formula: 'CH₄', elements: ['C', 'H', 'H', 'H', 'H'], name: 'Methane'}
    ];

    let currentQuiz = 0;
    let quizScore = 0;
    let compoundScore = 0;
    let challengeScore = 0;
    let currentCompound = [];
    let targetCompoundIndex = 0;

    function startLevel(level) {
      document.querySelectorAll('.game-section').forEach(section => {
        section.classList.add('hidden');
      });
      
      switch(level) {
        case 'explore':
          document.getElementById('explore-level').classList.remove('hidden');
          createPeriodicTable('periodic-table');
          break;
        case 'quiz':
          document.getElementById('quiz-level').classList.remove('hidden');
          startQuiz();
          break;
        case 'compounds':
          document.getElementById('compounds-level').classList.remove('hidden');
          startCompoundBuilder();
          break;
        case 'challenge':
          document.getElementById('challenge-level').classList.remove('hidden');
          createPeriodicTable('challenge-table');
          newChallenge();
          break;
      }
    }

    function createPeriodicTable(containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      
      // Create a simplified periodic table layout
      const positions = [
        [1, 18], [1, 2, 13, 14, 15, 16, 17, 18], // Periods 1-2
        [1, 2, 13, 14, 15, 16, 17, 18], // Period 3
        [1, 2, 13, 14, 15, 16, 17, 18]  // Period 4 (simplified)
      ];
      
      let elementIndex = 0;
      positions.forEach((period, periodIndex) => {
        period.forEach((group, groupIndex) => {
          if (elementIndex < elements.length) {
            const element = elements[elementIndex];
            const elementDiv = document.createElement('div');
            elementDiv.className = \`element \${element.type}\`;
            elementDiv.style.gridColumn = group;
            elementDiv.style.gridRow = periodIndex + 1;
            
            elementDiv.innerHTML = \`
              <div class="atomic-number">\${element.number}</div>
              <div class="symbol">\${element.symbol}</div>
              <div class="name">\${element.name}</div>
            \`;
            
            if (containerId === 'periodic-table') {
              elementDiv.onclick = () => showElementInfo(element);
            } else if (containerId === 'challenge-table') {
              elementDiv.onclick = () => checkChallenge(element);
            }
            
            container.appendChild(elementDiv);
            elementIndex++;
          }
        });
      });
    }

    function showElementInfo(element) {
      const infoPanel = document.getElementById('element-info');
      const title = document.getElementById('element-title');
      const description = document.getElementById('element-description');
      const properties = document.getElementById('element-properties');
      
      title.textContent = \`\${element.name} (\${element.symbol})\`;
      description.textContent = element.description;
      properties.innerHTML = \`
        <p><strong>Atomic Number:</strong> \${element.number}</p>
        <p><strong>Type:</strong> \${element.type.replace('-', ' ')}</p>
      \`;
      
      infoPanel.style.display = 'block';
    }

    function startQuiz() {
      currentQuiz = 0;
      quizScore = 0;
      document.getElementById('quiz-score').textContent = quizScore;
      showQuestion();
    }

    function showQuestion() {
      if (currentQuiz >= quizQuestions.length) {
        document.getElementById('quiz-question').textContent = \`Quiz Complete! Final Score: \${quizScore}/\${quizQuestions.length}\`;
        document.getElementById('quiz-options').innerHTML = '';
        return;
      }
      
      const question = quizQuestions[currentQuiz];
      document.getElementById('quiz-question').textContent = question.question;
      
      const optionsContainer = document.getElementById('quiz-options');
      optionsContainer.innerHTML = '';
      
      question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => checkAnswer(option, question.correct, button);
        optionsContainer.appendChild(button);
      });
    }

    function checkAnswer(selected, correct, button) {
      const allButtons = document.querySelectorAll('.quiz-option');
      allButtons.forEach(btn => btn.style.pointerEvents = 'none');
      
      if (selected === correct) {
        button.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
        quizScore++;
      } else {
        button.style.background = 'linear-gradient(135deg, #e17055, #d63031)';
        // Highlight correct answer
        allButtons.forEach(btn => {
          if (btn.textContent === correct) {
            btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
          }
        });
      }
      
      document.getElementById('quiz-score').textContent = quizScore;
      document.getElementById('next-question').style.display = 'block';
    }

    function nextQuestion() {
      currentQuiz++;
      document.getElementById('next-question').style.display = 'none';
      showQuestion();
    }

    function startCompoundBuilder() {
      targetCompoundIndex = Math.floor(Math.random() * compounds.length);
      document.getElementById('target-compound').textContent = compounds[targetCompoundIndex].formula;
      currentCompound = [];
      updateCompoundDisplay();
    }

    function addElement(symbol) {
      currentCompound.push(symbol);
      updateCompoundDisplay();
    }

    function updateCompoundDisplay() {
      const display = document.getElementById('current-compound');
      if (currentCompound.length === 0) {
        display.textContent = 'Click elements to build';
      } else {
        display.textContent = currentCompound.join('');
      }
    }

    function checkCompound() {
      const target = compounds[targetCompoundIndex];
      const sorted1 = [...currentCompound].sort();
      const sorted2 = [...target.elements].sort();
      
      if (JSON.stringify(sorted1) === JSON.stringify(sorted2)) {
        alert(\`Correct! You made \${target.name}!\`);
        compoundScore++;
        document.getElementById('compound-score').textContent = compoundScore;
        startCompoundBuilder(); // New compound
      } else {
        alert('Not quite right. Try again!');
      }
    }

    function clearCompound() {
      currentCompound = [];
      updateCompoundDisplay();
    }

    let challengeTarget = null;

    function newChallenge() {
      challengeTarget = elements[Math.floor(Math.random() * elements.length)];
      document.getElementById('challenge-number').textContent = challengeTarget.number;
      
      // Reset all elements
      document.querySelectorAll('#challenge-table .element').forEach(el => {
        el.classList.remove('correct', 'wrong');
      });
    }

    function checkChallenge(element) {
      const elementDiv = event.target.closest('.element');
      
      if (element.number === challengeTarget.number) {
        elementDiv.classList.add('correct');
        challengeScore++;
        document.getElementById('challenge-score').textContent = challengeScore;
        setTimeout(newChallenge, 1000);
      } else {
        elementDiv.classList.add('wrong');
      }
    }

    function goHome() {
      document.querySelectorAll('.game-section').forEach(section => {
        section.classList.add('hidden');
      });
      document.getElementById('level-selection').classList.remove('hidden');
    }
  </script>
</body>
</html>`}
          className="w-full h-screen border-0"
          title="Chemistry Game - Periodic Table Adventure"
        />
      </div>
    </div>
  );
};

export default ChemistryGame;