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
      <div class="form-check">
      <input class="form-check-input status" type="checkbox" value="values.title" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">  </label>
    </div></td>
    
    </tr>`;
    });

    // // let statSel=[]
    // function checking()

    // {
    //     // statSel.length=0;
    //     for(c of checkboxes){
    //         // if(c.checked){
    //         //     statSel.push(c.value)
    //         // }
    //         console.log(c.checked)
    //     }
    //     // if(statSel.length>=5){
    //     //     console.log(statSel)
    //     //     alert( `“ Congrats. 5 Tasks have been Successfully Completed ”` )
    //     // }
    // }

    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(error);
  });
let checkboxes = document.querySelector(".status");
checkboxes.addEventListener("submit", (e) => {
  e.preventDefault();
  let stat = [];
  document.querySelectorAll("[type='checkbox']").forEach((item) => {
    if (item.checked === true) {
      stat.push(item.value);
    }
  });
  console.log(stat);
});
