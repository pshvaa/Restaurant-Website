import React, {useState} from 'react'
import AccordionItem from './AccordionItem'
import './Accordion.css'

import faqData from '../faqs.json'

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (a) =>{
    if(clicked === a){
        return setClicked("0");
      }

    setClicked(a);
  }
  return (
    <ul className="accordion">
    {faqData.map(({ question, answer }) => (
      <AccordionItem question={question} answer={answer} />
    ))}
  </ul>
  )
}

export default Accordion