import React from "react";
import PlanDisplay from "./PlanDisplay";
import TagDisplay from "./TagDisplay";
import data from "./data/medicare_plans.tsv";
import { tsv } from 'd3-fetch';

class App extends React.Component {
  constructor(props){
    super(props);
    const plans = [];
    const carriers = [];
    // add carriers and plans to respective arrays while processing data from tsv
    tsv(data, (element) => {
        const plan = {};
        plan.id = element.bid_id;
        plan.carrier = element.pbp_a_org_marketing_name;
        plan.name = element.pbp_a_plan_name;
        plan.area = element.pbp_a_plan_geog_name;
        plan.site = element.pbp_a_org_website;
        plans.push(plan);
        if (!carriers.includes(plan.carrier)) {
          carriers.push(plan.carrier);
        }
      });
      console.log(carriers);
      this.state = {plans : plans, id: "", tag: "", tagarray: [], display: false, tagdisplay: false, result: "no val", carriers: carriers, tagresults: []};
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value});

  filterTags = tag => {
    const tags = this.state.carriers.filter(carrier => carrier.toLowerCase().slice(0, tag.length) === tag.toLowerCase());
    const tags1 = tags.filter(tag => !this.state.tagarray.includes(tag));
    return tags1;
  }

  redirectDisplay = () => {
    const result = this.state.plans.find(element => element.id === this.state.id);
    if(result === undefined){
      alert("No Plan with this ID")
    }
    else {this.setState({display: true, result: result});}
  };

  redirectTagDisplay = () => {
    const tags = [...this.state.tagarray];
    const results = this.state.plans.filter(element => tags.includes(element.carrier));
    this.setState({tagdisplay: true, tagresults: results});
  };

  addTag = (tag) => {
    const arr = [...this.state.tagarray];
    arr.push(tag);
    this.setState({tagarray: arr});
  };

  removeTag = (tag) => {
    const arr = [...this.state.tagarray];
    const arr1 = arr.filter(element => tag!==element);
    this.setState({tagarray: arr1});
  };

  redirectSearch = () => this.setState({display: false, tagdisplay: false, result: "no val"});

  render() {
    const potential_tags = this.filterTags(this.state.tag).map(tag =>
      {return (<div>
                  <button onClick={() => this.addTag(tag)}>
                    {tag}
                  </button>
                  <br/>
                </div>)
      });
    const current_tags = this.state.tagarray.map(tag =>
      {return <button onClick={() => this.removeTag(tag)}>
                {tag}
              </button>
      });

    if (this.state.display) {
      return (<PlanDisplay plan = {this.state.result} redirect = {this.redirectSearch}/>);
    }
    if (this.state.tagdisplay) {
      return (<TagDisplay plans = {this.state.tagresults} redirect = {this.redirectSearch}/>);
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
            <br />
            <br />
            <div>Tags: </div>
            {current_tags}
            <br />
            <input
              name = 'tag'
              onChange={this.handleChange}
              placeholder="Enter a Carrier"
              value={this.state.tag} />
            <button onClick={this.redirectTagDisplay}>Show Plans by Tag</button>
            <br/>
            {potential_tags}
        </center>
      );
    }
    
  }
}

export default App;



