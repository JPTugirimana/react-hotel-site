import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';
import Loading from './Loading'

function RoomContainer({context}){
    
    const {loading, sortedRooms, rooms} = context

    if (loading){
        return <Loading />;
    }
    
    return (
         <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)

//---------------------------------------------------------------
//  Another way it can be done.. */
// Instead of using "export withRoomConsumer in context
//====================================//

/* import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomConsumer} from '../context';
import Loading from './Loading';

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {

                    const {loading, sortedRooms, rooms} = value

                    if (loading){
                        return <Loading />;
                    }
                    return (
                        <div>
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>
        
    );
}
 */