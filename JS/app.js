let counter=0;
let i=0;
let Uname=prompt("Enter your name so after that i will ask you a few questions to guess a few informations about me");
//console.log("Hello"+Uname+ "Nice to meet you ");
alert("Hello there: "+Uname+ " Nice to meet you <3 ");




//QUESTION NUMBER 1
let q1=prompt("I love Johnny Depp ? (Yes/No)");
if(q1.toLowerCase()==='yes' && q1.toLowerCase()!=='no'){
    //console.log("You are CORRECT i absolutely love Johnny Depp he is the best ;)");
    alert("You are CORRECT i absolutely love Johnny Depp he is the best ;)");
    counter++;
}
else{
   // console.log("WRONGGG sadly you didn't guess this one correctly maybe you'll do better in the following questions ;)");
    alert("WRONGGG sadly you didn't guess this one correctly maybe you'll do better in the following questions ;)");
}





//QUESTION NUMBER 2
let q2=prompt("I prefer cat's over dogs ? (Yes/No)");
if(q2.toLowerCase()==='yes' && q2.toLowerCase()!=='no'){
    //console.log("That is one tricky question LOL!! although i have a cat but i love dogs wayy more than cats <3 ");

    alert("That is one tricky question LOL!! although i have a cat but i love dogs wayy more than cats <3 ");
}
else {
  //  console.log("CORRECT i love cats but dogs will always be at the top my list. Sorry cat lovers :')");

    alert("CORRECT i love cats but dogs will always be at the top my list. Sorry cat lovers :')");
    counter++;

}






//QUESTION NUMBER 3
let q3=prompt("I'm into philosphy ? (Yes/No)");
if(q3.toUpperCase()==='YES' && q3.toUpperCase()!=='NO'){
   // console.log("CORRECT i am not only into it i absolutely adore philosphy it is my brain treat <3");

    alert("CORRECT i am not only into it i absolutely adore philosphy it is my brain treat <3");
    counter++;
}
else {
    //console.log("WRONGGG truly wrong i love phlosphy and it's one of the many reasons why i love the Greece emperor <3");
    
    alert("WRONGGG truly wrong i love philosphy and it's one of the many reasons why i love the Greece emperor <3");

}





//QUESTION NUMBER 4
let q4=prompt("I love chocolate ? (Yes/No)");
if(q4.toUpperCase()==='YES' && q4.toUpperCase()!=='NO'){
   // console.log("OH NO! although it might be shocking to you as most girls love chocolate me on the other hand don't like it as much!! ");

    alert("OH NO! although it might be shocking to you as most girls love chocolate me on the other hand don't like it as much!! ");
}
else{
   // console.log("YASSS! you are right i don't like chocolate as much i preffer Vanilla and Caramel flavoured sweets <3");

    alert("YASSS! you are right i don't like chocolate as much i preffer Vanilla and Caramel flavoured sweets <3");
    counter++;

}





//QUESTION NUMBER 5
let q5=prompt("Travelling the world is not on my bucket list ? (Yes/No)");
if(q5.toLowerCase()==='yes' && q5.toLowerCase()!=='no'){
    //console.log("TRUE TRUE TRUE i mean who doesn't im such an adventurous soul im all about exploring and learning about the different cultures all over the world <3 ");

    alert("TRUE TRUE TRUE i mean who doesn't im such an adventurous soul im all about exploring and learning about the different cultures all over the world <3 ");
counter++;
}
else{
    //console.log("WRONGGG!! come on who doesn't wish that???");

    alert("WRONGGG!! come on who doesn't wish that???");

}




//-----------------------------------------------------------------------------------
const num=8;
let q6=prompt("I have a number on my mind can you guess it????? HINT: (The number is within this range (0-10))");
  for(let i=0; i<4; i++){
     if(q6>num){
     q6=prompt("That's too high try again");
    continue;
 }
    
    else if (q6<num){
        q6=prompt("That's too low try again");
      continue;
    }

    else if( q6 == num)   {
        alert("DING DING DING!!! you have guessed it wow, you are such a psychic");
        counter++;
        break;
    }
    
}
  if(q6 != num){
  alert("Saddly you have run out of attempts. Don't be upset though you can refresh the page to tryout again and your score = "+counter);
  }
//-----------------------------------------------------------------------------------
//console.log("It was truly a pleasure meeting you "+Uname+ "Goddbye for now!! hoping to see you in my future works");
alert("It was truly a pleasure meeting you "+Uname+ " Goodbye for now!! hoping to see you in my future works");







