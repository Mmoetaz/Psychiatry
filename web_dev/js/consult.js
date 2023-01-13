function valid(){
	if(f.paiment[0].checked==false&&f.paiment[1].checked==false&&f.paiment[2].checked==false)
		{alert("You have to choose a payment method!");return false;}
	else
		document.write("We didn't prepare for the consultation area yet!! Thank you for trying later");
}