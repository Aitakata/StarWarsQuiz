// src/components/GitHubCorner/index.js
import React from 'react';
import styled from 'styled-components';

// import useSound from 'use-sound';
// import Modal from '../Modal';
// import boopSfx from '../../../sounds/clicka.mp3';

const Wrapper = styled.div`
  top: 0;
  border: 0;
  display:flex;
  z-index: 2;
  margin-top: 0px;  
  margin-left: 1335px;
  margin-right: -25px;
`;

// eslint-disable-next-line react/prop-types
export default function ButtonInfor() {
//  const [modalVisible, setModalVisible] = useState(false);
//  const [isChecked, setIsChecked] = React.useState(true);
/*  const [playOn] = useSound(
    boopSfx,
    { volume: 0.25 },
  );
  const [playOff] = useSound(
    boopSfx,
    { volume: 0.25 },
  );
*/
  function handleButtonClick() {
  /*  setModalVisible(true);
    if (isChecked) {
      playOff();
    } else {
      playOn();
    } */
  }

  return (
    <Wrapper>
      <button className="button" type="button" onClick={handleButtonClick}>
        <img
          src="https://img.freepik.com/free-icon/info-logo-circle_318-947.jpg?size=338&ext=jpg"
          alt="info circle"
          style={{ height: 60, width: 60, borderRadius: '50%' }}
        />
      </button>
      { /*  <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>INSTRUTORES NESSA IMERSÃO</h1>
        <p style={{ color: '#00d8f3', fontSize: 25 }}>Mario Souto, DevSoutinho</p>
        <p>instrutor da Alura, engenheiro Nubank</p>
        <p style={{ color: '#00d8f3', fontSize: 25 }}>Juliana Amoasei</p>
        <p>dev e coordenadora da Alura</p>
        <p style={{ color: '#00d8f3', fontSize: 25 }}>Paulo Silveira</p>
        <p>CEO da Alura</p>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <button
            className="button"
            type="submit"
            onClick={handleButtonClick}
            style={{
              width: 120,
              height: 45,
              borderRadius: 15,
              background: '#4FD1C5',
            }}
          >
            <p style={{ color: '#ffffff', fontWeight: 'bold' }}>Fechar</p>
          </button>
        </div>
      </Modal> */}
    </Wrapper>
  );
}
