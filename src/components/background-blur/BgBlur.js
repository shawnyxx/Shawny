import './BgBlur.css';

function BgBlur({ children }) {
    return (
        <div className="BgBlur">
            {children}
        </div>
    );
}

export default BgBlur;