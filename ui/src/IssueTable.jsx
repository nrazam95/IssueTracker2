import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Glyphicon, Tooltip, OverlayTrigger, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const IssueRow = withRouter(({ issue, location: { search }, closeIssue, deleteIssue, index }) => {
    const selectLocation = { pathname: `/issues/${issue.id}`, search };
    const editTooltip = (
        <Tooltip id="close-tooltip" placement="top">Edit Issue</Tooltip>
    );

    const closeTooltip = (
        <Tooltip id="close-tooltip" placement="top">Close Issue</Tooltip>
    );

    const deleteTooltip = (
        <Tooltip id="delete-tooltip" placement="top">Delete Issue</Tooltip>
    );

    function onClose(e) {
        e.preventDefault();
        closeIssue(index);
    }

    function onDelete(e) {
        e.preventDefault();
        deleteIssue(index);
    }

    const tableRow = (
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.effort}</td>
            <td>{issue.due ? issue.due.toDateString() : ' '}</td>
            <td>{issue.title}</td>
            <td>
                <LinkContainer to={`/edit/${issue.id}`}>
                    <OverlayTrigger delayShow={1000} overlay={editTooltip}>
                        <Button bsSize="xsmall">
                            <Glyphicon glyph="edit" />
                        </Button>
                    </OverlayTrigger>
                </LinkContainer>
                {' '}
                <LinkContainer to={`/edit/${issue.id}`}>
                    <OverlayTrigger delayShow={1000} overlay={closeTooltip}>
                        <Button bsSize="xsmall" onClick={onClose}>
                            <Glyphicon glyph="remove" />
                        </Button>
                    </OverlayTrigger>
                </LinkContainer>
                {' '}
                <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
                    <Button bsSize="xsmall" onClick={onDelete}>
                        <Glyphicon glyph="trash" />
                    </Button>
                </OverlayTrigger>
            </td>
        </tr>
    );

    return (
        <LinkContainer to={selectLocation}>
            {tableRow}
        </LinkContainer>
    );
});

export default function IssueTable({issues, closeIssue, deleteIssue }) {
    const issueRows = issues.map((issue, index) => (<IssueRow key={issue.id} issue={issue} closeIssue={closeIssue} index={index} deleteIssue={deleteIssue} index={index} />));
    const styled = {border: "1px solid silver", padding: 4};
    return (
        <Table bordered condensed hover responsive>
            <thead>
                <tr>
                    <th style={styled}>ID</th>
                    <th style={styled}>Status</th>
                    <th style={styled}>Owner</th>
                    <th style={styled}>Created</th>
                    <th style={styled}>Effort</th>
                    <th style={styled}>Due Date</th>
                    <th style={styled}>Title</th>
                    <th style={styled}>Action</th>
                </tr>
            </thead>
            <tbody>
                {issueRows}
            </tbody>
        </Table>
    );        
}