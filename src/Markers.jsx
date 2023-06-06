function markerTip(event, label, code) {
    return label.html(`
    <div style="background-color:white; border-radius:6px; min-height:50px; width:125px; color:black !important">
    <p style="color:black !important;">
    <b>
    ${label.html()}
    </b>
    </p>
    </div>
    `);
}


function regionalTip(event, label, code) {
    return label.html(`
    <div style="background-color:black; border-radius:6px; min-height:50px; width:125px; color:white">
    <p>
    <b>
    ${label.html()}
    </b>
    </p>
    </div> 
    `);
}