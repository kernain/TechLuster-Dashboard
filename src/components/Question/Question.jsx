import React, { useState } from 'react';
import { Container, Typography, Box, FormGroup, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Question = () => {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, name]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== name));
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}
    >
      <Grid
        container
        spacing={1}
        style={{
          height: '100%',
          margin: '0',
          width: '100%',
          padding: '32px',
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" color={theme.palette.text.primary} style={{ fontFamily: theme.typography.fontFamily }}>Java Spring</Typography>
          <Typography variant="h6" color={theme.palette.text.secondary} style={{ fontFamily: theme.typography.fontFamily }}>Question 4 of 40</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box component="pre" bgcolor={theme.palette.background.paper} p={2} borderRadius={4} height="100%" style={{ fontFamily: theme.typography.fontFamily }}>
            {`
@RestController
public class DeveloperController {
  @RequestMapping(value = "/owner/{devId}", method = RequestMethod.POST)
  @ResponseBody
  public Developer findDeveloper(@PathVariable("devId") int devId) {
    return new Developer();
  }
}
            `}
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" color={theme.palette.text.primary} gutterBottom style={{ fontFamily: theme.typography.fontFamily }}>
            Which of the following are TRUE regarding the above controller? (Select all that apply.)
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={selectedOptions.includes('option1')} onChange={handleCheckboxChange} name="option1" />}
              label="RequestMethod.GET method is more accurate than POST"
              style={{ color: theme.palette.text.primary }}
            />
            <FormControlLabel
              control={<Checkbox checked={selectedOptions.includes('option2')} onChange={handleCheckboxChange} name="option2" />}
              label="@PathVariable should be replaced with the @PathParam annotation"
              style={{ color: theme.palette.text.primary }}
            />
            <FormControlLabel
              control={<Checkbox checked={selectedOptions.includes('option3')} onChange={handleCheckboxChange} name="option3" />}
              label="@ResponseBody could be removed"
              style={{ color: theme.palette.text.primary }}
            />
            <FormControlLabel
              control={<Checkbox checked={selectedOptions.includes('option4')} onChange={handleCheckboxChange} name="option4" />}
              label="Returning the 201 HTTP status code is better"
              style={{ color: theme.palette.text.primary }}
            />
          </FormGroup>
          <Button
            variant="contained"
            style={{ marginTop: '16px', backgroundColor: 'black', color: 'white', fontFamily: theme.typography.fontFamily }}
          >
            NEXT QUESTION
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Question;
