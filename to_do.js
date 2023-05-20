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
      
      <input class=" checkbox" type="checkbox" value="values.title" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">  </label>
    </td>
    
    </tr>`;
    });

    
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(error);
  });

  let checkedCount=0;

  const alertPromise= ()=>{
       return new Promise((resolve,reject)=>{
  
           
          if(checkedCount===5){
              resolve(checkedCount)
          }
          else{
              reject('count not equal to 5');
          }
      });
  }
  
  const promiseCall=()=>{
      alertPromise().then((data)=>{
          alert(`Congrats. 5 Tasks have been Successfully Completed`);
      })
      .catch((err)=>{
          console.log('promise rejected');
      })
  }
  






