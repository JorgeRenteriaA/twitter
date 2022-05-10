const UserService = require('./../../app/services/UserService')

describe("Tests for UserService",()=> {

    test("1. Create a new user using the UserService",()=>{
        const user = UserService.create(1,"JorgeRenteria", "Jorge")
        expect(user.username).toBe("JorgeRenteria")
        expect(user.name).toBe("Jorge")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1,"JorgeRenteria", "Jorge")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("JorgeRenteria")
        expect(userInfoList[2]).toBe("Jorge")
        expect(userInfoList[3]).toBe("Sin bio")
    });

    test("3. Update username", () => {
        const user = UserService.create(1,"JorgeRenteria", "Jorge")
        UserService.updateUserUsername(user,"JorgeRenteriaA")
        expect(user.username).toBe("JorgeRenteriaA")
    });

    test("4. Given a list of users give me the list of usernames", () =>{
        
        const user1 = UserService.create(1,"JorgeRenteria1", "Jorge")
        const user2 = UserService.create(1,"JorgeRenteria2", "Jorge")
        const user3 = UserService.create(1,"JorgeRenteria3", "Jorge")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("JorgeRenteria1")
        expect(usernames).toContain("JorgeRenteria2")
        expect(usernames).toContain("JorgeRenteria3")
    })
})