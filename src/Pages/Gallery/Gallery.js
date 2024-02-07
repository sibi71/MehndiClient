/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { book, header } from '../../Static/db'
import "./Gallery.css"
import { Link } from 'react-router-dom'
import Imagelist from '../../Components/Imagelist/Imagelist'

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='gallery_title'>
                <h5>Gallery</h5>
            </div>

            <div className='gallery_container'>
                {
                    header.map((header, index) => {
                        return (
                            <>
                                <marquee key={index}>
                                    {header.video.map((video, index) => {
                                        return (
                                            <video key={index} autoPlay muted loop>
                                                <source src={video} type="video/mp4" />
                                            </video>
                                        )
                                    })}
                                </marquee>
                            </>
                        )
                    })
                }
            </div>
            {/* imagelist */}
            <div className='gallery_imagelist'>
                <Imagelist />

            </div>
            {/* end imagelist */}
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
                                            <Link to={book.service}>{book.service}</Link>
                                            <Link to={book.contact}>{book.contact}</Link>
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
            

        </div>
    )
}

export default Gallery