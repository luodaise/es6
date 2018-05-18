{
    function test(x, y = 'world'){
        console.log('默认值',x,y);
    }
    test('hello');
    test('hello','kill');
}
{
    let x='test';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2('kill');
}