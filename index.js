let minutes;
document.getElementById("ok").addEventListener("click",()=>{
        minutes = document.getElementById("num").value;
        console.log("ok");
        chrome.runtime.sendMessage({minutes}, function(response) {
                console.log(response);
        });
})
