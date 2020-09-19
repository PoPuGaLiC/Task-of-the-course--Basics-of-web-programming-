let position = 0;

let text = document.getElementsByClassName('news_description');
let news = document.getElementsByClassName('news');
let circles = document.getElementsByClassName('circle');

for (let i=0;i<news.length;i++){
		news[i].onmouseenter = showText;
		news[i].onmouseleave = hideText;
}

document.getElementsByClassName('left')[0].onclick = switchingLeft;
document.getElementsByClassName('right')[0].onclick = switchingRight;

switchingNews(position);

function showText(){
	console.log("show");
	text[position].style.display = "block";
}

function hideText(){
	console.log("hide");
	text[position].style.display = "none";
}

function viewNews(n){
	news[n].style.display = "block";
	circles[n].style.background = '#53110c';
};

function hideNews(){
	for (let i=0;i<news.length;i++){
		news[i].style.display = "none";
		circles[i].style.background = '#facdce';
	}
};

function switchingNews(n){
	hideNews();
	viewNews(n);
}

function viewNews(n){
	news[n].style.display = "block";
	circles[n].style.background = '#53110c';
};

function hideNews(){
	for (let i=0;i<news.length;i++){
		news[i].style.display = "none";
		circles[i].style.background = '#facdce';
	}
};

function switchingLeft(){
	position = ((news.length+position-1))%news.length;
	switchingNews(position);
};

function switchingRight(){
	position = ((news.length+position+1))%news.length;
	switchingNews(position);
};

