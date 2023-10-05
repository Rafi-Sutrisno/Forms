function validateForm() {
    const name = document.forms["form1"]["fname"].value;
    const nrp = document.forms["form1"]["nrp"].value;
    const matkul = document.forms["form1"]["matkul"].value;
    const dosen = document.forms["form1"]["dname"].value;
    if (name == "" || nrp == "" || matkul == "" || dosen == "") {
        alert("All the data must be filled out");
        return false;
    } else {
        alert("Success");
        return true;
    }
};


