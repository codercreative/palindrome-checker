const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkForPalindrome = (input) => {
  if (input === "") {
    alert("Please input a value.");
    return;
  }

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const reversedStr = [...lowerCaseStr].reverse().join("");

  let message = `<strong>${input}</strong> ${
    lowerCaseStr === reversedStr ? "is" : "is not"
  } a palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = message;
  result.innerHTML = "";
  result.appendChild(pTag);
  result.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});
