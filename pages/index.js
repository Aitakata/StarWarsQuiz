import React from 'react';
// import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// import useSound from 'use-sound';
import db from '../db.json';
import Widget from '../src/components/Widget';
import WidgetButton from '../src/components/WidgetButton';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';
import Input from '../src/components/Input/index';
import Button from '../src/components/Button/index';
import ButtonInfor from '../src/components/ButtonInfor';
import ButtonSound from '../src/components/ButtonSound';
// import boopSfx from '../sounds/clicka.mp3';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // const [isChecked, setIsChecked] = React.useState(true);
  /*  const [playOn] = useSound(
    boopSfx,
    { volume: 0.25 },
  );
  const [playOff] = useSound(
    boopSfx,
    { volume: 0.25 },
  ); */
  let item = 0;
  // console.log('retorno do useState', name, setName);

  function playSound() {
  /*   if (isChecked === false) {
      playOn();
      setIsChecked(true);
    } else {
      playOff();
      setIsChecked(false);
    } */
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          Quiz -
          {db.title}
        </title>
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta name="description" content="Descriçao do ArturQuiz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // console.log('Fazendo uma submissão por meio do React');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Insira o seu nome para desbloquear..."
                value={name}
              />
              <Button type="submit" disabled={name.trim().length === 0}>
                {`Jogar ${name} `}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Para explorar outros quizzes: </p>
            <ul>
              <Widget.Scroll>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        { /* eslint-disable-next-line no-plusplus */}
                        {`${++item} - ${githubUser} / ${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </Widget.Scroll>
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
        <WidgetButton
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <WidgetButton.Content>
            <ButtonSound />
            <ButtonInfor />
          </WidgetButton.Content>
        </WidgetButton>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/aitakata" />
    </QuizBackground>
  );
}
