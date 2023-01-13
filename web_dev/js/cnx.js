function verify(){
	email=f1.email.value;
	if((email=="")||(email.indexOf('@')==-1)){
		alert('Invalid email');
		return false;
	}
	pwd=f1.pwd.value;
	if(pwd.length<8)
		{
			alert('Short password');return false;
		}

}

		