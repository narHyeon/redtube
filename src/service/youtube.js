const Youtube = function(keys) {
    const key = keys;
    const getRequestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const mostPopular = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`,
            getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    const search = async (query) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${key}`,
            getRequestOptions)
        const result = await response.json();
        return result.items.map(item => ({...item, id: item.id.videoId}));
    }

    return {
        mostPopular, search
    }
}

export default Youtube;
