const PadButton = ({ sound, label, isActive, onClick }) => {
    return (
        <button
            className={`pad-button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default PadButton;
