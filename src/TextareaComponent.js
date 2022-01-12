import React, { useState, useEffect } from 'react'
import Sentiment from 'sentiment'


const TextareaComponent = (props) => {
    const { text, check, handleText, handleEdit } = props
    
    const handlepost = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`
        window.open(twitterUrl, '_blank')
    }

 

    return(
        <div>
            <label><b>Enter the Post</b></label><br/><br/>
            <textarea rows='10' cols='80' value={text} onChange={handleText} disabled={check}></textarea><br/><br/>
            <button onClick={handleEdit} disabled={check ? false : true} >Edit</button><br/><br/>
            <button onClick = {handlepost}>Post</button>
            <h2> Letters - {text.trim().length}  &nbsp;
                 words - {text.trim() ? text.trim().split(' ').length : 0}
            </h2>
            <ScoreComponent text={text}/>
        </div>
    )
}

const ScoreComponent = ({text}) => {
    //const Sentiment = require('sentiment')
    const sentiment = new Sentiment()
    const result = sentiment.analyze(text)

    const positive = result.positive
    const negative = result.negative
    const neutral  = result.tokens.filter((ele) => {
        if(!positive.includes(ele) && !negative.includes(ele)){
            return ele
        }
    })
    

    return(
        <div>
            <h2>Score : {result.score}</h2>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <SentimentComponent heading='Positive' list={positive}/>
                <SentimentComponent heading='Negative' list={negative}/>
                <SentimentComponent heading='Neutral' list={neutral}/>
            </div>
        </div>
    )
}

const SentimentComponent = (props) => {
    const { heading , list } = props

    return (
        <div>
            <h1>{heading} &nbsp; </h1>
            <ul>
                {list.map((ele, i) => {
                    return <li key={i}>{ele}</li>
                })}
            </ul>
        </div>
        

    )
}


export default TextareaComponent