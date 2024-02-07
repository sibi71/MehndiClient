import React from 'react'
import "./Footer.css"
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { footer } from '../../../../clients/src/Static/db'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_container'>
                {
                    footer.map((footer, index) => {
                        return (
                            <>
                                <div className='footer_title' key={index}>
                                    <img src={footer.logo} alt='' />
                                    <br></br>
                                    <div className='footer_follow'>
                                        <h5>{footer.follow.title} <HiArrowLongRight /></h5>
                                        <p>
                                            {
                                                footer.follow.icon.map((icon, index) => {
                                                    return (
                                                        <a key={index} href={`${icon.link}`} target='blank' >{icon.icons}</a>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className='footer_company'>

                                    <h5>use full links </h5>


                                    <ul>
                                        {
                                            footer.navlink.map((navlink, index) => {
                                                return (
                                                    <>
                                                        <li key={index}> <Link to={navlink.nav} >{navlink.nav}</Link></li>

                                                    </>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>

                                <div className='footer_fullink'>
                                    <h5>{footer.contact.title}</h5>

                                    <p>{footer.contact.adds}</p>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer