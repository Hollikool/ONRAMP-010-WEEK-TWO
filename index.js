const myName = document.getElementById('name');
const myEmail = document.getElementById('email');

const myMonth = document.getElementById('month');
const myDay = document.getElementById('day');
const myYear = document.getElementById('year');

const myHour = document.getElementById('hour');
const myMinute = document.getElementById('minute');

const minus = document.getElementById('icon-minus');
const plus = document.getElementById('icon-plus');
let customer = document.getElementById('customer');
const submit = document.getElementById('submit');

let count = 1;

plus.onclick = function(){
    
    let myCustomer = customer.textContent;

    if(myCustomer === "1 person"){
        //alert('Item expected!');
        count++;
        customer.textContent = count + " people";        
    }else if(myCustomer !== "1 person"){
        count++;
        customer.textContent = count + " people";
    }else{        
        alert('You must make reservation for at least 1 person!');
    }
    return false;
}


minus.onclick = function(){
    
    let myCustomer = customer.textContent;
    
    if(count > 2){
        count--;
        customer.textContent =  count + " people";
    }else if(count === 2){
        count--;
        customer.textContent = count + " person";
    }else if(count === 1){
        customer.textContent = customer.textContent;
    }else{
        count--;
        customer.textContent = count + " people";
    }
    return false;
}

submit.onclick = function(){
    myName.innerHTML = myName;
    if(myName === ""){
        alert("Name expected!");
    }else if(myEmail === ""){
        alert("Email expected!");
    }else if(myMonth === ""){
        alert("Month expected!");
    }else if(myDay === ""){
        alert("Day expected!");
    }else if(myYear === ""){
        alert("Year expected!");
    }else{
    swal({
        title: "Great",
        text: "You have booked your reservation!",
        icon: "success",        
      });
    return false;
}
}

/* const list = document.querySelector('ul');
const nameField = document.querySelector('input'); */
/* const emailField = document.querySelector('input');
const monthField = document.querySelector('input');
const dayField = document.querySelector('input');
const yearField = document.querySelector('input'); */

/* button.onclick = function(){
    let nameValue = nameField.value;
    nameField.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');

    list.appendChild(listItem);
    listItem.appendChild(listText);
    listText.textContent = nameValue;

    nameField.focus()
} 

plus.onclick = function(){
    
    let myCustomer = customer.textContent;
    if(myCustomer === ""){
        alert('Item expected!');
        //myCustomer = "1 person";
    }
    //plus.focus();
}
*/