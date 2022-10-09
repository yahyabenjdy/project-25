let password = "hcm2023";

checkBtn.addEventListener("click", function () {
  if (passVall.value.toLowerCase() === password.toLowerCase())
    alert("Welcom user X");
  else alert("Wrong Password");

  passVall.focus();
  passVall.value = "";
});
