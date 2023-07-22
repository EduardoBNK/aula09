const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function(){
    alert('Você clicou no botão!');


    const numeroInputElement = document.getElementById('numeroInput').value;

    if( numeroInputElement <10){
        
        buttonElement.classList.remove('button-green')
        buttonElement.classList.add('button-red')
        alert('Cor vermelho')
    }
    else {
        buttonElement.classList.remove('button-red')
        buttonElement.classList.add('button-green')
        alert('Cor verde')
        
    }

 

});
