import './NormalPopup.css';
import BgBlur from '../../background-blur/BgBlur';

function NormalPopup({ children }) {
    return (
        <BgBlur>
            <div className="NormalPopup">
                {children}
            </div>
        </BgBlur>
    );
}

export default NormalPopup;