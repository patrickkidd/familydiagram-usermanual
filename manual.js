function fetchHeader(url, wch) {
    try {
        var req=new XMLHttpRequest();
        req.open("HEAD", url, false);
        req.send(null);
        if(req.status == 200){
            return req.getResponseHeader(wch);
        }
        else return false;
    } catch(er) {
        return er.message;
    }
}

function InitModDate() {
    modDate = fetchHeader(location.href,'Last-Modified');
    localModDate = (new Date(modDate)).toDateString();
    var modDiv = document.createElement('div');
    modDiv.setAttribute('class', 'last-modified');
    modDiv.innerHTML = "Last Modified: " + localModDate;
    document.body.insertBefore(modDiv, document.getElementById('title').nextSibling);
}

$(document).ready(function() {
    if(location.href.indexOf('http') == 0) {
        InitModDate();
    }
});
