import React from 'react';

function IssueRow({issue}) {
    return (
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.effort}</td>
            <td>{issue.due ? issue.due.toDateString() : ' '}</td>
            <td>{issue.title}</td>
        </tr>
    );
}

export default function IssueTable({issues}) {
    const issueRows = issues.map(issue => (<IssueRow key={issue.id} issue={issue}/>));
    const styled = {border: "1px solid silver", padding: 4};
    return (
        <table>
            <thead>
                <tr>
                    <th style={styled}>ID</th>
                    <th style={styled}>Status</th>
                    <th style={styled}>Owner</th>
                    <th style={styled}>Created</th>
                    <th style={styled}>Effort</th>
                    <th style={styled}>Due Date</th>
                    <th style={styled}>Title</th>
                </tr>
            </thead>
            <tbody>
                {issueRows}
            </tbody>
        </table>
    );        
}