/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import "./Contact.css"
import img from "../../img/5.jpg"
import { book } from '../../Static/db'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div className='contact'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:.5}}}
    >
        <div className='contact_title'>
            <h5>Thank you for considering </h5>
        </div>
        <div className='contact_container'>
                <div className='contact_img'>
                    <img src={img} alt='' />
                </div>
                <div className='contact_from'>
                    <form>
                        <input type='text' placeholder='Enter your Name' />
                        <input type='Email' placeholder='Enter your Email' />
                        <input type='Number' placeholder='Enter your Number' />
                        <textarea rows={6} cols={50} className="contact_message"placeholder='message' />
                        <button>Submit</button>
                    </form>
                </div>
        </div>
        {/* google map */}
        <div className='contact_map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31426.8776109756!2d78.7611544748725!3d10.069584117423943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005d8b08de4f3b%3A0x1f24fc0ab84584f8!2sKaraikudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707491256372!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        {/* end google map */}
             {/* elearning */}
      <div className='home_book'>
        {
          book.map((book, index) => {
            return (
              <>
                <div className='home_book_container' key={index}>
                  <div className='home_book_title' >
                    <h5>{book.title}</h5>
                    <p>{book.sub}</p>
                    {
                      book.mediaicon.map((icon, index) => {
                        return (
                          <>
                            <a href={icon.link} key={index} target='blank' className='home_book_mediaicon'>{icon.icons}</a>
                          </>
                        )
                      })
                    }
                    <div className='home_book_btn'>
                      <Link to={"/service"}>{book.service}</Link>
                    </div>
                  </div>
                  <div className='home_book_details'>
                    <marquee direction="left">
                      {book.img.map((video, index) => {
                        return (
                          <img src={video.bookImgs} alt='' key={index} />
                        )
                      })}
                    </marquee>
                  </div>

                </div>
              </>
            )
          })
        }
      </div>
      {/* end learning */}

    </motion.div>
  )
}

export default Contact