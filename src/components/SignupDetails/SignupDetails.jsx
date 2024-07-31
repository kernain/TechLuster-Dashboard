import React, { useState } from 'react';
import { Box, Typography, TextField, Chip, Grid, InputAdornment, Slider, Button, MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';

const skillsList = [
    'Java', '.Net', 'JavaScript', 'Python', 'Angular', 'React JS', 'PHP', 'UI/UX Design',
    'Android', 'iOS', 'GoLang', 'ASP.Net', 'Swift', 'Laravel', 'Docker', 'Azure',
    'React Native', 'Node JS', 'Wordpress', 'Spring Boot', 'Spring MVC', 'Django', 'Vue',
    'HTML', 'CSS', 'GCP', 'Redis', 'Scala', 'Ruby on Rails', 'Git', 'Maven', 'Kotlin',
    'MongoDB', 'C#', 'C++', 'C', 'Adobe InDesign', 'Adobe After Effects', 'Adobe XD',
    'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Lightroom', 'Adobe Illustrator',
    'RESTful', 'Kafka', 'Spring Framework', 'AWS', 'MySQL', 'jQuery', 'T-SQL', 'NoSQL',
    'Windows Server', 'SEO', 'Microsoft Power BI', 'Linux', 'Machine Learning',
    'Oracle Netsuite'
];

const rolesList = [
    'Developer', 'Designer', 'Product Manager', 'Product Designer', 'Consultant'
];

const SignupDetails = ({onNext}) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [experience, setExperience] = useState(0);
    const [role, setRole] = useState('');
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        location: ''
    });
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSkillClick = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            if (selectedSkills.length < 8) {
                setSelectedSkills([...selectedSkills, skill]);
            } else {
                alert('You can select a maximum of 8 skills.');
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonalDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleExperienceChange = (event, newValue) => {
        setExperience(newValue);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleTermsChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const handleSubmit = () => {
        if (selectedSkills.length < 4) {
            alert('Please select at least 4 skills.');
        } else {
            // Handle form submission
            console.log('Form submitted', { personalDetails, selectedSkills, experience, role, termsAccepted });
            onNext();

        }
    };

    const isFormValid = () => {
        return personalDetails.firstName && personalDetails.lastName && personalDetails.phone &&
            personalDetails.email && personalDetails.location && experience > 0 &&
            selectedSkills.length >= 4 && role && termsAccepted;
    };

    return (
        <Box sx={{ p: 5, width: "60%" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ mr: 1, fontSize: 'small', color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                    Time to complete: less than 1 minute
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        placeholder="First Name"
                        variant="standard"
                        name="firstName"
                        value={personalDetails.firstName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        placeholder="Last Name"
                        variant="standard"
                        name="lastName"
                        value={personalDetails.lastName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        placeholder="Mobile Number"
                        variant="standard"
                        name="phone"
                        value={personalDetails.phone}
                        onChange={handleInputChange}
                    />
                    <Typography variant="caption" color="text.secondary">
                        The hiring team may use this number to contact you about this job.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        placeholder="Location"
                        variant="standard"
                        name="location"
                        value={personalDetails.location}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        placeholder="Email"
                        variant="standard"
                        name="email"
                        value={personalDetails.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography gutterBottom>Years of professional experience</Typography>
                    <Slider
                        value={experience}
                        onChange={handleExperienceChange}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={20}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {experience} years
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mb: 2 }}>Skills</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
                Select minimum 4 and maximum 8 skills. You have to pass assessment of each selected skill, please select carefully.
            </Typography>
            <TextField
                fullWidth
                placeholder="Search Skills"
                sx={{ mb: 2 }}
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skillsList.map((skill) => (
                    <Chip
                        key={skill}
                        label={skill}
                        clickable
                        variant={selectedSkills.includes(skill) ? 'filled' : 'outlined'}
                        onClick={() => handleSkillClick(skill)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiChip-label': { px: 2 },
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6">
                    Your Role <span style={{ color: 'red' }}>*</span>
                </Typography>
                <Box sx={{width: "40%"}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <WorkIcon sx={{ mr: 2 }} />
                        <FormControl fullWidth variant="standard">
                            <InputLabel>Select your role</InputLabel>
                            <Select
                                value={role}
                                onChange={handleRoleChange}
                                displayEmpty
                                defaultValue=""
                            >
                                <MenuItem value="" disabled>Select your role</MenuItem>
                                {rolesList.map((roleOption) => (
                                    <MenuItem key={roleOption} value={roleOption}>
                                        {roleOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={termsAccepted}
                                    onChange={handleTermsChange}
                                    name="terms"
                                    color="primary"
                                />
                            }
                            label="I agree to the terms and conditions"
                            sx={{ mt: 3 }}
                        />
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 4 }}
                            onClick={handleSubmit}
                            disabled={!isFormValid()}
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default SignupDetails;
