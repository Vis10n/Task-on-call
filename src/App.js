import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Controler from './components/Controler';
import TaskList from './components/TaskList';

class App extends Component {
    render() {
        return (            
            <div className="container">
                <div className="text-center">
                    <h1>Task - On Call</h1>
                    <hr/>
                </div>
                
                {/* Form thêm công việc */}
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        
                        {/* Form */}
                        <TaskForm />                       
                    </div>
                    
                    {/* Danh sách công việc & các chức năng  */}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                        {/* Thêm công việc */}
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>
                            Thêm công việc
                        </button>

                        {/* Search & sort */}
                        <Controler />

                        {/* List */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <TaskList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default App;