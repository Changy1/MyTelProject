//提供职位信息数据
const job_list = (p=1)=>{
    return $.ajax({
        url:'/sxs/interns/search?p='+p,
        success: (res) => {
            return res;
        }
    })
}
export default{
    job_list
}