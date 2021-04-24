import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }; 

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((previouslyState) => {
                return {
                    items: previouslyState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    deleteItem(key){
        var filterItens = this.state.items.filter(function (item) {
            return(item.key !== key);
        });

        this.setState({
            items: filterItens
        });
    }



    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={ (a) => this._inputElement = a} 
                            placeholder="Digite sua tarefa"></input>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <ToDoItem 
                    entries={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default ToDoList;