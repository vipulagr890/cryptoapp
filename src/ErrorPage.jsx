import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ErrorPage = () => {
  return (
    <div>
        
        <h1>This page isn't available</h1>
        <p>The link may be broken, or the page may have been removed.<br />
             Check to see if the link you're trying to open is correct.</p>
        <Link to="/Home"><Button color="primary">Go Back</Button></Link>
    </div>
  )
}

export default ErrorPage