import React from 'react'; 

{/* The Card functions */}
function Card({title}){
    return(
        <div className="wrapper">
            <div className="card">
                <h5 className="title">{title}</h5>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <div>
                    <span className="learn_more"> Learn More </span>
                        <svg viewBox="0 0 100 40" className="arrow_right">
                            <line x1="2.584" y1="20" x2="92.362" y2="20"></line>
                            <polyline points="77.438,5.076 92.362,20 77.438,34.924"></polyline>
                        </svg>
                </div>
            </div>
        </div>
    )
}

export default Card;