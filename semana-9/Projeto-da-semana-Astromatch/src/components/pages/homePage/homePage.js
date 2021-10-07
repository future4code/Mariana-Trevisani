import axios from "axios";
import React, { useEffect, useState } from "react";
import { HomeContainer, Profile, ProfileImage } from "./styled";

export const HomePage = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-stamatakis-maryam/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const choosePerson = () => {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-stamatakis-maryam/choose-person`
      )
      .then((res) => {
        getProfile(res.data.choice);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <HomeContainer>
      {!profile ? (
        <div>Acabaram os perfis! Aperte o botão de limpar</div>
      ) : (
        <Profile>
          <ProfileImage src={profile.photo} />
          <h2>
            Olá sou {profile.name}, e tenho {profile.age} anos
          </h2>
          <p>{profile.bio}</p>
          <div>
            <button onClick={() => choosePerson(true)}>❌</button>
            <button onClick={() => choosePerson(false)}>😍</button>
          </div>
        </Profile>
      )}
    </HomeContainer>
  );
};
