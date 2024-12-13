const components = [
    { url: '../../../components/header.html', id: 'header' },
    { url: '../../../components/footer.html', id: 'footer' },
    { url: '../../../components/nav.html', id: 'nav' },
    { url: '../../../components/sections/abstract.html', id: 'abstract' },
    { url: '../../../components/sections/introduction.html', id: 'introduction' },
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
    { url: '../../../components/sections/search.html', id: 'search' },
    { url: '../../../components/sections/navigationMenus.html', id: 'navigationMenus' },
    { url: '../../../components/sections/sliders.html', id: 'sliders' },
    { url: '../../../components/sections/tooltips.html', id: 'tooltips' },
    { url: '../../../components/sections/tabs.html', id: 'tabs' },
    { url: '../../../components/sections/accordions.html', id: 'accordions' },
    { url: '../../../components/sections/notifications.html', id: 'notifications' },
    { url: '../../../components/sections/breadcrumbs.html', id: 'breadcrumbs' },
    { url: '../../../components/sections/pagination.html', id: 'pagination' },
    { url: '../../../components/sections/cards.html', id: 'cards' },
    { url: '../../../components/sections/alerts.html', id: 'alerts' },

    { url: '../../../components/sections/avoid.html', id: 'avoid' },

    { url: '../../../components/sections/appendix.html', id: 'appendix' },
    { url: '../../../components/sections/appendix-a.html', id: 'appendix-a' },
    { url: '../../../components/sections/appendix-b.html', id: 'appendix-b' },
    { url: '../../../components/sections/glossary.html', id: 'glossary' }
];

components.forEach(({ url, id }) => loadComponent(url, id));


//
// // Function to initialize Back to Top functionality
// function initializeBackToTop() {
//     const backToTopBtn = document.getElementById('back-to-top');
//
//     if (backToTopBtn && !backToTopBtn.dataset.listenerAdded) {
//         // Function to handle scroll events
//         const handleScroll = () => {
//             if (window.scrollY > 200) {
//                 backToTopBtn.classList.add('show');
//                 console.log('Added show class');
//             } else {
//                 backToTopBtn.classList.remove('show');
//                 console.log('Removed show class');
//             }
//         };
//
//         // Attach the scroll event listener
//         window.addEventListener('scroll', handleScroll);
//
//         // Function to handle click on Back to Top button
//         const scrollToTop = () => {
//             console.log('Back to Top button clicked');
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         };
//
//         backToTopBtn.addEventListener('click', scrollToTop);
//
//         // Mark that listeners have been added to prevent duplication
//         backToTopBtn.dataset.listenerAdded = 'true';
//
//         console.log('Back to Top functionality initialized.');
//     }
// }
//
//
// document.addEventListener('DOMContentLoaded', () => {
//     observer.observe(document.body, { childList: true, subtree: true })
//
//     initializeBackToTop();
//
// // Observe the DOM for additions of the back-to-top button
//     const observer = new MutationObserver((mutations) => {
//         for (let mutation of mutations) {
//             if (mutation.type === 'childList') {
//                 for (let node of mutation.addedNodes) {
//                     if (node.id === 'back-to-top') {
//                         initializeBackToTop();
//                     }
//                 }
//             }
//         }
//     });
//
// // Start observing the body for added child nodes
//     observer.observe(document.body, { childList: true, subtree: true })
// });