import React from 'react';
import './history.css';
import Header from '../../mainpage/header'
function History() {
    const handleBuyAgain = () => {
        // Add logic for buying the course again
        console.log('Buy course again logic');
    };

    return (
        <><Header />
        <div className='history'>
            <table>
                <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>Name</th>
                        <th>Date with Time</th>
                        <th>Course</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data for demonstration */}
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Peter Griffin</td>
                        <td>27/10/2546 12:00 PM - 02:00 PM</td>
                        <td>PREMIUM-COURSE</td>
                        <td>$100</td>
                        
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div></>
    );
}

export default History;
