import React from 'react'
import "./SearchPage.css"
import Button from '@material-ui/core/Button';
import SearchResults from './SearchResults';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p> 62 stays · 26 august to 30 august · 2 guest(s)</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
                <SearchResults 
                    img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
                    location="Private room in the center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                    star={4.75}
                    price="$30/night"
                    total="$117 total"
                />
                <SearchResults 
                    img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
                    location="Private room in the center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                    star={4.75}
                    price="$30/night"
                    total="$117 total"
                />
                <SearchResults 
                    img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
                    location="Private room in the center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                    star={4.75}
                    price="$30/night"
                    total="$117 total"
                />
                <SearchResults 
                    img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
                    location="Private room in the center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                    star={4.75}
                    price="$30/night"
                    total="$117 total"
                />
            </div>
    )
}

export default SearchPage
