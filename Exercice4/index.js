const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  const messageParagraph = document.createElement("p");
  messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  button.parentNode.insertBefore(messageParagraph, button.nextSibling);
});
