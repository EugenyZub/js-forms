$(document).ready(function(){

	(function(){

		var formValidation = {

			isValid: true,

			init: function(){
				// вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#comment_form').on('submit', formValidation._validateForm);
			},

			_validateForm: function(event){
				event.preventDefault();
				console.log('private method _validateForm - run');
				var form = $(this),
					inputs = form.find('input, textarea'),
					valid = true;

				//метод .each - принимает 2 параметра: массив и функцию, окторую необходимо выполнить
				$.each(inputs, function(index, val){
					var input = $(val),
					 	value = input.val().trim(),
					 	formGroup = input.parents('.form__group'),
					 	//label = formGroup.find('label').text().toLowerCase(),
					 	textError = 'Вы не ввели комментарий',
					 	tooltip = $('<span class="form__tooltip">' + textError + '</span>');
					//Проверям, что строка не пустая
					if( value.length === 0 ) {
						//Show errors
						formGroup.addClass('error');
						formGroup.find('.form__tooltip').remove();
						tooltip.appendTo(formGroup);
						valid = false;
					} else {
						//Чтобы окно с ошибками было только одно
      					formGroup.removeClass('error');
      					formGroup.find('.form__tooltip').remove();
					}

					//Скрываем ошибки
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

				formValidation.isValid = valid;

				if(valid){
					window.location= "success.html";
				}
			},
			
		};

		formValidation.init();
	}());
});

	