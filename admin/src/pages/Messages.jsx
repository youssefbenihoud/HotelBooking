import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const url = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem('token');
    const headers = { token };

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`${url}/api/message/list`, { headers });
            if (response.data.success) {
                setMessages(response.data.data);
            } else {
                toast.error("Error fetching messages");
            }
        } catch (error) {
            toast.error("Error fetching messages");
        }
    };

    useEffect(() => {
        if(token) {
            fetchMessages();
        }
    }, [token]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
            <div className="space-y-4">
                {messages.map((message) => (
                    <div key={message._id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <h3 className="text-lg font-semibold">{message.name}</h3>
                            <p className="text-sm text-gray-500">{message.email}</p>
                        </div>
                        <p className="text-gray-700">{message.message}</p>
                        <p className="text-xs text-gray-400 mt-2 text-right">{new Date(message.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages;
