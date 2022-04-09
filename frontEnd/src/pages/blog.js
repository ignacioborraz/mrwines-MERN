import "../styles/blog.css"
import Padlet from "../components/padlet"

export default function Blog () {
    return (
        <div className="containerBlog">
            <div className="blog">
                <div>
                    <h1 className="title red">BLOG</h1> 
                    <h2 className="h2Blog">Tell us about you and the wine</h2>
                </div>
                <div className="containerCardBlog">
                    <Padlet/>
                    <Padlet/>
                    <Padlet/>
                    <Padlet/>
                    <Padlet/>
                </div>
            </div>
        </div>
    )
}