import job_template from  '../views/job.html';
import job_content_template from '../views/job-content.html';
import job_list from '../models/home_job_model';
const render = ()=>{
    //初始加载一下框架
    let _template = Handlebars.compile(job_template);
    let _html = _template();
    $('.home-container').html(_html);
    //当前的加载职业页数
    let _p= 1;
    //初始加载第一页
    getJobList(_p);
   
}
//等待获取某一页数据然后渲染
const getJobList=async(_p)=>{
    //此处获得数据为字符串
    let data = await job_list.job_list(_p);
    let  _job_data= JSON.parse(data);
    //多个职位的数组信息
    let _job_list= _job_data.msg;
    console.log(_job_list);
    let _template = Handlebars.compile(job_content_template);
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _job_list});
    $('.list-box').append(_html);
}
export default{
    render
}