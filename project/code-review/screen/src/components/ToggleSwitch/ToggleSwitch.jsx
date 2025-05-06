import { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function BillingToggle() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const handleChange = (event, newBilling) => {
    if (newBilling !== null) {
      setBilling(newBilling);
    }
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const buttonStyle = {
    borderRadius: "30px",
    textTransform: "none",
    fontWeight: "bold",
    px: 3,
    "&.Mui-selected": {
      backgroundColor: "#4F46E5",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#6366f1",
      color: "#fff",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ToggleButtonGroup
        value={billing}
        exclusive
        onChange={handleChange}
        aria-label="billing plan"
        sx={{
          backgroundColor: "#f0f0f0",
          borderRadius: "30px",
          //   p: 0.5,
        }}
      >
        {["monthly", "yearly"].map((option) => (
          <ToggleButton
            key={option}
            value={option}
            aria-label={`${option} billing`}
            sx={buttonStyle}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {/* Currency Dropdown */}
      <FormControl
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>currency</div>
        <Select
          sx={{ fontSize: "14px" }}
          labelId="currency-select-label"
          value={currency}
          label="Currency"
          onChange={handleCurrencyChange}
        >
          <MenuItem value="USD">USD - United States Dollar</MenuItem>
          <MenuItem value="EUR">EUR - Euro</MenuItem>
          <MenuItem value="INR">INR - Indian Rupee</MenuItem>
          <MenuItem value="GBP">GBP - British Pound</MenuItem>
          <MenuItem value="AUD">AUD - Australian Dollar</MenuItem>
          {/* Add more currencies here */}
        </Select>
      </FormControl>
    </div>
  );
}
