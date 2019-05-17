/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
			
		var html = document.documentElement;

		/**
		 * @name getScrollingElement
		 * @return {element}
		 * @since 2018-07-13
		 */
		window.getScrollingElement = function() {
			var body = document.body,
				y = document.getElementById('y'),
				result = [html, body];
			
			//y가 없을 때
			if(!y) {
				y = document.createElement('span');
				y.id = 'y';

				body.appendChild(y);
			}
			
			var yStyle = y.style;
			
			yStyle.width = 0;
			yStyle.height = (screen.height + 1) + 'px';
			yStyle.display = 'inline-block';
			
			for(var i = 0; i < result.length; i++) {
				var element = result[i],
					scrollTop = element.scrollTop;

				element.scrollTop += (scrollTop > 0) ? -1 : 1;
				
				//스크롤 위치 변경 후 원래 위치와 같을 때
				if(element.scrollTop === scrollTop) {
					result.splice(i, 1);
					i--;
				}else{
					element.scrollTop = scrollTop;
				}
			}
			
			var resultLength = result.length;
			
			//결과가 1개일 때
			if(resultLength === 1) {
				result = result[0];
			
			//결과가 2개일 때
			}else if(resultLength === 2) {
				result = body;	
			}

			yStyle.display = 'none';

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}