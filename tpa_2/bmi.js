function calculate() {
    let weight, height, error ;

	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";

    let i;
	i = weight/((height*height)/10000);
	i = i.toFixed(1);

    let output = document.getElementById("hasil").value;

	if (i <= 18.5) {
		output = "BMI : " + i + " and dosa anda Rendah";
	} else if (i >= 18.5 && i < 25) {
		output = "BMI : " + i + " and dosa anda Normal";
	} else if (i >= 25 && i < 30) {
		output = "BMI : " + i + " and dosa anda Tinggi";
	} else if (i >= 30) {
		output = "BMI : " + i + " and dosa anda Obesity";
	}
	

	if (weight == 0 && height == 0) {
		document.getElementById("hasil").innerHTML = error;
	} else if (weight < 0 && height < 0) {
		document.getElementById("hasil").innerHTML = "Negative Values not Allowed";
	} else {
        document.getElementById("hasil").innerHTML = output;
	}
}

