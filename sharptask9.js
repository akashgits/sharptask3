const form=document.getElementById('addForm');
const itemlist=document.getElementById('items');
const filter=document.getElementById('filter')


// form submit event

form.addEventListener('submit',addItem);



//add item

function addItem(e){
    e.preventDefault();

    // get input value

    var newItem =document.getElementById('item').value;

    // create new li element
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';
    console.log(li);

    //add text node

    li.appendChild(document.createTextNode(newItem));

    itemlist.appendChild(li);

    // create del button element

    const deletebtn=document.createElement('button');

    //add class to delete buttton
    deletebtn.className='btn btn-danger btn-sm float-right delete'
//apppend text node
    deletebtn.appendChild(document.createTextNode('X'))

    //Append button to li
    li.appendChild(deletebtn);

    //append li to list
    itemlist.appendChild(li);

}




// filter event

filter.addEventListener('keyup', filterItems);


//filter Items

function filterItems(e){
    //
    let text=e.target.value.toLowerCase();
    // get li
   let items= itemlist.getElementsByTagName('li');


    // convert to array
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';

        }
        else{
            item.style.display='none';
        }
    });

}








