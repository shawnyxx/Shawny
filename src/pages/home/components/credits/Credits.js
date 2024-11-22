import './Credits.css';
import BigWindow from '../../../../components/windows/big/BigWindow';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/cjs/utils/index.js';

function Home() {
    const [creditsVisible, setCreditsVisible] = useState(true);
    return (
        <>
            {creditsVisible && (
                <BigWindow isVisible={creditsVisible} onClose={() => setCreditsVisible(false)}>
                    <div className="CreditsScroll">
                        <h1>Credits</h1>

                        <p>This content is provided to you by &copy ecxo.games</p>
                        <p>For more information, visit our website at <a href="https://ecxogames.ca/" target="_blank">ecxogames.ca</a></p>

                        <h3>Special Thanks</h3>

                        <h5>Special thanks to the following people for their contributions to the development of this website:</h5>
                        <p>Ryan S. H., A. Maxence F. M., Aniss S., S. Jinguyan, Navid S., Louis R.</p>

                        <h5>Special thanks to the following people for the time they offered to test and give feedback to the game</h5>
                        <p>Louis L., Sasha J. R., Phong, Thach-Hieu D., My sister</p>


                        <h5>Contact info</h5>
                        <p>To contact any of the developers, you can write an <a href="mailto:support@ecxogames.ca">email</a> from this link.</p>

                        <h5>Legal</h5>

                        <p>By knowing the existence of this product, you agree to the legal copyright of the product.</p>
                        <p>Any reproduction of the product is strictly prohibited. And could be subject to be taken down</p>
                        <p>For more information, please refer to the <a href="https://ecxogames.ca/legal">legal page</a> of our website.</p>

                        <p>&copy 2024 ecxo.games - Montreal Canada</p>
                        <a href="https://ecxogames.ca/">ecxogames.ca</a>


                        <h6>Thank you for your support and happy gaming!</h6>

                        <p>Sean-Xavier C. L.</p>
                    </div>
                </BigWindow>
            )}
        </>
    );
}

export default Home;