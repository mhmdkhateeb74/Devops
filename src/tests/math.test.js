const {sum,avg,mod}=require("/math.js");
test("sum 2+3=5",()=> {

expect(sum(2,3)).toBe(5);
});



test( "Avg ", () =>
{
    expect(avg(5,10)).toBe(7.5);


});

test("mod", () => 
{
    expect(mod(5,10)).toBe(0);

});

module.exports=(
    sum,avg,mod
)