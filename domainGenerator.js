 export function domainGenerator() {
  
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun){
       
        let dominio = `${i}${j}${k}.com`;        
        
        console.log(dominio)
      }
    }
  }
}

domainGenerator()
