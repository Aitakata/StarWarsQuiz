import styled from 'styled-components';

const WidgetButton = styled.div`
  @keyframes loading {
    0% {
      transform: rotate(5);
    }
    50% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-2deg);
    }
  }
  animation: loading 2s linear infinite;
`;

WidgetButton.Content = styled.div`

`;

export default WidgetButton;
