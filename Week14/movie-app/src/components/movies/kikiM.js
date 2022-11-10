import Kiki from '../images/Kiki.jpg'

export default function KikiM() {
    return (
        <div className="container">
            <div id="movieCards" className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Kiki} className="img-fluid rounded-start" alt="Kiki's Delivery Service"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Kiki's Delivery Service</h1>
                            <p className="card-text"><small className="text-muted">1989 · PG · 1h 43m</small></p>
                            <p className="card-text">This is the story of a young witch, named Kiki who is now 
                            13 years old. But she is still a little green and plenty headstrong, but also 
                            resourceful, imaginative, and determined. With her trusty wisp of a talking cat 
                            named Jiji by her side she's ready to take on the world, or at least the quaintly 
                            European seaside village she's chosen as her new home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}