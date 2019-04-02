'use strict'

var menuBtn = document.querySelectorAll('.menu-btn');
var slidersWrap = document.querySelectorAll('.slider-wrap');
var sliders = document.querySelectorAll('.slider');
var slLeft = 0;
var sliderActive;
var itemDiv = document.querySelector('.item-description');
for (var i = 0;i < menuBtn.length;i++){
	menuBtn[i].addEventListener('click', function(){
		var attr = this.getAttribute('data-action');
		sldOpen(attr);
	});
}


	function sldOpen(attr){
		itemDiv.innerHTML = '';
		itemDiv.classList.remove('item-description-active');
		var sldName = 'sld-' + attr;
		for (var i = 0;i < sliders.length;i++){
			sliders[i].classList.remove('active-slider');
		}
		for (var i = 0;i < sliders.length;i++){
			if (sliders[i].classList.contains(sldName)){
				sliders[i].classList.add('active-slider');
				var currentSlider = i;
				var slidesBox = sliders[i].querySelectorAll('.slide-box');
				slidesBoxEvent(slidesBox, i);
			}
		}
		
	};

	function slidesBoxEvent(slides, currentSlider){
		for (var i = 0;i < slides.length;i++){
			slides[i].addEventListener('click', function(){
				for (var i = 0;i < slides.length;i++){
					slides[i].classList.remove('active');
			}
			this.classList.add('active');
			slidesLinkEvent(this, currentSlider);
			});
		}
		slidesLinkEvent(slides, currentSlider);
	};

	function slidesLinkEvent(link, currentSlider){
		var currentLink;
		if (link.length > 1){
			currentLink = link[0];
		}else{currentLink = link;}
		console.log(currentLink);
		var article = currentLink.getAttribute('data-article');
		var slideLink = currentLink.querySelector('.link');
		slideLink.addEventListener('click', function(){
			itemCheck(article, currentSlider);
		});
	}

	function itemCheck(article, currentSlider){
		var getArticle = article + '.html'
		//AJAX
		// 1. Создаём новый объект XMLHttpRequest
		var xhr = new XMLHttpRequest();

		// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
		xhr.open('GET', getArticle, false);

		// 3. Отсылаем запрос
		xhr.send();

		// 4. Если код ответа сервера не 200, то это ошибка
		if (xhr.status != 200) {
		  // обработать ошибку
		  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		} else {
		  // вывести результат
		  createItemDesription(xhr.responseText);
		}
	}


	function createItemDesription(des) {
		var closeBtn = '<div class="close"><span></span><span></span></div>'
		itemDiv.innerHTML = closeBtn + des;
		itemDiv.classList.add('item-description-active');
		var itemClose = document.querySelector('.close');
			itemClose.addEventListener('click', function(){
			itemDiv.innerHTML = '';
			itemDiv.classList.remove('item-description-active');
		});
	}




