'use strict';
// Функция для установки %% скиллов в скиллбар и заголовки
	// находим скилл
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