import {randomPhotos} from './service';

const PhotoList = async () => {
    let result = await randomPhotos().then((res) => res);

    console.log(result);
    if (result.type !== 'success') return `<div> <p>No hay elementos</p></div>`;

    const view = `<ul class="list_box">
        ${result?.response
            .map(
                (res) =>
                    ` <li class="box">
                    <div class="img_box">
                    <img src="${res.urls.regular}"></img> 
                    </div>
                    </li>
            `
            )
            .join('')}
        </ul>`;
    return view;
};

export default PhotoList;
