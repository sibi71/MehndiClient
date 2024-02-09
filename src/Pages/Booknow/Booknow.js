import React, { useState } from 'react'
import "./Booknow.css"
import { useParams, Navigate, Link } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { book, service } from '../../Static/db';
import { FaAngleLeft } from "react-icons/fa";

const Booknow = () => {



  const { title } = useParams();

  const findbooknow = service.map((data) => {
    return data.category.find((data) => {
      return data.title === title
    })
  })

  return (
    <div className='booknow'>
      <div className='booknow_title'>
        <h5>Book Your Payment</h5>
      </div>
      <div className='booknow_continer'>
        {
          findbooknow.map((category, index) => {
            return (
              <>
                <div className='booknow_payment'>
                  <div className='booknow_payment_img'>
                    <img src={category.img} alt='' />
                  </div>
                  <div className='booknow_payment_details'>
                  <div className='booknow_payment_title'>
                          <h5>{category.title}</h5>
                          <p>{category.sub}</p>
                      </div>
                      <div className='booknow_payment_check'>
                        <h5>{category.Prices}</h5>
                        <button>Pay</button>
                      </div>
                      <Link to={"/service"} className='booknow_back'><FaAngleLeft /> </Link>

                  </div>

                </div>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Booknow