import React from 'react';
class NewTable extends React.Component
{
    constructor(props)
    {
        super(props);
        const DISHPRICE = 100;
        const ROTIPRICE = 10;
        const CHASPRICE = 8;
        const PAPADPRICE = 7.50;
        const SWEETPRICE = 11.25;
        this.no=props.no;
        this.name=props.name;

        this.state = {
            dish:props.dish,
            roti:0,
            chas:0,
            papad:0,
            sweet:0,
            total:0
        }
    }
    UpdateDish = () =>
    {
        this.setState({
            dish:parseInt(this.state.dish) + 1
        });
    }
    UpdateRoti = () =>
    {
    
        this.setState({
            roti:parseInt(this.state.roti) + 1
        });
    }
    UpdatePapad = () =>
    {
        this.setState({
            papad:parseInt(this.state.papad) +1
        });
    }
    UpdateChas = () =>
    {
        this.setState({
            chas:parseInt(this.state.chas) + 1
        });
    }
    UpdateSweet = () =>
    {
        this.setState({
            sweet:parseInt(this.state.sweet) + 1
        });
    }
    render()
    {
        var output=(
            <div className='col-lg-3 mt-1'>
                <div className='card'>
                    <div className='card-header text-bg-info'>
                        <div className='row'>
                            <div className='col-3'>
                                <h2 className='text-center'>{this.no}</h2>
                            </div>
                            <div className='col-9'>
                                <h4 className='text-end'>{this.name}</h4>
                                <h5 className='text-end'>&#8377;{this.state.total}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12 d-grid'>
                                <button className='btn btn-secondary' onClick={this.UpdateDish}>Dish {this.state.dish}</button>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-6 d-grid'>
                                <button className='btn btn-primary' onClick={this.UpdateRoti}>Roti {this.state.roti}</button>
                            </div>
                            <div className='col-6 d-grid'>
                                <button className='btn btn-warning'onClick={this.UpdatePapad}>Papad {this.state.papad}</button>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-6 d-grid'>
                                <button className='btn btn-danger' onClick={this.UpdateChas}>Chas {this.state.chas}</button>
                            </div>
                            <div className='col-6 d-grid'>
                                <button className='btn btn-dark' onClick={this.UpdateSweet}>Sweet {this.state.sweet}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return output;
    }
}


















export default NewTable
