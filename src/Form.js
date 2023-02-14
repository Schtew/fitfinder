import React from 'react';
import Card from '@mui/material/Card';

const Form = () => {
  return (
    <Card sx={{ marginLeft: "5%",
                marginRight: "5%" }}>
        <iframe
        title="Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdNkLmefSpXvqn3qiyKSqPBtAsP-MRP6dg_C5YPCbl0qgdenw/viewform?embedded=true"
        width="640"
        height="407"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        >
        Loading...
        </iframe>
    </Card>
  );
};




export default Form;
