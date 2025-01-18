import "./Review.css";
import { motion } from "framer-motion";
export default function Rev() {
    return (
        <motion.div
            initial={{ opacity: 0, translateX:"100%"}}
            whileInView={{ opacity: 1, translateX:0 }}
            transition={{ duration: 2 }}
        >

            <section id="rev" className="container-fluid  p-4 " >
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
                                <img id="image6" src={require("./fashion-6364998_640.jpg")} className="card-img-top" />
                                <div className="card-body" >
                                    <h4 id="info2" className="card-title">Student's Name</h4>
                                    <p id="text2" className="card-text"  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <div className="groub_icon" >
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
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
                                <img id="image6" src={require("./woman-4570763_640.jpg")} className="card-img-top" />
                                <div className="card-body" >
                                    <h4 id="info2" className="card-title">Student's Name </h4>
                                    <p id="text2" className="card-text"  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <div className="groub_icon" >
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
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
                                <img id="image6" src={require("./woman-3116587_640.jpg")} className="card-img-top" />
                                <div className="card-body" >
                                    <h4 id="info2" className="card-title">Student's Name</h4>
                                    <p id="text2" className="card-text"  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <div className="groub_icon" >
                                        <i id="iii"  class="fa-solid fa-star"></i>
                                        <i id="iii"  class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i id="iii" class="fa-solid fa-star"></i>
                                        <i  id="iii" class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                </section>
            </section>
        </motion.div>
    )
}