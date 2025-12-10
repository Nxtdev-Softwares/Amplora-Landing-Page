import { Check } from 'lucide-react';
import proBadge from "../assets/pro-pricing-badge.png";

function PricingCards(props) {
    return (
        <>
        <div className="d-flex justify-content-center align-items-center price-card-container">
            <div className="pricing-card">
                <img src={proBadge} alt="" className={props.setBadgeVisible}/>
                {/* Below text is only visible for the current Amplora V1 */}
                <div className="d-flex align-items-end mb-4">
                    <h2 className='Amplora-v1-text'>Amplora V1 |</h2>
                    <h2 className='tempor-plan-text ms-2'>{props.plan}</h2>
                </div>  
                {/* ^^^^^ */}
                {/* <h5>{props.plan}</h5> */}
                <div className="prices">
                    <h1>{props.price}</h1>
                    <h6>USD / per month</h6>
                </div>
                <p>{props.tag}</p>
                <div className="features-section">
                    <h3>{props.featuresHeading}</h3>
                    <div className={`features ${props.checkmarksColor}`}>
                        {props.features.map(feature => {
                            return (
                              <div className="feature d-flex gap-2">
                                <Check className="check" />
                                <h6>{feature}</h6>
                              </div>
                            );
                        })}
                    </div>
                </div>
                <a href={props.buttonPath}>
                    <button className={props.btnClassName}>{props.btnText}</button>
                </a>
            </div>
        </div>
        </>
    );
}
export default PricingCards;
