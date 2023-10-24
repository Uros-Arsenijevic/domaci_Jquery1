$('#saberi').click(() => calc('plus', +$('#num1').val(), +$("#num2").val()));

$('#pomnozi').click(() => calc('multiplication', +$('#num1').val(), +$("#num2").val()));

$('#podeli').click(() => calc('sharing', +$('#num1').val(), +$("#num2").val()));

$('#oduzmi').click(() => calc('minus', +$('#num1').val(), +$("#num2").val()));



function calc(operation, element1,element2){

    switch(operation){

        case 'plus':
            return $('#result').text(element1 + element2);

        case 'minus':
            return $('#result').text(element1 - element2);

        case 'multiplication':
            if(element1 !== 0 && element2 !== 0){
                return $('#result').text(element1 * element2);
            }else{
                return $('#result').text(`Nemozete mnoziti sa 0`);
            };

        case 'sharing':
            if(element1 !== 0 && element2 !== 0){
                return $('#result').text(element1 / element2);
            }else{
                return $('#result').text(`Nemozete deliti sa 0`);
            };
    }
}