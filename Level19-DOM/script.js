
let button = document.getElementsByClassName("big-five-button")

for (var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        let addListItem = document.createElement("li")
        let list = document.getElementById("spotted-animals-list")
        list.appendChild(addListItem)
        let text = document.getElementsByClassName("big-five-button").textContent
        addListItem.innerHTML = text 
    })
  }


let removeFirstItem = () => {
    let firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
  };
  
  let removeAll = () => {
    let spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
  };

  let removeFirstItemButton = document.getElementById("remove-first-item-button");
  removeFirstItemButton.addEventListener("click", removeFirstItem);

  let removeAllButton = document.getElementById("remove-all-button");
  removeAllButton.addEventListener("click", removeAll);

  var radius = 100;
  var sides = 3;
  
  var poly = new Poly(radius, sides).center();