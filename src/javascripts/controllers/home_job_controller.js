import home_job_template from '../views/home-job.html';

const render = ()=>{
    $('.home-container').html(home_job_template);
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2500,//1秒切换一次
        },
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
}
export default{
    render
}