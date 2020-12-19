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


    var text = new Blotter.Text("Coming soon!", {
    	family : "'Inter', sans-serif",
    	size : 100,
    	fill : "#F2DDDE",
    });

    var material = new Blotter.FliesMaterial();

    material.uniforms.uPointCellWidth.value = 0.01;
    material.uniforms.uPointRadius.value = .8;
    material.uniforms.uSpeed.value = 5;

    var blotter = new Blotter(material, {
    	texts : text,
    });

    var elem = document.getElementById("coming-text");
    var scope = blotter.forText(text);

    scope.appendTo(elem);


    var text = new Blotter.Text("Coming soon!", {
    	family : "'Inter', sans-serif",
    	size : 40,
    	fill : "#F2DDDE",
    });

    var material = new Blotter.FliesMaterial();

    material.uniforms.uPointCellWidth.value = 0.02;
    material.uniforms.uPointRadius.value = .8;
    material.uniforms.uSpeed.value = 5;

    var blotter = new Blotter(material, {
    	texts : text,
    });

    var elem2 = document.getElementById("coming-text-resp");
    var scope = blotter.forText(text);

    scope.appendTo(elem2);
