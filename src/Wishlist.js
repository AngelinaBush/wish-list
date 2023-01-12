import { Component } from 'react';

export class Wishlist extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            wishlist: []
        }
    }

    onChangeEvent = (e) => {
        this.setState({userInput: e})
    }

    addWish = (input) => {
        if (input === '') {
            alert("Please add your wish")
        }
        else {
        let listArray = this.state.wishlist;
        listArray.push(input);
        this.setState({wishlist: listArray, userInput: ''})
        }
    }

    clickedWord = (event) => {
        const list = event.target;
        list.classList.toggle('clicked');
    }

    deleteWish = () => {
        let listArray = this.state.wishlist;
        listArray = [];
        this.setState({wishlist: listArray})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    
    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <h2 className="question">What would you like?</h2>
                    <div className="container-input">
                    <input type="text" placeholder="e.g Shirt" onChange={(e) => this.onChangeEvent(e.target.value)} value={this.state.userInput}/>
                    </div>
                </div>
                <div>
                    <div className="container-btn">
                        <button className="btn add" onClick={() => {this.addWish(this.state.userInput)}}>Add</button>
                        <button className="btn delete" onClick={() => this.deleteWish()}>Delete</button>
                    </div>
                    <ul>
                        {this.state.wishlist.map((item, index) => (
                            <li key={index} onClick={this.clickedWord}>{item}
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
            </div>
        )
    }
}