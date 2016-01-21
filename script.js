var value = prompt('Введите число?', 45);

var parseValue = parseInt(value, 10);

if ((10 < parseValue) && (parseValue < 20)) {
	switch(parseValue) {
		case 11:
			parseValue = "ОДИНАДЦАТЬ";
		break;

		case 12:
			parseValue = "ДВЕНАДЦАТЬ";
		break;

		case 13:
			parseValue = "ТРИНАДЦАТЬ";
		break;

		case 14:
			parseValue = "ЧЕТЫРНАДЦАТЬ";
		break;

		case 15:
			parseValue = "ПЯТЬНАДЦАТЬ";
		break;

		case 16:
			parseValue = "ШЕСТЬНАДЦАТЬ";
		break;

		case 17:
			parseValue = "СЕМЬНАДЦАТЬ";
		break;

		case 18:
			parseValue = "ВОСЕМЬНАДЦАТЬ";
		break;

		case 19:
			parseValue = "ДЕВЯТЬНАДЦАТЬ";
		break;

		default:
			parseValue = "Попробуй еще раз!";
		break;
	}
} else {
	var intValue = parseValue / 10;
		intValue = Math.floor(intValue);

	var pointValue = parseValue % 10;

	switch(intValue) {
	  case 0:
	    intValue = "";
	    break;

	  case 1:
	    intValue = "ДЕСЯТЬ";
	    break;

	  case 2:
	    intValue = "ДВАДЦАТЬ";
	    break;

	  case 3:
	    intValue = "ТРИДЦАТЬ";
	    break;

	  case 4:
	    intValue = "СОРОК";
	    break;

	  case 5:
	    intValue = "ПЯТЬДЕСЯТ";
	    break;

	  case 6:
	    intValue = "ШЕСТЬДЕСЯТ";
	    break;

	  case 7:
	    intValue = "СЕМЬДЕСЯТ";
	    break;

	  case 8:
	    intValue = "ВОСЕМЬДЕСЯТ";
	    break;

	  case 9:
	    intValue = "ДЕВЯНОСТО";
	    break;

	  default:
	    intValue = "Попробуй еще раз!";
	    break;
	}

	switch(pointValue) {
	  case 0:
	    pointValue = "";
	    break;

	  case 1:
	    pointValue = "ОДИН";
	    break;

	  case 2:
	    pointValue = "ДВА";
	    break;

	  case 3:
	    pointValue = "ТРИ";
	    break;

	  case 4:
	    pointValue = "ЧЕТЫРЕ";
	    break;

	  case 5:
	    pointValue = "ПЯТЬ";
	    break;

	  case 6:
	    pointValue = "ШЕСТЬ";
	    break;

	  case 7:
	    pointValue = "СЕМЬ";
	    break;

	  case 8:
	    pointValue = "ВОСЕМЬ";
	    break;

	  case 9:
	    pointValue = "ДЕВЯТЬ";
	    break;

	  default:
	    pointValue = "Попробуй еще раз!";
	    break;
	}

	parseValue = intValue + " " + pointValue

}

alert('ВЫ ВВЕЛИ ЧИСЛО: ' + parseValue + '.');