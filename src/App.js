import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Controler from './components/Controler';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [] //id(duy nhat), name, status
        }
    }
    
    randomizeChar() {
        return (
            Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
        );
    }

    generateID() {
        return (
            this.randomizeChar() + '-' + this.randomizeChar() + '-' + this.randomizeChar() + '-' + this.randomizeChar()
        );
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name: 'Viết CV',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Đăng ký học',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Về quê',
                status: false
            },
        ]
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
    }
    

    render() {
        var {tasks} = this.state; // var tasks = this.state.tasks

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

                        {/* temporary button */}
                        <button 
                            type="button" 
                            className="btn btn-danger ml-5"
                            onClick={this.onGenerateData}>
                            <span className="fa fa-plus mr-5"></span>
                            Generate Data
                        </button>

                        {/* Search & sort */}
                        <Controler />

                        {/* List */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <TaskList tasks={tasks}/>
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