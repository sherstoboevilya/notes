function addBLock(){
	var textNote = $("#text-note")[0].value,
		textTags = $("#text-tags")[0].value,
		bodyNote = $("#body-note");


	var blockNote = '<div class="note" v-model="name"><p class="text-note">' 
					+ textNote 
					+ '</p><p class="' 
					+ textTags + '">'
					+ textTags 
					+ '</p><p class="date-note">' 
					+ allDate() + '</p></div>';

	if(chkError()){
		bodyNote.append(blockNote);
		clear();
	}
}


function allDate(){
	return returnFullTime() + " - " + returnFullDate();
}


function clear(){
	$("#text-note")[0].value = "";
	$("#text-tags")[0].value = "";
}



function returnFullDate(){
	var date = new Date(),
		day = date.getDate(),
		month = (date.getMonth() + 1),
		year = date.getFullYear();

	return addZeroInDate(day) + "/" + addZeroInDate(month) + "/" + year;
}


function addZeroInDate(date){
	return (date < 9) ? ("0" + date) : date;
}

function returnFullTime(){
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes();

	return hours + ":" + minutes;
}



function chkEmptyField(el){
	if(el.value == ""){
		el.classList.add("error");
		return false;
	} else {
		el.classList.remove("error");
		return true;
	}
}



function chkError(){
	chkEmptyField($("#text-tags")[0]);
	chkEmptyField($("#text-note")[0]);

	if(chkEmptyField($("#text-tags")[0]) && chkEmptyField($("#text-note")[0])){
		return true;
	} else {
		return false;
	}
}