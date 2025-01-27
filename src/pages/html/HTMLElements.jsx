import Navigation from "../../components/Navigation";
import NoteCard from "../../components/NoteCard";
import CodeExample from "../../components/Code";
import htmlElementsData from "../../data/html/htmlElementsData";
import ExerciseCard from "../../components/ExersiceCard";

const HTMLElements = () => {
    const {
        nestedHTMLPoints,
        nestedExample,
        exampleExplained,
        neverSkipEndExample,
        exerciseOptions,
        exerciseQuestion,
    } = htmlElementsData;

    return (
        <div className="my-4" style={{ color: 'var(--text-color)' }}>
            <h1 className="mb-4 ps-4">HTML Elements</h1>
            <Navigation />

            <hr className="my-3 mx-3 text-secondary" />

            <p className="ps-4">
                An HTML element is defined by a start tag, some content, and an end tag.
            </p>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Documents</h2>
                <p>The HTML element is everything from the start tag to the end tag:</p>

                <h4 className="fw-medium my-4 mx-1">
                    {"<tagname>"}Content goes here...{"</tagname>"}
                </h4>

                <p>Examples of some HTML elements:</p>

                <h4 className="fw-medium my-4 mx-1">
                    {"<h1>"}My First Heading{"</h1>"}
                </h4>
                <h4 className="fw-medium my-4 mx-1">
                    {"<p>"}My first paragraph.{"</p>"}
                </h4>
            </div>

            <NoteCard
                title="Note"
                content="Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!"
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">Nested HTML Elements</h2>

                {nestedHTMLPoints.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample
                    title={"Example"}
                    buttonText={"Try it Yourself »"}
                    code={nestedExample}
                />

                <h4 className="my-3 fw-light">Example Explained</h4>

                {exampleExplained.first.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample
                    code={`<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>`}
                    className="mb-3"
                />

                {exampleExplained.second.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample
                    code={`<h1>My First Heading</h1>\n<p>My first paragraph.</p>`}
                    className="mb-3"
                />

                {exampleExplained.third.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample code={`<h1>My First Heading</h1>`} className="mb-3" />

                {exampleExplained.forth.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}

                <CodeExample code={`<p>My first paragraph.</p>`} className="mb-3" />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">Never Skip the End Tag</h2>

                <p>
                    Some HTML elements will display correctly, even if you forget the end
                    tag:
                </p>

                <CodeExample
                    title={"Example"}
                    buttonText={"Try it Yourself »"}
                    code={neverSkipEndExample}
                    className="mb-2"
                />

                <b>
                    However, never rely on this! Unexpected results and errors may occur
                    if you forget the end tag!
                </b>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">Empty HTML Elements</h2>

                <p>HTML elements with no content are called empty elements.</p>

                <p>
                    The {"<br>"} tag defines a line break, and is an empty element without
                    a closing tag:
                </p>

                <CodeExample
                    title={"Example"}
                    buttonText={"Try it Yourself »"}
                    code={`<p>This is a <br> paragraph with a line break.</p>`}
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML is Not Case Sensitive</h2>

                <p>
                    HTML tags are not case sensitive: {"<P>"} means the same as {"<p>"}.
                </p>

                <p>
                    The HTML standard does not require lowercase tags, but W3C recommends
                    lowercase in HTML, and demands lowercase for stricter document types
                    like XHTML.
                </p>
            </div>

            <NoteCard content={"At W3Schools we always use lowercase tag names."} />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <ExerciseCard
                    question={exerciseQuestion}
                    options={exerciseOptions}
                    width={75}
                />
            </div>
        </div>
    );
};

export default HTMLElements;
