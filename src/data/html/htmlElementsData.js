const htmlElementsData = {
    nestedHTMLPoints: [
        "HTML elements can be nested (this means that elements can contain other elements).",
        "All HTML documents consist of nested HTML elements.",
        "The following example contains four HTML elements (<html>, <body>, <h1> and <p>):",
    ],

    nestedExample: `<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>`,

    exampleExplained: {
        first: [
            "The <html> element is the root element and it defines the whole HTML document.",
            "It has a start tag <html> and an end tag </html>.",
            "Then, inside the <html> element there is a <body> element:",
        ],
        second: [
            "The <body> element defines the document's body.",
            "It has a start tag <body> and an end tag </body>.",
            "Then, inside the <body> element there are two other elements: <h1> and <p>:",
        ],
        third: [
            "The <h1> element defines a heading.",
            "It has a start tag <h1> and an end tag </h1>:",
        ],
        forth: [
            "The <p> element defines a paragraph.",
            "It has a start tag <p> and an end tag </p>:",
        ]
    },

    neverSkipEndExample:`<html>\n<body>\n\n<p>This is a paragraph\n<p>This is a paragraph\n\n</body>\n\</html>`,

    exerciseQuestion:'True or False. Empty elements must have a close tag.',
    exerciseOptions:[
        'True',
        'False'
    ]
}

export default htmlElementsData