import React, {Component} from 'react';

class Sort extends Component {
    render() {
        return (
            // Sort
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button 
                        type="button" 
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                        Sắp xếp
                        <span className="fa fa-caret-square-o-down ml-5"/>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button" className="sort_selected">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A->Z
                                </span>
                            </a>
                        </li>
                        <li>
                            <a role="button" className="sort_selected">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên Z->A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a role="button">
                                Trạng thái Kích hoạt
                            </a>
                        </li>
                        <li>
                            <a role="button">
                                Trạng thái Ẩn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>                                  
        );
    }
}
export default Sort;