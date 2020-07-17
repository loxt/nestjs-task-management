// feature
class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    console.log(`${name} is now a friend.`);
  }
}

// tests
describe('FriendsList', () => {
  let friendsList = new FriendsList();

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('should initialize friend list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('should add a friend to the list', () => {
    friendsList.addFriend('Loxt');

    expect(friendsList.friends.length).toEqual(1);
  });

  it('should announces friendship', () => {
    friendsList.announceFriendship = jest.fn();

    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('loxt2');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('loxt2');
  });
});
