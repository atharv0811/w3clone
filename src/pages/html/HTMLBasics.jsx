import CodeExample from "../../components/Code";
import ExerciseCard from "../../components/ExersiceCard";
import Navigation from "../../components/Navigation";
import htmlBasicsData from "../../data/html/htmlBasicsData";

const HTMLBasics = () => {
    const {
        htmlDocumentPoints,
        htmlDocumentCodeSnippet,
        declarationPoints,
        htmlHeadingsCodeSnippet,
        exerciseOptions,
        exerciseQuestion
    } = htmlBasicsData;

    return (
        <div className="my-4" style={{ color: 'var(--text-color)' }}>
            <h1 className="mb-4 ps-4">HTML Basics</h1>
            <Navigation />

            <hr className="my-3 mx-3 text-secondary" />

            <p className="ps-4">
                In this chapter we will show some basic HTML examples.
            </p>
            <p className="ps-4">
                Don't worry if we use tags you have not learned about yet.
            </p>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Documents</h2>
                {htmlDocumentPoints.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample
                    title="Example"
                    buttonText="Try it Yourself »"
                    code={htmlDocumentCodeSnippet}
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">The {"<!DOCTYPE>"} Declaration</h2>

                {declarationPoints.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample code={"<!DOCTYPE html>"} />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Headings</h2>

                <p>
                    HTML headings are defined with the {"<h1>"} to {"<h6>"} tags.
                </p>

                <p>
                    {"<h1>"} defines the most important heading. {"<h6>"} defines the
                    least important heading:
                </p>

                <CodeExample
                    title='Example'
                    buttonText='Try it Yourself »'
                    code={htmlHeadingsCodeSnippet}
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Paragraphs</h2>

                <p>HTML paragraphs are defined with the {"<p>"} tag:</p>

                <CodeExample
                    title='Example'
                    buttonText='Try it Yourself »'
                    code={`<p>This is a paragraph.</p>\n\n<p>This is another paragraph.</p>`}
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Links</h2>

                <p>HTML links are defined with the {"<a>"} tag:</p>

                <CodeExample
                    title='Example'
                    buttonText='Try it Yourself »'
                    code={`<a href="https://www.w3schools.com">This is a link</a>`}
                    className='mb-4'
                />

                <p>The link's destination is specified in the href attribute.</p>
                <p>Attributes are used to provide additional information about HTML elements.</p>
                <p>You will learn more about attributes in a later chapter.</p>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Images</h2>

                <p>HTML images are defined with the {"<img>"} tag.</p>
                <p>The source file (src), alternative text (alt), width, and height are provided as attributes:</p>

                <CodeExample
                    title='Example'
                    buttonText='Try it Yourself »'
                    code={`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`}
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <ExerciseCard
                    question={exerciseQuestion}
                    options={exerciseOptions}
                    width={50}
                />
            </div>
        </div>
    );
};

export default HTMLBasics;
