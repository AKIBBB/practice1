var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var large = friends[0];

for (let i = 1; i < friends.length; i++) {
    if (friends[i].length > large.length) 
    {
        large= friends[i];
    }
}

console.log(large);
