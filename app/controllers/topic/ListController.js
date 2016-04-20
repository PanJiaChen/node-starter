const router = require('express').Router();
const Topic = require('../../models/topic.js');

router.get('/', (req, res) => {
	Topic.get(req.params.id, function (err, topic) {
	    res.render('topic/list', {
	        title: 'topic',
	        topicList: JSON.parse(topic.body).results
	    })
	  })
})

module.exports = {
    router,
}
