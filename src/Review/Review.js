import "./Review.css";
export default function Rev() {
    return (
        <>

            <section className="container-fluid  p-4 " >
                <section className="container  p-4 " >

                    <h2 style={{ color: "#BB2C31", paddingTop: "0px" }} >Students Review </h2>
                    <h4 style={{ color: "gray", paddingBottom: '27px' }} >What Our Students Say About Us</h4>

                    <div className="row p-3" id="All" >

                        <div className="col-md-3 m-3 col-10 " >
                            <div id="divv" className="card  " >
                                <span id="span1" >
                                    <i id="icon6" class="fa-solid fa-circle"></i>
                                    <i id="icon66" class="fa-solid fa-circle"></i>
                                    <i id="icon666" class="fa-solid fa-circle"></i>
                                </span>
                                <img id="image6" src={require("./woman-3567600_1280.jpg")} className="card-img-top" />
                                <div className="card-body" >
                                    <h4 id="info2" className="card-title">askar</h4>
                                    <p id="text2" className="card-text" >lorem lorem lorem lorem lorem loerm lorem lorem l</p>
                                    <div className="groub_icon" >
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 m-3 col-10 " >
                            <div id="divv" className="card " >
                                <span id="span1" >
                                    <i id="icon6" class="fa-solid fa-circle"></i>
                                    <i id="icon66" class="fa-solid fa-circle"></i>
                                    <i id="icon666" class="fa-solid fa-circle"></i>
                                </span>
                                <img id="image6" src={require("./woman-3567600_1280.jpg")} className="card-img-top" />
                                <div className="card-body" >
                                    <h4 id="info2" className="card-title">askar</h4>
                                    <p id="text2" className="card-text" >lorem lorem lorem lorem lorem loerm lorem lorem l</p>
                                    <div className="groub_icon" >
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 m-3 col-10 " >
                            <div id="divv" className="card " >
                                <span id="span1" >
                                    <i id="icon6" class="fa-solid fa-circle"></i>
                                    <i id="icon66" class="fa-solid fa-circle"></i>
                                    <i id="icon666" class="fa-solid fa-circle"></i>
                                </span>
                                <img id="image6" src={require("./woman-3567600_1280.jpg")} className="card-img-top" />
                                <div className="card-body" >
                                    <h4 id="info2" className="card-title">askar</h4>
                                    <p id="text2" className="card-text" >lorem lorem lorem lorem lorem loerm lorem lorem l</p>
                                    <div className="groub_icon" >
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
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