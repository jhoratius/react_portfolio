import React from 'react';

const Footer = () => {

    const funcModal = () => {
        if(document.getElementById("modal").style.display === "none"){
            document.getElementById("modal").style.display = "block";
        } else {
            document.getElementById("modal").style.display = "none";
        }
    };
    
    return (
        <footer>
            <div id="div_modal">
                <div>
                    <button onClick={funcModal} 
                        className="pop-linkedin"> 
                        LinkedIn
                    </button>
                </div>
                <div id="modal">
                    <a href="https://www.linkedin.com/in/julien-horatius-aa5952172/"
                        target="_blank" rel="noreferrer">
                        https://www.linkedin.com/in/julien-horatius-aa5952172/
                    </a>
                </div>
            </div>
            <div id="div_copy">
                <div>
                    <input type="button" id="copy" value="julien.horatius@gmail.com" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;