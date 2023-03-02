let playerDiv = document.createElement("div");
containerDiv.classList.add("container");
containerDiv.appendChild(playerDiv);

document.getElementById("addButton").addEventListener("click", addPLayer);

function addPlayer(){
playerDiv.insertAdjacentHTML("beforeend", containerDiv);
}