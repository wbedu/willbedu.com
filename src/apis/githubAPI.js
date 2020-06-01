import axios from 'axios'

const urls = {
    projects: (userName) => `https://api.github.com/users/${userName}/repos`
}

function getProjects(userName) {
    return axios.get(urls.projects(userName), { timeout: 10000 }).then(results => results.data);
}

function getLanguages(url) {
    return axios.get(url, { timeout: 10000 }).then(results => results.data)
}



export default {
    getProjects,
    getLanguages
}