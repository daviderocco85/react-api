import './FeatureActressesCard.css';

export const FeatureActressesCard = props => {
    return (
        <>
            <div className="feature-card">
                <div className="pic-actresses">
                    <img src={props.featureActresses.image} alt={props.featureActresses.name} />
                </div>
                <div className="bio">
                    <h2>{props.featureActresses.name}</h2>
                    <p>{props.featureActresses.birth_year}</p>
                    <p>{props.featureActresses.nationality}</p>
                    <p>{props.featureActresses.biography}</p>
                    <p>{props.featureActresses.awards}</p>
                </div>
            </div>
        </>
    );
};