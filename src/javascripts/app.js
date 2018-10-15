
import home_controller from './controllers/home_controller';
import home_templat from './views/home.html';
//渲染路由
$('.warp').html(home_templat);
home_controller.render();


