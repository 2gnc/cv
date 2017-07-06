'use strict';
// подсветка элементов меню в зависимости от просматриваемой секции
// меню целиком
var menu = document.querySelector( '.menu__wrapper' ),
// секции
	sectionAbout = document.getElementById( 'home' ),
	sectionComp = document.getElementById( 'comp' ),
	sectionExp = document.getElementById( 'exp' ),
// контрольная точка (отступ по вертикали и горизонтали)
	fromtop = document.documentElement.clientHeight / 5,
	fromleft = document.documentElement.clientWidth / 2,
	controlPoint
	;

// алгоритм 
// Определить координаты контрольной точки
// При прокрутке страницы считывать тег, находящийся в контролькой точке
// Получить всех родителей точки, выбрать из них section
// получить ID этого section
// Найти в меню элемент с таким же ID в href
// Назначить этому элементу класс .menu__item--active
// Удалить этот класс с других элементов меню
// (при скролле проверять, в правильном ли месте находится класс .menu__item--active, 
// если в неправильном - запускать смену класса)



// событие прокрутки
// var scroller = (function() {
// 	document.onscroll = function() {
// 		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
// 		console.log(scrolled + 'px');
// 		};
// 	})();

// определяем элемент который находится в координатах контрольной точки
controlPoint = document.elementFromPoint(fromleft, fromtop);

// ищем родителя - section у элемента 
var section = (function() {
	while( (controlPoint = controlPoint.parentElement) && !controlPoint.classList.contains('section') );
	return controlPoint;
	})();

// получаем ID найденного элемента в виде строки
var idToHilight = section.getAttribute('id');
console.log( idToHilight );

// Установка %% скиллов в скиллбар и заголовки
// находим блок skill
var skill = document.getElementsByClassName('skill');
for (var i = skill.length-1; i >= 0; i-- ) {
// получаем значение скилла
	var percent = skill[i].querySelector( '.skill__name' ).getAttribute( 'data-percent' );
// для скилла получаем элемент - отображение скилла
	var skillLine = skill[i].nextElementSibling.getElementsByClassName('skill__line-value');
//генерируем имя класса
	var classtoadd = 'skill__line-value--' + percent;
// добавляем сгенерированный класс
	skillLine[0].classList.add( classtoadd );
// добавляем правило в созданный класс
	document.styleSheets[2].addRule( '.' + classtoadd, ' width: ' + percent +'%' );
// Выводим процент на экран в skill__value
	skill[i].querySelector( '.skill__value' ).innerHTML = percent + '%';
	};