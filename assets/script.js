/*
    //
    // @author: Michal Hromek
    //
*/

/*
    //
    // VALIDATE IF INPUT IS NOT EMPTY
    //
*/
var inputs = $("input:not(:checkbox):not(:radio):not(:submit)");

$(inputs).on("change", function() {
    var val = $(this).val();

    if(val != "") {
        $(this).addClass("filled");
    } else {
        $(this).removeClass("filled");
    }
});

/*
    //
    // REQUIRED INPUTS LABELS CONTROL
    //
*/
$(".c-formElement").each(function() {
    if($(this).find("input").attr("required") != undefined) {
        $(this).find("label[for]").addClass("required");
    }
})

/*
    //
    // INPUTS HINT CONTROL
    //
*/
$(".c-formElement").each(function() {
    if($(this).attr("data-hint") != undefined) {

        var hintMess = $(this).attr("data-hint");

        var hintBox = "<div class='hintBox'><span class='hintIcon'><i class='fa fa-info-circle' aria-hidden='true'></i> </span> <span class='hintFlash'>" + hintMess + "</span></div>";

        $(this).append(hintBox);
    }
});

/*
    //
    // TEXT ON CHANGE CONTROL
    //
*/
$("input[type='text']").on("blur", function() {

    /* Check if input is not empty */
    if($(this).attr("required") != undefined && $(this).val() == "") {

        if($(this).attr("data-error") != undefined) {
            /* Show Error message */
            var errorText = $(this).attr("data-error");
            var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
            $(this).closest(".c-formElement").append(errorMess);
        }

        /* Select Error form */
        $(this).closest(".c-formElement").removeClass("possitive");
        $(this).closest(".c-formElement").addClass("error");

    } else if($(this).attr("required") == undefined && $(this).val() == "") {

    }  else {
        /* Remove error message */
        $(this).closest(".c-formElement").find(".c-errorMessage").remove();

        /* Remove error class */
        $(this).closest(".c-formElement").removeClass("error");
        $(this).closest(".c-formElement").addClass("possitive");
    }
    
}); /* end of input text change validation */

/*
    //
    // MAIL ON CHANGE CONTROL
    //
*/
$("input[type='email']").on("blur", function() {
    var value = $(this).val();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        
        /* Remove error message */
        $(this).closest(".c-formElement").find(".c-errorMessage").remove();

        /* Remove error class */
        $(this).closest(".c-formElement").removeClass("error");
        $(this).closest(".c-formElement").addClass("possitive");
        
        return true;
    } else {
        /* Show Error message */
        if($(this).attr("data-email") != undefined) {
            var errorText = $(this).attr("data-email");
            var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
            $(this).closest(".c-formElement").append(errorMess);
        } else if($(this).attr("data-error") != undefined) {
            var errorText = $(this).attr("data-error");
            var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
            $(this).closest(".c-formElement").append(errorMess);
        }              
        
        /* Select Error form */
        $(this).closest(".c-formElement").removeClass("possitive");
        $(this).closest(".c-formElement").addClass("error");
    }
    
}); /* end of input email change validation */


/*
    //
    // PNOHE ON CHANGE CONTROL
    //
*/
$("input[type='tel']").on("blur", function() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

    if($(this).val().match(phoneno)) {
        /* Remove error message */
        $(this).closest(".c-formElement").find(".c-errorMessage").remove();

        $(this).closest(".c-formElement").removeClass("error");
        $(this).closest(".c-formElement").addClass("possitive");

        return true;
    } else {

        if($(this).attr("data-format") != undefined) {
            /* Show Error message */
            var errorText = $(this).attr("data-format");
            var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
            $(this).closest(".c-formElement").append(errorMess);
        }

        /* Select Error form */
        $(this).closest(".c-formElement").removeClass("possitive");
        $(this).closest(".c-formElement").addClass("error");
    }
    
}); /* end of input tel change validation */

/*
    //
    //  DATE ON CHANGE CONTROL
    //
*/
$("input[type='date']").on("blur", function() {

    if($(this).attr("required") != undefined && $(this).val() == "") {

        if($(this).attr("data-error") != undefined) {
            /* Show Error message */
            var errorText = $(this).attr("data-error");
            var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
            $(this).closest(".c-formElement").append(errorMess);
        }

        /* Select Error form */
        $(this).closest(".c-formElement").addClass("error");

    } else if($(this).attr("required") == undefined) {
        
        return true;

    } else if($(this).attr("required") != undefined && $(this).val() != "") {
        /* Remove error message */
        $(this).closest(".c-formElement").find(".c-errorMessage").remove();

        $(this).closest(".c-formElement").removeClass("error");
        $(this).closest(".c-formElement").addClass("possitive");
    }

}); /* end of input date change validation */

/*
    //
    // CHECKBOX ON CHANGE CONTROL
    //
*/
$("input[type='checkbox']").on("click", function() {
    
    if($(this).attr("required") != undefined) {

        /* If checkbox is NOT checked */
        if(!$(this).is(":checked")) {
            if($(this).attr("data-error") != undefined) {
                /* Show Error message */
                var errorText = $(this).attr("data-error");
                var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                $(this).closest(".c-formElement").append(errorMess);
            }

            /* Select Error form */
            $(this).closest(".c-formElement").addClass("error");
        } else {
            /* Remove error message */
            $(this).closest(".c-formElement").find(".c-errorMessage").remove();

            $(this).closest(".c-formElement").removeClass("error");
        }

    } /* end of checkbox validation */

});


/*
    //
    // SUBMIT FORM VALIDATION
    //
*/
$(".o-q2form").find(".j-submitForm").on("click", function(e) {
    e.preventDefault();

    /* TEXT INPUTS validation */
    $(".o-q2form").find("input:not(:checkbox):not(:radio):not(:submit)").each(function() {
        
        /* Check if input is not empty */
        if($(this).attr("required") != undefined && $(this).val() == "") {

            if($(this).attr("data-error") != undefined) {
                /* Show Error message */
                var errorText = $(this).attr("data-error");
                var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                $(this).closest(".c-formElement").append(errorMess);
            }

            /* Select Error form */
            $(this).closest(".c-formElement").removeClass("possitive");
            $(this).closest(".c-formElement").addClass("error");

        } else if($(this).attr("required") == undefined && $(this).val() == "") {

        } else {
            /* Remove error message */
            $(this).closest(".c-formElement").find(".c-errorMessage").remove();

            /* Remove error class */
            $(this).closest(".c-formElement").removeClass("error");
            $(this).closest(".c-formElement").addClass("possitive");

        } /* end of text inputs validation */
        /* ---------------------------------- */

        /* Email ipnut validation */
        if($(this).attr("required") != undefined && $(this).attr("type") == "email") {
            var value = $(this).val();

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                
                /* Remove error message */
                $(this).closest(".c-formElement").find(".c-errorMessage").remove();

                /* Remove error class */
                $(this).closest(".c-formElement").removeClass("error");
                $(this).closest(".c-formElement").addClass("possitive");

                return true;
            } else {
                /* Show Error message */
                if($(this).attr("data-email") != undefined) {
                    var errorText = $(this).attr("data-email");
                    var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                    $(this).closest(".c-formElement").append(errorMess);
                } else if($(this).attr("data-error") != undefined) {
                    var errorText = $(this).attr("data-error");
                    var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                    $(this).closest(".c-formElement").append(errorMess);
                }              
                
                /* Select Error form */
                $(this).closest(".c-formElement").removeClass("possitive");
                $(this).closest(".c-formElement").addClass("error");
            }
           
        } /* end of input email validation */
        /* ---------------------------------- */

        /* PHONE TEL ipnut validation */
        if($(this).attr("required") != undefined && $(this).attr("type") == "tel") {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

            if($(this).val().match(phoneno)) {
                /* Remove error message */
                $(this).closest(".c-formElement").find(".c-errorMessage").remove();

                $(this).closest(".c-formElement").removeClass("error");
                $(this).closest(".c-formElement").addClass("possitive");

                return true;
            } else {

                if($(this).attr("data-format") != undefined) {
                    /* Show Error message */
                    var errorText = $(this).attr("data-format");
                    var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                    $(this).closest(".c-formElement").append(errorMess);
                }

                /* Select Error form */
                $(this).closest(".c-formElement").removeClass("possitive");
                $(this).closest(".c-formElement").addClass("error");
            }
           
        } /* end of input phone validation */
        /* ---------------------------------- */

        /* DATE ipnut validation */
        if($(this).attr("required") != undefined && $(this).attr("type") == "date") {

            if($(this).val() == "") {

                if($(this).attr("data-error") != undefined) {
                    /* Show Error message */
                    var errorText = $(this).attr("data-error");
                    var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                    $(this).closest(".c-formElement").append(errorMess);
                }

                /* Select Error form */
                $(this).closest(".c-formElement").addClass("error");
                $(this).closest(".c-formElement").removeClass("possitive");
            } else {
                /* Remove error message */
                $(this).closest(".c-formElement").find(".c-errorMessage").remove();

                $(this).closest(".c-formElement").removeClass("error");
                $(this).closest(".c-formElement").addClass("possitive");
            }

        } /* end of input date validation */
        /* ---------------------------------- */

    }); /* end of normal inputs */

    /* CHECK  validation */
    /* Checkbox validation */
    $(".o-q2form").find("input[type='checkbox']").each(function() {

        if($(this).attr("required") != undefined) {

            /* If checkbox is NOT checked */
            if(!$(this).is(":checked")) {
                if($(this).attr("data-error") != undefined) {
                    /* Show Error message */
                    var errorText = $(this).attr("data-error");
                    var errorMess = "<span class='c-errorMessage'>" + errorText + "</span>";
                    $(this).closest(".c-formElement").append(errorMess);
                }

                /* Select Error form */
                $(this).closest(".c-formElement").addClass("error");
            } else {
                /* Remove error message */
                $(this).closest(".c-formElement").find(".c-errorMessage").remove();

                $(this).closest(".c-formElement").removeClass("error");
            }
    
        } /* end of checkbox validation */

    }); /* end of checkboxes foreach */
    /* ---------------------------------- */

    var formErrors = 0;

    /* Control all inputs if there is all good */
    $(this).closest(".o-q2form").find(".c-formElement").each(function() {
        if($(this).hasClass("error")) {
            formErrors++;
        }
    })

    if(formErrors == 0) {
        $(this).closest(".o-q2form").submit()
    } 

}); /* end of form submit validation process */

