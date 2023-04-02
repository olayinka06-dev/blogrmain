var tG = document.querySelector('.toggle');
tG.addEventListener('click', () => {

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');

    var mobile = document.querySelector('.nav-mobile');
    mobile.classList.toggle('mobile-toggler');
})



var comeBack = document.querySelectorAll('.show-dropdown');
comeBack.forEach(come => {
    come.addEventListener('click', () =>{
        come.classList.toggle("drop-up")
        var arrange = come.nextElementSibling;

        if (arrange.style.maxHeight) {
            arrange.style.maxHeight = '';
        }
        else{
            arrange.style.maxHeight = arrange.scrollHeight + 'vh';
        }

    })
})


