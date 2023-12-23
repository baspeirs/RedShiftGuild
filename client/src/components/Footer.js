import React from "react";
import '../styles/Footer.css';
import GitHubIcon from '../images/SocialMediaIcons/icons8-github-48.png';
import LinkedinIcon from '../images/SocialMediaIcons/icons8-linkedin-48.png';
import PortfolioIcon from '../images/SocialMediaIcons/icons8-source-code-48.png';
import EmailIcon from '../images/SocialMediaIcons/icons8-email-48.png';

export const Footer = () => {

    return (
        <footer id="footer">
                <h5>Bryce Speirs Development &copy; 2024</h5>
                    <a href='https://github.com/baspeirs'>
                        <img src={GitHubIcon} alt="github" />
                        GitHub
                    </a>
                    <a href='https://www.linkedin.com/in/bryce-speirs-bb1319199/'>
                        <img src={LinkedinIcon} alt="linkedin" />
                        LinkedIn
                    </a>
                    <a href='https://baspeirs.github.io/'>
                    <img src={PortfolioIcon} alt="portfolio" />
                        Portfolio
                    </a>
                    <a href='mailto: baspeirs@gmail.com'>
                    <img src={EmailIcon} alt="email" />
                        Contact
                    </a>
        </footer>
    )
};
