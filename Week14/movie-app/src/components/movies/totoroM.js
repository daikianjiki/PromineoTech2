import Totoro from "../images/Totoro.jpg"

export default function TotoroM() {
    return (
        <div className="container">
            <div id="movieCards" className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Totoro} className="img-fluid rounded-start" alt="My Neighbor Totoro"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">My Neighbor Totoro</h1>
                            <p className="card-text"><small className="text-muted">1988 · G · 1h 26m</small></p>
                            <p className="card-text">Two young girls, 10-year-old Satsuki and her 4-year-old s
                            ister Mei, move into a house in the country with their father to be closer to their 
                            hospitalized mother. Satsuki and Mei discover that the nearby forest is inhabited 
                            by magical creatures called Totoros (pronounced toe-toe-ro). They soon befriend 
                            these Totoros, and have several magical adventures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}