$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required: true,
                minlength:4
            },
            emilAddress:{
                required: true,
                email:true,
                Number:true

            },
            password:{
                minlength:4
            },
            day:{
                required:true
            },
            birth:{
                required:true 
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter name Mwonu"
            
            }
        }
        
    })
})