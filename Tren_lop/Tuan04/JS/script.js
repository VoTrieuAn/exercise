function isNotNull(...values) {
    return values.every(value => value.trim() !== "");
}
 
let numberOneInput = document.getElementById("number-one");
let numberTwoInput = document.getElementById("number-two");
let resultInput = document.getElementById("result");

function calculator(select) {
    const numberOne = parseInt(numberOneInput.value);
    const numberTwo = parseInt(numberTwoInput.value);

    if (isNotNull(numberOneInput.value, numberTwoInput.value)) {
        if (!isNaN(numberOne) && !isNaN(numberTwo)) {
            switch (select) {
                case "cong":
                    resultInput.value = numberOne + numberTwo;
                    break;
                case "tru":
                    resultInput.value = numberOne - numberTwo;
                    break;
                case "nhan":
                    resultInput.value = numberOne * numberTwo;
                    break;
                case "chia":
                    if (numberTwo !== 0) {
                        resultInput.value = numberOne / numberTwo;
                    } else {
                        alert("Mẫu số phải khác 0");
                    }
                    break;
            }
        } else {
            alert("Số không hợp lệ");
        }
    } else {
        alert("Field không được rỗng");
    }
}

function cong() {
    calculator("cong");
}

function tru() {
    calculator("tru");
}

function nhan() {
    calculator("nhan");
}

function chia() {
    calculator("chia");
}


function information() {
    const hoTen = document.getElementById('ho-ten').value;
    const namSinh = document.getElementById('nam-sinh').value;
    const diaChi = document.getElementById('dia-chi').value;
    const soDienThoai = document.getElementById('dien-thoai').value;

    if (isNotNull(hoTen, namSinh, diaChi, soDienThoai)) {
        if (/^\d+$/.test(soDienThoai)) {
            document.getElementById('ht').innerText = hoTen;
            document.getElementById('ns').innerText = namSinh;
            document.getElementById('dc').innerText = diaChi;
            document.getElementById('dt').innerText = soDienThoai;
        } else {
            alert("Số điện thoại không hợp lệ");
        }
    } else {
        alert("Field không được rỗng");
    }
}