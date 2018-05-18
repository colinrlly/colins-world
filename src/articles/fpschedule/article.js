import React from 'react';

export default function article(props) {
    return (
        <div>
            <h2 className="subtitle">WHAT:</h2>
            <p>A web-app to better manage employee schedules where users can create
                profiles and input work times. They can then view other employee
                schedules, request time off, or request shift coverage.</p>
            <h2 className="subtitle">WHY:</h2>
            <p>I created this web app while interning at
                <a href="https://fltplan.com/" className="highlight"> Flight Plan LLC</a>
                . When I arrived they were using a paper calendar to keep track of 
                employee schedules. My task for the summer was to create an online experience
                to maintain work hours, time off, and shift coverage. I designed and implemented
                <a href="https://fpschedule.fltplan.com" className="highlight"> Fpschedule </a>
                from the ground up as a solution.</p>
            <h2 className="subtitle">HOW:</h2>
            <p>My tech stack includes 
                <a href="https://www.djangoproject.com/" className="highlight"> Python/Django </a>
                as the framework.
                <a href="https://fezvrasta.github.io" className="highlight"> Fezvrasta's </a>
                <a href="https://fezvrasta.github.io/bootstrap-material-design/" className="highlight"> bootstrap-material-design </a>
                as the theme.
                <a href="https://fullcalendar.io/" className="highlight"> FullCalendar </a>
                as the calendar. And
                <a href="https://httpd.apache.org/" className="highlight"> Apache </a> 
                as the server.
            </p>
        </div>
    )
}