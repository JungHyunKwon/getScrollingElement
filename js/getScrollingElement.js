/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		var _html = document.documentElement,
			_scrollingElement = document.scrollingElement;

		/**
		 * @name getScrollingElement
		 * @return {element}
		 * @since 2018-07-13
		 */
		window.getScrollingElement = function() {
			var result = _scrollingElement;
			
			//요소가 아닐 때
			if(!result) {
				var body = document.body,
					element = document.getElementById('element');

				result = [_html, body];
				
				//요소가 없을 때
				if(!element) {
					element = document.createElement('div');
					element.id = 'element';

					body.appendChild(element);
				}
				
				var style = element.style;
				
				style.display = 'block';
				
				for(var i = 0; i < result.length; i++) {
					var value = result[i],
						scrollTop = value.scrollTop;

					value.scrollTop += (scrollTop > 0) ? -1 : 1;
					
					//스크롤 위치 변경 후 원래 위치와 같을 때
					if(value.scrollTop === scrollTop) {
						result.splice(i, 1);
						i--;
					}else{
						value.scrollTop = scrollTop;
					}
				}
				
				style.display = 'none';

				var resultLength = result.length;
				
				//결과가 1개일 때
				if(resultLength === 1) {
					result = result[0];
				
				//결과가 2개일 때
				}else if(resultLength === 2) {
					result = body;	
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}