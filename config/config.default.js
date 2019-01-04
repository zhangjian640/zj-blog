// 加密cookie，防止修改cookie
exports.keys = 'zj-blog'
// 配置中间件
exports.middleware = [
	'time',
	'ua'
]
exports.time={
	prefix: '本次请求共花了 '
}
exports.ua = {
	browser: [] // /Chrome/, /Firefox/
}
// 配置模板
exports.view = {
	defaultViewEngine: 'ejs', // 默认的渲染引擎
	mapping: {
		'.ejs': 'ejs' // 如果渲染的是.ejs模板文件的话，用ejs模板引擎来进行渲染
	}
}
// 配置页面的请求地址
exports.news = {
	url: 'https://cnodejs.org'
}