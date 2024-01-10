let username = document.getElementById("username");
        let password = document.getElementById("password");
        let flag = 1;

        function valadateform(){
            if(username.value == "" ){
                document.getElementById("userError").innerHTML = "User name is empty";
                flag = 0;
            }
            else if (username.value.length < 3){
                document.getElementById("userError").innerHTML = "user name is requred minime 3 char";
                flag = 1;
            }
            else{
                document.getElementById("userError").innerHTML = "";
                flag = 1;
            }
            if(password.value ==""){
                document.getElementById("passwordError").innerHTML = "password is empty";
                flag = 0;
            }else{
                document.getElementById("passwordError").innerHTML = "";
                flag = 1;
            }
            if(flag){
                return true;
            }else{
                return false;
            }
        };