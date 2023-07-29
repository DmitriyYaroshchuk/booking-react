import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';

export default function Select(props) {
  const {
    input, label, options, disabled, className,
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id={`${input.name}-label`}>{label}</InputLabel>
      <SelectMUI
        className={className}
        disabled={disabled}
        labelId={`${input.name}-label`}
        id={input.name}
        label={label}
        value={input.value}
        name={input.name}
        onChange={input.onChange}
        onFocus={input.onFocus}
        onBlur={input.onBlur}
      >
        {
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))
          }
      </SelectMUI>
    </FormControl>
  );
}
