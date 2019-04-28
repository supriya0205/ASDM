exports.search=function(arr)
{
	var count=0;
	var arr1=new Array();
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]==10)
		{
			arr1[count++]=1;
		}
		return arr1;
	}
	
}
exports.add=function(arr)
{

	sum=0;
	for(var i=0;i<arr.length;i++)
	{
		sum=sum+arr[i];
	}
	return sum;
}