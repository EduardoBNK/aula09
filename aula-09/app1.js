const buttonElement = document.getElementById('checkButton');

buttonElement.addEventListener('click', function(){
    alert('Você clicou no botão!');

    const numeroInputElement = document.getElementById('numeroInput').value;
    const resultadoMensagemElement = document.getElementById('resultadoMensagem');
    resultadoMensagemElement.innerHTML = 'A cor é vermelha';
  

    if( numeroInputElement<100){
        
    
        buttonElement.classList.result-success('button-red')
        resultadoMensagemElement.innerHTML = 'A cor é vermelha';
        
    }
    else {
        buttonElement.classList.remove('button-red')
        buttonElement.classList.add('button-green')
        resultadoMensagemElement.innerHTML = 'A cor é verde';
        
    }



});
