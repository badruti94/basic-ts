// hello world
console.log('----hello world')

const message: string = "Hello world"
console.log(message);

// variable
console.log('----variable')

const varA: string = 'varA'
const varB: number = 10
const varC = 10
console.log(varA, varB, varC);

// tipe data
console.log('----tipe data')

const a: string = "hello"
const b: number = 12
const c: boolean = true
console.log(a,b,c);

// operator
console.log('----operator')

const number1 = 20
const number2 = 10

const numberTambah = number1 + number2
const numberMinus = number1 - number2
const numberBagi = number1 / number2
const numberKali = number1 * number2
const numberModulus = number1 % number2
console.log(numberTambah, numberMinus, numberBagi, numberKali, numberModulus);

// seleksi kondisi
console.log('----seleksi kondisi')

const number3 = 57
if(number3 > 50){
    console.log('lebih dari 50');
}else{
    console.log('kurang atau sama dengan 50');
}

// perulangan
console.log('----perulangan')

for(let i: number = 0; i<=10; i++){
    console.log(i);
}

// array
console.log('----array')

const arrayA: number[] = [1,2,4,5,6]
console.log(arrayA);

// fungsi
console.log('----fungsi')

const tambah = (a: number, b: number): number => {
    return a + b
}
const hasil: number = tambah(2,2)
console.log(hasil);

// interface
console.log('----interface')

interface Mahasiswa {
    nama: string
    umur: number
    nilai: number
}
const mahasiswa: Mahasiswa = {
    nama: "Andi",
    umur: 23,
    nilai: 50.5
}
console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.nilai);

// json
console.log('----json')

interface Person{
    name: string
    age: string
}

const personString = `{"name":"Andi","age":40}`
const person: Person = JSON.parse(personString)
console.log(person.name, person.age);
