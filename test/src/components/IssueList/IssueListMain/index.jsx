import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useFilterStateContext } from '../../../context/filterContext';

import { filterIssues } from '../../../utils';

import IssueListItem from './IssueListItem';
import IssueListMainHeader from './IssueListMainHeader';
import { $IssueList, $NoResultMessage, $IssueListMain } from './style';

const IssueListMain = ({ issues, user, label, milestone }) => {
  const filterState = useFilterStateContext();
  const [isOpened, setIsOpened] = useState(true);

  const filteredOpenIssues = filterIssues({ type: 'open', issues, filterOptions: filterState });
  const filteredCloseIssues = filterIssues({ type: 'close', issues, filterOptions: filterState });
  const filteredIssues = isOpened ? filteredOpenIssues : filteredCloseIssues;

  const noResultMessage = <$NoResultMessage>검색과 일치하는 결과가 없습니다.</$NoResultMessage>;

  return (
    <$IssueListMain>
      <IssueListMainHeader
        openCount={filteredOpenIssues.length}
        closeCount={filteredCloseIssues.length}
        user={user}
        label={label}
        milestone={milestone}
        openBtnHandler={() => setIsOpened(true)}
        closeBtnHandler={() => setIsOpened(false)}
        isOpened={isOpened}
      />
      <$IssueList>
        {filteredIssues.length === 0 && noResultMessage}
        {filteredIssues.map((issue) => (
          <IssueListItem isOpened={isOpened} key={issue.issueId} {...issue} />
        ))}
      </$IssueList>
    </$IssueListMain>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
};

export default IssueListMain;
