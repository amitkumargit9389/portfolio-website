
document.body.addEventListener('click',function elementName(event){
    let elename = event.target.nodeName;
    let mypara=document.getElementById('#infopara');
    mypara.textContent=elename;
});