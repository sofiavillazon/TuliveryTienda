/*----Tulivery Express Business - TEMPLATE*/
/*-------------------------------------------------------*/
/*1.- Modal ......................................*/
/*2.- Accordion ..................................*/
/*3.- Sidebar Mobile .............................*/
/*4.- otros .............................*/


/*==================================================*/
/*1.-modal..........................................*/
/*==================================================*/

    // Dirección de entrega check
    $('.closeNewAdress').on('click', function(){
        $('#modalEntrega').removeClass('withAdressForm')
    });

    $('.addNewAdress').on('click', function(){
        $('#modalEntrega').addClass('withAdressForm')
    });

    $('.initAddress').on('click', function(){
        $('#modalEntrega').removeClass('withAdressForm')
    });

    // Dirección de entrega check
    $('.modal-body .adress').on('click', function(){
        if( $(this).hasClass('active') ){
            event.preventDefault();
        }else{
            $(this).toggleClass('active').siblings().removeClass('active');
        }
    });

    // turno check - modal
    $('.modal-body .turno').on('click', function(){
        if( $(this).hasClass('conData') ){
            $(this).removeClass('conData');
            $(this).addClass('conData');
            $(this).siblings().addClass('sinData');
        }
        if( $(this).hasClass('sinData') ){
            $(this).removeClass('sinData');
            $(this).addClass('conData');
            $(this).siblings().removeClass('sinData');
            $(this).siblings().removeClass('conData');
            $(this).siblings().addClass('sinData');
        }
    });

    // fecha check - Modal
    $('.modal-body .fecha').on('click', function(){
        if( $(this).hasClass('active') ){
            event.preventDefault();
        }else{
            $(this).toggleClass('active').siblings().removeClass('active');
        }
    });


/*==================================================*/
/*2.-Accordion (no use)......................................*/
/*==================================================*/

    var accordionsClose = document.querySelectorAll('.accordion-content');
    for (var i = 0; i < accordionsClose.length; i++) {
        accordionsClose[i].classList.add('active');
    }
    
    document.addEventListener('click', function (event) {
        //Bail if our clicked element doesn't have the class
        if (!event.target.classList.contains('accordion-toggle')) return;
        
        // Get the target content
        var content = document.querySelector(event.target.hash);
        if (!content) return;
        
        // Prevent default link behavior
        event.preventDefault();
        
        // If the content is already expanded, collapse it and quit
        if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
        }

        // Toggle our content
        content.classList.toggle('active');
    })

/*==================================================*/
/*3.-Sidebar Mobile.................................*/
/*==================================================*/

    // HANDLER MOBILE
    $('.handlerSide2').on('click', function(){
        $('.sidebar').toggleClass('ocultomov').siblings().removeClass('ocultomov');
    });

/*==================================================*/
/*4.-otros.................................*/
/*==================================================*/

// $("#password1").modal("show");

function showpassword2() {
    $("#password1").removeClass("fade").modal("hide");
    $("#password2").modal("show").addClass("fade");
}
function showpassword3() {
    $("#password2").removeClass("fade").modal("hide");
    $("#password3").modal("show").addClass("fade");
}

function showpassword4() {
    $("#password3").removeClass("fade").modal("hide");
    $("#password4").modal("show").addClass("fade");
}

$("#password-ok").on("click", function() {
    event.preventDefault();
    showpassword2();
});

$("#verify-ok").on("click", function() {
    event.preventDefault();
    showpassword3();
});
$("#new-ok").on("click", function() {
    event.preventDefault();
    showpassword4();
});
$("#closeMessage-ok").on("click", function() {
    event.preventDefault();
    $("#password4").removeClass("fade").modal("hide");
});


  
// Sticky cart
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var overBlack = document.getElementById("overBlack");

var toScroll = $(document).height() - 980;
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset < 100) {
        header.classList.remove("sticky");
        header.classList.remove("stickyFoot");
    }
    else{
        if (window.pageYOffset > toScroll) {
            header.classList.remove("sticky");
            header.classList.add("stickyFoot");
        } else {
            header.classList.add("sticky");
            header.classList.remove("stickyFoot");
            $("#scrollerSection").css("max-height","221px");
        }
    }
}

