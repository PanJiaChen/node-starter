const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('topic/list', {
			title: 'node',
			content: '哈哈'
		});
})

module.exports = {
    router
}
