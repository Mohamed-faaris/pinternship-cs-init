enum Role {
  Doctor = "Doctor",
  Nurse = "Nurse",
  Admin = "Admin",
}

interface Staff {
  id:string,
  name:string,
  role:Role,
}

const staffs:Staff[] = [
  {id:"001",name:"Dr. Ram",role:Role.Doctor},
  {id:"002",name:"Nurse Sita",role:Role.Nurse},
  {id:"003",name:"Admin John",role:Role.Admin},
]

function printStaffSummary(staffs:Staff[]){
  staffs.forEach(staff => {
    console.log(`Name: ${staff.name}, Role: ${staff.role}`);
  })};

  printStaffSummary(staffs)

//   ❯ bun tsr ex-07.ts
// $ bun x tsc --noEmit && bun run "ex-07.ts"
// Name: Dr. Ram, Role: Doctor
// Name: Nurse Sita, Role: Nurse
// Name: Admin John, Role: Admin