const vocabList = [
  { word: "你好", pinyin: "nǐ hǎo", arti: "Halo" },
  { word: "谢谢", pinyin: "xièxie", arti: "Terima kasih" },
  { word: "再见", pinyin: "zàijiàn", arti: "Sampai jumpa" },
  { word: "请", pinyin: "qǐng", arti: "Tolong" }
];

const ul = document.getElementById("vocab-list");
vocabList.forEach(item => {
  const li = document.createElement("li");
  li.className = "vocab-item";
  li.innerHTML = \`
    <span><strong>\${item.word}</strong> (\${item.pinyin}) - \${item.arti}</span>
    <button onclick="playSound('\${item.pinyin}')">🔊</button>
  \`;
  ul.appendChild(li);
});

function playSound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  speechSynthesis.speak(utterance);
}

// Mini quiz
const quizData = [
  {
    q: "Apa arti dari '谢谢'?",
    o: ["Halo", "Terima kasih", "Maaf", "Sampai jumpa"],
    a: 1
  }
];

const quizContainer = document.getElementById("quiz-container");
quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "quiz-question";
  div.innerHTML = \`<p>\${q.q}</p>\`;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "quiz-options";

  q.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.a) {
        btn.style.background = "green";
      } else {
        btn.style.background = "red";
      }
    };
    optionsDiv.appendChild(btn);
  });

  div.appendChild(optionsDiv);
  quizContainer.appendChild(div);
});

// Dark mode
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});