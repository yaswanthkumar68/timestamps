import React, {useState, useEffect} from 'react'

const TimestampsComponent = (props) => {
    const { text, flag, showText } = props

    const [ timeStamps, setTimeStamps ] = useState([])
    const [ status, setStatus ] = useState(false)
    const [ previousText, setPreviousText ] = useState('')

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('timeStamps')) || []
        setTimeStamps(result)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setStatus( status => !status)
        }, 5000)
    }, [])

    useEffect(() => {
        setPreviousText(text)
        if(text !== previousText && flag){
            const time = new Date().toLocaleTimeString()
            const arr = [...timeStamps]
            const info = {}
            info[time] = text
            arr.push(info)
            setTimeStamps(arr)
            localStorage.setItem('timeStamps', JSON.stringify(arr))
        }
    }, [status])

    

    return(
        <div>
            <h2>TimeStamps</h2>
            {timeStamps.map((ele, i) => {
                for(const key in ele){
                    return <h4 key={i}><a href='#' onClick={() => {showText(ele[key])}}>{key}</a></h4>
                }
            })}
        </div>
    )
}

export default TimestampsComponent