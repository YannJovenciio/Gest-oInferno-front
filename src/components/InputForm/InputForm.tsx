import { Box, Card, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormFields } from "../../Models/FormFields";

interface InputFormProps {
  fields: FormFields[] | FormFields;
}
export const InputForm: React.FC<InputFormProps> = ({ fields }) => {
  const { register } = useFormContext();
  console.log("fields", fields);
  return (
    <Box>
      <Card>
        {Array.isArray(fields) ? (
          fields.map((field) => (
            <Box>
              <Typography variant="body2">{field.textTitle}</Typography>
              <TextField label={field.label} {...register} />
            </Box>
          ))
        ) : (
          <>Ea</>
        )}
      </Card>
    </Box>
  );
};
