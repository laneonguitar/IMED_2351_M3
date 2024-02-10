const name = "Lane Coker";



const myObject = {
    firstName:"Gern",
    lastName: "Blanston",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  document.getElementById("demo").innerHTML = myObject.fullName();
  
  

function logger() {
    console.log('Party on Garth');
    console.log("Party on Garth");
    console.log("Party on Garth");
    console.log("Party on Garth");
}
 
 logger();
 
 
 
 
 
 
 
 
 
 
 
 