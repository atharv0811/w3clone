import React from "react";
import Navigation from "../../components/Navigation";
import CodeExample from "../../components/Code";
import {
    codeSnippet,
    exampleExplanation,
    whatIsHTML,
    exerciseOptions,
    exerciseQuestion,
} from "../../data/htmlIntroData";
import NoteCard from "../../components/NoteCard";
import ExerciseCard from "../../components/ExersiceCard";

const HTMLIntro = () => {
    return (
        <div className="mt-4 text-white">
            <h1 className="mb-4 ps-4">HTML Introduction</h1>
            <Navigation />

            <hr className="my-3 mx-3 text-secondary" />

            <p className="ps-4">
                HTML is the standard markup language for creating Web pages.
            </p>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <p className="fs-2">What is HTML?</p>
                <ul className="ms-3">
                    {whatIsHTML.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <p className="fs-2">A Simple HTML Document</p>

                <CodeExample
                    code={codeSnippet}
                    title="Example"
                    buttonText="Try it Yourself »"
                />
            </div>

            <div className="px-4 mt-3">
                <h4 className="fw-light">Example Explained</h4>

                <ul className="ms-3">
                    {exampleExplanation.map((item, index) => (
                        <li className="mb-3" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <NoteCard
                title="Note"
                content="Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!"
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <p className="fs-2">Web Browsers</p>
                <p>
                    The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to
                    read HTML documents and display them correctly.
                </p>
                <p>
                    A browser does not display the HTML tags, but uses them to determine
                    how to display the document:
                </p>

                <img className="mb-4 img-fluid" src="/htmlIntro.webp" alt="img" />
            </div>

            <NoteCard
                title="Note"
                content="The content inside the <body> section will be displayed in a browser. The content inside the <title> element will be shown in the browser's title bar or in the page's tab."
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 my-4">
                <ExerciseCard
                    question={exerciseQuestion}
                    options={exerciseOptions}
                    width={75}
                />
            </div>
        </div>
    );
};

export default HTMLIntro;
