import register_template from  '../views/register.html';

const render = ()=>{
    $('.home-container').html(register_template);
}
export default{
    render
}