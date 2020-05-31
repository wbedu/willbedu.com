import React from 'react';
import GHProjectCard from "../features/githubProjectCard/githubProjectCard"

export default class Projects extends React.Component{
    componentDidMount(){
        document.title = "WB| Projects"
    }
    render() {
        return (
           <main>
               <h1>
               Projects
               </h1>
               <GHProjectCard title="project1" stars="200" text={"ankstonRalphingtonIII If you add some styles to the parent element you can get rid of those annoying spaces that break the document flow. Here's a link to some solutions: [link]css-tricks.com/fighting-the-space-between-inline-block-elements [link] My personal preference is the font-size:0 trick. – Bavell Aug 18 '13 at 23:47"} />
           </main>
        )
    }
}