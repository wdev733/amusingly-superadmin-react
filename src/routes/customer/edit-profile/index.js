import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { Colxx } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import { Link } from "react-router-dom";

import './index.module.scss'

import { connect } from 'react-redux';
import { photoServerUrl } from "Constants/defaultValues";

import {
  customerOne
} from "Redux/actions";

class EditCustomer extends Component {

  componentDidMount() {
    const { customerId } = this.props.match.params;
    
    this.props.getCustomerOne(customerId);
  }

  render() {
    
    const { customer } = this.props;

    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.customer" />}
              match={this.props.match}
            />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="8">
            <Form>
              <FormGroup>
                <Label for="username">User Name:</Label>
                <Input type="email" name="username" 
                placeholder="username" id="username" value={customer.UserName}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" name="password" id="password" value={customer.Password}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" id="email" value={customer.Email}/>
              </FormGroup>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" id="name" value={customer.Name} />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" name="phone" id="phone" value={customer.Phone}/>
              </FormGroup>
              <FormGroup>
                <Label for="billing_address">Billing Address 1:</Label>
                <Input type="text" name="billing_address" id="bill_address_1" value={customer.BillingAddress1}/>
              </FormGroup>
              <FormGroup>
                <Label for="billing_address2">Billing Address 2:</Label>
                <Input type="text" name="billing_address2" id="bill_address_2" value={customer.BillingAddress2}/>
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" value={customer.City}/>
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input type="select" name="state" id="state" value={customer.State}>
                  <option>-- Select --</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Maine</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="instagram_profile">Instagram Profile Name </Label>
                <Input type="text" name="email" 
                  id="exampleEmail" instagram_profile="with a placeholder" value={customer.InstaProfileName}/>
              </FormGroup>
              <FormGroup>
                <Label for="url_key">Url Key</Label>
                <Input type="text" name="email" id="exampleurl_keyEmail" value={customer.UrlKey}/>
              </FormGroup>
              <FormGroup>
                <Label for="url_key">Profile Logo</Label>
                <Input type="file" name="email" id="exampleurl_keyEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="status">Status</Label>
                <Input type="select" name="status" id="status" value={customer.Status}>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </Input>
              </FormGroup>
              <Button>Save</Button> 
              <Link to="/customer/list"> Cancel</Link>
            </Form>
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

  const { customer } = customerData;
  const { locale } = settings;

  return {
    customer, locale
  };
};

export default connect(
  mapStateToProps,
  {
    getCustomerOne: customerOne
  }
)(EditCustomer);