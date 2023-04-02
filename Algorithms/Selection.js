function SelectionSort()
{
    delay = 0;
    let i;
    for(i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update
        index_min=i;
        for(let j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"orange");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"steelblue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"steelblue");//Color update
            }
        }
        if(index_min!=i)
        {
            let temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;
            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"steelblue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i], div_sizes[i], "green");//Color update
    enable_buttons();
}