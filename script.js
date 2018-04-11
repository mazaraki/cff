/** @TODO: sidenav effect */
function openNav(){
  document.getElementById("nebulla-sideNav").style.width = "250px";
}

function closeNav(){
  document.getElementById("nebulla-sideNav").style.width = "0";
}

/* TODO: navbar logo resize and left on scroll*/
// not working with parallax
// window.onscroll = function() {
//   growShrinkLogo();
// };

// function growShrinkLogo() {
//   var logo = document.getElementById("logo");
//   var 
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//     // logo.addClass("scrolledLogo");
//     $("header").toggleClass("scrolled");
//     logo.addClass("scrolledLogo");    
//     logo.style.width = '2rem';
//     logo.style.left = '13vw';
//     logo.style.transition = 'all .8s';
//     // logo.style.transition
//   } else {
//     logo.style.width = '4rem';
//     logo.style.left = '48vw';
//     // logo.removeClass("scrolledLogo");
//   }
// }

$(window).on("scroll touchmove", function () {
  $('header').toggleClass('tiny', $(document).scrollTop() > 0);
  $('#logo').toggleClass('tinyLogo', $(document).scrollTop() > 0);
  $('footer').toggleClass('tinyFooter', $(document).scrollTop() > 540);
  $('.fa-chevron-up').toggleClass('scrolledFa', $(document).scrollTop() > 540);
});