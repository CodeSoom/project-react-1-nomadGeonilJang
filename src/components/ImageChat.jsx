import React from 'react';

import styled from 'styled-components';

const imagePath = '/dist/images/myImg.png';

const Container = styled.div`
  z-index: 0;
  background-color: red;
  margin: 15px;
  position: relative;
`;
const Cover = styled.div`
  @keyframes hidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes progress {
    from {
      width: 0%;
      opacity: 1;
    }
    to {
      opacity: 0;
      width: 100%;
    }
  }
  z-index: 2;
  background-color: black;
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  width: 50px;
  height: 55px;
  transform: scale(1.6);
  border-bottom: 3px solid grey;
  animation-name: hidden;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -3px;
    left: 0;
    width: 14%;
    height: 3px;
    background-color: blue;
    animation-name: progress;
    animation-duration: 4s;
  }
`;
const ImageSelect = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  transform: scale(1.5);

  background: url(${imagePath}) no-repeat;
  background-size: 75px;
  background-position: -13px ${(props) => props.position}px;
`;

function ImageChat({ img }) {
  return (
    <Container>
      <Cover />
      <ImageSelect position={img} />
    </Container>
  );
}

export default React.memo(ImageChat);
