const button = document.getElementById("myButton");
const messageContainer = document.getElementById("messageContainer");

button.addEventListener("click", () => {
    // Créer un nouvel élément paragraphe avec la classe message
    const message = document.createElement("p");
    message.className = "message";
    message.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    
    // Ajouter le message au conteneur
    messageContainer.appendChild(message);
});