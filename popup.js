document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("startUpload");
    resultsButton.onclick = start;
});

function start(){
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    var data;
    reader.onload = function(e){
        // console.log(e.target.result);
        data = e.target.result;
        next(data);
    }

    reader.readAsText(file);
}

function next(data) {

    chrome.storage.local.set({
        csv: data
    }, function () {
        chrome.tabs.executeScript({
            file: "content.js"
        });
    });
}
