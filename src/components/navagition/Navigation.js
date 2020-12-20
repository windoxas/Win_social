import  React, {Component} from  'react'
import './Nav.css'

export default class Navigation extends Component{
    render() {
        return (
            <div>
                <nav className="nav">
                    <div> <a className="profile" href="#">Profile</a></div>
                    <div> <a className="message" href="#">Message</a></div>
                    <div> <a className="news" href="#">News</a></div>
                    <div> <a className="music" href="#">Music</a></div>
                    <div> <a className="settings" href="#">Settings</a></div>
                </nav>
            </div>
        );
    }
}
