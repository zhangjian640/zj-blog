module.exports = (options, app) => {
	return async function (ctx, next) {
		const userAgent = ctx.get('user-agent')
		const matched = options.browser.some(item => item.test(userAgent))
		if (matched) {
			ctx.status = 403
			ctx.body = '无权访问'
		} else {
			await next()
		}
	}
}