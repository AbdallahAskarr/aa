import "./Boot.css";
function Boot() {

    return (
        <>
            <section className="container ">
                <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: 'center', position: "relative", bottom: "60px" }}>


                    <div style={{ boxShadow: "1px 0px 2px black" }} className="col-md-3  p-2 m-md-2 m-0  col-6">

                        <i id="icon1" class="fa-solid fa-graduation-cap"></i>
                        <h3 id="head2">Trendin Courses</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>

                    </div>
                    <div style={{ boxShadow: "1px 0px 2px black" }} className="col-md-3  p-2 m-md-2 m-0  col-6">

                        {/* <i id="icon1" class="fa-solid fa-fire"></i> */}
                        <i id="icon1" class="fa-solid fa-pen"></i>
                        <h3 id="head2">Trendin Courses</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                    </div>

                    <div style={{ boxShadow: "1px 0px 2px black" }} className="col-md-3  p-2  m-md-2 m-0 col-6">
                        {/* <i id="icon1" class="fa-solid fa-certificate"></i> */}
                        <i id="icon1" class="fa-solid fa-paper-plane"></i>

                        <h3 id="head2" >Trendin Courses</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima.</p>
                    </div>




                </div>
            </section>
        </>
    );
}

export default Boot;