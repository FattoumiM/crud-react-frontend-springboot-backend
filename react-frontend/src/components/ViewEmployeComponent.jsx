import React, { Component } from 'react'
import EmployeService from '../services/EmployeService'

class ViewEmployeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employe: {}
        }
    }

    componentDidMount(){
        EmployeService.getEmployeById(this.state.id).then( res => {
            this.setState({employe: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Détails Employé</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nom Employé: </label>
                            <div> { this.state.employe.nom }</div>
                        </div>
                        <div className = "row">
                            <label> Prénom Employé: </label>
                            <div> { this.state.employe.prenom }</div>
                        </div>
                        <div className = "row">
                            <label> Email Employé: </label>
                            <div> { this.state.employe.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeComponent
