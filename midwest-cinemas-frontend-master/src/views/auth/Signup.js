import React from 'react'
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
  } from "@mui/material";
  import {Row, Col} from "reactstrap";
  import { Radio } from "@mui/material";
  import Navbar from "../home/Navbar";
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
  import { FormControlLabel } from "@mui/material";
  import { RadioGroup } from "@mui/material";
  import { FormControl } from "@mui/material";
  import { FormLabel } from "@mui/material";
  import { Checkbox } from "@mui/material";
  import { Link } from "react-router-dom";
  import { Formik, Field, Form,  ErrorMessage } from "formik";
  import { FormHelperText } from "@mui/material";
  import ServerApi from '../../utility/ServerApi'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'

import * as Yup from 'yup'
const Signup = () => {
    const history = useHistory()

    const paperStyle = { padding: 20, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, <p style={{ color: "red" }}>It's too short</p>).required(<p style={{ color: "red" }}>Name is required</p>),
        email: Yup.string().email(<p style={{ color: "red" }}>Enter valid email</p>).required(<p style={{ color: "red" }}>Email is required</p>),
        gender: Yup.string().oneOf(["male", "female"], <p style={{ color: "red" }}>Required</p>).required( <p style={{ color: "red" }}>Gender is required</p>),
        phoneNumber: Yup.number().typeError(<p style={{ color: "red" }}>Enter valid Phone Number</p>).required(<p style={{ color: "red" }}>Phone number is required</p>),
        password: Yup.string().min(8, <p style={{ color: "red" }}>Password minimum length should be 8</p>).required(<p style={{ color: "red" }}>Password is required</p>),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], <p style={{ color: "red" }}>Password not matched</p>).required(<p style={{ color: "red" }}>Confirm password isrequired</p>),
        termsAndConditions: Yup.string().oneOf(["true"], <p style={{ color: "red" }}>Accept terms & conditions</p>)
    })
    // const onSubmit = (values, props) => {
    //     console.log(values)
    //     console.log(props)
    //     setTimeout(() => {

    //         props.resetForm()
    //         props.setSubmitting(false)
    //     }, 2000)
    // }

    const onSubmit = (values, props) => {
        const raw = {
            name: values.name,
            email: values.email,
            gender: values.gender,
            phone: values.phoneNumber,
            password: values.password,
        }
  
        console.log({raw})
  
        ServerApi().post('/auth/register', raw)
        .then(res => {
            if(res.data.success) {
                //HANDEL LOGGED IN
                toast.success('Registered successfully!')
                history.push('/login')
            }else{
                toast.error('Unable to Register!')
                //HANDEL INVALID CREDENTIALS
            }
        })
        .catch(e => {
            toast.error('Unable to login server unavailable!')
            console.log(e)
        })
    };

    return (
        <Grid>
            <Navbar />

            <div className="container-fluid">

            

            <Row>
                <Col sm="12" md="8">
                    <div className="p-5">
                        <img className="img-fluid p-5" src="/assets/svg/undraw_movie_night.svg" />
                    </div>
                </Col>
                <Col sm="12" md="4">
                <div className="p-5">
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} fullWidth name="name" label='Name'
                                    placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                                <Field as={TextField} fullWidth name="email" label='Email'
                                    placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                                <FormControl component="fieldset" style={marginTop}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    < Field as={RadioGroup} aria-label="gender" name="gender"  style={{ display: 'initial' }}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </ Field>
                                </FormControl>
                                <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                                <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                    placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                                <Field as={TextField} fullWidth name='password' type="password"
                                    label='Password' placeholder="Enter your password"
                                    helperText={<ErrorMessage name="password" />} />
                                <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                    label='Confirm Password' placeholder="Confirm your password"
                                    helperText={<ErrorMessage name="confirmPassword" />} />
                                <FormControlLabel
                                    control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="I accept the terms and conditions."
                                />
                                <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                                <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                    color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                                    <p className="mt-2">
                                        Already have account? <Link to="/Login">Login</Link>
                                    </p> 

                            </Form>
                        )}
                    </Formik>
                </Paper>
                </div>
                </Col>
            </Row>

            </div>
            
        </Grid>
    )
}

export default Signup;