const closebtn = document.getElementById('closebtn')
const menubtn = document.getElementById('menubtn')
const links = document.getElementById('links')
const messages = document.getElementById('message')

menubtn.addEventListener('click', showmenu)
closebtn.addEventListener('click', closemenu)


function showmenu(){
    links.style.top = "0%"
    menubtn.style.display = "none"
    closebtn.style.display = "block"
}

function closemenu(){
    links.style.top = "-100%"
    menubtn.style.display = "block"
    closebtn.style.display = "none"
}

function message(){
  alert("Thank You! We Recieved your message.")
}