console.log("page loaded...");

function updateName(){
    const name = document.querySelector("#name");
    const newName = prompt('Update name')

    name.innerHTML = newName;
}

function rejectRequest(id){
    const elem = document.querySelector(id).remove()
    const count = document.querySelector(".badge")
    count.innerHTML--
    
}


function acceptRequest(id){
    const elem = document.querySelector(id)
    const count = document.querySelector(".badge")
    let removeItem = elem.firstChild.nextSibling.nextSibling.nextSibling;
    removeItem.remove()
    const cList = document.querySelector("#connection");
    cList.appendChild(elem);
    count.innerHTML--
}