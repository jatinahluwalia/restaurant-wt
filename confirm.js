document.getElementById("congo").innerText += " " + localStorage.getItem("myname").charAt(0).toUpperCase()+localStorage.getItem("myname").slice(1); 
document.getElementById("details").innerText +=  "Phone: " + localStorage.getItem("myphone")+"\n"; 
document.getElementById("details").innerText +=  "Persons: " + localStorage.getItem("mypersons")+"\n"; 
document.getElementById("details").innerText +=  "Date: " + localStorage.getItem("mydate")+"\n"; 
document.getElementById("details").innerText +=  "Time: " + localStorage.getItem("mytime")+"\n"; 

