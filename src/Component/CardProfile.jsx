

export default function CardProfile(props) {
    const review = props.reviews;

    return (
        <div>
            <p>{review.name}</p>
            <p>{review.job}</p>
            <p>{review.text}</p>
            
        </div>
    );
}
