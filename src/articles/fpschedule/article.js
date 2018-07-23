import React from 'react';

export default function article(props) {
    return (
        <div>
            <h2 className="subtitle">WHAT:</h2>
            <p>A web-app to better manage employee schedules, users can create
                profiles and input work times. They can then view other employee
                schedules, request time off, or request shift coverage.</p>
            <h2 className="subtitle">WHY:</h2>
            <p>I created this web app while interning at&nbsp;
                <a href="https://fltplan.com/" className="highlight">Flight Plan LLC</a>
                . When I arrived they were using a paper calendar to keep track of 
                employee schedules. My task for the summer was to create an online experience
                to maintain work hours, time off, and shift coverage. I designed and implemented&nbsp;
                <a href="https://fpschedule.fltplan.com" className="highlight">Fpschedule</a>
                &nbsp; from the ground up as a solution.</p>
            <h2 className="subtitle">HOW:</h2>
            <p>My tech stack includes&nbsp;
                <a href="https://www.djangoproject.com/" className="highlight">Python/Django</a>
                &nbsp;as the framework.&nbsp;
                <a href="https://fezvrasta.github.io" className="highlight">Fezvrasta's</a>&nbsp;
                <a href="https://fezvrasta.github.io/bootstrap-material-design/" className="highlight">bootstrap-material-design</a>
                &nbsp;as the theme.&nbsp;
                <a href="https://fullcalendar.io/" className="highlight">FullCalendar</a>
                &nbsp;as the calendar. And&nbsp;
                <a href="https://httpd.apache.org/" className="highlight">Apache</a> 
                &nbsp;as the server.
            </p>
        </div>
    )
}