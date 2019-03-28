/***  平文をシーザー暗号に変換する処理***/
var caesarEncoding = function(text, shift, loop) {
    let rows = text.split(/\r\n|\r|\n/);
    let result = "";
    for (var row_cnt = 0;  row_cnt < rows.length;  row_cnt++) {
        let row  = encodeURIComponent(rows[row_cnt]);
        for (var l_cnt = 0; l_cnt < loop; l_cnt++) {
            for (var i = 0; i < row.length; i++) {
                result += String.fromCharCode(row.charCodeAt(i) + parseInt(shift));
            }
            result += result + "\n";
            row = result;
        }
    }

    return result;
}

/***  シーザー暗号を平文に変換する処理***/
var caesarDecoding = function(text, shift, loop) {
    let rows = text.split(/\r\n|\r|\n/);
    let result = "";
    for (var row_cnt = 0;  row_cnt < rows.length;  row_cnt++) {
        let row  = encodeURIComponent(rows[row_cnt]);
        for (var l_cnt = 0; l_cnt < loop; l_cnt++) {
            for (var i = 0; i < row.length; i++) {
                result += String.fromCharCode(row.charCodeAt(i) - parseInt(shift));
            }
            result += result + "\n";
            row = result;
        }
    }

    return result;
}
