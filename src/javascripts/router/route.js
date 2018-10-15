//路由表
import home_job_controller from '../controllers/home_job_controller';
import job_controller from '../controllers/job.controller';
import personal_controller from '../controllers/personal_controller';
const routes = {
    '#/home_job': home_job_controller,
    '#/job':job_controller,
    '#/personal':personal_controller
}

export { routes } ;


