import React, { useEffect, useCallback } from 'react';

import { withRouter, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  MdDehaze,
  MdPersonPin,
  MdChevronLeft,
  MdInsertPhoto,
  MdSearch,
} from 'react-icons/md';

import { setTitle } from '../modules/reducer/actions';
import { showImageSelector, loadRoomImages } from '../modules/reducer/actions';

import { get } from '../utils';

const Container = styled.nav`
  padding: 0px 12px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--weight-bold);
  color: var(--color-white);
  background-color: var(--color-purple);
  font-size: var(--font-medium);
`;
const Item = styled.div`
  flex-basis: 100%;
  cursor: pointer;
  background-color: var(--color-purple);

  &:last-child {
    display: flex;
    justify-content: flex-end;
    & > * {
      margin-left: 4px;
    }
  }
`;
const Title = styled.header`
  height: 20px;
  text-align: center;
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function TopBar({ history }) {
  const title = useSelector(get('title'));
  const room = useSelector(get('room'));
  const dispatch = useDispatch();

  if (history.location.pathname === '/') {
    history.push('/list');
  }

  const handleShowImageSelector = useCallback(() => {
    dispatch(showImageSelector());
    dispatch(loadRoomImages());
  }, [dispatch]);

  useEffect(() => {
    if (history.location.pathname === '/list') {
      dispatch(setTitle('채팅'));
      return;
    }
    if (room.title) {
      dispatch(setTitle(room.title));
    }
  }, [dispatch, room.title, history.location.pathname]);

  return (
    <Container>
      <Item>
        {history.location.pathname === '/list' ? (
          <MdDehaze />
        ) : (
          <Link to='/list'>
            <MdChevronLeft />
          </Link>
        )}
      </Item>
      <Item>
        <Title>
          <Link to='/list'>{title}</Link>
        </Title>
      </Item>
      <Item>
        {history.location.pathname === '/list' ? (
          <MdPersonPin />
        ) : (
          <>
            <MdInsertPhoto onClick={handleShowImageSelector} />
            <MdSearch />
          </>
        )}
      </Item>
    </Container>
  );
}

export default withRouter(TopBar);
