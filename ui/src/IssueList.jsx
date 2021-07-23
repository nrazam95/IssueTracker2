import React from 'react';

import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

class BorderWrap extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 6};
        return (
            <div style={borderedStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);
    }
    
    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const query = `query {
            issueList {
                id title status owner
                created effort due
            }
        }`;

        const data = await graphQLFetch(query);
        if (data) {
            this.setState({ issues: data.issueList });
        }
    }

    async createIssue(issue) {
        const query = `mutation issueAdd($issue: IssueInputs!) {
            issueAdd(issue: $issue) {
                id
            }
        }`;

        const data = await graphQLFetch(query, { issue });
        if (data) {
            this.loadData();
        }
    }

    render() {
        const { issues } = this.state
        return (
            <BorderWrap>
                <h1>Issue Tracker 2</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={issues} />
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </BorderWrap>
        );
    }
}