///ищем наши кнопки товары и корзины + выводим их с помощью цыкла
const tabs = document.querySelectorAll('button.tab');
for(let i=0;i<tabs.length;i++) {
    const tab = tabs[i];
  tab.addEventListener('click',clickHandler)
}

///// вешаем на наши кнопки события
function clickHandler(event) {
    
        console.log(event);

}
