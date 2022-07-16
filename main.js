let menu = document.getElementById("myMenu");
let mList = document.getElementById("list");



menu.addEventListener("click", clickedMenu);

function clickedMenu() {
    console.log("patata")
    mList.classList.toggle('myClass');
}