var input_numero = document.getElementById('numero');
var btn_borrar_numero = document.getElementById('borrar-numero');
var btn_chat_numero = document.getElementById('chat-numero');

/* LIMPIAR CAMPO */
btn_borrar_numero.addEventListener('click', borrarNumero);

function borrarNumero(){
    input_numero.value = '';
}

/* ABRIR CHAT WhatsApp*/
btn_chat_numero.addEventListener('click', abrirChat);

function abrirChat(){
    var numero = input_numero.value;

    if(numero != ''){
        window.open('https://api.whatsapp.com/send?phone=1' + numero);
    }
}

/* SANEAMIENTO DEL INPUT */
input_numero.addEventListener('keyup', sanarCaracter);

function sanarCaracter(){
    input_numero.value = (input_numero.value).replace(/[^0-9]/g, '');
}