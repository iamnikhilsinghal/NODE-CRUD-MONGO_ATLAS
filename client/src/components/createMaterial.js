import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";

const CreateMaterial = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand is required"),
    quantity: Yup.string().required("Quantity is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:8080/api/post`, data)
      .then((resp) => {
        console.log("resp", resp);
        props.handleClose();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="container">
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            Create Form - Material UI - Validation
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="name"
                required
                id="name"
                label="Name"
                fullWidth
                margin="dense"
                {...register("name")}
                error={errors.name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.name?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="brand"
                required
                id="brand"
                label="Brand"
                fullWidth
                margin="dense"
                {...register("brand")}
                error={errors.brand ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.brand?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="quantity"
                required
                id="quantity"
                label="Quantity"
                fullWidth
                margin="dense"
                {...register("quantity")}
                error={errors.quantity ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.quantity?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default CreateMaterial;
