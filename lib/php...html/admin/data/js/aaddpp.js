let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
let img = "";

let save = document.getElementById("save");
inputFile.onchange = function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    profilePic.src = reader.result;
    img = reader.result;
    
    console.log(img);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
save.onclick = () => {
  if (img !== "") {
    document.cookie = `profile=${img};expires=Date(2030-02-20);path=/`;
    alert("image enregistrer avec succes");
    window.location.href = "../php...html/admin/index.php";
  } else {
    alert("Veuillez choisir une image");
  }
};
