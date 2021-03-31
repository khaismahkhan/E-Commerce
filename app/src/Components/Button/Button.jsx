import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import "./Button.css"

const Button = ({children, background="orange", color="white", fontWeight, style={} }) => {
    return <button className="button" style={{color, background, ...style}}>
        <Paragraph color fontSize="60" fontWeight={fontWeight}>{children}</Paragraph>
    </button>
    
}

export default Button
