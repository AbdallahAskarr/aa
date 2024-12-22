
import "./Navbar.css";
export default function Nav() {

    return (
        <>
            <nav style={{ marginTop: "10px", borderRadius: "30px", opacity:'.7'}} class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a id="logo" class="navbar-brand" href="#">  <i style={{color:"red"}} class="fa-solid fa-graduation-cap"></i> LEARN.</a>
                    <button style={{ border: "none" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler" style={{ border: "none" }}><i style={{ fontWeight: "bolder" }} class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul class="navbar-nav me-0 mb-2   ms-auto mb-lg-0 ">
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link " aria-current="page" href="#parent">Home</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start ">
                                <a id="a" class="nav-link" href="#special">About</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#parent_two">Teacher</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#menuu">Course</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#team">Review</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#team">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>


    )
}