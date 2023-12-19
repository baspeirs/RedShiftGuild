import React from "react";
import '../styles/Footer.css';
import FacebookIcon from '../images/SocialMediaIcons/icons8-facebook-48.png';
import InstagramIcon from '../images/SocialMediaIcons/icons8-instagram-48.png';
import TwitterXIcon from '../images/SocialMediaIcons/icons8-twitter-50.png';
import TikTokIcon from '../images/SocialMediaIcons/icons8-tik-tok-48.png';
import GitHubIcon from '../images/SocialMediaIcons/icons8-github-50.png';
import linkedinIcon from '../images/SocialMediaIcons/icons8-linkedin-48.png';
import JointboiFlex from '../images/AdminPictures/jointboiFlex2.png';

export const Footer = () => {

    return (
        <footer id="footer">
            <div id="footer-guild-info">
                <h5 id="redshift-logo">RedShift</h5>
                <p>Social Media links coming soon</p>
                <div className="social-media-link-group">
                    <img src={FacebookIcon} alt="facebook" />
                    <img src={InstagramIcon} alt="instagram" />
                    <img src={TwitterXIcon} alt="twitter/x" />
                    <img src={TikTokIcon} alt="tik tok" />
                </div>
                <div className="additional-links">
                    <a href="https://redshift-guild.herokuapp.com/">
                        <p>FAQ</p>
                    </a>
                    <a href="mailto: baspeirs@gmail.com">
                        <p>Contact</p>
                    </a>
                </div>
            </div>
            <div id="footer-separater">
                <img id="jointboi-flex" src={JointboiFlex} alt="flexing troll" />
            </div>
            <div id="footer-bryce-info">
                <h5>Bryce Speirs Development - 2023</h5>
                <div className="social-media-link-group">
                    <a href='https://github.com/baspeirs'>
                        <img src={GitHubIcon} alt="github" />
                    </a>
                    <a href='https://www.linkedin.com/in/bryce-speirs-bb1319199/'>
                        <img src={linkedinIcon} alt="linkedin" />
                    </a>
                </div>
                <div className="additional-links">
                    <a href='https://baspeirs.github.io/'>
                        <p>Portfolio</p>
                    </a>
                    <a href='mailto: baspeirs@gmail.com'>
                        <p>Contact</p>
                    </a>
                </div>
            </div>
        </footer>
    )
};
