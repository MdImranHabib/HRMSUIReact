import React, { useEffect, useState } from "react";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../../actions/Flat/dFlat";
import { useToasts } from "react-toast-notifications"
import {
    Grid,
    TextField,
    MenuItem,
    withStyles,
    InputLabel,
    FormControl,
    Select,
    Button,
} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            minWidth: 250,
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    smMargin: {
        margin: theme.spacing(1),
    },
});

const initialFieldValues = {
    name: "",
    category: "",
    description: "",
    rent: "",
    meterNo: "",
    status: false,
};

const DFlatForm = ({ classes, ...props }) => {

    //toast
    const { addToast } = useToasts()
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("name" in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required.";
        if ("category" in fieldValues)
            temp.category = fieldValues.category ? "" : "This field is required.";
        if ("rent" in fieldValues)
            temp.rent = fieldValues.rent ? "" : "This field is required.";
        if ("meterNo" in fieldValues)
            temp.meterNo = fieldValues.meterNo ? "" : "This field is required.";

        setErrors({
            ...temp,
        });

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    };

    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(
        initialFieldValues, validate, props.setCurrentId
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const onSuccess = () =>
                resetForm()
            addToast("Submitted successfully", { appearance: 'success' })
            if (props.currentId == 0)
                props.createDflat(values, onSuccess)
            else
                props.updateDflat(props.currentId, values, onSuccess)
        }
        console.log(values);
    };

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.dFlatList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form
            autoComplete="off"
            noValidate
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="name"
                        label="Flat Name"
                        value={values.name}
                        variant="outlined"
                        onChange={handleInputChange}
                        {...(errors.name && {
                            error: true,
                            helperText: errors.name,
                        })}
                    />
                    <TextField
                        name="category"
                        label="Category"
                        value={values.category}
                        variant="outlined"
                        onChange={handleInputChange}
                        {...(errors.category && {
                            error: true,
                            helperText: errors.category,
                        })}
                    />
                    <TextField
                        name="description"
                        label="Description"
                        value={values.description}
                        variant="outlined"
                        onChange={handleInputChange}
                        {...(errors.description && {
                            error: true,
                            helperText: errors.description,
                        })}
                    />

                    {/* <FormControl className={classes.formControl} varient="outlined">
                        <InputLabel>Blood Group</InputLabel>
                        <Select
                            name="bloodGroup"
                            value={values.bloodGroup}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="">Select Blod Group</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                        </Select>
                    </FormControl> */}
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        name="rent"
                        label="Rent"
                        value={values.rent}
                        variant="outlined"
                        onChange={handleInputChange}
                        {...(errors.rent && {
                            error: true,
                            helperText: errors.rent,
                        })}
                    />
                    <TextField
                        name="meterNo"
                        label="Meter No"
                        value={values.meterNo}
                        variant="outlined"
                        onChange={handleInputChange}
                        {...(errors.meterNo && {
                            error: true,
                            helperText: errors.meterNo,
                        })}
                    />

                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button onClick={resetForm} variant="contained" className={classes.smMargin}>
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
};

const mapStateToProps = (state) => ({
    dFlatList: state.dFlat.list,
});

const mapActionToProps = {
    createDflat: actions.create,
    updateDflat: actions.update
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DFlatForm));
//export default DCandidateForm;
