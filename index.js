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




document.addEventListener('DOMContentLoaded', function () {
    const menuOptions = document.querySelectorAll('.menu-options li');
    const items = document.querySelectorAll('.item-card');

    menuOptions.forEach(option => {
        option.addEventListener('click', function () {
            const itemType = this.textContent.trim().toLowerCase();

            items.forEach(item => {
                if (item.classList.contains(`item-${itemType}`)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
