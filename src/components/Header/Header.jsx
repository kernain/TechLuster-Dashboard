import Logo from "../../assets/login-logo.jpg";
import { Box} from '@mui/material';


const Header = () => {
    return (
        <Box sx={{
            px: 4,
            py: 2,
        }}>
            <img width={200} src={Logo} alt="Logo" />

        </Box>
    )
}

export default Header