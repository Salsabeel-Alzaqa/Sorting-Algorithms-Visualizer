function Bubble()
{
    delay = 0;
    let j;
    for(let i=0;i<array_size-1;i++)
    {
        for(j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"orange");//Color update 
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update
                let temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;
                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "steelblue");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0], div_sizes[0], "green");//Color update
    enable_buttons();
}