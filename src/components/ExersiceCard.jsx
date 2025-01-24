import { HelpCircle } from "lucide-react";

const ExerciseCard = ({ question, options, width }) => {
    return (
        <div className="card rounded-3 pt-4 pb-3" style={{ backgroundColor: "#2d3748" }}>
            <h3 className="text-center text-white fs-1 fw-light">
                Exercise <HelpCircle className="position-relative" style={{ top: "-10px", left: "-10px" }} />
            </h3>
            <p className="text-center text-white fw-semibold mt-1">{question}</p>

            <div className={`w-${width} mx-auto`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="card bg-secondary mx-3 my-1 d-flex flex-row align-items-center gap-3 px-3 py-2"
                        style={{ cursor: "pointer" }}
                    >
                        <input
                            className="form-check-input mt-0"
                            type="radio"
                            name="flexRadioDefault"
                            id={`option-${index}`}
                        />
                        <label className="form-check-label text-white" htmlFor={`option-${index}`} style={{ cursor: 'pointer' }}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>

            <button className="btn btn-success mt-4 mx-auto" style={{ width: "167px" }}>
                Submit Answer »
            </button>
        </div>
    );
};

export default ExerciseCard;
