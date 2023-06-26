export const getElapsedTime = (createdDate: string) => {
  const currentDate = new Date();
  const issueCreatedDate = new Date(createdDate);
  const timeDifference = Math.floor(
    (currentDate.getTime() - issueCreatedDate.getTime()) / (1000 * 60),
  );
  if (timeDifference < 1) return '방금 전';
  if (timeDifference < 60) return `${timeDifference}분 전`;
  if (timeDifference < 1440) return `${Math.floor(timeDifference / 60)}시간 전`;
  return `${Math.floor(timeDifference / 1440)}일 전`;
};
