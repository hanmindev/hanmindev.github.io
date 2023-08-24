import {Typography} from "@mui/material";

import React, {useState} from "react";
import ScrollPage from "../../components/ScrollPage";

function Tools() {
    return (
        <ScrollPage>
            <div className="wide-viewer">
                <div className="center-text-box">
                    <Typography variant="h3" component="h2" align="center">
                        Tools
                    </Typography>
                </div>
                <div className="left-text-box">
                    <Typography variant="h5">
                        Nothing to see here!
                    </Typography>
                    <Typography variant="body1" paragraph={true}>
                        There used to be a few tools here (like an uncertainty calculator for physics) but I've removed it while reworking the site.
                        Then I graduated from high school and I haven't had the reason to touch physics since.
                    </Typography>
                    <Typography variant="body1" paragraph={true}>
                        I may add some quaternion-related tools here in the future, but for now, this page is empty.
                    </Typography>

                </div>
            </div>
        </ScrollPage>

  );
}

export default Tools;