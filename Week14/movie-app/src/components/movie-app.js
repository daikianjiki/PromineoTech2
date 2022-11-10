import NavBar from './navbar'
import headerimg from "./images/headerimg.png"
import ReviewForm from "./reviewform"

export default function MovieApp() {

    return(
    <div className="container" id="bg">
        <header>
            <img src={headerimg} className="img-fluid" alt=""></img>
            <br></br>
            <br></br>
        </header>
        <main>
            <NavBar />
        </main>
        <footer>
            <ReviewForm />
        </footer>
    </div>
    )
}