const posts=[
    {
        title:'post one', body:'this is post one', time:'10th of jan'},

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

 function updatelastuseractivity(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.time=new Date().getTime();
            resolve(posts.time)

            
        },1000);

    })
}

// const updatelastuseractivity=new Promise.resolve(new Date().getTime())

Promise.all([getposts,updatelastuseractivity]).then(getposts,updatelastuseractivity)

















// createpost(){
//     return new Promise(()=>{

//     })
// }

// sennsomeonemessage(){
//     return new Promise(()=>{

//     })
// }
// updateprofiephoto(){
//     return new Promise(()=>{

//     })
// }
// const user = {
//     username:'hello',
//     lastactivetime:'22th of jan'
// }

// updatelastuseractivity={
//     return new Promise((resolve, reject)={
//         setTimeout(() => {
//             user.lastactivetime=new Date().getTime();
//             resolve(user.lastactivetime)

            
//         },1000);

//     })
// }

// userupdatespost(){
//     Promise.all([createpost, updatelastuseractivity]).then([createpostr])
// }

