import "./Courses.css";

export default function Course() {
    return (
        <>
            <section className="container-fluid  p-3 " >
                <section className="container  p-4 " >



                    <h2 style={{ color: "#BB2C31", paddingBottom: "" }} >Popular Courses </h2>
                    <h4 style={{ color: "gray", paddingBottom: "10px" }} >Upgrade Your Skill with Newest Courses </h4>
                    <div id="parentt" className="row p-4" >

                        <div id="childd" className="col-md-3 col-12 m-2 "  >
                            <i style={{ position: "relative", bottom: "23px" }} class="fa-solid fa-quote-left"></i>
                            <i id="icon3" class="fa-brands fa-html5"></i>
                            <i class="fa-solid fa-quote-right"></i>
                            <h4>Html 5</h4>
                            <p id="text5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        </div>

                        <div id="childd" className="col-md-3 col-12  m-2 "  >
                            <i style={{ position: "relative", bottom: "23px" }} class="fa-solid fa-quote-left"></i>
                            <i id="icon3" class="fa-brands fa-css3-alt"></i>
                            <i class="fa-solid fa-quote-right"></i>
                            <h4>Css</h4>
                            <p id="text5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        </div>



                        <div id="childd" className="col-md-3 col-12  m-2  "  >
                            <i style={{ position: "relative", bottom: "23px" }} class="fa-solid fa-quote-left"></i>
                            <i id="icon3" class="fa-brands fa-node-js"></i>
                            <i class="fa-solid fa-quote-right"></i>
                            <h4>Javascript</h4>
                            <p id="text5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        </div>


                        <div id="childd" className="col-md-3 col-12  m-2  "  >
                            <i style={{ position: "relative", bottom: "23px" }} class="fa-solid fa-quote-left"></i>
                            <i id="icon3" class="fa-solid fa-code"></i>
                            <i class="fa-solid fa-quote-right"></i>
                            <h5>Web Development</h5>
                            <p id="text5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        </div>


                        <div id="childd" className="col-md-3 col-12  m-2  "  >
                            <i style={{ position: "relative", bottom: "23px" }} class="fa-solid fa-quote-left"></i>
                            <i id="icon3" class="fa-solid fa-microphone"></i>
                            <i class="fa-solid fa-quote-right"></i>
                            <h4>Seo Marketing</h4>
                            <p id="text5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        </div>



                        <div id="childd" className="col-md-3 col-12  m-2  "  >
                            <i style={{ position: "relative", bottom: "23px" }} class="fa-solid fa-quote-left"></i>
                            <i id="icon3"  class="fa-solid fa-paintbrush"></i>
                            <i class="fa-solid fa-quote-right"></i>
                            <h4>Graphic Design</h4>
                            <p id="text5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                        </div>









                    </div>




                </section>
            </section>

        </>
    )
}