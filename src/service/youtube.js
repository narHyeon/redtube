const Youtube = function(httpClient) {
    const youtube = httpClient;

    const mostPopular = async () => {
        const response = await youtube.get(`videos`, {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25
            }
        });
        return response.data.items;
    }

    const search = async (query) => {
        const response = await youtube.get(`search`, {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query
            }
        });
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }

    return {
        mostPopular, search
    }
}

export default Youtube;
