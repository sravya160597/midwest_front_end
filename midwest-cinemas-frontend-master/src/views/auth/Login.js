import React from "react";
import Navbar from "../home/Navbar";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Stack from "@mui/material/Stack";

import ServerApi from '../../utility/ServerApi'
import { toast } from 'react-toastify';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Signup from "./Signup";
import { useHistory } from "react-router";

const Login = ({ handleChange }) => {
  const history = useHistory()

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 380,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const textstyle = { color: "red" };
  const googlebtnstyle={height: "30px",backgroundColor:"black",margin:'0 50px' }

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email(<p style={{ color: "red" }}>*please enter valid email</p>)
      .required(<p style={{ color: "red" }}>User name/email is required</p>),
    password: Yup.string().required(
      <p style={{ color: "red" }}>"Password is requrired"</p>)
  });

  const onSubmit = (values, props) => {
      const raw = {
          email: values.username,
          password: values.password
      }

      console.log({raw})

      ServerApi().post('/auth/login', raw)
      .then(res => {
          if(res.data.access_token) {
              //HANDEL LOGGED IN
              toast.success('Logged in')
              localStorage.setItem('userData', JSON.stringify({...res.data, access_token: res.data.access_token}))
              history.push('/')
          }else{
              toast.error('Invalid Credentials')
              //HANDEL INVALID CREDENTIALS
          }
      })
      .catch(e => {
          toast.error('Unable to login server unavailable!')
          console.log(e)
      })
  };
  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Grid md={12}>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  name="username"
                  className="mb-3"
                  placeholder="Enter username"
                  fullWidth
                  helperText={
                    <ErrorMessage className={textstyle} name="username" />
                  }
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                  helperText={<ErrorMessage name="remember" />}

                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                  fullWidth
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>

          <Typography>
            {" "}
            <p>
              Don't you have an account ?<Link href="/Signup">Sign Up</Link>
              {Signup}
            </p>
          </Typography>
          <div>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  style={googlebtnstyle}
                  startIcon={<GoogleIcon />}
                >
                  <p style={{ textTransform: "none" }}>Sign in with Google</p>
                </Button>
              </Stack>
            </div>
          
        </Paper>
      </Grid>
    </Box>
  );
};

export default Login;
