import React from "react";
import './PlanDisplay.css';

class PlanDisplay extends React.Component {
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };
    render() {
        const plan = this.props.plan;
        const planFormat = (
            <tr key={0}>
                <td>{plan.id}</td>
                <td>{plan.carrier}</td>
                <td>{plan.name}</td>
                <td>{plan.area}</td>
                <td>{plan.site}</td>
            </tr>
        );

        return (
            <center>
                <h2>Medicare Plans</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Bid ID</th>
                            <th>Insurance Carrier</th>
                            <th>Plan Name</th>
                            <th>Areas Served</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>{planFormat}</tbody>
                </table>
                <br />
                <button onClick={this.props.redirect}>Back to Search</button>
            </center>);
        }
    }

export default PlanDisplay;