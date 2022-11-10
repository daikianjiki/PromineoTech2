import { Route, Routes, Link } from 'react-router-dom'
import CastleM from './movies/castleM'
import HowlsM from './movies/howlsM'
import KikiM from './movies/kikiM'
import PrincessM from './movies/princessM'
import SpiritedM from './movies/spiritedM'
import TotoroM from './movies/totoroM'

export default function NavBar() {
    return (
        <>
        <div className="menu mb-3 container">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success mb-3"> <Link to="/">Castle in the Sky</Link> </button> 
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success mb-3"> <Link to="/howls">Howl's Moving Castle</Link> </button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success mb-3"> <Link to="/kiki">Kiki's Delivery Serivce</Link> </button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success mb-3"> <Link to="/princess">Princess Mononoke</Link> </button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success mb-3"> <Link to="/spirited">Spirited Away</Link> </button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success mb-3"> <Link to="/totoro">My Neighbor Totoro</Link> </button>
                </div>
            </div>
        </div>
        <div>
            <Routes>
                <Route exact path="/" element={<CastleM />}/>
                <Route path="/howls" element={<HowlsM />}/>
                <Route path="/kiki" element={<KikiM />}/>
                <Route path="/princess" element={<PrincessM />}/>
                <Route path="/spirited" element={<SpiritedM />}/>
                <Route path="/totoro" element={<TotoroM />}/>
            </Routes>
        </div>
        </>
    )
}