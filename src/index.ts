type Properties = "propA" | "propB";

type MyMappedType<T> = {
  [P in keyof T]: T[P];
};

type MyNewType = MyMappedType<{ a: "a"; b: "b"; c: "C" }>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyNewType2 = Pick1<{ a: "a"; b: "b" }, "a" | "b">;
