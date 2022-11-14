let nameInput = document.querySelector(".inputName");
let emailInput = document.querySelector(".inputEmail");
let message = document.querySelector(".msg");
let sendBtn = document.querySelector(".sendMsg");

sendBtn.addEventListener("click", () => {
  if (nameInput.value != "" && emailInput.value != "" && message.value != "") {
    alert(
      "Name: " +
        nameInput.value +
        "\nEmail: " +
        emailInput.value +
        "\nMessage: " +
        message.value
    );
  } else {
    alert("Niste popunili sva polja!");
  }
});
