import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import './Chat.css';
import Back from '@/img/BackArrow.svg';
import Chat2 from '@/img/ChatIcon.svg';
import Send from '@/img/SendIcon.svg';

const socket = io('http://localhost:5001', {
  withCredentials: true,
  transports: ['websocket']
});

export default function Chat() {
    const [messages, setMessages] = useState([
        { username: 'Taller Awaq Ayllus', message: 'Bienvenido al Taller Awaq Ayllus. ¿En qué te puedo ayudar?', sent: false }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Conectado al servidor');
        });

        socket.on('chat message', (data) => {
            console.log('Mensaje recibido del servidor:', data);
            setMessages(prevMessages => [...prevMessages, { ...data, sent: false }]);
        });

        socket.on('connect_error', (error) => {
            console.error('Error de conexión:', error);
        });

        return () => {
            socket.off('chat message');
            socket.off('connect');
            socket.off('connect_error');
        };
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            const newMessage = { username: 'Usuario', message: inputMessage, sent: true };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            socket.emit('chat message', inputMessage);
            setInputMessage('');
        }
    };

    return (
        <div className='chatAll'>
            <div className='chatUp'>
                <Link to="/customer_service">
                    <img src={Back} alt="Back" />
                </Link>
                <div className='chatUp_Title'>
                    <img src={Chat2} alt="Chat" />
                    <h1>Chat con Taller Awaq Ayllus</h1>
                </div>
            </div>
            <div className='chatMiddle'>
                <div className='chatMiddle_boxes'>
                    {messages.map((msg, index) => (
                        msg.sent ? (
                            <div key={index} className='chatMiddle_Unique2'>
                                <div className='chatMiddle_textBoxes2'>
                                    <h1>{msg.message}</h1>
                                </div>
                                <div className='chatMiddle_textDown2'></div>
                            </div>
                        ) : (
                            <div key={index} className='chatMiddle_Unique'>
                                <div className='chatMiddle_textBoxes'>
                                    <h1>{msg.message}</h1>
                                </div>
                                <div className='chatMiddle_textDown'></div>
                            </div>
                        )
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className='chatDown'>
                <form onSubmit={handleSubmit} className='chatDown_Response'>
                    <input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder='Mandar mensaje a Taller Awaq Ayllus'
                    />
                    <button type="submit">
                        <img src={Send} alt="Send" />
                    </button>
                </form>
            </div>
        </div>
    );
}