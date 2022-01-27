
function StatusBar(){
    return(
        <>
            <div className="page-width status-bar-section">
                <table className="status_table">
                    <thead className="status_table_head">
                        <tr>
                            <th>My Request</th>
                            <th>My Approval</th>
                            <th>Recently processed Request</th>
                            <th>All Process Contact</th>
                        </tr>
                    </thead>
                    <tbody className="status_table_body">
                        <tr className="table_title">
                            <th>Contract Name</th>
                            <th>Borrower Name</th>
                            <th>Request Type</th>
                            <th>Due Date</th>
                            <th>Request Status</th>
                        </tr>
                        <tr className="table_data">
                            <td>Loan Agreement</td>
                            <td>Next Gen Interprices</td>
                            <td>Review</td>
                            <td>27th augusut 2022</td>
                            <a href="#" className="assigned">Assigned</a>
                        </tr>
                        <tr className="table_data">
                            <td>Loan Agreement</td>
                            <td>Next Gen Interprices</td>
                            <td>Review</td>
                            <td>27th augusut 2022</td>
                            <a href="#" className="assigned">Assigned</a>
                        </tr>
                        <tr className="table_data">
                            <td>Loan Agreement</td>
                            <td>Next Gen Interprices</td>
                            <td>Review</td>
                            <td>27th augusut 2022</td>
                            <a href="#" className="Inprocess">In process</a>
                        </tr>
                        <tr className="table_data">
                            <td>Loan Agreement</td>
                            <td>Next Gen Interprices</td>
                            <td>Review</td>
                            <td>27th augusut 2022</td>
                            <a href="#" className="overdue">Overdue</a>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
}

export default StatusBar;