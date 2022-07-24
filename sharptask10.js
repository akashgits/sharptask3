const form=document.getElementById('addForm');

form.addEventListener('submit',toLocalstorage);



function toLocalstorage(e){
   
    e.preventDefault();
    var newItem =document.getElementById('item').value;
    
    localStorage.setItem('name',newItem);

}
