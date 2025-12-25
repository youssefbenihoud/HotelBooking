import messageModel from '../models/messageModel.js';

const createMessage = async (req, res) => {
    const { name, email, message } = req.body;
    const newMessage = new messageModel({ name, email, message });
    try {
        await newMessage.save();
        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error sending message' });
    }
};

const listMessages = async (req, res) => {
    try {
        const messages = await messageModel.find({});
        res.json({ success: true, data: messages });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error fetching messages' });
    }
};

export { createMessage, listMessages };
