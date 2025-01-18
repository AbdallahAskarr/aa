
import { motion } from "framer-motion";
import "./Home.css";

import Boot from '../Aha/Boot';

import Nav from "../Header/Navbar";
export default function Home() {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
        >



            <section id="home" className="container-fluid col">
                <Nav />
                <h1 className="head1">LEARN ONLINE FROM HOME</h1>
                <p id="text1" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima. <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.. </p>

                <button style={{ border: "none", borderRadius: "10px" }} className="btn btn-danger">Discover More</button>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />



                <Boot />





            </section>


        </motion.div>


    )
}