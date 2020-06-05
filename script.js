function setFocus(){
      document.getElementById("srchForm").focus();
 }

function showMenu() {
  let open = 0
  if (open) {
    document.getElementById("hdnMenu").classList.toggle("hiddenMenu");
    }
    else {
      document.getElementById("hdnMenu").classList.toggle("showedMenu");
    }
}
/*
*/
function search() {
  let q = document.getElementById("srchForm").value;
  if (q != 0) {
    document.location.href = (`https://www.google.com/search?q=${q}`);
  }
}
 function doodles() {
   document.location.href = "https://www.google.com/doodles/"
 }
