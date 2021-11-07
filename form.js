var bodyTemplate;
var subjectTemplate;
var toTemplate;

$( document ).ready(function() 
{

	bodyTemplate = $('#email-example pre.body').html()
	subjectTemplate = $('#email-example pre.subject').html()
	toTemplate = $('#email-example pre.to').html()
	
	$(".no-js").remove();

	$(".email-form")
		.append(
		
			$('<form></form>')
			    .attr('id', 'email-composer')
				.append($('<aside></aside>')
					.append('Use this form to fill in the blanks. The values you enter are not sent anywhere and are not stored.')
					.attr('class', 'explanation'))
				
				.append($('<label></label>')
					.append('their email address')
					.attr('for', 'their-address'))
				.append($('<input />')
					.attr('id', 'their-address')
					.attr('type', 'text')
					.on("change paste keyup", update))
				.append($('<hr/>'))

				.append($('<label></label>')
					.append('their website (name or address)')
					.attr('for', 'their-website'))
				.append($('<input />')
					.attr('id', 'their-website')
					.attr('type', 'text')
					.on("change paste keyup", update))
				.append($('<hr/>'))
				
					.append($('<label ></label>')
					.append('your name')
					.attr('for', 'your-name'))
				.append($('<input />')
					.attr('id', 'your-name')
					.attr('type', 'text')
					.on("change paste keyup", update))
				.append($('<hr/>'))
							
		);
		
});

function update() {
	yourName = $('#your-name').val();
	theirAddress = $('#their-address').val();
	theirWebsite = $('#their-website').val();
	
	yourName     = yourName ? yourName : '[your-name]';
	theirAddress = theirAddress ? theirAddress : '[their-address]';
	theirWebsite = theirWebsite ? theirWebsite : '[website]';
	
	to =           toTemplate.replace("[their-address]", theirAddress)
	subject = subjectTemplate.replace("[website]", theirWebsite)
	body =       bodyTemplate.replace("[your-name]", yourName)
	body =               body.replace("[website]", theirWebsite)
	
	$('#email-example pre.to').html(to)	
	$('#email-example pre.subject').html(subject)	
	$('#email-example pre.body').html(body)
	
	mailtoLink = 	"mailto:" + theirAddress + 
					"?subject=" + encodeURI(subject.substring(9)) + 
					"&body="    + encodeURI(body.substring(6));
					
	$('.email-link').attr('href', mailtoLink)
}
