function domID(id){return document.getElementById(id)};
var validation = new Validation();

function taoTaiKhoan(){
    //lay gia tri nguoi dung nhap
    var register = new Register();
    register.email = domID("email").value;
    register.password = domID("password").value;
    register.name = domID("name").value;
    register.phone = domID("phone").value;
    var email = domID("email").value;
    var password = domID("password").value;
    var rePassword = domID("rePassword").value;
    var name = domID("name").value;
    var phone = domID("phone").value;
    register.gender = document.querySelector('input[name="radio"]:checked').value;
// console.log(email);
    //kt validation
    var isValid = true;
    //email
    isValid &= validation.kiemTraRong(email,"errorEmail","(!)Vui lòng nhập email") && validation.kiemTraEmail(email,"errorEmail","(!)Email không đúng định dạng");
    //password
    isValid &= validation.kiemTraRong(password,"errorPassword","(!)Vui lòng nhập password");
    isValid &= validation.kiemTraRong(rePassword,"errorRePassword","(!)Vui lòng nhập lại password") && validation.kiemTraMatKhau(password,rePassword,"errorRePassword","(!)Mật khẩu không trùng khớp");
    //name
    isValid &= validation.kiemTraRong(name,"errorName","(!)Vui lòng nhập name") && validation.kiemTraTen(name,"errorName","(!)Chỉ được nhập chữ");
    //phone
    isValid &= validation.kiemTraRong(phone,"errorPhone","(!)Vui lòng nhập số phone") && validation.kiemTraSo(phone,"errorPhone","(!)Chỉ được nhập số") && validation.kiemTraGioiHang(phone,"errorPhone","(!)Vui lòng nhập số phone từ 7 đến 11 số",7,11);
if(isValid){
    var promise = axios({
        url:"https://shop.cyberlearn.vn/api/Users/signup",
        method:'POST',
        data: register
    });
    promise.then(function(result){
        console.log(result.data.content);
        alert("Tạo tài khoản thành công");
    });
    promise.catch(function(err){
        console.log(err);
        alert("email đã tồn tại");
    });
};

};