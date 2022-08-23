let s = 00;
let m = 00;
let mm = 00;
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let timer = document.getElementById("timer");
timer.innerHTML =
  m.toString().padStart(2, "0") +
  ":" +
  s.toString().padStart(2, "0") +
  ":" +
  mm.toString().padStart(2, "0");
start.addEventListener("click", () => {
  stopwatch();
});
pause.addEventListener("click", () => {
    if (t != undefined) {
        
        clearTimeout(t);
    }
});

function stopwatch() {
 
  if (mm == 99) {
      mm = 0;
      s = s + 1;
    }
    if (s == 60) {
        m++;
        s = 0;
    }
    mm++;

  t = setTimeout(() => {
    stopwatch();
  }, 10);
  timer.innerHTML =
  m.toString().padStart(2, "0") +
  ":" +
  s.toString().padStart(2, "0") +
  ":" +
  mm.toString().padStart(2, "0");
}
reset.addEventListener("click", () => {
  clearTimeout(t);

  s = 0;
  mm = 000;
  m = 0;
  timer.innerHTML =
    m.toString().padStart(2, "0") +
    ":" +
    s.toString().padStart(2, "0") +
    ":" +
    mm.toString().padStart(2, "0");
});
