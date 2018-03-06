import React from "react"

const Footer = () => {
    // console.log("rendering Footer")
    return (
    <footer className="footer">
        <p>&copy; {(new Date().getFullYear())} Dalhousie Internetworking</p>
    </footer>
    )
}

export default Footer