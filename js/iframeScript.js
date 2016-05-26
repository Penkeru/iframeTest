var chatBox = document.getElementById("chatBox");
var submitChatBtn = document.getElementById("submitBtn");
var chatInputText = document.getElementById("chatInput");
var iframeID = window.frameElement.id;
chatBox.innerHTML ="";

submitChatBtn.addEventListener('click',function(){
    var chatValue = chatInputText.value;
    var framesMessage = "";
    var mainFrameMessage = "";
    if(chatValue.length > 0){
        mainFrameMessage = '<div><span style="color:red;">I said:"'+chatValue+'"</span></div>';
        framesMessage = '<div><span>'+iframeID+':"'+chatValue+'"</span></div>';
        chatBox.innerHTML = mainFrameMessage + chatBox.innerHTML;

        var iframes = parent.document.querySelectorAll('iframe');
        for(var i = 0 ; i<iframes.length; i++){
            if(iframes[i].id !== iframeID){
                iframes[i].contentWindow.chatBox.innerHTML = framesMessage + iframes[i].contentWindow.chatBox.innerHTML;
            }
        }
    }
});

