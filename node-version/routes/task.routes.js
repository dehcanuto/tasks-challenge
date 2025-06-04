const router = require('express').Router();
const c = require('../controller/task.controller');

router.post('/', c.create);
router.get('/', c.findAll);
router.get('/:id', c.findOne);
router.put('/:id', c.update);
router.delete('/:id', c.remove);

module.exports = router