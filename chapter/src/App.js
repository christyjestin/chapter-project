import React from "react";
import PlanDisplay from "./PlanDisplay";
import data from "./data/medicare_plans.tsv";
import { tsv } from 'd3-fetch';

class App extends React.Component {
  constructor(props){
    super(props);
    const plans = [];
    tsv(data, (element) => {
        const plan = {};
        plan.id = element.bid_id;
        plan.carrier = element.pbp_a_org_marketing_name;
        plan.name = element.pbp_a_plan_name;
        plan.area = element.pbp_a_plan_geog_name;
        plan.site = element.pbp_a_org_website;
        plans.push(plan);
      });
      this.state = {plans : plans, id: "", display: false, result: "no val"};
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value});

  redirectDisplay = () => {
    const result = this.state.plans.find(element => element.id === this.state.id);
    if(result === undefined){
      alert("No Plan with this ID")
    }
    else {this.setState({display: true, result: result});}
  };

  redirectSearch = () => this.setState({display: false, result: "no val"});

  render() {
    if (this.state.display) {
      return (<PlanDisplay plan = {this.state.result} redirect = {this.redirectSearch}/>);
    }
    else{
      return (
        <center style={{marginTop: "40px"}}>
           <input
              name = 'id'
              onChange={this.handleChange}
              placeholder="Search by Bid ID"
              value={this.state.id} />
            <br />
            <br />
            <button onClick={this.redirectDisplay}>See Plan</button>
        </center>
      );
    }
    
  }
}

export default App;



