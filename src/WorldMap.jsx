import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import React from 'react'
import { colorScale, countries, missingCountries } from './Countries'

const WorldMap = () => {
    return (
            <VectorMap
                map={worldMill}
                style={{
                    width: '100%',
                    height: '100vh'
                }}
                backgroundColor='#282c34'
                markers={missingCountries}
                markerStyle={{
                    initial: {
                        fill: 'red'
                    }
                }}
                series={{
                    regions: [
                        {
                            scale: colorScale,
                            values: countries,
                            min: 0,
                            max: 100
                        }
                    ]
                }}
                onRegionTipShow={function regionalTip(event, label, code) {
                    return label.html(`
                    <div style="background-color:black; border-radius:6px; min-height:50px; width:125px; color:white">
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    <p>
                    ${code}
                    </p>
                    </div> 
                    `);
                }}
                onMarkerTipShow={function markerTip(event, label, code) {
                    return label.html(`
                    <div style="background-color:white; border-radius:6px; min-height:50px; width:125px; color:black !important">
                    <p style="color:black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>
                    `);
                }}
            />
    )
}

export default WorldMap