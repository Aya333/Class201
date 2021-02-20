let counter=0;

let Uname=prompt('Enter your name so after that i will ask you a few questions to guess a few informations about me');
//console.log("Hello"+Uname+ "Nice to meet you ");
alert('Hello there: '+Uname+ ' Nice to meet you <3 ');




//QUESTION NUMBER 1
let q1=prompt('I love Johnny Depp ? (Yes/No) or (y/n)').toLowerCase();
if(q1===('yes' || q1==='y' )&& (q1!=='no'|| q1!=='n')){
  //console.log("You are CORRECT i absolutely love Johnny Depp he is the best ;)");
  alert('You are CORRECT i absolutely love Johnny Depp he is the best ;)');
  counter++;
}
else if(q1 === ''){
  alert('Enter a (Yes or no)/(y or n)');
  q1=prompt('I love Johnny Depp ? (Yes/No) or (y/n)').toLowerCase();

}

else{
  // console.log("WRONGGG sadly you didn't guess this one correctly maybe you'll do better in the following questions ;)");
  alert('WRONGGG sadly you didn\'t guess this one correctly maybe you\'ll do better in the following questions ;)');
}






//QUESTION NUMBER 2
let q2=prompt('I prefer cat\'s over dogs ? (Yes/No) or (y/n)').toLowerCase();
if(q2===('yes' || q2==='y' )&& (q2!=='no'|| q2!=='n')){
  //console.log("That is one tricky question LOL!! although i have a cat but i love dogs wayy more than cats <3 ");

  alert('That is one tricky question LOL!! although i have a cat but i love dogs wayy more than cats <3 ');
}
else if(q2 === ''){
  alert('Enter a (Yes or no)/(y or n)');
  q2=prompt('I prefer cat\'s over dogs ? (Yes/No) or (y/n)').toLowerCase();

}

else {
  //  console.log("CORRECT i love cats but dogs will always be at the top my list. Sorry cat lovers :')");

  alert('CORRECT i love cats but dogs will always be at the top my list. Sorry cat lovers :\')');
  counter++;

}






//QUESTION NUMBER 3
let q3=prompt('I\'m into philosphy ? (Yes/No) or (y/n)').toUpperCase();
if(q3 === ('YES' || q3==='Y' )&& (q3!=='NO'|| q3!=='N')){
  // console.log("CORRECT i am not only into it i absolutely adore philosphy it is my brain treat <3");

  alert('CORRECT i am not only into it i absolutely adore philosphy it is my brain treat <3');
  counter++;
}
else if(q3 === ''){
    alert('Enter a (Yes or no)/(y or n)');
    q3=prompt('I\'m into philosphy ? (Yes/No) or (y/n)').toUpperCase();
  }
else {
  //console.log("WRONGGG truly wrong i love phlosphy and it's one of the many reasons why i love the Greece emperor <3");

  alert('WRONGGG truly wrong i love philosphy and it\'s one of the many reasons why i love the Greece emperor <3');

}





//QUESTION NUMBER 4
let q4=prompt('I love chocolate ? (Yes/No) or (y/n)').toUpperCase();
if(q4===('YES' || q4==='Y' )&& (q4!=='NO'|| q4!=='N')){
  // console.log("OH NO! although it might be shocking to you as most girls love chocolate me on the other hand don't like it as much!! ");

  alert('OH NO! although it might be shocking to you as most girls love chocolate me on the other hand don\'t like it as much!! ');
}
else if(q4 === ''){
    alert('Enter a (Yes or no)/(y or n)');
    q4=prompt('I love chocolate ? (Yes/No) or (y/n)').toUpperCase();
  }
else{
  // console.log("YASSS! you are right i don't like chocolate as much i preffer Vanilla and Caramel flavoured sweets <3");

  alert('YASSS! you are right i don\'t like chocolate as much i preffer Vanilla and Caramel flavoured sweets <3');
  counter++;

}





//QUESTION NUMBER 5
let q5=prompt('Travelling the world is not on my bucket list ? (Yes/No) or (y/n)').toLowerCase();
if(q5===('yes' || q2==='y' ) && (q2!=='no'|| q2!=='n')){
  //console.log("TRUE TRUE TRUE i mean who doesn't im such an adventurous soul im all about exploring and learning about the different cultures all over the world <3 ");

  alert('TRUE TRUE TRUE i mean who doesn\'t im such an adventurous soul im all about exploring and learning about the different cultures all over the world <3 ');
  counter++;
}
else if(q5 === ''){
    alert('Enter a (Yes or no)/(y or n)');
    q5=prompt('Travelling the world is not on my bucket list ? (Yes/No) or (y/n)').toLowerCase();
  }
else{
  //console.log("WRONGGG!! come on who doesn't wish that???");

  alert('WRONGGG!! come on who doesn\'t wish that???');

}




//-----------------------------------------------------------------------------------
const num=8;
let q6=prompt('I have a number on my mind can you guess it????? HINT: (The number is within this range (0-10))');
for(let i=0; i<4; i++){
  if(q6>num){
    q6=prompt('That\'s too high try again');
    continue;
  }

  else if (q6<num){
    q6=prompt('That\'s too low try again');
    continue;
  }

  else if( q6 === num) {
    alert('DING DING DING!!! you have guessed it wow, you are such a psychic');
    counter++;
    break;
  }

}
if(q6 !== num){
  alert('Saddly you have run out of attempts. Don\'t be upset though you can refresh the page to tryout again and your score = '+counter);
}
//-----------------------------------------------------------------------------------

let q7;


let arr=['japan', 'china','brazil','italy','sweden'];
q7 = prompt('I am very artistic and i have a huge interest in fashion type inn which countries street style fit my aesthetic??').toLowerCase();

for(let i=0; i<6;i++){
  if(arr[i]>=6){
    alert('You have run out of attempts please try again later :( ');
    break;
  }

  for(let j=0; j<arr.length; j++){
    if (q7 === arr[j]){
      alert('You are absolutely right ' + arr[j]+' it is one of my favorites');
      counter ++;
      break;

    }
    else{
      alert('OOPS!! not quite right try again ');
      q7 = prompt('I am very artistic and i have a huge interest in fashion type inn which countries street style fit my aesthetic??');
      continue;
    }

  }

  break;
}



//console.log("It was truly a pleasure meeting you "+Uname+ "Goddbye for now!! hoping to see you in my future works");
alert('It was truly a pleasure meeting you '+Uname+ ' Goodbye for now!! hoping to see you in my future works');







