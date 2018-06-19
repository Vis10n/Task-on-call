import React, {Component} from 'react';

class TaskForm extends Component {
    render() {
        return (            
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
        );
    }
}
export default TaskForm;