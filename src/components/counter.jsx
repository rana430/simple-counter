import React, { Component } from 'react';



class Counter extends Component {
    state= {
        count:0
    };
    render() { 
        return (
            <div style={{textAlign:'center',margin:'10px'}}>
                <h2><span style={{padding:'4px',margin:'10px auto'}} className={this.getBagde()}>{this.formateCounter()}</span></h2>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-lg m-4' style={{backgroundColor:'#702cf5'}}>Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-lg m-4' disabled={this.state.count <= 0}>Decremanet</button>
                <button onClick={this.handleReset} className='btn btn-danger btn-lg m-4'>Reset</button>
            </div>
        );
    }
    handleIncrement =()=>{
        
        this.setState({count:this.state.count+1});
    }
    handleDecrement = ()=>{
        
        this.setState({count:this.state.count-1});

    }
    handleReset = () => {
        
        this.setState({count:0});
    }
    getBagde(){
        let classes="badge m-2 bg-";
        classes+=((this.state.count===0)?"warning":"primary");
        return classes;
    }
    formateCounter() {
        const {count}=this.state;
        return (count===0 ? "Zero": count);
    }

}
 
export default Counter;


