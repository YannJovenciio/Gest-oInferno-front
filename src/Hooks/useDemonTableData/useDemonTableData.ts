import { Demon } from "../../Models/Demon";
import { DemonAnalytics } from "../../Models/DemonAnalytics";
import { OrderedDemon } from "../../Models/OrderedDemon";

interface useDemonTableDataProps {
  DemonAnalytics: DemonAnalytics[];
  Demons: Demon[];
}

export const useDemonTableData = ({
  DemonAnalytics,
  Demons,
}: useDemonTableDataProps) => {
  var orderedDemons: OrderedDemon[] = [];

  orderedDemons = Demons.map((demon) => {
    var analytics = DemonAnalytics.find((d) => d.idDemon == demon.idDemon);

    return {
      Demon: demon,
      Analytic: analytics,
    };
  });

  return { orderedDemons };
};
