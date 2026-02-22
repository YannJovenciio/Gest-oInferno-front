import { Demon } from "./Demon";
import { DemonAnalytics } from "./DemonAnalytics";

export interface OrderedDemon {
  Demon: Demon;
  Analytic: DemonAnalytics | undefined;
}
