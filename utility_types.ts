let isDone:boolean =false;
//bool
console.log(isDone);
let dec :number=6;
//数字
let strName:string="bob";
//字符串
console.log(dec);
console.log(strName);
strName="smith";
console.log(strName);
//模版字符串
let moderName: string=`JinKe`;
let age=37;
let sentence :string=`My name is ${moderName} I'm ${age+1} years old`;
console.log(sentence);
let sentence_two: string="My name is "+moderName+" I'm "+(age+1)+" years old";
console.log(sentence_two);
//数组
let list:number[]=[1,2,3];
for(let i=0;i<list.length;i++)
console.log(list[i]);
//泛型定义
let list_two: Array<number>=[1,2,3];
list_two.forEach(element => {
    console.log(element);
});
//let var const

//解构赋值 解构赋值就相当于建立了一个索引
let input:number[] =[5,6];
let [first,second]=input;
console.log(first);
console.log(second)
//函数中的解构赋值

function f([first,second]:[number,number]){
console.log(first);
console.log(second);
}
f([5,6]);//ts不会自动推断数组的元祖类型
//解构赋值中的...
let [...rest]=[1,2,3,4];
console.log(rest);
//对象解构


//接口
function printLable(labelledobj:{label:string})
{
console.log(labelledobj.label)
}
let myobj= {size:10,label:"size 10 object"};
printLable(myobj);
//接口描述
interface LabelValue{
    label:string;
}
function printLable2(labelledobj:LabelValue)
{
    console.log(labelledobj.label);
}
let myobj2={size:10,label:"Size 20 object"};
printLable2(myobj2);
//可选属性
