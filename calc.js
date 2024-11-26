/*calc java script*/
function calc()
{
	let str = ui.value;
	let index;
	let i,a='',b='',op='';
	//console.log(str);
	for (let i = 0; i < str.length; i++) {
		if(str[i] == '/' )
		{
			op+='/'
			index = i+1;
			break;
		}
		else if(str[i] == '+' )
		{
			op+='+'
			index = i+1;
			break;
		}
		else if(str[i] == '-' )
		{
			op+='-'
			index = i+1;
			break;
		}
		else if(str[i] == '*' )
		{
			op+='*'
			index = i+1;
			break;
		}
		a+=str[i];
	};
	
	b=str.slice(index);
	//console.log(a+" : "+b);
	if(op=='/')
		ui.value=(a/b).toFixed(5);
	else if(op=='+')
		ui.value=(+a + +b).toFixed(1);
	else if(op=='*')
		ui.value=a*b;
	else if(op=='-')
		ui.value=(a-b).toFixed(1);
	//console.log(+a + +b);
}
function del()
{
	ui.value='';
	out.value='';
}
function del1()
{
	ui.value=ui.value.slice(0,-1)
	out.value='';
}
