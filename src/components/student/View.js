import { Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@material-ui/core"
import { teal,pink,deepOrange } from '@material-ui/core/colors';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography,Button } from 'antd'
import axios from "axios";
const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: pink[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
 headingColor: {
    backgroundColor: teal[400],
    color: "white"
   },
});
const View = () => {
 const classes = useStyles();
 const { id } = useParams();
 const [student, setStudent] = useState([]);
 const history = useNavigate();
 useEffect(() => {
  async function getStudent() {
   try {
    const student = await axios.get(`http://localhost:3333/students/${id}`)
    // console.log(student.data);
    setStudent(student.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getStudent();
 }, [id])
 function handleClick() {
  history.push("/")
 }
 return (
  <>
   <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Typography.Title level={1} style={{margin: 0, color: "white"}}>Admin Dashboard
    </Typography.Title>
   </Box>
    
   <Box textAlign="center" p={2} mb={2} className={classes.stuListColor}>
    <Typography.Title level={2} variant="h4" style={{margin: 0,color: "white"}}>Student Detail</Typography.Title>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: deepOrange[200] }}>
       <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       <TableCell align="center">{student.id}</TableCell>
       <TableCell align="center">{student.stuname}</TableCell>
       <TableCell align="center">{student.email}</TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
   <Box m={3} textAlign="center">
    <Button variant="contained"  type="primary" size="large" style={{width: '30%'}} ghost onClick={handleClick}>Back to Home</Button>
   </Box>
  </>
 )
}
export default View





