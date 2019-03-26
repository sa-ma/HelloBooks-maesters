const validate = () =>{
    const isbn = document.querySelector("#isbn").value;
    var check = /[A-Za-z]+/;
    if(isbn.match(check)){
        document.querySelector(".error").innerHTML= "ISBN number must contain "+ "<b>numbers </b>"+"only";
        return false;
    }
    else{
        if(isbn.length ===13){
            return true;
        }
        else{
            document.querySelector(".error").innerHTML= "ISBN number must contain "+ "<b>13 numbers </b>"+"only";
            return false;
        }
    }
   
};
document.querySelector("#submit").addEventListener("click", validate);