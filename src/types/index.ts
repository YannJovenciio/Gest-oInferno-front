export interface Task {
  id: number;
  title: string;
  description: string;  
  createdAt: string;
  deadline: string;  
  status: HellTaskStatus;
  progress: number;  
  priority :HellTaskPriority;
  updatedAt: string; 
  completedAt: string;
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
