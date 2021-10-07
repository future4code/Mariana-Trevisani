import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProfileListItem } from "../../ProfileListItem/ProfileListItem";
import { MatchesContainer, MatchesList } from "./styled";

const MatchesPage = () => {
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    getMatchesList();
  }, []);

  const getMatchesList = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-stamatakis-maryam/matches"
      )
      .then((res) => {
        setMatchesList(res.data.matches);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const reloadMatchesList = matchesList.map((match) => {
    return (
      <div>
        <img src={match.photo}></img>
        <p>{match.name}</p>
      </div>
    );
  });

  return (
    <MatchesContainer>
      <MatchesList>
        {reloadMatchesList}
        {ProfileListItem}
      </MatchesList>
    </MatchesContainer>
  );
};

export default MatchesPage;
