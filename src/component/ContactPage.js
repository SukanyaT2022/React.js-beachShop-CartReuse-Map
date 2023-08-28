import React, { useState } from 'react'

function ContactPage() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const [hi,setHi] = useState('Good morning')


    const handleSubmit=(e)=>{
e.preventDefault()
//preventDefault prevent default html form
console.log('Form Submitted:',{name, email, message})
alert('Succesfully Submitted')
    }
    // const handleHi=()=>{
    //     setHi('Bye')
    //     console.log("bye",hi)
    // }
  return (
    <>
  <h2>Contact Us</h2>
  {/* <form onSubmit={handleSubmit}>
<div>
    <label>Name</label>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
</div>
<div>
<label>Email</label>
    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div>
<label>Message</label>
    <textarea value={message} onChange={(e)=>setMessage(e.target.value)}/>
</div>
<button type='submit'>Submit</button>
  </form> */}
<div>
    <p>{hi}</p>
    <button onClick={()=>setHi("bye")}>Submit</button>
</div>
{/* button onClick
form onSubmit 
input onChange */}
    </>
  )
}

export default ContactPage