const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  setTimeout(() => {
    const value = e.target.value;
    const length = value.length;
    const p = document.querySelector("p");
    p.innerText = length;

    if (length > 30) {
      p.style.color = "red";
      input.style.borderColor  = "red";
    } else {
        p.style.color = "green";
        input.style.borderColor  = "green";
    }
  }, 500);
});
