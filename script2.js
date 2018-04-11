// $("button#btn1").click(function(){
// 	var navItem = $(this).
// });
// $("li.nav-item").on('click', function(){
// 	$(this).toggleClass('active');
// });
// document.getElementById("li1").classList.add('active');
// // document.getElementById("li1").classList.remove('active');
// if (document.getElementById("li1").classList.contains('active')){
// 	document.getElementById("li1").classList.toggle('active');
// }

// var elem1 = document.getElementById("btn-1");
// .addEventListener("click",
// 	function(){
// });
// $(document).ready(function(){
// 	if (true) {}
// 	$("#btn-1").click(function(){
// 		$("#btn-1").toggleClass("active");
// 	});
// 	$("#btn-2").click(function(){
// 		$("#btn-2").toggleClass("active");
// 	});
// 	$("#btn-3").click(function(){
// 		$("#btn-3").toggleClass("active");
// 	});
// 	$(".btn-secondary").on('click', 'button', function(){
// 		$(this).toggleClass('active').siblings.removeClass('active');
// 	});
// })  ;
// var header = document.getElementById("navbarSupportedContent");
// var ul = header.querySelector("ul.navbar-nav");
// var lis = ul.querySelector("li.nav-item");
// var btns = lis.querySelector("button.btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

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
//     	$("#btn-1").toggleClass("active");
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

/** @TODO: sidenav effect */
function openNav(){
  document.getElementById("nebulla-sideNav").style.width = "250px";
}

function closeNav(){
  document.getElementById("nebulla-sideNav").style.width = "0";
}