import React, { useState } from "react";
import {
  FaFacebook,
  FaTripadvisor,
  FaEnvelope,
  FaPhone,
  FaRunning,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import ContactForm from "../ContactForm/ContactForm";
import ContactFormHan from "../ContactForm/ContactFormHan";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Email,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIcoLink,
  SocialIcon,
} from "./Footer.elements";

const Footer = () => {
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState();

  function formDisplay() {
    setMode(!mode);
    setShowForm(mode ? <ContactForm /> : null);
    return;
  }

  function formDisplayHan() {
    setMode(!mode);
    setShowForm(mode ? <ContactFormHan /> : null);
    return;
  }
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          We support your Event! Contact us via Email for further discussion.
        </FooterSubHeading>
        <FooterSubText>
          *If you have trouble when ordering, please call our restaurant for Catering + House Deliverymore information.
        </FooterSubText>
        <Email>
          <a href="tel: +12504927172">
            <Button fontBig primary>
              <FaPhone /> Call
            </Button>
          </a>
          <a>
            <Button fontBig primary onClick={formDisplay}>
              <FaEnvelope /> Email
            </Button>
          </a>
          <a href="https://www.skipthedishes.com/lees-overseas-delights">
            <Button fontBig primary>
              <FaRunning />
              Delivery
            </Button>
          </a>
        </Email>
        <div>{showForm}</div>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Lees Overseas
          </SocialLogo>
          <WebsiteRights><a onClick={formDisplayHan}>
              HHStudio©2023
          </a></WebsiteRights>
          <SocialIcons>
            <SocialIcoLink
              href="https://www.facebook.com/Leesoversea-105103668377169"
              target="_blank"
              aria-label="Facebook">
              <FaFacebook />
            </SocialIcoLink>
            <SocialIcoLink
              href="https://www.facebook.com/Leesoversea-105103668377169"
              target="_blank"
              aria-label="Tripadvisor">
              <FaTripadvisor />
            </SocialIcoLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
