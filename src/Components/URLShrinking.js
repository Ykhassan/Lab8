import { useState } from 'react';
import './URLShrinking.css'
const URLShrinking = () => {
    const [longUrl, setLongUrl] = useState("https:example.com");
    const [customCode, setCustomCode] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    
    const handleLongUrlChange = (e) => {
        setLongUrl(e.target.value);
    }
    const handleCustomCode = (e) => {
        setCustomCode(e.target.value);
    }

    const handleShortUrl = (e) => {
        if(customCode > 4 ) {
        setShortUrl(`https://cpit405.com/${customCode}`);
        }
        else {
            const id = Math.random().toString(36).substring(6);
            setShortUrl(`https://cpit405.com/${id}`)
        }
    }
    return (
        <div className='shrinkFrom'>
            <h1> Link Shrinker </h1>
            <div className='formGroup'>
            <label htmlFor="longurl">Long Url</label>
            <input name="longuurl" id="longurl" type="text" value={longUrl} onChange={handleLongUrlChange}></input>
            <label htmlFor="customcode">Enter short code</label>
            <input name="customcode" id="customcode" type="text" value={customCode} onChange={handleCustomCode}></input>
            </div>
            <button className='submit-btn' onClick={handleShortUrl}> Shrink </button>
            <div className='result'>
                <lable htmlFor='shorturl'>Short URL</lable>
                <input type='text' id='shorturl' name='shorturl' value={shortUrl} readOnly></input>
            </div>

        </div>
    )
}

export default URLShrinking; 