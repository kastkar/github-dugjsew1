import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BiologyGameProps {
  onClose: () => void;
}

const BiologyGame = ({ onClose }: BiologyGameProps) => {
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
          srcDoc={`<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Food Quest: Balanced Diet Adventure</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #f0f8ff;
      margin: 0;
      padding: 20px;
    }
    h1 {
      color: #2c3e50;
    }
    .game-section {
      margin: 20px auto;
      padding: 15px;
      width: 90%;
      max-width: 700px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .food-item, .plate-item, .disease-option {
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background: #eaf2f8;
      border: 2px solid #3498db;
      border-radius: 8px;
      cursor: grab;
    }
    .bucket, .plate-zone {
      display: inline-block;
      margin: 15px;
      padding: 20px;
      width: 150px;
      height: 120px;
      border: 2px dashed #7f8c8d;
      border-radius: 10px;
      vertical-align: top;
      background: #fcfcfc;
    }
    .correct {
      background: #2ecc71 !important;
      color: white;
    }
    .wrong {
      background: #e74c3c !important;
      color: white;
    }
    #score {
      font-size: 20px;
      font-weight: bold;
      margin-top: 15px;
    }
    .hidden {
      display: none;
    }
    button {
      margin-top: 15px;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background: #3498db;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>🥗 Food Quest: Balanced Diet Adventure</h1>
  
  <!-- Level 1 -->
  <div id="level1" class="game-section">
    <h2>Level 1: Match Food with Nutrient</h2>
    <div id="foods">
      <div class="food-item" draggable="true" data-nutrient="Carbohydrates">Rice 🍚</div>
      <div class="food-item" draggable="true" data-nutrient="Fats">Butter 🧈</div>
      <div class="food-item" draggable="true" data-nutrient="Vitamins">Orange 🍊</div>
      <div class="food-item" draggable="true" data-nutrient="Minerals">Spinach 🥬</div>
    </div>

    <div id="buckets">
      <div class="bucket" data-nutrient="Carbohydrates">Carbohydrates</div>
   
      <div class="bucket" data-nutrient="Fats">Fats</div>
      <div class="bucket" data-nutrient="Vitamins">Vitamins</div>
      <div class="bucket" data-nutrient="Minerals">Minerals</div>
    </div>
    <p id="score">Score: 0</p>
    <button onclick="nextLevel(2)">Go to Level 2 ▶</button>
  </div>
  
  <!-- Level 2 -->
  <div id="level2" class="game-section hidden">
    <h2>Level 2: Deficiency Disease Quiz</h2>
    <p id="quiz-question">A child has weak bones and bowed legs. Which deficiency is this?</p>
    <div>
      <div class="disease-option" onclick="checkAnswer(this, 'Vitamin D Deficiency (Rickets)')">Vitamin D Deficiency (Rickets)</div>
      <div class="disease-option" onclick="checkAnswer(this, 'Iron Deficiency (Anaemia)')">Iron Deficiency (Anaemia)</div>
      <div class="disease-option" onclick="checkAnswer(this, 'Iodine Deficiency (Goitre)')">Iodine Deficiency (Goitre)</div>
    </div>
    <button onclick="nextLevel(3)">Go to Level 3 ▶</button>
  </div>
  
  <!-- Level 3 -->
  <div id="level3" class="game-section hidden">
    <h2>Level 3: Build a Balanced Diet Plate</h2>
    <div id="plate-foods">
      <div class="plate-item" draggable="true" data-group="Carbs">Chapati 🫓</div>
      <div class="plate-item" draggable="true" data-group="Proteins">Dal 🍲</div>
      <div class="plate-item" draggable="true" data-group="Vitamins">Salad 🥗</div>
      <div class="plate-item" draggable="true" data-group="Fats">Ghee 🧈</div>
      <div class="plate-item" draggable="true" data-group="Minerals">Milk 🥛</div>
    </div>
    <div id="plate">
      <div class="plate-zone" data-group="Carbs">Carbs Zone</div>
      <div class="plate-zone" data-group="Proteins">Proteins Zone</div>
      <div class="plate-zone" data-group="Vitamins">Vitamins Zone</div>
      <div class="plate-zone" data-group="Fats">Fats Zone</div>
      <div class="plate-zone" data-group="Minerals">Minerals Zone</div>
    </div>
    <p>Complete the plate to win! 🏆</p>
    <button onclick="finishGame()">Finish Game ✅</button>
  </div>
  
  <!-- Final Screen -->
  <div id="final" class="game-section hidden">
    <h2 id="final-message">🎉 Congratulations!</h2>
    <p id="final-score"></p>
    <button onclick="restartGame()">🔄 Play Again</button>
  </div>
  
  <script>
    let score = 0;
    const updateScore = () => {
      document.getElementById('score').innerText = "Score: " + score;
    };

    // Drag-drop logic for Level 1
    document.querySelectorAll('.food-item').forEach(item => {
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('nutrient', item.dataset.nutrient);
      });
    });

    document.querySelectorAll('.bucket').forEach(bucket => {
      bucket.addEventListener('dragover', e => e.preventDefault());
      bucket.addEventListener('drop', e => {
        const nutrient = e.dataTransfer.getData('nutrient');
        if(bucket.dataset.nutrient === nutrient){
          bucket.classList.add('correct');
          score += 10;
        } else {
          bucket.classList.add('wrong');
          score -= 5;
        }
        updateScore();
        setTimeout(()=> bucket.classList.remove('correct','wrong'), 1000);
      });
    });

    // Level navigation
    function nextLevel(num){
      document.querySelectorAll('.game-section').forEach(sec => sec.classList.add('hidden'));
      document.getElementById('level'+num).classList.remove('hidden');
    }

    // Level 2 answer check
    function checkAnswer(element, answer){
      if(answer.includes('Rickets')){
        element.classList.add('correct');
        score += 10;
      } else {
        element.classList.add('wrong');
        score -= 5;
      }
      updateScore();
      setTimeout(()=> element.classList.remove('correct','wrong'), 1000);
    }

    // Drag-drop logic for Level 3
    document.querySelectorAll('.plate-item').forEach(item => {
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('group', item.dataset.group);
      });
    });

    document.querySelectorAll('.plate-zone').forEach(zone => {
      zone.addEventListener('dragover', e => e.preventDefault());
      zone.addEventListener('drop', e => {
        const group = e.dataTransfer.getData('group');
        if(zone.dataset.group === group){
          zone.classList.add('correct');
          score += 10;
        } else {
          zone.classList.add('wrong');
          score -= 5;
        }
        updateScore();
        setTimeout(()=> zone.classList.remove('correct','wrong'), 1000);
      });
    });

    // Finish game screen
    function finishGame(){
      document.querySelectorAll('.game-section').forEach(sec => sec.classList.add('hidden'));
      document.getElementById('final').classList.remove('hidden');
      document.getElementById('final-score').innerText = "Your Final Score: " + score;
      if(score >= 40){
        document.getElementById('final-message').innerText = "🎉 Congratulations! You built a healthy plate!";
      } else {
        document.getElementById('final-message').innerText = "⚠ Try Again! Learn more about food components.";
      }
    }

    // Restart game
    function restartGame(){
      score = 0;
      updateScore();
      nextLevel(1);
    }
  </script>
</body>
</html>`}
          className="w-full h-screen border-0"
          title="Biology Game - Food Quest"
        />
      </div>
    </div>
  );
};

export default BiologyGame;