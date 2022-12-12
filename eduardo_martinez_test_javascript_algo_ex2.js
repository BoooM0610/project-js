var cArray = [];
var fArray = [];
var c;
var f;

function F21(a_parameter) {

    tr = newArray.map((_, colIndex) => newArray.map(row => row[colIndex]));

    for (var i = 0; i < newArray.length; i++) {
        var duplicatef = newArray[i];
        console.log(duplicatef);
        var set = new Set();
        var duplicates = duplicatef.filter(n => set.size === set.add(n).size);

        if (duplicates.length > 0) {
            fArray = newArray[i];
            f = i;
        }
        

        var duplicatec = tr[i];
        console.log(duplicatec);

        var set = new Set();
        var duplicates = duplicatec.filter(n => set.size === set.add(n).size);

        if (duplicates.length > 0) {
            cArray = newArray[i];
            c = i
        }

        if (cArray.length > 0 || fArray.length > 0) {
            return false;
        }

        for (var j = 0; j < newArray[i].length; j++) {
            if (!(0 < newArray[i][j] <= 9)) {
                return false;
            }
        }
    }

    return true;
}
