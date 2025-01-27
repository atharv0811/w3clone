const CodeExample = ({ code, title, buttonText, className = "" }) => {
    return (
        <div className={`card mt-4 px-3 py-3 ${className}`} style={{ backgroundColor: 'var(--background-color-example)', color: 'var(--text-color)' }}>
            {title && <h5 className="mb-3">{title}</h5>}
            <div className="pt-3 px-4 rounded" style={{ backgroundColor: 'var(--background-color-code)' }}>
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
