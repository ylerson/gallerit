import router from './src';
import getHash from './src/getHash';

const content = document.getElementById('content');
const header = document.getElementById('header');

window.addEventListener('load', async () => {
    router(content, header);
});

// (async () => {
// })();
