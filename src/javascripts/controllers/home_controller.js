//home视图的控制器
// import home_job_template from '../views/home-job.html';
import job_template from '../views/job.html';
//负责将home视图渲染到对应的地方
const render=()=>{
    $('.home-container').html(job_template);
}

export default {render}