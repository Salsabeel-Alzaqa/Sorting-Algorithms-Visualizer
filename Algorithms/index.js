let size_inp = document.getElementById('array-size'); //size -Range- input
let newArr=document.getElementById("new-array"); //generate random new array button
let algo_butt = document.querySelectorAll(".algo-item button"); // algorithms buttons
let info = document.getElementById('array-info'); //array size paragraph
let heading = document.getElementById('heading'); // header 
let cont=document.getElementById("array-container"); //array container
let div_sizes=[]; //arrey-element-size
let divs = []; //array-element
let array_size = size_inp.value;
newArr.addEventListener("click",randomize);//generate array
size_inp.addEventListener("input", update_size);// update array size
function randomize()
{
    heading.innerHTML = 'Please choose a sorting algorithm!!';
    cont.innerHTML = "";
    for(var i=0;i<array_size;i++)
    {   //make the array element and drow them ...
        div_sizes[i]=Math.floor(Math.random() * (100 - 5 + 1)) + 5;
        divs[i] = document.createElement("div");
        if (array_size < 30)
        {
            divs[i].innerHTML = `<span>${div_sizes[i]}%<span>`;
        }//because there is no space :)
        cont.appendChild(divs[i]);
        divs[i].style="text-align:center;"+"margin:0.1%; background-color: steelblue; border-radius: 5px ; width:" + (100/array_size-(2*0.1)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update_size()
{
    array_size = size_inp.value;
    info.innerHTML = "Array Size = " + array_size;
    randomize();
}
window.onload = update_size();

for(let i=0;i<algo_butt.length;i++)
{
    algo_butt[i].addEventListener("click",Solve);
}
function disable_buttons()
{
    for(let i=0;i<algo_butt.length;i++)
    {
        algo_butt[i].style.visibility='hidden';
        algo_butt[i].disabled = true;
        newArr.disabled=true;
        size_inp.disabled=true;
    }
}
function Solve()
{
    disable_buttons();
    switch(this.innerHTML)
    {
        case "Bubble Sort":
            {
                heading.innerHTML = 'The Selected Algorithm is Bubble Sort!';
                Bubble();
            }
            break;
        case "Merge Sort":
            {
                heading.innerHTML = 'The Selected Algorithm is Merge Sort!';
                Merge();
            }
            break;
        case "Selection Sort":
            {
                heading.innerHTML = 'The Selected Algorithm is Selection Sort!';
                SelectionSort();
            }
            break;            
        case "Insertion Sort":
            {
                heading.innerHTML = 'The Selected Algorithm is Insertion Sort!';
                Insertion();
            }
            break;
        case "Heap Sort": 
            {
                heading.innerHTML = 'The Selected Algorithm is Heap Sort!';
                Heap();
            }
            break;
        case "Quick Sort":
            {
                heading.innerHTML = 'The Selected Algorithm is Quick Sort!';
                Quick();
            }
            break;
    }
}

let delay_time=10000/(Math.floor(array_size/10)*40);//Decrease numerator to increase speed.
let delay = 0;//This is updated every div change so that visualization is visible.
function div_update(element,height,color)
{
    window.setTimeout(function () {
        if (array_size < 30)
        {
            element.innerHTML = `<span>${height}%<span>`;
        }//because there is no space :)
        element.style="text-align:center;"+"margin:0.1%; border-radius: 5px ; width:" + (100/array_size-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delay+=delay_time);
}
function enable_buttons()
{
    window.setTimeout(function(){
        for(let i=0;i<algo_butt.length;i++)
        {
            algo_butt[i].style.visibility='visible';
            algo_butt[i].disabled = false;
            newArr.disabled = false;
            size_inp.disabled = false;
        }
    },delay+=delay_time);
}
/* by Salsabeel Alzaqa ^-^ */