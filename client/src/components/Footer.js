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
                <div id="guild-info-left">
                    <h5>Red Shift</h5>
                    <p>Social Media links coming soon</p>
                    <div id="social-media-link-group">
                        <img src={FacebookIcon} alt="facebook" />
                        <img src={InstagramIcon} alt="instagram" />
                        <img src={TwitterXIcon} alt="twitter/x" />
                        <img src={TikTokIcon} alt="tik tok" />
                    </div>
                </div>
                <div id="guild-info-right">
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

            </div>
            <div id="footer-separater">
                <img id="jointboi-flex" src={JointboiFlex} alt="flexing troll" />
            </div>
            <div id="footer-bryce-info">
                <div id="bryce-info-left">
                    <h5>Bryce Speirs Development - 2023</h5>
                    <img src={GitHubIcon} alt="github" />
                    <img src={linkedinIcon} alt="linkedin" />
                </div>
                <div id="bryce-info-right">
                    <p>portfolio</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>

            </div>
        </footer>
    )
};


