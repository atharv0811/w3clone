import React from "react";

const HTMLHome = () => {
    return (
        <div className="mt-4 text-white">
            <h1 className="mb-4 ps-4">HTML Tutorial</h1>
            <div className="content mb-5">
                <div className="p-4" style={{ backgroundColor: "#193d3d" }}>
                    <ul className="m-0 p-0">
                        <li className="list-unstyled mb-4">
                            HTML is the standard markup language for Web pages.
                        </li>
                        <li className="list-unstyled mb-4">
                            With HTML you can create your own Website.
                        </li>
                        <li className="list-unstyled mb-4">
                            HTML is easy to learn - You will enjoy it!
                        </li>
                    </ul>
                    <button className="btn btn-success">Start Learning HTML Now »</button>
                </div>

                <hr className="my-3 mx-3 text-secondary" />

                <div className="ps-4 mt-4">
                    <p className="fs-3">Easy Learning with HTML "Try it Yourself"</p>
                    <p className="fs-6">
                        With our "Try it Yourself" editor, you can edit the HTML code and
                        view the result:
                    </p>
                </div>

                <div className="card bg-secondary text-white mt-4 mx-4 px-3 py-3">
                    <h5>Example</h5>
                    <div className="bg-dark p-4 rounded mb-3">
                        <pre>
                            <code>
                                {`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
                            </code>
                        </pre>
                    </div>
                    <button className="btn btn-success" style={{ width: '167px' }}>
                        Try it Yourself »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HTMLHome;
