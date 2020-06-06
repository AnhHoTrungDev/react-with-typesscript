type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function DeleteTable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean | undefined;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const DeleteTableCar = DeleteTable(Car);
const DeleteTableUser = DeleteTable(User);

type DeleteTableUserInstance = InstanceType<typeof DeleteTableUser>;
type DeleteTableCarInstance = InstanceType<typeof DeleteTableCar>;

class Profile {
  user: DeleteTableUserInstance | undefined;
  car: DeleteTableCarInstance | undefined;
}

const profile = new Profile();

profile.user = new DeleteTableUser("john");
profile.car = new DeleteTableUser("Honda");
