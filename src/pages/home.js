import React from 'react';
import './styles/defaultPageStyle.css'
export default class Home extends React.Component{
    componentDidMount(){
        document.title = "Will Bedu | Home"
    }
    render() {
        return (
           <div>
                Home
           </div>
        )
    }
}