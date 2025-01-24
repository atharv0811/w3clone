import React from "react";
import Navigation from "../../components/Navigation";
import ContentSection from "../../components/ContentSection";
import CodeExample from "../../components/Code";
import ExerciseCard from "../../components/ExersiceCard";
import {
    codeSnippet,
    contentItems,
    exerciseOptions,
    exerciseQuestion,
} from "../../data/html/htmlHome";

const HTMLHome = () => {
    return (
        <div className="my-4 text-white">
            <h1 className="mb-4 ps-4">HTML Tutorial</h1>
            <Navigation />

            <ContentSection
                backgroundColor="#193d3d"
                content={contentItems}
                buttonText="Start Learning HTML Now »"
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light">Easy Learning with HTML "Try it Yourself"</h2>
                <p className="fs-6">
                    With our "Try it Yourself" editor, you can edit the HTML code and view
                    the result:
                </p>

                <CodeExample
                    code={codeSnippet}
                    title="Example"
                    buttonText="Try it Yourself »"
                />
                <p className="fw-medium my-3 ms-3">
                    Click on the "Try it Yourself" button to see how it works.
                </p>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <p className="fs-3">HTML Examples</p>
                <p className="fs-6">
                    In this HTML tutorial, you will find more than 200 examples. With our
                    online "Try it Yourself" editor, you can edit and test each example
                    yourself!
                </p>
                <button className="btn btn-secondary">Go to HTML Examples!</button>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <p className="fs-3">HTML Exercises</p>
                <p className="fs-6">
                    Many chapters in this tutorial end with an exercise where you can
                    check your level of knowledge.
                </p>

                <ExerciseCard
                    question={exerciseQuestion}
                    options={exerciseOptions}
                    width="auto"
                />

                <button className="btn btn-success mt-3 fw-medium">
                    See all HTML Exercises
                </button>
            </div>
        </div>
    );
};

export default HTMLHome;
