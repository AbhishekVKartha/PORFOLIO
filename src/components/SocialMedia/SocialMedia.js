import { useSelector } from "react-redux";
import { StyleWrapper } from "./SocialMedia.styled";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";

const SocialMedia = () => {
  const linkedin = useSelector((state) => state.linkedin);
  const github = useSelector((state) => state.github);
  const emailId = useSelector((state) => state.emailId);
  const [openCopy, setOpenCopy] = useState();

  const handleClick = () => {
    setOpenCopy(true);
    navigator.clipboard.writeText(emailId);
    setTimeout(() => {
      setOpenCopy(false);
    }, 2000);
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit"></IconButton>
    </>
  );

  return (
    <StyleWrapper
      id="connect"
      className="d-flex flex-column align-items-center w-100"
    >
      <h1>Lets Connect</h1>
      <div className="d-flex justify-content-evenly align-items-center">
        <div className="social-wrapper">
          <SiGmail className="social-icon" onClick={handleClick} />
          <Snackbar
            open={openCopy}
            autoHideDuration={2000}
            message="Email ID Copied"
            action={action}
          />
        </div>
      </div>
    </StyleWrapper>
  );
};

export default SocialMedia;
