let post = document.querySelector("#post")
let get  = document.querySelector("#get")
let form = document.querySelector('#form1')
let name1 = document.querySelector('#name')
let age = document.querySelector('#age')
let email = document.querySelector('#email')
let table = document.querySelector('#table')

let update = document.querySelector('#update')

var remove = document.querySelectorAll('.remove')


post.addEventListener("click" , e => {
  
    const data = { 
        MYname: name1.value,
        MYage : age.value,
        MYemail: email.value,
    };
    
fetch('http://localhost:3000/myUser', {
  method: 'POST', // or 'PUT'
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data),
})

})



get.addEventListener("click" , 
async function getData() {
    const response = await fetch('http://localhost:3000/myUser');
    const myData = await response.json();
    console.log(myData)
    myData.forEach(user=>{
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.MYname}</td>
        <td>${user.MYage}</td>
        <td>${user.MYemail}</td>
        <td><button onclick="myRemove(this)">delete</button>
            <button onclick="myUpdate(this)">update</button>
        </td>`


        table.append(tr)

    })
}
)  


function myRemove(e){
  let boxId = e.parentElement.parentElement.children[0].innerHTML;
  
     fetch(`http://localhost:3000/myUser/${boxId}`, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'}
      
    })
}

let Form2 = document.querySelector('.myForm2')

var boxId;

function myUpdate (e){

  boxId = e.parentElement.parentElement.children[0].innerHTML;

  let backModal = document.querySelector('.backModal')
  backModal.style.display = "block"
  Form2.style.display = "block"
  
}


function post2(e){
  let name2 = Form2.myname.value;
  let age2 = Form2.age.value;
  let email2 = Form2.email.value;

     const data = { 
          MYname: name2,
          MYage : age2,
          MYemail: email2,
      };
      
    fetch(`http://localhost:3000/myUser/${boxId}`, {
    method: 'PUT', // or 'PUT'
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
    })

}





