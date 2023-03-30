import { Router } from 'express';
import { getFlight } from '../controllers/flight';

const router = Router();


router.get('/:id', getFlight);


export default router;
