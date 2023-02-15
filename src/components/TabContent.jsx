import React from 'react'
import './TabContent.css'

const TabContent = ({id, activeTab, children}) => {
  return (
    activeTab === id ? <div className='TabContent row'>
        {children}
    </div>
    :null
  )
}

export default TabContent