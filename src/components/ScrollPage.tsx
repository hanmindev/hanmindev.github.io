import React from "react";

import "./Footer.css";
import {IconButton, Tooltip, Typography} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
    return (
        <div className="footer">
            <div className="main-footer">
                <div className="footer-left">
                    <Typography variant="body1" color="text.secondary" align="center">
                        Website by Hanmin Kim
                    </Typography>
                </div>
                <div className="footer-right">
                    <Typography variant="body1" color="text.secondary" align="center">
                        Contact me!
                    </Typography>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Tooltip title="Email">
                            <IconButton>
                                <address>
                                <a href="mailto:hanminkim123@gmail.com/"
                                   target="_blank"
                                   rel="noreferrer"><EmailIcon />
                                </a></address>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="LinkedIn">
                            <IconButton>
                                <a href="https://www.linkedin.com/in/hanminkim03/"
                                   target="_blank"
                                   rel="noreferrer"><LinkedInIcon />
                                </a>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="GitHub">
                            <IconButton>
                                <a href="https://github.com/hanmindev"
                                   target="_blank"
                                   rel="noreferrer">
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ScrollPage(props: { children: React.ReactNode }) {
    return (
        <div className="mainScroll">
            <article>
            {React.Children.map(props.children, (child: React.ReactNode) =>
                <div>
                    <section>
                        {child}
                    </section>
                    <hr style={{width: "900px", marginTop: "0px", marginBottom: "25px"}}></hr>
                </div>
            )}
            </article>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default ScrollPage;

