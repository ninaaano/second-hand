const mockIssuesData = {
  data: {
    issues: [
      {
        issueId: 1,
        issueTitle: '[FE]: Creating Components',
        isOpened: true,
        writer: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
          createdAt: '2023-05-16T09:10:35.145Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
          },
          {
            userId: 6,
            name: '훈딩',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 2,
            labelName: 'bug',
            backgroundColor: '#DE4123',
            textColor: 'dark',
          },
        ],
        commentedUser: ['훈딩', '아켄'],
      },
      {
        issueId: 2,
        issueTitle: '[BE]: Designing the ERD Structure',
        isOpened: true,
        writer: {
          userId: 1,
          name: '고뭉남',
          url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
          createdAt: '2023-05-17T09:10:35.145Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 2,
            labelName: 'bug',
            backgroundColor: '#DE4123',
            textColor: 'dark',
          },
        ],
        commentedUser: ['니노', '고뭉남'],
      },
      {
        issueId: 3,
        issueTitle: '[FE]: Implementing UI Layout',
        isOpened: false,
        writer: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          createdAt: '2023-05-18T14:25:21.789Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['아켄', '훈딩'],
      },
      {
        issueId: 4,
        issueTitle: '[BE]: Implementing Database Queries',
        isOpened: true,
        writer: {
          userId: 2,
          name: '니노',
          url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
          createdAt: '2023-05-19T12:45:10.621Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 2,
            labelName: 'bug',
            backgroundColor: '#DE4123',
            textColor: 'dark',
          },
        ],
        commentedUser: ['니노', '고뭉남'],
      },
      {
        issueId: 5,
        issueTitle: '[FE]: Implementing Authentication',
        isOpened: true,
        writer: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          createdAt: '2023-05-20T10:35:45.321Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 2,
            labelName: 'bug',
            backgroundColor: '#DE4123',
            textColor: 'dark',
          },
        ],
        commentedUser: ['아켄', '훈딩'],
      },
      {
        issueId: 6,
        issueTitle: '[BE]: Refactoring Backend Code',
        isOpened: true,
        writer: {
          userId: 1,
          name: '고뭉남',
          url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
          createdAt: '2023-05-21T15:12:53.987Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 4,
            labelName: 'task',
            backgroundColor: '#FFD700',
            textColor: 'dark',
          },
        ],
        commentedUser: ['고뭉남', '니노'],
      },
      {
        issueId: 7,
        issueTitle: '[FE]: Implementing Search Functionality',
        isOpened: false,
        writer: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
          createdAt: '2023-05-22T08:55:10.452Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['훈딩', '아켄'],
      },
      {
        issueId: 8,
        issueTitle: '[FE]: Implementing Notifications',
        isOpened: false,
        writer: {
          userId: 2,
          name: '니노',
          url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
          createdAt: '2023-05-23T11:20:30.872Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['니노', '훈딩'],
      },
      {
        issueId: 9,
        issueTitle: '[BE]: Handling File Uploads',
        isOpened: false,
        writer: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          createdAt: '2023-05-24T13:40:15.521Z',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 2,
          milestoneName: 'IssueTracker',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 4,
            labelName: 'task',
            backgroundColor: '#FFD700',
            textColor: 'dark',
          },
        ],
        commentedUser: ['아켄', '고뭉남'],
      },
      {
        issueId: 10,
        issueTitle: '[FE]: Improving Performance',
        isOpened: false,
        writer: {
          userId: 1,
          name: '고뭉남',
          url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
          createdAt: '2023-05-25T16:30:20.963',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['고뭉남', '에이든'],
      },
      {
        issueId: 11,
        issueTitle: '[BE]: Fixing API Endpoint',
        isOpened: false,
        writer: {
          userId: 5,
          url: 'https://avatars.githubusercontent.com/u/86761640?v=4',
          name: '솔',
          createdAt: '2023-05-26T09:45:35.212',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 2,
            labelName: 'bug',
            backgroundColor: '#DE4123',
            textColor: 'dark',
          },
        ],
        commentedUser: ['Sol', '고뭉남'],
      },
      {
        issueId: 12,
        issueTitle: '[FE]: Implementing User Profile',
        isOpened: false,
        writer: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
          createdAt: '2023-05-27T11:20:15.587',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['에이든', 'Sol'],
      },
      {
        issueId: 13,
        issueTitle: '[BE]: Database Optimization',
        isOpened: true,
        writer: {
          userId: 1,
          name: '고뭉남',
          url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
          createdAt: '2023-05-28T14:10:40.931',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 4,
            labelName: 'task',
            backgroundColor: '#FFD700',
            textColor: 'dark',
          },
        ],
        commentedUser: ['고뭉남', '에이든'],
      },
      {
        issueId: 14,
        issueTitle: '[FE]: Adding Unit Tests',
        isOpened: true,
        writer: {
          userId: 5,
          url: 'https://avatars.githubusercontent.com/u/86761640?v=4',
          name: '솔',
          createdAt: '2023-05-29T16:55:25.498',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 1,
            labelName: 'docs',
            backgroundColor: '#0025E6',
            textColor: 'light',
          },
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['Sol', '고뭉남', '에이든', '니노', '아켄', '훈딩'],
      },
      {
        issueId: 15,
        issueTitle: '[BE]: Resolving Performance Bottlenecks',
        isOpened: true,
        writer: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
          createdAt: '2023-06-01T09:30:45.731',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 2,
            labelName: 'bug',
            backgroundColor: '#DE4123',
            textColor: 'dark',
          },
        ],
        commentedUser: ['에이든', '고뭉남', '니노'],
      },
      {
        issueId: 16,
        issueTitle: '[FE]: Implementing Notifications',
        isOpened: true,
        writer: {
          userId: 2,
          name: '니노',
          url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
          createdAt: '2023-06-02T14:20:15.958',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 3,
            labelName: 'enhancement',
            backgroundColor: '#50C878',
            textColor: 'dark',
          },
        ],
        commentedUser: ['니노', '아켄', '훈딩'],
      },
      {
        issueId: 17,
        issueTitle: '[BE]: Fixing Security Vulnerabilities',
        isOpened: true,
        writer: {
          userId: 1,
          name: '고뭉남',
          url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
          createdAt: '2023-06-03T17:40:30.521',
        },
        assignee: [
          {
            userId: 4,
            name: '아켄',
            profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
          },
          {
            userId: 6,
            name: '훈딩',
            profileImgSrc: '',
          },
        ],
        milestone: {
          milestoneId: 1,
          milestoneName: 'NewMilestone',
        },
        label: [
          {
            labelId: 4,
            labelName: 'task',
            backgroundColor: '#FFD700',
            textColor: 'dark',
          },
        ],
        commentedUser: ['고뭉남', 'Sol', '에이든'],
      },
    ],
  },
};

const mockUserImageData = (userId) => {
  let url = '';

  switch (userId) {
    case 1:
      // 고뭉남
      url = 'https://avatars.githubusercontent.com/u/77562698?v=4';
      break;

    case 2:
      // 니노
      url = 'https://avatars.githubusercontent.com/u/95615105?v=4';
      break;

    case 3:
      // 에이든
      url = 'https://avatars.githubusercontent.com/u/115064144?v=4';
      break;

    case 4:
      // 아켄
      url = 'https://avatars.githubusercontent.com/u/96980857?v=4';
      break;

    case 5:
      // 솔
      url = 'https://avatars.githubusercontent.com/u/86761640?v=4';
      break;

    case 6:
      // 훈딩
      url = 'https://avatars.githubusercontent.com/u/56246060?v=4';
      break;

    default:
      url = '';
  }
  return {
    data: {
      userImgURL: url,
    },
  };
};

const issueDetailData = [
  {
    issueId: 1,
    issueTitle: '[FE]: Creating Components',
    isOpened: true,
    writer: {
      userId: 6,
      name: '훈딩',
      url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
      createdAt: '2023-05-16T09:10:35.145Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
      },
      {
        userId: 6,
        name: '훈딩',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 2,
        labelName: 'bug',
        backgroundColor: '#DE4123',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 2,
    issueTitle: '[BE]: Designing the ERD Structure',
    isOpened: true,
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
      createdAt: '2023-05-17T09:10:35.145Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 2,
        labelName: 'bug',
        backgroundColor: '#DE4123',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 3,
    issueTitle: '[FE]: Implementing UI Layout',
    isOpened: false,
    writer: {
      userId: 4,
      name: '아켄',
      url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      createdAt: '2023-05-18T14:25:21.789Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 4,
    issueTitle: '[BE]: Implementing Database Queries',
    isOpened: true,
    writer: {
      userId: 2,
      name: '니노',
      url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
      createdAt: '2023-05-19T12:45:10.621Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 2,
        labelName: 'bug',
        backgroundColor: '#DE4123',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 5,
    issueTitle: '[FE]: Implementing Authentication',
    isOpened: true,
    writer: {
      userId: 4,
      name: '아켄',
      url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      createdAt: '2023-05-20T10:35:45.321Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 2,
        labelName: 'bug',
        backgroundColor: '#DE4123',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 6,
    issueTitle: '[BE]: Refactoring Backend Code',
    isOpened: true,
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
      createdAt: '2023-05-21T15:12:53.987Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 4,
        labelName: 'task',
        backgroundColor: '#FFD700',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 7,
    issueTitle: '[FE]: Implementing Search Functionality',
    isOpened: false,
    writer: {
      userId: 6,
      name: '훈딩',
      url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
      createdAt: '2023-05-22T08:55:10.452Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 8,
    issueTitle: '[FE]: Implementing Notifications',
    isOpened: false,
    writer: {
      userId: 2,
      name: '니노',
      url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
      createdAt: '2023-05-23T11:20:30.872Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 9,
    issueTitle: '[BE]: Handling File Uploads',
    isOpened: false,
    writer: {
      userId: 4,
      name: '아켄',
      url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      createdAt: '2023-05-24T13:40:15.521Z',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 4,
        labelName: 'task',
        backgroundColor: '#FFD700',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 10,
    issueTitle: '[FE]: Improving Performance',
    isOpened: false,
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
      createdAt: '2023-05-25T16:30:20.963',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 11,
    issueTitle: '[BE]: Fixing API Endpoint',
    isOpened: false,
    writer: {
      userId: 5,
      url: 'https://avatars.githubusercontent.com/u/86761640?v=4',
      name: '솔',
      createdAt: '2023-05-26T09:45:35.212',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 2,
        labelName: 'bug',
        backgroundColor: '#DE4123',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 12,
    issueTitle: '[FE]: Implementing User Profile',
    isOpened: false,
    writer: {
      userId: 3,
      name: '에이든',
      url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
      createdAt: '2023-05-27T11:20:15.587',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 13,
    issueTitle: '[BE]: Database Optimization',
    isOpened: true,
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
      createdAt: '2023-05-28T14:10:40.931',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 4,
        labelName: 'task',
        backgroundColor: '#FFD700',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 14,
    issueTitle: '[FE]: Adding Unit Tests',
    isOpened: true,
    writer: {
      userId: 5,
      url: 'https://avatars.githubusercontent.com/u/86761640?v=4',
      name: '솔',
      createdAt: '2023-05-29T16:55:25.498',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        backgroundColor: '#0025E6',
        textColor: 'light',
      },
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 15,
    issueTitle: '[BE]: Resolving Performance Bottlenecks',
    isOpened: true,
    writer: {
      userId: 3,
      name: '에이든',
      url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
      createdAt: '2023-06-01T09:30:45.731',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 2,
        labelName: 'bug',
        backgroundColor: '#DE4123',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 16,
    issueTitle: '[FE]: Implementing Notifications',
    isOpened: true,
    writer: {
      userId: 2,
      name: '니노',
      url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
      createdAt: '2023-06-02T14:20:15.958',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        backgroundColor: '#50C878',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 17,
    issueTitle: '[BE]: Fixing Security Vulnerabilities',
    isOpened: true,
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
      createdAt: '2023-06-03T17:40:30.521',
    },
    assignee: [
      {
        userId: 4,
        name: '아켄',
        profileImgSrc: 'https://avatars.githubusercontent.com/u/96980857?v=4',
      },
      {
        userId: 6,
        name: '훈딩',
        profileImgSrc: '',
      },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 4,
        labelName: 'task',
        backgroundColor: '#FFD700',
        textColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          userName: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          userName: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          userName: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
];

const mockUserData = {
  data: [
    { userId: 1, userName: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
    { userId: 2, userName: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    { userId: 3, userName: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
    { userId: 4, userName: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
    { userId: 5, userName: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    { userId: 6, userName: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
  ],
};

const mockLabelData = {
  data: [
    {
      labelId: 1,
      labelName: 'docs',
      backgroundColor: '#0025E6',
      textColor: 'light',
    },
    {
      labelId: 2,
      labelName: 'bug',
      backgroundColor: '#DE4123',
      textColor: 'dark',
    },
    {
      labelId: 3,
      labelName: 'enhancement',
      backgroundColor: '#50C878',
      textColor: 'dark',
    },
    {
      labelId: 4,
      labelName: 'task',
      backgroundColor: '#FFD700',
      textColor: 'dark',
    },
  ],
};

const mockMilestoneData = {
  data: [
    { milestoneId: 1, milestoneName: 'NewMilestone', openIssue: 5, closeIssue: 3, isOpened: true },
    { milestoneId: 2, milestoneName: 'IssueTracker', openIssue: 5, closeIssue: 4, isOpened: true },
  ],
};

const mockIssueDetailData = (issueId) => {
  return issueDetailData.filter((issue) => issue.issueId === issueId)[0];
};

export {
  mockIssuesData,
  mockUserImageData,
  mockUserData,
  mockLabelData,
  mockMilestoneData,
  mockIssueDetailData,
};
