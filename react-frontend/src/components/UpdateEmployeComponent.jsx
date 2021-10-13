import React, { Component } from 'react'
import EmployeService from '../services/EmployeService';

class UpdateEmployeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nom: '',
            dateNaissance: '',
            prenom: '',
            email: '',
            telephone: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeDateNaissanceHandler = this.changeDateNaissanceHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
        this.updateEmploye = this.updateEmploye.bind(this);
    }

    componentDidMount(){
        EmployeService.getEmployeById(this.state.id).then( (res) =>{
            let employe = res.data;
            this.setState({nom: employe.nom,
                prenom: employe.prenom,
                dateNaissance: employe.dateNaissance,
                email: employe.email,
                telephone: employe.telephone
            });
        });
    }

    updateEmploye = (e) => {
        e.preventDefault();
        let employe = { nom: this.state.nom, prenom: this.state.prenom, email: this.state.email, dateNaissance: this.state.dateNaissance};
        console.log('employe => ' + JSON.stringify(employe));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeService.updateEmploye(employe, this.state.id).then( res => {
            this.props.history.push('/employes');
        });
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changePrenomHandler= (event) => {
        this.setState({prenom: event.target.value});
    }

    changeDateNaissanceHandler = (event) => {
        this.setState({ dateNaissance: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    
    changeTelephoneHandler = (event) => {
        this.setState({ telephone: event.target.value });
    }

    cancel(){
        this.props.history.push('/employes');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">MAJ Employé</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Nom" name="nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prénom: </label>
                                            <input placeholder="Prénom" name="prenom" className="form-control" 
                                                value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Date de naissance: </label>
                                            <input placeholder="Date de naissance" name="dateNaissance" className="form-control"
                                                value={this.state.dateNaissance} onChange={this.changeDateNaissanceHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Téléphone: </label>
                                            <input placeholder="Téléphone" name="telephone" className="form-control"
                                                value={this.state.telephone} onChange={this.changeTelephoneHandler} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmploye}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeComponent
