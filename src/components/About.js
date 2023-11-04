// import React from 'react'
import React from 'react'

export default function About() {
    const aboutstyl={
        marginLeft:'300px',
        width:'800px',
        paddingTop:'50px',fontSize:'20px',
        fontWeight:'600'
    }
  return (
    <div style={aboutstyl} className='about' id ='abt'>
    <p>
    TextAnalyzer is a user-friendly and efficient tool that can be used for a wide range of purposes, like performing operations on entered text.
    <br/>
    It include some operations like text conversion from lower to upper or vice-versa,trimming the text and copying the text to clipboard.
    <br/>
    Application  Quickly determine the word and character count of your text, which is essential for various writing and formatting purposes.
    <br/>
    </p>
    </div>
  )
}
