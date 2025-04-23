document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (nameInput) {
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Nom : ";
    nameInput.parentNode.insertBefore(nameLabel, nameInput);
  }

  if (emailInput) {
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Adresse e-mail : ";
    emailInput.parentNode.insertBefore(emailLabel, emailInput);
  }

  const img = document.querySelector('img[src="assets/image.png"]');

  if (img && !img.hasAttribute("alt")) {
    img.setAttribute("alt", "Description pertinente de l'image");
  }

  const link = document.querySelector('a[href="#"]');

  if (link && link.textContent.trim() === "Cliquez ici") {
    link.textContent = "En savoir plus sur ce sujet";
  }
});
