import Spirited from "../images/Spirited.jpg"

export default function SpiritedM() {
    return (
        <div className="container">
            <div id="movieCards" className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Spirited} className="img-fluid rounded-start" alt="Spirited Away"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Spirited Away</h1>
                            <p className="card-text"><small className="text-muted">2001 · PG · 2h 5m</small></p>
                            <p className="card-text">10-year-old Chihiro and her parents are riding along 
                            during a family outing through the countryside when they stumble across an 
                            amusement park that has seemingly been abandoned for years. Despite Chihiro's 
                            premonitions about the creepy setting, her parents explore the area and eventually 
                            discover and indulge in an empty eatery filled with fresh food. As a result of 
                            their unfaithfulness, they are magically turned into pigs, which in turn scares 
                            away Chihiro. She meets the enigmatic Haku, who explains to her that this land is 
                            actually a magical bath house, a kind of holiday resort, where supernatural beings 
                            seek comfort away from the earthly realm and she must work here, as laziness is not 
                            permitted, to free both herself and her parents from the mystical land.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}