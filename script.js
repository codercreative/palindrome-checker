const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkForPalindrome = () => {
  const userInputValue = document.getElementById("text-input").value;

  if (userInputValue === "") {
    let alertMessage = "Please enter a value";
    result.innerHTML = `<p>${alertMessage}</p>`;
    result.classList.add("red-color");
    result.classList.add("margin-bottom");
    result.classList.remove("hidden");
  } else {
    const lowerCaseStr = userInputValue
      .replace(/[^A-Za-z0-9]/gi, "")
      .toLowerCase();
    const reversedStr = [...lowerCaseStr].reverse().join("");
    let message = `<span>${userInputValue}</span> ${
      lowerCaseStr === reversedStr ? "is" : "is not"
    } a palindrome.`;
    result.innerHTML = `<p class="user-input">${message}</p>`;
    result.classList.remove("hidden");
  }
};

checkBtn.addEventListener("click", checkForPalindrome);
