let info_string = getCookie('userinfo');
let obj = JSON.parse(info_string);
let username = obj.user;
let password = obj.pwd;

$('.login-button').on('click',() => {
    let now_username = $('.login-user-input').val();
    let now_password = $('.login-password-input').val();
    if(now_username === username  && now_password === password){
        $('#login-a').attr('href','http://localhost:8080/#/personal');
    }else if(now_username != username){
        $('.error').css('display','block');
        $('.error').find('span').html('账号或密码不正确')
    }else if(now_password != password){
        $('.error').css('display','block');
        $('.error').find('span').html('账号或密码不正确')
    }
})