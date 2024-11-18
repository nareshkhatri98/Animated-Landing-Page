const thumbImage = document.querySelectorAll('.thumbnails span');
const Images = document.querySelectorAll('.imagebox .image');
const title = document.querySelector('.title');
const label = document.querySelector('.label');
const desc = document.querySelector('.desc')
const price = document.querySelector('.price span')
console.log(price);


thumbImage[0].addEventListener('click',()=>{
    Images[0].classList.add('active');
    Images[1].classList.remove('active');
    Images[2].classList.remove('active');
    title.innerText ="Air Jordan 4rm";
    label.innerText ="Women Shoes";
    desc.innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse eaque nam exercitationem fugiat fugit reiciendis cum distinctio tenetur blanditiis. Fuga quaerat sint eligendi voluptas libero debitis dignissimos voluptates alias."
    price.innerText ="$120.00";
    document.body.classList.add('activeRoot');
    document.body.classList.remove('activeRoot1','activeRoot2');
    

})

thumbImage[1].addEventListener('click',()=>{
    Images[1].classList.add('active');
    Images[0].classList.remove('active');
    Images[2].classList.remove('active');
    title.innerText ="Nike Zoom Vomero 5";
    label.innerText ="Women's Shoes";
    desc.innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse eaque nam exercitationem fugiat fugit reiciendis cum distinctio tenetur blanditiis. Fuga quaerat sint eligendi voluptas libero debitis dignissimos voluptates alias."
    price.innerText ="$160.00";
    document.body.classList.add('activeRoot1');
    document.body.classList.remove('activeRoot','activeRoot2');

})


thumbImage[2].addEventListener('click',()=>{
    Images[2].classList.add('active');
    Images[1].classList.remove('active');
    Images[0].classList.remove('active');
    title.innerText ="Air Jordan IV";
    label.innerText ="Gym Red";
    desc.innerText ="The regular season is at a halt, but basketb who rep USA on their chest this summer. Red, white and blue nod to the team's colours and a gold-plated Jumpman logo on the heel represents shiny medals at the top of the podium. The Kurim mesh on the tongue and upper panels is replaced by an abstract pattern that blends interna."
    price.innerText ="$1200.00";
    document.body.classList.add('activeRoot2');
    document.body.classList.remove('activeRoot','activeRoot1');

})


// add scroll Reveal effect..
ScrollReveal().reveal('.reveal',{
    interval: 300,
    origin:'top',
    distance:'100px',
    scale: 0.85,
    delay:200

})

ScrollReveal().reveal('.left',{
    interval: 100,
    origin:'left',
    distance:'100px',
    scale: 0.85,
    delay:600

});


ScrollReveal().reveal('.right',{
 
    origin:'right',
    distance:'200px',
    delay:1200
});

ScrollReveal().reveal('.scale',{
     scale: 0.4,
    delay:1500
});

// thumbImage images
ScrollReveal().reveal('.raiseUp',{
    interval: 100,
    origin:'bottom',
    distance:'100px',
    scale: 0.85,
    delay:1800

});




