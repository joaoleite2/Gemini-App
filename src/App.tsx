import React from 'react';

const App = () => {
  return (
    <form className='p-10'>
      <input 
        type='text'
        placeholder='Type a message'
        className='bg-gray-200 px-4 py-2 outline-none focus:ring-2 ring-blue-500'
      />
    </form>
  )
}

export default App
