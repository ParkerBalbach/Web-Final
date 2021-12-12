function store(){ 
    var title = document.getElementById('title').value;
    var body = document.getElementById('article').value;
    var key = document.getElementById('title').value;

    const blog_post = {
        title: title,
        body: body,
    }

    window.localStorage.setItem(key,JSON.stringify(blog_post));
}

function retrieveRecords(){ 
    var key = document.getElementById('retrieveKey').value; 
    console.log("retreive records");
    var records = window.localStorage.getItem(key); 
    var paragraph = document.createElement("p");
    var info = document.createTextNode(records);
    paragraph.appendChild(info);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ 
    var key = document.getElementById('removeKey').value; 
    localStorage.removeItem(key) 
    console.log("remove items");
}

function editItem() {
    var key = document.getElementById('editKey').value;
    var title = document.getElementById('changedTitle').value;
    var body = document.getElementById('changedBody').value;

    const edit_post = {
        title: title,
        body: body,
    }
    window.localStorage.setItem(key,JSON.stringify(edit_post));
}

function clearStorage(){ 
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ 
    document.getElementById("blog").onsubmit = store
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
    document.getElementById("editButton").onclick = editItem
}