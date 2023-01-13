function verify(){
	nom=f.nom.value;
	nom=nom.toUpperCase();
	counter=0;
	for(i=0;i<nom.length;i++){
		if(nom.charAt(i)>='A'&&nom.charAt(i)<='Z'){
			counter++;
		}
	}
	if(nom==""||counter<nom.length){
		alert("Invalid name");return false;
	}
	prenom=f.prenom.value;
	prenom=prenom.toUpperCase();
	counter=0;
	for(i=0;i<prenom.length;i++){
		if(prenom.charAt(i)>='A'&&prenom.charAt(i)<='Z'){
			counter++;
		}
	}
	if(prenom==""||counter<prenom.length){
		alert("Invalid first-name");return false;
	}
	email=f.email.value;
	if((email=="")||(email.indexOf('@')==-1)){
		alert('Invalid email');
		return false;
	}
	pwd=f.pwd.value;
	if(pwd.length<8)
		{
			alert('Short password');return false;
		}
	pwd2=f.pwd2.value;
	if(pwd.localeCompare(pwd2)!=0){
		alert("Invalid Password-Confirmation");return false;
	}

	if(f.sexe[0].checked==false&&f.sexe[1].checked==false){
		alert("Sexe unchecked!");return false;
	}
	tel=f.tel.value;
	telchaine=tel.toString();
	if(isNaN(tel)&&telchaine.length<8){
		alert("Invalid Phone number");return false;
	}
	alert("Hello "+nom);

}