import React from 'react';
import '../styles/defaultPageStyle.css'
import CustomCard from '../features/customCard/customCard';
export default class Home extends React.Component{
    componentDidMount(){
        document.title = "WB| Home"
    }
    render() {
        return (
           <main style={{display:"flex", justifyContent:"center"}}>
                <CustomCard className="col-10" style={{ padding:"10px", top:"50px", height:"350px"}}>
                    <h2>Will Bedu</h2>
                    <p>Developer, Engineer, Architech</p>
                </CustomCard>
           </main>
        )
    }
}