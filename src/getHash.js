const getHash = () => {
    return window.location.hash.split('#')[1] === undefined
        ? '/'
        : window.location.hash.split('#')[1];
};

export default getHash;
