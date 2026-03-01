export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  formType: string;
  entries: number;
  progress: number;
  formIndex: number;
  totalForms: number;
  status?: "Awaiting" | "Confirmed" | "Submit" | "Review";
  image: string;
}

export interface ReportItem {
  id: number;
  title: string;
  subtitle: string;
  percentage: number;
  icon: "bar" | "calculator";
}

export interface CalendarEvent {
  day: number;
  title: string;
  form: string;
  time: string;
  highlight?: boolean;
  badge?: "Submit" | "Review";
}
