/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import "./Home.css"
import { about, book, expertise, gallery, header, whyus } from '../../Static/db'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from "react-icons/hi2"
import Swipers from '../../Components/Swipers/Swipers'
import {motion} from "framer-motion"
const Home = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.5,}}}
    
    className='home' id="home">
      {
        header.map((data, index) => {
          return (
            <div className='home_container' key={index}>
              <div className='home_title'>
                <h1>{data.title}</h1>
                <p>{data.sub}</p>
              </div>
              <div className='home_video'>
                <marquee>
                  {data.video.map((video, index) => {
                    return (
                      <video key={index} autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                      </video>
                    )
                  })}
                </marquee>
              </div>

            </div>
          )
        })
      }

      {/*section  Our Expertisee */}
      <div className='home_expertise'
      
       >
        <div className='home_expertise_container'>
          {
            expertise.map((expertise, index) => {
              return (
                <div className='home_expertise_details' key={index}>
                  <img src={expertise.img} alt={expertise.title} />
                  <div className='home_expertise_links'>
                    <h5>{expertise.title}</h5>
                    <Link to={"/service"} >{expertise.btn}</Link>
                  </div>
                </div>

              )
            })
          }

        </div>

      </div>
      {/* section about */}
      <div className='home_about'>

        {
          about.map((about, index) => {
            return (
              <div className='home_about_container' key={index}
              
               >
                <div className='home_about_img'>
                  <img src={about.img} alt='' />
                </div>
                <div className='home_about_details'>
                  <h5><HiArrowLongRight />{about.title}</h5>
                  <p>{about.sub}</p>
                </div>

              </div>

            )
          })
        }
      </div>
      {/* section whychoose us  */}
      <div className='home_whyus'
     
      >
        {
          whyus.map((whyus, index) => {
            return (
              <>
                <div className='home_whyus_title' key={index}>
                  <h5><HiArrowLongRight />{whyus.title}</h5>
                </div>
                <div className='home_whyus_container'>
                  {
                    whyus.step.map((step, index) => {
                      return (
                        <>
                          <div className='home_whyus_card' key={index}>
                            <img src={step.icon} alt='' />
                            <span>{index + 1}</span>
                            <p>{step.sub.slice(0, 70)}</p>

                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </>
            )
          })
        }

      </div>
      {/*section  gallery*/}
      <div className='home_gallery'   
      >
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
      {/* Testimonials */}
      <div className='home_testimonials'
     
       >
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
                      <Link to={`/${book.contact}`}>{book.contact}</Link>
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
    </motion.div >
  )
}

export default Home