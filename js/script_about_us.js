let questions = document.getElementsByClassName("question");
let arrows = document.getElementsByClassName("las la-angle-right");
for(let i=0; i<questions.length;i++){
	questions[i].onclick = rotate;
}

function rotate(event){
	for(let i=0; i<questions.length;i++){
		if((questions[i] == event.target)||(arrows[i] == event.target)){
			if(arrows[i].style.transform == 'rotate(90deg)'){
				arrows[i].style.transform = 'rotate(0deg)';
			} else {
				arrows[i].style.transform ='rotate(90deg)';
			};
			arrows[i].parentElement.nextElementSibling.hidden = !arrows[i].parentElement.nextElementSibling.hidden;
		};
	}
};

