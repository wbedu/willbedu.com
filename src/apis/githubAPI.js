const axios = require('axios');
const {github} = require('../config.json')
 const query = `
    {
  viewer {
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      totalCount
      nodes {
        languages(first: 4) {
          nodes {
            name
          }
        }
        nameWithOwner
        url
        updatedAt
        stargazers(first: 1) {
          totalCount
        }
        watchers(first:1){
          totalCount
        }
        repositoryTopics(first: 100) {
          totalCount
          nodes {
            topic {
              name
            }
          }
        }
        shortDescriptionHTML
      }
    }
  }
}`

const url = `https://api.github.com/graphql`;

 async function getProjects() {
    const config = {
        method: 'POST',
        url: url,
        timeout: 10000,
        headers: {
            "Authorization" : `Bearer ${github.token}`
        },
        data: JSON.stringify({
            query
        })
    }

    return await axios(config)
        .then(results => results.data.data.viewer.repositories.nodes)
}

export default {
    getProjects
}
