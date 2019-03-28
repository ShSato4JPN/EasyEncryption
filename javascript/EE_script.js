/*** EasyEncryptionのロジック ***/
window.onload = function() {
    // ファイル選択フォーム
    var input_form = document.getElementById("w-c-h-file-input-form");
    // ファイルのパス
    var txt_file = document.getElementById("w-c-h-text-file");
    // シフト数
    var txt_shift = document.getElementById("w-c-h-text-shift");
    // ループ数
    var txt_loop = document.getElementById("w-c-h-text-loop");
    // 結果出力
    var txt_result = document.getElementById("w-c-b-textarea");
    // ダイアログボタン
    var btn_dialog = document.getElementById("w-c-h-label");
    // 実行ボタン
    var btn_run = document.getElementById("w-c-h-bf-label");
    // エンコードボタン
    var rad_encode = document.getElementById("w-c-h-rad-encode")
    //  デコードボタン;
    var rad_decode = document.getElementById("w-c-h-rad-decode");
    // アップロードファイル
    let uploadFile;
    // ファイル読み込みクラス
    let reader = new FileReader();

    // Event : ファイル読み込み
    reader.addEventListener("load", function() {
        txt_result.value = reader.result;
    });

    // Event : ファイル選択ボタン
    btn_dialog.addEventListener("change",  function(event) {
        uploadFile = event.target.files;
        txt_file.value = uploadFile[0].name;

        reader.readAsText( uploadFile[0]);
    });

    // Event : drag
    input_form.addEventListener("dragover", function(event) {
        finishBabbling(event);
        event.dataTransfer.dropEffect="copy";
    }, false);
    // Event : drop
    input_form.addEventListener("drop", function(event) {
        finishBabbling(event);
        uploadFile = event.target.files;
        txt_file.value = uploadFile[0].name;

        reader.readAsText( uploadFile[0]);
    }, false);

    // Event : 処理を実行するボタン
    btn_run.addEventListener("click", function(event) {
        if (validCheck(event)) {
            if (window.confirm("実行しますか")) {
                if (rad_encode.checked)  run(uploadFile[0], txt_shift.value, txt_loop.value, "ENCODE");
                if (rad_decode.checked)  run(uploadFile[0], txt_shift.value, txt_loop.value, "DECODE");
            }
            // labelとbuttonのイベントが呼ばれるので一回目でバブリングを中止する
            finishBabbling(event);
        }
    });
}

var validCheck = function (event) {
    if (isNothing(document.getElementById("w-c-h-text-file").value)) {
        alert("ファイルが未選択！");
        finishBabbling(event);
        return false;
    }

    if (isNothing(document.getElementById("w-c-h-text-shift").value)) {
        alert("SHIFTが未選択！");
        finishBabbling(event);
        return false;
    }

    if (isNothing(document.getElementById("w-c-h-text-loop").value)) {
        alert("LOOPが未選択！");
        finishBabbling(event);
        return false;
    }

    return true;
}

var run = function(textFile, shift, loop, mode) {
    let val = document.getElementById("w-c-b-textarea").value;
    let result;

    if (mode === "ENCODE") result = caesarEncoding(val, shift, loop);
    if (mode === "DECODE") result = caesarDecoding(val, shift, loop);

    document.getElementById("w-c-b-textarea").value = result;
}
