import React from 'react';
import GHProjectCard from "../features/githubProjectCard/githubProjectCard"
import { Spinner, Alert } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { selectGithub, fetchProjects } from '../reducers/githubSlice'

export default function Projects() {
    document.title = "WB| Projects"

    let body = undefined;
    let dispatch = useDispatch();
    const github = useSelector(selectGithub);
    if (!github.isLoading && !github.isDone) {
        dispatch(fetchProjects())
    }


    if (github.isDone && !github.hasError) {
        if (github.projects !== undefined && Array.isArray(github.projects)) {

            //sliced due to readonly property of github.projects
            let projects = github.projects.slice().sort(function (proj1, proj2) {
                return new Date(proj2.updated_at) - new Date(proj1.updated_at);
            });


            body = projects.map(project => {
                const description = project.description ? project.description : 'Here is where i would put my description, IF I HAD ONE!'
                return (
                    <GHProjectCard title={project.name}
                        text={description}
                        key={`project-${project.name}`}
                        link={project.html_url}
                        stars={project.stargazers_count}
                        updated={project.updated_at}
                        watchers={project.watchers}
                        languages={project.languages}
                    />
                )
            })
        }
    } else if (github.isLoading) {
        body = (
            <Spinner className="center" animation="border" role="status" size="lg">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    } else if (github.hasError) {
        body = (
            <Alert variant="warning">
                Error loading projects. Please try again or come back later.
            </Alert>
        )
    }

    return (
        <main>
            <h1>
                Projects
            </h1>

            <div className={'c-gh-card-container col-12'}>
                {body}
            </div>
        </main>
    )
}