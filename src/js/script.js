var tabs = document.getElementsByClassName("tab");
var tab_contents = document.getElementsByClassName("tab-content");

const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close-button");
const modalTitle = document.querySelector(".modal-title");
const description = document.querySelector(".modal-img");

var titles = ["AMELI","CAF","Doctolib", "Impôts", "Infos-Retraite", "MSA"];
var descriptions = ["Site de l'Assurance Maladie : vous pouvez y faire des demandes d'aides, y envoyer des documents.","CAF","Doctolib", "Impôts", "Infos-Retraite", "MSA"];

for(var i = 0 ; i < tabs.length ; i++){
    tabs[i].addEventListener("mousedown", function(e){
		
		//Initializing all elements to none-hovered and no-display
        for(var i = 0 ; i < tabs.length ; i++){
            tabs[i].classList.remove("hovered");
			tabs[i].style.zIndex = 0;
			tab_contents[i].classList.remove("tab-content-visible");

        }
        if(e.target.classList.contains("tab")){
            e.target.classList.add("hovered");
			e.target.style.zIndex = 3;
			//get index in tabs
			for(var j = 0 ; j < tabs.length ; j++){
				
				//retrieve index of hovered item to display correct description
				if(tabs[j] == e.target){
					tab_contents[j].classList.add("tab-content-visible");
					break;
				}
			}
        }
    });
}

function ShowModal(img){

	imgRoot = parseInt(img/3)*3;
	imgIndex = img-imgRoot;

	modalTitle.innerHTML = titles[imgRoot+imgIndex];
	description.innerHTML = descriptions[imgRoot+imgIndex];

	modal.showModal();
	modal.style.display = "flex";
	
}

closeModal.addEventListener("click", () => {
	modal.close();
	modal.style.display = "none";
});

document.addEventListener("keydown", () => {
	if(event.key == "Escape"){
		modal.close();
		modal.style.display = "none";
	}
});

