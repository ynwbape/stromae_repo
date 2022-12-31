// Track by Track eyes
const iframeElement = document.querySelector('#tbyt-frame');

let playFrameFunc = frameEl =>  {
    iframeElement.setAttribute('src', frameEl.getAttribute('data-src'));
}

let $isFrameOpen = false; 

$(document).ready(function(){
    $('div.iframeDiv').hide();
    
    $('button.open-frame-btn').click(function (e) { 
        e.preventDefault();
        $('div.iframeDiv').show();
        console.log(e);
    });
})

