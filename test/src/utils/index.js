import { FILTER_TYPE } from '../constants/dropdownMenu';

const isFilterMatched = ({ currentFilterOption, issueValue }) => {
  if (issueValue instanceof Array) {
    return currentFilterOption === null || issueValue.includes(currentFilterOption);
  }
  return currentFilterOption === null || currentFilterOption === issueValue;
};

export const filterIssues = ({ type, issues, filterOptions }) => {
  return issues.filter(({ isOpened, milestone, writer, label, assignee }) => {
    const { milestoneId } = milestone;
    const { userId: writerId } = writer;
    const labelIdArr = label.map(({ labelId }) => labelId);
    const assigneeIdArr = assignee.map(({ userId }) => userId);

    const isMilestoneMatched = isFilterMatched({
      currentFilterOption: filterOptions[FILTER_TYPE.MILESTONE],
      issueValue: milestoneId,
    });
    const isLabelMatched = isFilterMatched({
      currentFilterOption: filterOptions[FILTER_TYPE.LABEL],
      issueValue: labelIdArr,
    });
    const isAssigneeMatched = isFilterMatched({
      currentFilterOption: filterOptions[FILTER_TYPE.ASSIGNEE],
      issueValue: assigneeIdArr,
    });
    const isWriterMatched = isFilterMatched({
      currentFilterOption: filterOptions[FILTER_TYPE.WRITER],
      issueValue: writerId,
    });

    const isOpenButtonActive = type === 'open';

    return (
      isOpened === isOpenButtonActive &&
      isMilestoneMatched &&
      isLabelMatched &&
      isAssigneeMatched &&
      isWriterMatched
    );
  });
};
