const grid = new Muuri('.grid', {
    layout: {
        rounding: false,
    },
});

window.addEventListener('load', () => {
    //agregar imagenes de forma  uniforme
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('uploaded-images');

    // Listener de los enlaces para filtrar por categorias
    const links = document.querySelectorAll('.categories__item-link');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            links.forEach((link) => link.classList.remove('categories__item-link--active'));
            event.target.classList.add('categories__item-link--active');

            const category = event.target.innerHTML.toLowerCase();
            category === 'all' ? grid.filter(`[data-category]`) : grid.filter(`[data-category="${category}"]`);
        });
    });

    // Listener de los enlaces para filtrar por categorias
    document.querySelector('#searchInput').addEventListener('keypress', event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const seacrch = event.target.value;
            grid.filter((item) => item.getElement().dataset.labels.includes(seacrch));
        }
    });
});

