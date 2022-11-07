document.getElementById("addBtn").addEventListener("click", () => {
    alert("Product Number: " + document.getElementById("product").value + "\n" +
    "Quantity in Stock: " + document.getElementById("qty").value + "\n" + 
    "Name: " + document.getElementById("name").value + "\n" + 
    "Supplier: " + document.getElementById("supplier").value + "\n" + 
    "Unit Price: " + document.getElementById("price").value + "\n" + 
    "Date supplied: " + document.getElementById("date").value);
});