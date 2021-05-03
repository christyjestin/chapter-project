import React from "react";

class TagDisplay extends React.Component {
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };
    render() {
        const plans = this.props.plans;
        const plansFormatted = plans.map((plan, index) => {
            return <tr key={index}>
                    <td>{plan.id}</td>
                    <td>{plan.carrier}</td>
                    <td>{plan.name}</td>
                    <td>{plan.area}</td>
                    <td>{plan.site}</td>
                </tr>
            }
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
                    <tbody>{plansFormatted}</tbody>
                </table>
                <br />
                <button onClick={this.props.redirect}>Back to Search</button>
            </center>);
        }
    }

export default TagDisplay;