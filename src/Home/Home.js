
import "./Home.css";

import Boot from '../Aha/Boot';

import Nav from "../Header/Navbar";
export default function Home() {
    return (
        <>


            <section id="home" className="container-fluid col">
                <Nav />
                <h1 className="head1">LEARN ONLINE FROM HOME</h1>
                <p id="text1" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, minima. <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.. </p>

                <button style={{ border: "none", borderRadius: "10px"}} className="btn btn-danger">Discover More</button>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />



                <Boot />
            




            </section>

        </>


    )
}