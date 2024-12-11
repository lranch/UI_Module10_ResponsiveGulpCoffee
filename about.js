/* TODO: import FontAwesome in the HTML file as a <script> tag */
/* import "https://kit.fontawesome.com/f0e4070067.js"; */

/* color palette:
#082B59 bright blue
#131D26 navy blue
#59331D coffee
#D98555 peach
#F2F2F2 white

Fonts:
Headlines - Poppins Bold
Text - Lato

Links all go to https://uxuicurriculum.wixsite.com/gulproast

<!--
Dark logo: https://assets.codepen.io/6306176/gulp-logo-dark.png
Light logo: https://assets.codepen.io/6306176/gulp-logo-light.png
-->

*/

/* redirectOnClick provides on-click functionality for navigation */
function redirectOnClick (e) {
  document.location = "https://uxuicurriculum.wixsite.com/gulproast";
}

/* Main logic */
/* TODO: determine how to make this run AFTER the document has finished rendering for the first time */
/*
console.log(document.getElementsByClassName("logo"));
var logoElement = document.getElementsByClassName("logo");
console.log(!!logoElement)
console.log(logoElement.length)
console.log(!!logoElement && !!logoElement?.length);
if (!!logoElement && !!logoElement?.length) {
    logoElement[0].addEventListener("click", redirectOnClick);
}
*/

document.getElementsByClassName("logo")?.item(0)?.addEventListener("click", redirectOnClick);




/* TODO: rework while loop into for loop */
var i = 0;
var buttonElements = document.getElementsByClassName("nav-button");
while (i < buttonElements.length) {
  /*(var element in document.getElementsByClassName("nav-button")) {*/
  buttonElements[i].addEventListener("click", redirectOnClick);
  console.log("Loop");
  i = i + 1;
}