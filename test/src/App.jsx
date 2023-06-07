import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { USERS } from './constants/api';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './context/themeContext';
import useFetch from './hooks/useFetch';

import Header from './components/Header';

import IssueList from './pages/IssueList';
import NewIssue from './pages/NewIssue';
import IssueDetail from './pages/IssueDetail';
import Milestone from './pages/Milestone';
import LabelList from './pages/LabelList';

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  return (
    <ThemeProvider>
      <GlobalStyles />
      {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<Navigate to="/issues" />} />
          <Route path="/issues" element={<IssueList />} />
          {userImgData && (
            <Route path="/issues/new" element={<NewIssue userImgSrc={userImgData.userImgURL} />} />
          )}
          <Route path="/issues/:issueId" element={<IssueDetail />} />
          <Route path="/issues/milestones" element={<Milestone />} />
          <Route path="/issues/labels" element={<LabelList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
