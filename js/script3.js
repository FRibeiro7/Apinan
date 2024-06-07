
//Botao Next Prev
let btnNext1 = document.querySelector('.next')
let btnPrev1 = document.querySelector('.prev')

let container1 = document.querySelector('.slider')
let list1 = document.querySelector('.slider .slides')

btnNext1.onclick = () => moveItensOnClick('next')
btnPrev1.onclick = () => moveItensOnClick('back')

function moveItensOnClick(type) {
    let listItems1 = document.querySelectorAll('.slides .slide')
    

    if(type === 'next'){
        list1.appendChild(listItems1[0])       
        container1.classList.add('next')
    }else{
        list1.prepend(listItems1[listItems1.length - 1])        
        container1.classList.add('back')
    }

    setTimeout(() => {
        container1.classList.remove('next')
        container1.classList.remove('back')
    }, 1000);

}
//Botao Next Prev - Fim

