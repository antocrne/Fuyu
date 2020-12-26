$('.resp__menu').click(function() {
  alert("J'ai pas encore fait le vrai menu et l'overlay donc clique pas sur le menu ! Des bisous");
});


var text = new Blotter.Text("Studio de Création", {
  family : "'Inter', sans-serif",
  size : 60,
  fill : "#F2DDDE",
});

var material = new Blotter.FliesMaterial();

material.uniforms.uPointCellWidth.value = 0.017;
material.uniforms.uPointRadius.value = .8;
material.uniforms.uSpeed.value = 5;

var blotter = new Blotter(material, {
  texts : text,
});

var elem = document.getElementById("main-text");
var scope = blotter.forText(text);

scope.appendTo(elem);


var text = new Blotter.Text("Studio de Création", {
  family : "'Inter', sans-serif",
  size : 35,
  fill : "#F2DDDE",
});

var material = new Blotter.FliesMaterial();

material.uniforms.uPointCellWidth.value = 0.02;
material.uniforms.uPointRadius.value = .8;
material.uniforms.uSpeed.value = 5;

var blotter = new Blotter(material, {
  texts : text,
});

var elem2 = document.getElementById("main-text-resp");
var scope = blotter.forText(text);

scope.appendTo(elem2);



