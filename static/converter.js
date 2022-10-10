
var input_dec = document.getElementById("input_dec");
var input_bin = document.getElementById("input_bin");
var input_oct = document.getElementById("input_oct");
var input_hex = document.getElementById("input_hex");

var output_dec = document.getElementById("output_dec");
var output_bin = document.getElementById("output_bin");
var output_oct = document.getElementById("output_oct");
var output_hex = document.getElementById("output_hex");

var convertBtn = document.getElementById("convertBtn");
var inputTextBox = document.getElementById("inputTextBox");
var outputTextBox = document.getElementById("outputTextBox");

var selectedInputType;
var selectedOutputType;


input_dec.onclick = function(){
    selectedInputType = "dec";
    input_dec.className = "active";
    input_bin.className = "inactive";
    input_oct.className = "inactive";
    input_hex.className = "inactive";
}

input_bin.onclick = function(){
    selectedInputType = "bin";
    input_dec.className = "inactive";
    input_bin.className = "active";
    input_oct.className = "inactive";
    input_hex.className = "inactive";
}

input_oct.onclick = function(){
    selectedInputType = "oct";
    input_dec.className = "inactive";
    input_bin.className = "inactive";
    input_oct.className = "active";
    input_hex.className = "inactive";
}

input_hex.onclick = function(){
    selectedInputType = "hex";
    input_dec.className = "inactive";
    input_bin.className = "inactive";
    input_oct.className = "inactive";
    input_hex.className = "active";
}



output_dec.onclick = function(){
    selectedOutputType = "dec";
    output_dec.className = "active";
    output_bin.className = "inactive";
    output_oct.className = "inactive";
    output_hex.className = "inactive";
}

output_bin.onclick = function(){
    selectedOutputType = "bin";
    output_dec.className = "inactive";
    output_bin.className = "active";
    output_oct.className = "inactive";
    output_hex.className = "inactive";
}

output_oct.onclick = function(){
    selectedOutputType = "oct";
    output_dec.className = "inactive";
    output_bin.className = "inactive";
    output_oct.className = "active";
    output_hex.className = "inactive";
}

output_hex.onclick = function(){
    selectedOutputType = "hex";
    output_dec.className = "inactive";
    output_bin.className = "inactive";
    output_oct.className = "inactive";
    output_hex.className = "active";
}



// Logic //

function toDec(input){
    var output;
    if (selectedInputType == "bin"){
        var reversedInput = "";
        for(var i = 0; i<input.length; i++){
            var currentChar = input.charAt(i);
            reversedInput = currentChar+reversedInput;
        }
        
        input = reversedInput;
        var outputInt = 0;
        for(var i = 0; i<input.length; i++){
            var str = input.charAt(i);
            outputInt = outputInt + Math.pow(2, i) * parseInt(str);
        }
        output = outputInt.toString();
        console.log(output);
    }
    return output;
}

convertBtn.onclick = function(){
    if (selectedOutputType == "dec"){
        outputTextBox.value = toDec(inputTextBox.value);
    }
}