import React, { Component } from 'react'

export default class LandingPageText extends Component{
    render(){
        return(
            <div className="landingpagetext">
                <div className=" cardone card" style={{width: '18rem'}}>
                    <img className="card-img-top" src="https://odis.homeaway.com/odis/destination/03dc5f84-db9b-4fb1-a952-a250e9b69344.hw6.jpg" />
                    <div className="card-body">
                        <p className="card-text">Come and explore, "The City Beautiful" - Orlando, Florida, the famous Lake Eola awaits you! Disney World and Universal Resorts make sure that Orlando is one of world's most visited tourist attraction.</p>
                    </div>
                </div>
                <div className=" cardtwo card" style={{width: '18rem'}}>
                    <img className="card-img-top" src="https://a0.muscache.com/im/pictures/881d76c6-4de6-4808-9f0b-36462b6c48a2.jpg" />
                    <div className="card-body">
                        <p className="card-text">The Sunset Cave,located in a premium spot right on the cliff on the Caldera in Oia village,carefully & tastefully restored offering a unique experience of Greek summer style accommodation!</p>
                    </div>
                </div>
                <div className=" cardthree card" style={{width: '18rem'}}>
                    <img className="card-img-top" src="https://cms.homeaway.com/files/live/sites/vrbo/files/contributed/homepage/seo/asia-bali-p3994539.jpeg" />
                    <div className="card-body">
                        <p className="card-text">Bali is part of the Coral Triangle, the area with the highest biodiversity of marine species. Bali is a major world surfing destination with popular breaks dotted across the southern coastline and around the offshore island of Nusa Lembongan.</p>
                    </div>
                </div>
            </div>
        )
    }
}