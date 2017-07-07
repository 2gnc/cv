'use strict';
// подсветка элементов меню в зависимости от просматриваемой секции
// меню целиком
var menu = document.querySelectorAll( '.menu__item' ),
// секции
	sectionAbout = document.getElementById( 'home' ),
	sectionComp = document.getElementById( 'comp' ),
	sectionExp = document.getElementById( 'exp' ),
// контрольная точка (отступ по вертикали и горизонтали)
	fromtop = document.documentElement.clientHeight / 3,
	fromleft = document.documentElement.clientWidth / 2,
	controlPoint,
	scroller,
	clicker
	;

// отслеживанием прокрутку страницы
scroller = (
	function() {
		document.onscroll = function() {
// определяем элемент который находится в координатах контрольной точки
			controlPoint = document.elementFromPoint(fromleft, fromtop);
// ищем родителя - section у элемента 
			var section = (function() {
				while( (controlPoint = controlPoint.parentElement) && !controlPoint.classList.contains('section') );
				return controlPoint;
				})();
// получаем ID найденного элемента в виде строки
			if ( section ) {
				var idToHilight = section.getAttribute('id');
				};
// получим элемент меню, в котором href равен найденному ID, добавим этому элементу специальный класс
	for (var i = 0; i < menu.length; i++ ) {
		var hrefValue = menu[i].getAttribute( 'href' );
		if( hrefValue == '#'+idToHilight ) {
			menu[i].classList.add( 'menu__item--active' );
			};
		};
// получаем элемент меню, в котором в настоящий момент установлен menu__item--active
	var currentlyHighlighted = document.querySelector('.menu__item--active');
// снимаем класс menu__item--active если текущая секция не соответствует подсвеченному меню
	if( currentlyHighlighted != null && '#'+idToHilight !== currentlyHighlighted.getAttribute( 'href' ) ) {
		currentlyHighlighted.classList.remove( 'menu__item--active' );
		}
	}
})();
// реагируем на клик по элементу меню
clicker = (function() {
		for ( var i = 0; i < menu.length; i++ ) {
			menu[i].addEventListener( 'click', function() {
				for (var m = 0; m < menu.length; m++ ) {
					menu[m].classList.remove( 'menu__item--active' );
					}
				})
			}
		})();

// обрабатывать случаи, когда контрольная точка не находитсяни в какой секции: устанавливать блжайшую предыдущую
// сделать плавную прокрутку
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