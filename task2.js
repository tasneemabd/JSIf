let age =27;
 

if (age >18 ) {
    message = "You are an adult";
  }
  console.log(message);
// exercise2
  let score =45;
 

if (score <=50 ) {
    message1 = "You failed the test";
  }
  console.log(message1);
  //exercise 3


let name = "John"
if ( name ="john")
{
    message2 = " Hello, John";
  }
  console.log(message2);
  //exercise 4

  let day = "Monday";
  if ( day ="Saturday" && "Sunday")
  {
      message3 = "It's a weekday";
    }
    console.log(message3);
  //exercise 5
  let  num = 4;
  if( num/2 )
  {
    message4 = "The number is even";
  }
  console.log(message4);

  //exercise 6
  let  char = "a";
  if (/^[a-zA-Z]$/.test(char)) {
    console.log("It's a letter");}
  //exercise 7

  let list =[1,2,3];
  if (Array.isArray(list))
  {
    console.log("It's a Array");
  }
    //exercise 8

    let x =5;
    if(x>0)
    {
      console.log("x is a positive number")
    }
        //exercise 9

        let y =-4;
        if(y<0)
        {
          console.log("Y is a negative number")
        }
    //exercise 10
        let z=9;
        if (z % 3 == 0)
        {
          console.log("z is a multiple of 3")
        }
            //exercise 11
            let gpa = 3.5;
            if (gpa>= 3.0)
            {
              console.log("Congratulations, you have a good GPA!")
            }
            //exercise 12

            let password = "mypassword123";
            if (password>8)
            {
              console.log("Your password is strong")
            }
   //exercise 13
   let Age= 30;
   if (Age >=18 &&Age<=65)
   {
    console.log("You are of working age")
   }
      //exercise 14
      let  color = 'red';
      if (color === 'red' || color === 'green' || color === 'blue')
      {

console.log ("color is a primary color")

      }

   //exercise 15
   function isNumber(input) {
    return !isNaN(input);
  }
  if (isNumber(11)==true)
  console.log ("11 is a valid number"  )

  if (isNumber("19")==true)
  console.log ("19 is a valid number"  )

  
  if (isNumber("xyz")==true){
  console.log ("xyz is a valid number"  )
}else{
  console.log (" xyz is not a number"  )
}
if (isNumber("17.5")==true)
console.log ("17.5 is a valid number"  )
  
if (isNumber("21f")==true){
  console.log ("21f is a valid number"  )
}else{
  console.log (" 21f is not a number"  )
}
    
  