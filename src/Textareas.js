import * as React from 'react';
import { styled } from '@mui/system';
import Input from '@mui/joy/Input';

const StyledInput = styled('input')({
  border: '1px solid red', // Default border color for the inner StyledInput
  width: '100%', // Default width for the inner StyledInput
  padding: '8px', // Add padding as needed
});

const StyledLabel = styled('label')(({ theme }) => ({
  /* Your existing styles... */
}));

const InnerInput = React.forwardRef(function InnerInput(props, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledInput {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>Label</StyledLabel>
    </React.Fragment>
  );
});

export default function FloatingLabelInput({
  bordercolor,
  placeholdercolor,
  imageSrc,
  placeholderText,
  containerWidth,
}) {
  return (
    <Input
      endDecorator={<img src={imageSrc} alt="Icon" />}
      sx={{
        border: `1px solid ${bordercolor}`, // Set border color for the main container
        width: containerWidth || '100%', // Set width for the main container
        height: 51, // Add 2 pixels to the height of the main container
      }}
      slotProps={{
        input: {
          placeholder: placeholderText || 'Your Placeholder Text', // Set placeholder text
          style: {
            color: placeholdercolor || 'red', // Set text color to red by default
            '&::placeholder': {
              color: placeholdercolor || 'red', // Set placeholder color to red by default
            },
          },
        },
      }}
    />
  );
}
