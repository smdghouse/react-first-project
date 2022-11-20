import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <main>
        <h1>contact us</h1>
        <form >
          <div>
            <label>name</label>
            <input type="text" required placeholder='enter your name' />
          </div>
          <div>
            <label >email</label>
            <input type="text" required placeholder='enter your email' />
          </div>
          <div>
            <label >Text</label>
            <input type="text" required placeholder='tell me about us' />
          </div>
          <button>send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact