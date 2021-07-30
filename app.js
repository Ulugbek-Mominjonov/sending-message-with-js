let elTemplate = document.querySelector('#message-template').content;
let chatMessageTemplate = elTemplate.querySelector('.chat-message');
let chatContent = document.querySelector('.chat-content');
let chatForm= document.querySelector('.chat-form');
let chatInput = chatForm.querySelector('.chat-form-input');
let submitBtn = chatForm.querySelector('.chat-form-button');
let editText;
chatForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let chatValue =  chatInput.value;
  if(submitBtn.textContent == 'Send message'){
    let clonedChatMessageTemplate = chatMessageTemplate.cloneNode(true);
    let elChatText = clonedChatMessageTemplate.querySelector('.chat-message-text');
    elChatText.textContent = chatValue;

    assignEvent(clonedChatMessageTemplate);
    chatContent.appendChild(clonedChatMessageTemplate);
  } else{
    editText.textContent = chatValue;
    submitBtn.textContent = "Send message";
  }

  chatInput.value = "";
})

let assignEvent = function (item) {
  let deleteBtn = item.querySelector('.chat-message-button--delete');
  let editBtn = item.querySelector('.chat-message-button--edit')
  deleteBtn.addEventListener('click', () => {
      item.remove();
  })
  editBtn.addEventListener('click', () => {
    editText = item.querySelector('.chat-message-text');
    chatInput.value = editText.textContent;
    submitBtn.textContent = "Edit message";
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
