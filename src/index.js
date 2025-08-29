const hamburgerOpen = document.getElementById("hamburgerOpen");
const hamburgerClose = document.getElementById("hamburgerClose");

const HamNavOpen = () => {
  document.getElementById("hamburgerElement").style.display = "block";
  hamburgerOpen.style.display = "none";
};
const HamNavClose = () => {
  document.getElementById("hamburgerElement").style.display = "none";
  hamburgerOpen.style.display = "block";
};
hamburgerOpen.addEventListener("click", () => HamNavOpen());
hamburgerClose.addEventListener("click", () => HamNavClose());

const Education = document.getElementById("Education");
const Technical_Skill = document.getElementById("Technical_Skill");
const Myself = document.getElementById("Myself");
const Experience = document.getElementById("Experience");
const about = document.querySelectorAll(".about");
const aboutButton =document.querySelectorAll(".aboutB")
const handleAbout = (e) => {
    for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].style.color = "#000000";
  }
  e.target.style.color = "#d97706";
  for (let i = 0; i < about.length; i++) {
    about[i].style.display = "none";
  }
  document.getElementById(`${e.target.id}_about`).style.display = "flex";
};
Myself.addEventListener("click", (e) => handleAbout(e))
Experience.addEventListener("click", (e) => handleAbout(e));
Technical_Skill.addEventListener("click", (e) => handleAbout(e));
Education.addEventListener("click", (e) => handleAbout(e));
let arr=[Myself,Education,Technical_Skill,Experience]
let a=0 
 setInterval(() => {
  if(a==4){
    a=0
  }
handleAbout({ target: arr[a] })
  a++
 },3000);

document.addEventListener("scroll", () => {
  
  if (window.scrollY > 0) {
    nav.classList.add("bg-amber-50");
  } else {
    nav.classList.remove("bg-amber-50");
  }
});
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const message = document.getElementById("message")
const formButton = document.getElementById("formButton")
formButton.addEventListener('click' , (e)=>{
  e.preventDefault()
  document.querySelectorAll(".forminput").forEach((e)=>e.classList?.remove("border-red-600","placeholder-red-600"))
  if(fname.value.trim()==""){
  fname.classList.add("border-red-600" ,"placeholder-red-600")    
    return
  }
  if(lname.value.trim()==""){
  lname.classList.add("border-red-600","placeholder-red-600")    
    return
  }
  if(email.value.trim()==""){
  email.classList.add("border-red-600","placeholder-red-600")    
    return
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  if(!emailPattern.test(email.value)){
  email.classList.add("border-red-600","placeholder-red-600")    
    return
  }
  if(message.value.trim()==""){
  message.classList.add("border-red-600","placeholder-red-600")    
    return
  }
    alert("submitted");
    console.log(`Name : ${fname.value} ${lname.value} Email: ${email.value} message: ${message.value}`)

  fname.value=""
  lname.value=""
  email.value=""
  message.value=""
})

