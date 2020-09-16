let position = 0;

let news = document.getElementsByClassName('news');
switchingNews(position);

function switchingNews(n){
	hideNews();
	viewNews(n);
}

function viewNews(n){
	news[n].style.display = "block";
};

function hideNews(){
	for (image of news)
		image.style.display = "none";
};

document.getElementsByClassName('left')[0].onclick = switchingLeft;
document.getElementsByClassName('right')[0].onclick = switchingRight;

function switchingLeft(){
	position = ((news.length+position-1))%news.length;
	switchingNews(position);
};

function switchingRight(){
	position = ((news.length+position+1))%news.length;
	switchingNews(position);
};
