window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                 <img src="./Assets\icon\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
                <img src="./Assets\icon\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
            </td>
         </tr>
                `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Bruce Wayne',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '600000',
            _startDate: '12 may 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: './Assets/E2.png'
        },
        {
            _name: 'Omkar Mane',
            _gender: 'Male',
            _department: [
                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: './Assets/E5.png'

        }
    ];

    return empPayrollListLocal;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml += "<div class='dept-label'>" + dept + "</div>"
    }

    return deptHtml;
}