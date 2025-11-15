const columns = document.querySelectorAll(".column__cards");
const cards = document.querySelectorAll(".card");

let draggedCard;

const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = "move";
};

const dragOver = (event) => {
    event.preventDefault();
};

const dragEnter = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.add("column--highlight");
    }
};

const dragLeave = ({ target }) => {
    target.classList.remove("column--highlight");
};

const drop = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.remove("column--highlight");
        target.append(draggedCard);
    }

};

const createCardard = ({ target }) => {
    const card = document.createElement("section");

    card.className = "card";
    card.draggable = "true";

    card.addEventListener("dragstart", dragStart);

    target.append(card);

};

// cards.forEach(() => {})


columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dbclick", createCard);
});

cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
});