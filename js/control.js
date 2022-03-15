
var map = new Map();
result = () =>{
    address = window.location.search
    parameter = new URLSearchParams(address)
    
    parameter.forEach((value,key)=>{
        map.set(key,value);
        console.log(value);
        document.write(key +":" +value + "<br>");   
        // document.write(":"); 
        // document.write(value);
        // document.write("<br>");
    })

    return map;

}
console.log(result());

// if(document.getElementById("fnmae").value.length == 0){
//     const button = document.getElementsByClassName("submit");
//     button.disabled = true;
//     alert("Please enter the fields");
// }



setTimeout("window.close()",5000)
