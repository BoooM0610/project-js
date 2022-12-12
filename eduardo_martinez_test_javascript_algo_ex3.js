var regi;
var arrayReg = [];



function F31() {
    if (F21() == true) {
        var h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode('The table is correct.'));
        h3.setAttribute('align', 'center');
        document.body.appendChild(h3);
    }
    else {
        console.log(f + ' ' + c);

        document.write("<br>")
        var table = document.createElement('table');
        var bodyTable = document.createElement('tbody');

        for (var i = 0; i < 3; i++) {
            var file = document.createElement('tr');

            for (var j = 0; j < 10; j++) {
                var cell = document.createElement('td');
                var text;
                if (i == 0) {
                    if (j == 0) {
                        text = 'Line ' + (f + 1) + ' is incorrect.';
                    }
                    else {
                        text = newArray[f][j - 1];
                    }
                }
                 else if (i == 1) {
                    if (j == 0) {
                        text = 'Column ' + (c + 1) + ' is incorrect.';
                    }
                    else {
                        tr = newArray.map((_, colIndex) => newArray.map(row => row[colIndex]));
                        text = tr[f][j - 1];
                    }
                 }

                 else {
                    if (j == 0) {
                        reg();
                        text = 'Region ' + regi + ' is incorrect.';
                    }
                    else {
                        reg();
                        text = arrayReg[j -1];
                    }
                 }
                
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
}

function reg() {
    var fi = 0;
    var co = 0;
    console.log(f + ' ' + c)

    if ((f >= 0, f <= 2) && (c >= 0, c <= 2)) {
        regi = 1;
        fi = 0;
        co = 0;
    } else if ((f >= 0, f <= 2) && (c >= 3, c <= 5)) {
        regi = 2;
        fi = 0;
        co = 3;
    } else if ((f >= 0, f <= 2) && (c >= 6, c <= 8)) {
        regi = 3;
        fi = 0;
        co = 6;
    } else if ((f >= 3, f <= 5) && (c >= 0, c <= 2)) {
        regi = 4;
        fi = 3;
        co = 0;
    } else if ((f >= 3, f <= 5) && (c >= 3, c <= 5)) {
        regi = 5;
        fi = 3;
        co = 3;
    } else if ((f >= 3, f <= 5) && (c >= 6, c <= 8)) {
        regi = 6;
        fi = 3;
        co = 6;
    }  else if ((f >= 6, f <= 8) && (c >= 0, c <= 2)) {
        regi = 7;
        fi = 6;
        co = 0;
    } else if ((f >= 6, f <= 8) && (c >= 3, c <= 5)) {
        regi = 8;
        fi = 6;
        co = 3;
    } else {
        regi = 9;
        fi = 6;
        co = 6;
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var elem = newArray[fi + i][co + j];
            arrayReg.push(elem);
        }
    }
}