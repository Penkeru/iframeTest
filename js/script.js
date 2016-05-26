var createButton = document.getElementById("addIframe");
var removeButton = document.getElementById("removeIframe");
var iframeWindows = document.getElementById("iframeWindows");
var iframeCounter = 0;


createButton.addEventListener('click',function(){
    iframeCounter++;
    var newIframe = document.createElement('iframe');
    newIframe.id = "iframe"+iframeCounter;
    newIframe.src = "iframe.html";
    iframeWindows.appendChild(newIframe);
});

removeButton.addEventListener('click',function(){
    iframeCounter--;
    var iframes = document.querySelectorAll('iframe');
    if(iframes.length>0) {
        iframes[0].parentNode.removeChild(iframes[iframes.length - 1]);
    }
});