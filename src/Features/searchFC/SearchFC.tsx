import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.55),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.45),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '90%',
    height: '40%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
    },
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    flex: 'stretch',
}));

export const SearchFC: React.FC = () => {
    return (
        <Search
            sx={{
                '@media (max-width: 480px)': {
                    display: 'none',
                },
            }}
        >
            <SearchIconWrapper>
                <SearchIcon fontSize="large" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
    );
};
