import React from "react";
import "./Home.css";

const Results = ({searchResult}) => {
    return(
        <div>
            You searched for {searchResult}
        </div>
    );
}
export default Results;