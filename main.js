const formInputs = document.querySelectorAll(".form-input");

formInputs.forEach((input) => {
  id = input.id;
  const errIcon = document.getElementById(`${id}-err-icon`);
  const errLog = document.getElementById(`${id}-log`);
  input.addEventListener("invalid", (e) => {
    e.preventDefault();
    errIcon.style.display = "block";
    input.classList.add("form-err");
    errLog.style.display = "block";
  });
  input.addEventListener("input", () => {
    errIcon.style.display = "none";
    input.classList.remove("form-err");
    errLog.style.display = "none";
  });
});
