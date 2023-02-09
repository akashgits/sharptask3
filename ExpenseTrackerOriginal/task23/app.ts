const num1=document.getElementById('num1') as HTMLInputElement;
const num2=document.getElementById('num2') as HTMLInputElement;
const buttonElement=document.getElementById('button')! ;

function add(nume1:number,nume2:number) {
    return nume1+nume2;

}
const numresult:number[]=[];
const ok:any[]=[];
function printres(resobj:{val:number,timestam:Date}){

    console.log(resobj.val+"--->"+resobj.timestam);
    const k=resobj.val;
    const t=resobj.timestam;
   ok.push({k,t});
    

}
buttonElement.addEventListener('click',()=>{
    const nv=num1.value;
    const n2v=num2.value;
    const resuly=add(+nv, +n2v)
    console.log(resuly);
    printres({val:resuly,timestam:new Date()});
    console.log(ok);

})

// console.log(add(1,6));
