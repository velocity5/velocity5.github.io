
$(document).ready(function () {
    // show-hide password
    $('.fa-eye').click(function () {
        $(this).toggleClass('fa-eye-slash');
        let type = $('#psw').attr('type');
        if (type == 'text') {
            $('#psw').attr('type', 'password');
        } else {
            $('#psw').attr('type', 'text');
        }
    });
    // validate email
    $('.signupbtn').click(function () {
        $('.error').hide();
        let hasError = false;

        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        let nameReg = /^[a-zA-Z\s]*$/;

        let emailAdd = $('#inputEmail').val();
        let pwdVal = $('#psw').val();
        let nameVal = $('#inputName').val();
        if (emailAdd == '' || pwdVal == '' || nameVal == '') {
            $('#inputEmail').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Please enter your email address.</span>`);
            $('#psw').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Please enter your password.</span>`);
            $('#inputName').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Please enter your name.</span>`);
            hasError = true;
        } else if (!nameReg.test(nameVal)) {
            $('#inputName').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Please enter a text name only.</span>`);
            hasError = true;
        } else if (!emailReg.test(emailAdd)) {
            $('#inputEmail').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Please enter a valid email.</span>`);
            hasError = true;
        } else if (!passReg.test(pwdVal)) {
            $('#psw').after(`<span class='error' style='color:crimson;background:none'><i class="fas fa-exclamation-triangle" style="background:none"></i> Password must contain at least 8 chars, 1 number, 1 uppercase letter A-Z, 1 lowercase letter a-z.</span>`);
            hasError = true;
        }
        if (hasError == true) { return false; }
    });

});

