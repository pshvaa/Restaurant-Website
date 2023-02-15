import React, {useState} from 'react'
import './AccordionItem.css'
import '../faqs.json'

const AccordionItem = ({ question, answer}) => {
const [isActive, setIsActive] = useState(false);
//   const { question, answer } = faq;
  return (
    <li className="accordion-item">
      <div className="accordion-toggle recipes-inline" onClick={() => setIsActive(!isActive)}>
        <h3>{question}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content recipes-inline">{answer}</div>}
    </li>
  )
}

export default AccordionItem