import Inputmask from "inputmask";

const form = document.getElementById("form");
const URL_SEND = "http://localhost:9090/api/registration";
const regName = /^[А-ЯЁа-яё]+$/i;
const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]$/i;
const regTel = /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/;

const validation = () => {
  form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
  
    const validName = regName.test(formData.get("name"));
    const validEmail = regEmail.test(formData.get("email"));
    const validTel = regTel.test(formData.get("phone"));
  
    if (!validName || !validEmail || !validTel) {
      alert(`
        ${!validName ? "Введите корректное имя\r\n" : ""}
        ${!validEmail ? "Введите корретный Email\r\n" : ""}
        ${!validTel ? "Введите корретный номер телефона\r\n" : ""}
      `);
      return;
    }
  
    const response = await fetch(URL_SEND,
      {
        method: "POST",
        body: formData
      }
    );
  
    let result = await response.json();
  
    if (response.status >= 200 && response.status < 400) {
      alert(result.text);
    } else if (response.status >= 400) {
      alert(`Ошибка : ${response.status}`);
    }
  });
};

Inputmask().mask(document.querySelectorAll("input"));

export {validation};
