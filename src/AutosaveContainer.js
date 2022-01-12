import React, {useState} from 'react'
import TextareaComponent from './TextareaComponent'
import TimestampsComponent from './TimestampsComponent'

const AutosaveContainer = (props) => {
    const [ text, setText ] = useState('')
    const [ flag, setFlag ] = useState(true)
    const [ check, setCheck ] = useState(false)
    const array = ['never', 'cannot', 'not']

    const handleText = (e) => {
        const res = e.target.value
        if(!array.includes(res)){
            setText(res)
        } 
    }



    const showText = (data) => {
        setFlag(false)
        setText(data)
        setCheck(true)
    }

    const handleEdit = () => {
        setCheck(false)
        setTimeout(() =>{
            setFlag(true)
        }, 7000)
    }

    return(
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <TextareaComponent text={text} handleText={handleText} check={check} handleEdit={handleEdit}/>
            <TimestampsComponent text={text} flag={flag} showText={showText}/>
        </div>
    )
}
export default AutosaveContainer