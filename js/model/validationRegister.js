function Validation() {
    this.kiemTraRong = function (value,divErro,mess) {
        // console.log(divErro);
        if (value.trim() === "") {
            //show thong bao loi
            domID(divErro).innerHTML = mess;
            domID(divErro).style.display = "block";
            return false;
        } else {
            domID(divErro).innerHTML = "";
            domID(divErro).style.display = "none";
            return true;
        };
    }
    this.kiemTraMatKhau = function (value1,value2, divErro, mess) {
        // console.log(divErro);
        if (value1 === value2) {
            //show thong bao loi
            domID(divErro).innerHTML ="";
            domID(divErro).style.display = "none";
            return true;
        } else {
            domID(divErro).innerHTML =  mess;
            domID(divErro).style.display = "block";
            return false;
        };
    }
    this.kiemTraEmail = function (value, iderror, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(letter)) {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;
    };
    this.kiemTraTen = function (value, iderror, mess) {

        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };

        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;
    };
    this.kiemTraSo = function(value,iderror,mess){
        var interger=/^[0-9]+$/;
        if(value.match(interger)){
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;
    };
    this.kiemTraGioiHang = function (soPhone, iderror, mess, min, max) {
        if (soPhone.length >= min && soPhone.length <= max) {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        } else {
            domID(iderror).innerHTML = mess;
            domID(iderror).style.display = "block";
            return false;

        };

    };
};