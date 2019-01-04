const { Controller } = require('egg')

class NewsController extends Controller {
	async index () {
		const news = await this.ctx.service.news.fetch()
		await this.ctx.render('news.ejs', { news })
	}
}

module.exports = NewsController