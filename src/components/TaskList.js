import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        var {tasks} = this.props; // var tasks = this.props.tasks
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                    />
        });

        return (
            <table className="table table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value="-1">Tất Cả</option>
                                <option value="0">Chưa xong</option>
                                <option value="1">Xong</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        );
    }
}
export default TaskList;