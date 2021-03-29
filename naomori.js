function hamburger() {
    
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
    
  }
// function foo() {
//     document.getElementById('line1').style.zIndex=103;
// }
  document.getElementById('mori-b').addEventListener('click' , function () {
    hamburger();
    foo();
  } );