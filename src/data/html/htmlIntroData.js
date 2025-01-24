const whatIsHTML = [
    "HTML stands for Hyper Text Markup Language",
    "HTML is the standard markup language for creating Web pages",
    "HTML describes the structure of a Web page",
    "HTML consists of a series of elements",
    "HTML elements tell the browser how to display the content",
    'HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.'
];

const exampleExplanation = [
    "The <!DOCTYPE html> declaration defines that this document is an HTML5 document",
    "The <html> element is the root element of an HTML page",
    "The <head> element contains meta information about the HTML page",
    "The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)",
    "The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.",
    "The <h1> element defines a large heading",
    "The <p> element defines a paragraph"
];

const codeSnippet = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

const exerciseQuestion = "What does HTML stand for?";
const exerciseOptions = [
    "Hot Typing Markup Language",
    "Home Typing Modern Language",
    "Hyper Text Markup Language",
    "Home Testing Mixed Language"
];

export { whatIsHTML, exampleExplanation, codeSnippet, exerciseQuestion, exerciseOptions };