var createDomList = {

	createTitle: function(tagname, tagtext, tagclass) {
		var doc = document.createElement(tagname);
		doc.innerHTML = tagtext;
		doc.className = tagclass;
		document.body.appendChild(doc);
	},

	createList: function(tagtext, tagclass) {
		var list = document.createElement('ul');
		list.className = tagclass;
		for (var i = 0; i < tagtext.length; i++) {
			var listElement = document.createElement('li');
			var listInput = document.createElement('input');
			listInput.setAttribute('type', 'checkbox');
			listElement.innerHTML = '<span>' + tagtext[i] + '</span>';
			listElement.insertBefore(listInput, listElement.children[0]);
			list.appendChild(listElement);
			document.body.appendChild(list)
		}
	}
}

var head = 'Тест по программированию'

var titleText = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'];

var listText = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

var button = 'Проверить мои результаты';

createDomList.createTitle('h2', head, 'text-center');

    for(var i = 0; i < titleText.length; i++){

	createDomList.createTitle('h2', titleText[i], 'main__title');

	createDomList.createList(listText, 'list');

    }

    createDomList.createTitle('button', button, 'btn btn-default');