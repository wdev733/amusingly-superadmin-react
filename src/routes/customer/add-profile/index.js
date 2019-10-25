import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { Colxx } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import { Link } from "react-router-dom";

import './index.module.scss'

import { connect } from 'react-redux';
import { photoServerUrl, defaultCustomer } from "Constants/defaultValues";

import {
  customerOne,
  addCustomer
} from "Redux/actions";

class AddCustomer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customer: {
        ...defaultCustomer
      }
    }

  }

  inputChange = (e) => {
    this.setState({
      customer : {
        ...this.state.customer,
        [e.target.name]: e.target.value
      }
    })
  }

  onAddCustomer = (e) => {
    this.props.addCustomer(this.state.customer, this.props.history);
  }
  render() {

    const { customer } = this.state;
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
                <Input type="email" name="UserName" autoComplete="off"
                  placeholder="username" id="username" value={customer.UserName} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" name="Password" id="password" value={customer.Password} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="Email" id="email" value={customer.Email} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="Name" id="name" value={customer.Name} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" name="Phone" id="phone" value={customer.Phone} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="billing_address">Billing Address 1:</Label>
                <Input type="text" name="BillingAddress1" id="bill_address_1" value={customer.BillingAddress1} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="billing_address2">Billing Address 2:</Label>
                <Input type="text" name="BillingAddress2" id="bill_address_2" value={customer.BillingAddress2} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="City" id="city" value={customer.City} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input type="select" name="State" id="state" value={customer.State}
                  onChange={e => this.inputChange(e)}>
                  <option value="">-- Select --</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New" hampshire="">New Hampshire</option>
                  <option value="New" jersey="">New Jersey</option>
                  <option value="New" mexico="">New Mexico</option>
                  <option value="New" york="">New York</option>
                  <option value="North" carolina="">North Carolina</option>
                  <option value="North" dakota="">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode" island="">Rhode Island</option>
                  <option value="South" carolina="">South Carolina</option>
                  <option value="South" dakota="">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West" virginia="">West Virginia</option>
                  <option value="Wisconsin" and="" wyoming="">Wisconsin and Wyoming</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="instagram_profile">Instagram Profile Name </Label>
                <Input type="text" name="InstaProfileName"
                  onChange={e => this.inputChange(e)} 
                  id="exampleEmail" instagram_profile="with a placeholder" value={customer.InstaProfileName} />
              </FormGroup>
              <FormGroup>
                <Label for="url_key">Url Key</Label>
                <Input type="text" name="UrlKey" id="exampleurl_keyEmail" value={customer.UrlKey} 
                  onChange={e => this.inputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="profilePhoto">Profile Logo</Label>
                <Input type="file" name="profilePhoto" id="profilePhoto" />
              </FormGroup>
              <FormGroup>
                <Label for="status">Status</Label>
                <Input type="select" name="Status" id="status" value={customer.Status}
                  onChange={e => this.inputChange(e)}>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </Input>
              </FormGroup>
              <Button onClick={(e)=>this.onAddCustomer()}>Save</Button>
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
    getCustomerOne: customerOne,
    addCustomer
  }
)(AddCustomer);