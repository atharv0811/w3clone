const htmlBasicsData = {
    htmlDocumentPoints: [
        "All HTML documents must start with a document type declaration: <!DOCTYPE html>.",
        "The HTML document itself begins with <html> and ends with </html>.",
        "The visible part of the HTML document is between <body> and </body>."
    ],
    htmlDocumentCodeSnippet: `<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>`,

    declarationPoints: [
        "The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.",
        "It must only appear once, at the top of the page (before any HTML tags).",
        "The <!DOCTYPE> declaration is not case sensitive.",
        "The <!DOCTYPE> declaration for HTML5 is:"
    ],

    htmlHeadingsCodeSnippet: `<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>`,

    exerciseQuestion: 'What is a correct HTML markup for the document type declaration?',
    exerciseOptions: [
        "<!DOCTYPE html>",
        "DOCTYPE html;",
        "--DOCTYPE html;"
    ]
}

export default htmlBasicsData;