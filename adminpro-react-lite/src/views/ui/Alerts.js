import React, { Component } from "react";
class Alerts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryName: ''
        }

    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let Drink = { categoryName: this.state.categoryName };
        console.log('Drink => ' + JSON.stringify(Drink));

        DrinkService.createOrderDrink(Drink).then(res => {
            this.props.history.push('/categoryDrink')
        });
    }
    categoryNamehander = (event) => {
        this.setState({ categoryName: event.target.value });
    }
    cancel() {
        this.props.history.push('/categoryDrink');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Thêm danh mục sản phẩm</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Tên danh mục  </label>
                                        <input placeholder="Category name" name="categoryName" className="form-control"
                                            value={this.state.categoryName} onChange={this.categoryNamehander} />

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Alerts;

