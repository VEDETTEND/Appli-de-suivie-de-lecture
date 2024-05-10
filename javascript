// Récupérer les éléments DOM
const addBookBtn = document.getElementById("addBookBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// Ouvrir le modal lorsqu'on clique sur le bouton "Ajouter un livre"
addBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fermer le modal lorsqu'on clique sur le bouton de fermeture
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer le modal si l'utilisateur clique en dehors du modal
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Gérer l'ajout de livre
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    addBook(title, author);
    modal.style.display = "none";
    bookForm.reset();
});

// Fonction pour ajouter un livre à la liste
function addBook(title, author) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${title} by ${author}</span> <button class="readBtn">Lu</button> <button class="deleteBtn">Supprimer</button>`;
    bookList.appendChild(li);
}

// Marquer un livre comme lu
bookList.addEventListener("click", (event) => {
    if (event.target.classList.contains("readBtn")) {
        const book = event.target.parentNode.querySelector("span");
        book.classList.toggle("read");
    }
});

// Supprimer un livre de la liste
bookList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
        const book = event.target.parentNode;
        bookList.removeChild(book);
    }
});












































