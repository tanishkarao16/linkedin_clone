import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) => {
       return <div className='widget_article'>
            <div className='widget_articleLeft'>
                <FiberManualRecord />
            </div>
            <div className='widget_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    };
  return (
    <div className="widgets">
     <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
     </div>
   
    {newsArticle('News', 'Latest news from LinkedIn')}

    </div>
  )
}

export default Widgets
