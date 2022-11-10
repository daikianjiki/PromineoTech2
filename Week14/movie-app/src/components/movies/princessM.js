import Princess from "../images/Princess.jpg"

export default function PrincessM() {
    return (
        <div className="container">
            <div id="movieCards" className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Princess} className="img-fluid rounded-start" alt="Princess Mononoke"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Princess Mononoke</h1>
                            <p className="card-text"><small className="text-muted">1997 · PG · 2h 14m</small></p>
                            <p className="card-text">While protecting his village from rampaging boar-god/demon, 
                            a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, 
                            he must journey to the forests of the west. Once there, he's embroiled in a fierce 
                            campaign that humans were waging on the forest. The ambitious Lady Eboshi and her 
                            loyal clan use their guns against the gods of the forest and a brave young woman, 
                            Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both 
                            sides and tries to stem the flood of blood. This is met by animosity by both sides 
                            as they each see him as supporting the enemy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}