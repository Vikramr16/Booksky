var overr=document.querySelector(".overlay")
var popup=document.querySelector(".popup-box")

//'+' shows the popup
var btadd=document.getElementById("button2")
btadd.addEventListener("click",function(){
    overr.style.display="block"
    popup.style.display="block"
})

//cancel the page
var can=document.getElementById("cancel-btn")
can.addEventListener("click",function(event){
    event.preventDefault()
    overr.style.display="none"
    popup.style.display="none"
})

//taking inputs div
var container=document.querySelector(".two")
var bookid=document.getElementById("bookid")
var authorname=document.getElementById("Author")
var description=document.getElementById("desc")

var addbutton=document.getElementById("add-btn")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","three")
    div.innerHTML=`<h2>${bookid.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${description.value}</p>
    <button onclick=Delete(event)>Delete</button>`
    container.append(div)
    overr.style.display="none"
    popup.style.display="none"
    document.getElementById("bookid").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("desc").value = "";
})

//delete book
    function Delete(event)
    {
        event.target.parentElement.remove()
    }