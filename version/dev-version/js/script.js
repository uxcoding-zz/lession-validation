// var validatemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// var phonevalidate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

var loginNameVariable = true;
var loginEmailVariable = true;
var loginMobileVariable = true;
var loginPasswordVariable = true;
var loginConfirmPasswordVariable = true;
// var loginRadioVariable = true;
var loginSelectVariable = true;

$('#login_name_message').hide();
$('#login_email_message').hide();
$('#login_mobile_message').hide();
$('#login_password_message').hide();
$('#login_confirm_password_message').hide();
$('#login_radio_message').hide();
$('#login-checkbox_message').hide();
$('#login-select_message').hide();

$('#login_name').focusout(function () {
    loginNameValidation();
});

$('#login_email').focusout(function () {
    loginEmailValidation();
});

$('#login_mobile').focusout(function () {
    loginMobileValidation();
});

$('#login_password').focusout(function () {
    loginPasswordValidation();
});

$('#login_confirm_password').focusout(function () {
    loginConfirmPasswordValidation();
});

$("input[type='radio'][name='input-radio']").change(function () {
    loginRadioValidation();
});

$("input[type='checkbox'][name='input-checkbox']").change(function () {
    loginCheckboxValidation();
})

$('#login_select').focusout(function () {
    loginSelectValidation();
});

function loginNameValidation() {
    var loginNameval = $('#login_name').val();
    var loginNameExp = /^[A-za-z]+$/;
    if (loginNameval.length == '') {
        $('#login_name_message').show();
        $('#login_name_message').html('This field is required.');
        $('#login_name_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_name').css('border', '1px solid rgba(255,0,0, .25)');
        loginNameVariable = false;
        return false;
    } else if (loginNameval.length <= 2) {
        $('#login_name_message').show();
        $('#login_name_message').html('Name must be three letter.');
        $('#login_name_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_name').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else if (loginNameval.length >= 21) {
        $('#login_name_message').show();
        $('#login_name_message').html('Name must be under twenty letter.');
        $('#login_name_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_name').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else if (!isNaN(loginNameval)) {
        $('#login_name_message').show();
        $('#login_name_message').html('Numbers are not allowed.');
        $('#login_name_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_name').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else {
        $('#login_name_message').hide();
        $('#login_name').css('border', '1px solid #ced4da');
    }
    if (loginNameval.match(loginNameExp))
        true;
    else {
        $('#login_name_message').show();
        $('#login_name_message').html('Only alphabets are allowed.');
        $('#login_name_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_name').css('border', '1px solid rgba(255,0,0, .25)');
    }
}

function loginEmailValidation() {
    var loginEmailVal = $('#login_email').val();
    if (loginEmailVal == '') {
        $('#login_email_message').show();
        $('#login_email_message').html('This field is required.');
        $('#login_email_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_email').css('border', '1px solid rgba(255,0,0, .25)');
        loginEmailVariable = false;
        return false;
    } else if (loginEmailVal.indexOf('@') <= 0) {
        $('#login_email_message').show();
        $('#login_email_message').html('@ does not exit at index position.');
        $('#login_email_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_email').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else if ((loginEmailVal.charAt(loginEmailVal.length - 3) != '.') && (loginEmailVal.charAt(loginEmailVal.length - 4) != '.')) {
        $('#login_email_message').show();
        $('#login_email_message').html('Please fill correct email address.');
        $('#login_email_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_email').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else {
        $('#login_email_message').hide();
        $('#login_email').css('border', '1px solid #ced4da');
    }
}

function loginMobileValidation() {
    var loginMobileVal = $('#login_mobile').val();
    var loginMobileExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (loginMobileVal == '') {
        $('#login_mobile_message').show();
        $('#login_mobile_message').html('This field is required.');
        $('#login_mobile_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_mobile').css('border', '1px solid rgba(255,0,0, .25)');
        loginMobileVariable = false;
        return false;
    } else if ((loginMobileVal.length < 10) && (loginMobileVal.length != 10) || (loginMobileVal.length > 10)) {
        $('#login_mobile_message').show();
        $('#login_mobile_message').html('Please enter 10 digts mobile number.');
        $('#login_mobile_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_mobile').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else if (isNaN(loginMobileVal)) {
        $('#login_mobile_message').show();
        $('#login_mobile_message').html('Only numaric digts are allowed.');
        $('#login_mobile_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_mobile').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else if (loginMobileExp.test(loginMobileVal) == false) {
        $('#login_mobile_message').show();
        $('#login_mobile_message').html('Please enter valid mobile number.');
        $('#login_mobile_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_mobile').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else {
        $('#login_mobile_message').hide();
        $('#login_mobile').css('border', '1px solid #ced4da');
    }
}

function loginPasswordValidation() {
    var loginPasswordval = $('#login_password').val();

    if (loginPasswordval.length == '') {
        $('#login_password_message').show();
        $('#login_password_message').html('This field is required.');
        $('#login_password_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_password').css('border', '1px solid rgba(255,0,0, .25)');
        loginPasswordVariable = false;
        return false;
    } else if (loginPasswordval.length <= 5) {
        $('#login_password_message').show();
        $('#login_password_message').html('Password must be six letter.');
        $('#login_password_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_password').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else if (loginPasswordval.length >= 21) {
        $('#login_password_message').show();
        $('#login_password_message').html('Password can not be exceed twenty letter.');
        $('#login_password_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_password').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else {
        $('#login_password_message').hide();
        $('#login_password').css('border', '1px solid #ced4da');
    }
}

function loginConfirmPasswordValidation() {
    var loginPasswordval = $('#login_password').val();
    var loginConfirmPasswordval = $('#login_confirm_password').val();
    if (loginConfirmPasswordval == '') {
        $('#login_confirm_password_message').show();
        $('#login_confirm_password_message').html('This field is required.');
        $('#login_confirm_password_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_confirm_password').css('border', '1px solid rgba(255,0,0, .25)');
        loginConfirmPasswordVariable = false;
        return false;
    } else if (loginPasswordval != loginConfirmPasswordval) {
        $('#login_confirm_password_message').show();
        $('#login_confirm_password_message').html('Password does not match.');
        $('#login_confirm_password_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_confirm_password').css('border', '1px solid rgba(255,0,0, .25)');
        return false;
    } else {
        $('#login_confirm_password_message').hide();
        $('#login_confirm_password').css('border', '1px solid #ced4da');
    }
}

function loginRadioValidation() {
    var loginRadioVal = $("input[type='radio'][name='input-radio']");
    for (var index = 0; index < loginRadioVal.length; index++) {
        if (loginRadioVal[index].checked == true) {
            $('#login_radio_message').hide();
            return true;
        }
    }
    $('#login_radio_message').show();
    $('#login_radio_message').html('Please select any option.');
    $('#login_radio_message').css('color', 'rgba(255,0,0, .8)');
    return false;
}

function loginCheckboxValidation() {
    var loginCheckboxVal = $("input[type='checkbox'][name='input-checkbox']");
    for (var index = 0; index < loginCheckboxVal.length; index++) {
        if (loginCheckboxVal[index].checked == true) {
            $('#login-checkbox_message').hide();
            return true;
        }
    }
    $('#login-checkbox_message').show();
    $('#login-checkbox_message').html('Please select any option.');
    $('#login-checkbox_message').css('color', 'rgba(255,0,0, .8)');
}

function loginSelectValidation() {
    var loginSelectVal = $('#login_select').val();
    if ((loginSelectVal == 'Selectlist') || (loginSelectVal == '')) {
        $('#login-select_message').show();
        $('#login-select_message').html('This field is required.');
        $('#login-select_message').css('color', 'rgba(255,0,0, .8)');
        $('#login_select').css('border', '1px solid rgba(255,0,0, .25)');
        loginConfirmPasswordVariable = false;
        return false;
    } else {
        $('#login-select_message').hide();
        $('#login_select').css('border', '1px solid #ced4da');
    }
}

$('input[type="submit"]#login_submit_button').click(function () {

    loginNameVariable = true;
    loginEmailVariable = true;
    loginMobileVariable = true;
    loginPasswordVariable = true;
    loginConfirmPasswordVariable = true;
    loginSelectVariable = true;

    loginNameValidation();
    loginEmailValidation();
    loginMobileValidation();
    loginPasswordValidation();
    loginConfirmPasswordValidation();
    loginRadioValidation();
    loginCheckboxValidation();
    loginSelectValidation();

    if ((loginNameVariable == true) && (loginEmailVariable == true) && (loginMobileVariable == true) && (loginPasswordVariable == true) && (loginConfirmPasswordVariable == true) && (loginSelectVariable == true)) {
        alert('this is if condition.')
        return true;
    } else {
        alert('this is else condition.')
        return false;
    }

});
