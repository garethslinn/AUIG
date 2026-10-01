const components = [
    { url: '../../../components/header.html', id: 'header' },
    { url: '../../../components/footer.html', id: 'footer' },
    { url: '../../../components/nav.html', id: 'navlist' },
    { url: '../../../components/navArticles.html', id: 'navlistArticles' }
];

components.forEach(({ url, id }) => loadComponent(url, id));
