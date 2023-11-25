import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Error "mo:base/Error";
import Iter "mo:base/Iter";
actor {

  var dataHashMap = HashMap.HashMap<Text, Text>(0, Text.equal, Text.hash);
  stable var dataHashMapEntries : [(Text, Text)] = [];

  public func saveData(key : Text,value: Text) : async Text {
    dataHashMap.put(key, value);
    return "Save Data";
  };
  public func getAllData(key: Text) : async Text {
    let data : Text = switch(dataHashMap.get(key)){
      case null {
        throw Error.reject("Not fount key");
      };
      case (?result) {
        return result;
      }
    };
    return data;
  };
  system func preupgrade() {
    dataHashMapEntries := Iter.toArray(dataHashMap.entries());
  };

  system func postupgrade() {
    dataHashMap := HashMap.fromIter<Text, Text>(dataHashMapEntries.vals(), 1, Text.equal, Text.hash);
    dataHashMapEntries := [];
  };
};

