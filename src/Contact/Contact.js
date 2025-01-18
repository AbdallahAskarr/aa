import { motion } from "framer-motion";
import "./Contact.css";
import React, { Component } from "react";
class Contact extends Component {
    render() {
        return (

            <motion.div
                initial={{ opacity: 0, rotateX: "90deg" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 2 }}
            >

                <section id="con" className="container p-3  ">

                    <h2 style={{ color: "#BB2C31", paddingTop: "10px" }} >Our Teacher </h2>
                    <h4 style={{ color: "gray" }} >Meet Professional Trainers</h4>


                    <div className="row p-3">
                        <div className="col-md-6  p-2  col-12 " >
                            <img id="end_image" src={require("./Mobile Marketing-bro.png")} />
                        </div>
                        <div id="end_child" className="  col-md-6 col-12 ">
                            <form id="form1" >
                                <input type="text" placeholder="username" />
                                <input type="text" placeholder="username" />
                                <input type="text" placeholder="username" />
                                <input type="text" placeholder="username" />
                                <textarea placeholder="    message..."></textarea>

                                <button style={{ position: "relative", top: "40px", right: "70px" }} className="btn btn-dark text-light" >Message</button>
                                <br />
                                <br />
                                <br />

                            </form>
                        </div>






                    </div>
                </section>

            </motion.div>

        )
    }
}
export default Contact;
