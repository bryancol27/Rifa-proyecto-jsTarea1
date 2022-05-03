const rewards = [false, {
    premio: "Automovil BMW",
    imagen: "./imgs/20180619-BMW-SERIE-8-2019-01.jpg"}, 
    {
    premio: "Sudadera BMW",
    imagen: "./imgs/51FP2ZlDWpL._AC_UX385_.jpg"}, 
    {
    premio: "Casco BMW",
    imagen: "./imgs/casco-BMW-Race-2.jpg"
    }, 
    false, {
    premio: "Entrada al museo de BMW",
    imagen: "./imgs/museo-bmw.webp",},
     false];
    
let opportunities = 3;
const buttons = document.querySelectorAll("button");
const pAttempts = document.querySelector(".opportunities");
const cReward = document.querySelector('.currentReward')

const getRandomReward = () => {
    return rewards[Math.floor(Math.random() * (rewards.length  - 0)) + 0];
};

const spin = () => {
    const reward = getRandomReward();

    if(opportunities != 0){
        printResult(reward);
        opportunities --;

        if(opportunities == 0 ){
            pAttempts.textContent = `No te quedan más intentos!, gracias por participar`
            buttons[1].style.display = "none";
            if(!reward){
                buttons[2].style.display = "none";
            }
        }else{
            pAttempts.textContent = `Actualmente tienes ${opportunities} intentos `
        }
    }
}

const printResult = (result) => {
    buttons[0].style.display = "none";
    buttons[1].style.display = "inline-block";
    if(!result){
        cReward.textContent = "Actualmente no tienes premio";
        buttons[2].style.display = "none";
    }else{
        cReward.textContent = `Actualmente tu premio es ${result.premio}`;
        buttons[2].style.display = "inline-block";
    }
}

const get = () =>{
    const division = cReward.textContent.split(' ');

    const main = document.querySelector('main');
    const section = document.querySelector('section');
    const imgs = document.querySelector('.rewardImg');
    const h2 = document.querySelector(".titleReward");


    for(let i = 0; i < 4; i++) {
        division.shift();
    }
    const reward = division.join(' ')
    main.style.display = "none";
    section.style.display = "grid"

    const search = rewards.find(Element => Element.premio == reward);

    imgs.src = search.imagen;
    h2.textContent = `Su premio es ${search.premio}, disfrutalo!`
}

