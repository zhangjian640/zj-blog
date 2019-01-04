/**
 *
 * @param app
 * router 路由中间件的router实例，可以在它上面定义规则
 * controller 控制器的容器
 */
module.exports = (app) => {
	const { router, controller } = app
	router.get('/', controller.home.index)
	router.get('/news', controller.news.index)
}