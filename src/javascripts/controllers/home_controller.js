//home视图的控制器
// import home_job_template from '../views/home-job.html';
import home_template from '../views/home.html';
//负责将home视图渲染到对应的地方
const render=()=>{
    $('.warp').html(home_template);
}

export default {render}