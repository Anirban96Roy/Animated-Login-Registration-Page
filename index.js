const container=document.querySelector('.container');
const loginlink=document.querySelector('.SignInLink');
const Regiserlink=document.querySelector('.SignUpLink');

Regiserlink.addEventListener('click', () => {
    container.classList.add('active');  // Add 'active' class to container
});

loginlink.addEventListener('click', () => {
    container.classList.remove('active'); 
});