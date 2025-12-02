let excelData = [];

// Read Excel File
document.getElementById("excelFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Read first sheet
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);

        // Convert to desired format (Name, ID No, Mobile)
        excelData = json.map(row => ({
            name: row.Name || row.NAME || row.name,
            id: row["ID No"] || row.ID || row.Id,
            mobile: row["Mobile No"] || row.Mobile || row.Phone
        }));

        displayData(excelData);
    };

    reader.readAsArrayBuffer(file);
});

// Display Table
function displayData(list) {
    const tableBody = document.getElementById("resultBody");
    tableBody.innerHTML = "";

    list.forEach(item => {
        tableBody.innerHTML += `
            <tr>
                <td>${item.name || ""}</td>
                <td>${item.id || ""}</td>
                <td>${item.mobile || ""}</td>
            </tr>
        `;
    });
}

// Search Function
function searchData() {
    const text = document.getElementById("searchInput").value.toLowerCase();
    
    const filtered = excelData.filter(row =>
        row.name && row.name.toLowerCase().includes(text)
    );

    displayData(filtered);
}
let excelData = [];

// Read Excel File
document.getElementById("excelFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Read first sheet
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);

        // Convert to desired format (Name, ID No, Mobile)
        excelData = json.map(row => ({
            name: row.Name || row.NAME || row.name,
            id: row["ID No"] || row.ID || row.Id,
            mobile: row["Mobile No"] || row.Mobile || row.Phone
        }));

        displayData(excelData);
    };

    reader.readAsArrayBuffer(file);
});

// Display Table
function displayData(list) {
    const tableBody = document.getElementById("resultBody");
    tableBody.innerHTML = "";

    list.forEach(item => {
        tableBody.innerHTML += `
            <tr>
                <td>${item.name || ""}</td>
                <td>${item.id || ""}</td>
                <td>${item.mobile || ""}</td>
            </tr>
        `;
    });
}

// Search Function
function searchData() {
    const text = document.getElementById("searchInput").value.toLowerCase();
    
    const filtered = excelData.filter(row =>
        row.name && row.name.toLowerCase().includes(text)
    );

    displayData(filtered);
}
