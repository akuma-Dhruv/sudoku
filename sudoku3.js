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
async function loadArray()
{
    const response = await fetch('data/sudoku.json');
    const data =await response.json();
    return data;
}
async function generateMatrix()
{
    var num;
    var matrixData={

         que :"" ,
         sol :"" 
    }
    
    let data=[];
    num=Math.floor(Math.random()*2243);
    try{
        data = await loadArray();
        matrixData.que=data[num].que;
        matrixData.sol=data[num].sol;
        for(let i=0;i<81;i++)
    {
        var r=i/9;
        var c=i%9;

        // board[r][c]=que[i];
        // solution[r][c]=sol[i];
    }
}
catch(err){
    console.log("Error!");
    console.log(err);
}
console.log(num);
console.log(matrixData);

}

document.addEventListener("DOMContentLoaded",generateMatrix());
//generateMatrix();