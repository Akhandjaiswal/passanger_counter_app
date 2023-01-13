

let countv = 0  //global variable
let countred = 0
countEl= document.getElementById("count")
varpent= document.getElementById("pent")
console.log(countEl)
function increment()
{
    countv +=1
    //document.getElementById("count").innerText=countv
    countEl.innerText= countv

   
}




function save()
{
if (countred==0)
{

    let countstr = countv + " - "
    varpent.textContent += countstr
    countv = 0
    countEl.textContent= countv
 } 

 else


    {  
        if (countv!=0) {


        let countstr =  " - " + countv
        varpent.textContent += countstr
        countv = 0
        countEl.textContent= countv
            } 
            
            else {

        }
   


    }

    countred=+1
       
}
