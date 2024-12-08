const input = document.querySelector("input");
input.addEventListener("click", (e) => {
  setTimeout(() => {
    const value = e.target.value;
    const length = value.length;
    const p = document.querySelector("p");
    if (length > 30) {
      p.style.color = "red";
      p.innerText = length;
    } else {
      p.innerText = length;
    }
  }, 5000);
});
