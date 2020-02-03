// Вызвать функцию поместить в параметр класс карточек

function autoHeight(cards) {
	
    let cardsContent = document.querySelectorAll(cards);
    let arr = [];
    for (let index = 0; index < cardsContent.length; index++) {
        let style = getComputedStyle(cardsContent[index]);
        
        arr.push(style.height);
    }
    
    let newArr = [];
    arr.forEach(element => {
        let t = element.replace('px','');
        newArr.push(t);
    });
    
    
    let numArr = [];
    newArr.forEach(element => {
        numArr.push(+element);
    });
    
    
    let maxHeight = (Math.max.apply(null, numArr));
     
    cardsContent.forEach(element => {
        element.style.height = `${maxHeight}px`;
    });
    }
    
