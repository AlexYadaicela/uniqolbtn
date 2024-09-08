// size data 
const metric = [ ["XXS","25", "17 1/2","19", "17 1/2"], 
                ["XS", "25 1/2", "18", "20 1/2", "18"], 
                ["S", "26 1/2", "18 1/2", "21 1/2", "19"], 
                ["M", "28", "19", "23", "19 1/2"], 
                ["L","29", "20", "24 1/2", "20 1/2"],
                ["XL","30", "21","26", "21"],
                ["XXL","30", "21 1/2","27", "21"],
                ["3XL","31", "21 1/2","28 1/2", "22"]];



//toggle between size
function toggleSizes(){
    const btnSelection = document.querySelector(".sizing-selection");
    
    btnSelection.addEventListener("click", (e) => {
        const btn = document.querySelectorAll("button"); 
        btn.forEach((element) => {
            if(element.ariaPressed === "true"){
                element.ariaPressed = "false"; 
            }
        });
    
        e.target.ariaPressed = "true";
        const elementPressed = e.target.getAttribute("data-position"); 

        updateSizingTable(elementPressed);
    });
}

function updateSizingTable(elementPressed){
    // set attribute of current visible position on table      
    const topRow = document.querySelector(".table-top"); 
    const middleRow = document.querySelector(".table-middle"); 
    const bottomRow = document.querySelector(".table-bottom"); 

    // prevent out of bounds index
    let position = Number(elementPressed); 

    if(position === 0){
        topRow.classList.add("highlight"); 
        middleRow.classList.remove("highlight");
        bottomRow.classList.remove("highlight");
        position++; 
    }else if(position === 7){
        topRow.classList.remove("highlight");
        middleRow.classList.remove("highlight");
        bottomRow.classList.add("highlight"); 
        position--; 
    }else{
        topRow.classList.remove("highlight");
        middleRow.classList.add("highlight");
        bottomRow.classList.remove("highlight");
    }

    
    
    // grabs tr elements to populate with metric data
    const tableTopRow = document.querySelectorAll(".table-top > *"); 
    const tableMiddleRow = document.querySelectorAll(".table-middle > *");
    const tableBottomRow = document.querySelectorAll(".table-bottom > *");
    
    for(let i = 0; i < 5; i++){
        tableTopRow[i].textContent = metric[position - 1][i];
        tableMiddleRow[i].textContent = metric[position][i];
        tableBottomRow[i].textContent = metric[position + 1][i];
    }
}

toggleSizes(); 
