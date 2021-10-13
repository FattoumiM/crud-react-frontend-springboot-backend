import React, { Component } from 'react'
import EmployeService from '../services/EmployeService'

class ListEmployeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employes: []
        }
        this.addEmploye = this.addEmploye.bind(this);
        this.editEmploye = this.editEmploye.bind(this);
        this.deleteEmploye = this.deleteEmploye.bind(this);
    }

    deleteEmploye(id){
        EmployeService.deleteEmploye(id).then( res => {
            this.setState({employes: this.state.employes.filter(employe => employe.id !== id)});
        });
    }

    viewEmploye(id){
        this.props.history.push(`/view-employe/${id}`);
    }

    editEmploye(id){
        this.props.history.push(`/add-employe/${id}`);
    }

    componentDidMount(){
        EmployeService.getEmployes().then((res) => {
            this.setState({ employes: res.data});
        });
    }

    addEmploye(){
        this.props.history.push('/add-employe/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Liste des employés</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmploye}>Ajouter Employé</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nom </th>
                                    <th> Prénom </th>
                                    <th> Date de naissance </th>
                                    <th> Email </th>
                                    <th> Téléphone </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employes.map(
                                        employe => 
                                        <tr key = {employe.id}>
                                            <td> { employe.nom} </td>   
                                            <td> {employe.prenom}</td>
                                            <td> {employe.dateNaissance}</td>
                                            <td> {employe.email}</td>
                                            <td> {employe.telephone}</td>
                                            <td>
                                                 <button onClick={ () => this.editEmploye(employe.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmploye(employe.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmploye(employe.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListEmployeComponent