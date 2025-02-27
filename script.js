let current = 0;

const current_button = document.getElementById('current_btn');
const current_key = document.getElementById('current');
const new_key = document.getElementById('new');
const mesa_01 = document.getElementById('mesa_01');
const key_01 = document.getElementById('key_01');
const mesa_02 = document.getElementById('mesa_02');
const key_02 = document.getElementById('key_02');
const mesa_03 = document.getElementById('mesa_03');
const key_03 = document.getElementById('key_03');

let display_window;

function openDisplay() {
    display_window = window.open('monitor.html');    
}

function removeBlink(painel) {
    if(painel=='1') {
        let pnl_1 = display_window.document.getElementById('1-pnl');
        pnl_1.classList.remove("alert");
    }
    else if(painel=='2') {
        let pnl_2 = display_window.document.getElementById('2-pnl');
        pnl_2.classList.remove("alert");
    }
    else if(painel=='3') {
        let pnl_3 = display_window.document.getElementById('3-pnl');
        pnl_3.classList.remove("alert");
    }
}

function startBlink(id) {
    let painel = id.slice(0,1);    
    setTimeout(removeBlink, 5000, painel);
    if(painel=='1') {
        let pnl_1 = display_window.document.getElementById('1-pnl');
        pnl_1.classList.add("alert");
    }
    else if(painel=='2') {
        let pnl_2 = display_window.document.getElementById('2-pnl');
        pnl_2.classList.add("alert");
    }
    else if(painel=='3') {
        let pnl_3 = display_window.document.getElementById('3-pnl');
        pnl_3.classList.add("alert");
    }
}

current_button.addEventListener('click', function() {    
    current = parseInt(new_key.value);
    current_text = '00' + current
    current_key.innerHTML = current_text.slice(-3);
})

function key_inc() {
    if (++current == 1000){
        current = 0;
    }
    current_text = ('00' + current).slice(-3);
    current_key.innerHTML = current_text;   
}

function key_dec() {
    if (--current == -1){
        current = 999;
    }
    current_text = ('00' + current).slice(-3);
    current_key.innerHTML = current_text;   
}

function newKey (id) {
    let painel = id.slice(0,1)
    if (++current == 1000){
        current = 0;
    }
    current_text = ('00' + current).slice(-3);
    if(painel=='1') {
        key_01.innerHTML = current_text;
        display_window.document.getElementById('key-01').innerHTML = current_text;
        let pnl_1 = display_window.document.getElementById('1-pnl');
        console.log('PISCA!');
        setTimeout(removeBlink, 5000, painel);
        pnl_1.classList.add("alert");
    }
    else if(painel=='2') {
        key_02.innerHTML = current_text;
        display_window.document.getElementById('key-02').innerHTML = current_text;
        let pnl_2 = display_window.document.getElementById('2-pnl');
        setTimeout(removeBlink, 5000, painel);
        pnl_2.classList.add("alert");
    }
    else if(painel=='3') {
        key_03.innerHTML = current_text;
        display_window.document.getElementById('key-03').innerHTML = current_text;
        let pnl_3 = display_window.document.getElementById('3-pnl');
        setTimeout(removeBlink, 5000, painel);
        pnl_3.classList.add("alert");
    }
    current_key.innerHTML = current_text;
}

function clickMesa (id) {
    let painel = id.slice(0,1)
    let mesa = id.slice(2,4)   

    if (++current == 1000){
        current = 0;
    }
    current_text = ('00' + current).slice(-3);
    if(painel=='1'){
        mesa_01.innerHTML = mesa
        key_01.innerHTML = current_text;
        display_window.document.getElementById('key-01').innerHTML = current_text;
        display_window.document.getElementById('mesa-01').innerHTML = mesa;
        let pnl_1 = display_window.document.getElementById('1-pnl');
        setTimeout(removeBlink, 5000, painel);
        pnl_1.classList.add("alert");
    }    
    else if(painel=='2'){
        mesa_02.innerHTML = mesa
        key_02.innerHTML = current_text;
        display_window.document.getElementById('key-02').innerHTML = current_text;
        display_window.document.getElementById('mesa-02').innerHTML = mesa;
        let pnl_2 = display_window.document.getElementById('2-pnl');
        setTimeout(removeBlink, 5000, painel);
        pnl_2.classList.add("alert");
    }   
    else if(painel=='3'){
        mesa_03.innerHTML = mesa
        key_03.innerHTML = current_text;
        display_window.document.getElementById('key-03').innerHTML = current_text;
        display_window.document.getElementById('mesa-03').innerHTML = mesa;
        let pnl_3 = display_window.document.getElementById('3-pnl');
        setTimeout(removeBlink, 5000, painel);
        pnl_3.classList.add("alert");
    }   
    current_key.innerHTML = current_text;    
}