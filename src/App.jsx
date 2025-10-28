import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto bg-amber-50 
                      rounded-full h-80 w-80 flex 
                      justify-center items-center relative'>
          <h1 className='text-blue-400 font-bold text-7xl'>{count}</h1>
          
            <button 
                    onClick={()=> setCount(count+1)}
                    type='button' 
                    id='addBtn' 
                    className=' bg-blue-500 hover:bg-blue-700 
                                text-white font-bold rounded text-xl
                                  h-10 w-15 flex items-center absolute left-0 -translate-x-1/2
                                  justify-center'>+1</button>
            <button
                      onClick={()=> setCount(count-1)}
                      type='button' 
                      id='addBtn' 
                      className=' bg-blue-500 hover:bg-blue-700 
                                  text-white font-bold rounded text-xl
                                    h-10 w-15 flex items-center absolute right-0 translate-x-1/2
                                    justify-center'>-1</button>
          
            <button 
                    onClick={()=> setCount(0)}
                    type='button' 
                    id='addBtn' 
                    className=' bg-blue-500 hover:bg-blue-700 
                                text-white font-bold rounded text-xl
                                  h-10 w-15 flex items-center absolute bottom-0 translate-y-1/2
                                  justify-center '>Reset</button>
      </div>
      
    </>
  )
}

export default App


{/* 
        
        <div className='flex justify-between'>
          
          
        </div>
        
        <div className='flex justify-center'>
          <button 
                  onClick={()=> setCount(0)}
                  type='button' 
                  id='addBtn' 
                  className=' bg-blue-500 hover:bg-blue-700 
                              text-white font-bold rounded-full 
                                h-10 w-15 flex items-center justify-center'>Rest</button>
        </div> */}