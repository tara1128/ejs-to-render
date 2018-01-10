/*
  pre.js for www
  Before any page loaded in.
  Latest modified 2018-01-09 15:05
*/

(function(){
  console.log('pre.js is working ...');
  
function cookiePub(name, value, options) {if (typeof value != 'undefined') {options = options || {};if (value === null) {value = '';options.expires = -1;}var expires = '';if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {var date;if (typeof options.expires == 'number') {date = new Date();date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));} else {date = options.expires;}expires = '; expires=' + date.toUTCString();}var path = options.path ? '; path=' + (options.path) : '';var domain = options.domain ? '; domain=' + (options.domain) : '';var secure = options.secure ? '; secure': '';document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');} else {var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));if (arr != null) {return decodeURIComponent(arr[2]);}return null;}};
var cookieLang = cookiePub('lang'),
	browserLang = (navigator.language ? navigator.language.toLowerCase() : navigator.browserLanguage.toLowerCase());
if (cookieLang && cookieLang != '') {
		browserLang = cookieLang;
}

if (browserLang == 'zh-cn') {
	location.href = '/zh-cn/';
} else if (browserLang == 'zh-tw' || browserLang == 'zh-hk') {
	location.href = '/zh-tw/';
} else if (/^ja/i.test(browserLang)) {
	location.href = '/ja-jp/';
} else if (/^ko/i.test(browserLang)) {
	location.href = '/ko-kr/';
} else if (/^es/i.test(browserLang)) {
	location.href = '/es-es/';
} else if (/^ru/i.test(browserLang)) {
	location.href = '/ru-ru/';
} else if (/^pt/i.test(browserLang)) {
	location.href = '/pt-pt/';
} else if (/^fr/i.test(browserLang)) {
	location.href = '/fr-fr/';
} else {
	location.href = '/en-us/';
}
	

})();
