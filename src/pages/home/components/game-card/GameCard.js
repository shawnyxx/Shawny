import './GameCard.css';

function GameCard({ image, setCurrentComponent }) {
    const handleClick = () => {
        if (image.includes('money-game-logo.png')) {
            setCurrentComponent('MoneyGame');
        } else if (image.includes('click-balls-logo.png')) {
            setCurrentComponent('ClickBalls');
        } else if (image.includes('the-disturbance-logo.png')) {
            setCurrentComponent('TheDisturbance');
        }
    };

    return (
        <div className="GameCard" onClick={handleClick}>
            <img src={image} className='GameCardImage' />
        </div>
    );
}

export default GameCard;