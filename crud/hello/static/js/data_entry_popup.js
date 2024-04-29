window.onload = function() {
    // Запуск окна ввода данных при загрузке страницы
    // Предполагается, что в файле 'data_entry_popup.js' есть функция, которая открывает всплывающее окно
    openDataEntryPopup();
};

// Функция валидации формы редактирования
function validateEditForm() {
    var name = document.querySelector('input[name="name"]').value;
    var lastname = document.querySelector('input[name="lastname"]').value;
    if (name.trim() === "" || lastname.trim() === "") {
        alert("Поля 'Имя' и 'Фамилия' не могут быть пустыми.");
        return false;
    }
    return true;
}

// Добавьте эту функцию к событию onsubmit формы редактирования
var editForm = document.querySelector('form#editForm'); // Замените 'form#editForm' на селектор вашей формы редактирования
if(editForm) {
    editForm.onsubmit = validateEditForm;
}

// Функция для подтверждения удаления
function confirmDeletion() {
    return confirm('Вы уверены, что хотите удалить этот элемент?');
}