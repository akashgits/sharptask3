

// const posts=[
//     {
//         title:'post one', body:'this is post one'},

//         {title:'post two', body:'this is second post'}
    
// ];
// function getposts(){
//     setTimeout (() =>{
//         let output='';
//         posts.forEach((post, index) =>{
//             output +=`<li>${post.title} created ${Date.now()/1000|0}</li>`

//         });
//         document.body.innerHTML=output;

//     }, 1000 )

   

// }

//  function createpost(post,creat4hpost){
//     setTimeout(()=>{
//         posts.push(post);
        
//         creat4hpost();
        
        
//     },)
// }
// ;





// getposts();

// createpost({ title:'post three', body:'this is the post three',},getposts);

// createpost({title:'post four',body:'createAt'},getposts)










const posts=[
    {
        title:'post one', body:'this is post one' , createdat: new Date().getTime()},

        {title:'post two', body:'this is second post' , createdat: new Date().getTime()}
    
];

let intervalid=0;

function getpost(){
    clearInterval(intervalid);
    
       
    const timerid=    setInterval(()=>{
            let output='';
        for (let i=0; i<posts.length;i++){
        
            output +=`<li>${posts[i].title} created ${(new Date().getTime() - posts[i].createdat) /1000}</li>`

        }
        document.body.innerHTML=output;
        console.log(timerid)

    },1000)

    

   

}

 function createpost(post,callback){
    setTimeout(()=>{
        posts.push({...post ,createdat: new Date().getTime()});
        
        callback;
        
        
    },2000)
}



 function creat4thepost(post,callback){
    setTimeout(()=>{
        posts.push({...post ,createdat: new Date().getTime()});
        callback();
        
        
        
        
    },3000)
}
;





getpost();

createpost({ title:'post three', body:'this is the post three',}, getpost);

creat4thepost({title:'post four',body:'createAt'}, getpost)











