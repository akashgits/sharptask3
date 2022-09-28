const posts=[
    {
        title:'post one', body:'this is post one' , createdat: new Date().getTime()},

        {title:'post two', body:'this is second post' , createdat: new Date().getTime()}
    
];
function getpost(){
    
        let output='';
        for (let i=0; i<posts.length;i++){
        
            output +=`<li>${posts[i].title} created</li>`

        }
        document.body.innerHTML=output;


    }

//         function getposts(){

//                 setTimeout (() =>{
//                     let output='';
//                     posts.forEach((post, index) =>{
//                         output +=`<li>${post.title} created ${Date.now()/1000|0}</li>`
            
//                     });
//                     document.body.innerHTML=output;
            
//                 }, 1000 )

    

   

// }

 function createpost(post,callback){
    setTimeout(()=>{
        posts.push(post );
        
        callback;
        
        
    }, 2000)
}



 function creat4thepost(post,callback){
    setTimeout(()=>{
        posts.push(post );
        callback();
        
        
        
        
    },3000)
}
;



getpost();

// getpost();

createpost({ title:'post three', body:'this is the post three'}, getpost);

creat4thepost({title:'post four',body:'createAt'}, getpost)






