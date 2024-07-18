import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('Agora seu nome é Robert, se apresente dizendo que você é a partir de agora');
  const [send, setSend] = useState('');
  const [response, setResponse] = useState('');
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_KEY);
  
  const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
  
  useEffect(()=>{
    geminiResponse(message);
    setMessage('');
  },[send]);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setMessage('');
  }

  const geminiResponse = async (prompt:string) => {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    setResponse(text);
  }
  
  return (
    <section className='bg-[#121212] min-h-screen h-auto'>
      <form className='p-10' onSubmit={handleSubmit}>
        <input 
          value={message}
          onChange={event => setMessage(event.target.value)}
          type='text'
          placeholder='Type a message'
          className='text-gray-400 bg-[#2B2D30] px-4 py-2 outline-none focus:ring-2 ring-blue-500'
        />
        <button 
          className="text-white p-4 bg-gradient-to-l from-blue-700 to-red-600 rounded-md"
          type="submit"
          onClick={()=> setSend(message)}
        >Enviar</button>
      </form>
      <div className="text-white">{response}</div>
    </section>
  )
}

export default App
