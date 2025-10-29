// 🍔 Toggle Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  window.location.href = "project1.html"

});

const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
  window.location.href = "project2.html"

});

const form = document.querySelector(".contact-form");
const submitbutton = form.querySelector(".submitbtn");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

 
  submitbutton.textContent = "Message Sent ";

  
  submitbutton.disabled = true;

  
  setTimeout(() => {
    submitbutton.textContent = "Send Message";
    submitbutton.disabled = false;
  }, 2000);

 
  form.reset();
});
