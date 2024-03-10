import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import img from './bg.png'; 

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(data);
    });
    return () => unsubscribe();
  }, []);

  const addMessage = () => {
    if (newMessage.trim() !== '' && username.trim() !== '') {
      firestore.collection('messages').add({ text: newMessage, username: username });
      setNewMessage('');
      setUsername('');
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundImage: `url(${img})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', fontSize: '2rem' }}>Message Board</h1>
      <div style={{ marginBottom: '20px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridGap: '20px' }}>
        {messages.map(message => (
          <div key={message.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', fontSize: '1.2rem', position: 'relative' }}>
            <span>{message.username}: {message.text}</span>
            <button 
              style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', outline: 'none' }}
              onClick={() => firestore.collection('messages').doc(message.id).delete()}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ padding: '10px', marginRight: '10px', width: '200px', borderRadius: '5px', border: '2px solid #ccc', fontSize: '1rem', outline: 'none' }} 
          placeholder="Your username"
        />
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          style={{ padding: '10px', marginRight: '10px', width: '300px', borderRadius: '5px', border: '2px solid #ccc', fontSize: '1rem', outline: 'none' }} 
          placeholder="Type your message here"
        />
        <button 
          onClick={addMessage} 
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1rem', outline: 'none' }}
        >
          Add Message
        </button>
      </div>
    </div>
  );
}; 

export default MessageBoard;
