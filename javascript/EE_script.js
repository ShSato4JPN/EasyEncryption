/*** EasyEncryptionのロジック ***/
window.onload = function() {
    // アップロードファイル
    var uploadFile;
    // ファイル選択フォーム
    let input_form = document.getElementById("w-c-h-file-input-form");
    // ファイルのパス
    let txt_file = document.getElementById("w-c-h-text-file");
    // シフト数
    let txt_shift = document.getElementById("w-c-h-text-shift");
    // ループ数
    let txt_loop = document.getElementById("w-c-h-text-loop");
    // 結果出力
    let txt_result = document.getElementById("w-c-b-textarea");
    // ダイアログボタン
    let dialogBtn = document.getElementById("w-c-h-label");
    // 実行ボタン
    let runBtn = document.getElementById("w-c-h-bf-label");

    // Event : ファイル選択ボタン
    dialogBtn.addEventListener("change",  function(event) {
        uploadFile = event.target.files;
        txt_file.value = uploadFile[0].name;
    });

    // Event : ドラッグアンドドロップ
    // drag
    input_form.addEventListener("dragover", function(event) {
        finishBabbling(event);
        event.dataTransfer.dropEffect="copy";
    }, false);
    // drop
    input_form.addEventListener("drop", function(event) {
        finishBabbling(event);
        uploadFile = event.dataTransfer.files;
        txt_file.value = uploadFile[0].name;
    }, false);

    // Event : 処理を実行するボタン
    runBtn.addEventListener("click", function(event) {
        if (isNothing(txt_file.value)) {
            alert("ファイルが未選択！");
            finishBabbling(event);
            return;
        }

        if (isNothing(txt_shift.value)) {
            alert("SHIFTが未選択！");
            finishBabbling(event);
            return;
        }

        if (isNothing(txt_loop.value)) {
            alert("LOOPが未選択！");
            finishBabbling(event);
            return;

            let errMsg;
            try {
                var res = run(uploadFile);
                txt_result.value = res;
                errMsg = "処理終了！"
            } catch(error) {
                errMsg = "処理中にエラーが発生しました・・・。";
            } finally {
                alert(errMsg);
            }

            return;
        }
    });
}

var run = function(textFile) {
}
