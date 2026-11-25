export interface UserStory {
  code: string;
  role: 'host' | 'guest';
  roleTitle: string;
  title: string;
  statement: string;
  benefit: string;
  metric: string;
}

export interface TeamMember {
  name: string;
  studentId: string;
  role: string;
  deliverable?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  highlight?: boolean;
}
