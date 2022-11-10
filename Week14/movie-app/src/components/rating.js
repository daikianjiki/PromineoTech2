import ReactStars from "react-rating-stars-component";

//a one to five-star rating component that allows users to rate something.
export default function Rating() {
    return (
        <ReactStars 
        count={5}
        onChange={StarRating}
        size={48}
        activeColors="#ffd700"
        />
    )
}