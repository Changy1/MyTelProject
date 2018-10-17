//home视图的控制器
// import home_job_template from '../views/home-job.html';
import home_template from '../views/home.html';
//负责将home视图渲染到对应的地方
const render=()=>{
    $('.warp').html(home_template);
    //判断账号密码是否存在
    if(getCookie('userinfo')){
        $('.tap-this').attr('href','#/personal')
    }else{
        $('.tap-this').attr('href','http://localhost:8080/login.html')
    }
}

export default {render}