// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const pwbt=new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('ticket')
        
//     }, 3000);
// })




// const getpopcorn=      pwbt.then((t)=>{

//     console.log('husband we should go');
//     console.log('wife: no i am hungery')
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
        
    
//     // console.log(`person3: shows${t}`)
// });

// const getbutter=     getpopcorn.then((t)=>{
//     console.log('husband we should go');
//     console.log('wife: i need butter on my popcorn')
//     return new Promise((resolve, reject) => resolve(`${t} butter`))
        

// });
// getbutter.then((t)=>console.log(t));


// console.log('person4: shows ticket')
// console.log('person5: shows ticket')



/// async awaits


console.log(`person1: shows ticket`)
console.log(`person2: shows ticket`)


const perMovie=async()=>{




const pwbt=new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('ticket')
        
    }, 3000);
})

let ticket =await pwbt;
return ticket;
}

perMovie().then((m)=>console.log(m));









console.log(`person4: shows ticket`)
console.log(`person4: shows ticket`)
