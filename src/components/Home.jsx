import React from 'react'
import vg from '../img/2.webp'
import {AiFillGoogleCircle ,AiFillAmazonCircle ,AiFillInstagram ,AiFillFacebook } from 'react-icons/ai'

function Home() {
  return (
    <>
    <div className='home' id='home'>
        <main>
         <h1>
            Ghousetech
        </h1>
        <p>one stop solution for all your problem</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} />
      <div>
        <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat a fugit, aliquid magnam aspernatur nihil autem, id ut maiores non, aliquam iusto porro! Quidem provident, aut ipsa iste velit deleniti?
        </p>
     
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla doloremque neque officia? Minima qui expedita eveniet aut, ratione dicta maxime animi officia. Officia eius at tempora qui. Blanditiis praesentium eligendi et adipisci eaque odit qui repudiandae ad quo quod similique iusto non sapiente dolore fuga ducimus sunt cupiditate quos, deleniti itaque harum commodi sed temporibus. Error soluta nostrum ipsam, laudantium non vero dolor tempora.
        </p>
      </div>
    </div>
    <div className='home4' id='brands'>
      <div>
        <h1>brands</h1>
        <article>
          <div style={{animationDelay:'0.3s'}}>
          <AiFillGoogleCircle />
          <p>google</p>
          </div>
          <div style={{animationDelay:'0.6s'}}>
           <AiFillAmazonCircle />
            <p>amazon</p>
          </div>
          <div style={{animationDelay:'0.9s'}}>
           <AiFillInstagram />
            <p>instagram</p>
          </div>
          <div style={{animationDelay:'1.2s'}}>
            <AiFillFacebook />
            <p>facebook</p>
          </div>
        </article>
      </div>
    </div>
    </>
    
  )
}

export default Home