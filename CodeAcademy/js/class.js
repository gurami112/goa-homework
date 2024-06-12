        // Introduction to Classes

// let halley = {
//   _name: 'Halley',
//   _behavior: 0,
  
//   get name() {
//     return this._name;
//   },
  
//   get behavior() {
//     return this._behavior;
//   },
    
//   incrementBehavior() {
//     this._behavior++;
//   }
// }


        // Constructor


// class Surgeon {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
// }


        // Instance


// class Surgeon {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

// const surgeonJackson  = new Surgeon('Ruth Jackson','Orthopedics' )



        // Methods


// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get department() {
//     return this._department;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// console.log(surgeonRomero.name);
// console.log(surgeonRomero.department);
// console.log(surgeonRomero.remainingVacationDays);

// surgeonRomero.takeVacationDays(5);



        // Method Calls



// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get department() {
//     return this._department;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// const surgeonRomero  = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// console.log(surgeonRomero.name); 
// surgeonRomero.takeVacationDays(3);
// console.log(surgeonRomero.remainingVacationDays);



        // Inheritance II



// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }




        // Inheritance III



// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }
// }

  // Move this line outside of the Nurse class
// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);





        // Inheritance IV



// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//  constructor(name, certifications) {
//    super(name);
//    this._certifications = certifications;
//  } 
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

// nurseOlynyk.takeVacationDays(5);

// console.log(nurseOlynyk.remainingVacationDays);



        // Inheritance V


// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   } 

//   get certifications() {
//     return this._certifications;
//   }

//   addCertification(newCertification) {
//     this._certifications.push(newCertification);
//   }

  
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// nurseOlynyk.takeVacationDays(5);
// nurseOlynyk.addCertification("Genetics");
// console.log(nurseOlynyk.certifications);
// console.log(nurseOlynyk.remainingVacationDays);




        // Static Methods



// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }

//   static generatePassword() {
//   return Math.floor(Math.random() * 10000);
// }

  
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   } 
  
//   get certifications() {
//     return this._certifications;
//   }
  
//   addCertification(newCertification) {
//     this.certifications.push(newCertification);
//   }
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification('Genetics');
// console.log(nurseOlynyk.certifications);



        // School Catalogue

        
// class School {
//   constructor(name, level, numberOfStudents) {
//     // Set School properties
//     this._name = name;
//     this._level = level;
//     this._numberOfStudents = numberOfStudents;
//   }

//   get name() {
//     return this._name;
//   }

//   get level() {
//     return this._level;
//   }

//   get numberOfStudents() {
//     return this._numberOfStudents;
//   }

//   set numberOfStudents(newNumberOfStudents) {
//     if (typeof newNumberOfStudents === "number") {
//       this._numberOfStudents = newNumberOfStudents;
//     } else {
//       console.log("Invalid input: numberOfStudents must be set to a Number.");
//     }
//   }

//   quickFacts() {
//     console.log(
//       `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
//     );
//   }

//   static pickSubstituteTeacher(substituteTeachers) {
//     const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
//     return substituteTeachers[randomIndex];
//   }
// }

// class PrimarySchool extends School {
//   constructor(name, numberOfStudents, pickupPolicy) {
//     // Call the constructor of the parent class
//     super(name, "primary", numberOfStudents);
//     this._pickupPolicy = pickupPolicy;
//   }

//   get pickupPolicy() {
//     return this._pickupPolicy;
//   }
// }

// class HighSchool extends School {
//   constructor(name, numberOfStudents, sportsTeams) {
//     // Call the constructor of the parent class
//     super(name, "high", numberOfStudents);
//     this._sportsTeams = sportsTeams;
//   }

//   get sportsTeams() {
//     console.log(this._sportsTeams);
//   }
// }

// // Create instances
// const lorraineHansbury = new PrimarySchool(
//   "Lorraine Hansbury",
//   514,
//   "Students must be picked up by a parent, guardian, or a family member over the age of 13."
// );

// const alSmith = new HighSchool("Al E. Smith", 415, [
//   "Baseball",
//   "Basketball",
//   "Volleyball",
//   "Track and Field",
// ]);

// // Call methods
// lorraineHansbury.quickFacts();

// const substituteTeachers = [
//   "Jamal Crawford",
//   "Lou Williams",
//   "J. R. Smith",
//   "James Harden",
//   "Jason Terry",
//   "Manu Ginobli",
// ];
// const substituteTeacher = School.pickSubstituteTeacher(substituteTeachers);
// console.log(`Substitute teacher for the day: ${substituteTeacher}`);

// alSmith.sportsTeams;
