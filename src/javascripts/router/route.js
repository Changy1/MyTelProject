<<<<<<< HEAD

const routes = {
    '#/job': job_controller,
=======
//路由表
import home_job_controller from '../controllers/home_job_controller';
import job_controller from '../controllers/job.controller';
import register_controller from '../controllers/register_controller';
const routes = {
    '#/home_job': home_job_controller,
    '#/job':job_controller,
    '#/register':register_controller
>>>>>>> b7e85904584d7fa2a1983e9e063a028b34ec4481
}

export { routes } ;


