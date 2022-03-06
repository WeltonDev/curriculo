dark = document.querySelector('#dark');  //Botao ativa noturno

dark.addEventListener('click', (e) => {
    e.preventDefault(); //previne o padrão de levar para outra página

    background = document.querySelector('#background'); // seleciona o background
    leftInfos = document.querySelector('#left-container'); // seleciona o lado esquerdo
    rightInfos = document.querySelector('#right-container'); // seleciona o lado direito

    background.classList.toggle('dark-background-container'); // muda o background para dark mode
    leftInfos.classList.toggle('dark-left-container'); // muda o lado esquerdo para dark mode
    rightInfos.classList.toggle('dark-right-container'); // muda o lado direito para dark mode
});

