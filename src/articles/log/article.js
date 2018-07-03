import React from 'react';

export default function article(props) {
    return (
        <div>
            <p className='marginBottom'><a href="https://time-tracker123.herokuapp.com" className="highlight">time-tracker123.herokuapp.com</a></p>
            <p className='marginBottom'>In order to hold myself responsible for how I spend my time I needed a web app which allows me
                to accurately track what I do and log the results in Google Calendar. To fill this need I created
                Log.
            </p>
            <p className='marginBottom'>The project started off as a simple command line tool.</p>
            <img className='marginBottom' src={ require('./images/time-tracker1.0.gif') } alt='Command Line Version of Log Gif'/>
            <div className='dropInContainer marginBottom'>
                <p className='marginBottom'>I then moved to get the time tracker working in a browser. This is an early version.</p>
                <img src={ require('./images/time-tracker2.0.gif') } alt='Command Line Version of Log Gif'/>
            </div>
            <p className='marginBottom'>Next came some styles to make it look pretty for the user. Here's a gif demonstrating how
                one can close the browser and the app will resume at the correct time.
            </p>
            <img className='marginBottom' src={ require('./images/time-tracker-resuming.gif') } alt='Resume timer Gif'/>
            <div className='dropInContainer'>
                <p className='marginBottom'>I used Google's log in feature to add user's to Log. Each user has their own list of 
                    activities, and their data automatically saves to their own calendar. FYI working with&nbsp;
                    <a href="https://developer.telerik.com/featured/oauth-has-ruined-everything/" className="highlight">OAuth is death</a>
                    .
                </p>
                <img src={ require('./images/time-tracker-sign-in.gif') } alt='Time Tracker Sign In Gif'/>
            </div>
        </div>
    )
}
