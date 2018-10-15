//home视图的控制器
// import home_job_template from '../views/home-job.html';
<<<<<<< HEAD
import job_template from '../views/job.html';
//负责将home视图渲染到对应的地方
const render=()=>{
    $('.home-container').html(job_template);
=======
import home_template from '../views/home.html';
//负责将home视图渲染到对应的地方
const render=()=>{
    $('.warp').html(home_template);
>>>>>>> b7e85904584d7fa2a1983e9e063a028b34ec4481
}

export default {render}