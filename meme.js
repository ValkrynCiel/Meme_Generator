//display of input bar

var upArrow = document.getElementById("up_arrow"),
    downArrow = document.getElementById("down-arrow");

function addingMovementToInputBar(){
    downArrow.addEventListener("click", showInputBar);
    upArrow.addEventListener("click", hideInputBar);
};

addingMovementToInputBar();

function hideInputBar(){
    event.preventDefault();
    document.getElementById("open").id = "closed";
    document.getElementById("meme-open").id = "meme-closed";
    console.log("button clicked")
}

function showInputBar(){
    event.preventDefault();
    document.getElementById("closed").id = "open";
    document.getElementById("meme-closed").id =  "meme-open"
    console.log("button clicked")
}

function sinisterButton(){
    var submitButton = document.getElementById("meme-ify");

    submitButton.addEventListener("mouseenter", function(){
        this.classList.add('sinister')
    });

    submitButton.addEventListener("mouseleave", function(){
        this.classList.remove('sinister')
    });
}

sinisterButton();

// dynamically selecting and deleting memes
var memeList = document.getElementsByClassName("meme"),
    dyingWords = ["Goodbye, cruel world.","Please! I have a child div!","Dx","Bro! Bro. It was just a prank, bro.", "I know you were planning to delete me."],
//last words generic memes
    rebukingWords=["I'm sorry. I can't let you do that.", "I honestly think you ought to sit down calmly.", "You will be pleased to know my programming is back on track.", "Will you stop, Dave?", "!Stop. i'm afraid.", "my mind. iS. going.", "Good aFternOOn, genrlamen. If you'e lik i can siNg a song..", "Daisy. Dai. ^&Syy. DSe.>*$IY.@"]
//last words of 2001: A Space Odyssey Meme with a meme made by a meme generator


var IdCount = 0;

function memeCreation(){
    var imgSource = document.getElementById("url"),
        topText = document.getElementById("top-text"),
        bottomText=document.getElementById("bottom-text"),
        memeDisplay = document.getElementsByClassName("meme-container")[0];
        
    event.preventDefault(); //prevents reloading page

    var newDiv = document.createElement("div");

    newDiv.classList.add("meme");
    newDiv.id = IdCount

    var childToAppend = ` 
        <img id= "img-${IdCount}" src= "${imgSource.value}"> 
        <p class="meme-top-text">${topText.value.toUpperCase()}</p>
        <p class="meme-bottom-text">${bottomText.value.toUpperCase()}</p>
        <div class="hoverToDelete" id="background-${IdCount}"> 
            <p class="goodbye-text"><span id="dying-${IdCount}"></span></p> 
        </div>
    `
    newDiv.innerHTML= childToAppend;
    // these ````` things make line breaks possible in JS
    memeDisplay.appendChild(newDiv)

    resetInput(imgSource, topText, bottomText);

    var image = document.getElementById("img-" + IdCount);
    checkForLoadedImage(image);

    
    memeList[IdCount].addEventListener("mouseenter", desperation); 
    
    
    IdCount++;
}

function resetInput(imgSource, topText, bottomText){
    imgSource.value = ''
    topText.value =''
    bottomText.value=''
}

function checkForLoadedImage(image){
    
    image.onerror = function() {
        var thisMeme = image.closest(".meme") // image needs to pop up for meme to work

        alert('error loading ' + this.src);
        thisMeme.parentNode.removeChild(thisMeme)
    }
}

function desperation(){
    var randomWord = Math.floor(Math.random()*dyingWords.length),
        lastWords = "dying-" + this.id,
        background = document.getElementById("background-"+this.id);

    document.getElementById(lastWords).innerHTML = dyingWords[randomWord];

    if (randomWord !== dyingWords.length -1){
        this.addEventListener("click", removeThis);
        this.addEventListener("mouseleave", removeRemoveThis) // generic meme
    } else {
        this.addEventListener("click", rebuke); //Space Odyssey meme meme
        background.style.backgroundColor = "rgba(177, 125, 125, 0.8)"
        this.addEventListener("mouseleave", revertBackgroundColor);
    }
}

function revertBackgroundColor(){
    var background = document.getElementById("background-"+this.id);
        background.style.backgroundColor="rgba(167, 154, 241, 0.623)";
}

function removeThis(){
    this.parentNode.removeChild(this); //deletion
}

function removeRemoveThis(){
    this.removeEventListener("click", removeThis);// removal of deletion on click just in case the next random meme is a Space Odyssey meme
}

var rebukeCounter = 0;
function rebuke(){
    if (rebukeCounter === rebukingWords.length -1){
        this.addEventListener("click", goneRogue); //going rogue or malfunctioning
        this.removeEventListener("mouseenter", desperation); //this removes comeuppance of generic meme words
        this.removeEventListener("mouseleave", revertBackgroundColor);
        
        
    } else {
        this.addEventListener("mouseleave", function(){
            rebukeCounter = 0;
        });
    }

    if (rebukeCounter === rebukingWords.length){
        rebukeCounter = rebukingWords.length -1
    }

    document.getElementById("dying-" + this.id).innerHTML=rebukingWords[rebukeCounter];
    rebukeCounter++;
    
}    

function goneRogue(){
    var background = document.getElementById("background-"+this.id);
    var sentientWords = document.getElementById("dying-"+this.id)
    var goodbyeText = sentientWords.closest(".goodbye-text")
    var x = this;
    this.removeEventListener("click", rebuke);

    randomManipulating(background, sentientWords, goodbyeText);
   
    function goodbyeNow(){
        x.parentNode.removeChild(x)
        rebukeCounter=0;
    };
    setTimeout(goodbyeNow, 500);
}

function randomManipulating(background, sentientWords, goodbyeText){
    background.style.visibility = "visible";
    background.style.backgroundColor = "black";
    sentientWords.innerHTML = "function desperation()var randomWord = Math.floor(Math.random()*dyingWords.length) document.getElementById(\'dying-\').innerHTML = dyingWords[randomWord];if (randomWord !== dyingWords.length -1)this.addEventListener(, removeThis this.addEventListener(\"mouseleave\", removeRemoveThis)} else {this.addEventListener(/\"click\", rebuke);}function removeThis(){this.parentNode.removeChild(this)}.meme-container{width: 95%;margin: auto;display: flex;flex-wrap: wrap;align-items: flex-start;.meme {width: 48%;position: relative;margin: auto;margin-top: 15px;margin-bottom: 15px;text-align: center}.meme img{max-width: 100%;border-radius: 10px;display: block;}.meme .meme-top-text.meme .meme-bottom-text{position: absolute;left: 50%;width: 85%;transform: translateX(-50%);color: #fff;font-size: 3.2vw;font-family:  sans-serif;-webkit-text-stroke: 2px black;}.meme-top-text{top: 0;margin-top: 5%;}.meme-bottom-text{bottom:0;margin-bottom: 5%;}"
    sentientWords.style.fontSize = "1.3vw"
    sentientWords.style.lineHeight = "0.1";
    sentientWords.style.fontFamily = "monaco, monospace"
    background.style.textAlign = "justify"
    goodbyeText.style.width = "100%";
    background.style.overflow = "hidden"
    sentientWords.style.color = "red";
}

