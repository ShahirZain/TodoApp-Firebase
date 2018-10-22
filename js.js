var form = document.getElementById('form');
var ul = document.getElementById('unoder');


form.addEventListener('submit', Items );


function Items(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);

    var btn = document.createElement('INPUT');
    btn.setAttribute("type","submit");
    btn.setAttribute("Value","Delete");
    btn.className = 'btn1 z-depth-2 #ff1744 red accent-3';
    li.appendChild(btn);
}

//
// function removeItem(e){
//       e.preventDefault();
//   e.stopPropagation();
//     var lii = e.target.parentElement;
//     var li = e.target.parentElement.getAttribute('data-id');
//     db.collection('Item').doc(li).delete();
    
//     ul.removeChild(lii);
    
// }

function renderFirebase(doc){

    var li = document.createElement('li');
    let name = document.createElement('span');
    li.className = 'collection-item';
    li.setAttribute('data-id',doc.id)
    name.textContent =doc.data().Item;
    console.log(name);
    li.appendChild(name);
    ul.appendChild(li);


    var btn = document.createElement('INPUT');
    btn.setAttribute("type","submit");
    btn.setAttribute("Value","Delete");
    btn.className = 'btn1 z-depth-2 #ff1744 red accent-3';
    li.appendChild(btn);

}


db.collection('Item').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderFirebase(doc);
    })
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Item').add({
        Item: form.name.value
    })
    })

    //remove item
ul.addEventListener('click', (e)=>{
    
    e.stopPropagation();
    alert(e);
    var lii = e.target.parentElement;
    var li = e.target.parentElement.getAttribute('data-id');
    db.collection('Item').doc(li).delete();
    alert(lii)
    ul.removeChild(lii);

});