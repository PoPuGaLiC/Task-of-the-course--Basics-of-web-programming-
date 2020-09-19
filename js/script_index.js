let position = 0;

let news = document.getElementsByClassName('news');
let circles = document.getElementsByClassName('circle');
switchingNews(position);

document.getElementsByClassName('left')[0].onclick = switchingLeft;
document.getElementsByClassName('right')[0].onclick = switchingRight;

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

