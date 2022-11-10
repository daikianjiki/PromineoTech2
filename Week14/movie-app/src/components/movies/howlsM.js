import Howls from '../images/Howls.jpg'

export default function HowlsM() {
    return (
        <div className="container">
            <div id="movieCards" className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Howls} className="img-fluid rounded-start" alt="Howl's Moving Castle"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Howl's Moving Castle</h1>
                            <p className="card-text"><small className="text-muted">2004 · PG · 1h 59m</small></p>
                            <p className="card-text">A love story between an 18-year-old girl named Sophie, 
                            cursed by a witch into an old woman's body, and a magician named Howl. Under the 
                            curse, Sophie sets out to seek her fortune, which takes her to Howl's strange moving
                            castle. In the castle, Sophie meets Howl's fire demon, named Karishifâ. Seeing that
                            she is under a curse, the demon makes a deal with Sophie--if she breaks the 
                            contract he is under with Howl, then Karushifâ will lift the curse that Sophie is
                            under, and she will return to her 18-year-old shape.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}