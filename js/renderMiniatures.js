
const renderMiniatures = (array) => {
  const fragment = document.createDocumentFragment();
  const miniatureContainer = document.querySelector('.pictures');

  array.forEach(({url, description, likes, comments}) => {
    const template = document.querySelector('#picture').content.cloneNode(true);
    const img = template.querySelector('.picture__img');
    img.src = url;
    img.alt = description;

    const comment = template.querySelector('.picture__comments');
    comment.textContent = comments.length;

    const like = template.querySelector('.picture__likes');
    like.textContent = likes;
    fragment.appendChild(template);
  });

  miniatureContainer.appendChild(fragment);

};


export {renderMiniatures};
