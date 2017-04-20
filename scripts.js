var allNumbers = [];
var allStrings = [];

function numberCounter(){
  var number = document.numberForm.numberinput.value;
    if(isNaN(number)==false){
      allNumbers.push(number);
      console.log(allNumbers);
      //document.getElementById("number-count").innerHTML = allNumbers.length;
      $("#number-count").html(allNumbers.length);
    } else{
      allStrings.push(number);
      console.log(allStrings);
      //document.getElementById("string-count").innerHTML = allStrings.length;
      $("#string-count").html(allStrings.length);
    }
 
  event.preventDefault();
}
  
function getSum() {
    var count = 0;
    for(var i=0; i < allNumbers.length; i++) 
    { 
      
      var intValue = parseInt(allNumbers[i]);
      count += intValue; 
    }
  var total = count.toString();
    //document.getElementById("sum").innerHTML = total;
    $("#sum").html(total);
    console.log(total);
  
}
  
function getAverage(){
  var count = 0;
    for(var i=0; i < allNumbers.length; i++) 
    { 
      
      var intValue = parseInt(allNumbers[i]);
      count += intValue; 
    }
  count = count/allNumbers.length;
  var total = count.toString();
  //document.getElementById("average").innerHTML = total;
  $("#average").html(total);
  console.log(total);
}  

function concatStrings(){
  var stringGroup = allStrings.join(" ");
  //document.getElementById("all-strings").innerHTML = stringGroup;
  $("#all-strings").html(stringGroup);
  console.log(stringGroup);
}

function arrayReset(){
  allNumbers = [];
  allStrings = [];
  //document.getElementById("number-count").innerHTML = 0;
  $("#number-count").html("0");
  //document.getElementById("sum").innerHTML = 0;
  $("#sum").html("0");
  //document.getElementById("average").innerHTML = 0;
  $("#average").html("0");
  //document.getElementById("string-count").innerHTML = 0;
  $("#string-count").html("0");
  //document.getElementById("all-strings").innerHTML = 0;
  $("#all-strings").html("Empty");
  
}

