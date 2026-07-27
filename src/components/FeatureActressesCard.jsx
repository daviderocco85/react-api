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
                    <p>Anno di nascita - <span>{props.featureActresses.birth_year}</span></p>
                    <p>Nazionalità - <span>{props.featureActresses.nationality}</span></p>
                    <p>Bio - <span>{props.featureActresses.biography}</span></p>
                    <p>Premi - <span>{props.featureActresses.awards
                        .map(a => a.replace(/Awards?/i, '').trim())
                        .join(' ')}
                    </span>
                    </p>
                </div>
            </div>
        </>
    );
};