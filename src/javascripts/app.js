
<<<<<<< HEAD
import home_controller from './controllers/home_controller';
import home_templat from './views/home.html';
//渲染路由
$('.warp').html(home_templat);
home_controller.render();
=======
import Router from './router';
import home_controller from './controllers/home_controller';

 //渲染视图
 home_controller.render();
 //启动路由
 const router =new Router({initial:'#/home_job'});
 window.router=router;
 router.init();
>>>>>>> b7e85904584d7fa2a1983e9e063a028b34ec4481


