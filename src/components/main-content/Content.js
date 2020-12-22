import React, {Component} from 'react'
import './Content.css'


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <div><img src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt=""/></div>
                <div className="userInfo">

                    <div className="userImg">
                        <img src="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg" alt=""/>
                        <a href="#">Write message</a>
                    </div>

                    <div className='another-info'>
                        <h2>{this.props.name}</h2>
                        <hr/>

                        <p>Birth day: <span>{this.props.birth}</span></p>
                        <p>City: <span>{this.props.city}</span></p>
                        <p>Work: <span>{this.props.work}</span></p>
                        <p>Web site: <span>{this.props.site}</span></p>
                        <hr/>
                        <div className="count-info">
                            <p>849 <span>friend</span></p>
                            <p>350 <span>subscriber</span></p>
                            <p>452 <span>photo</span></p>
                            <p>50 <span>video</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}