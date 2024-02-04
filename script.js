 function validate(){
    const username="farheen";
    const password=1234;
    const nameElm=document.getElementById("name");
    const passElm=document.getElementById("password");
    // const submitElm=document.getElementById("submit");
    console.log(passElm.value);
        if(username===nameElm.value && password==passElm.value){
document.getElementById("login").innerHTML="<h1> login successfull</h1>";
            // alert("login successfull");
        }
        else{
            document.getElementById("login").innerHTML="<h1> wrong credentials</h1>";

            // alert("wrong credentials");
        }

    

}
// document.getElementById("submit").addEventListener('click',validate());