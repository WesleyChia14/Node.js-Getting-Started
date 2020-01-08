// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let cont = 0;
const interval = setInterval( () =>{
   console.log('Hello Word');
   cont++;

   if(cont===5){
     console.log('Done');
     clearInterval(interval);
   }

   console.log(interval);

} , 1000);