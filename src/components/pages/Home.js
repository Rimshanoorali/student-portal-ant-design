import { Box, makeStyles, Grid } from "@material-ui/core"
import { Button, Typography, Input } from "antd"
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { pink, teal } from '@material-ui/core/colors';
import List from "../student/List";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: teal[400],
  color: "white"
 },
 addStuColor: {
  backgroundColor: pink[400],
  color: "white"
 },
})
const Home = () => {
 const classes = useStyles();
 const [student, setStudent] = useState({
  stuname: "",
  email: ""
 });
 const [status, setStatus] = useState();
 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }
 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3333/students`, student)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Home />
 }
 return (
 <>
    <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Typography.Title level={1} style={{margin: 0, color: "white"}}>Admin Dashboard
    </Typography.Title>
   </Box>
   
   <Grid container justifyContent="center" spacing={4}>
    <Grid item md={6} xs={12}>
    <Box textAlign="center" className={classes.addStuColor} p={2} mb={2}>
    <Typography.Title level={2} style={{margin: 0, color: "white"}}>Add Student
    </Typography.Title>
   </Box>
     
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <Input size="large" allowClear prefix={<UserOutlined />} placeholder="Entert Your Name" autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <Input size="large" allowClear prefix={<MailOutlined />} placeholder="Entert Your Email" autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email Address" onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button variant="contained" type="primary" size="large" style={{width: '25%', marginLeft: '40%'}} onClick={e => onFormSubmit(e)}>Add</Button>
      </Box>
     </form>
    </Grid>
    <Grid item md={6} xs={12}>
     <List />
    </Grid>
   </Grid>
  </>
 )
}
export default Home