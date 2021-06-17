
function checkMeOut(x){
    var array=[];
  fetch('https://reqres.in/api/users')
  .then(response => {
    if(!response.ok){
      throw Error("Error");
    }
    return response.json();
  })
   .then(data=>{

    console.log(data.data);
    const html=data.data.map(user=>{ 
    var kunal=user;
    var id=kunal.id;
   if(x==id)
   {   
    console.log(kunal);
    var name=kunal.first_name+" "+kunal.last_name;
    var email=kunal.email;
    var pic=kunal.avatar;
  
    array.push(name);
    array.push(email);
    array.push(pic);
    console.log(array);
 return `


<h2 style='text-align:center'>Welcome ${array[0]}</h2>

<div class='card'>
  <img src='${array[2]}'></img>
  <h1>${array[0]} </h1>
  <p class='title'>${array[1]}</p>
  <p><button>Contact</button></p>
</div>
       
`;
  }//end of if block 
    }).join("");
  //  window.location.href="profile.html";
    document.querySelector('#profile-data').insertAdjacentHTML("afterbegin",html);
})
   .catch(error=>{
    console.log(error);
   });
 
   
  }//end of function


function myFunction() {
  var x = document.getElementById("app");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}//end of funtion



function fetchData(){
  fetch('https://reqres.in/api/users')
  .then(response => {
    if(!response.ok){
      throw Error("Error");
    }
    return response.json();
  })
   .then(data=>{

    console.log(data.data);
    const html=data.data.map(user=>{ 
    var kunal=user;
    var x=user.id;
    var fn=user.first_name;
    var ln=user.last_name;
    var email=user.email;
    var image=user.avatar;
      return `
      <button onClick="checkMeOut(this.name);myFunction(); " name="${user.id}" }"
         >
       <div class="grid-container">  
      <div class="user">

         <img src='${user.avatar}'></img>
         <p>${user.first_name} ${user.last_name}</p>
   

      </div>
      </div></button>`;
    }).join("");
    // console.log(html);

    document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
})
   .catch(error=>{
    console.log(error);
   });
  }//end of function

  fetchData(); 


//sorting function by first_name

function myFunction(){
  var x = document.getElementById("app");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}//end of funtion



function sort_by_firstname(){
  var array=[];
  var details=[];
  var first_name_array=[];
  fetch('https://reqres.in/api/users')
  .then(response => {
    if(!response.ok){
      throw Error("Error");
    }
    return response.json();
  })
   .then(data=>{

    console.log(data.data);
    const html=data.data.map(user=>{ 
    var kunal=user;
    var id=kunal.id;
   if(id)
   {   
 
    var name=kunal.first_name;
    array.push(name);

        
    var ln=kunal.last_name;
    var email=kunal.email;
    var pic=kunal.avatar;
    details.push(name);
    details.push(ln);
    details.push(email);
    details.push(pic); 
   } 
  
  array.sort();
   //start from here
    }).join("");
    // console.log(html);
    console.log("full array");
    console.log(array.length+" is the length of array");
    console.log(array);
    console.log(details.length+" is the length of details");
    console.log(details);
  
  for(var i=0;i<array.length;i++)
  { 
    for(var j=0;j<details.length;j++)
    {  
     if(array[i]==details[j])
     {
      //........display details
      first_name_array.push(details[j]);
      first_name_array.push(details[j+1]);
      first_name_array.push(details[j+2]);
      first_name_array.push(details[j+3]);
      console.log("found element : "+details[j]+ " " +details[j+1]+" Email: "+details[j+2]+" pic url: "+details[j+3]);
     }
    } 
  }

    document.querySelector('#first-data').insertAdjacentHTML("afterbegin",html);
    document.getElementById("first-data").innerHTML=first_name_array;
})
   .catch(error=>{
    console.log(error);
   });
}// end of function






function sort_by_lastname(){
  var array=[];
  var details=[];
  var last_name_array=[];
  fetch('https://reqres.in/api/users')
  .then(response => {
    if(!response.ok){
      throw Error("Error");
    }
    return response.json();
  })
   .then(data=>{

    console.log(data.data);
    const html=data.data.map(user=>{ 
    var kunal=user;
    var id=kunal.id;
   if(id)
   {   
 
    var name=kunal.last_name;
    array.push(name);

        
    var fn=kunal.first_name;
    var email=kunal.email;
    var pic=kunal.avatar;
    details.push(fn);
    details.push(name);
    details.push(email);
    details.push(pic); 
   } 
  
  array.sort();
   //start from here
    }).join("");
    // console.log(html);
    console.log("full array");
    console.log(array.length+" is the length of array");
    console.log(array);
    console.log(details.length+" is the length of details");
    console.log(details);
  
  for(var i=0;i<array.length;i++)
  { 
    for(var j=0;j<details.length;j++)
    {  
     if(array[i]==details[j+1])
     {
      //........display details
      last_name_array.push(details[j]);
      last_name_array.push(details[j+1]);
      last_name_array.push(details[j+2]);
      last_name_array.push(details[j+3]);
      console.log("found element : "+details[j]+ " " +details[j+1]+" Email: "+details[j+2]+" pic url: "+details[j+3]);
     }
    } 
  }

    document.querySelector('#first-data').insertAdjacentHTML("afterbegin",html);
    document.getElementById("first-data").innerHTML=last_name_array;
})
   .catch(error=>{
    console.log(error);
   });
}// end of function




