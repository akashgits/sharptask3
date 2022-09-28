

const posts=[
    {
        title:'post one', body:'this is post one'},

        {title:'post two', body:'this is second post'}
    
];

   

function getposts(){
    setTimeout(()=>
    {

    
    
    let output='';
    for (let i=0; i<posts.length;i++){
    
        output +=`<li>${posts[i].title} created</li>`

    }
    document.body.innerHTML=output;
}, 1000)



}


 function createpost(post){
    return new Promise(( resolve, reject)=>{

        setTimeout(()=>{
            posts.push(post);
        
            const error= false;
            if(!error){
                resolve()
                

            }
            else{
                reject('error: something went wrong')
                
            }
            
        
            
            
        },1000)

    })
  
}

function deletepost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(posts.values !=0){
                resolve(posts.pop())
            }
            else{
                reject('array is empty')
            }
        },1000)
    })

}







// createpost();


createpost({ title:'post three', body:'this is the post three',})
.then( ()=>{getposts();
    for(let i=posts.length;i>=0;i--){
        
        
        deletepost().then(()=>{
            getposts();
            
        })
        

    }


 


})
.catch(err=>console.log(err))






// //     }]
// //     // getposts()]
// // })
    
    
    





 /// primose all

//   const Promise1=Promise.resolve('hello world');
//   const Promise2=10;
//   const Promise3=new Promise((resolve ,reject)=>setTimeout(resolve ,2000, 'goodbye'));
  



//   Promise.all([Promise1, Promise2, Promise3]).then(values=> console.log(values));