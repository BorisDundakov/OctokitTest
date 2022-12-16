const { Octokit } = require('octokit')
const octokit = new Octokit(
    {
        // TODO: SET UP GITHUB TOKEN
        auth: process.env.GITHUB_TOKEN,
    }
);


async function run() {
    const response = await octokit.request('GET /user')
    
    console.log ('authenthicased as ${response.data.login}')
}

run();