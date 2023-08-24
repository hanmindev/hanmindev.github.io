import {IconButton, SvgIcon, Tooltip, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

import React, {useState} from "react";
import ScrollPage from "../components/ScrollPage";

function Copybutton(props: { copyText: string; copyMessage: string }) {

    const [checked, setChecked] = useState(false);
    const [buttonTimeout, setButtonTimeout] = useState<any>(undefined);

    const handleClick = () => {
        setChecked(true);
        navigator.clipboard.writeText(props.copyText)

        if (buttonTimeout) {
            clearTimeout(buttonTimeout);
            setButtonTimeout(undefined);
        }

        setButtonTimeout(setTimeout(() => {
            setChecked(false);
        }, 2000));
    }


    return (
        <Tooltip title={checked ? "Copied to Clipboard": props.copyMessage}>
            <IconButton onClick={handleClick}>
                {checked ? <CheckIcon />: <ContentCopyIcon />}
            </IconButton>
        </Tooltip>
    )
}

function Featured() {
    return (
        <ScrollPage>
            <div className="wide-viewer">
                <div className="center-text-box">
                    <Typography variant="h3" component="h2" align="center">
                        Contact
                    </Typography>
                </div>
                <div className="side-by-size-viewer">
                    <div className="left-text-box">
                        <Typography variant="h5">
                            General inquiries
                        </Typography>
                        <Typography variant="body1" paragraph={true}>
                            For general inquiries please email me at <address><a href="mailto:hanminkim123@gmail.com">hanminkim123@gmail.com</a></address>
                        </Typography>

                    </div>

                    <div className="left-text-box">
                        <Typography variant="h5">
                            Minecraft-Related inquiries:
                        </Typography>
                        <Typography variant="body1" paragraph={true}>
                            For Minecraft-related inquiries please email me at <address><a href="mailto:commanderredstoneofficial@gmail.com">commanderredstoneofficial@gmail.com</a></address>
                        </Typography>
                        <Typography variant="body1" paragraph={true}>
                            Alternatively, for casual contacts, message me on Discord! <b>cmdrredstone<Copybutton copyText="cmdrredstone" copyMessage="Copy Discord ID" /></b>
                        </Typography>
                    </div>
                </div>
            </div>
        </ScrollPage>
  );
}

export default Featured;