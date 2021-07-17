import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/Flat/dFlat";
import DFlatForm from "./DFlatForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

const DFlats = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);
  //toast
  const { addToast } = useToasts()


  useEffect(() => {
    props.fetchAllDFlats();
  }, []);
  const onDelete = id => {
    if (window.confirm('Are sure want to delete this?'))
      props.deleteDFlat(id, () => addToast("Deleted successfully", { appearance: "info" }))
  }
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
        <Box boxShadow={3} textAlign="center" bgcolor="primary.main" color="primary.contrastText" mb={2} p={2} fontWeight="fontWeightBold">
            Flat Form
          </Box>        
          <DFlatForm {...{ currentId, setCurrentId }} />
        </Grid>

        <Grid item xs={6}>
          <Box boxShadow={3} textAlign="center" bgcolor="primary.main" color="primary.contrastText" mb={2} p={2} fontWeight="fontWeightBold">
            Flat List
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Rent</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.dFlatList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.category}</TableCell>
                      <TableCell>{record.rent}</TableCell>
                      <TableCell>
                        <ButtonGroup variant="text">
                          <Button>
                            <EditIcon
                              color="primary"
                              onClick={() => {
                                setCurrentId(record.id);
                              }}
                            />
                          </Button>
                          <Button>
                            <DeleteIcon color="secondary"
                              onClick={() => onDelete(record.id)}
                            />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  dFlatList: state.dFlat.list,
});

const mapActionToProps = {
  fetchAllDFlats: actions.fetchAll,
  deleteDFlat: actions.Delete
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(DFlats));
