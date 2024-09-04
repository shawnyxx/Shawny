import { useState } from 'react';
import './ClickToHide.css';
import StarField from '../starry-background/StarField';

function ClickToHide() {
    const [hidden, setHidden] = useState(false);

    return (
        hidden ? null : (
            <div className="ClickToHide" onClick={() => setHidden(true)}>
                <StarField />
                <p className="ClickToHideText">Click anywhere to start...</p>
            </div>
        )
    );
}

export default ClickToHide;