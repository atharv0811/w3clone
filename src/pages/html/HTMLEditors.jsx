import React from "react";
import Navigation from "../../components/Navigation";
import { learnHTMLPoints, codeSnippet } from "../../data/html/htmlEditorsData";
import CodeExample from "../../components/Code";
import NoteCard from "../../components/NoteCard";

const HTMLEditors = () => {
    return (
        <div className="mt-4" style={{ color: 'var(--text-color)' }}>
            <h1 className="mb-4 ps-4">HTML Editors</h1>
            <Navigation />

            <hr className="my-3 mx-3 text-secondary" />

            <p className="ps-4">
                A simple text editor is all you need to learn HTML.
            </p>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light">Learn HTML Using Notepad or TextEdit</h2>
                {learnHTMLPoints.map((point, idx) => {
                    return (
                        <p key={idx} className="my-3">
                            {point}
                        </p>
                    );
                })}
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-3">Step 1: Open Notepad (PC)</h2>

                <b className="my-3">Windows 8 or later:</b>
                <p className="my-3">
                    Open the <b>Start Screen</b> (the window symbol at the bottom left on
                    your screen). Type <b>Notepad</b>.
                </p>
                <b className="my-3">Windows 7 or earlier:</b>
                <p className="my-3">
                    Open{" "}
                    <b>
                        Start {">"} Programs {">"} Accessories {">"} Notepad
                    </b>
                </p>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-3">Step 2: Write Some HTML</h2>
                <p>Write or copy the following HTML code into Notepad:</p>

                <CodeExample code={codeSnippet} />

                <img
                    className="mt-4 img-fluid"
                    src="/img_notepad.webp"
                    alt="img_notepad"
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-3">Step 3: Save the HTML Page</h2>

                <p className="my-3">
                    Save the file on your computer. Select <b>File {">"} Save as</b> in
                    the Notepad menu.
                </p>
                <p className="my-3">
                    Name the file <b>"index.htm"</b> and set the encoding to <b>UTF-8</b>{" "}
                    (which is the preferred encoding for HTML files).
                </p>

                <img
                    className="mt-2 img-fluid"
                    src="/img_saveas.webp"
                    alt="img_saveas"
                />
            </div>

            <NoteCard
                title="Tip"
                content="You can use either .htm or .html as file extension. There is no difference; it is up to you."
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-3">
                    Step 4: View the HTML Page in Your Browser
                </h2>

                <p className="my-3">
                    Open the saved HTML file in your favorite browser (double click on the
                    file, or right-click - and choose "Open with").
                </p>
                <p className="my-3">The result will look much like this:</p>

                <img
                    className="mt-2 img-fluid"
                    src="/img_chrome.webp"
                    alt="img_saveas"
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light mb-3">
                    W3Schools Online Editor - "Try it Yourself"
                </h2>

                <p className="my-3">
                    With our free online editor, you can edit the HTML code and view the
                    result in your browser.
                </p>
                <p className="my-3">
                    It is the perfect tool when you want to test code fast. It also has
                    color coding and the ability to save and share code with others:
                </p>

                <CodeExample
                    title="Example"
                    code={codeSnippet}
                    buttonText="Try it Yourself »"
                />

                <p className="fw-medium my-3 ms-3">
                    Click on the "Try it Yourself" button to see how it works.
                </p>
            </div>
        </div>
    );
};

export default HTMLEditors;
