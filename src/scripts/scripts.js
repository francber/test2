let card1 = document.getElementById("c1");
let card2 = document.getElementById("c2");
let card3 = document.getElementById("c3");
let card4 = document.getElementById("c4");
let card5 = document.getElementById("c5");
let card6 = document.getElementById("c6");
let card7 = document.getElementById("c7");
card1 = 1;
card2 = 1;
card3 = 1;
card4 = 1;
card5 = 1;
card6 = 1;
card7 = 1;
let carde1 = document.getElementById("e1");
let carde2 = document.getElementById("e2");
let carde3 = document.getElementById("e3");
let carde4 = document.getElementById("e4");
let carde5 = document.getElementById("e5");
let carde6 = document.getElementById("e6");
let carde7 = document.getElementById("e7");
carde1 = 1;
carde2 = 1;
carde3 = 1;
carde4 = 1;
carde5 = 1;
carde6 = 1;
carde7 = 1;
let score = 0;
let cd3=0;
let cd4=0;
document.getElementById('cd1').textContent = cd3;
document.getElementById('cd2').textContent = cd4;
function turnover() {

}
function unturnover() {

}

document.getElementById('scor').textContent = score;
refresh.addEventListener('click',function() {
    card1 = Math.random()*10;
    card1 = Math.round(card1);
    card2 = Math.random()*10;
    card2 = Math.round(card2);
    card3 = Math.random()*10;
    card3 = Math.round(card3);
    card4 = Math.random()*10;
    card4 = Math.round(card4);
    card5 = Math.random()*10;
    card5 = Math.round(card5);
    card6 = Math.random()*10;
    card6 = Math.round(card6);
    card7 = Math.random()*10;
    card7 = Math.round(card7);
    carde1 = Math.random()*10;
    carde1 = Math.round(carde1);
    carde2 = Math.random()*10;
    carde2 = Math.round(carde2);
    carde3 = Math.random()*10;
    carde3 = Math.round(carde3);
    carde4 = Math.random()*10;
    carde4 = Math.round(carde4);
    carde5 = Math.random()*10;
    carde5 = Math.round(carde5);
    carde6 = Math.random()*10;
    carde6 = Math.round(carde6);
    carde7 = Math.random()*10;
    carde7 = Math.round(carde7);
    document.getElementById('card10').textContent = card1;
    document.getElementById('card20').textContent = card2;
    document.getElementById('card30').textContent = card3;
    document.getElementById('card40').textContent = card4;
    document.getElementById('card50').textContent = card5;
    document.getElementById('card60').textContent = card6;
    document.getElementById('card70').textContent = card7;
});


document.getElementById('card10').textContent = card1;
document.getElementById('card20').textContent = card2;
document.getElementById('card30').textContent = card3;
document.getElementById('card40').textContent = card4;
document.getElementById('card50').textContent = card5;
document.getElementById('card60').textContent = card6;
document.getElementById('card70').textContent = card7;


c1.addEventListener('click',function() {
    cd3=card1;
    document.getElementById('cd1').textContent = cd3;
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4;
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
    document.getElementById('scor').textContent = score;
    document.getElementById('card10').textContent = " ";
    let x=document.getElementById('c1');
    x.style.backgroundimage=('../src/Multimedia/cardturnedover.png');
    document.getElementById('c1')=x;
});
c2.addEventListener('click',function() {
    cd3=card2;
    document.getElementById('cd1').textContent = cd3;
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4;
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
    document.getElementById('scor').textContent = score;
});
c3.addEventListener('click',function() {
    cd3=card3;
    document.getElementById('cd1').textContent = cd3;
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4;  
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
});
c4.addEventListener('click',function() {
    cd3=card4;
    document.getElementById('cd1').textContent = cd3;
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4;
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
    document.getElementById('scor').textContent = score;
});
c5.addEventListener('click',function() {
    cd3=card5;
    document.getElementById('cd1').textContent = cd3    
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4;    
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
    document.getElementById('scor').textContent = score;
});
c6.addEventListener('click',function() {
    cd3=card6;
    document.getElementById('cd1').textContent = cd3
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4; 
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
    document.getElementById('scor').textContent = score;
});
c7.addEventListener('click',function() {
    cd3=card7;
    document.getElementById('cd1').textContent = cd3
    cd4=carde1;
    document.getElementById('cd2').textContent = cd4;    
    if (cd3>=cd4) {
        score = score + (cd3-cd4);
    }
    else {
        score = score - (cd4-cd3);
    }
    document.getElementById('scor').textContent = score;
});



