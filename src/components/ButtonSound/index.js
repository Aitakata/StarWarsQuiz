// src/components/GitHubCorner/index.js
import React from 'react';
import styled from 'styled-components';
// import useSound from 'use-sound';

// import boopSfx from '../../../sounds/clicka.mp3';
// import music from '../../../sounds/Music.mp3';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  border: 0;
  display:flex;
  z-index: 2;
  margin-top: -650px;
  margin-left: 1235px;
  margin-right: -225px;
  img {
    border: 3px solid #ffffff;
  }
  @media screen and (max-width: 600px) {
    margin: auto;
    margin-left: 320px;
    margin-top: 70px;
    padding: 15px;
    position:absolute;
  }
  @media screen and (max-width: 505px) {
    margin: auto;
    margin-left: -280px;
    margin-top: 15px;
    padding: 15px;
    position:absolute;
    z-index: 10;
  }
 
`;

// eslint-disable-next-line react/prop-types
export default function ButtonSound() {
//  const [isChecked, setIsChecked] = React.useState(true);
//  const [isCheckedMusic, setIsCheckedMusic] = React.useState(true);
  const [imgSound, seimgSound] = React.useState('https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg');

  const ativado = 'https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg';

  /*
  const [playOnMusic] = useSound(
    music,
    { volume: 10.0 },
  );

  const [playOffMusic, { stop }] = useSound(
    music,
    { volume: 0.0 },
  );

  const [playOn] = useSound(
    boopSfx,
    { volume: 0.25 },
  );

  const [playOff] = useSound(
    boopSfx,
    { volume: 0.25 },
  );
  */

  function handleButtonClick() {
  /*   if (isChecked) {
      playOff();
    } else {
      playOn();
    }

    if (isCheckedMusic === true) {
      playOffMusic.stop();
      setIsCheckedMusic(false);
    } else {
      playOnMusic();
      setIsCheckedMusic(true);
    }
    */
    seimgSound('https://cdn4.iconfinder.com/data/icons/media-controls-4/100/volume-up-512.png');
    seimgSound('https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg');
    if (imgSound === ativado) {
      seimgSound('https://cdn4.iconfinder.com/data/icons/media-controls-4/100/volume-up-512.png');
    } else {
      seimgSound('https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg');
    }
  }

  return (
    <Wrapper>
      <div>
        <button className="button" type="button" onClick={handleButtonClick}>
          <img
            src={imgSound}
            style={{ height: 60, width: 60, borderRadius: '50%' }}
            alt="Sound Button"
          />
        </button>
      </div>
    </Wrapper>
  );
}
