import express from 'express';
import { getClients } from '../Controllers/clientController.js'

const router = express.Router();

router.get('/clientes', getClients);

export default router;