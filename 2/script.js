
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: 1: Eftersom att det inte är en sträng. 2: Funktionen hade ingen kallelse

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

// function hello() {
//     console.log(Hello, how are you today?)
// }

// function hello(name) {
//     console.log("Hello, how are you today?")
// }
// hello()
// hello()
// hello()
// hello()

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"

function hello(name) {
    console.log("Hello "+ name + " how are you today?")

}
hello("Charlie")