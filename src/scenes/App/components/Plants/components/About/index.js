import React, { Component } from 'react';

import './style.css'

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shown: false
        };

        this.onRevealerClick = this.onRevealerClick.bind(this);

        this.state = {
            shown: this.props.over_940px
        }
    }

    onRevealerClick() {
        this.setState({
            shown: true
        })
    };

    render() { 
        const {shown} = this.state;

        return (
            <div>
                {shown ? 
                    <p className='about_text'>The&nbsp;
                    <a href="https://developer.telerik.com/featured/oauth-has-ruined-everything/" className="highlight">MVP</a>
                    &nbsp;(Minimal Viable Product) is a low cost, hydroponic growth chamber; designed as a simplified version of the&nbsp;
                    <a href="https://developer.telerik.com/featured/oauth-has-ruined-everything/" className="highlight">MIT OpenAg Personal Food Computer</a>.
                    This page show live statistics streamed from my MVP build. The charts are updated every 20 mins and the picture is taken every hour.
                    Through this project I explored hydropnics, controlled environment agriculture, and the internet of things. This is an 
                    open source project based around a Raspberry Pi 'brain' and Python code, 
                    with a MongoDB database.</p>
                :
                    <button
                        onClick={this.onRevealerClick}
                        className='revealer_btn'>
                        About
                    </button>
                }
            </div>
        )
    }
}

export default About;
