const components = [
    { url: '../../../components/header.html', id: 'header' },
    { url: '../../../components/footer.html', id: 'footer' },
    { url: '../../../components/nav.html', id: 'nav' },
    { url: '../../../components/sections/abstract.html', id: 'abstract' },
    // { url: '../../../components/sections/placeholder.html', id: 'placeholder' },
    { url: '../../../components/sections/global.html', id: 'global-settings' },
    { url: '../../../components/sections/imagesMultimedia.html', id: 'imagesMultimedia' },
    { url: '../../../components/sections/forms.html', id: 'forms' },
    { url: '../../../components/sections/tables.html', id: 'tables' },
    { url: '../../../components/sections/headings.html', id: 'headings' },
    { url: '../../../components/sections/links.html', id: 'links' },
    { url: '../../../components/sections/buttons.html', id: 'buttons' },
    { url: '../../../components/sections/lists.html', id: 'lists' },
    { url: '../../../components/sections/semantic.html', id: 'semantic' },
    { url: '../../../components/sections/graphics.html', id: 'graphics' },
    { url: '../../../components/sections/inline.html', id: 'inline' },
    { url: '../../../components/sections/text.html', id: 'text' },


    { url: '../../../components/sections/modals.html', id: 'modals' },

    { url: '../../../components/sections/avoid.html', id: 'avoid' },

    { url: '../../../components/sections/appendix.html', id: 'appendix' },
    { url: '../../../components/sections/glossary.html', id: 'glossary' }
];

components.forEach(({ url, id }) => loadComponent(url, id));