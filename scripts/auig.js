const components = [
    { url: '../../../components/header.html', id: 'header' },
    { url: '../../../components/footer.html', id: 'footer' },
    { url: '../../../components/nav.html', id: 'nav' },
    { url: '../../../components/sections/abstract.html', id: 'abstract' },
    // { url: '../../../components/sections/placeholder.html', id: 'placeholder' },
    { url: '../../../components/sections/global.html', id: 'global-settings' },
    { url: '../../../components/sections/imagesMultimedia.html', id: 'imagesMultimedia' },
    { url: '../../../components/sections/forms.html', id: 'forms' },


    { url: '../../../components/sections/modals.html', id: 'modals' },

    { url: '../../../components/sections/appendix.html', id: 'appendix' },
    { url: '../../../components/sections/glossary.html', id: 'glossary' }
];

components.forEach(({ url, id }) => loadComponent(url, id));