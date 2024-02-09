/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import "./Learn.css"
import { book, gallery, learning } from '../../Static/db'
import { Link } from 'react-router-dom'
import Swipers from '../../Components/Swipers/Swipers'
const Learn = () => {
    return (
        <div className='learn'>
            {
                learning.map((learn, index) => {
                    return (
                        <>
                            <div className='learn_container' key={index}>
                                <div className='learn_title' >
                                    <h5>{learn.title}</h5>
                                    <p>{learn.sub}</p>
                                    <br></br>
                                    <a href='#course' >{learn.btn}</a>
                                </div>
                                <div className='learn_img'>
                                    <img src={learn.img} alt="" />
                                </div>

                            </div>
                            {/*section  gallery*/}
                            <div className='home_gallery' >
                                {/* <div className='home_gallery_title'> <HiArrowLongRight /><h5>Explore our Gallery</h5></div> */}
                                {
                                    gallery.map((gallery, index) => {
                                        return (
                                            <div className='home_gallery_container' key={index}>
                                                <div className='home_video'>
                                                    <marquee direction="right" className="home_gallery_marquee">
                                                        {gallery.video.map((video, index) => {
                                                            return (
                                                                <video key={index} autoPlay muted loop>
                                                                    <source src={video} type="video/mp4" />
                                                                </video>
                                                            )
                                                        })}
                                                    </marquee>
                                                </div>
                                                <div className='home_gallery_title'>
                                                    <h5>{gallery.title}</h5>
                                                    <p>{gallery.sub}</p>
                                                    <Link to={"/gallery"} >{gallery.btn}</Link>
                                                </div>

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            {/* end gallery */}

                            {/* section course details */}
                            <div className='learn_course' id='course'>
                                <div className='learn_course_container'>
                                    {
                                        learn.Course.map((course, index) => {
                                            return (
                                                <>
                                                    <div className='learn_course_card' key={index}>

                                                        <h5>{course.title}</h5>
                                                        <div className='learn_course_description'>
                                                            <h6>description :</h6>
                                                            <ul key={index}>
                                                                {course.description.map((des, index) => {
                                                                    return (
                                                                        <>

                                                                            <li key={index}>{des.line}</li>

                                                                        </>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div className='learn_course_payment'>
                                                            {course.price ? (
                                                                <>
                                                                    <h5>
                                                                        {course.price}
                                                                    </h5>
                                                                </>
                                                            ) : ""
                                                            }
                                                            <button>{course.btn}</button>

                                                        </div>

                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                </div>

                            </div>
                            {/* end course details */}

                            {/* Testimonials */}
                            <div className='home_testimonials'>
                                <div className='home_testimonials_title'>
                                    <p>What Client Say's About Our Services</p>
                                </div>
                                <Swipers />
                            </div>
                            {/* enf Testimonials */}

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
                      <Link to={`${book.contact}`}>{book.contact}</Link>
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
                        </>
                    )
                })
            }

        </div>
    )
}

export default Learn