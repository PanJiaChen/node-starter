const router = require('express').Router();
const Topic = require('../../models/topic.js');

router.get('/', (req, res) => {
	Topic.get(req.params.id, function (err, topic) {
		console.log(topic.body)
	    res.render('topic/list', {
	        title: 'topic',
	        content: topic.body
	    })
	  })
})

module.exports = {
    router
}
