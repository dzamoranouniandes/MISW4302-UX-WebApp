export interface Alarm {
  id: number;
  time: string;
  label: string;
  enabled: boolean;
  type: 'weekly' | 'once';
  days?: string[];
  date?: string;
}
