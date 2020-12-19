$("#email").click(function() {

        if (document.selection) { // IE
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById("email"));
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById("email"));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        document.execCommand("copy");

        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
        else if (document.selection) {
            document.selection.empty();
        }

        var posEmailX = $("#email").offset().left;
        var posEmailY = $("#email").offset().top;
        var emailHeight = $("#email").height();
        let emailContent = document.getElementById("email").innerHTML;

        document.getElementById("email").innerHTML = "Email copied to clipboard";

        setTimeout(function(){
            document.getElementById("email").innerHTML = "hello@fuyu.studio";
        }, 1200);
    });



var text = new Blotter.Text("Coming soon", {
  family : "'Inter', sans-serif",
  size : 45,
  weight : 500,
  paddingLeft : 10,
  paddingRight : 40,
  fill : "#F2DDDE"
});

var material = new Blotter.SlidingDoorMaterial();

material.uniforms.uDivisions.value = 6;
material.uniforms.uDivisionWidth.value = 0.2;
material.uniforms.uAnimateHorizontal.value = 0.5;

material.uniforms.uFlipAnimationDirection.value = true;



var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("coming-text");
var scope = blotter.forText(text);

scope.appendTo(elem);
