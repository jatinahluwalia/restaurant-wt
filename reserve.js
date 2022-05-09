function myfn() {
    var name = document.getElementById("fname").value;
    var phone = document.getElementById('phn').value;
    var date = document.getElementById('datee').value;
    var persons  = document.getElementById("number").value; 
    var time = document.getElementById("timee").value;
    localStorage.setItem("myname", name);
    localStorage.setItem("myphone", phone);
    localStorage.setItem("mydate", date)
    localStorage.setItem("mypersons", persons);
    localStorage.setItem("mytime", time);
}