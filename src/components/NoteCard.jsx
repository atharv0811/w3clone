const NoteCard = ({ title, content }) => {
    return (
        <div className="text-black px-4 py-4 my-4" style={{ backgroundColor: '#fff4a3' }}>
            <p className="m-0 gap-2">
                {title && <b>{title}:</b>} <span>{content}</span>
            </p>
        </div>
    )
}

export default NoteCard