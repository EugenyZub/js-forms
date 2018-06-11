$(document).ready(function(){

	(function(){

		var formValidation = {

			isValid: true,

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function() {
				$('#enter-form').on('submit', formValidation._loginCheck);
			},

			_loginCheck: function(event) {
				event.preventDefault();
				console.log('private method _loginCheck - run');
				var form = $(this),
					email = form.find('input:text'),
					password = form.find('input:password'),
					valid = true;

				// Email
				$.each(email, function(index, val){
					console.log('поиск полей email');
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.parents('.form__group'),
						emailField = $('#emailField'),
						pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

					if ( value.length === 0 ) {
						// Show text error
						formGroup.addClass('error');
						tooltip = $('<span class="form__tooltip ">' + 'Пустой email' + '</span>');
						formGroup.find('.form__tooltip').remove();
						tooltip.appendTo(formGroup);
						valid = false;
						console.log('пустой email');
					} else if( value.length != 0 ) {
						if ( !(pattern.test(emailField.val())) ) {
							// Show format error
							formGroup.addClass('error');
							tooltip = $('<span class="form__tooltip ">' + 'Неправильный формат email' + '</span>');
							formGroup.find('.form__tooltip').remove();
							tooltip.appendTo(formGroup);
							valid = false;
							console.log('неверный формат email');
						}  else {
							formGroup.removeClass('error');
							formGroup.find('.form__tooltip').remove();
							console.log('Удаление класса с ошибкой');
						}
					}



					// Hide errors
					input.on('focus', function(){
						formGroup.find('.form__tooltip').remove();
					});
					input.on('keydown', function(){
						formGroup.removeClass('error');
					});
					input.on('change', function(){
						formGroup.removeClass('error');
					});
				}),

				// Password 
				$.each(password, function(index, val){
					console.log('поиск полей с паролем');
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.parents('.form__group'),
						textError = 'Вы не ввели пароль',
						tooltip = $('<span class="form__tooltip ">' + textError + '</span>');
						
					if ( value.length === 0 ) {
						// Show errors
						formGroup.addClass('error');
						formGroup.find('.form__tooltip').remove();
						tooltip.appendTo(formGroup);
						valid = false;
						console.log('пустой пароль');
					} else {
      					formGroup.removeClass('error');
      					formGroup.find('.form__tooltip').remove();
						console.log('Удаление класса с ошибкой');
					}

					// Hide errors
					input.on('focus', function(){
						formGroup.find('.form__tooltip').remove();
					});
					input.on('keydown', function(){
						formGroup.removeClass('error');
					});
					input.on('change', function(){
						formGroup.removeClass('error');
					});
				});
			},

		};	

		formValidation.init();
	}());
});
