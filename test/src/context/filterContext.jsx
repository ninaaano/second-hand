import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { filterReducer } from './filterReducer';

const FilterStateContext = createContext(null);
const FilterDispatchContext = createContext(null);

const useFilterStateContext = () => {
  const filterState = useContext(FilterStateContext);

  if (filterState === null) {
    throw new Error('useFilterStateContextContext should be used within FilterStateProvider');
  }

  return filterState;
};

const useFilterDispatchContext = () => {
  const filterDispatch = useContext(FilterDispatchContext);

  if (filterDispatch === null) {
    throw new Error('useFilterDispatchContext should be used within FilterDispatchProvider');
  }

  return filterDispatch;
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    isOpened: true, // 열린 이슈, 닫힌 이슈, 필터드롭다운에도 적용해야함.
    commentedByMe: false,
    milestone: null,
    label: null,
    assignee: null,
    writer: null,
  });

  return (
    <FilterStateContext.Provider value={filterState}>
      <FilterDispatchContext.Provider value={filterDispatch}>{children}</FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FilterProvider, useFilterStateContext, useFilterDispatchContext };
