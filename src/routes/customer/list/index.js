import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import IntlMessages from "Util/IntlMessages";
import { Row, Table, Button } from "reactstrap";

import { Colxx } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";

import { photoServerUrl } from "Constants/defaultValues";

import { 
  customerList,
  suspendCustomer,
  deleteCustomer
} from "Redux/actions";

import './index.module.scss';

class list extends Component {

  handleSuspendCustomer = (e, customer) => {
    e.preventDefault();

    this.props.suspendCustomer(customer);
  };

  handleDeleteCustomer = (e, customer) => {
    e.preventDefault();

    this.props.deleteCustomer(customer);
  };

  componentDidMount() {
    this.props.getCustomerList();
  }

  handleNewCustomer = (e) => {
    e.preventDefault();
  }

  render() {

    const { customerList } = this.props;
    
    return (
      <Fragment>
        <Row>
          <Colxx xxs="8">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.customer" />}
              match={this.props.match}
            />
          </Colxx>
          <Colxx xxs="4">
            <Link to="/customer/add" className="btn btn-info btn-sm pull-right">Add Customer</Link>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Table>
              <thead>
                <tr>
                  <th scope="row">Profile Logo</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>UrlKey</th>
                  <th>Active</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  customerList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img className="img-profile-logo"
                            src={ photoServerUrl + item.ProfileLogo } alt="Profile Logo" />
                        </td>
                        <td>{item.UserName}</td>
                        <td>{item.Email}</td>
                        <td>{item.Phone}</td>
                        <td>{item.UrlKey}</td>
                        <td>{item.Status === 1 ? 'Yes' : 'No'}</td>
                        <td>
                          <Link to="/customer" className="control-link">
                            <FontAwesomeIcon icon="user-circle" title="Login into account" size="lg" /></Link>
                          <Link to={"/customer/edit/" + item.CustomerID} className="control-link">
                            <FontAwesomeIcon icon="edit" title="Edit customer" size="lg" /></Link>
                          <Link to="/" className="control-link" onClick={(e) => this.handleSuspendCustomer(e, item) }>
                            <FontAwesomeIcon icon={item.Status === 1 ? 'stop' : 'play' } title="Suspend customer" size="lg" /></Link><br />
                          <Link to="/customer" className="control-link">
                            <FontAwesomeIcon icon="unlink" title="Unsync" size="lg" /></Link>
                          <Link to={"/customer/images/" + item.CustomerID} className="control-link">
                            <FontAwesomeIcon icon="list" title="List Images" size="lg" /></Link>
                          <Link to="/customer" className="control-link" onClick={(e) => this.handleDeleteCustomer(e, item)}>
                            <FontAwesomeIcon icon="times" title="Delete" size="lg" /></Link>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ customerData, settings }) => {
  
  const { customerList } = customerData;
  const { locale } = settings;

  return { 
    customerList, locale 
  };
};

export default connect(
  mapStateToProps,
  {
    getCustomerList: customerList,
    suspendCustomer: suspendCustomer,
    deleteCustomer
  }
)(list);