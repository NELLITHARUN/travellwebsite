let total=sessionStorage.getItem('total amount');
total1.innerHTML=`${total}`; 
total2.innerHTML=`${total}`; 
totalmembers=Number( sessionStorage.getItem('peoplecount'));
quantity.innerHTML=`${totalmembers}`;
let totalamount1= totalmembers*total;

totalamount.innerHTML=`${totalamount1}`;

let tourcode1=sessionStorage.getItem('tourcode');


let memberno1=1;
 let start=0;
memberno.innerHTML=`${memberno1}`;
let bookingId= Number(localStorage.getItem("bookingId"));
function storage()
{
let name=document.getElementById("name");
let email=document.getElementById("email");
let phno=document.getElementById("phno");
let age=document.getElementById("age");
let gender=document.getElementById("gender");
let details=document.getElementById("details"); 
let bookstatus=document.getElementById("bookstatus"); 


 
let name1=name.value;
let email1=email.value;
let phno1=phno.value;
let age1=age.value;
let gender1=gender.value;
let bookstatus1=bookstatus.value


let user_records=[];
user_records=JSON.parse(localStorage.getItem(bookingId))?JSON.parse(localStorage.getItem(bookingId)):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "name":name1,
  "email":email1,
  "phonenumber":phno1,
  "age":age1,
  "gender":gender1,
  "tourcode":tourcode1,
  "bookstatus":bookstatus1
})
localStorage.setItem(bookingId,JSON.stringify(user_records));
}

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("phno").value="";
document.getElementById("age").value="";
document.getElementById("gender").value="";
document.getElementById("bookstatus").value="";


memberno1+=1;	
memberno.innerHTML=`${memberno1}`;
console.log(memberno1);
start+=1;


if(start==totalmembers)

     { 
         alert("your booking was sucessful completed with booking id : "+bookingId);
        window.location.href = "file:///home/tharun/Desktop/website/brama%20files/travelsb%20.html";
        bookingId1=bookingId;
        bookingId1+=1;
        localStorage.setItem("bookingId",bookingId1);
      }
}      



function showData()
{
document.getElementById("showUsers").innerHTML="";
let user_records=[]
user_records=JSON.parse(localStorage.getItem(bookingId))?JSON.parse(localStorage.getItem(bookingId)):[]

   if(user_records)
  {
for(let i=0;i<user_records.length;i++)
{
let addDiv=document.createElement('div');
  addDiv.className="row";
    addDiv.innerHTML='<div class="col-sm-2" style="padding: 12px 2px;">'+user_records[i].name+'</div><div class="col-sm-2" style="padding: 12px 2px;">'+user_records[i].phonenumber+'</div><div class="col-sm-2" style="padding: 12px 30px ;">'+user_records[i].age+'</div> <div class="col-sm-2" style="padding: 12px 0px 0px 10px;">'+user_records[i].gender+'</div><div class="col-sm-2" style="padding: 12px;">'+user_records[i].tourcode+'</div>';
 document.getElementById("showUsers").appendChild(addDiv);
      }
  }
  }



