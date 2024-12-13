function loadComponent(url, placeholderId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = data;
                // Trigger Prism highlighting on the newly added content
                Prism.highlightAll();
            } else {
                console.warn(`Placeholder element with id "${placeholderId}" not found.`);
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}
