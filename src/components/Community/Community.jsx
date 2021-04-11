import React from "react";
import {
  Container,
  Header,
  Map,
  Samantha,
  Tom,
  Sam,
  Wang,
  May,
  People,
} from "./Styles";
import samantha from "../../images/samantha.png";
import tom from "../../images/tom-chile.png";
import sam from "../../images/sam-france.png";
import wang from "../../images/wang.png";
import may from "../../images/may.png";

const Community = () => {
  return (
    <Container>
      <Header>
        <h2>Join our wordwide community of travelers</h2>
        <button>Sign up</button>
      </Header>
      <Map>
        <People>
          <Samantha>
            <img alt="Samantha" src={samantha} />
          </Samantha>
          <Tom>
            <img alt="Tom from Chile" src={tom} />
          </Tom>
          <Sam>
            <img alt="Sam from France" src={sam} />
          </Sam>
          <Wang>
            <img alt="Wang Wei from China" src={wang} />
          </Wang>
          <May>
            <img alt="May from Australia" src={may} />
          </May>
        </People>
      </Map>
    </Container>
  );
};

export default Community;
