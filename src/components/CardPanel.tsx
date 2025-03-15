'use client'
import Card from "./Card"
import { useReducer } from "react"

export default function CardPanel() {

    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

    const cardReducer = (venueList:Map<string, number>, action:{type:string; venueName:string; rating?:number;}) => {

        switch(action.type) {
            case 'add' : {
                const newMenuList = new Map(venueList);
                newMenuList.set(action.venueName, action.rating??0);
                return newMenuList;
            }
            case 'remove' : {
                const newMenuList = new Map(venueList);
                newMenuList.delete(action.venueName);
                return newMenuList;
            }
            default : return defaultVenue;
        }
    }

    const [venueList, dispatchRating] = useReducer(cardReducer, defaultVenue);

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"
                onRating={(venue:string, rate:number)=>dispatchRating({type:'add', venueName:venue, rating:rate})}
                />
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"
                onRating={(venue:string, rate:number)=>dispatchRating({type:'add', venueName:venue, rating:rate})}
                />
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"
                onRating={(venue:string, rate:number)=>dispatchRating({type:'add', venueName:venue, rating:rate})}
                />
            </div>
            <div className="w-full text-xl font-medium ml-10">
                Venue List with Ratings : {venueList.size}
            </div>
            <div className="ml-10 mb-10">
                { Array.from(venueList).map(([venue, rating]) => <div 
                data-testid={venue}
                onClick={() => dispatchRating({type:'remove', venueName:venue})}
                key={venue}>{venue} : {rating}</div>) } 
            </div>
        </div>
    );
}