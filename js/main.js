//header 부분 토글 버튼 실행 
const body =document.body;
const header_menu_toggleBtn=document.querySelector('.header_toggleBtn');
const header_menu_content = document.querySelector('.mobile_header_menu');
const header_logo=document.querySelector('.header_logo');
const header_bag=document.querySelector('.list-bag');
const sm_nav = document.querySelector('.nav-list');
const section =document.querySelector('.sc');
const footer =document.querySelector('.ft');


function header_menu_toggle(){
    body.classList.toggle('active');
    header_menu_toggleBtn.classList.toggle('active');
    header_menu_content.classList.toggle('active');
    header_bag.classList.toggle('active');
    header_logo.classList.toggle('active');
    section.classList.toggle('active');
    footer.classList.toggle('active');
}


header_menu_toggleBtn.addEventListener('click',header_menu_toggle);

// menu 부분 토글 버튼 실행
const menu_toggleBtn1= document.querySelector('.menu_toggleBtn1');
const menu_toggleBtn2 = document.querySelector('.menu_toggleBtn2');
const menu_toggleBtn3 = document.querySelector('.menu_toggleBtn3');
const menu_toggleBtn4 = document.querySelector('.menu_toggleBtn4');


const menu_content1 =document.querySelector('.menu_content1');
const menu_content2 =document.querySelector('.menu_content2');
const menu_content3 =document.querySelector('.menu_content3');
const menu_content4 =document.querySelector('.menu_content4');


menu_toggleBtn1.addEventListener('click',function(){
    menu_content1.classList.toggle('active');
});

menu_toggleBtn2.addEventListener('click',function(){
    menu_content2.classList.toggle('active');
});

menu_toggleBtn3.addEventListener('click',function(){
    menu_content3.classList.toggle('active');
});

menu_toggleBtn4.addEventListener('click',function(){
    menu_content4.classList.toggle('active');
});
