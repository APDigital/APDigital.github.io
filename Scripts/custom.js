$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };

	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

    $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#equals").click(function(){
        var result;
        if(operator === "+"){
            result = parseInt(newnumber,10) + parseInt(number,10);
        }
        else if (operator === "-"){
            result = parseInt(newnumber,10) - parseInt(number,10);
        }
        else if (operator === "/"){
            result = parseInt(newnumber,10) / parseInt(number,10);
        }
        else if (operator === "*"){
            result = parseInt(newnumber,10) * parseInt(number,10);
        }
        testNumLength(result);
        result.toString();
        totaldiv.text(result);
        });



    var today = new Date();
    var currTime = document.getElementById("currTime");

    var currHrs = addZero(today.getHours());
    var currMins = addZero(today.getMinutes());
    currTime.innerHTML = currHrs + ":" + currMins;

    function addZero(i) {
        if (i < 10) {
            i = "0" + 1;
        }
        return i;
    }

    var message = document.getElementById("Message");
    var testHrs = currHrs + 8;

    if (currHrs <= 12) {
        message.innerHTML = " Good Morning!";
    }
    else if (currHrs >= 13) {
        message.innerHTML = " Good Afternoon";
    }



});