import getHash from './getHash';
import Header from './Header';
import HomePage from './HomePage';
import CollectionPage from './CollectionsPage';
import './style/main.css';

const routes = {
    '/': HomePage(),
    '/search': CollectionPage(),
};

const router = async (html, header) => {
    header.innerHTML = await Header();

    html.innerHTML = await routes['/'];
    window.addEventListener('hashchange', () => {
        console.log(getHash());

        const route =
            routes[getHash()] === undefined ? routes['/'] : routes[getHash()];
        html.innerHTML = route;
    });
};

export default router;
