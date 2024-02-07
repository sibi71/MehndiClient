import React from 'react'
import "./Faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faq } from '../../Static/db';
const Faq = () => {
    return (
        <div className='faq'>
            <div className='faq_title'>
                <h5>Faq</h5>
            </div>
            {
                faq.map((faq, index) => {
                    return (
                        <>
                            <Accordion key={index} className='faq_card'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index+1}-content`}
                                    id={`panel${index+1}-header`}
                                >
                                    <Typography>{faq.que}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                       {faq.ans}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Faq