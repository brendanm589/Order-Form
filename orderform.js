function loadVariables() {

    var flavor="None";
    var piesize="None";
    var topping="None";
}

function calculateTotal(flavor, piesize, topping) {
    var total=0.00;
    var tax=0.08;

   if(flavor=="Apple"||flavor=="Blueberry"||flavor=="Cherry") {
       if(piesize=="Personal"){
           total=5.00;
       }
       if(piesize=="Family"){
           total=8.00;
       }
       if(piesize=="BigFamily"){
            total=12.00;
       }
       if(piesize=="BadIdea"){
           total=20.00;
       }
   }
   if(flavor=="KeyLime"){
       if(piesize=="Personal"){
           total=7.00;
       }
       if(piesize=="Family"){
           total=10.00;
       }
       if(piesize=="BigFamily"){
            total=15.00;
       }
       if(piesize=="BadIdea"){
           total=22.00;
       }
   }

   if(topping=="Chocolate"||topping=="Vanilla"||topping=="Strawberry"){
       total=total+1.00;
   }
   if(topping=="None"){
       total=total;
   }
   total=total+(total*tax);
   
   document.forms[0].total.value=total;

   alert("Your Order: \nFlavor: "+flavor+"\nSize: "+piesize+"\nTopping: "+topping+"\nTotal: "+total);
}

function clearVariables(flavor, piesize, topping){
    var flavor="None";
    var piesize="None";
    var topping="None";
    document.forms[0].total.value=0.00;

}

