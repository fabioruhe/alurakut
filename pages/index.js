import styled from "styled-components";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const ProfileSideBar = (props) => {
  return (
    <Box style={{ gridArea: "profileArea" }}>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      ></img>
    </Box>
  );
};

export default function Home() {
  const githubUser = `fabioruhe`;
  const pessoasFavoritas = [
    "juunegreiros",
    "mariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho",
  ];

  return (
    <>
      <AlurakutMenu />

      <MainGrid>
        <div className="profileArea">
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">
            Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
            </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
