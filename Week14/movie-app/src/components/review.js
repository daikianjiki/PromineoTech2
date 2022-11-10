//a text review a user can leave on a movie.
export default function Review ({ review }) {
    return (
        <>
            <div className="form-control alert alert-success mb-1" id="review">
                <div className="row mb-3">
                    <div>
                        From: {review.name}
                        <hr></hr>
                        {review.review}
                    </div>
                </div>
                <span className="position-absolute top-0 start-50 translate-middle p-2 bg-warning rounded-pill">
                    Rated: {review.rating}
                    <span className="visually-hidden">Rating</span>
                </span>
            </div>
        </>
    )
}