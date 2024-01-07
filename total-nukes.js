(function() {
    'use strict';

    // Wait for the original script to execute
    function waitForOriginalScript() {
        if (typeof typeTotals === 'undefined' || Object.keys(typeTotals).length === 0) {
            setTimeout(waitForOriginalScript, 100);
        } else {
            // Once the original script has executed, calculate and display the total
            displayTotalTroops();
        }
    }

    function displayTotalTroops() {
        var totalFullNukes = 0;
        var totalThreeQuarterNukes = 0;
        var totalHalfNukes = 0;

        // Sum up the troop counts for each player
        Object.keys(typeTotals).forEach(function(playerName) {
            totalFullNukes += typeTotals[playerName]["fullNuke"];
            totalThreeQuarterNukes += typeTotals[playerName]["almostNuke"];
            totalHalfNukes += typeTotals[playerName]["semiNuke"];
        });

        // Display the total troop counts
        var totalTroopsHtml = `
            <div style="padding: 20px;">
                <h2>Total Troops</h2>
                <p>Total Full Nukes: ${totalFullNukes}</p>
                <p>Total 3/4 Nukes: ${totalThreeQuarterNukes}</p>
                <p>Total 1/2 Nukes: ${totalHalfNukes}</p>
            </div>
        `;

        // Append the total troops information to the body
        document.body.insertAdjacentHTML('beforeend', totalTroopsHtml);
    }

    waitForOriginalScript();
})();
