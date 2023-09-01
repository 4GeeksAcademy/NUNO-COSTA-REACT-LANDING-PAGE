import React from "react";

const items = ["Home", "About", "Services", "Contact"];


const Navbar = () => {
    return (
    <div className="bg-secondary d-flex container-box justify-content-between">
        <div className="d-flex align-items-center">
            <h3 className="mt-2 ms-4 pb-2">Start Bootstrap</h3>
        </div>
        <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center">
                {items.map((item,i)=>{return <li className="mt-2 me-3 pb-2" key={i}>{item}</li>})}
            </ul>
        </div>
    </div>)
};

export default Navbar;