const url = 'https://www.reddit.com';

export const getSubreddits = async () => {
    const response = await fetch(`${url}/subreddits.json`);
    const jsonResponse = await response.json();

    return jsonResponse.data.children.map(subreddit => subreddit.data)
}