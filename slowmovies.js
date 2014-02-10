
window.resizeTo(1024,500);


var randomnumber=Math.floor(Math.random()*100)

randomnumber=randomnumber + 628;

var currPic=randomnumber;

var totPics=48;

var keepTime;

var timer=500;

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function setupPicChange() { 
    timer = timer*1.01;
	keepTime=setTimeout(changePic, timer); 
}

function changePic() { 
    currPic++; 
    
    if(currPic>totPics) { 
        currPic=628;
    }

    currPic=FormatNumberLength(currPic, 5);
    document.getElementById("picture").src="https://s3.amazonaws.com/whatwonder.com/images/blushing/blushing"+currPic+".jpg";
    setupPicChange(); 
}

function stopTimer() { 
    clearTimeout(keepTime); 
}

function startTimer() { 
    timer= timer*1.1;
    keepTime=setTimeout("changePic()", timer); 
}

