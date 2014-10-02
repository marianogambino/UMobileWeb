
	$(document).ready(function(){
				 
		 $('#container').show();		  		 		 
		 $('#login').hide();
		 $('#bvolver').hide();
		 
		 
		jQuery.validator.setDefaults({
			  debug: true,
			  success: "valid"
		});
				
		
		     	
	  $( "#encriptarForm" ).validate({
		   onsubmit : true, 
		   rules: {
			   			texto: { required: true },			   		
		   },
		   messages: {
			   texto: "Debe ingresar al menos un caracter para encrptar"
			   
		   },			   
		   submitHandler : function(form) {
			    form.submit();
			}
	  
		 });   
	   
	});
	
	//**** Funciones ****//
	function encriptar(){
		
		var texto = $('#texto').val();				
		
		$.ajax({
			type:"GET",
			url:"/Crypto3DesWeb/encriptar.htm",
			data: "texto=" + texto,
			success: function(response){
					
					$('#error').html("");
										
					if(response.status=="SUCCESS" ){
						HTML = "<h1><span  class='label label-success'>"+ response.result  +"</span></h1>";
						$('#textoEncriptado').html( HTML );					  																										
					}else{												
						$('#error').html("ERROR AL ENCRIPTAR");
					}					
				},
				error: function(e){
					alert('Error:' + e);
				}						
		});
	}
		
	
	function iniciarSesion( usuario , password){
			
		 //$('#login').hide();
		 //$('#bvolver').show();
		 //$('#container').show();		
		 
		 //falta imagenes
	}
	
	function cerrarSesion(){
		//$('#container').hide();
		//$('#bvolver').hide();
		//$('#holdings').show();		 
	}
		
	//********************//
	