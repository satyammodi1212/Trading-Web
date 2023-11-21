let menuicon = document.getElementById('menu');
let cancleEl = document.getElementById('cancel');
let navlsit = document.getElementById('navlist');


// menuicon.addEventListener('click', function(){
//     navlsit.style.display='block';
// });
menuicon.onclick = function (){
    navlsit.style.display='block';
}
cancleEl.onclick = function (){
    navlsit.style.display='none';
}