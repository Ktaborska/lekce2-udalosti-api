// tady je místo pro náš program
console.log('Ahoj');

let nadpis = document.querySelector('H1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

function zmenStyl(){
    nadpis.classList.toggle('zeleny')
}
