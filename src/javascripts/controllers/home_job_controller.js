import home_job_template from '../views/home-job.html';
import home_job_list from '../views/home-job-list.html';
import job_list from '../models/home_job_model';
import BScroll from 'better-scroll';

let _p = 1;
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
    handleContentScroll();
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
    setTimeout(function(){
        $('.job-list-a').on('tap',() => {
            console.log(1);
            window.location.href="http://localhost:8080/detail.html"
        })
    },2000)
}

//这里是
const handleContentScroll = async () => {

    let _o_scroll_title = $('.scroll-info__title');
    //实例化BScroll
    let _job_scroll = new BScroll('.bscroll',{
        probeType: 2
    })
    await getJoblist();     //初始加载第一页
    _job_scroll.refresh();

    let flag = true;        //这里是一个开关
    _job_scroll.on('scrollEnd', async ({ x , y }) => {
        if(_job_scroll.maxScrollY - y > -50 && flag ){//可以滚动的最大距离，和当前滚动的距离
            flag = false;   //每次进来把开关关闭，然后请求完一次再把开关开启。如果大于4了那么开关就永久关闭了
            _p++;
            if( _p > 4 ){
                _p = 1 ;            //当不能加载了把p返回1，因为单页面所以一会回来还要从p=1开始
                _o_scroll_title.on('tap', () => {
                    location.hash = '#/job';
                })
                _o_scroll_title.html('前往职位列表查看更多职位>>');
            }else{
                let date = await job_list.job_list(_p);
                let _job_data = JSON.parse(date);
                let _job_list = _job_data.msg;
                let _template = Handlebars.compile(home_job_list);
                let _html = _template({_job_list});
                await $('.list').append(_html);
                _job_scroll.refresh();
                $('.job-list-a').on('tap',() => {
                    window.location.href="http://localhost:8080/detail.html"
                })
                flag = true;
            }
        }
    })

}


export default{
    render
}