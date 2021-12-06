import { useState,useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
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
    UncontrolledTooltip,  FormGroup,
    Form,
    Input,
    Modal,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";
import "./movies.css";
// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2,
} from "../../variables/charts.js";
import axios from 'axios';
import Head from "../../components/Headers/Head";

const Movies = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [movie, setMovie] = useState();
    const [popup, setPopup] = useState(false);
    

    useEffect(() => {
        axios.get("https://midwestcinema-backend.herokuapp.com/movies").then((res) => {
            setMovie(res.data)
        })

    }, [])
    
    return (
        <>
        <Head />
        {/* Page content */}
        <Row> 
            <Button color="info" size="sm" type="button" className="add-button" onClick={() => setPopup(true)}>
                Add +
            </Button>
        </Row>
            <Row>
                <Col className="mb-5 mb-xl-0" xl="12">
                    <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Movie Name</th>
                                <th scope="col">Cinema</th>
                                <th scope="col">Description</th>
                                <th scope="col">Timming</th>
                                <th scope="col">Status</th>
                                <th scope="col">Language</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {movie?.map((movie) => (
                                 <tr>
                                 <td>1</td>
                                 <td>{movie.name}</td>
                                 <td>{movie.cinemas}</td>
                                 <td>{movie.ratings}{movie.duration}{movie.description} </td>
                                 <td>
                                     08:20 PM
                                 </td>
                                 <td>
                                     <Badge color="" className="badge-dot">
                                         <i className="bg-info" />
                                        {movie.status}
                                     </Badge>
                                 </td>
                                 <td>{movie.language}</td>
                                 <td className="text-right">

                                 </td>
                             </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal toggle={() => setPopup(!popup)} isOpen={popup}>
                <Card>
                    <CardBody>
                        <h2 className="text-center">New Movie</h2>
                        <Form>
                            <FormGroup>
                                <Input
                                    id="movieName"
                                    placeholder="Enter Movie Name"
                                    type="email"
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Input
                                    id="LAnguage"
                                    placeholder="Enter Language"
                                    type="email"
                                />
                            </FormGroup>

                        </Form>
                    </CardBody>
                </Card>
            </Modal>
        </>
    );
};

export default Movies;
