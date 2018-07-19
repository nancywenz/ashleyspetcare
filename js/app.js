<<<<<<< HEAD
//pic generator
var images = [
  


]


function newPic() {
  var randomNumber = Math.floor(Math.random() * (images.length));
  document.getElementById('picDisplay').innerHTML = images[randomNumber];
}

// jss for contact form

$("#submit").click(function() {
    submit();
  });
});

function submit() {
  alert("Ashley will contact you soon!");
}
=======

$('.carousel').carousel({
    interval: 2000
  })
>>>>>>> 00cbadc5ec0eac12a38a528de22f3aaa5161ef4c
