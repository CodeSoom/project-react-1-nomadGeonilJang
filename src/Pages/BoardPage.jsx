import React from 'react';
import PageContainer from '../Styles/PageContainer';
import PageTitle from '../Styles/PageTitle';
import PageContent from '../Styles/PageContent';
import BoardContainer from '../Containers/BoardContainer';

export default function BoardPage() {
  return (
    <PageContainer>
      <PageTitle title='Board Page' />
      <PageContent>
        <BoardContainer />
      </PageContent>
    </PageContainer>
  );
}
