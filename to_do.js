fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
      tableData += `<tr>
      <td>${values.id}</td>  
      <td>${values.title}</td>
      <td>
      
      <input class=" checkbox" type="checkbox" onclick=checkboxcount() id="check">
      <label class="form-check-label" for="flexCheckDefault">  </label>
    </td>
    
    </tr>`;
    });

    
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(error);
  });

  function checkboxcount(){
    let checked= document.querySelectorAll('input[id="check"]:checked').length;
    count(checked);
}

function count(val){
    let nwprom = new Promise(function(resolve,reject){
        if (val==5){
            resolve(val);
        }
        else{
            reject(val);
        }
    });
    nwprom.then(
        function(value){
            alert("Congrats.. 5 Tasks have been Successfully Completed");

        },
        function(error){
            console.log(error+"Tasks not completed");
        }
    );
}






