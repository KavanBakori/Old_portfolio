function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}


// function sendemail(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "kavan2269@gmail.com",
//     Password : "933375D06B6A6110C2E33DB6FBE628E2AB06",
//     To : 'kavan2269@gmail.com',
//     From : document.getElementById("Email"),
//     Subject : document.getElementById("fname"),
//     Body : document.getElementById("subject"),
// }).then(
//   message => alert(message)
// );
// }


window.onload = function() {
  var icon = document.getElementById("icon");
  var imageElement = document.getElementById("im");

  icon.onclick = function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      icon.src = "Images/sun.png";
      imageElement.src = "Images/c-.png";
    } else {
      icon.src = "Images/moon.png";
      imageElement.src = "Images/c++2.png";
    }
  };
};