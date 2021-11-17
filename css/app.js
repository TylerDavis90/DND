let menuTog = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');


menuTog.addEventListener('click' , ()=>{
    menuTog.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');


        contact.classList.remove('active');
        navRight.classList.remove('active');

        if(menuTog.classList.contains('active')){
            setTimeout(()=>{
                navRight.Right.classList.add('active');
            },100)

            for(let i = 0; i, navLinks.length; i++){
                navLinks[i].classList.remove('active');
                setTimeout(()=>{
                    navLinks[i].classList.add('avtice')
                }, i * 100)
            }

            setTimeout(() =>{
                contact.classList.add('active');
            }, 700);


        }

} )