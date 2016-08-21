
var form = {

	title: "Тест по программированию",
	questions: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
	answers: [["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]],
	container: function() {
		container = document.createElement('div');
		container.classList.add('container');
		document.body.appendChild(container);
	},

	formQuestion: function(title) {

		var h1 = document.createElement('h1');

		h1.innerHTML = this.title;
		container.appendChild(h1);
	},

	formAnswer: function () {

		var q = this.questions.length;
		var p, ul, answLength, li, check, textElem, label;

		for (var i = 0; i < q; i++) {

			p = document.createElement('p');
			p.innerHTML = (i + 1) + ". " + this.questions[i];
			container.appendChild(p);

			ul = document.createElement('ul');
			p.appendChild(ul);

			answLength = this.answers[i].length;

			for (var j = 0; j < answLength; j++) {

				li = document.createElement('li');

				check = document.createElement('input');
				check.setAttribute('type', 'checkbox');
				check.setAttribute('id', 'check' +i+j);
				
				label = document.createElement('label');
				label.setAttribute('for', 'check' +i+j)				
				textElem = document.createTextNode(this.answers[i][j]);
				
				li.appendChild(check);
				label.appendChild(textElem);
				li.appendChild(label);				
				ul.appendChild(li);
			}
		}
	},

	button: function(btn) {

		var but = document.createElement('button');
		but.classList.add('btn-info', 'btn')
		but.innerHTML = 'Проверить мои результаты';
		container.appendChild(but);
	}

}
form.container();
form.formQuestion();
form.formAnswer();
form.button();











// var element = document.querySelectorAll(' .menu-item a ');
// console.log(element);
// var link = element[2];
// link.innerHTML = 'my new href';
// link.setAttribute('href', 'https://www.google.com.ua/?gfe_rd=cr&ei=-lenV6OGMKzs8weM3roQ&gws_rd=ssl') //= 'https://www.google.com.ua/?gfe_rd=cr&ei=-lenV6OGMKzs8weM3roQ&gws_rd=ssl';

// link.classList.add('hui');
// console.log(link.className)
// link.style.backgroundColor = 'green';
// link.style.fontSize = '25px';

// var newElement = document.createElement('div');
// newElement.classList.add('box');
// newElement.innerHTML = 'this is newelement';
// var wrapper = document.querySelector('.wrapper');
// wrapper.appendChild(newElement);
// wrapper.insertBefore(newElement, wrapper.firstChild)

// var menu = document.querySelector('.wrapper ul');
// console.log(menu)
// var li = document.querySelectorAll('.menu-item')
// menu.replaceChild(newElement, li[2]);

