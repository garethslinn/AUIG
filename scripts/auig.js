const components = [
    { url: '../../../components/header.html', id: 'header' },
    { url: '../../../components/footer.html', id: 'footer' },
    { url: '../../../components/nav.html', id: 'nav' },
    { url: '../../../components/sections/abstract.html', id: 'abstract' },
    { url: '../../../components/sections/placeholder.html', id: 'placeholder' },

    { url: '../../../components/sections/appendix.html', id: 'appendix' },
    { url: '../../../components/sections/glossary.html', id: 'glossary' }
];

components.forEach(({ url, id }) => loadComponent(url, id));