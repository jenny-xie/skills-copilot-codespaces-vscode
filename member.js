function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
        skills: ['JavaScript', 'HTML', 'CSS'],
        sayName: function() {
            console.log(this.name);
        }
    };
    return member;
}