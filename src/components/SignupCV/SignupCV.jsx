// src/pages/Signup/Signup.js

import React, { useState, useContext, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { ThemeContext } from '../../theme/ThemeContext';

const SignupCV = ({ onNext }) => {
    const { currentTheme } = useContext(ThemeContext);
    const fileInputRef = useRef(null);

    const [file, setFile] = useState(null);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            onNext();
            // if (captchaVerified) {
            // }
        } else {
            alert('Please upload a valid PDF file.');
            setFile(null);
        }
    };


    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragOver(false);
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === 'application/pdf') {
            setFile(droppedFile);
            onNext();
            // if (!captchaVerified) {
            // }
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleCaptchaChange = (value) => {
        // const isValid = !!value;
        // setCaptchaVerified(isValid);
        // if (file) {
        //     onNext();
        // }
    };

    return (
        <Box sx={{ px: 4, py: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Signup at TechKluster</Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>Upload your resume</Typography>
            <Box
                sx={{
                    width: '70%',
                    p: 2,
                    backgroundColor: isDragOver ? '#e0e0e0' : '#f9f9f9',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'left',
                    mb: 4,
                    borderColor: isDragOver ? '#000' : '#ccc',
                    cursor: 'pointer',
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleClick}
            >
                <Box
                    sx={{
                        borderRadius: '8px',
                        p: 4,
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    <UploadFileIcon sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="body2" sx={{ mb: 2, fontSize: ".7rem", color: currentTheme.palette.text.light }}>PDF smaller than 2MB</Typography>
                    <Typography variant="body2" sx={{ mb: 2, fontSize: "1rem" }}>Drag and Drop your resume here or</Typography>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                    />
                    <label htmlFor="upload-resume">
                        <Button
                            variant="contained"
                            component="span"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                border: '1px solid #ccc',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                },
                            }}
                        >
                            Choose file
                        </Button>
                    </label>
                    {file && <Typography variant="body2" sx={{ mt: 2 }}>{file.name}</Typography>}
                </Box>
            </Box>
            <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
                style={{ textAlign: 'center' }}
            />
        </Box>
    );
};

export default SignupCV;
