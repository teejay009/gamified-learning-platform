import React from "react";
import NavBar from "../../components/landingPage/NavBar";
import HeroSec from "../../components/HeroSec";
import { Box } from "@chakra-ui/react";
import MainBody from "../../components/landingPage/MainBody";

const LandingPage = () => {
  return (
    <React.Fragment>
    <Box px={16}>

      <NavBar />
      <HeroSec/>
      <MainBody/>
    </Box>
    </React.Fragment>
  );
};

export default LandingPage;
