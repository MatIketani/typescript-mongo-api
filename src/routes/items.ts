import express from 'express';
import controllers from '../controllers/item';

const router = express.Router();

router.get('/', controllers.getAll);
router.get('/:id', controllers.getOne);

router.post('/create', controllers.create);

router.delete('/delete', controllers._delete);

export default router;