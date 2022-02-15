const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const togglesSwitch = document.querySelector('input[type="checkbox"]');/*dùng change event*/

function darkMode() {
    nav.style.backgroundColor= 'rgba(0,0,0,50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    /*cách lấy phần tử con trong phần tử mẹ js. (hay)*/
    //console.log(toggleIcon.children.namedItem()); Trả về array object
    toggleIcon.children[0].textContent = 'Dark Mode';
    /*thay đổi class của 1 element xóa cũ thêm mới*/
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='img/undraw_proud_coder_dark.svg';
    image2.src='img/undraw_feeling_proud_dark.svg';
    image3.src='img/undraw_conceptual_idea_dark.svg';

}

function lightMode() {
    nav.style.backgroundColor= 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor='rgba(0,0,0,50%)';
    /*cách lấy phần tử con trong phần tử mẹ js. (hay)*/
    //console.log(toggleIcon.children.namedItem()); Trả về array object
    toggleIcon.children[0].textContent = 'Light Mode';
    /*thay đổi class của 1 element xóa cũ thêm mới*/
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');/*dung replace*/

    image1.src='img/undraw_proud_coder_light.svg';
    image2.src='img/undraw_feeling_proud_light.svg';
    image3.src='img/undraw_conceptual_idea_light.svg';
}

//Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked)
    {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');/*set localstorage*/
        darkMode();

    }else {
        document.documentElement.setAttribute('data-theme','light');/*light ko có trả về mặc định*/
        localStorage.setItem('theme','light');/*set localstorage*/
        lightMode();
    }
}

//Event Listener
togglesSwitch.addEventListener('change',switchTheme);
//Local storage lưu trũ dữ liệu trong thời gian dài. dữ liệu key-value. VALUE LUÔN LUÔN LÀ STRING
//Trường hợp ta làm là lưu trữ value string là dark or light khi switch
//cách sử dụng: set, get value from local storage
//Check localstorage for theme
const currentTheme = localStorage.getItem('theme');/*Get key from local storage*/




