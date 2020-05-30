import React from 'react';
import '../styles/defaultPageStyle.css'
export default class Blog extends React.Component{
    componentDidMount(){
        document.title = "WB| Blog"
    }

    render() {
        return (
           <main>
               <h1>Blog</h1>
               <p>
                   Hello,

                   Welcome to my blog. It's pretty empty for now while I create some content.
               </p>
           </main>
        )
    }
}