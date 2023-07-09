function solve(emps){
    class Employee{
        constructor(name, number){
            this.name = name;
            this.number = number; 
        }
    }
    let array = [];
    emps.forEach(emp => {
    const name = emp;
    const number = emp.length;
    const employee = new Employee(name, number);
    array.push(employee);
   });

   for (let index = 0; index < array.length; index++) {
    let employee = array[index];
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
   }
    
}

function solve2(emps){
    emps.forEach((employee) => {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);  
    });

}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

solve2(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);