import { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    UncontrolledTooltip,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    FormGroup,
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2,
} from "../../variables/charts.js";
import axios from 'axios';
import Head from "../../components/Headers/Head";

const Cinemas = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [theatre, setTheatre] = useState();
    const [popup, setPopup] = useState(false);
    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };

    useEffect(() => {
        axios.get("https://midwestcinema-backend.herokuapp.com/cinemas").then((res) => {
            setTheatre(res.data)
            console.log(theatre)
        })

    }, [])

    return (
        <>
            <Head />
            {/* Page content */}
            <Row> <Button color="info" size="sm" type="button" className="add-button" onClick={() => { setPopup(true) }}>
          Add +
        </Button></Row>
            <Row>
                <Col className="mb-5 mb-xl-0" xl="12">
                    <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Cinema Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Address</th>
                                <th scope="col">Opening Time</th>
                                <th scope="col">Closing Time</th>
                                <th scope="col">Status</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {theatre?.map((cinema) => (
                                <tr>
                                <td>1</td>
                                <td>{cinema.name}</td>
                                <td>{cinema.address}</td>
                                <td>{cinema.location}</td>
                                <td>{cinema.timings} </td>
                                <td>11:00 pm</td>
                                <td>
                                    <Badge color="" className="badge-dot">
                                        <i className="bg-info" />
                                        {cinema.status}
                                    </Badge>
                                </td>
                                <td className="text-right">
                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            className="btn-icon-only text-light"
                                            href="#pablo"
                                            role="button"
                                            size="sm"
                                            color=""
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i className="fas fa-ellipsis-v" />
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                View
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Edit
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Delete
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {popup && (
                  <Box
                  className="pop-box"
                  sx={{
                    width: 800,
                    height: 600,
                  }}
                >
                <Paper elevation={3} >
     <Form>
     <Row>
     <p className="h3">Cinema Name</p>
       <Col md="3">
         <FormGroup>
           <Input
             id="exampleFormControlInput1"
             placeholder="Enter Cinema Name"
             type="name"
           />
         </FormGroup>
       </Col>
       <p className="h3">City</p>
       <Col md="3">
         <FormGroup>
           <Input
             id="exampleFormControlInput1"
             placeholder="Enter City"
             type="name"
           />
         </FormGroup>
       </Col>
       <i class="fas fa-times-circle close-popup" onClick={() => {setPopup(false)}}></i>
     </Row>
     <Row>
     <p className="h3">ADDRESS</p>
       <Col md="3">
         <FormGroup>
           <Input
             id="exampleFormControlInput1"
             placeholder="Enter ADDRESS"
             type="name"
           />
         </FormGroup>
       </Col>
       <p className="h3">OPENING TIME</p>
       <Col md="3">
         <FormGroup>
           <Input
             id="exampleFormControlInput1"
             placeholder="Enter OPENING TIME"
             type="name"
           />
         </FormGroup>
       </Col>
     </Row>
   
     <Row>
     <p className="h3">CLOSING TIME</p>
       <Col md="3">
         <FormGroup>
           <Input
             id="exampleFormControlInput1"
             placeholder="Enter CLOSING TIME"
             type="name"
           />
         </FormGroup>
       </Col>
       <p className="h3">STATUS</p>
       <Col md="3">
         <FormGroup>
           <Input
             id="exampleFormControlInput1"
             placeholder="Enter STATUS"
             type="name"
           />
         </FormGroup>
       </Col>
     </Row> 
    <Row><Button variant="contained" color="success" className="addbtn">
  Add Cinema
</Button></Row>

   </Form>
   </Paper>
   </Box>
)}
        </>
    );
};

export default Cinemas;
