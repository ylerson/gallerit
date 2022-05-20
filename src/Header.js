import Search from './Search';

const Header = () => {
    window.addEventListener('scroll', () => {
        const headerMenu = document.getElementById('headerMenu');
        const boxSearch = document.getElementById('boxSearch');
        const searchScroll = document.getElementById('searchScroll');
        const boxSearchTitle = document.getElementById('boxSearchTitle');

        const stiky = boxSearchTitle.offsetTop;

        if (window.pageYOffset > stiky) {
            headerMenu.classList.add('hidden');

            boxSearch.classList.add('zoomOut');
            boxSearch.classList.add('hidden');

            searchScroll.classList.remove('hidden');
            searchScroll.classList.add('searchScroll');
        } else {
            headerMenu.classList.remove('hidden');
            searchScroll.classList.add('hidden');
            boxSearch.classList.remove('hidden');
            searchScroll.classList.remove('searchScroll');
        }
    });

    const header = `<header>
    <nav>
        <div class="logo">
            <img src="./src/Resource/picture.png" alt="">
        </div>
        <ul id="headerMenu" class="header_menu">
            <li class="items_header_menu"><a href="/">Home</a> </li>
            <li class="items_header_menu"><a href="#/search">Search</a> </li>
            <li class="items_header_menu"><a href="#/about">About</a> </li>
        </ul>
    </nav>
    <div id="searchScroll" class="hidden ">    ${Search()}        </div>

    <div><button class="btn-link">Go to Unsplash</button> </div>

</header>

<div id="boxSearch" class="box_search">
    <div id="boxSearchTitle" class="box_search_title">
        <h1>Gallerit</h1>
        <span class="divide"></span>
        <p>Search beautiful and free image, Powered by UnplashApi</p>
    </div>
    ${Search()}

</div>`;

    return header;
};

export default Header;
