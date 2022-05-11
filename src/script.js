const pwd = document.getElementById('password');
const bg = document.getElementById('background');

pwd.addEventListener('input', (e)=>{
  const inputValue = e.target.value;
  const length = inputValue.length;
  const blurValue = 20 - length * 2;
  bg.style.filter = `blur(${blurValue}px)`;
})