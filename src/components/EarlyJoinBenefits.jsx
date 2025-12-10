
function EarlyJoinBenefits(props) {
    return(
        <>
        <div className="early-join-benefit-container d-flex align-items-center px-2">
            <div className="early-join-benefits d-flex align-items-center">
                <div className="top-line"></div>
                <div className="icon-container">{props.icon}</div>
                <h4>{props.feature}</h4>
                <p>{props.paragraph}</p>
            </div>
        </div>
        </>
    );
}
export default EarlyJoinBenefits;
