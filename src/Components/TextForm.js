import React,{useState} from 'react';
//State is basically the state of the current 
//use state hook: helps in making a state

export default function TextForm(props){
    //On click-changing state on clicking
    const handleUpClick=(()=>{
        //console.log('UPPER CLICKED :'+text);
        let newtext=text.toUpperCase();
        console.log(newtext);
        setText(newtext);
        props.showAlert("Converted to Upper case","success");
    })
    const handleLoClick=(()=>{
        //console.log('UPPER CLICKED :'+text);
        let newtext=text.toLowerCase();
        console.log(newtext);
        setText(newtext);
        props.showAlert("Converted to Lower case","success");
    })
    
    const handleClearClick=(()=>{
        //console.log('UPPER CLICKED :'+text);
        let newtext='';
        console.log(newtext);
        setText(newtext);
        props.showAlert("Textbox Cleared!!","success");
    })
    const speak=(()=> {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Reading text...","success");
    })
    
    //Event Handling
    const handleOnChange=(event)=>{
      //console.log('On Change');
      setText(event.target.value);
     }
     /*const changecolor=(()=>{
        if(myStyle.backgroundColor==='white')
        {
            setmyStyle({
                color:'white',
              backgroundColor:'black'
            })
            setColor('Light');
        }
        else{
            setmyStyle({
                color:'black',
              backgroundColor:'white'
            })
            setColor('Dark');
        }
     })*/
    
/*const [myStyle, setmyStyle] = useState({
    color:'black',
    backgroundColor:'white'
})*/
const [text,setText]=useState('Enter text here ');
//const [bgcolor,setColor]=useState('Dark');

//text heree is a state variable-it belongs to a state
//text='hsjbjb '//wrong way to set the state
//setText('New Text');
return (
    <>
<div className='container' >
<h1 className=' heading mx-3' style={{color: "#94196f"}}>{props.heading}</h1>
<div className="container mb-3" >

<textarea className="form-control" value={text} onChange={handleOnChange} style= {(props.mode==='light')?{backgroundColor:'white', color:'black'}:{backgroundColor:'black', color:'white'}} id="mybox"  rows="8"></textarea>

</div>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button type="button" disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button type="submit" disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={speak}>Speak</button>

</div>
<div className="container my-3"  style= {(props.mode==='light')?{backgroundColor:'white', color:'black'}:{backgroundColor:'black', color:'white'}}>

    <h2>Your Text Summary</h2>
    <p>Total Words : {text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
    <p>Total Characters : {text.length}</p>
    <p>You will read this in {0.008*(text.split(' ').length)} minutes</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
)
}

