(function($){
	$.fn.baztyBox = function(options){
		var bzBoxSettings = $.extend({
			width:'auto',
			height:'auto'
		}, options);

		var bazBox = {
			bzBoxState:'hidden',
			bzBoxHref : '#',
			bzBoxImage : '',
			bzBoxCaption : '',
			bzShadeBox:'',
			bzModalBox:'',
			bzBoxClose: function(e){
				bazBox.bzShadeBox.removeClass('active').remove();
				bazBox.bzModalBox.removeClass('active').remove();
				bazBox.bzBoxState = 'hidden';
			},
			bzCenterBox:function(e){
				var windH,
					windW,
					boxH,
					boxW,
					boxSizes;

				function sizes(){
					windH = $(window).height();
					windW = $(window).width();
					bazBox.bzModalBox.css({'width':'auto','height':'auto'});
					boxH = bazBox.bzModalBox.height();
					boxW = bazBox.bzModalBox.width();
					boxSizes = {
						top: (windH - boxH)/2,
						left: (windW - boxW)/2,
					}
				}
				$(window).resize(function(){
					sizes();
					bazBox.bzModalBox.css({'top':boxSizes.top,'left':boxSizes.left});
				});
				sizes();
				bazBox.bzModalBox.css({'top':boxSizes.top,'left':boxSizes.left});
			}
		};

		// Función para checar estado de baztyBox
		this.bzBoxState = function(){
			console.log(bazBox.bzBoxState);
		}

		// Gatillando acción de baztyBox
		this.click(function(e){
			bazBox.bzShadeBox = $('<div />').appendTo('body').addClass('bzShadeBox');
			bazBox.bzModalBox = $('<div />').appendTo('body').addClass('bzModalBox');
			bazBox.bzBoxState = 'visible';
			if($(this).data('bzboximage').length > 0){
				bazBox.bzBoxImage = $(this).data('bzboximage');
				//console.log(bzBoxImage);
			}



				bazBox.bzModalBox.append('<div id="bzContent"><img src="'+ bazBox.bzBoxImage +'" /></div>');
				bazBox.bzCenterBox();
				window.setTimeout(function(){
					bazBox.bzShadeBox.addClass('active');
					bazBox.bzModalBox.addClass('active');
				},500);



			if($(this).data('bzboxcaption').length > 0){
				bazBox.bzBoxCaption = $(this).data('bzboxcaption');
				if($(this).data('bzboxhref').length > 0){
					bzBoxHref = $(this).data('bzboxhref');
					bazBox.bzModalBox.find('#bzContent').append('<a class="bzLink" href="'+bazBox.bzBoxHref+'">'+bazBox.bzBoxCaption+'</a>');
				}
			}
			bazBox.bzShadeBox.click(function(){
				if(bazBox.bzBoxState == 'visible'){
					bazBox.bzBoxClose();
				}
			});
			return e.preventDefault();
		});




		this.initialize = function() {
			console.log('iniciando');
			return this;
		};
		return this.initialize();

	}
}(jQuery));
