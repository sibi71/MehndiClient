/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import "./Service.css"
import { book,service } from '../../Static/db'
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Service = () => {
    return (
        <div className='service'>
            <div className='service_title'>
                <div className='service_title_left'>
                <h5>Embark on a journey of elegance with our exclusive Mehndi services.</h5>
                <p> From timeless bridal designs to cultural celebrations, we bring the artistry of henna to life for your special moments</p>
                </div>
                <div className='service_title_img'>
                    <img src='https://lifestyleweblogs.com/wp-content/uploads/2023/06/full-front-hand-mehndi-design.jpg' alt='' />
                </div>
               
            </div>
            <div className='service_container'>
                {
                    service.map((service) => {
                        return (
                            <>
                                {
                                    service.category.map((category, index) => {
                                        return (
                                            <>
                                                <div className={`service_details service_details${index + 1}`} key={index}>
                                                    <div className={`service_img`}>
                                                        <img src={category.img} alt='' />
                                                    </div>
                                                    <div className='service_category_title'>
                                                        <h5>{category.title}</h5>
                                                        <p>{category.sub}</p>
                                                        <div className='service_price'>
                                                            <h5>{category.Prices}</h5>
                                                        </div>
                                                        <div className='service_highlights'>
                                                            <Accordion key={index} className='service_card'>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls={`panel${index + 1}-content`}
                                                                    id={`panel${index + 1}-header`}
                                                                >
                                                                    <Typography>{category.Highlightstitle}</Typography>
                                                                </AccordionSummary>
                                                                {
                                                                    category.Highlights.map((highlisgts, index) => {
                                                                        return (
                                                                            <>
                                                                                <AccordionDetails key={index} className='service_body'>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <Typography>
                                                                                                {highlisgts.line}
                                                                                            </Typography>
                                                                                        </li>
                                                                                    </ul>

                                                                                </AccordionDetails>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </Accordion>

                                                        </div>
                                                        <br></br>
                                                        <div className='service_benefits'>
                                                            <Accordion key={index} className='service_card'>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls={`panel${index + 1}-content`}
                                                                    id={`panel${index + 1}-header`}
                                                                >
                                                                    <Typography>{category.Benefitstitle}</Typography>
                                                                </AccordionSummary>
                                                                {
                                                                    category.Benefits.map((benefits, index) => {
                                                                        return (
                                                                            <>
                                                                                <AccordionDetails key={index} className='service_body'>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <Typography>
                                                                                                {benefits.line}
                                                                                            </Typography>
                                                                                        </li>
                                                                                    </ul>

                                                                                </AccordionDetails>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </Accordion>

                                                        </div>
                                                        <div className='serive_book_btn'>
                                                            <Link to={`${category.title}`}>{category.btn}</Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }

            </div>


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

        </div>
    )
}

export default Service