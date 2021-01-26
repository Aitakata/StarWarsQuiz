import styled from 'styled-components'
import Head from 'next/head';
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer/index.js';
import GitHubCorner from '../src/components/GitHubCorner/index.js';
import QuizBackground from '../src/components/QuizBackground/index.js';
import QuizLogo from '../src/components/QuizLogo/index.js';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head> 
        <title>ArturQuiz - Modelo básico</title>
      </Head>  
      <QuizContainer>
        <QuizLogo />

      
        <Widget>
          <Widget.Header>
            <h1>Quiz Star Wars</h1>
          </Widget.Header>
          <Widget.Content> 
            <p>Que tal testar seus conhecimentos sobre a Saga Star Wars</p>
          </Widget.Content>
        </Widget> 
        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/aitakata"/>
    </QuizBackground>
  );
}