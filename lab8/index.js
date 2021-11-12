
window.onload = function () {
document.getElementById('btn').addEventListener('click',  getEmployeeList);
const input = document.getElementById('num');
const numEntered= input.value;
console.log(numEntered);

function getEmployeeList(data) {
    let employees = data.results;
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = "";
    let html = "";
   
        for (let i = 0; i < employees.length; i++) {
            
            html+= `
                    <p> <b>${employees[i].name.first}  ${employees[i].name.last} </b></p>
                    <p> ${employees[i].location.street.number} ${employees[i].location.street.name} </p>
                    <p> ${employees[i].location.city} ${employees[i].location.state}  ${employees[i].location.country} ${data.results[i].location.postcode}</p>
                     <hr>
                `
           
            }
    mainContent.innerHTML = html;
      
}

const lists = rxjs.from(fetch('https://randomuser.me/api/?results=' + numEntered)
                        .then(response =>response.json()));

  lists.subscribe( data =>getEmployeeList(data));  

}
