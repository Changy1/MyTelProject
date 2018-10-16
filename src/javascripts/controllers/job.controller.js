import job_template from  '../views/job.html';
import job_content_template from '../views/job-content.html';
import job_list from '../models/home_job_model';
//引入better-scroll插件
import BScroll from 'better-scroll';
//初始加载的职位信息页面
let _p= 1;
//job页面要显示的所有数据
let datasources = [];
const render = ()=>{
    //初始将job页面渲染到相对应的页面
    $('.home-container').html(job_template);
    //初始加载第一页
    getJobList(_p);
    handleContentScroll();
}
//等待获取下一页数据进行渲染
const getJobList= async(_p)=>{
    //此处获得数据为字符串
    let data = await job_list.job_list(_p);
    let  _job_data= JSON.parse(data);
    //多个职位的数组信息
    let _job_list= _job_data.msg;
    // datasources = [...datasources,..._job_list];
    //先将数据中的数据清空
    datasources=[];
    datasources.push(..._job_list);
    // console.log(_job_list);
    rederJobList();
}
//渲染job页面
const rederJobList=()=>{
    let _template = Handlebars.compile(job_content_template);
     // 将handlebar模板编译成html格式的字符串
     let _html = _template({ _job_list:datasources});
     $('.list-box').append(_html);
}
//实现上拉加载
const handleContentScroll = ()=>{
    //实例化bsScroll
    let loadmore = new BScroll('.wrapper',{
            probeType: 2
    });
    loadmore.on('scrollEnd',function(position){
        _p++;
        if(position.y <=  this.maxScrollY){
            $('.dropload-refresh span').eq(0).text('');
            $('.dropload-refresh span').eq(0).addClass('loading');
            $('.dropload-refresh span').eq(1).text('加载中...');
            setTimeout(async function(){
                await getJobList(_p);
                //恢复文本
                $('.dropload-refresh span').eq(0).text('↑');
                $('.dropload-refresh span').eq(0).removeClass('loading');
                $('.dropload-refresh span').eq(1).text('上拉刷新');
                // 加载更多后,重新计算滚动区域高度
                loadmore.refresh();
            },1000);
        }
    })
}
export default{
    render
}