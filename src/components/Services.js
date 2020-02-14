import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, praesentium."
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, praesentium."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle Rides",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, praesentium."
            },
            {
                icon:<FaBeer/>,
                title:"Free Cold Beers",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, praesentium."
            }
            
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service"> 
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
