import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Modal,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const SignupReview = ({ onNext, onPrev }) => {
  const [workHistory, setWorkHistory] = useState([]);
  const [education, setEducation] = useState([]);
  const [openWorkModal, setOpenWorkModal] = useState(false);
  const [openEducationModal, setOpenEducationModal] = useState(false);
  const [currentWork, setCurrentWork] = useState({});
  const [currentEducation, setCurrentEducation] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [ongoing, setOngoing] = useState(false);

  const handleAddWork = () => {
    setWorkHistory([...workHistory, currentWork]);
    setCurrentWork({});
  };

  const handleAddEducation = () => {
    setEducation([...education, currentEducation]);
    setCurrentEducation({});
  };

  const handleEditWork = (index) => {
    setCurrentWork(workHistory[index]);
    setEditIndex(index);
    setOpenWorkModal(true);
  };

  const handleEditEducation = (index) => {
    setCurrentEducation(education[index]);
    setOngoing(education[index].endDate === 'Ongoing');
    setEditIndex(index);
    setOpenEducationModal(true);
  };

  const handleSaveWork = () => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[editIndex] = currentWork;
    setWorkHistory(updatedWorkHistory);
    setOpenWorkModal(false);
    setCurrentWork({});
    setEditIndex(null);
  };

  const handleSaveEducation = () => {
    const updatedEducation = [...education];
    updatedEducation[editIndex] = currentEducation;
    setEducation(updatedEducation);
    setOpenEducationModal(false);
    setCurrentEducation({});
    setEditIndex(null);
  };

  return (
    <Box sx={{ padding: 4, width: '1200px',}}>
      <Typography variant="h4" gutterBottom>
        Hello Test, Let's complete your profile
      </Typography>

      {/* Work History Section */}
      <Typography variant="h6" gutterBottom>
        Work History
      </Typography>
      {workHistory.map((work, index) => (
        <Box key={index}>
          <Typography>{work.position} at {work.companyName}</Typography>
          <Typography>{work.startDate} - {work.endDate}</Typography>
          <Typography>{work.description}</Typography>
          <Typography>{work.country}</Typography>
          <IconButton onClick={() => handleEditWork(index)}>
            <EditIcon />
          </IconButton>
        </Box>
      ))}
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name"
              fullWidth
              value={currentWork.companyName || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, companyName: e.target.value })}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              fullWidth
              value={currentWork.country || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, country: e.target.value })}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6} sm={3}>
            <TextField
              select
              fullWidth
              value={currentWork.startMonth || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, startMonth: e.target.value })}
              SelectProps={{ native: true }}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            >
              <option value="">Start Month</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              select
              fullWidth
              value={currentWork.startYear || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, startYear: e.target.value })}
              SelectProps={{ native: true }}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            >
              <option value="">Start year</option>
              {[...Array(50)].map((_, i) => (
                <option key={i} value={2024 - i}>{2024 - i}</option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              select
              fullWidth
              value={currentWork.endMonth || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, endMonth: e.target.value })}
              SelectProps={{ native: true }}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            >
              <option value="">End month</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              select
              fullWidth
              value={currentWork.endYear || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, endYear: e.target.value })}
              SelectProps={{ native: true }}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            >
              <option value="">End year</option>
              {[...Array(50)].map((_, i) => (
                <option key={i} value={2024 - i}>{2024 - i}</option>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Position"
              fullWidth
              value={currentWork.position || ''}
              onChange={(e) => setCurrentWork({ ...currentWork, position: e.target.value })}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              fullWidth
              value="Choose certificate file"
              InputProps={{
                endAdornment: (
                  <Button variant="contained" component="label">
                    Browse
                    <input type="file" hidden />
                  </Button>
                ),
                style: { borderBottom: '1px solid #ccc' }
              }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddWork}
          sx={{ mt: 2, color: "white", bgcolor: 'black', '&:hover': { bgcolor: 'black' } }}
        >
          ADD
        </Button>
      </Box>

      {/* Education Section */}
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      {education.map((edu, index) => (
        <Box key={index}>
          <Typography>{edu.degree} from {edu.university}</Typography>
          <Typography>{edu.startDate} - {edu.endDate}</Typography>
          <Typography>{edu.description}</Typography>
          <IconButton onClick={() => handleEditEducation(index)}>
            <EditIcon />
          </IconButton>
        </Box>
      ))}
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Degree Diploma"
              fullWidth
              value={currentEducation.degree || ''}
              onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Overall CGPA"
              fullWidth
              value={currentEducation.cgpa || ''}
              onChange={(e) => setCurrentEducation({ ...currentEducation, cgpa: e.target.value })}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6} sm={3}>
            <TextField

              select
              fullWidth
              value={currentEducation.startYear || ''}
              onChange={(e) => setCurrentEducation({ ...currentEducation, startYear: e.target.value })}
              SelectProps={{ native: true }}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            >
              <option value="">Start Year</option>
              {[...Array(50)].map((_, i) => (
                <option key={i} value={2024 - i}>{2024 - i}</option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label=""
              select
              fullWidth
              value={currentEducation.endYear || ''}
              onChange={(e) => setCurrentEducation({ ...currentEducation, endYear: e.target.value })}
              SelectProps={{ native: true }}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
              disabled={ongoing}
            >
              <option value="">End Year</option>
              {[...Array(50)].map((_, i) => (
              <option key={i} value={2024 - i}>{2024 - i}</option>
))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ongoing}
                  onChange={(e) => {
                    setOngoing(e.target.checked);
                    if (e.target.checked) {
                      setCurrentEducation({ ...currentEducation, endYear: 'Ongoing' });
                    } else {
                      setCurrentEducation({ ...currentEducation, endYear: '' });
                    }
                  }}
                />
              }
              label="Ongoing"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="University"
              fullWidth
              value={currentEducation.university || ''}
              onChange={(e) => setCurrentEducation({ ...currentEducation, university: e.target.value })}
              InputProps={{ style: { borderBottom: '1px solid #ccc' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              fullWidth
              value="Choose certificate file"
              InputProps={{
                endAdornment: (
                  <Button variant="contained" component="label">
                    Browse
                    <input type="file" hidden />
                  </Button>
                ),
                style: { borderBottom: '1px solid #ccc' }
              }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddEducation}
          sx={{ mt: 2, color: "white",  bgcolor: 'black', '&:hover': { bgcolor: 'black' } }}
        >
          ADD
        </Button>
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ mt: 4 }}>
        <Button variant="outlined" onClick={onPrev}>
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={onNext} sx={{ ml: 2 }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SignupReview;