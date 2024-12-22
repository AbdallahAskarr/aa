import "./Team.css";
const Team = () => {
    return (
        <>
            <section style={{ marginTop: "45px" }} className="container-fluid  " >
                <section className="container" >
                    <h2 style={{ color: "#BB2C31", paddingTop: "40px" }} >Our Teacher </h2>
                    <h4 style={{ color: "gray" }} >Meet Professional Trainers</h4>

                    <div id="sec" className="row" >

                        <div className="col-md-3 p-4 col-12">
                            <div id="as" className="card" >
                                <img id="image3" src={require("./woman-3567600_1280.jpg")} className="card-img-top p-3" />
                                <div className="card-body" >
                                    <h5 id="head3" className="card-title">Someone's Name</h5>
                                    <p className="card-text" >I Love Teaching</p>
                                    <div className="iconn" >
                                        <i id="i" class="fa-brands fa-facebook-f"></i>
                                        <i id="i" class="fa-brands fa-twitter"></i>
                                        <i id="i" class="fa-brands fa-instagram"></i>
                                        <i id="i" class="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 p-4 col-12 ">
                            <div id="as" className="card " >
                                <img id="image3" src={require("./woman-7165664_640.jpg")} className="card-img-top p-3" />
                                <div className="card-body" >
                                    <h5 id="head3" className="card-title">Someone's Name</h5>
                                    <p className="card-text" >I Love Teaching</p>
                                    <div className="iconn" >
                                        <i id="i" class="fa-brands fa-facebook-f"></i>
                                        <i id="i" class="fa-brands fa-twitter"></i>
                                        <i id="i" class="fa-brands fa-instagram"></i>
                                        <i id="i" class="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 p-4 col-12">
                            <div id="as" className="card " >
                                <img id="image3" src={require("./woman-8451051_640.webp")} className="card-img-top p-3" />
                                <div className="card-body" >
                                    <h5 id="head3" className="card-title">Someone's Name</h5>
                                    <p className="card-text" >I Love Teaching</p>
                                    <div className="iconn" >
                                        <i id="i" class="fa-brands fa-facebook-f"></i>
                                        <i id="i" class="fa-brands fa-twitter"></i>
                                        <i id="i" class="fa-brands fa-instagram"></i>
                                        <i id="i" class="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 p-4 col-12">
                            <div id="as" className="card " >
                                <img id="image3" src={require("./ai-generated-9010550_640.webp")} className="card-img-top p-3" />
                                <div className="card-body" >
                                    <h5 id="head3" className="card-title">Someone's Name</h5>
                                    <p className="card-text" >I Love Teaching</p>
                                    <div className="iconn" >
                                        <i id="i" class="fa-brands fa-facebook-f"></i>
                                        <i id="i" class="fa-brands fa-twitter"></i>
                                        <i id="i" class="fa-brands fa-instagram"></i>
                                        <i id="i" class="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </section>
            </section>
        </>
    )
}
export { Team };