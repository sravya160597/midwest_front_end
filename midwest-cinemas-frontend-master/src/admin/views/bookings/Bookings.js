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
    UncontrolledTooltip
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

const Bookings = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [book, setBook] = useState();
    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
    
    useEffect(() => {
        axios.get("https://midwestcinema-backend.herokuapp.com/bookings").then((res) => {
            setBook(res.data)
        })

    }, [])
    return (
        <>
            <Head />
            {/* Page content */}

            <Row>
                <Col className="mb-5 mb-xl-0" xl="12">
                    <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Movie Name</th>
                                <th scope="col">Cinema Name</th>
                                <th scope="col">Timming</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {book?.map((book) => (
                                <tr>
                                <td>1</td>
                                <td>{book.name}</td>
                                <td>
                                {book.moviename}
                                </td>
                                <td>
                                {book.cinemaname}
                                </td>
                                <td>
                                {book.timming}
                                </td>
                                <td>
                                $16.62
                                </td>
                                <td>
                                <Badge color="" className="badge-dot">
                  <i className="bg-success" />
                  Completed
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
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col>
            </Row>

        </>
    );
};

export default Bookings ;
