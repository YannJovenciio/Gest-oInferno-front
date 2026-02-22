export interface DemonAnalytics {
  idDemon: string;
  demonName: string;
  category: string;
  persecutionCount: number;
  mostTorturedSoulName: string;
  soulCount: number;
}

export interface response {
  recommendations: DemonAnalytics[];
  totalItems: number;
}
