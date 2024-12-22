import "./About.css";
const About = () => {
    return (
        <>
            <section style={{ marginTop: "10px" }} className="container ">
                <h2 style={{ color: "#BB2C31" }} >About ? </h2>
                <h4 style={{ color: "gray" }} >Start Your Journey With Us .</h4>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-7 col-12" >
                        <h4 id="head4" >Start Your JourneyTo A Better Life With Our Practical Courses .</h4>
                        <p id="text4" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet consectetur, adipisicing elit. amet consectetur, adipisicing elit. amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        <button id="btn4" className="btn ">Learn More</button>
                    </div>
                    <div className="col-md-5 col-12">
                        <img className="p-3" id="image1" src={require("./Learning languages-cuate.png")} />
                    </div>
                </div>
            </section>

        </>

    )
}
export { About };