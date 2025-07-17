const kosakata = [
  { hanzi: "你好", pinyin: "nǐ hǎo", arti: "Halo" },
  { hanzi: "谢谢", pinyin: "xièxie", arti: "Terima kasih" },
  { hanzi: "再见", pinyin: "zàijiàn", arti: "Sampai jumpa" },
  { hanzi: "是", pinyin: "shì", arti: "Ya / adalah" },
  { hanzi: "不", pinyin: "bù", arti: "Tidak" },
];

const container = document.getElementById("flashcards");

kosakata.forEach(word => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="hanzi">${word.hanzi}</div>
    <div class="pinyin">${word.pinyin}</div>
    <div class="arti">${word.arti}</div>
  `;
  container.appendChild(card);
});