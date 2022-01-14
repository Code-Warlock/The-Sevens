// let bigScreenNav = document.querySelector(".bigScreenNav");
// let smallScreenNavCheck = window.matchMedia("max-width:400px");
//
// if (smallScreenNavCheck){
//   bigScreenNav.parentNode.removeChild(bigScreenNav);
// }else{

// }
// const COLLAPSIBLE = document.querySelector(".navbar-collapse");
// const COLLAPSIBLELINK = document.querySelector(".navbar-collapse a");
//
// COLLAPSIBLELINK.onclick = ()=> COLLAPSIBLE.collapse("hide");
$('#nav-color').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
