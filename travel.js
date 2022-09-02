
function showData()
{


let userid= document.getElementById("userid");
userdata1=userid.value;
console.log (userdata1);


document.getElementById("showUsers").innerHTML="";
let user_records=[]
user_records=JSON.parse(localStorage.getItem(userdata1))?JSON.parse(localStorage.getItem(userdata1)):[]

for(let i=0;i<user_records.length;i++)
{
let addDiv=document.createElement('div');
  addDiv.className="row";
    addDiv.innerHTML='<div class="col-sm-2" style="padding: 12px 2px;">'+user_records[i].name+'</div><div class="col-sm-2" style="padding: 12px  ;">'+user_records[i].phonenumber+'</div> <div class="col-sm-2" style="padding: 12px ;">'+user_records[i].age+'</div><div class="col-sm-2" style="padding: 12px;" id="bstatus">'+user_records[i].bookstatus+'</div> <div class="col-sm-2" style="padding: 12px 2px;">'+user_records[i].tourcode+'</div> ';
 document.getElementById("showUsers").appendChild(addDiv);
  
  }
  }







