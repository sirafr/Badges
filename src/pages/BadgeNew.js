import React from 'react';
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge'


class BadgeNew extends React.Component {
    state = {
        form: {
            firstName:'',
            lastName:'',
            email:'',
            twitter:'',
            jobTitle:'',
    },
};

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
          <div>
            <Navbar />
            <div className="BadgeNew__hero">
              <img className="img-fluid" src={header} alt="Logo" />
            </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            //avatar=
                            />
                        </div>

                        <div className="col-6">
                    <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;