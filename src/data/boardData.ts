export type StatusKey = 'new' | 'phone' | 'scheduled' | 'offer' | 'hired' | 'rejected';

export interface Candidate {
  name: string;
  role: string;
  status: StatusKey;
  date: string;
  assignee: {
    kind: 'person' | 'agent';
    initials?: string;
    bg: string;
    agentName?: string;
  };
}

export interface RecruitmentGroup {
  id: string;
  color: string;
  label: string;
  rows: Candidate[];
}

export const BOARD_GROUPS: RecruitmentGroup[] = [
  {
    id: 'screening', color: 'var(--board-screening)', label: 'Screening',
    rows: [
      { name: 'Sarah Miller',    role: 'Senior UX Designer',  status: 'phone',     date: 'Apr 12', assignee: { kind: 'person', initials: 'SM', bg: '#FF5AC4' } },
      { name: 'James Rodriguez', role: 'Frontend Developer',  status: 'new',       date: 'Apr 14', assignee: { kind: 'person', initials: 'JR', bg: '#7B68EE' } },
      { name: 'Aisha Johnson',   role: 'Product Manager',     status: 'phone',     date: 'Apr 15', assignee: { kind: 'person', initials: 'AJ', bg: '#FF5AC4' } },
    ],
  },
  {
    id: 'interviews', color: 'var(--board-interviews)', label: 'Interviews',
    rows: [
      { name: 'Tom Chen',        role: 'Engineering Manager', status: 'scheduled', date: 'Apr 10', assignee: { kind: 'person', initials: 'TC', bg: '#FDAB3D' } },
      { name: 'Priya Kapoor',    role: 'Data Scientist',      status: 'scheduled', date: 'Apr 11', assignee: { kind: 'person', initials: 'PK', bg: '#00C875' } },
      { name: 'Marcus Davis',    role: 'DevOps Engineer',     status: 'scheduled', date: 'Apr 13', assignee: { kind: 'person', initials: 'MD', bg: '#FDAB3D' } },
    ],
  },
  {
    id: 'contract', color: 'var(--board-contract)', label: 'Contract negotiation',
    rows: [
      { name: 'Elena Petrova',   role: 'Head of Marketing',   status: 'offer',     date: 'Apr 8',  assignee: { kind: 'person', initials: 'EP', bg: '#FF7575' } },
      { name: 'Daniel Kim',      role: 'Backend Lead',        status: 'offer',     date: 'Apr 9',  assignee: { kind: 'person', initials: 'DK', bg: '#7B68EE' } },
    ],
  },
];
