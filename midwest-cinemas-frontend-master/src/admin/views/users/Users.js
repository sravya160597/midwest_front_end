import { useState, useEffect } from "react";
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
import Head from "../../components/Headers/Head";
import ServerApi from "../../../utility/ServerApi.js";

const Users = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    ServerApi().get('users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(e => {
      console.log(e)
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {users.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.gender}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Col>
      </Row>
    
    </>
  );
};

export default Users;
