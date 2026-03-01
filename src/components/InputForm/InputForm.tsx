import { Box, Card, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormFields } from "../../Models/FormFields";

interface InputFormProps {
  fields: FormFields[] | FormFields;
}
export const InputForm: React.FC<InputFormProps> = ({ fields }) => {
  const { register,watch } = useFormContext();

  const formValues = watch()
  console.log("fields", formValues);

  return (
    <Box>
      <Card>
        {Array.isArray(fields) ? (
          fields.map((field, idx) => (
            <Box key={`${idx}-${field.label}`}>
              <Typography variant="body2">{field.textTitle}</Typography>
              <TextField label={field.label} {...register(field.value ?? "")} />
            </Box>
          ))
        ) : (
          <>Ea</>
        )}
      </Card>
    </Box>
  );
};
