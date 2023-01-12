export default function createReportObject(employeesList) {
  const objet = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return objet;
}
