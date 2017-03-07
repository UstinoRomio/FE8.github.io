 function pow(x, n){
    var result = x;
    for (var i = 1; i < n; i++){
            result *= x;
        }
        return result;
    }

    var x = +prompt('Введи число', '');
    var n = +prompt('Введи степень', '');
    //if (isNaN(x)) { return NaN; }
    //if (n === 0) { return 1; }
	if (n <= 1){
        alert('Введи степень большую 1');
    } else {
        console.log( pow(x, n) );
    }
	
	