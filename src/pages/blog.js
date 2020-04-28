import React from 'react';

export default class Blog extends React.Component{
    componentDidMount(){
        document.title = "Will Bedu | Blog"
    }

    render() {
        return (
           <div class={"mainContent"}>
               <p>
                   Hello,

                   Welcome to my blog. It's pretty empty for now while I create some content.
               </p>
           </div>
        )
    }
}