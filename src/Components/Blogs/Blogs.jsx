import blogs from "../../assests/blogs.png";
import author from "../../assests/author.png";
import "./Blogs.css";
const Blogs=()=>{

   const displayblog=()=>{
    return(
        <div className="blog-text-conatiner">
        <div className="blog-img"><img src={blogs}/></div>
        <div className="blog-text">
            <div className="blog-first">
                <span>Medical</span>
                <span>March 31, 2022</span>
            </div>
            <div><p className="blog-second">6 Tips To Protect Your Mental Health When You’re Sick</p></div>
            <div className="blog-author">
                <img src={author}/>
                <span>Rebecca Lee</span>
            </div>
        </div>
    </div>
    )
   }

    return(
        <div className="blog-wrapper">
            <div className="blog-head-first">Blog & News</div>
            <div className="blog-head-second">Read Our Latest News</div>
           <div className="blog-container">
            {displayblog()}
            {displayblog()}
            {displayblog()}
            </div>
        </div>
    )
}

export default Blogs;