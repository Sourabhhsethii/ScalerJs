        // Comment -> This is first Javascript Code.
        console.log('Hello World, Lets Start');
        let name = 'Sourabh';
        console.log(name);

        // Cannot be a reservered Keyword.
        // Should be meaningful.
        // Can not start with Number.
        // Cannot contain space or hyphen (-)
        // Are Case-Sensitive

        let firstName = 'Sourabh'
        let lastName = 'Sethi';
        const interestRate = 0.3;
        console.log(interestRate);

        // Primitive Types :-> String, undefined, Number, boolean, null
        
        let age = 30; // Number Literal 
        let isApproved = true; // boolean Literal
        let secondName = undefined;
        let selectedColour = null;

        //ES - 6 also have Symbols.
        // Static & Dynamic Typed Launguages
        // JS is Dynamic Typed Launguages

        console.log(typeof age);
        age = 31.5;
        console.log(typeof age);
        console.log(typeof undefined); // undefined is type as well value.

        // References Types -> Objects, Functions, Arrays
        // Objets -> {} -> Object Literals
        let person = {
                name: 'Sourabh Sethi',
                age: 30
        }

        console.log(person);

        // Dot Notation to access the property
        console.log(person.name);
        // Bracket Notation 
        console.log(person['age']);

