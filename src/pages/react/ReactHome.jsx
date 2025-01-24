import React from "react";
import Navigation from "../../components/Navigation";
import ContentSection from "../../components/ContentSection";
import CodeExample from "../../components/Code";
import ExerciseCard from "../../components/ExersiceCard";
import NoteCard from "../../components/NoteCard";
import { Link } from "react-router-dom";
import {
    contentItems,
    codeSnippet,
    exerciseOptions,
    exerciseQuestion,
    createReactAppPoints
} from "../../data/react/reactTuturialData";

const ReactHome = () => {
    return (
        <div className="my-4 text-white">
            <h1 className="mb-4 ps-4">React Tutorial</h1>
            <Navigation />

            <ContentSection
                backgroundColor="#f3ecea"
                textColor="#000"
                content={contentItems}
                buttonText="Start Learning HTML Now »"
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light">Learning by Examples</h2>

                <p className="fs-6">
                    Our "Show React" tool makes it easy to demonstrate React. It shows
                    both the code and the result.
                </p>

                <CodeExample
                    code={codeSnippet}
                    title="Example"
                    buttonText="Run Example »"
                />
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <p className="fs-3">Learning by Exercises</p>
                <p className="fs-6">
                    Many chapters in this tutorial end with an exercise where you can
                    check you level of knowledge.
                </p>

                <ExerciseCard
                    question={exerciseQuestion}
                    options={exerciseOptions}
                    width={75}
                />

                <button className="btn btn-success mt-3 fw-medium">
                    See all React Exercises
                </button>
            </div>

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light">Create React App</h2>

                {createReactAppPoints.map((point, idx) => {
                    return (
                        <p key={idx} className="my-3">
                            {point}
                        </p>
                    );
                })}

                <CodeExample
                    code='npx create-react-app my-react-app'
                />

                <p className="my-3">create-react-app will set up everything you need to run a React application.</p>

            </div>

            <NoteCard
                title='Note'
                content={
                    <>
                        If you've previously installed <code>create-react-app</code> globally, it is recommended that you uninstall the package to ensure <strong>npx</strong> always uses the latest version of <code>create-react-app</code>. To uninstall, run this command:
                        <code> npm uninstall -g create-react-app</code>.
                    </>
                }
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light">Run the React Application</h2>

                <p className="my-3">Run this command to move to the <code>my-react-app</code> directory:</p>

                <CodeExample
                    code='cd my-react-app'
                />

                <p className="my-3">Run this command to execute the React application <code>my-react-app</code>:</p>

                <CodeExample
                    code='npm start'
                />

                <p className="my-3">A new browser window will pop up with your newly created React App! If not, open your browser and type <code>localhost:3000</code> in the address bar.</p>

                <p className="my-3">The result:</p>

                <img className="img-fluid" src="/screenshot_myfirstreact.webp" alt="screenshot_myfirstreact" />
            </div>

            <NoteCard
                content={
                    <>
                        You will learn more about the <code>create-react-app</code> in the <Link className="text-black" to={'/react-get-started'}>React Get Started</Link> chapter.
                    </>
                }
            />

            <hr className="my-3 mx-3 text-secondary" />

            <div className="px-4 mt-4">
                <h2 className="fs-2 fw-light">What You Should Already Know</h2>
                <p className="my-3">Before starting with React.JS, you should have intermediate experience in:</p>

                <ul className="mx-3">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>

                <p className="my-3">You should also have some experience with the new JavaScript features introduced in ECMAScript 6 (ES6), you will learn about them in the <Link to={'/react-es6'} className="text-white">React ES6</Link> chapter.</p>
            </div>
        </div>
    );
};

export default ReactHome;
