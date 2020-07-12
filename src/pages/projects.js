import React from 'react';
import GHProjectCard from "../features/githubProjectCard/githubProjectCard"
import {Spinner, Alert} from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux';
import {selectGithub, fetchProjects} from '../reducers/githubSlice'

export default function Projects() {
    document.title = "WB| Projects";

    let body;
    let dispatch = useDispatch();
    const github = useSelector(selectGithub);
    if (!github.isLoading && !github.isDone) {
        dispatch(fetchProjects());
    }

    if (github.isDone && !github.hasError && github.projects !== undefined && Array.isArray(github.projects)) {
        //sliced due to readonly property of github.projects
        let projects = github.projects.slice().sort(function (proj1, proj2) {
            return new Date(proj2.updatedAt) - new Date(proj1.updatedAt);
        });

        body = projects.map(project => {
            const tags = project.languages.concat(project.topics).slice(0, 5);
            return (
                <GHProjectCard title={project.nameWithOwner}
                               text={project.shortDescriptionHTML}
                               key={`project-${project.nameWithOwner}`}
                               link={project.url}
                               stars={project.stargazers.totalCount}
                               updated={project.updatedAt}
                               watchers={project.watchers.totalCount}
                               tags={tags}
                />
            )
        })

    } else if (github.isLoading) {
        body = (
            <Spinner className="center" animation="border" role="status" size="lg">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    } else {
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