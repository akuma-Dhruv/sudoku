
var numSelected = null;
var tileSelected = null;
var gameTimer;
var spaces=0;
var errors = 0;
var numCount=new Array(0,0,0,0,0,0,0,0,0);
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {

    var minute=0;
    var sec=0;
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                let a= board[r][c];
                tile.innerText =a;
                numCount[parseInt(a)-1]++;
                tile.classList.add("tile-start");
            }
            else {
                spaces++;
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
    for(let i=0;i<9;i++)
    {
        if( numCount[i]==9)
        {
            let element= document.getElementById((i+1).toString());
            element.remove();
        }
    }
    
   gameTimer= setInterval(() => {
        let time="";
        sec++; 
        if(sec>59)
        {
            minute++;
            sec=0;
        }   
        if(minute<10)
        {
            time+="0"+minute;
        }
        else
        {
            time+=minute;
        }
        if(sec<10)
            time+=":0"+sec;
        else
            time+=":"+sec;
        id=document.getElementById("time");
        id.innerHTML=time;
    },1000);
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        let i=parseInt( solution[r][c]);
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            spaces--;
            numCount[i-1]++;
            if(spaces==0)
            {
                clearInterval(gameTimer);
            }
            if(numCount[i-1]==9)
            {
                numSelected.remove();
            }
        }
        
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

