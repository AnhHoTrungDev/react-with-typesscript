# Utility

## will be transformed in some way each of these utility provides the transformation

### ->(chuyển đổi theo 1 cách nào đó)

## 1) Partial

### ex

interface A{
x:number
y: number

}

### -> các x và y từ yêu cầu bắt buộc trở thành các optional

Partial<A> = {
x?:number
y?:number
}

## 2) Required<T>

interface A{
x?:number
y?: number

}

### -> các x và y thành bắt buộc

Required<A> = {
x:number
y:number
}

## 3) Readonly<T>

interface A{
x:number
y: number

}

### -> các x và y chỉ đc đọc

Required<A> = {
readonly x:number
readonly y:number
}

## 3) Record<K,T>

interface T{
x:number
y: number

}

### -> kiểu lưu trử theo key(K) và T là dữ liệu theo kiểu (T)

const record = Record<K,T> = {
a : {
x :2
y:3
}
}

## 4) Pick<T,K>

interface A{
x:number
y: number
z:number
}

### -> chọn vài properties từ A

Pick<A,"x"|"z">={
z:number
x:number
}

## 5) Omit<T,K>

interface A{
x:number
y: number
z:number
}

### ->(ngược với Pick )

Pick<A,"x"|"z">={
y:number
}

## 5) Exclude<T,U>

type T = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";
type U = "Coffee" | "Orange Juice";

### ->bỏ properties trong U mà có trong U

Exclude<T,U> = "Tea" | "Lemonade"

## 6) Extract<T,U>

type T = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";
type U = "Tea" | "Lemonade" | "Mohito";

### ->Tìm properties giống nhau của T U

Exclude<T,U> = "Tea" | "Lemonade"

## 7) NonNullable<T>

type T =string | string[]|null|undefined

### -> loại bỏ kiểu dữ kiệu null và undefined

NonNullable<T> =string|string[]

## 8) ReturnType<T>

function helloWorld(){
return "hello world"
}

### -> trả về kiểu dữ liều mà function return

type HelloWorldReturnType = ReturnType<typeof helloWorld>; //string

## 9) instanceType<T>

class Car {
name: string;
drive(){}

    constructor(name:string){
        this.nam =name
    }
    static buildCar(){
        //instantiate a car with some features
    }

}

### -> Như kiểu từ đối tượng được new ra lấy stye đó gán vào 1 type khác

type CarInstanceType = instanceType<typeof Car>; //car

## 10) ThisType<T>

interface MyObject{
sayHello:void
}

interface MyObjectThis{
helloWorld():string;
}

### -> kiểu gán 1 interface khác(MyObjectThis) thành kiểu trả về của 1 interface khác nữa (MyObject)

const myObject: MyObject & ThisType<MyObjectThis> = {
sayHello(){
return this.helloWorld()
}
}
