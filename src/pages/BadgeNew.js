import React from 'react';
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'


class BadgeNew extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Andy" lastName="Fuertes Ruiz" twitter="@sirafr" jobTitle="Engineer"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;