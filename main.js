{
    const popDataUrl = "https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year";

    fetch(popDataUrl).then(r => {
        return r.json();
    }).then(allData => {
        let table = document.getElementById("pop-data");
        table.innerHTML = "";
        
        allData.data.forEach(row => {
            table.innerHTML += renderRow(row.Year, row.Population);
        });
    });

    function renderRow(yr,pop) {
        return `
        <tr>
            <td>${yr}</td>
            <td>${pop}</td>
        </tr>
        `;
    }
}