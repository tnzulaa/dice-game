// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогч 0, 2-р тоглогч 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
//var diceNumber = Math.floor(Math.random() * 6 + 1);
// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 дотор санамсаргүй нэг тоог гаргаж авая
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  // шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  // буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";
  //alert("Шоог хаялаа " + diceNumber);
  //буусан тоо нь 1-с ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог тоглогчийн ээлжийн оноог нэмэгдүүлнэ

  if (diceNumber !== 1) {
    // шоо 1-с ялгаатай буувал
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
    //энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //шоо 1 буувал тоглогчийн ээлжийг солино
    //хэрэв идэвхтэй тоглогчийг 0 байвал тоглогчийг 1 болго
    //үгүй бол идэвхтэй тоглогчийг 1 байвал тоглогчийг 0 болго
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    // улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Шоог түр алга болгоно
    diceDom.style.display = "none";
    //document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
});
