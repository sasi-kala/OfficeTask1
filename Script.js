
var row = null;
var empCount = 100;  

function Submit()
{
   
    var n = document.getElementById("name").value;
    var m = document.getElementById("mail").value;
    var s = document.getElementById("salary").value;
    var c = document.getElementById("city").value;

      if (n == "")
     {
        
            document.getElementById("error1").innerHTML = "* UserName Is Required";
            return false ;

        
      }
     
     
    if ( m == "")
    {
         document.getElementById("error2").innerHTML = "* Mail Is Required";
          return false;
    }
    if (!m.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ ))
     {
      document.getElementById("error2").innerHTML = "Provide Valid Mail Address";
         return false;
   }
   
    if ( s == "")
    {
         document.getElementById("error3").innerHTML = "* Salary Is Required";
          return false;
    }
    if ( c == "")
    {
         document.getElementById("error4").innerHTML = "* City Is Required";
          return false;
    }


 {
    var dataEnter = retData();
 var readData = readingDataFromLocalStorage(dataEnter);
 if(row == null)
 {
    insert(readData);
    msg.innerHTML= "Record Inserted";
 }
 else
 {
    update();
    msg.innerHTML= "Record Updated";
 }

 document.getElementById("dataForm").reset();
 }
}




//Create
 //Retrieving Data From Form
function retData()
{
    const name1 = document.getElementById("name").value;
    const code1 = document.getElementById("mail").value;
    const salary1 = document.getElementById("salary").value;
    const city1 = document.getElementById("city").value;

    var arr =[name1,code1,salary1,city1];
    return arr;
}

//Read
//Storing data in Local Storage
function readingDataFromLocalStorage(dataEnter)
{
    var n = localStorage.setItem("Name", dataEnter[0]);
    var m = localStorage.setItem("Mail", dataEnter[1]);
    var s = localStorage.setItem("Salary", dataEnter[2]);
    var ci =localStorage.setItem("City", dataEnter[3]);

    //getting values from local to table

    var n1 = localStorage.getItem("Name", n);
    var m1 = localStorage.getItem("Mail", m);
    var s1 = localStorage.getItem("Salary", s);
    var ci1 = localStorage.getItem("City", ci);

    var arr =[n1,m1,s1,ci1];
    return arr;
}

//Insert
function insert(readData)
{
    var row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerHTML = `EMPCODE  ${empCount ++}`
    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = readData[3];
    cell5.innerHTML = `<a id="edit" onclick=onEdit(this)>Edit</a>
                    <a id="delete" onclick=onDelete(this)>Delete</a>`;
}
//Edit
function onEdit(td)
{
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[1].innerHTML;
    document.getElementById("mail").value = row.cells[2].innerHTML;
    document.getElementById("salary").value = row.cells[3].innerHTML;
    document.getElementById("city").value = row.cells[4].innerHTML;
}
//Update
function update()
{
    row.cells[1].innerHTML = document.getElementById("name").value;
    row.cells[2].innerHTML= document.getElementById("mail").value;
    row.cells[3].innerHTML = document.getElementById("salary").value;
    row.cells[4].innerHTML = document.getElementById("city").value;
    row = null;
    
}

//Reset
function Reset()
{
    document.getElementById("dataForm").reset();
}

//Delete
function onDelete(td)
{    var ans = confirm("Are you Sure Want to Delete This Record ?");
if(ans == true)
{
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    msg.innerHTML= "Record Deleted";
    Reset();

}
}
// function validate()
// {
//     var a = document.getElementById("name").value;

//     if(a == "")
//     {
//         document.getElementById("error").innerHTML = "* UserName Is Required";
//         return false;
//     }
// }




















// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "" || document.getElementById("code").value == "" ) 
//     {
//         isValid = false;

//         document.getElementById("fullNameValidationError").classList.remove("hide");
//         document.getElementById("codeValidationError").classList.remove("hide");
//     } 
//     else
//      {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide") || !document.getElementById("codeValidationError").classList.contains("hide"))

//             document.getElementById("fullNameValidationError").classList.add("hide");
//             document.getElementById("codeValidationError").classList.add("hide");
//     }
//     return isValid;

    
// }


// if(name == '' || code == '' || sal == '' || city == '')
//     {
//         document.getElementById('Ename').innerHTML="* Name Is Required";   

//         document.getElementById('Ecode').innerHTML="* Code Is Required";

//         document.getElementById('Esal').innerHTML="* Salary Is Required";

//         document.getElementById('Ecity').innerHTML="* City Is Required";
//     }