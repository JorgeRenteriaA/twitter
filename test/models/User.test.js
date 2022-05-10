const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Create an User object',() => {
    const user = new User(1,"JorgeRenteria", "Jorge", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("JorgeRenteria")
    expect(user.name).toBe("Jorge")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
        
    });

    test('Add getters', () =>{
        const user = new User(1,"JorgeRenteria", "Jorge", "Bio")
        expect(user.getUsername).toBe("JorgeRenteria")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () =>{
        const user = new User(1,"JorgeRenteria", "Jorge", "Bio")
        user.setUsername="Renteria"
        expect(user.username).toBe("Renteria")

        user.setBio="New Bio"
        expect(user.bio).toBe("New Bio")
    });
})