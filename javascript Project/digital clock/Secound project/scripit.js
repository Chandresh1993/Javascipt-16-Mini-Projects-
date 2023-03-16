var selectedRow= null;
function onFormSubmit(){


}
// Retrieve the data
function readFormData(){
    var formData={};
    formData["productCode"]= document.getElementById("productCode").value;
    formData["product"]= document.getElementById("product").value;
    formData["qty"]= document.getElementById("qty").value;
    formData["perPrice"]= document.getElementById("perPrice").value;
    return formData;
}

// insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementById('tbody')[0];
    var newRow=table.insertRow(table.length);
}