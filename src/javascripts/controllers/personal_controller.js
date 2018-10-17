import personal_template from  '../views/_personal.html';

const render = ()=>{
    $('.home-container').html(personal_template);
    $('.personal-list-set').on('tap', () => {
        var cfm_flag = confirm('你确定要退出当前账号吗');
        if( cfm_flag ){
            window.location.href = 'http://localhost:8080/login.html';
        }
    })
}
export default{
    render
}