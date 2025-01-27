const ContentSection = ({
    backgroundColor = "var(--content-section-bg)",
    color = "var(--text-color)",
    content,
    buttonText,
}) => {
    return (
        <div className="p-4" style={{ backgroundColor, color }}>
            <ul className="m-0 p-0">
                {content.map((item, index) => (
                    <li className="list-unstyled mb-4" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <button className="btn btn-success">{buttonText}</button>
        </div>
    );
};

export default ContentSection;
