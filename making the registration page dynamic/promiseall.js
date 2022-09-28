
  
   console.log('hii')
  
  const Promise1=Promise.resolve('hello world');
  const Promise2=10;
  const Promise3=new Promise((resolve ,reject)=>setTimeout(resolve ,5000, 'goodbye'));

  
  



  Promise.all([Promise1, Promise2, Promise3]).then(values=> console.log(values));

 