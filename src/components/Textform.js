import React, { useState } from 'react'


export default function Textform() {
  const bodystyl = {
    backgroundColor: '#3D4E78',
    height: '100vh'
  }
  const divStyle = {
    // marginTop: '20px',
    marginLeft: '525px',
    heigth: '530px',
    width: '450px'
  }
  const btnStyle = {
    // marginTop: '20px',
    marginLeft: '205px',
    heigth: '20px',
    width: '200px'
  }
  const [text, setText] = useState('')

  let handleonchange = (event) => {
    setText(event.target.value);
  }
  let handleUpperCase = () => {
    setText(text.toUpperCase());
  }
  let handleLowerCase = () => {
    setText(text.toLowerCase());
  }
  let handleCopyText = () => {
    navigator.clipboard.writeText(text)
  }
  let handleClearText = () => {
    setText('');
  }
  let RemoveExtraSpaces = () => {
    let midtext = text.replace(/\s+/g, '');

    setText(midtext);
  }
  return (
    <div style={bodystyl} id='textform'>
      <div style={divStyle} class="d-flex flex-column justify-content-center">
        <label for="exampleFormControlTextarea1" class="form-label text-white fw-bold fs-4 mt-3" id = 'heading'>Enter Text to Analyze</label>
        <textarea style={{ height: '250px', width: '500px' }} class="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
        <div style={btnStyle} class="d-flex justify-content-center">
          <button type="button" onClick={handleUpperCase} class="btn btn-primary mx-3 mt-4">ConvertToUpperCase</button>
          <button type="button" onClick={handleLowerCase} class="btn btn-primary mx-3 mt-4">ConvertTolowerCase</button>
          <button type="button" onClick={handleCopyText} class="btn btn-primary mx-3 mt-4">CopyText</button>
          <button type="button" onClick={handleClearText} class="btn btn-primary mx-3 mt-4">ClearText</button>
          <button type="button" onClick={RemoveExtraSpaces} class="btn btn-primary mx-3 mt-4">RemoveExtraSpaces</button>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <label style={{ marginLeft: '400px', marginTop: '35px' }} for="exampleFormControlTextarea1" class="form-label text-white fw-bold fs-2" >Words and Characters</label>
        <label style={{ marginLeft: '400px', marginTop: '5px' }} for="exampleFormControlTextarea1" class="form-label text-white" >{`${text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and ${text.length} Characters`}</label>

        <label style={{ marginLeft: '400px', marginTop: '35px' }} for="exampleFormControlTextarea1" class="form-label text-white fw-bold fs-2" >Preview</label>
        <label style={{ marginLeft: '400px', marginTop: '5px' }} for="exampleFormControlTextarea1" class="form-label text-white" >
          {text}
        </label>

      </div>

      <label style={{ marginLeft: '400px', marginTop: '5px' }} for="exampleFormControlTextarea1" class="form-label text-white" ></label>
    </div>
  )
}
