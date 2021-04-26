//let name = [ 'Lisa', '/Kaitlin', 'Jan' ]

function writeCards(array){
    
   let cards = [];
   for(let i = 0; i < array.length; i++){
   cards.push (`Thank you, ${array[i]}, for the wonderful surprise gift!`);
}
return cards; 
}

function countDown(){
   let x = 10;
   while(x>=0){
      console.log(x);
      x--; 
} 
}
countDown();

