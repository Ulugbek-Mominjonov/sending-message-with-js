let elTemplate = document.querySelector('#message-template').content;
let chatMessageTemplate = elTemplate.querySelector('.chat-message');
let chatContent = document.querySelector('.chat-content');
let chatForm= document.querySelector('.chat-form');
let chatInput = chatForm.querySelector('.chat-form-input');

chatForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let chatValue =  chatInput.value;
  let clonedChatMessageTemplate = chatMessageTemplate.cloneNode(true);
  let elChatText = clonedChatMessageTemplate.querySelector('.chat-message-text');
  elChatText.textContent = chatValue;

  deleteMessage(clonedChatMessageTemplate);
  chatContent.appendChild(clonedChatMessageTemplate);

  chatInput.value = "";
})

let deleteMessage = function (item) {
  let deleteBtn = item.querySelector('.chat-message-button');
  deleteBtn.addEventListener('click', () => {
      item.remove();
  })
}


/*

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).

- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
