import React, { Component } from 'react'
import EmployeService from '../services/EmployeService';

class CreateEmployeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            email: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.saveOrUpdateEmploye = this.saveOrUpdateEmploye.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeService.getEmployeById(this.state.id).then( (res) =>{
                let employe = res.data;
                this.setState({
                    nom: employe.nom,
                    prenom: employe.prenom,
                    email: employe.email
                });
            });
        }        
    }
    saveOrUpdateEmploye = (e) => {
        e.preventDefault();
        let employe = { nom: this.state.nom, prenom: this.state.prenom, email: this.state.email};
        console.log('employe => ' + JSON.stringify(employe));

        // step 5
        if(this.state.id === '_add'){
            EmployeService.createEmploye(employe).then(res =>{
                this.props.history.push('/employes');
            });
        }else{
            EmployeService.updateEmploye(employe, this.state.id).then( res => {
                this.props.history.push('/employes');
            });
        }
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changePrenomHandler= (event) => {
        this.setState({prenom: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Ajouter Employé</h3>
        }else{
            return <h3 className="text-center">MAJ Employé</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmploye}>Enregistrer</button>
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

export default CreateEmployeComponent