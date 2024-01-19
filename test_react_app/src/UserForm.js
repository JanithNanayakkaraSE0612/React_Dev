import { Input } from '@mui/material';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



const UserForm = props =>{
    return(
       <Grid container spacing={2} sx={{
         backgroundColor : '#ffffff',
         marginBottom : '10px',
         display: 'block'
       }}>
        <Grid item xs={12}>
          <Typography component={'h1'} sx={{color:'#000000'}} >
                User Form
          </Typography>
        </Grid> 
        <Grid container spacing={0}>
          <Typography component={'label'} htmlFor='id'
          sx={{color:'#000000',
        marginRight:'20px',
    fontSize:'16px',
width:'100px',
display:'block'}}
          >
                ID
          </Typography>
          <Input />
        </Grid>
       </Grid>
    );
}
export default UserForm;