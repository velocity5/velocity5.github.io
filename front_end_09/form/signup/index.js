function submitForm() {
    let name = document.getElementById("inputName").value;
    let radioMale = document.getElementById("male").value;
    let radioFemale = document.getElementById("female").value;
    let dateOfBirth = document.getElementById("inputBirthday").value;
    let telePhone = document.getElementById("inputTelephone").value;
    let mail = document.getElementById("inputEmail").value;
    let add = document.getElementById("address").value;
    let pass = document.getElementById("psw").value;
    document.writeln("<b>" + "Thong Tin Dang Ky " + "</b>" + "<br />");
    document.writeln("Ten: " + name + "<br />");
    let value;
    if (value = "male") {
        document.writeln("Gioi tinh: " + radioMale + "<br />");
    } else if (value = "female") {
        document.writeln("Gioi tinh: " + radioFemale + "<br />");
    } else {
        document.writeln("");
    }

    document.writeln("Ngay sinh: " + dateOfBirth + "<br />");
    document.writeln("Sdt: " + telePhone + "<br />");
    document.writeln("Email: " + mail + "<br />");
    document.writeln("DC: " + add + "<br />");
    document.writeln("Mat khau: " + pass);

}
