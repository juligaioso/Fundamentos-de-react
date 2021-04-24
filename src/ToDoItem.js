import React, {Component} from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }


    createTasks(item){
        return <li 
            onClick={ () => this.delete(item.key)}
            key={item.key}>{item.text}
            </li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItens = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItens}
            </ul>
        );
    }
};

export default ToDoItem;