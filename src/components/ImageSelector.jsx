import React from 'react';

import styled from 'styled-components';

const imagePath = '/dist/images/myImg.png';

const ImageSelect = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  width: 50px;
  height: 50px;

  background: url(${imagePath}) no-repeat;
  background-size: 75px;
  background-position: -13px ${(props) => props.position}px;
`;

const Item = styled.div`
  flex-shrink: 0;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  &.selected {
    position: fixed;
    transform: rotate(25deg) translate(500px, 350px);
    visibility: hidden;
  }
`;

const Container = styled.section`
  z-index: 10;
  height: 0px;
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: var(--color-purple);

  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;

  transition: height 0.4s ease-in;
  &.show {
    overflow-x: scroll;
    height: 68px;
  }
  & div:last-child {
    padding-right: 4px;
  }
`;

function ImageSelector({ onSelectImage, showImageSelector, images }) {
  function handleClickImage(event) {
    const id = event.target.dataset.id;
    if (id) {
      const p = event.target.parentElement;
      p.classList.add('selected');
      onSelectImage(id);
    }

    // onSelectImage();
  }
  return (
    <Container
      className={showImageSelector ? 'show' : ''}
      onClick={handleClickImage}
    >
      {images &&
        images.map((image) => (
          <Item key={image.id}>
            <ImageSelect position={image.position} data-id={image.id} />
          </Item>
        ))}
    </Container>
  );
}

export default React.memo(ImageSelector);
