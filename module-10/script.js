//Brandon Androsky
//11/12/2026
//Module 10.3: JavaScript - Part 2


//Tracks whether treasure has been revealed
let treasureRevealed = false;

//Opens chest when mouse hovers over image
function openChest() {
    if (!treasureRevealed) {
        document.getElementById("treasureChest").src = "Images/wood_chest_open.png";
    }
}

//Closes chest when mouse leaves image
function closeChest() {
    if (!treasureRevealed) {
        document.getElementById("treasureChest").src = "Images/wood_chest_closed.png";
    }
}

//Toggles treasure reveal when chest is clicked
function revealTreasure() {
    if (!treasureRevealed) {
        document.getElementById("treasureChest").src = "Images/wood_chest_full.png";
        treasureRevealed = true;
    }
    else {
        document.getElementById("treasureChest").src = "Images/wood_chest_closed.png";
        treasureRevealed = false;
    }
}