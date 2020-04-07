import React, { Component } from 'react';

 class Pagination extends Component{
     render(){
        return(
            <div>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item active"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
        </div>
        
        );
     }
 }

 export default Pagination;