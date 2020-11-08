import React from 'react'
import { Link } from "react-router-dom";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '', response: '', submit: false };
    }

    HandleChange = (e) => {
        const username = e.target.value
        this.setState({ data: username })
    }

    submit = async (e) => {
        const source = `https://torre.bio/api/bios/${this.state.data}`
        var response = await fetch(source)
        response = response.json()
        this.setState({ response: response, submit: true });
    }


    render() {

        return (

            <div className="main" >
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img className="image img-fluid" src="https://380342-1192392-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/12/recrutamento-e-selecao-696x619.jpg" alt="Girl in a jacket" />
                        </div>
                        <div class="col">
                            <p>ID del candidato</p>
                            <form onSubmit={this.submit} action="" method="get" className="form">
                                <div class="input-group flex-nowrap">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="addon-wrapping">ID</span>
                                    </div>
                                    <input type="text" onChange={this.HandleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <br></br>
                                <Link to="/resume">
                                    <button type="submit" class="btn btn-primary">Ver Resumé</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}



export default Main