

function to_verify() {
    var data = new Array(9);

    for (var i = 0; i < data.length; i++){
        data[i] = new Array(9);
        for (var j = 0; j < data.length; j++){
            data[i][j] = 0;
        }
    }

    return data;
}

var newArray = to_verify();

function F11() {

    var arrayOld = new Array(9);

    for (var i = 0; i < array_number.length; i++) {
        var text = '';
        for (var j = 0; j < array_number[i].length; j++){
            if (array_number[i].charAt(j) == ' ')
            {
                continue;
            }
            text = text.concat(array_number[i].charAt(j))
            arrayOld[i] = text;
        }
    }

    for (var i = 0; i < newArray.length; i++){
        for (var j = 0; j < newArray.length; j++){
            newArray[i][j] = arrayOld[i].charAt(j);
        }
    }
}


function F12() {
    var table = document.createElement('table');
    var bodyTable = document.createElement('tbody');

    for (var i = 0; i < 9; i++) {
        var file = document.createElement('tr');

        for (var j = 0; j < 9; j++) {
            var cell = document.createElement('td');
            var text = newArray[i][j];
            cell.appendChild(document.createTextNode(text));
            file.appendChild(cell);
        }

        bodyTable.appendChild(file);
    }

    table.appendChild(bodyTable);
    document.body.appendChild(table);
    table.setAttribute('border', '2');
    table.setAttribute('width', '30%');
    table.setAttribute('align', 'center');
}
