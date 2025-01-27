import CodeExample from "../../components/Code";
import ExerciseCard from "../../components/ExersiceCard";
import Navigation from "../../components/Navigation";
import NoteCard from "../../components/NoteCard";
import htmlHeadingsData from "../../data/html/htmlHeadingsData";

const HTMLHeadings = () => {
    const {
        headingsExample,
        htmlHeadingsExample,
        headingsPoints,
        exerciseOptions,
        exerciseQuestion,
    } = htmlHeadingsData;

    return (
        <div className="my-4" style={{ color: 'var(--text-color)' }}>
            <h1 className="mb-4 ps-4">HTML Headings</h1>
            <Navigation />

            <hr className="my-3 mx-3 text-secondary" />

            <p className="ps-4">
                HTML headings are titles or subtitles that you want to display on a
                webpage
            </p>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <CodeExample
                    title={"Example"}
                    buttonText={"Try it Yourself »"}
                    code={headingsExample}
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">HTML Headings</h2>

                <p>
                    HTML headings are defined with the <code>{"<h1>"}</code> to{" "}
                    <code>{"<h6>"}</code> tags.
                </p>

                <p>
                    <code>{"<h1>"}</code> defines the most important heading.{" "}
                    <code>{"<h6>"}</code> defines the least important heading.
                </p>

                <CodeExample
                    title={"Example"}
                    buttonText={"Try it Yourself »"}
                    code={htmlHeadingsExample}
                />
            </div>

            <NoteCard
                title={"Note"}
                content={
                    "Browsers automatically add some white space (a margin) before and after a heading."
                }
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">Headings Are Important</h2>

                {headingsPoints.map((point, idx) => {
                    return <p key={idx}>{point}</p>;
                })}
            </div>

            <NoteCard
                title={"Note"}
                content={
                    <>
                        Use HTML headings for headings only. Don't use headings to make text{" "}
                        <b>BIG</b> or <b>bold</b>.
                    </>
                }
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-4">Bigger Headings</h2>

                <p>
                    Each HTML heading has a default size. However, you can specify the
                    size for any heading with the <code>style</code> attribute, using the
                    CSS <code>font-size</code> property:
                </p>

                <CodeExample
                    title={"Example"}
                    buttonText={"Try it Yourself »"}
                    code={`<h1 style="font-size:60px;">Heading 1</h1>`}
                />
            </div>

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

export default HTMLHeadings;
