
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
<link rel="stylesheet" type="text/css" href="style.css">
<style> 
#ref {
    background-color: aquamarine;
    text-align: center;
    padding: 2px;
    margin-left: 15px;
    border-radius: 3px
}
#final{
    padding:10px;
}

</style>
</head>
<body>
    <h4 class="text-center ">Employee List</h4>
     <div id ="final"></div>
     <input type="button" name="Referesh" value="Refresh" id="ref">
   
   
  <script> 
 document.getElementById('ref').addEventListener('click', build);


 function build () {
    let request = fetch ('https://randomuser.me/api/?results=5');
    request.then(function(response) {
        return response.json();
        })
        .then(function(data){
            let div = document.getElementById('final');
            div.innerHTML = "";
            let html = '';
            let employees = data.results;
            employees.forEach(function(employee){ 
                html += `
                        <div calss= "col-4" id ="final"> 
                            <img src="${employee.picture.thumbnail}" style="float:left"> 
                        </div> 
                        <div class = "col-8 text -end" >
                            <p> <strong> ${employee.name.first} ${employee.name.first}</strong> </span><br>
                            <p> phone: ${employee.phone} </p>
                            <p> ${employee.email} </p>

                        </div> 
                        <hr>
                `
                    })

             div.innerHTML = html; 
           
        });

}
</script>
</body>
</html>
