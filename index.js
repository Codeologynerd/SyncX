function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function my() {
	var dot1=document.getElementById("dot1");
	var mor1Text = document.getElementById("mor1");
  var toggleText = document.getElementById("toggle");

  if (dot1.style.display === "none") {
    dot1.style.display = "inline";
    toggleText.innerHTML = "Read more";
    mor1Text.style.display = "none";
  } else {
    dot1.style.display = "none";
    toggleText.innerHTML = "Read less";
    mor1Text.style.display = "inline";
  }
}
function myB() {
	var dot2=document.getElementById("dot2");
	var mor2Text = document.getElementById("mor2");
  var cloeText = document.getElementById("cloe");

  if (dot2.style.display === "none") {
    dot2.style.display = "inline";
    cloeText.innerHTML = "Read more";
    mor2Text.style.display = "none";
  } else {
    dot2.style.display = "none";
    cloeText.innerHTML = "Read less";
    mor2Text.style.display = "inline";
  }
}
