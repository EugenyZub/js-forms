$(document).ready(function(){

	(function(){

		var formValidation = {

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function() {
				$('#registration-form').on('submit', formValidation._loginCheck);
			},

			_loginCheck: function(event) {
				event.preventDefault();
				//console.log('private method _loginCheck - run');
				var form = $(this),
					email = form.find('input:text'),
					password = form.find('input:password'),
					valid = true,
					//для email
					input1 = $(email),
					value1 = input1.val().trim(),
					formGroup1 = input1.parents('.form__group'),
					emailField = $('#emailField'),
					pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i,
					//для пароля
					input2 = $(password),
					value2 = input2.val().trim(),
					formGroup2 = input2.parents('.form__group'),
					//при вводе всего кроме нужных email пароля
					formField = $('.form__error');
					

				// Email
				$.each(email, function(index, val){
					//console.log('поиск полей email');
						
					if ( value1.length === 0 ) {
						// Show text error
						formGroup1.addClass('error');
						tooltip = $('<span class="form__tooltip ">' + 'Введите email' + '</span>');
						formGroup1.find('.form__tooltip').remove();
						tooltip.appendTo(formGroup1);
						//console.log('Введите email');
					} else if (!(pattern.test(value1)) && value1.length > 0 && value2.length > 0) {
							// Show format error
							formGroup1.addClass('error');
							tooltip = $('<span class="form__tooltip ">' + 'Неправильный формат email' + '</span>');
							formGroup1.find('.form__tooltip').remove();
							tooltip.appendTo(formGroup1);
							//console.log('неверный формат email');							
						}  else {
							
							formGroup1.removeClass('error');
							formGroup1.find('.form__tooltip').remove();
							//console.log('Удаление класса с ошибкой email');			
							}
					
					// Hide errors
					input1.on('focus', function(){
						formGroup1.find('.form__tooltip').remove();
					});
					input1.on('keydown', function(){
						formGroup1.removeClass('error');
					});
					input1.on('change', function(){
						formGroup1.removeClass('error');
					});
				}),

				// Password 
				$.each(password, function(index, val){
					//console.log('поиск полей с паролем');					
					textError = 'Введите пароль',
					tooltip = $('<span class="form__tooltip ">' + textError + '</span>');
						
					if ( value2.length === 0 ) {
						// Show errors
						formGroup2.addClass('error');
						formGroup2.find('.form__tooltip').remove();
						tooltip.appendTo(formGroup2);
						//console.log('пустой пароль');
					} else {
      					formGroup2.removeClass('error');
      					formGroup2.find('.form__tooltip').remove();
						//console.log('Удаление класса с ошибкой password');
					}

					// Hide errors
					input2.on('focus', function(){
						formGroup2.find('.form__tooltip').remove();
					});
					input2.on('keydown', function(){
						formGroup2.removeClass('error');
					});
					input2.on('change', function(){
						formGroup2.removeClass('error');
					});
				});

				if ( value1 == 'mail@mail.com' ) {
					//console.log('Данный email уже занят');
								formField.addClass('error');
								tooltip = $('<span class="form__tooltip ">' + 'Данный email уже занят' + '</span>');
								tooltipeDescription = $('<p class = "tooltipe__Description">' + 
														'Используйте другой email чтобы создать новый аккаунт. ' + 
														'</p>' + '<p class = "tooltipe__Description">' + 'Или воспользуйтесь ' +
														'<a href="#">' + 'восстановлением пароля' + '</a>' + ', чтобы войти на сайт.' + '</p>');
								formField.find('.form__tooltip').remove();
								formField.find('.tooltipe__Description').remove();
								tooltip.appendTo(formField);
								tooltipeDescription.appendTo(formField);
					} else if (( (pattern.test(value1)) && value1.length > 0 &&
						  		value2.length > 0 ) && ( value1 != 'mail@mail.com' )) {
							window.location= "success.html";
						  }		
			},
		};	

		formValidation.init();
	}());
});
