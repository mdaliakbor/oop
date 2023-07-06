Finding Object, it’s Properties and Methods are the main mechanism of learning Object Oriented Programming.

---

---

- **What is OOP?**
    
    Object Oriented Programming is a programming paradigm based on the concept of “objects”, which can contain data and code. The data is in the from if fields, and the code is in the form of procedures. A common feature of objects is that procedures are attached to them and can access and modify the objects data fields.
    

### **OOP has four Main Pillars.**

- **Class**
    
    /* Class is a Template/Blueprint to create Multiple Object  */
    
    ## class :
    
    1. State (Properties, Attributes)
    2. Static State
    3.  Constructor
    4. Methods (Public, Private)
    5. Static method
    
    ```jsx
    class Person {
    	private String name;
    	public static int key;
    	public Person (String name) {
    			this.name = name;
    	}
    	public String getName(){
    			return this.name;
    	}
    	public static Person create(String name){
    			return new Person(name);
    	}
    }
    ```
    
    ```jsx
    const person = {};
    person.name = "ali akbar";
    person.email = "aliakbar@gmail.com";
    console.log(person);  // simple object
    
    class Person {}
    const p1 = new Person();
    p1.name = "ali akbar";
    p1.email = "aliakbar@gmail.com";
    console.log(p1);
    
    class Person {
      constructor(name,email,age) {
          this.name = name;
          this.email = email
          this.age = age
      }
    }
    
    const p1 = new Person("ali akbar","aliakbar@gmail.com",12);
    const p2 = new Person("kamal",'kamal@gmail.com',33);
    console.log(p1);
    console.log(p2);
    ```
    
    ```jsx
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
    
      sendingEmail(msg) {
        console.log("To: ", this.email);
        console.log("Massage: ", msg);
      }
    
      changeName(name) {
        this.name = name;
      }
      print() {
        console.log(this);
      }
    }
    
    const p1 = new Person("ali akbar", "aliakbar@gmail.com");
    const p2 = new Person("Jamal", "kamal@gmail.com");
    
    p1.sendingEmail("hello world");
    p2.sendingEmail("hello under world");
    
    console.log(p1.name, p2.name);
    
    p1.changeName("Abdullah");
    p2.changeName("David");
    console.log(p1.name, p2.name);
    
    p1.print();
    p2.print();
    
    class Person {
      constructor(name, email) {
        this._name = name;
        this._email = email;
      }
    
        getName() {
         return this._name
        }
        setName(value) {
            this._name = value
        }
    
      print() {
        console.log(this);
      }
    }
    
    const p1 = new Person("ali akbar", "aliakbar@gmail.com");
    const p2 = new Person("Jamal", "kamal@gmail.com");
    p1.setName('Jamal');
    console.log(p1.getName())
    
    /////////////////////////getter & setter//////////////
    class Person {
      constructor(name, email) {
        this._name = name;
        this._email = email;
      }
    
      get name() {
        return this._name;
      }
      set name(value) {
          if (value.toLowerCase() === 'jamal') return
          this._name = value;
      }
    
      print() {
        console.log(this);
      }
    }
    
    const p1 = new Person("ali akbar", "aliakbar@gmail.com");
    const p2 = new Person("Abdullah Al Mamun", "kamal@gmail.com");
    p1.name = "Abdullah Al Mamun";
    p2.name = "jamal";
    console.log(p1.name);  // Abdullah Al Mamun
    console.log(p2.name.toUpperCase()); //ABDULLAH AL MAMUN
    ```
    
- **Object**
    
    Object: Anything that is needs multiple Attributes or multiple Primitives to define.
    
    - What is an Object?
        - Combination of Noun, Adjective & Verb.
        - A Capsule that can Encapsulate Data & Operations.
        - Has some private and public properties.
        - Has some functions and public properties.
        - Is a custom data type
        - An isolated environment for properties and methods.
    
    1. Get data —> Actual data [ shape of Class ]
    2. Operate data —> Public Methods
    
    /* Object is a king in object oriented programming */
    
- **(1) Abstraction**
    
    —> Abstraction means hiding the implementation details inside and providing just the necessary API. We never know how it is working, We only know what to do.
    
- **(2) Encapsulation**
    
    —> The definition of encapsulation is “ the action of  enclosing something in or as if in a capsule “. Encapsulation means that each object in your code should control its own state. State is the current “ snapshot” of your Object.
    
    /* Encapsulation means that each object in your code should control its own state */
    
- **(3) Inheritance**
    
    —> The ability of creating a new class from an existing class. Inheritance is when an object acquires the property of another object. Inheritance allows a class to acquire the properties and behavior of another class.
    
- **(4) Polymorphism**
    
    —> Polymorphism is derived from two Greek words: poly and morphs. The word “poly” means many and “morphs” means forms. So polymorphism means “many forms”.
    
    ```jsx
    **Polymorphism
    1 Compile time,
    	1.1 Constructor Overloading,
    	1.2 Operator Overloading,
    	1.3 Function Overloading,
    	1.4 Function Overriding,
    
    2 Run time
    	2.1 Virtual Function**
    ```
    
    **work** : 1. Method Overloading & 2. Method Overwriting
    
    Method overloading is not possible in JavaScript
    
    ```jsx
    // Method Overwriting //
    
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
    
      print() {
        console.log("Class: Person, " + this + ""); // Class: Person, Name: ali akbar, Email: aliakbar@gmail.com
      }
      toString() {
        return `Name: ${this.name}, Email: ${this.email}`;
      }
    }
    
    const p1 = new Person("ali akbar", "aliakbar@gmail.com");
    const p2 = new Person("Abdullah Al Mamun", "kamal@gmail.com");
    
    p1.print();
    console.log(p1 + ""); // Name: ali akbar, Email: aliakbar@gmail.com
    ```
    
    ```jsx
    // static methods | properties
    class Person {
      static test = "hello world";
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
      static isValid(age) {
        return age >= 18;
      }
      static equal(p1, p2) {
        if (p1.name !== p2.name) return false;
        if (p1.email !== p2.email) return false;
        return true;
      }
    }
    
    const p1 = new Person("ali akbar", "aliakbar@gmail.com");
    const p2 = new Person("Abdullah Al Mamun", "kamal@gmail.com");
    const p4 = new Person("Abdullah Al Mamun", "kamal@gmail.com");
    
    console.log(Person.test);
    
    let p3 = null;
    const test = {
      name: "Amin",
      email: "amin@gmail.com",
      age: 12,
    };
    if (Person.isValid(test.age)) {
      p3 = new Person(test.name, test.email);
    }
    console.log(p3); //null
    
    console.log(Person.equal(p4, p2)); // true
    ```
    

### There are two types of Relation in OOP :

- **Is a Relation**
    - **Inheritance means, Is a Relationship**
- **Has a Relation**
    - **Composition**
    - **Aggregation**
    - 
    
    ![Screenshot_7.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f73fb9b7-9580-42ff-ada2-99cc4bb0f8d0/Screenshot_7.png)
    

[OOP Case Studies : 1](https://www.notion.so/OOP-Case-Studies-1-d16f9767ffbe470aaae448d93215d5a9?pvs=21)

[OOP Case Studies: 2](https://www.notion.so/OOP-Case-Studies-2-7d159a26fb604020a3919983b5eadd1c?pvs=21)

[OOP Case Studies: 3](https://www.notion.so/OOP-Case-Studies-3-d78f810a1ca84ddd97ec4e8b3777e3d8?pvs=21)



/* Object Oriented Programming is all about Object */

/* Class is a Template to create Multiple Object  */