//menubar function
menuClicked();
function menuClicked(){
    const menubar = document.querySelector(".menubar");
    const dropdownDiv = document.querySelector(".dropdown");
    const mylist = document.querySelector(".drop-list");
    menubar.addEventListener("click", ()=>{
        menubar.classList.toggle("change");
        dropdownDiv.classList.toggle("changeHeight");
        mylist.classList.toggle("show-list");
    })
}

