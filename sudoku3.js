async function loadArray()
{
    const response = await fetch('data/sudoku.json');
    const data =await response.json();
    return data;
}
async function generateMatrix()
{
    var num;
    var board ="" ;
    var solution="" ;
    let data=[];
    num=Math.floor(Math.random()*2243);
    try{
        data = await loadArray();
        board=data[num].que;
        solution=data[num].sol;
    }
    catch(err){
        console.log("Error!");
        console.log(err);
    }
    console.log(num);
    console.log(board);
    console.log(solution);
}
document.addEventListener("DOMContentLoaded",generateMatrix());