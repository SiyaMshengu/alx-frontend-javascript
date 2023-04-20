export default class HolbertonCourse {
    // Constructor method for creating a new HolbertonCourse object
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    // Getter method for retrieving the name of the HolbertonCourse object
    get name() {
        return this._name;
    }
    // Setter method for setting the name of the HolbertonCourse object
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // Getter method for retrieving the length of the HolbertonCourse object
    get length() {
        return this._length;
    }
    // Setter method for setting the length of the HolbertonCourse object
    set length(value) {
        if (typeof value !== "number") {
            throw new TypeError("Length must be a number");
        }
        this._length = value;
    }

    // Getter method for retrieving the students of the HolbertonCourse object
    get students() {
        return this._students;
    }
    // Setter method for setting the students of the HolbertonCourse object
    set students(value) {
        value.forEach((element) => {
            if (typeof element !== 'string') {
                throw new TypeError('Students must be an array of strings');
            }
        });
        this._students = value;
    }
}
