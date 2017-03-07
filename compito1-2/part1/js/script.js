    var arr = [];

    for (i = 0; i < 5; i++){
    arr[i] = prompt('Введи имя ' + ( i + 1 ));
    }

    var name = prompt('Введи имя пользователя');
    
	var resultingValue;

    var i = 0;
    
	for (; i < 5; i++) {

	if(arr[i] === name){
		resultingValue = true; 
		break;
	} else {
	resultingValue = false;
    }

    if( !resultingValue ){
	alert('Имя ' + name + ' не найдено');
    } 
	alert(name + ', вы успешно вошли');
    }
