import React, {Component} from "react";

import KeyboardUtils from "../util/KeyboardUtils"
import StateUtils from "../util/StateUtils"
import Button from "../button/Button"

import "./LeaderboardEditor.css";

class LeadeboardEditor extends Component {

    notifyTimeChanged(task) {
        if (this.props.onChange) {
            this.props.onChange(task);
        }
    }

    notifyConfirm(task) {
        if (this.props.onConfirm) {
            this.props.onConfirm(task);
        }
    }

    onInputChanged = (event) => {
        let task = StateUtils.createNew(this.props.time);
        task.name = event.target.value;

        this.notifyTimeChanged(task);
    };

    onInputKeyDown = (event) => {
        if (event.keyCode === KeyboardUtils.ENTER_KEYCODE) {
            event.preventDefault();
            this.notifyConfirm(this.props.time);
        }
    };

    render() {
        return (
            <div className="task-editor">
                <input value={this.props.time.name}
                       type="text"
                       onChange={this.onInputChanged}
                       onKeyDown={this.onInputKeyDown}/>
                <Button onClick={this.props.onConfirm}>
                </Button>
            </div>
        );
    }

}

export default LeadeboardEditor;