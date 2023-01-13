function test(){
	if((f.test1[0].checked==false && f.test1[1].checked==false)||(f.test2[0].checked==false && f.test2[1].checked==false)
		||(f.test3[0].checked==false && f.test3[1].checked==false)||(f.test4[0].checked==false && f.test4[1].checked==false)
		||(f.test5[0].checked==false && f.test5[1].checked==false)||(f.test6[0].checked==false && f.test6[1].checked==false)
		||(f.test7[0].checked==false && f.test7[1].checked==false)||(f.test8[0].checked==false && f.test8[1].checked==false)
		||(f.test9[0].checked==false && f.test9[1].checked==false)||(f.test10[0].checked==false && f.test10[1].checked==false))
	{
		alert("You have to answer all the questions!!!");return false;

	}
	count=0;
	if(f.test1[1].checked==true){
		count+=10;
	}
	if(f.test2[1].checked==true){
		count+=10;
	}
	if(f.test3[1].checked==true){
		count+=10;
	}
	if(f.test4[1].checked==true){
		count+=10;
	}
	if(f.test5[1].checked==true){
		count+=10;
	}
	if(f.test6[1].checked==true){
		count+=10;
	}
	if(f.test7[1].checked==true){
		count+=10;
	}
	if(f.test8[1].checked==true){
		count+=10;
	}
	if(f.test9[1].checked==true){
		count+=10;
	}
	if(f.test10[1].checked==true){
		count+=10;
	}

	if(count>50){
		alert("\tYou are doing good! \n\tyou got "+count);return false;
	}
	else{
		alert("==> You got "+count+" \nMaybe you have to contact a doc!");return false;
	}



}