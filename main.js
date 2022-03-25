 ara = [];

function submit(params) {

    var s1 = document.getElementById("n1").value;
    var s2 = document.getElementById("n2").value;
    var s3 = document.getElementById("n3").value;
    var s4 = document.getElementById("n4").value;
    ara.push(s1);
    ara.push(s2);
    ara.push(s3);
    ara.push(s4);

    console.log(ara);

    document.getElementById("Neaf").innerHTML = ara;
    document.getElementById("sub").style.display = "none";
    document.getElementById("sor").style.display = "inline-block";

    
};

function sort(params) {
    ara.sort();
    console.log(ara);
    document.getElementById("Neaf").innerHTML = ara;
    
};