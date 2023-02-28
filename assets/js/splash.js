function goto() {
  $(".preload").remove();
  document.body.classList.toggle("main");
}
setTimeout('goto()', 3000);

setTimeout(function () {
  $(".navbar").css("visibility", "visible");
}, 1);
