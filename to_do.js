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
      <td>${values.completed}</td>
    
    </tr>`;
    });

    document.getElementById("table_body").innerHTML=tableData;
  })
  .catch((err)=>{
    console.log(error)
  })
