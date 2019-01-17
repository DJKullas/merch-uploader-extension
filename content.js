chrome.storage.local.get('csv', function (items) {
    doIt(items.csv);
    chrome.storage.local.remove('csv');
});

function doIt(csv){
   console.log(csv);
}