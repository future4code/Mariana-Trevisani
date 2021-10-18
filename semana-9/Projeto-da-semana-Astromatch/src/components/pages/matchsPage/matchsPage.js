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
      <ProfileListItem key={match.id} name={match.name} photo={match.photo} />
    );
  });

  const cleanMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-stamatakis-maryam/clear"
      )
      .then((res) => {
        console.log("matches apagados");
        setMatchesList([]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <MatchesContainer>
        <MatchesList>{reloadMatchesList}</MatchesList>
      </MatchesContainer>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
  );
};

export default MatchesPage;
