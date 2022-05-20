import {createApi} from 'unsplash-js';

const unsplash = createApi({
    accessKey: 'g8TU7Vr1e54P7OzQfhzzFgdDE9KOm8u9Bz1YEUf5i1Q',
    // `fetch` options to be sent with every request
});

const searchPhotos = async (query) => {
    const result = await unsplash.search.getPhotos({
        query: query,
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait',
    });

    return result;
};

const randomPhotos = async () => {
    const result = await unsplash.photos.getRandom({
        count: 11,
    });

    return result;
};

export {randomPhotos, searchPhotos};
