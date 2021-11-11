import React from 'react';

const Footer = () => {

    const funcCopy = () => {
        // window.open("https://www.linkedin.com/in/julien-horatius-aa5952172/", "lien LinkedIn", "height=200px, width=200px, menubar='yes', toolbar='yes', location='no', status='yes', scrollbars='yes'")
        navigator.clipboard.writeText("julien.horatius@gmail.com");
        alert("Copied the text: \"julien.horatius@gmail.com\"");
    };
    
    return (
        <footer>
            <div id="div_modal">
                <div class="text-hover-div">
                <a href="https://www.linkedin.com/in/julien-horatius-aa5952172/" target="_blank">
                    <button id="linkedin-btn" /*onClick={funcCopy}*/
                        className="pop-linkedin">
                        LinkedIn
                    </button>
                </a>
                    <span class="text-hover">https://www.linkedin.com/in/julien-horatius-aa5952172/"</span>
                </div>
            </div>
            <div id="div_copy">
                <div class="text-hover-div">
                    <button id="email-btn"  onClick={funcCopy}
                        className="pop-email">
                        Email
                    </button>
                    <span id="text-hover2">julien.horatius@gmail.com</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;