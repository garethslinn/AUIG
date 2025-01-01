export const mock_Q = [
    {
        id: "mock-q1",
        question: "Which sentence is correct?",
        options: [
            "Decorative images should have an alt value of 'decorative'.",
            "Decorative images should have an aria-label value of 'false'",
            "Decorative images should have an aria-label value of 'empty'",
            "Decorative images should have an empty alt value.",
        ]
    },
    {
        id: "mock-q2",
        question: "What is a key consideration for contrast settings?",
        options: [
            "Backgrounds should always be dark regardless of text color.",
            "Text should have a contrast ratio of at least 4.5:1 against its background.",
            "All contrast settings should be dynamic and change automatically.",
            "Low contrast improves the aesthetics of the website."
        ]
    },
    {
        id: "mock-q3",
        question: "Why should flashing images be avoided?",
        options: [
            "They reduce the quality of the website.",
            "They make the website appear outdated.",
            "They can trigger seizures in individuals with photosensitive epilepsy.",
            "They improve user engagement."
        ]
    },
    {
        id: "mock-q4",
        question: "How do skip links improve accessibility?",
        options: [
            "They allow users to bypass repetitive navigation and go directly to main content.",
            "They make navigation menus visually appealing.",
            "They eliminate the need for responsive design.",
            "They add extra links to the footer for convenience."
        ]
    },
    {
        id: "mock-q5",
        question: "What is the purpose of responsive design?",
        options: [
            "To prioritise desktop users over mobile users.",
            "To ensure the interface works seamlessly across different screen sizes and devices.",
            "To minimise the amount of content displayed.",
            "To reduce the need for keyboard accessibility."
        ]
    },
    {
        id: "mock-q6",
        question: "Which one of these statements is correct?",
        options: [
            "If you have at least mouse access you don't need keyboard navigation",
            "Using the keyboard is obsolete as we now have mouse and touch screen",
            "Keyboard navigation should be a bare minimum requirement.",
            "None of the above"
        ]
    },
    {
        id: "mock-q7",
        question: "When using headings which is recommended order to ensure improved accessibility?",
        options: [
            "h1,h2,h3,h4",
            "h1,h1,h2,h3",
            "h2,h1",
            "h1,h2,h2,h4"
        ]
    },
    {
        id: "mock-q8",
        question: "Why are descriptive titles important for web accessibility?",
        options: [
            "They improve the website's visual appeal.",
            "They are required for responsive design.",
            "They eliminate the need for metadata.",
            "They help users and assistive technologies understand the purpose of each page.",
        ]
    },
    {
        id: "mock-q9",
        question: "How does a consistent layout benefit users with disabilities?",
        options: [
            "It helps users predict the structure and locate content more easily.",
            "It reduces the amount of navigation links needed.",
            "It simplifies the visual design.",
            "It eliminates the need for keyboard accessibility."
        ]
    },
    {
        id: "mock-q10",
        question: "What does the `<nav>` element represent?",
        options: [
            "A sidebar on the page.",
            "A group of navigation links.",
            "A list of articles.",
            "A footer for the page."
        ]
    },
];

export const mock_A = [
    { id: "mock-q1", a: [3] }, // Decorative images should have an empty alt value
    { id: "mock-q2", a: [1] }, // Text should have a contrast ratio of at least 4.5:1 against its background
    { id: "mock-q3", a: [2] }, // They can trigger seizures in individuals with photosensitive epilepsy
    { id: "mock-q4", a: [0] }, // They allow users to bypass repetitive navigation and go directly to main content
    { id: "mock-q5", a: [0] }, // To ensure the interface works seamlessly across different screen sizes and devices
    { id: "mock-q6", a: [3] }, // Keyboard navigation should be a bare minimum requirement
    { id: "mock-q7", a: [0] }, // h1,h2,h3,h4
    { id: "mock-q8", a: [3] }, // They help users and assistive technologies understand the purpose of each page
    { id: "mock-q9", a: [0] }, // It helps users predict the structure and locate content more easily.
    { id: "mock-q10", a: [1] } // A group of navigation links.
];