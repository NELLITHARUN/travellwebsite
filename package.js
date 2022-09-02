function FavPlaces(){
    let places = document.getElementById('userfavplace').value;
    let mainMoney = Number(document.getElementById("money").innerText);
   let userElement = document.createElement("p");
   let nodeText = document.createTextNode(places);
     let tourcode1 =document.getElementById("tourcode").innerText;    
     sessionStorage.setItem("tourcode",tourcode1 );
    
    userElement.appendChild(nodeText);
    document.getElementById("userAdd").appendChild(userElement);
     let totalMoney;
  if(places == 1){
 
    totalMoney = mainMoney + 2000;
   //document.getElementById("money").innerText = totalMoney;
   return totalMoney;
 } else if(places == 2){
     totalMoney = mainMoney + 2000;
     return totalMoney;
 }else if(places == 3){
      totalMoney = mainMoney + 2000;
     return totalMoney;
  }else{
     totalMoney = mainMoney;
   return totalMoney;
  }
}
FavPlaces();
 function Places(){
    let places = document.getElementById('userfavplace').value;
    let mainMoney = Number(document.getElementById("money").innerText);
   let userElement = document.createElement("p");
   let nodeText = document.createTextNode(places);
    
    userElement.appendChild(nodeText);
    document.getElementById("userAdd").appendChild(userElement);
     let totalMoney;
  if(places == 1){
    totalMoney = mainMoney + 2000;
   //document.getElementById("money").innerText = totalMoney;
   return totalMoney;
 } else if(places == 2){
     totalMoney = mainMoney + 2000;
     return totalMoney;
 }else if(places == 3){
      totalMoney = mainMoney + 2000;
     return totalMoney;
  }else{
     totalMoney = mainMoney;
   return totalMoney;
  } 
}
Places();
 function fav(){
    let places = document.getElementById('userfavplace').value;
    let mainMoney = Number(document.getElementById("money").innerText);
   let userElement = document.createElement("p");
   let nodeText = document.createTextNode(places);
    
    userElement.appendChild(nodeText);
    document.getElementById("userAdd").appendChild(userElement);
     let totalMoney;
  if(places == 1){
  
    totalMoney = mainMoney + 2000;
   //document.getElementById("money").innerText = totalMoney;
   return totalMoney;
 } else if(places == 2){
     totalMoney = mainMoney + 2000;
     return totalMoney;
 }else if(places == 3){
      totalMoney = mainMoney + 2000;
     return totalMoney;
  }else{
     totalMoney = mainMoney;
   return totalMoney;
  }
}
fav();
function userFavPlaces(){



let peoplecount1=0;

for(let count=1;count<=9;count++)
{
if(document.getElementById(count).checked == true)
 {   
peoplecount1=document.getElementById(count);
} 
}
peoplecount=peoplecount1.value;
console.log(peoplecount);
sessionStorage.setItem("peoplecount",peoplecount);

     let UserSelect = document.getElementById("selectRooms").value;
       switch(UserSelect){
        case "1" :
          let roomMoney = Number(document.getElementById("roomRent").innerText);
           let fvalue = document.getElementById("money").innerText = FavPlaces();
     
         let finalInput = fvalue + roomMoney;
       document.getElementById("money").innerText = finalInput;
        sessionStorage.setItem('total amount',finalInput);
    break;
      case "2":
          let roomMoney2 = Number(document.getElementById("lRoom").innerText);
           let fvalue2 = document.getElementById("money").innerText = Places();
         let finalInput2 = fvalue2 + roomMoney2;
       document.getElementById("money").innerText = finalInput2;
        sessionStorage.setItem('total amount',finalInput2);
    break;
       case "3":
          let roomMoney3 = Number(document.getElementById("tRoom").innerText);
           let fvalue3 = document.getElementById("money").innerText = fav();
         let finalInput3 = fvalue3 + roomMoney3;
       document.getElementById("money").innerText = finalInput3;
        sessionStorage.setItem('total amount',finalInput3);
   break;
   }

}
userFavPlaces();
