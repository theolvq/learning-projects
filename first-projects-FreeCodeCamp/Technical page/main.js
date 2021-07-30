document.querySelector("#openNav").addEventListener("click", nav);
// document.querySelector("#closeNav").addEventListener("click", closeNav);

const navBar = document.getElementById('navbar')
const doc = document.getElementById('main-doc')

function nav() {
    if (navBar.style.width >="0"){
        navBar.style.width = "250px"
        doc.style.marginLeft = "250px"
    }else{
        navBar.style.width = "0"
        doc.style.marginLeft = "0"
    }
}

// function openNav() {
//   console.log("working");
//   document.getElementById("navbar").style.width = "250px";
//   document.getElementById("main-doc").style.marginLeft = "250px";
// }

// function closeNav() {
//   console.log("yo");
//   document.getElementById("navbar").style.width = "0";
//   document.getElementById("main-doc").style.marginLeft = "0";
// }

