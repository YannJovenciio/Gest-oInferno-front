import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import React, { useState } from "react";
import { OrderedDemon } from "../../Models/OrderedDemon";
import { DemonTableData } from "../TableData/DemonTableData";
import { ChevronDown } from "lucide-react";
import { DemonStyledIcon } from "../Icon/DemonStyledIcon";
import { PaginationComponent } from "../Pagination/PaginationComponent";

interface DemonAccordionDetailsProps {
  Analytics: OrderedDemon[];
  pageSize: number;
  pageNumber: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
}
export const DemonAccordionDetails: React.FC<DemonAccordionDetailsProps> = ({
  Analytics,
  pageSize,
  pageNumber,
  totalItems,
  onPageChange,
}) => {
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set());

  const handleChange =
    (accordionId: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prevState) => {
        const next = new Set(prevState);

        isExpanded ? next?.add(accordionId) : next?.delete(accordionId);
        return next;
      });
    };

  return (
    <Box >
      {Analytics.map((Analytic) => (
        <Accordion
          sx={{ padding: "1%" }}
          key={Analytic.Demon.idDemon ?? Analytic.Demon.demonName}
          expanded={expanded.has(`panel-${Analytic.Demon.idDemon}`)}
          onChange={handleChange(`panel-${Analytic.Demon.idDemon}`)}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <DemonStyledIcon />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="body2">
                      {Analytic.Demon.demonName}
                    </Typography>
                    <Typography variant="body2">
                      {Analytic.Analytic?.category}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                  <ChevronDown />
                </Box>
              </Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DemonTableData Data={Analytic.Analytic} />
          </AccordionDetails>
        </Accordion>
      ))}
      <Box sx={{padding:"2%"}}>
        <PaginationComponent
          pageSize={pageSize}
          pageNumber={pageNumber}
          totalItems={totalItems}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
};
