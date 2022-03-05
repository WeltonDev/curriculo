dark = document.querySelector('#dark');  //Botao ativa noturno


dark.addEventListener('click', (e) => {
    e.preventDefault(); //previne o padrão de levar para outra página

    background = document.querySelector('#background')
    leftInfos = document.querySelector('#left-container');
    rightInfos = document.querySelector('#right-container');

    background.classList.toggle('dark-background-container');
    leftInfos.classList.toggle('dark-left-container');
    rightInfos.classList.toggle('dark-right-container');



})
