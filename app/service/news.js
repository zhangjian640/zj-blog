const { Service } = require('egg')
class newsService extends Service{
	async fetch () {
		// this.config.news 是config/config.default.js的属性
		let { data } = await this.ctx.curl(this.config.news.url)
		data = data.toString()
		let news = []
		const reg = /<a class='topic_title' href='([^']+)' title='([^']+)'>[\s\S]+?<\/a>/g
		data.replace(reg, (matched, url, title) => {
			news.push({
				title,
				url: this.config.news.url + url,
				// helper 是extend/helper.js，挂载在this.ctx.helper上
				// helper.relative(item.time)
				time: this.ctx.helper.relative(new Date())
			})
		})
		return news
	}
}

module.exports = newsService