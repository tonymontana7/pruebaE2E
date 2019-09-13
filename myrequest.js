


var headersSource;
var resp1;;

var requestBody;
var method;
try{
	resp1 = context.getOrCreateMessageVariable ('request');
	//Get body of the request
	requestBody = resp1.getContent();
	//Get headers of the request
	headersSource = resp1.getHeaders();
	//Get method of the request
	method = resp1.getMethod();
	 
}catch (e){
	//Log error
	logger.log(LOG_LEVEL.WARNING, "Error getting context vars");
	
	context.setVariable("errorCode", "500"); //Sets the error code return
	var mensajeError = {
	  "messages": [
		{
		  "code": "Unexistent context",
		  "message": "The context variables can not be retrieved",
		  "type": "ERROR"
		}
	  ]
	};

	context.setVariable("errorMessage",mensajeError); //Sets the error message return
}