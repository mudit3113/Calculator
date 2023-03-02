var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1= 0;
var operand2= null;
var operator = null;


buttons[0].addEventListener('click', function(){
    var operand1= 0;
    var operand2= null;
    var operator = null;
    var value= this.getAttribute('data-value');
    display.innerText = null;
    display.innerText = value;
   
});

for( var i = 1 ; i< buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value= this.getAttribute('data-value');
        if( value == '+' ){
            operand1 = parseInt(display.textContent);
            operator = '+';
            display.innerText += value;
            display.innerText="";

        }if( value == '/' ){
            operand1 = parseFloat(display.textContent);
            operator = '/';
            display.innerText += value;
            display.innerText="";


        }if( value == '-' ){
            operand1 = parseFloat(display.textContent);
            operator = '-';
            display.innerText += value;
            display.innerText="";


        }if( value == '*' ){
            operand1 = parseFloat(display.textContent);
            operator = '*';
            display.innerText += value;
            display.innerText="";


        } else if( value == '='){
            if(operator == '*'){
                operand2= parseFloat(display.textContent);
            }else{
                operand2= parseFloat(display.textContent.slice(1));
            }
            var result =  eval(operand1 + " " + operator + " " + operand2 );
            display.innerText = result;

        } else {
            display.innerText += value;
        }
    })
}

