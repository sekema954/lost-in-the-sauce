//menubar function
menuClicked();
function menuClicked(){
    const menubar = document.querySelector(".menubar");
    const dropdownDiv = document.querySelector(".dropdown-menu");
    const mylist = document.querySelector(".mylist");
    menubar.addEventListener("click", ()=>{
        menubar.classList.toggle("change");
        dropdownDiv.classList.toggle("changeHieght");
        mylist.classList.toggle("showlist");
    })
}

