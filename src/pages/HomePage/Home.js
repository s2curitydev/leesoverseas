/*
/ created by Han
/ 
/ Show/Hide Menu when click the button "MENU"
/
/ useState, Boolean
/
*/
/*eslint-disable*/

import React, { useState } from "react";
import { InfoSection } from "../../components";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

import { BtnStyle, MenuContainer } from "./Home.elements";

import { Button } from "../../globalStyles";
import menu1 from "../../images/menu-1.png";
import menu2 from "../../images/menu-2.png";

import leesMenu01 from "../../images/leesMenu01.png";
import leesMenu02 from "../../images/leesMenu02.png";
import leesMenu03 from "../../images/leesMenu03.png";
import leesMenu04 from "../../images/leesMenu04.png";
import leesMenu05 from "../../images/leesMenu05.png";
import leesMenu06 from "../../images/leesMenu06.png";
import leesMenu07 from "../../images/leesMenu07.png";
import leesMenu08 from "../../images/leesMenu08.png";



const Home = () => {
  const [mode, setMode] = useState(true);
  const [showMenu, setShowMenu] = useState();

  function menuDisplay() {
    console.log("menuDisplay clicked", mode)
    setMode(!mode);
    return setShowMenu(
      mode ? (
        <MenuContainer>
          <img src={menu1} />
            <img src={menu2} />
            <img src={leesMenu01} />
            <img src={leesMenu02} />
            <img src={leesMenu03} />
            <img src={leesMenu04} />
            <img src={leesMenu05} />
            <img src={leesMenu06} />
            <img src={leesMenu07} />
            <img src={leesMenu08} />
        </MenuContainer>
      ) : null
    );
  }
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <BtnStyle>
        <Button fontBig primary onClick={menuDisplay}>
          MENU
        </Button>
      </BtnStyle>
      <div>{showMenu}</div>
    </>
  );
};

export default Home;
