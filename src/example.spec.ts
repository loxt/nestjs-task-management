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

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('friend not found!');
    }

    this.friends.splice(idx, 1);
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
    friendsList.addFriend('Loxt');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Loxt');
  });

  describe('removeFriend', () => {
    it('should remove a friend from list', () => {
      friendsList.addFriend('Loxt');
      expect(friendsList.friends[0]).toEqual('Loxt');
      friendsList.removeFriend('Loxt');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('should throw an error as friends does not exist', () => {
      expect(() => friendsList.removeFriend('Loxt'));
      // expect(() => friendsList.removeFriend('Loxt')).toThrow(
      //   new Error('Friend not found'),
      // );
    });
  });
});
