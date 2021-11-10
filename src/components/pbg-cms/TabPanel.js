import Box from '@mui/material/Box';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: '100%' }}>
          {children} 
        </Box>
      )}
    </div>
  );
};

export default TabPanel;