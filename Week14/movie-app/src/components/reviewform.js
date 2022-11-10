import React, { useState, useRef } from 'react'
import ReviewList from './reviewlist'

//a container inside of a Movie that houses Review compnents.

export default function ReviewForm() {
    const [reviews, reviewList] = useState([])
    const nameRef = useRef()
    const reviewRef = useRef()
    const ratingRef = useRef()

    function sendInfo(e) {
        const name = nameRef.current.value
        const review = reviewRef.current.value
        const rating = ratingRef.current.value 
        if (name ==='') return
        reviewList(prevReviews => {
            return [...prevReviews, {id: 1, name: name, review: review, rating: rating}]
        })
        nameRef.current.value = null
        reviewRef.current.value = null
        ratingRef.current.value = 0
    }
    
    return(
        <>
        <div className="container"> 
            <div className="row">
                <div className="col-md">
                    <ReviewList reviews={reviews} />
                </div>
                <div className="alert alert-success col-md">
                    <div className="form-floating mb-1">
                        <input ref={nameRef} type="text" className="form-control" id="nameInput" plaeholder="Name"></input>
                        <label>Name</label>
                    </div>
                    <div className="form-floating mb-1">
                        <textarea ref={reviewRef} className="form-control" id="textInput"></textarea>
                        <label className="form-label">Leave your reviews here!</label>
                    </div>
                    <select ref={ratingRef} className="form-select mb-1" aria-label="Default select example">
                        <option value="0">Rate from 1 to 3!</option>
                        <option value="1">1: It was ok...</option>
                        <option value="2">2: It was good.</option>
                        <option value="3">3: It was awesome!</option>
                    </select>
                        <button onClick={sendInfo} type="button" className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
        </>
    )
    
}