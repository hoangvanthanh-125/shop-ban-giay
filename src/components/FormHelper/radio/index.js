import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
  
      <FormControlLabel  control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
      <FormControlLabel value="thanh" control={<Radio />} label="thanh" />
    </RadioGroup>
  </FormControl>
)
export default radioButton;