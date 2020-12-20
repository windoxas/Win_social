import  React, {Component} from  'react'
import './Content.css'


export default class Content extends Component{
    render() {
        return (
            <div className="content">
                <div><img src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt=""/></div>
                <div className="userImg"><img src="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg" alt=""/></div>
            </div>
        );
    }
}