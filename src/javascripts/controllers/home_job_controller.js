import home_job_template from '../views/home-job.html';
import home_job_list from '../views/home-job-list.html';
import job_list from '../models/home_job_model';

const render = ()=>{
    $('.home-container').html(home_job_template);

    let _p = 1;
    getJoblist(_p);

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

const getJoblist = async (_p)=>{
    let date = await job_list.job_list(_p);
    let _job_data = JSON.parse(date);
    let _job_list = _job_data.msg;

    let _template = Handlebars.compile(home_job_list);
    let _html = _template({_job_list});
    //这里当他请求完成以后会开启一个两秒的定时器。
    //将第一个放前面，使他先清空然后在加载字符串模板
    setTimeout(function(){
        $('.list').html('');
    },2000)
    setTimeout(function(){
        $('.list').append(_html);
    },2000)
}


export default{
    render
}