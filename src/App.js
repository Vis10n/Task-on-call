import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (            
            <div className="container">
                <div className="text-center">
                    <h1>Task - On Call</h1>
                    <hr/>
                </div>
                
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/* Form */}
                        <div className="panel panel-warning">
                              <div className="panel-heading">
                                    <h3 className="panel-title">
                                        Thêm công việc
                                        <span className="fa fa-times-circle text-right"></span>
                                    </h3>
                              </div>
                              <div className="panel-body">
                                    
                                    <form>                                    
                                        <div className="form-group">
                                            <label>Tên công việc</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="" 
                                                placeholder="Input field"/>
                                        </div>
                                        <label>Trạng thái công việc</label>
                                        
                                        <select
                                            className="form-control"
                                            name="status">
                                            <option value={true}>Kích hoạt</option>
                                            <option value={false}>Ẩn</option>
                                        </select>
                                        <br/>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                        &nbsp;
                                        <button type="submit" className="btn btn-danger">Cancel</button>
                                    </form>
                                    
                              </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>
                            Thêm công việc
                        </button>

                        {/* Search & sort */}
                        <div className="row mt-15">

                            {/* Search */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input
                                        name="keyword"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập từ khóa..."/>
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-primary">
                                            <span className="fa fa-search mr-5"/>
                                            Tìm
                                        </button>
                                    </span>
                                </div>
                            </div>
                            
                            {/* Sort */}                            
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
                            
                        </div>
                        
                    </div>
                    
                </div>
                

            </div>
            
        )
    }
}
export default App;