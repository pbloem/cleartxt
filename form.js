$( document ).ready(function() 
{

	emailBody = "Dear%20Sir%20or%20Madam%2C%0D%0A%0D%0AI%20am%20a%20user%20of%20your%20website%20%28%5Baddress%5D%29.%20I%20recently%20noticed%20that%20you%20sent%20me%20my%20password%20by%20%0D%0Aemail.%20This%20means%20that%20my%20password%20is%20stored%20in%20unencrypted%20form%20in%20your%20database.%20This%20is%0D%0Aa%20very%20big%20problem%20that%20you%20need%20to%20address%20quickly.%0D%0A%0D%0AYou%20can%20read%20why%20this%20is%20such%20a%20big%20problem%20on%20the%20following%20%28non-profit%29%20website%3A%0D%0A%0D%0Ahttp%3A%2F%2Fcleartxt.info%0D%0A%0D%0AI%20hope%20you%20will%20read%20this%20information%20carefully%20and%20take%20steps%20to%20fix%20the%20problems%20with%20%0D%0Ayour%20website.%20%0D%0A%0D%0AWith%20kind%20regards%2C%0D%0A%5Byour-name%5D";
	emailSubject = "Your%20website%20%28%5Baddress%5D%29%20stores%20my%20password%20in%20cleartext%0D%0A";

	$(".no-js").remove();

	$("email-form")
		.append($('<form></form>')
			.append($('<div></div>')
				.append('Use this form to generate an email to send. The values you enter are not sent anywhere and are not stored.')
				.attr('class', 'explanation')
			.append($('<label ></label>')
				.append('your name')
				.attr('for', 'your-name')
			.append($('<input />')
				.id('your-name')
				.attr('type', 'text')
				
			.append($('<label></label>')
				.append('their address')
				.attr('for', 'their-address')
			.append($('<input />')
				.id('their-address')
				.attr('type', 'text')

			.append($('<label></label>')
				.append('their website (address or URL)')
				.attr('for', 'their-website')
			.append($('<input />')
				.id('their-website')
				.attr('type', 'text')
			
		)
});