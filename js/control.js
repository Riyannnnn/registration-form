var map = new Map();
result = () =>{
    address = window.location.search
    parameter = new URLSearchParams(address)
    
    parameter.forEach((value,key)=>{
        map.set(key,value);
        console.log(value);
        document.write(key);
        document.write(":");
        document.write(value);
        document.write("<br>");
    })

    return map;

}
console.log(result());

setTimeout("window.close()",5000)
