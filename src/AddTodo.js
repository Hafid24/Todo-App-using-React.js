import React , {Component} from 'react'
class AddTodo extends Component{
state:{
    content: ''
}
handleChange= (e)=>{
    this.setState({
        content: e.target.value
    });
}
handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.content);
    this.props.addTodo(this.state);
    

}
render(){

    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label> Add new Note</label>
                <input type="text" onChange={this.handleChange}/>
            </form>
        </div>
    )
}

}

export default AddTodo