import Lottie from "lottie-react";

function BenefitCard(props) {
    return(
        <>
        <div className="col-12 col-md-5 benefit-card d-flex justify-content-start align-items-center">
            <div className="icon-container">
                <Lottie
                    autoplay={true} loop={true} animationData={props.icon} className="icon" />
            </div>
            <div className="d-flex justify-content-center align-items-start flex-column">
                <h1>{props.task}</h1>
                <h2>{props.description}</h2>
            </div>
        </div>
        </>
    );
}
export default BenefitCard;
