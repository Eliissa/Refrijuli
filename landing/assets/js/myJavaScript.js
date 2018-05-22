var input=document.getElementsByClassName('inputs_texto');
for (var i=0; i<input.length; i++){
    /*Llama el evento de Keyup, para saber si el usuario deja de pulsar una tecla*/
    input[i].addEventListener('keyup',function(){
       if(this.value.length>=1){
           /*Dejará fijado el label*/
           this.nextElementSibling.classList.add('fijar');
       }else {
           /*Volvera de nuevo a su lugar el label*/
           this.nextElementSibling.classList.remove('fijar');
       }
    });
}

