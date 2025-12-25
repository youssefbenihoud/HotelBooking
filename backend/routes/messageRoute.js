import express from 'express';
import { createMessage, listMessages } from '../controllers/messageController.js';
import adminAuth from '../middleware/adminAuth.js';

const messageRouter = express.Router();

messageRouter.post('/create', createMessage);
messageRouter.get('/list', adminAuth, listMessages);

export default messageRouter;
