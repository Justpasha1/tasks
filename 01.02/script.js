// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    document.body.style.backgroundColor = selectColor.value;
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'change';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent,  changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.