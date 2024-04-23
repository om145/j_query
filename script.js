// ! alert
$(document).ready(function () {
  $(".alert").click(function () {
    alert("Habibi Come To Dubai");
  });
});

// append
$(document).ready(function(){
    $(".append").mouseenter(function(){
        $(this).append("Come To Dubai")
    })
})

// bg color
$(document).ready(function(){
    $(".a1").click(3000 , function(){
        $(this).css("background-color","red")
    })
})


//  hide
$(document).ready(function () {
  $("p").click(function () {
    $(this).hide(3000);
  });
});

// fadeout
$(document).ready(function(){
    $("#b1").click(function(){
        $(this).fadeOut(5000).fadeIn(4000)
    })
})

// ! Animation
// animate

$(document).ready(function(){
    $(".d1").click(function(){
        $(this).animate({
            left: "+=50px",
            height : "+=50px",
            width : "+=50px",
            fontSize : "+=10px"
        })
    })
})

// start and stop

$(document).ready(function(){
    $(".stop").click(function(){
        $(".d1").stop()
    })
})

$(document).ready(function(){
    $(".start").click(function(){
        $(".d1").toggle(2000)
    })
})


// Slide out

$(document).ready(function(){
    $(".c1").click(function(){
        $(".d1").slideToggle()
    })
})

// fade out - fade in

$(document).ready(function(){
    $(".c2").click(function(){
        $(".d1").toggle(2000)
    })
})

// ! validate

$(document).ready(function(){
    $(".name").blur(function(){
        let uName = $(".name").val();
        console.log(uName);
        if(uName == ""){
            $(".vName").show()
        }
        // else(
        //     $(".vName").hide()
        // )
    })
})

$(document).ready(function(){
    $(".email").blur(function(){
        let uEmail = $(".email").val()
        console.log(uEmail);
        if(uEmail == ""){
            $(".vEmail").show()
        }
        // else(
        //     $(".uEmail").hide()
        // )
    })
})

$(document).ready(function(){
    $(".password").blur(function(){
        let uPassword = $(".password").val();
        if(uPassword == ""){
            $(".vPassword").show()
        }
        // else(
        //     $(".vPassword").hide()
        // )
    })
})

// submit

$(document).ready(function(){
    $(".submit").click(function(){
        let uName = $(".name").val();
        let uEmail = $(".email").val()
        let uPassword = $(".password").val();

 
        if(uName == "" || uEmail == "" || uPassword == ""){
            alert("Enter Details")
        } 
        else(
        alert("Registration Success full")
        )

    })
})