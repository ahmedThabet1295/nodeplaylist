const Students = [
    {name:'ali',dept : 'CS', id : 1},
    {name:'mohamed',dept : 'it', id : 3},
    {name:'naser',dept : 'CS', id : 4},
    {name:'faresali',dept : 'is', id : 5},
    {name:'maged',dept : 'ds', id : 2},
    {name:'nader',dept : 'dp', id : 8},
    {name:'sami',dept : 'ns', id : 9},
    {name:'mourad',dept : 'rd', id : 5},
];

module.exports = class Student {
    constructor(nm,dept)
    {
        this.name = nm;
        this.dept = dept;
        this.id =  Students.lenght+1
    }
    saveStudents()
    {
        Students.push(this);
    }
    static fechAllStudents()
    {
        return Students;
    }   

}