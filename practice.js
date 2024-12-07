const input = document.querySelector("input");
input.addEventListener("click", (e) => {
  setTimeout(() => {
    const value = e.target.value;
    alert(value);
  }, 5000);
});
