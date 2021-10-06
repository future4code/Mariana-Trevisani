import React from "react";
import { HomeContainer, Profile, ProfileImage } from "./styled";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Profile>
        <ProfileImage src={"https://picsum.photos/500/500?=1"} />
        <h2>Mariana</h2>
        <p>Oi! Eu sou a Mariana, logo mais coloco outros dados aqui</p>
        <div>
          <button>x</button>
          <button>s2</button>
        </div>
      </Profile>
    </HomeContainer>
  );
};
