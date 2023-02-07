import React , {useState, useEffect,useRef} from 'react'

function TodoForms(props) {
    const[input,setInputs]=useState(props.edit ? props.edit.value:'');

     const inputRef=useRef(null)

     useEffect(()=>{
        inputRef.current.focus()
     })


    const handleChange=e =>{
        setInputs(e.target.value);
    }

    const handleSubmit=e =>{
        e.preventDefault();
    

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text:input
        });

        setInputs('');

        
    };

  return (
    
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input
         type='text'
        placeholder='Update your task' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />

        <button className='todo-button'>Update</button>
        </>):
        (
         <>   
        <input type='text'
        placeholder='Add a task :)' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />

        <button className='todo-button'> Add todo</button>
        </>)}

        
    </form>
  )
}

export default TodoForms