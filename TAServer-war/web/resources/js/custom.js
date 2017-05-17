/*Функция показа сообщения о процессе загрузки*/
function showProgress(data) {    
    if (data.status === "begin") {
        document.getElementById('loading_wrapper').style.display = "block";
    } else if (data.status === "success") {
        document.getElementById('loading_wrapper').style.display = "none";
    }
}

/*Функция информирования о добавлении новых продаж*/
function socketListener(message, channel, event) {
//    console.log(message);
    var divCont = document.createElement('div');
    divCont.style.textAlign = 'center';
    var pOne = document.createElement('p');
    pOne.appendChild(document.createTextNode('Пришло новое сообщешие'));
    pOne.style.display = 'inline';
    pOne.style.color = 'darkgreen';
    pOne.style.fontSize = '12px';
    pOne.style.fontWeight = 'bold';
    pOne.style.background = 'lightgray';
    divCont.appendChild(pOne);
    document.body.insertBefore(divCont, null);
}