import { TextField, Button, Stack } from "@mui/material";
import { userFormSchema } from "../config/userFormSchema";
import { useState, useEffect } from "react";

export default function UserForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {userFormSchema.map((field) => (
          <TextField
            name={field.name}
            label={field.label}
            type={field.type}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleChange}
            inputProps={{ pattern: field.pattern }}
          />
        ))}

        <Button variant="contained" type="submit">
          Save User
        </Button>
      </Stack>
    </form>
  );
}
