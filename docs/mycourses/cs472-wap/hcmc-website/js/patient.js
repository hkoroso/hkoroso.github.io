
class Patient {
    #patientId = null;
    #firstName = null;
    #middleName = null;
    #lastName = null;
    #dateOfBirth = null;
    #department = null;
    #radioIsOutPatient = false;

    constructor(patientId, firstName, middleName, lastName, dateOfBirth, department, radioIsOutPatient) {
        this.#patientId = patientId;
        this.#middleName = middleName;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#department = department;
        this.#radioIsOutPatient = radioIsOutPatient;
    }

    getPatientId = () => {
        return this.#patientId;
    };
    getFirstName = () => {
        return this.#firstName;
    };
    getMiddleName = () => {
        return this.#middleName;
    }
    getLastName = () => {
        return this.#lastName;
    };
    getDateOfBirth = () => {
        return this.#dateOfBirth;
    }
    getDateOfBirth = () => {
        return this.#dateOfBirth;
    };
    getDepartment = () => {
        return this.#department;
    }
    getRadioIsOutPatient = () => {
        return this.#radioIsOutPatient;
    }
}
window.onload = function () {
    $(function () {
        let patientBackUpData = [];
        $("#patientInfoForm").submit(function (event) {
            event.preventDefault();
            const patientId = $("#patientIdNumber").val();
            const firstName = $("#firstName").val();
            const middleInitials = $("#middleInitials").val();
            const lastName = $("#lastName").val();
            const dateOfBirth = $("#dateOfBirth").val();
            const ddlDepartment = $("#ddlDepartment").val();
            const radioIsOutPatient = $("[name='radioIsOutPatient']:checked").val();
            const patient = new Patient(patientId, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient);
            patientBackUpData.push(patient);
            filterData(patientBackUpData);
            $(this)[0].reset();  // or this.reset()

        });

        $("[type='checkbox']").change(() => {
            if ($("#chkElderlyPatients").is(':checked') && $("#chkShowOutPatients").is(':checked')) {
                const elderlyPatient = getElderlyPatient(patientBackUpData);
                const elderAndOutPatient = getOutPatient(elderlyPatient);
                filterData(elderAndOutPatient);
            }
            else if ($("#chkElderlyPatients").is(':checked') && !$("#chkShowOutPatients").is(':checked')) {
                filterData(getElderlyPatient(patientBackUpData));
            } else if (!$("#chkElderlyPatients").is(':checked') && !$("#chkShowOutPatients").is(':checked')) {
                filterData(patientBackUpData);
            } else if (!$("#chkElderlyPatients").is(':checked') && $("#chkShowOutPatients").is(':checked')) {
                filterData(getOutPatient(patientBackUpData));
            }
        })

        //reload
        $("#btnReload").click(() => {
            //location.reload()
            //table reinitialization
            filterData(patientBackUpData);

        })
    });
}

getElderlyPatient = (patientData) => {
    const elderlyPatient = patientData.map(p => {
        const dob = new Date(p.getDateOfBirth());
        const month_diff = Date.now() - dob.getTime();
        const age_dt = new Date(month_diff);
        const year = age_dt.getUTCFullYear();
        const age = Math.abs(year - 1970);
        if (age > 60)
            return p;
    });
    return elderlyPatient;
}

getOutPatient = (patientData) => {
    const outPatient = patientData.filter(p => p != undefined).filter(p => p.getRadioIsOutPatient() === 'Yes');
    return outPatient;
}


filterData = (patientData) => {
    $("#tblPatients").find("tr:gt(0)").remove();
    for (let i = 0; i < patientData.length; i++) {
        if (patientData[i] != undefined) {
            loadDataToTable(patientData[i], i + 1);
        }
    }
}


function loadDataToTable(newPatient, rowId) {
    const tblPatients = document.querySelector("#tblPatients");
    const newRow = tblPatients.insertRow(-1);


    const newCellPatientId = newRow.insertCell(0);
    const strNewRowPatientId = document.createTextNode(`${newPatient.getPatientId()}`);
    newCellPatientId.appendChild(strNewRowPatientId);


    const newCellFirstName = newRow.insertCell(1);
    const strNewRowFirstName = document.createTextNode(`${newPatient.getFirstName()}`);
    newCellFirstName.appendChild(strNewRowFirstName);

    const newCellMiddleName = newRow.insertCell(2);
    const strNewRowMiddleName = document.createTextNode(`${newPatient.getMiddleName()}`);
    newCellMiddleName.appendChild(strNewRowMiddleName);

    const newCellLastName = newRow.insertCell(3);
    const strNewRowLastName = document.createTextNode(`${newPatient.getLastName()}`);
    newCellLastName.appendChild(strNewRowLastName);

    const newCellDateOfBirth = newRow.insertCell(4);
    const strNewRowDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
    newCellDateOfBirth.appendChild(strNewRowDateOfBirth);

    const newCellDepartment = newRow.insertCell(5);
    const strNewRowDepartment = document.createTextNode(`${newPatient.getDepartment()}`);
    newCellDepartment.appendChild(strNewRowDepartment);

    const newCellOutPatient = newRow.insertCell(6);
    const strNewRowOutPatient = document.createTextNode(`${newPatient.getRadioIsOutPatient()}`);
    newCellOutPatient.appendChild(strNewRowOutPatient);

}





















































//    function displayName() {
//     var originalPatientId = document.getElementById("patientIdNumber").value;
//       document.getElementById("show_name").innerHTML = "Your PatientID is :" + originalPatientId;
//       var originalName = document.getElementById("firstName").value;
//       document.getElementById("show_name").innerHTML = "Your Name is :" + originalName;

//     var originalMiddleInitials= document.getElementById("middleInitials").value;
//     document.getElementById("show_name").innerHTML = "Your Middle is :" + originalMiddleInitials;
//     var originalLastName = document.getElementById("lastName").value;
//     document.getElementById("show_name").innerHTML = "Your Last Name is :" + originalLastName;

//     var originalDOB = document.getElementById("dateOfBirth").value;
//       document.getElementById("show_name").innerHTML = "Your DOB is :" + originalDOB;
//       var originalDept = document.getElementById("ddlDepartment").value;
//       document.getElementById("show_name").innerHTML = "Your Department is :" + originalDept;

//     var originalradio= document.getElementById("radioIsOutPatientYes").value;
//     document.getElementById("show_name").innerHTML = "Your PatientID is :" + originalradio;
//    }

/**
 * minibankapp.js
 */


 // console.log("Welcome to my MiniBanking WebApp");
 
//  window.addEventListener("DOMContentLoaded", () => {
//      let currentRowNo = 2;
//      const formNewAccount = document.querySelector("#formNewAccount");
//      formNewAccount.addEventListener("submit", (event) => {
//          event.preventDefault();
//          const patientIdNumber = document.querySelector("#patientIdNumber");
//          const firstName = document.querySelector("#firstName");
//          const middleInitials = document.querySelector("#middleInitials");

//          const lastName = document.querySelector("#lastName");
//          const dateOfBirth = document.querySelector("#dateOfBirth");
//          const ddlDepartment = document.querySelector("#ddlDepartment");
//          const txtradioIsOutPatient = document.querySelector("#radioIsOutPatient");


//          const strpatientIdNumber = patientIdNumber.value;
//          const strfirstName = firstName.value;
//          const strmiddleInitials = middleInitials.value;
//          const strlastName = lastName.value;
//          const strdateOfBirth = dateOfBirth.value;
//          const strddlDepartment = ddlDepartment.value;
//          const strradioIsOutPatient = txtradioIsOutPatient.value;
 
         // call addNewAccountDataRow
    //      addNewAccountDataRow(strpatientIdNumber, strfirstName, strmiddleInitials, strlastName, strdateOfBirth, strddlDepartment,strradioIsOutPatient);
    //      patientIdNumber.value = "";
    //      firstName.value = "";
    //      middleInitials.value = "";
    //      lastName.value = "";
    //      dateOfBirth.value = "";
    //      ddlDepartment.value = "";
    //      txtradioIsOutPatient.value = "";
         
         

    //      ddlDepartment["selectedIndex"] = 0;
    //      patientIdNumber.focus();
 
    //      // Bad Alternative -- hack HTML by using .innerHTML
 
    //  });
 
//      const addNewAccountDataRow = function(patientIdNumber, firstName, middleInitials,lastName,dateOfBirth,ddlDepartment,txtradioIsOutPatient) {
//          const tblAccounts = document.querySelector("#tblPatients");
//          const newRow = tblPatients.insertRow(-1);
//          const newCellRowNo = newRow.insertCell(0);
//          const strNewRowNo = document.createTextNode(`${++currentRowNo}.`);
//          newCellRowNo.appendChild(strNewRowNo);

//          const newCellPatientNo = newRow.insertCell(1);
//          const strpatientIdNumber = document.createTextNode(`${patientIdNumber}`);
//          newCellPatientNo.appendChild(strpatientIdNumber);

//          const newCellpatientFirsName = newRow.insertCell(2);
//          const strfirstName = document.createTextNode(`${firstName}`);
//          newCellpatientFirsName.appendChild(strfirstName);

//          const newCellPatientmiddleInitials= newRow.insertCell(2);
//          const strmiddleInitials = document.createTextNode(`${middleInitials}`);
//          newCellPatientmiddleInitials.appendChild(strmiddleInitials);

//          const newCellPatientlastName = newRow.insertCell(3);
//          const strlastName = document.createTextNode(`${lastName}`);
//          newCellPatientlastName.appendChild(strlastName);

//          const newCellPatientdateOfBirth = newRow.insertCell(4);
//          const strdateOfBirth = document.createTextNode(`${dateOfBirth}`);
//          newCellPatientdateOfBirth.appendChild(strdateOfBirth);

//          const newCellPatientddlDepartment = newRow.insertCell(5);
//          const strddlDepartment = document.createTextNode(`${ddlDepartment}`);
//          newCellPatientdateOfBirth.appendChild(strddlDepartment);

//          const newCellPatienttxtradioIsOutPatient = newRow.insertCell(6);
//          const strradioIsOutPatient = document.createTextNode(`${txtradioIsOutPatient}`);
//          newCellPatienttxtradioIsOutPatient.appendChild(strradioIsOutPatient);




//      }
//  });