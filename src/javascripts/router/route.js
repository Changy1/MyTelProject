//路由表
import home_job_controller from '../controllers/home_job_controller';
import job_controller from '../controllers/job.controller';
import register_controller from '../controllers/register_controller';
const routes = {
    '#/home_job': home_job_controller,
    '#/job':job_controller,
    '#/register':register_controller
}

export { routes } ;


