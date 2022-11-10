import Castle from "../images/Castle.jpg"

export default function CastleM() {
    return (
        <div className="container">
            <div id="movieCards" className="card mb-3 container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Castle} className="img-fluid rounded-start" alt="Castle in the Sky"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Castle in the Sky</h1>
                            <p className="card-text"><small className="text-muted">1986 · PG · 2h 5m</small></p>
                            <p className="card-text">In a small mining town, an orphaned teenage boy named Pazu
                            finds and catches a teenage girl floating from the sky named Sheeta. When she 
                            awakens the next day she tells him that she is being chased by pirates and the 
                            government who are after her crystal necklace that is connected to the floating 
                            city of Laputa. It's now up to our two protagonists to find the city before the 
                            Government and pirates can find them and unlock the secret of Laputa and Sheeta's 
                            connection to the floating city.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}