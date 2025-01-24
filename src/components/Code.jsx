const CodeExample = ({ code, title, buttonText }) => {
    return (
        <div className="card bg-secondary text-white mt-4 px-3 py-3">
            {title && <h5 className="mb-3">{title}</h5>}
            <div className="bg-dark pt-3 px-4 rounded">
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
            {buttonText && (
                <button
                    className="btn btn-success shadow mt-2"
                    style={{ width: "167px" }}
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default CodeExample;
