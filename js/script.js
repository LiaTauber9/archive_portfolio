/* ======================= toggle icon navbar =======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


/* ======================= scroll actions active link =======================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigt = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + heigt){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });


/* ======================= sticky navbar =======================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


/* ============= remove toggle icon and navbar when click navbar link (scroll to section) =================*/
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x')

};

/* ======================= scroll reveal =======================*/
ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200    
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ======================= typed js =======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


/* ======================= typed js =======================*/
function sendMail(event){
    event.preventDefault();
    console.log('sendMail()');
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    const serviceId = 'service_r04rkyh';
    const templateId = 'template_qkhgn2x';

    emailjs.send(serviceId,templateId,params)
    .then(res=>{
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value ='';
        console.log(res);
        alert('Your message sent successfully')
    })
    .catch(err=>console.log(err))
}
