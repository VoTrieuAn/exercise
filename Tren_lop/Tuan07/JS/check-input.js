
function isNull (string) {
    if(string == "" || string == null) {
        return true;
    }
    return false;
}

function validationForm() {
    const username = document.getElementById('inputUsername').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const phoneNumber = document.getElementById('inputPhoneNumber').value.trim();

    if(!isNull(username) && !isNull(email) && !isNull(phoneNumber)) {
        errName.innerHTML = '';
        errEmail.innerHTML = '';
        errPhone.innerHTML = '';
    }
    if(isNull(username)) {
        errName.innerHTML = 'Vui lòng nhập tên người dùng';
    } else {
        const pattern = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/
        if(!pattern.test(username)) {
            errName.innerHTML = 'Tên người dùng không hợp lệ';
        }
    }

    if (isNull(email)) {
        errEmail.innerHTML = 'Vui lòng nhập email'
    } else {
        const pattern = /[a-z]+[0-9]*@.+/
        if(!pattern.test(email)) {
            errEmail.innerHTML = 'Email không hợp lệ';  
        }
    }

    if (isNull(phoneNumber)) {
        errPhone.innerHTML = 'Vui lòng nhập số điện thoại'
    } else {
        const pattern = /^(090|091|018)[0-9]{7}$/;
        if(!pattern.test(phoneNumber)) {
            errPhone.innerHTML = 'Số điện thoại không hợp lệ';
        }
    }
    return false;
}