

let countv = 0  //global variable

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

    let countstr = countv + " - "
    varpent.textContent += countstr
    countv = 0
    countEl.textContent= countv


}
