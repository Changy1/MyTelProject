//邮箱验证
let res = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let arr=[];
$('.email').on('blur', function () {
    flag = false;
    let val = $(this).val();
    if (!res.test(val)) {
        $('.error').css({
            'display': 'block'
        })
        $('.error span').text('请输入正确的邮箱格式');
    }
});
$('.email').on('input', function () {
    let val = $(this).val();
    if (res.test(val)) {
        $('.error').css({
            'display': 'none'
        })
        $('.error span').text('');
        arr.push(val);
    }
})
//密码验证
let res1 = /^[a-z0-9_-]{6,18}$/;
$('.password').on('blur', function () {
    let val = $(this).val();
    if (!res1.test(val)) {
        $('.error').css({
            'display': 'block'
        })
        $('.error span').text('密码格式不正确');
    }
});
$('.password').on('input', function () {
    let val = $(this).val();
    if (res1.test(val)) {
        $('.error').css({
            'display': 'none'
        })
        $('.error span').text('');
        arr.push(val);
    }
})
//随机生成4为字母数字组合
var flag3 = false;
var str = '';
for (var i = 0; i < 4; i++) {
    var num = 0;
    do {
        num = Math.floor(Math.random() * 48 + 43) + '';
    } while (num > 57 && num < 65)
    str = str + String.fromCharCode(num);
}
$('.graph-code').text(str);
//判断输入框
$('.img_pwd').on('blur', function () {
    if ($(this).val() != $('.graph-code').text()) {
        $('.error').css({
            'display': 'block'
        })
        $('.error span').text('图形验证码不正确');
    }
})
$('.img_pwd').on('focus', function () {
    if ($(this).val() == $('.graph-code').text()) {
        $('.error').css({
            'display': 'none'
        })
        $('.error span').text('');
    }
})
//点击登录
$('.register-btn').on('click',function(){
    if($('.email').val()!='' && $('.password').val()!='' && $('.img_pwd').val()!='' && $('.error span').text()==""){
        //将注册信息存入
        let user=$('.email').val();
        let pwd=$('.password').val();
        let obj={user,pwd};
        document.cookie=setCookie('userinfo',JSON.stringify(obj),1000000,'/');
        //成功后跳转到登陆页面
        $('.register-btn a').attr('href','http://localhost:8080/login.html');
    }
})

