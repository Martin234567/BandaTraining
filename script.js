// 1. Base de données complète pour Sousaphone Sib (Clé de Fa, Fa#2 à Do5 en sons réels)
const notesSousaphone = [
    { nom: "Fa#2", nomCourt: "Fa", touche: "f/2", position: "123", alteration: "#", poids: 10 },
    { nom: "Solb2", nomCourt: "Sol", touche: "g/2", position: "123", alteration: "b", poids: 10 },
    { nom: "Sol2", nomCourt: "Sol", touche: "g/2", position: "13", alteration: null, poids: 10 },
    { nom: "Sol#2", nomCourt: "Sol", touche: "g/2", position: "23", alteration: "#", poids: 10 },
    { nom: "Lab2", nomCourt: "La", touche: "a/2", position: "23", alteration: "b", poids: 10 },
    { nom: "La2", nomCourt: "La", touche: "a/2", position: "12", alteration: null, poids: 10 },
    { nom: "La#2", nomCourt: "La", touche: "a/2", position: "1", alteration: "#", poids: 10 },
    { nom: "Sib2", nomCourt: "Si", touche: "b/2", position: "1", alteration: "b", poids: 10 },
    { nom: "Si2", nomCourt: "Si", touche: "b/2", position: "2", alteration: null, poids: 10 },

    { nom: "Do3", nomCourt: "Do", touche: "c/3", position: "0", alteration: null, poids: 10 },
    { nom: "Do#3", nomCourt: "Do", touche: "c/3", position: "123", alteration: "#", poids: 10 },
    { nom: "Reb3", nomCourt: "Ré", touche: "d/3", position: "123", alteration: "b", poids: 10 },
    { nom: "Re3", nomCourt: "Ré", touche: "d/3", position: "13", alteration: null, poids: 10 },
    { nom: "Re#3", nomCourt: "Ré", touche: "d/3", position: "23", alteration: "#", poids: 10 },
    { nom: "Mib3", nomCourt: "Mi", touche: "e/3", position: "23", alteration: "b", poids: 10 },
    { nom: "Mi3", nomCourt: "Mi", touche: "e/3", position: "12", alteration: null, poids: 10 },
    { nom: "Fa3", nomCourt: "Fa", touche: "f/3", position: "1", alteration: null, poids: 10 },
    { nom: "Fa#3", nomCourt: "Fa", touche: "f/3", position: "2", alteration: "#", poids: 10 },
    { nom: "Solb3", nomCourt: "Sol", touche: "g/3", position: "2", alteration: "b", poids: 10 },
    { nom: "Sol3", nomCourt: "Sol", touche: "g/3", position: "0", alteration: null, poids: 10 },
    { nom: "Sol#3", nomCourt: "Sol", touche: "g/3", position: "23", alteration: "#", poids: 10 },
    { nom: "Lab3", nomCourt: "La", touche: "a/3", position: "23", alteration: "b", poids: 10 },
    { nom: "La3", nomCourt: "La", touche: "a/3", position: "12", alteration: null, poids: 10 },
    { nom: "La#3", nomCourt: "La", touche: "a/3", position: "1", alteration: "#", poids: 10 },
    { nom: "Sib3", nomCourt: "Si", touche: "b/3", position: "1", alteration: "b", poids: 10 },
    { nom: "Si3", nomCourt: "Si", touche: "b/3", position: "2", alteration: null, poids: 10 },

    { nom: "Do4", nomCourt: "Do", touche: "c/4", position: "0", alteration: null, poids: 10 },
    { nom: "Do#4", nomCourt: "Do", touche: "c/4", position: "12", alteration: "#", poids: 10 },
    { nom: "Reb4", nomCourt: "Ré", touche: "d/4", position: "12", alteration: "b", poids: 10 },
    { nom: "Re4", nomCourt: "Ré", touche: "d/4", position: "1", alteration: null, poids: 10 },
    { nom: "Re#4", nomCourt: "Ré", touche: "d/4", position: "2", alteration: "#", poids: 10 },
    { nom: "Mib4", nomCourt: "Mi", touche: "e/4", position: "2", alteration: "b", poids: 10 },
    { nom: "Mi4", nomCourt: "Mi", touche: "e/4", position: "0", alteration: null, poids: 10 },
    { nom: "Fa4", nomCourt: "Fa", touche: "f/4", position: "1", alteration: null, poids: 10 },
    { nom: "Fa#4", nomCourt: "Fa", touche: "f/4", position: "2", alteration: "#", poids: 10 },
    { nom: "Solb4", nomCourt: "Sol", touche: "g/4", position: "2", alteration: "b", poids: 10 },
    { nom: "Sol4", nomCourt: "Sol", touche: "g/4", position: "0", alteration: null, poids: 10 },
    { nom: "Sol#4", nomCourt: "Sol", touche: "g/4", position: "23", alteration: "#", poids: 10 },
    { nom: "Lab4", nomCourt: "La", touche: "a/4", position: "23", alteration: "b", poids: 10 },
    { nom: "La4", nomCourt: "La", touche: "a/4", position: "12", alteration: null, poids: 10 },
    { nom: "La#4", nomCourt: "La", touche: "a/4", position: "1", alteration: "#", poids: 10 },
    { nom: "Sib4", nomCourt: "Si", touche: "b/4", position: "1", alteration: "b", poids: 10 },
    { nom: "Si4", nomCourt: "Si", touche: "b/4", position: "2", alteration: null, poids: 10 },

    { nom: "Do5", nomCourt: "Do", touche: "c/5", position: "0", alteration: null, poids: 10 }
];

const notesTrompette = [
    { nom: "Fa#3", nomCourt: "Fa", touche: "f/3", position: "123", alteration: "#", poids: 10 },
    { nom: "Solb3", nomCourt: "Sol", touche: "g/3", position: "123", alteration: "b", poids: 10 },
    { nom: "Sol3", nomCourt: "Sol", touche: "g/3", position: "13", alteration: null, poids: 10 },
    { nom: "Sol#3", nomCourt: "Sol", touche: "g/3", position: "23", alteration: "#", poids: 10 },
    { nom: "Lab3", nomCourt: "La", touche: "a/3", position: "23", alteration: "b", poids: 10 },
    { nom: "La3", nomCourt: "La", touche: "a/3", position: "12", alteration: null, poids: 10 },
    { nom: "La#3", nomCourt: "La", touche: "a/3", position: "1", alteration: "#", poids: 10 },
    { nom: "Sib3", nomCourt: "Si", touche: "b/3", position: "1", alteration: "b", poids: 10 },
    { nom: "Si3", nomCourt: "Si", touche: "b/3", position: "2", alteration: null, poids: 10 },

    { nom: "Do4", nomCourt: "Do", touche: "c/4", position: "0", alteration: null, poids: 10 },
    { nom: "Do#4", nomCourt: "Do", touche: "c/4", position: "123", alteration: "#", poids: 10 },
    { nom: "Reb4", nomCourt: "Ré", touche: "d/4", position: "123", alteration: "b", poids: 10 },
    { nom: "Re4", nomCourt: "Ré", touche: "d/4", position: "13", alteration: null, poids: 10 },
    { nom: "Re#4", nomCourt: "Ré", touche: "d/4", position: "23", alteration: "#", poids: 10 },
    { nom: "Mib4", nomCourt: "Mi", touche: "e/4", position: "23", alteration: "b", poids: 10 },
    { nom: "Mi4", nomCourt: "Mi", touche: "e/4", position: "12", alteration: null, poids: 10 },
    { nom: "Fa4", nomCourt: "Fa", touche: "f/4", position: "1", alteration: null, poids: 10 },
    { nom: "Fa#4", nomCourt: "Fa", touche: "f/4", position: "2", alteration: "#", poids: 10 },
    { nom: "Solb4", nomCourt: "Sol", touche: "g/4", position: "2", alteration: "b", poids: 10 },
    { nom: "Sol4", nomCourt: "Sol", touche: "g/4", position: "0", alteration: null, poids: 10 },
    { nom: "Sol#4", nomCourt: "Sol", touche: "g/4", position: "23", alteration: "#", poids: 10 },
    { nom: "Lab4", nomCourt: "La", touche: "a/4", position: "23", alteration: "b", poids: 10 },
    { nom: "La4", nomCourt: "La", touche: "a/4", position: "12", alteration: null, poids: 10 },
    { nom: "La#4", nomCourt: "La", touche: "a/4", position: "1", alteration: "#", poids: 10 },
    { nom: "Sib4", nomCourt: "Si", touche: "b/4", position: "1", alteration: "b", poids: 10 },
    { nom: "Si4", nomCourt: "Si", touche: "b/4", position: "2", alteration: null, poids: 10 },

    { nom: "Do5", nomCourt: "Do", touche: "c/5", position: "0", alteration: null, poids: 10 },
    { nom: "Do#5", nomCourt: "Do", touche: "c/5", position: "12", alteration: "#", poids: 10 },
    { nom: "Reb5", nomCourt: "Ré", touche: "d/5", position: "12", alteration: "b", poids: 10 },
    { nom: "Re5", nomCourt: "Ré", touche: "d/5", position: "1", alteration: null, poids: 10 },
    { nom: "Re#5", nomCourt: "Ré", touche: "d/5", position: "2", alteration: "#", poids: 10 },
    { nom: "Mib5", nomCourt: "Mi", touche: "e/5", position: "2", alteration: "b", poids: 10 },
    { nom: "Mi5", nomCourt: "Mi", touche: "e/5", position: "0", alteration: null, poids: 10 },
    { nom: "Fa5", nomCourt: "Fa", touche: "f/5", position: "1", alteration: null, poids: 10 },
    { nom: "Fa#5", nomCourt: "Fa", touche: "f/5", position: "2", alteration: "#", poids: 10 },
    { nom: "Solb5", nomCourt: "Sol", touche: "g/5", position: "2", alteration: "b", poids: 10 },
    { nom: "Sol5", nomCourt: "Sol", touche: "g/5", position: "0", alteration: null, poids: 10 },
    { nom: "Sol#5", nomCourt: "Sol", touche: "g/5", position: "23", alteration: "#", poids: 10 },
    { nom: "Lab5", nomCourt: "La", touche: "a/5", position: "23", alteration: "b", poids: 10 },
    { nom: "La5", nomCourt: "La", touche: "a/5", position: "12", alteration: null, poids: 10 },
    { nom: "La#5", nomCourt: "La", touche: "a/5", position: "1", alteration: "#", poids: 10 },
    { nom: "Sib5", nomCourt: "Si", touche: "b/5", position: "1", alteration: "b", poids: 10 },
    { nom: "Si5", nomCourt: "Si", touche: "b/5", position: "2", alteration: null, poids: 10 },

    { nom: "Do6", nomCourt: "Do", touche: "c/6", position: "0", alteration: null, poids: 10 }
];

// 4. Base Saxophone (Clé de Sol, Sib3 à Fa#6)
const notesSaxophone = [
    { nom: "Sib3", nomCourt: "Si", touche: "b/3", position: "", alteration: "b", poids: 10 },
    { nom: "Si3", nomCourt: "Si", touche: "b/3", position: "", alteration: null, poids: 10 },

    { nom: "Do4", nomCourt: "Do", touche: "c/4", position: "", alteration: null, poids: 10 },
    { nom: "Do#4", nomCourt: "Do", touche: "c/4", position: "", alteration: "#", poids: 10 },
    { nom: "Reb4", nomCourt: "Ré", touche: "d/4", position: "", alteration: "b", poids: 10 },
    { nom: "Re4", nomCourt: "Ré", touche: "d/4", position: "", alteration: null, poids: 10 },
    { nom: "Re#4", nomCourt: "Ré", touche: "d/4", position: "", alteration: "#", poids: 10 },
    { nom: "Mib4", nomCourt: "Mi", touche: "e/4", position: "", alteration: "b", poids: 10 },
    { nom: "Mi4", nomCourt: "Mi", touche: "e/4", position: "", alteration: null, poids: 10 },
    { nom: "Fa4", nomCourt: "Fa", touche: "f/4", position: "", alteration: null, poids: 10 },
    { nom: "Fa#4", nomCourt: "Fa", touche: "f/4", position: "", alteration: "#", poids: 10 },
    { nom: "Solb4", nomCourt: "Sol", touche: "g/4", position: "", alteration: "b", poids: 10 },
    { nom: "Sol4", nomCourt: "Sol", touche: "g/4", position: "", alteration: null, poids: 10 },
    { nom: "Sol#4", nomCourt: "Sol", touche: "g/4", position: "", alteration: "#", poids: 10 },
    { nom: "Lab4", nomCourt: "La", touche: "a/4", position: "", alteration: "b", poids: 10 },
    { nom: "La4", nomCourt: "La", touche: "a/4", position: "", alteration: null, poids: 10 },
    { nom: "La#4", nomCourt: "La", touche: "a/4", position: "", alteration: "#", poids: 10 },
    { nom: "Sib4", nomCourt: "Si", touche: "b/4", position: "", alteration: "b", poids: 10 },
    { nom: "Si4", nomCourt: "Si", touche: "b/4", position: "", alteration: null, poids: 10 },

    { nom: "Do5", nomCourt: "Do", touche: "c/5", position: "", alteration: null, poids: 10 },
    { nom: "Do#5", nomCourt: "Do", touche: "c/5", position: "", alteration: "#", poids: 10 },
    { nom: "Reb5", nomCourt: "Ré", touche: "d/5", position: "", alteration: "b", poids: 10 },
    { nom: "Re5", nomCourt: "Ré", touche: "d/5", position: "", alteration: null, poids: 10 },
    { nom: "Re#5", nomCourt: "Ré", touche: "d/5", position: "", alteration: "#", poids: 10 },
    { nom: "Mib5", nomCourt: "Mi", touche: "e/5", position: "", alteration: "b", poids: 10 },
    { nom: "Mi5", nomCourt: "Mi", touche: "e/5", position: "", alteration: null, poids: 10 },
    { nom: "Fa5", nomCourt: "Fa", touche: "f/5", position: "", alteration: null, poids: 10 },
    { nom: "Fa#5", nomCourt: "Fa", touche: "f/5", position: "", alteration: "#", poids: 10 },
    { nom: "Solb5", nomCourt: "Sol", touche: "g/5", position: "", alteration: "b", poids: 10 },
    { nom: "Sol5", nomCourt: "Sol", touche: "g/5", position: "", alteration: null, poids: 10 },
    { nom: "Sol#5", nomCourt: "Sol", touche: "g/5", position: "", alteration: "#", poids: 10 },
    { nom: "Lab5", nomCourt: "La", touche: "a/5", position: "", alteration: "b", poids: 10 },
    { nom: "La5", nomCourt: "La", touche: "a/5", position: "", alteration: null, poids: 10 },
    { nom: "La#5", nomCourt: "La", touche: "a/5", position: "", alteration: "#", poids: 10 },
    { nom: "Sib5", nomCourt: "Si", touche: "b/5", position: "", alteration: "b", poids: 10 },
    { nom: "Si5", nomCourt: "Si", touche: "b/5", position: "", alteration: null, poids: 10 },

    { nom: "Do6", nomCourt: "Do", touche: "c/6", position: "", alteration: null, poids: 10 },
    { nom: "Do#6", nomCourt: "Do", touche: "c/6", position: "", alteration: "#", poids: 10 },
    { nom: "Reb6", nomCourt: "Ré", touche: "d/6", position: "", alteration: "b", poids: 10 },
    { nom: "Re6", nomCourt: "Ré", touche: "d/6", position: "", alteration: null, poids: 10 },
    { nom: "Re#6", nomCourt: "Ré", touche: "d/6", position: "", alteration: "#", poids: 10 },
    { nom: "Mib6", nomCourt: "Mi", touche: "e/6", position: "", alteration: "b", poids: 10 },
    { nom: "Mi6", nomCourt: "Mi", touche: "e/6", position: "", alteration: null, poids: 10 },
    { nom: "Fa6", nomCourt: "Fa", touche: "f/6", position: "", alteration: null, poids: 10 },
    { nom: "Fa#6", nomCourt: "Fa", touche: "f/6", position: "", alteration: "#", poids: 10 }
];

// 5. Base Libre (Sol1 à Do6 - Notes naturelles)
const notesLibre = [
    { nom: "Sol1", nomCourt: "Sol", touche: "g/1", position: "", alteration: null, poids: 10 },
    { nom: "La1", nomCourt: "La", touche: "a/1", position: "", alteration: null, poids: 10 },
    { nom: "Si1", nomCourt: "Si", touche: "b/1", position: "", alteration: null, poids: 10 },
    
    { nom: "Do2", nomCourt: "Do", touche: "c/2", position: "", alteration: null, poids: 10 },
    { nom: "Re2", nomCourt: "Ré", touche: "d/2", position: "", alteration: null, poids: 10 },
    { nom: "Mi2", nomCourt: "Mi", touche: "e/2", position: "", alteration: null, poids: 10 },
    { nom: "Fa2", nomCourt: "Fa", touche: "f/2", position: "", alteration: null, poids: 10 },
    { nom: "Sol2", nomCourt: "Sol", touche: "g/2", position: "", alteration: null, poids: 10 },
    { nom: "La2", nomCourt: "La", touche: "a/2", position: "", alteration: null, poids: 10 },
    { nom: "Si2", nomCourt: "Si", touche: "b/2", position: "", alteration: null, poids: 10 },
    
    { nom: "Do3", nomCourt: "Do", touche: "c/3", position: "", alteration: null, poids: 10 },
    { nom: "Re3", nomCourt: "Ré", touche: "d/3", position: "", alteration: null, poids: 10 },
    { nom: "Mi3", nomCourt: "Mi", touche: "e/3", position: "", alteration: null, poids: 10 },
    { nom: "Fa3", nomCourt: "Fa", touche: "f/3", position: "", alteration: null, poids: 10 },
    { nom: "Sol3", nomCourt: "Sol", touche: "g/3", position: "", alteration: null, poids: 10 },
    { nom: "La3", nomCourt: "La", touche: "a/3", position: "", alteration: null, poids: 10 },
    { nom: "Si3", nomCourt: "Si", touche: "b/3", position: "", alteration: null, poids: 10 },
    
    { nom: "Do4", nomCourt: "Do", touche: "c/4", position: "", alteration: null, poids: 10 },
    { nom: "Re4", nomCourt: "Ré", touche: "d/4", position: "", alteration: null, poids: 10 },
    { nom: "Mi4", nomCourt: "Mi", touche: "e/4", position: "", alteration: null, poids: 10 },
    { nom: "Fa4", nomCourt: "Fa", touche: "f/4", position: "", alteration: null, poids: 10 },
    { nom: "Sol4", nomCourt: "Sol", touche: "g/4", position: "", alteration: null, poids: 10 },
    { nom: "La4", nomCourt: "La", touche: "a/4", position: "", alteration: null, poids: 10 },
    { nom: "Si4", nomCourt: "Si", touche: "b/4", position: "", alteration: null, poids: 10 },
    
    { nom: "Do5", nomCourt: "Do", touche: "c/5", position: "", alteration: null, poids: 10 },
    { nom: "Re5", nomCourt: "Ré", touche: "d/5", position: "", alteration: null, poids: 10 },
    { nom: "Mi5", nomCourt: "Mi", touche: "e/5", position: "", alteration: null, poids: 10 },
    { nom: "Fa5", nomCourt: "Fa", touche: "f/5", position: "", alteration: null, poids: 10 },
    { nom: "Sol5", nomCourt: "Sol", touche: "g/5", position: "", alteration: null, poids: 10 },
    { nom: "La5", nomCourt: "La", touche: "a/5", position: "", alteration: null, poids: 10 },
    { nom: "Si5", nomCourt: "Si", touche: "b/5", position: "", alteration: null, poids: 10 },
    
    { nom: "Do6", nomCourt: "Do", touche: "c/6", position: "", alteration: null, poids: 10 },
    { nom: "Re6", nomCourt: "Ré", touche: "d/6", position: "", alteration: null, poids: 10 },
    { nom: "Mi6", nomCourt: "Mi", touche: "e/6", position: "", alteration: null, poids: 10 },
    { nom: "Fa6", nomCourt: "Fa", touche: "f/6", position: "", alteration: null, poids: 10 },
    { nom: "Sol6", nomCourt: "Sol", touche: "g/6", position: "", alteration: null, poids: 10 },
];

const notesTrombone = [
    { nom: "Mi2", nomCourt: "Mi", touche: "e/2", position: 7, alteration: null, poids: 10 },
    //{ nom: "Mi#2", touche: "e#/2", position: 6, alteration: "#", poids: 10 },
    //{ nom: "Fab2", touche: "fb/2", position: 7, alteration: "b", poids: 10 },
    { nom: "Fa2", nomCourt: "Fa", touche: "f/2", position: 6, alteration: null, poids: 10 },
    { nom: "Fa#2", nomCourt: "Fa", touche: "f/2", position: 5, alteration: "#", poids: 10 },
    { nom: "Solb2", nomCourt: "Sol", touche: "g/2", position: 5, alteration: "b", poids: 10 },
    { nom: "Sol2", nomCourt: "Sol", touche: "g/2", position: 4, alteration: null, poids: 10 },
    { nom: "Sol#2", nomCourt: "Sol", touche: "g/2", position: 3, alteration: "#", poids: 10 },
    { nom: "Lab2", nomCourt: "La", touche: "a/2", position: 3, alteration: "b", poids: 10 },
    { nom: "La2", nomCourt: "La", touche: "a/2", position: 2, alteration: null, poids: 10 },
    { nom: "La#2", nomCourt: "La", touche: "a/2", position: 1, alteration: "#", poids: 10 },
    { nom: "Sib2", nomCourt: "Si", touche: "b/2", position: 1, alteration: "b", poids: 10 },
    { nom: "Si2", nomCourt: "Si", touche: "b/2", position: 7, alteration: null, poids: 10 },
    //{ nom: "Si#2", touche: "b#/2", position: 6, alteration: "#", poids: 10 },
    //{ nom: "Dob3", touche: "cb/3", position: 7, alteration: "b", poids: 10 },
    { nom: "Do3", nomCourt: "Do", touche: "c/3", position: 6, alteration: null, poids: 10 },
    { nom: "Do#3", nomCourt: "Do", touche: "c/3", position: 5, alteration: "#", poids: 10 },
    { nom: "Reb3", nomCourt: "Ré", touche: "d/3", position: 5, alteration: "b", poids: 10 },
    { nom: "Re3", nomCourt: "Ré", touche: "d/3", position: 4, alteration: null, poids: 10 },
    { nom: "Re#3", nomCourt: "Ré", touche: "d/3", position: 3, alteration: "#", poids: 10 },
    { nom: "Mib3", nomCourt: "Mi", touche: "e/3", position: 3, alteration: "b", poids: 10 },
    { nom: "Mi3", nomCourt: "Mi", touche: "e/3", position: 2, alteration: null, poids: 10 },
    //{ nom: "Mi#3", touche: "e#/3", position: 1, alteration: "#", poids: 10 },
    //{ nom: "Fab3", touche: "fb/3", position: 2, alteration: "b", poids: 10 },
    { nom: "Fa3", nomCourt: "Fa", touche: "f/3", position: 1, alteration: null, poids: 10 },
    { nom: "Fa#3", nomCourt: "Fa", touche: "f/3", position: 5, alteration: "#", poids: 10 },
    { nom: "Solb3", nomCourt: "Sol", touche: "g/3", position: 5, alteration: "b", poids: 10 },
    { nom: "Sol3", nomCourt: "Sol", touche: "g/3", position: 4, alteration: null, poids: 10 },
    { nom: "Sol#3", nomCourt: "Sol", touche: "g/3", position: 3, alteration: "#", poids: 10 },
    { nom: "Lab3", nomCourt: "La", touche: "a/3", position: 3, alteration: "b", poids: 10 },
    { nom: "La3", nomCourt: "La", touche: "a/3", position: 2, alteration: null, poids: 10 },
    { nom: "La#3", nomCourt: "La", touche: "a/3", position: 1, alteration: "#", poids: 10 },
    { nom: "Sib3", nomCourt: "Si", touche: "b/3", position: 1, alteration: "b", poids: 10 },
    { nom: "Si3", nomCourt: "Si", touche: "b/3", position: 4, alteration: null, poids: 10 },
    //{ nom: "Si#3", touche: "b#/3", position: 3, alteration: "#", poids: 10 },
    //{ nom: "Dob4", touche: "cb/4", position: 4, alteration: "b", poids: 10 },
    { nom: "Do4", nomCourt: "Do", touche: "c/4", position: 3, alteration: null, poids: 10 },
    { nom: "Do#4", nomCourt: "Do", touche: "c/4", position: 2, alteration: "#", poids: 10 },
    { nom: "Reb4", nomCourt: "Ré", touche: "d/4", position: 2, alteration: "b", poids: 10 },
    { nom: "Re4", nomCourt: "Ré", touche: "d/4", position: 1, alteration: null, poids: 10 },
    { nom: "Re#4", nomCourt: "Ré", touche: "d/4", position: 3, alteration: "#", poids: 10 },
    { nom: "Mib4", nomCourt: "Mi", touche: "e/4", position: 3, alteration: "b", poids: 10 },
    { nom: "Mi4", nomCourt: "Mi", touche: "e/4", position: 2, alteration: null, poids: 10 },
    //{ nom: "Mi#4", touche: "e#/4", position: 1, alteration: "#", poids: 10 },
    //{ nom: "Fab4", touche: "fb/4", position: 2, alteration: "b" },
    { nom: "Fa4", nomCourt: "Fa", touche: "f/4", position: 1, alteration: null, poids: 10 },
    { nom: "Fa#4", nomCourt: "Fa", touche: "f/4", position: 3, alteration: "#", poids: 10 },
    { nom: "Solb4", nomCourt: "Sol", touche: "g/4", position: 3, alteration: "b", poids: 10 },
    { nom: "Sol4", nomCourt: "Sol", touche: "g/4", position: 2, alteration: null, poids: 10 },
    { nom: "Sol#4", nomCourt: "Sol", touche: "g/4", position: 3, alteration: "#", poids: 10 },
    { nom: "Lab4", nomCourt: "La", touche: "a/4", position: 3, alteration: "b", poids: 10 },
    { nom: "La4", nomCourt: "La", touche: "a/4", position: 2, alteration: null, poids: 10 },
    { nom: "La#4", nomCourt: "La", touche: "a/4", position: 1, alteration: "#", poids: 10 },
    { nom: "Sib4", nomCourt: "Si", touche: "b/4", position: 1, alteration: "b", poids: 10 },
    { nom: "Si4", nomCourt: "Si", touche: "b/4", position: 2, alteration: null, poids: 10 },
    //{ nom: "Si#4", touche: "b#/4", position: 1, alteration: "#", poids: 10 },
    //{ nom: "Dob5", touche: "cb/5", position: 2, alteration: "b", poids: 10 },
    { nom: "Do5", nomCourt: "Do", touche: "c/5", position: 1, alteration: null, poids:10 },
];


// Variables d'état
let modeActuel = 'note'; 
let noteActuelle;
let fileNotes = [];
let etatHistorique = "juste"; // NOUVEAU : mémorise le résultat de la note précédente
let noteHistorique = null; // La note bleue
let score = 0;        
let erreurs = 0;        
let totalReponses = 0;  
let peutRepondre = true; 
let alterationsActives = false; // Facile par défaut
let estModeClasse = false;
let contourActuel = "contour-base"; // Par défaut


// --- CORRECTION : On définit l'instrument ICI, avant le reste ---
let instrumentActuel = 'trombone'; // Par défaut
let notesActuelles = notesTrombone; // C'est CE tableau qu'on va lire partout !
// ----------------------------------------------------------------

// Maintenant que notesActuelles existe, on peut calculer sa taille sans faire planter le jeu !
let indexMin = 0; 
let indexMax = notesActuelles.length - 1; 

let tempsRestant = 60; 
let timerInterval = null;
let jeuDemarre = false; 
let jeuTermine = false; 
let historiquesScores = []; 
let comboActuel = 0; 
let meilleurComboGlobal = 0; // Mémorise le combo absolu du joueur
let modeLibreActif = false;
let memoireInstrument = 'trombone'; // Pour mémoriser l'instrument avant d'activer le mode libre
let memoirePlages = {};
// --- VARIABLES D'EXPÉRIENCE ---
let xpGlobale = 0;
let xpNonSauvegardee = 0; // Agit comme un tampon pour ne pas spammer la base de données
let niveauEnAttente = 0; // NOUVEAU : Mémorise le niveau gagné pendant la partie


VF = Vex.Flow; // Raccourci pour éviter d'écrire "Vex.Flow" partout


// --- VARIABLES ET FONCTIONS DES PARAMÈTRES ---

// 1. On charge la mémoire. Si le joueur n'est jamais venu, ça vaut "true" par défaut.
let animationFondActive = localStorage.getItem("paramAnim") !== "false";
let algoApprentissageActif = localStorage.getItem("paramAlgo") !== "false";

// 2. Quand la page s'ouvre, on coche ou décoche visuellement les boutons selon la mémoire
window.addEventListener("DOMContentLoaded", () => {
    const checkAnim = document.getElementById("check-anim");
    const checkAlgo = document.getElementById("check-algo");
    if (checkAnim) checkAnim.checked = animationFondActive;
    if (checkAlgo) checkAlgo.checked = algoApprentissageActif;
});

function toggleMenuParametres() {
    const menu = document.getElementById("menu-parametres");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function changerParamAnimation() {
    animationFondActive = document.getElementById("check-anim").checked;
    // NOUVEAU : On sauvegarde ce choix immédiatement !
    localStorage.setItem("paramAnim", animationFondActive); 
}

function changerParamAlgo() {
    algoApprentissageActif = document.getElementById("check-algo").checked;
    // NOUVEAU : On sauvegarde ce choix immédiatement !
    localStorage.setItem("paramAlgo", algoApprentissageActif); 
}

// Ferme le menu si on clique en dehors
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu-parametres");
    const btn = document.getElementById("btn-parametres");
    if (menu && btn && !menu.contains(event.target) && !btn.contains(event.target)) {
        menu.style.display = "none";
    }
});


// NOUVEAU : Fonction qui centralise la règle d'affichage des altérations
function sontAlterationsAutorisees() {
    if (modeActuel === 'position') {
        // En position, on écoute le bouton (ou on force si on est en classé)
        return typeof estModeClasse !== 'undefined' && estModeClasse ? true : alterationsActives;
    } else {
        // En mode note, jamais d'altérations !
        return false;
    }
}
// FONCTION AMÉLIORÉE : Prépare les curseurs (avec mémoire !)
function initialiserEchelle() {
    let sliderMin = document.getElementById('slider-min');
    let sliderMax = document.getElementById('slider-max');
    
    // 1. On calibre les jauges sur le nombre de notes du nouvel instrument
    sliderMin.max = notesActuelles.length - 1;
    sliderMax.max = notesActuelles.length - 1;
    
    // NOUVEAU : RÈGLE DU MODE CLASSÉ (Toute l'échelle obligatoirement)
    if (estModeClasse) {
        indexMin = 0;
        indexMax = notesActuelles.length - 1;
    } 
    // Sinon on restaure les positions mémorisées
    else if (memoirePlages[instrumentActuel]) {
        indexMin = memoirePlages[instrumentActuel].min;
        indexMax = memoirePlages[instrumentActuel].max;
    } else {
        indexMin = 0;
        indexMax = notesActuelles.length - 1;
    }

    // 3. On applique les valeurs aux curseurs physiques
    sliderMin.value = indexMin;
    sliderMax.value = indexMax;

    let maxPlage = notesActuelles.length - 1;
    let pourcentageMin = (indexMin / maxPlage) * 100;
    let pourcentageMax = (indexMax / maxPlage) * 100;
    
    let barreFill = document.getElementById('slider-fill');
    barreFill.style.left = pourcentageMin + "%";
    barreFill.style.width = (pourcentageMax - pourcentageMin) + "%";
    
    // 4. On met à jour le texte des labels
    let altAutorisees = sontAlterationsAutorisees();
    
    // Si autorisées, on prend le nom complet et on efface juste le chiffre de l'octave (ex: "Do#4" devient "Do#")
    // Sinon, on prend le nom court normal (ex: "Do")
    let texteMin = altAutorisees ? notesActuelles[indexMin].nom.replace(/[0-9]/g, '') : notesActuelles[indexMin].nomCourt;
    let texteMax = altAutorisees ? notesActuelles[indexMax].nom.replace(/[0-9]/g, '') : notesActuelles[indexMax].nomCourt;

    document.getElementById('label-min').innerText = texteMin;
    document.getElementById('label-max').innerText = texteMax;

    // 5. On dessine la petite portée
    dessinerPorteeEchelle();
}


function changerInstrument(nouvelInstrument) {

    // --- NOUVEAU : On bloque le mode Libre si le niveau est inférieur à 4 ---
    if (nouvelInstrument === 'libre') {
        let stats = getNiveauEtProgression(xpGlobale);
        if (stats.niveau < 4) {
            // Le joueur n'a pas le niveau : on fait "sauter" le bouton pour lui faire comprendre
            const btnLibre = document.getElementById("btn-inst-libre");
            btnLibre.style.transform = "scale(1.2)";
            setTimeout(() => {
                btnLibre.style.transform = "scale(1)";
            }, 300);
            return; // On bloque la suite de la fonction !
        }
    }
    // ------------------------------------------------------------------------

    // Si on clique sur l'instrument déjà sélectionné, on annule pour ne pas frustrer le joueur !
    if (instrumentActuel === nouvelInstrument) return;

    instrumentActuel = nouvelInstrument;

    // 1. On change les couleurs des boutons du menu haut
    document.getElementById("btn-inst-trombone").classList.remove("active");
    document.getElementById("btn-inst-trompette").classList.remove("active");
    document.getElementById("btn-inst-sousaphone").classList.remove("active");
    document.getElementById("btn-inst-saxophone").classList.remove("active");
    document.getElementById("btn-inst-libre").classList.remove("active"); 
    
    document.getElementById(`btn-inst-${nouvelInstrument}`).classList.add("active");

    // 2. On charge la bonne base de données !
    if (instrumentActuel === 'trombone') notesActuelles = notesTrombone;
    else if (instrumentActuel === 'trompette') notesActuelles = notesTrompette;
    else if (instrumentActuel === 'sousaphone') notesActuelles = notesSousaphone;
    else if (instrumentActuel === 'saxophone') notesActuelles = notesSaxophone;
    else if (instrumentActuel === 'libre') notesActuelles = notesLibre;

    // 3. On met à jour le titre H1 de la page
    const titre = document.querySelector("h1");
    if (instrumentActuel === 'trombone') titre.innerText = "🖇️ Trombone 🖇️";
    else if (instrumentActuel === 'trompette') titre.innerText = "🎺 Trompette / Eupho 🎺";
    else if (instrumentActuel === 'sousaphone') titre.innerText = "🐘 Souba 🐘";
    else if (instrumentActuel === 'saxophone') titre.innerText = "🎷 Saxophone 🎷";
    else if (instrumentActuel === 'libre') titre.innerText = "🕊️ Lecture Libre 🕊️";

    // 4. GESTION DU BOUTON POSITION 
    const btnPosition = document.getElementById("btn-position");
    
    if (instrumentActuel === 'saxophone' || instrumentActuel === 'libre') {
        btnPosition.style.display = "none";
        modeActuel = 'note'; 
    } else {
        btnPosition.style.display = "inline-block";
        if (typeof estModeClasse !== 'undefined' && estModeClasse) {
            modeActuel = 'position';
        }
    }

    // 5. On recalibre la barre de niveau et on FORCE le rafraîchissement (le "true")
    initialiserEchelle();
    changerMode(modeActuel, true); 
    
    if (typeof afficherClassement === "function") {
        afficherClassement();
    }
}


function demarrerChrono() {
    timerInterval = setInterval(() => {
        tempsRestant--;
        let minutes = Math.floor(tempsRestant / 60);
        let secondes = tempsRestant % 60;
        
        document.getElementById("chrono").innerText = 
            String(minutes).padStart(2, '0') + ":" + String(secondes).padStart(2, '0');

        // Quand on arrive à 0, on arrête tout !
        if (tempsRestant <= 0) {
            clearInterval(timerInterval);
            jeuTermine = true; 
            peutRepondre = false; 

            // On nettoie la zone du combo pour faire propre derrière
            const divCombo = document.getElementById("combo-affichage");
            divCombo.classList.remove("visible", "halo-leger", "en-feu");
            divCombo.innerHTML = "";
            
            // NOUVEAU : On injecte les scores dans l'écran géant et on l'affiche !
            document.getElementById("fin-justes").innerText = score;
            document.getElementById("fin-erreurs").innerText = erreurs;
            
            // --- NOUVEAU : On cache le jeu et on affiche l'écran de fin ! ---
            document.getElementById("zone-jeu-principale").style.display = "none";
            document.getElementById("ecran-fin").style.display = "block";

            // On enregistre le score officiel dans le classement
            enregistrerScore(score);

            // NOUVEAU : C'est le moment d'afficher le niveau gagné !
            if (niveauEnAttente > 0) {
                setTimeout(() => {
                    triggerLevelUpAnimation(niveauEnAttente);
                    niveauEnAttente = 0; // On remet à zéro
                }, 500); // Un petit délai de 0.5s pour laisser l'écran de fin apparaître joliment
            }
        }
    }, 1000);
}


// ==========================================
// GESTION DU MODE CLASSÉ / ENTRAÎNEMENT
// ==========================================
function activerModeClasse(activation) {

    if (activation) {
        let stats = getNiveauEtProgression(xpGlobale);
        if (stats.niveau < 3) {
            // Le joueur n'a pas le niveau : on secoue le bouton en rouge !
            const btn = document.getElementById("onglet-classe");
            btn.style.color = "red";
            btn.style.transform = "scale(1.1)";
            setTimeout(() => {
                btn.style.color = "";
                btn.style.transform = "scale(1)";
            }, 300);
            return; // On bloque la suite de la fonction !
        }
    }
    
    estModeClasse = activation;
    
    const ongletEntrainement = document.getElementById("onglet-entrainement");
    const ongletClasse = document.getElementById("onglet-classe");
    const boiteChrono = document.getElementById("boite-chrono");
    const zoneEchelle = document.querySelector(".echelle-notes");

    if (estModeClasse) {
        ongletEntrainement.classList.remove("actif");
        ongletClasse.classList.add("actif");
        boiteChrono.style.display = ""; 
        
        zoneEchelle.style.opacity = "0.4";
        zoneEchelle.style.pointerEvents = "none";
        document.getElementById('slider-min').disabled = true;
        document.getElementById('slider-max').disabled = true;
    } else {
        ongletClasse.classList.remove("actif");
        ongletEntrainement.classList.add("actif");
        boiteChrono.style.display = "none"; 
        
        zoneEchelle.style.opacity = "1";
        zoneEchelle.style.pointerEvents = "auto";
        document.getElementById('slider-min').disabled = false;
        document.getElementById('slider-max').disabled = false;
    }
    
    initialiserEchelle();
    changerMode(modeActuel, true);
}


// FONCTION MISE À JOUR : Remise à zéro
function reinitialiserJeu() {

    
    // --- NOUVEAU : On cache l'écran de fin et on réaffiche le jeu ! ---
    document.getElementById("ecran-fin").style.display = "none";
    document.getElementById("zone-jeu-principale").style.display = "block";
    document.getElementById("message-nouveau-record").style.display = "none";
    const msgCombo = document.getElementById("message-record-combo");
    if (msgCombo) msgCombo.style.display = "none";

    // NOUVEAU : Si on a gagné un niveau en Entraînement et qu'on reset, on l'affiche !
    if (niveauEnAttente > 0) {
        triggerLevelUpAnimation(niveauEnAttente);
        niveauEnAttente = 0;
    }
    // -------------------------------------------------------------------
    clearInterval(timerInterval);
    timerInterval = null;
    jeuDemarre = false;
    jeuTermine = false;
    tempsRestant = 60; // On remet à 1 minute
    
    fileNotes = [];
    noteHistorique = null;
    etatHistorique = "juste";
    score = 0;
    erreurs = 0;
    totalReponses = 0;
    
    document.getElementById("chrono").innerText = "01:00";
    document.getElementById("score-juste").innerText = "0";
    document.getElementById("score-erreurs").innerText = "0";

    comboActuel = 0; 
    mettreAJourCombo();
    nouvelleNote();
}


// NOUVELLE FONCTION : Gère le glissement des curseurs de manière 100% fiable
function mettreAJourPlage(curseur = null) {

    if (typeof estModeClasse !== 'undefined' && estModeClasse) return;
    // ------------------------------------------
    
    let sliderMin = document.getElementById('slider-min');
    let sliderMax = document.getElementById('slider-max');
    
    let valMin = parseInt(sliderMin.value);
    let valMax = parseInt(sliderMax.value);

    // Sécurité absolue : on utilise le "nom" du curseur qu'on vient de tirer
    if (valMin > valMax) {
        if (curseur === 'min') {
            sliderMin.value = valMax; 
            valMin = valMax;
        } else if (curseur === 'max') {
            sliderMax.value = valMin; 
            valMax = valMin;
        }
    }

    indexMin = valMin;
    indexMax = valMax;

    memoirePlages[instrumentActuel] = { min: indexMin, max: indexMax };

    let maxPlage = notesActuelles.length - 1;
    let pourcentageMin = (indexMin / maxPlage) * 100;
    let pourcentageMax = (indexMax / maxPlage) * 100;
    
    let barreFill = document.getElementById('slider-fill');
    barreFill.style.left = pourcentageMin + "%";
    barreFill.style.width = (pourcentageMax - pourcentageMin) + "%";

    // --- CORRECTION : On utilise le cerveau pour garder les # et b quand on glisse ! ---
    let altAutorisees = sontAlterationsAutorisees();
    let texteMin = altAutorisees ? notesActuelles[indexMin].nom.replace(/[0-9]/g, '') : notesActuelles[indexMin].nomCourt;
    let texteMax = altAutorisees ? notesActuelles[indexMax].nom.replace(/[0-9]/g, '') : notesActuelles[indexMax].nomCourt;

    document.getElementById('label-min').innerText = texteMin;
    document.getElementById('label-max').innerText = texteMax;
    // -----------------------------------------------------------------------------------

    if (curseur === 'min') {
        sliderMin.style.zIndex = 3;
        sliderMax.style.zIndex = 2;
    } else if (curseur === 'max') {
        sliderMax.style.zIndex = 3;
        sliderMin.style.zIndex = 2;
    }

    // On dessine la mini-portée
    dessinerPorteeEchelle();
    
    // --- NOUVEAU : On ne change la note que si elle sort de la nouvelle plage ---
    if (noteActuelle) {
        // On cherche où se trouve la note actuelle dans le tableau complet
        let indexNoteActuelle = notesActuelles.indexOf(noteActuelle);
        
        // Si elle est plus basse que le min, ou plus haute que le max, on change !
        if (indexNoteActuelle < indexMin || indexNoteActuelle > indexMax) {
            nouvelleNote();
        }
    } else {
        nouvelleNote(); // Sécurité : si aucune note n'est définie
    }
}


// NOUVELLE FONCTION : Gère le clic sur le bouton
function toggleAlterations() {
    // Si on est en mode classé, on ne peut pas cliquer dessus !
    if (typeof estModeClasse !== 'undefined' && estModeClasse) return;

    alterationsActives = !alterationsActives;
    const btn = document.getElementById("btn-alterations");
    
    if (alterationsActives) {
        btn.classList.remove("inactif");
        btn.classList.add("actif");
        btn.innerText = "Altérations (#/b) : ON";
    } else {
        btn.classList.remove("actif");
        btn.classList.add("inactif");
        btn.innerText = "Altérations (#/b) : OFF";
    }
    
    initialiserEchelle();
    
    // --- CORRECTION DU BUG ---
    // Si on vient de désactiver les altérations ET que la note actuelle en possède une :
    // On ne la modifie plus ! On en tire simplement une nouvelle, 100% naturelle.
    if (!alterationsActives && noteActuelle && noteActuelle.alteration !== null) {
        nouvelleNote();
    }
    // -------------------------
}

// FONCTION AMÉLIORÉE : Dessine l'échelle de notes (Simple ou Double Portée)
function dessinerPorteeEchelle() {
    const divPortee = document.getElementById("portee-echelle");
    divPortee.innerHTML = ""; 

    const renderer = new VF.Renderer(divPortee, VF.Renderer.Backends.SVG);
    
    let altAutorisees = sontAlterationsAutorisees(); // NOUVEAU

    if (instrumentActuel === 'libre') {
        // ==========================================
        // MOTEUR 1 : SYSTÈME PIANO (MODE LIBRE)
        // ==========================================
        // CORRECTION : On agrandit la hauteur à 260 !
        renderer.resize(170, 240); 
        const context = renderer.getContext();
        
        // 1. Portées décalées : Y=30 (pour le Do6 aigu)
        const staveTreble = new VF.Stave(25, 20, 130).addClef("treble").setContext(context).draw();
        // CORRECTION : On descend la clé de Fa à Y=110 pour aérer le centre et laisser la place en bas
        const staveBass = new VF.Stave(25, 100, 130).addClef("bass").setContext(context).draw();
        
        // 2. Création de l'accolade 
        new VF.StaveConnector(staveTreble, staveBass).setType(3).setContext(context).draw();
        new VF.StaveConnector(staveTreble, staveBass).setType(1).setContext(context).draw();

        const noteMin = notesActuelles[indexMin];
        const noteMax = notesActuelles[indexMax];

        let clefMin = parseInt(noteMin.touche.slice(-1)) >= 4 ? "treble" : "bass";
        let clefMax = parseInt(noteMax.touche.slice(-1)) >= 4 ? "treble" : "bass";

        let tickablesTreble = [];
        let tickablesBass = [];

        // 3. Traitement du Temps 1 : Note MIN
        if (clefMin === "treble") {
            let vfNote = new VF.StaveNote({ clef: "treble", keys: [noteMin.touche], duration: "q", auto_stem: true });
            if (altAutorisees && noteMin.alteration) vfNote.addAccidental(0, new VF.Accidental(noteMin.alteration));
            tickablesTreble.push(vfNote);
            // NOUVEAU : Une note fantôme (invisible) pour garder l'alignement
            tickablesBass.push(new VF.GhostNote({ duration: "q" })); 
        } else {
            let vfNote = new VF.StaveNote({ clef: "bass", keys: [noteMin.touche], duration: "q", auto_stem: true });
            if (altAutorisees && noteMin.alteration) vfNote.addAccidental(0, new VF.Accidental(noteMin.alteration));
            tickablesBass.push(vfNote);
            tickablesTreble.push(new VF.GhostNote({ duration: "q" })); 
        }

        // 4. Traitement du Temps 2 : Note MAX
        if (clefMax === "treble") {
            let vfNote = new VF.StaveNote({ clef: "treble", keys: [noteMax.touche], duration: "q", auto_stem: true });
            if (altAutorisees && noteMax.alteration) vfNote.addAccidental(0, new VF.Accidental(noteMax.alteration));
            tickablesTreble.push(vfNote);
            tickablesBass.push(new VF.GhostNote({ duration: "q" }));
        } else {
            let vfNote = new VF.StaveNote({ clef: "bass", keys: [noteMax.touche], duration: "q", auto_stem: true });
            if (altAutorisees && noteMax.alteration) vfNote.addAccidental(0, new VF.Accidental(noteMax.alteration));
            tickablesBass.push(vfNote);
            tickablesTreble.push(new VF.GhostNote({ duration: "q" }));
        }

        // 5. On lie les voix aux portées et on dessine
        const voiceTreble = new VF.Voice({num_beats: 2, beat_value: 4}).addTickables(tickablesTreble);
        const voiceBass = new VF.Voice({num_beats: 2, beat_value: 4}).addTickables(tickablesBass);

        new VF.Formatter().joinVoices([voiceTreble, voiceBass]).format([voiceTreble, voiceBass], 80);
        
        voiceTreble.draw(context, staveTreble);
        voiceBass.draw(context, staveBass);

    } else {
        // ==========================================
        // MOTEUR 2 : PORTÉE SIMPLE (CLASSIQUE)
        // ==========================================
        renderer.resize(150, 140);
        const context = renderer.getContext();
        
        let clefVexflow = (instrumentActuel === 'trompette' || instrumentActuel === 'saxophone') ? "treble" : "bass";
        
        const stave = new VF.Stave(10, 25, 130);
        stave.addClef(clefVexflow).setContext(context).draw();

        const noteMin = notesActuelles[indexMin];
        const noteMax = notesActuelles[indexMax];

        let vfNoteMin = new VF.StaveNote({ clef: clefVexflow, keys: [noteMin.touche], duration: "q", auto_stem: true });
        if (altAutorisees && noteMin.alteration) vfNoteMin.addAccidental(0, new VF.Accidental(noteMin.alteration));

        let vfNoteMax = new VF.StaveNote({ clef: clefVexflow, keys: [noteMax.touche], duration: "q", auto_stem: true });
        if (altAutorisees && noteMax.alteration) vfNoteMax.addAccidental(0, new VF.Accidental(noteMax.alteration));

        const voice = new VF.Voice({num_beats: 2, beat_value: 4});
        voice.addTickables([vfNoteMin, vfNoteMax]);

        new VF.Formatter().joinVoices([voice]).format([voice], 80);
        voice.draw(context, stave);
    }
}


// 2. Dessiner la note principale et la file d'attente (Méthode Contraste + Flèche)
function dessinerNote() {
    const divPortee = document.getElementById("portee");
    divPortee.innerHTML = ""; 

    const renderer = new VF.Renderer(divPortee, VF.Renderer.Backends.SVG);
    const context = renderer.getContext();

    // On prépare la file indienne
    let sequence = [];
    if (estModeClasse) {
        // Slot 1 : La note passée (Vert = juste, Rouge = faux) OU un vrai gabarit transparent
        if (noteHistorique) {
            let couleurHisto = (etatHistorique === "juste") ? "#28a745" : "#dc3545";
            sequence.push({ note: noteHistorique, couleur: couleurHisto });
        } else {
            // On choisit une note pile au milieu pour ne générer aucune ligne supplémentaire
            let toucheCentrale = "b/4"; // Milieu pour la Clé de Sol (Trompette, Saxo, Libre)
            if (instrumentActuel === 'trombone' || instrumentActuel === 'sousaphone') {
                toucheCentrale = "d/3"; // Milieu pour la Clé de Fa
            }
            
            sequence.push({ note: { touche: toucheCentrale, alteration: null }, fantome: true });
        }
        
        // Slot 2 : La note à deviner (Noire avec le flag "estActuelle")
        sequence.push({ note: noteActuelle, couleur: "black", estActuelle: true });
        
        // Slots 3, 4, 5 : Les notes à venir (Grises pour ne pas distraire)
        fileNotes.forEach(n => sequence.push({ note: n, couleur: "#6f6f6f" }));
    } else {
        // Mode entraînement : Uniquement la note noire, seule.
        sequence.push({ note: noteActuelle, couleur: "black", estActuelle: true });
    }

    if (instrumentActuel === 'libre') {
        // ==========================================
        // MOTEUR 1 : SYSTÈME PIANO (MODE LIBRE)
        // ==========================================
        if (estModeClasse) {
            renderer.resize(550, 300);
            context.scale(0.9, 0.9);
        } else {
            renderer.resize(250, 300);
            context.scale(1.2, 1.2);
        }

        let staveWidth = estModeClasse ? 550 : 160;
        const staveTreble = new VF.Stave(20, 12, staveWidth).addClef("treble").setContext(context).draw();
        const staveBass = new VF.Stave(20, 112, staveWidth).addClef("bass").setContext(context).draw();
        
        new VF.StaveConnector(staveTreble, staveBass).setType(3).setContext(context).draw();
        new VF.StaveConnector(staveTreble, staveBass).setType(1).setContext(context).draw();

        let tickablesTreble = [];
        let tickablesBass = [];

        sequence.forEach(item => {
            let octave = parseInt(item.note.touche.slice(-1));
            let clef = (octave >= 4) ? "treble" : "bass";

            let vfNote = new VF.StaveNote({ clef: clef, keys: [item.note.touche], duration: "q", auto_stem: true });
            if (item.note.alteration) vfNote.addAccidental(0, new VF.Accidental(item.note.alteration));
            
            // On applique la couleur, la flèche, ou la transparence
            if (item.fantome) {
                vfNote.setStyle({ fillStyle: "transparent", strokeStyle: "transparent" });
                vfNote.getModifiers().forEach(m => m.setStyle({ fillStyle: "transparent", strokeStyle: "transparent" }));
            } else {
                vfNote.setStyle({ fillStyle: item.couleur, strokeStyle: item.couleur });
                vfNote.getModifiers().forEach(m => m.setStyle({ fillStyle: item.couleur, strokeStyle: item.couleur }));
                
                // NOUVEAU : La flèche qui pointe la note à deviner en mode Classé !
                if (item.estActuelle && estModeClasse) {
                    vfNote.addModifier(0, new VF.Annotation("▼")
                        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
                        .setFont("Arial", 16, "bold"));
                }
            }

            if (clef === "treble") {
                tickablesTreble.push(vfNote);
                tickablesBass.push(new VF.GhostNote({ duration: "q" }));
            } else {
                tickablesBass.push(vfNote);
                tickablesTreble.push(new VF.GhostNote({ duration: "q" }));
            }
        });

        const voiceTreble = new VF.Voice({num_beats: sequence.length, beat_value: 4}).addTickables(tickablesTreble);
        const voiceBass = new VF.Voice({num_beats: sequence.length, beat_value: 4}).addTickables(tickablesBass);

        new VF.Formatter().joinVoices([voiceTreble, voiceBass]).format([voiceTreble, voiceBass], estModeClasse ? 450 : 100);

        voiceTreble.draw(context, staveTreble);
        voiceBass.draw(context, staveBass);

    } else {
        // ==========================================
        // MOTEUR 2 : PORTÉE SIMPLE (CLASSIQUE)
        // ==========================================
        if (estModeClasse) {
            renderer.resize(550, 200); 
            context.scale(1.1, 1.1);
        } else {
            renderer.resize(250, 230); 
            context.scale(1.5, 1.5); 
        }

        let staveWidth = estModeClasse ? 480 : 140;
        let clefVexflow = (instrumentActuel === 'trompette' || instrumentActuel === 'saxophone') ? "treble" : "bass";
        
        const stave = new VF.Stave(10, 20, staveWidth);
        stave.addClef(clefVexflow).setContext(context).draw();

        let tickables = [];

        sequence.forEach(item => {
            let noteVexflow = new VF.StaveNote({ clef: clefVexflow, keys: [item.note.touche], duration: "q", auto_stem : true });
            if (item.note.alteration) noteVexflow.addAccidental(0, new VF.Accidental(item.note.alteration));
            
            // Transparence pour le fantôme
            if (item.fantome) {
                noteVexflow.setStyle({ fillStyle: "transparent", strokeStyle: "transparent" });
                noteVexflow.getModifiers().forEach(m => m.setStyle({ fillStyle: "transparent", strokeStyle: "transparent" }));
            } else {
                noteVexflow.setStyle({ fillStyle: item.couleur, strokeStyle: item.couleur });
                noteVexflow.getModifiers().forEach(m => m.setStyle({ fillStyle: item.couleur, strokeStyle: item.couleur }));
                
                // NOUVEAU : La flèche qui pointe la note à deviner en mode Classé !
                if (item.estActuelle && estModeClasse) {
                    noteVexflow.addModifier(0, new VF.Annotation("▼")
                        .setVerticalJustification(VF.Annotation.VerticalJustify.TOP)
                        .setFont("Arial", 16, "bold"));
                }
            }
            
            tickables.push(noteVexflow);
        });

        const voice = new VF.Voice({num_beats: sequence.length, beat_value: 4});
        voice.addTickables(tickables);
        
        new VF.Formatter().joinVoices([voice]).format([voice], estModeClasse ? 400 : 100);
        
        voice.draw(context, stave);
    }
}


// NOUVELLE FONCTION : Cerveau du tirage aléatoire ou intelligent
function tirerUneNoteAleatoire() {
    let notesPossibles = notesActuelles.slice(indexMin, indexMax + 1);
    let altAutorisees = sontAlterationsAutorisees();
    
    if (!altAutorisees) notesPossibles = notesPossibles.filter(n => n.alteration === null);
    if (notesPossibles.length === 0) notesPossibles = notesActuelles.filter(n => n.alteration === null);

    if ((typeof estModeClasse !== 'undefined' && estModeClasse) || !algoApprentissageActif) {
        return notesPossibles[Math.floor(Math.random() * notesPossibles.length)];
    } else {
        let poidsTotal = notesPossibles.reduce((sum, n) => sum + n.poids, 0);
        let tirage = Math.random() * poidsTotal;
        let sommeTemp = 0;
        for (let i = 0; i < notesPossibles.length; i++) {
            sommeTemp += notesPossibles[i].poids;
            if (tirage < sommeTemp) return notesPossibles[i];
        }
    }
}

// 3. Lancer un nouveau tour (Moteur de file d'attente)
function nouvelleNote(garderCouleurs = false) {
    if (jeuTermine) return;

    if (estModeClasse) {
        // Mode Arcade : On remplit la file (1 note actuelle + 3 futures)
        if (fileNotes.length === 0) {
            noteHistorique = null;
            noteActuelle = tirerUneNoteAleatoire();
            fileNotes = [tirerUneNoteAleatoire(), tirerUneNoteAleatoire(), tirerUneNoteAleatoire()];
        }
        while (fileNotes.length < 3) fileNotes.push(tirerUneNoteAleatoire());
    } else {
        // Mode normal
        noteActuelle = tirerUneNoteAleatoire();
        fileNotes = [];
        noteHistorique = null;
    }
    
    const questionTitre = document.getElementById("question-titre");
    questionTitre.innerText = modeActuel === 'note' ? "Quel est le nom de cette note ?" : "Quelle est la position de cette note ?";

    mettreAJourCombo();
    peutRepondre = true; 

    // En mode arcade, on ne veut pas effacer le flash vert instantané
    if (!garderCouleurs) {
        document.querySelectorAll(".zone-boutons button").forEach(btn => {
            btn.classList.remove("btn-juste", "btn-faux", "btn-flash-juste");
        });
    }

    dessinerNote();
}

// On intègre le pass "forcerRafraichissement" (faux par défaut si on clique avec la souris)
function changerMode(nouveauMode, forcerRafraichissement = false) {
    
    // LE VIDEUR : Bloque le reset uniquement si on clique sur le même bouton ET qu'on ne change pas d'instrument
    if (modeActuel === nouveauMode && !forcerRafraichissement) {
        return; 
    }
    
    modeActuel = nouveauMode;
    
    document.getElementById("btn-note").classList.remove("active");
    document.getElementById("btn-position").classList.remove("active");
    
    const btnAlterations = document.getElementById("btn-alterations");
    const separateur = document.getElementById("separateur-options"); // NOUVEAU : On cible le trait

    if (modeActuel === 'note') {
        document.getElementById("btn-note").classList.add("active");
        document.getElementById("zone-notes").style.display = "flex";
        document.getElementById("zone-positions-coulisse").style.display = "none";
        document.getElementById("zone-positions-pistons").style.display = "none";
        
        // En mode note, on cache complètement le bouton ET le trait
        if (btnAlterations) btnAlterations.style.display = "none";
        if (separateur) separateur.style.display = "none"; 
        
    } else { // Mode Position
        document.getElementById("btn-position").classList.add("active");
        document.getElementById("zone-notes").style.display = "none";
        
        // En mode position, on réaffiche le trait
        if (separateur) separateur.style.display = ""; 

        // En mode position, le bouton réapparait et s'adapte
        if (btnAlterations) {
            btnAlterations.style.display = "";
            
            if (typeof estModeClasse !== 'undefined' && estModeClasse) {
                // Classé : Bouton grisé et bloqué sur ON
                btnAlterations.classList.remove("actif", "inactif");
                btnAlterations.classList.add("verrouille");
                btnAlterations.innerText = "Altérations (#/b) : ON";
                btnAlterations.disabled = true; // Désactive le clic HTML
            } else {
                // Entraînement : Bouton normal
                btnAlterations.disabled = false;
                btnAlterations.classList.remove("verrouille");
                if (alterationsActives) {
                    btnAlterations.classList.add("actif");
                    btnAlterations.innerText = "Altérations (#/b) : ON";
                } else {
                    btnAlterations.classList.add("inactif");
                    btnAlterations.innerText = "Altérations (#/b) : OFF";
                }
            }
        }
        
        // Bascule entre Coulisse (Trombone) et Pistons (Trompette/Souba)
        if (instrumentActuel === 'trombone') {
            document.getElementById("zone-positions-coulisse").style.display = "flex";
            document.getElementById("zone-positions-pistons").style.display = "none";
        } else {
            document.getElementById("zone-positions-coulisse").style.display = "none";
            document.getElementById("zone-positions-pistons").style.display = "flex";
        }
    }
    
    // On nettoie le tableau et on tire une nouvelle note !
    reinitialiserJeu();
    afficherClassement();
    initialiserEchelle();
}


// FONCTION AMÉLIORÉE : Gère le texte et les paliers visuels (Uniquement en Classé)
function mettreAJourCombo() {
    const divCombo = document.getElementById("combo-affichage");
    const fond = document.getElementById("fond-mosaique");

    // 1. On nettoie tout (utile quand on rate une note ou qu'on quitte le mode classé)
    if (fond) fond.style.transform = `scale(1)`;
    divCombo.classList.remove("visible", "halo-leger", "en-feu");
    divCombo.style.color = ""; 
    divCombo.innerHTML = "";

    // --- NOUVEAU : Le videur ! Si on est en entraînement, on arrête la fonction ici ---
    if (typeof estModeClasse === 'undefined' || !estModeClasse) {
        return; 
    }

    // 2. Si on arrive ici, c'est qu'on est en Mode Classé ! On gère les animations :
    if (fond) {
        let echelle = 1
        if (animationFondActive && comboActuel >= 10){
            echelle = Math.min(100, 1 + (comboActuel-10) * 0.2);
        }
        fond.style.transform = `scale(${echelle})`;
    }
    
    // 3. On reconstruit le texte du combo (>= 2)
    if (comboActuel >= 2) {
        divCombo.classList.add("visible");

        let emojiGauche = "";
        let emojiDroite = "";

        if (comboActuel >= 5) {
            emojiGauche = "🔥 ";
            emojiDroite = " 🔥";
        }
        if (comboActuel >= 10 && comboActuel < 20) {
            divCombo.classList.add("halo-leger");
        }
        if (comboActuel >= 20) {
            divCombo.classList.add("en-feu");
        }

        divCombo.innerHTML = `${emojiGauche}COMBO x${comboActuel}${emojiDroite}`;
    }
}

// 5. Vérification de la réponse lors du clic sur un bouton
// Fonction de vérification mise à jour avec le nouveau système de score
function verifierReponse(valeurCliquee) {
    if (!peutRepondre || jeuTermine) return;

    if (!jeuDemarre && estModeClasse) {
        jeuDemarre = true;
        demarrerChrono();
    }

    peutRepondre = false; 

    // --- NOUVEAU : On fabrique le nom complet et précis pour l'affichage ! ---
    let nomCompletNote = noteActuelle.nomCourt;
    if (noteActuelle.alteration === 'b') nomCompletNote += " bémol";
    else if (noteActuelle.alteration === '#') nomCompletNote += " dièse";
    // --------------------------------------------------------------------------

    const message = document.getElementById("message");
    let estCorrect = false;
    let texteErreur = "";

    if (modeActuel === 'note') {
        estCorrect = (valeurCliquee === noteActuelle.nomCourt);
        // MODIFIÉ : On utilise notre nouveau nom complet ici
        texteErreur = `❌ Oups ! C'était un ${nomCompletNote}.`; 
    } else {
        estCorrect = (valeurCliquee === noteActuelle.position.toString());
        // MODIFIÉ : Et on l'utilise aussi ici pour le mode Position !
        texteErreur = `❌ Non, position ${noteActuelle.position} (c'est un ${nomCompletNote}).`; 
    }
    // NOUVEAU : On compte une tentative de plus à chaque clic
    totalReponses += 1;

// --- NOUVEAU : GESTION DES COULEURS DES BOUTONS ---
    // 1. On détermine quelle était la vraie bonne réponse (texte)
    let reponseCorrecte = modeActuel === 'note' ? noteActuelle.nomCourt : noteActuelle.position.toString();
    
   // 2. On cible la zone de boutons visible selon l'instrument
    let zoneActive;
    if (modeActuel === 'note') {
        zoneActive = document.getElementById("zone-notes");
    } else {
        zoneActive = instrumentActuel === 'trombone' 
            ? document.getElementById("zone-positions-coulisse") 
            : document.getElementById("zone-positions-pistons");
    }
    
    let listeBoutons = zoneActive.getElementsByTagName("button");

    // 3. On parcourt tous les boutons pour les colorer
    for (let btn of listeBoutons) {
        // NOUVEAU : On lit la valeur propre cachée dans l'attribut HTML (ex: "123" ou "Do")
        let valeurBouton = btn.getAttribute("data-valeur");

        // Si la valeur cachée correspond à la vraie réponse, ça devient VERT
        if (valeurBouton === reponseCorrecte) {
            btn.classList.add("btn-juste");
        }
        // Si la valeur cachée correspond au bouton cliqué à tort, ça devient ROUGE
        if (valeurBouton === valeurCliquee && !estCorrect) {
            btn.classList.add("btn-faux");
        }
    }
    // ---------------------------------------------------

    if (estCorrect) {
        score += 1;
        
        // --- NOUVEAU : On vérifie si on passe un niveau ! ---
        let niveauAvant = getNiveauEtProgression(xpGlobale).niveau;
        
        xpGlobale++;
        xpNonSauvegardee++;
        
        let niveauApres = getNiveauEtProgression(xpGlobale).niveau;
        
        mettreAJourUI_XP(); // Met à jour la jauge
        if (xpNonSauvegardee >= 5) sauvegarderXP();

        // Si le niveau d'après est plus grand que le niveau d'avant, BOOM !
        if (niveauApres > niveauAvant) {
            if (estModeClasse) {
                // En mode classé, on met en attente pour ne pas casser le combo
                niveauEnAttente = niveauApres;
            } else {
                // En mode entraînement, on affiche la bannière tout de suite !
                triggerLevelUpAnimation(niveauApres);
            }
        }
        // ----------------------------------------------------

        if (!estModeClasse && algoApprentissageActif){
            noteActuelle.poids = Math.max(1, noteActuelle.poids - 2);
        }

        comboActuel += 1;
        
        // --- NOUVEAU : Vérification du record de combo ---
        let ancienRecordCombo = meilleurComboGlobal; // On mémorise avant de modifier !
        
        if (comboActuel > meilleurComboGlobal && estModeClasse) {
            meilleurComboGlobal = comboActuel;
            const affichageCombo = document.getElementById("affichage-meilleur-combo");
            if (affichageCombo) affichageCombo.innerText = "🔥 Meilleur Combo : " + meilleurComboGlobal;
        }
        // -------------------------------------------------
        
        mettreAJourCombo();
        
        if (estModeClasse) {
            // ARCADE : On fait flasher le bouton
            const btnClique = Array.from(listeBoutons).find(b => b.getAttribute("data-valeur") === valeurCliquee);
            if (btnClique) {
                btnClique.classList.add("btn-flash-juste");
                setTimeout(() => btnClique.classList.remove("btn-flash-juste"), 200);
            }
            
            // CORRECTION : Nettoyage immédiat des couleurs persistantes
            for (let btn of listeBoutons) {
                btn.classList.remove("btn-juste", "btn-faux");
            }
            
            // On décale les notes avec le statut "juste"
            noteHistorique = noteActuelle;
            etatHistorique = "juste";
            noteActuelle = fileNotes.shift();
            fileNotes.push(tirerUneNoteAleatoire());
            
            peutRepondre = true; 
            dessinerNote(); 
        } else {
            setTimeout(() => { nouvelleNote(); }, 1000);
        }
        
    } else {
        // --- 2. MAUVAISE RÉPONSE ---
        erreurs += 1; 
        if (!estModeClasse && algoApprentissageActif){
            noteActuelle.poids += 10;
        }
        
        comboActuel = 0;
        mettreAJourCombo(); 
        
        const divCombo = document.getElementById("combo-affichage");
        divCombo.classList.add("visible");
        divCombo.style.color = "#dc3545"; 
        divCombo.innerText = texteErreur;
        
        // CORRECTION : GESTION DU DÉLAI D'ERREUR EN ARCADE
        setTimeout(() => { 
            if (estModeClasse) {
                // On décale les notes avec le statut "faux"
                noteHistorique = noteActuelle;
                etatHistorique = "faux";
                noteActuelle = fileNotes.shift();
                fileNotes.push(tirerUneNoteAleatoire());
                
                // Nettoyage strict des boutons
                for (let btn of listeBoutons) {
                    btn.classList.remove("btn-juste", "btn-faux", "btn-flash-juste");
                }
                
                // On retire le message d'erreur
                divCombo.classList.remove("visible");
                divCombo.innerText = "";
                
                peutRepondre = true;
                dessinerNote();
            } else {
                nouvelleNote(); 
            }
        }, 2000);
    }

    document.getElementById("score-juste").innerText = score;
    document.getElementById("score-erreurs").innerText = erreurs;
}

// ==========================================
// Démarrage initial
// ==========================================

changerMode(modeActuel, true);

// ==========================================

// ==========================================
// MOTEUR CLAVIER (NOTES & SIMULATEUR DE PISTONS)
// ==========================================

let pistonsEnfonces = new Set(); 

// NOUVEAU : Dictionnaire pour traduire K,L,M en pistons 1,2,3
const touchesPistons = { 'K': '1', 'L': '2', 'M': '3' };
const touchesCoulisse = { 
    '&': '1', 'É': '2', '"': '3', '\'': '4', '(': '5', '-': '6', 'È': '7', 
    '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7' 
};

document.addEventListener('keydown', (event) => {
    // Si on tape dans un champ de texte, on ignore
    if (event.target.tagName === 'INPUT') return; 

    let touche = event.key.toUpperCase();

    // 1. MÉCANIQUE DES PISTONS (Main droite sur K, L, M)
    if (modeActuel === 'position' && (instrumentActuel === 'trompette' || instrumentActuel === 'sousaphone')) {
        if (touchesPistons[touche]) {
            // Traduit K en "1" et le mémorise
            pistonsEnfonces.add(touchesPistons[touche]); 
            return; 
        }
    }

    // 2. VERROU DE JEU
    if (!peutRepondre || jeuTermine) return;

    if (modeActuel === 'position') {
        if (instrumentActuel === 'trombone') {
            // Pour l'instant, le trombone utilise les chiffres (attention au Shift sur AZERTY !)
            if (touchesCoulisse[touche]) {
                verifierReponse(touchesCoulisse[touche]);
            }
        } 
        else if (instrumentActuel === 'trompette' || instrumentActuel === 'sousaphone') {
            // Le joueur "souffle" avec la touche S (Main gauche)
            if (touche === 'S') {
                // On récupère les pistons (ex: 1 et 3), on les trie ("13") et on valide
                let reponsePistons = Array.from(pistonsEnfonces).sort().join('');
                if (reponsePistons === '') reponsePistons = '0'; // Aucun piston = 0
                
                verifierReponse(reponsePistons);
            }
        }
    } 
    else if (modeActuel === 'note') {
        // Dictionnaire de traduction (Format Piano + Format International)
        const dictionnaireNotes = {
            'C': 'Do', 'D': 'Ré', 'E': 'Mi', 'F': 'Fa', 'G': 'Sol', 'A': 'La', 'B': 'Si',
            'R': 'Do', 'T': 'Ré', 'Y': 'Mi', 'U': 'Fa', 'I': 'Sol', 'O': 'La', 'P': 'Si'
        };

        if (dictionnaireNotes[touche]) {
            verifierReponse(dictionnaireNotes[touche]);
        }
    }
});

// 3. RELÂCHEMENT DES PISTONS
document.addEventListener('keyup', (event) => {
    if (event.target.tagName === 'INPUT') return;
    
    let touche = event.key.toUpperCase();
    
    // Quand le joueur lève le doigt de K, L ou M, le piston remonte !
    if (touchesPistons[touche]) {
        pistonsEnfonces.delete(touchesPistons[touche]);
    }
});




// ==========================================
// SAUVEGARDE DU SCORE DANS LE CLOUD
// ==========================================
async function enregistrerScore(scoreFinal) {
    if (!estModeClasse || !window.auth || !window.auth.currentUser) return; 
    
    const user = window.auth.currentUser;
    const { doc, getDoc, setDoc } = window.firebaseModules;
    const db = window.db;
    const docRef = doc(db, "joueurs", user.uid);
    
    try {
        const docSnap = await getDoc(docRef);
        let donnees = docSnap.exists() ? docSnap.data() : {};
        let sesScores = donnees.scores || {};
        
        let cleCategorie = `${instrumentActuel}_${modeActuel}`;
        let meilleurScore = sesScores[cleCategorie] || 0;
        let comboBaseDeDonnees = donnees.meilleurCombo || 0; // NOUVEAU
        
        let aSauvegarder = false;
        let dataUpdate = {
            dernierePartie: new Date().toISOString()
        };

        // 1. A-t-on battu le record de score ?
        if (scoreFinal > meilleurScore) {
            sesScores[cleCategorie] = scoreFinal;
            dataUpdate.scores = sesScores; 
            aSauvegarder = true;
            if (meilleurScore > 0) {
                document.getElementById("message-nouveau-record").style.display = "block";
            }
        }

        // 2. A-t-on battu le record absolu de combo ?
        if (meilleurComboGlobal > comboBaseDeDonnees) {
            dataUpdate.meilleurCombo = meilleurComboGlobal;
            aSauvegarder = true;
            if (comboBaseDeDonnees > 0) {
                const msgCombo = document.getElementById("message-record-combo");
                if (msgCombo) msgCombo.style.display = "block";
            }
        }
        
        if (aSauvegarder) {
            await setDoc(docRef, dataUpdate, { merge: true });
            console.log("Sauvegarde Cloud effectuée ! 🏆");
            afficherClassement();
            afficherTableauBord();
        }
    } catch (erreur) {
        console.error("Erreur lors de la sauvegarde :", erreur);
    }
}


// --- FONCTIONS DU SYSTÈME D'XP ---

// --- FONCTION DE CALCUL D'XP ADOUCIE (Max ~67 000 XP) ---
function getNiveauEtProgression(xpTotal) {
    let niveau = 1;
    let xpRequiseTotal = 0;
    let xpNiveauPrecedent = 0;

    // Nouvelle courbe d'XP optimisée pour atteindre ~67k au niveau 67
    while (true) {
        // La nouvelle formule : 14 * niveau^1.2
        let xpPourProchain = Math.floor(14 * Math.pow(niveau, 1.2)); 
        xpRequiseTotal = xpNiveauPrecedent + xpPourProchain;

        if (xpTotal < xpRequiseTotal || niveau >= 67) {
            break;
        }
        niveau++;
        xpNiveauPrecedent = xpRequiseTotal;
    }

    if (niveau >= 67) {
        return { niveau: 67, pourcentage: 100, xpProgression: xpTotal - xpNiveauPrecedent, xpRequiseTotal: "MAX" };
    }

    let xpDansNiveauActuel = xpTotal - xpNiveauPrecedent;
    let xpPourCeNiveau = xpRequiseTotal - xpNiveauPrecedent;
    let pourcentage = Math.floor((xpDansNiveauActuel / xpPourCeNiveau) * 100);

    return {
        niveau: niveau,
        pourcentage: pourcentage,
        xpProgression: xpDansNiveauActuel,
        xpRequiseTotal: xpPourCeNiveau
    };
}
function mettreAJourUI_XP() {
    const stats = getNiveauEtProgression(xpGlobale);
    document.getElementById("badge-niveau").innerText = stats.niveau;
    document.getElementById("jauge-xp").style.width = stats.pourcentage + "%";
    
    if (stats.niveau === 67) {
        document.getElementById("texte-xp").innerText = "MAX";
    } else {
        document.getElementById("texte-xp").innerText = `${stats.xpProgression} / ${stats.xpRequiseTotal}`;
    }
    
    // Gère le texte du cadenas pour le Mode Classé (Niveau 3)
    const btnClasse = document.getElementById("onglet-classe");
    if (stats.niveau < 3 && !estModeClasse) {
        btnClasse.innerHTML = "🔒 Niv. 3 Requis";
        btnClasse.style.opacity = "0.7";
    } else if (!estModeClasse) {
        btnClasse.innerHTML = "🏆 Mode Classé";
        btnClasse.style.opacity = "1";
    }

    // --- NOUVEAU : Gère le cadenas pour le Mode Libre (Niveau 4) ---
    const btnLibre = document.getElementById("btn-inst-libre");
    if (btnLibre) {
        if (stats.niveau < 4) {
            btnLibre.innerHTML = "🔒";
            btnLibre.title = "Niveau 4 requis";
            btnLibre.style.opacity = "0.5";
        } else {
            btnLibre.innerHTML = "🕊️";
            btnLibre.title = "Mode Libre";
            btnLibre.style.opacity = "1";
        }
    }

    // --- MODIFIÉ : Met à jour la bordure de ton propre avatar avec la SÉLECTION ---
    const monAvatar = document.getElementById("mon-avatar");
    if (monAvatar) {
        monAvatar.className = "icone-joueur " + contourActuel;
    }
}


// --- AFFICHER L'XP TOTALE SANS POPUP ---
let affichageXPTemp = false; // Sécurité pour ne pas spammer le clic

function afficherXPTotale() {
    if (affichageXPTemp) return;
    affichageXPTemp = true;
    
    const texteXp = document.getElementById("texte-xp");
    
    // On affiche l'XP totale avec un petit style doré
    texteXp.innerText = "⭐ XP Totale : " + xpGlobale;
    texteXp.style.color = "#ffd700";
    texteXp.style.fontWeight = "bold";
    texteXp.style.textShadow = "0px 0px 5px rgba(255, 215, 0, 0.5)";
    
    // Au bout de 3 secondes, on remet le texte normal
    setTimeout(() => {
        affichageXPTemp = false;
        texteXp.style.color = ""; // Enlève la couleur forcée (revient au CSS de base)
        texteXp.style.fontWeight = "";
        texteXp.style.textShadow = "";
        mettreAJourUI_XP(); // Rappelle la fonction classique pour réafficher "Progression / Requise"
    }, 3000);
}

// Fonction pour attribuer la bonne couleur de contour selon le niveau
function obtenirClasseContour(niveau) {
    if (niveau >= 67) return "contour-niv-67";
    if (niveau >= 60) return "contour-niv-60";
    if (niveau >= 50) return "contour-niv-50";
    if (niveau >= 40) return "contour-niv-40";
    if (niveau >= 30) return "contour-niv-30";
    if (niveau >= 20) return "contour-niv-20";
    if (niveau >= 15) return "contour-niv-15";
    if (niveau >= 10) return "contour-niv-10";
    if (niveau >= 5)  return "contour-niv-5";
    return "contour-base"; // Pour les niveaux 1, 2, 3 et 4
}

// --- FONCTIONS POUR L'AVATAR (SÉLECTION ET COMPRESSION) ---

// --- MENU DE PERSONNALISATION DES BORDURES ---

const tousLesContours = [
    { id: "contour-base", niv: 1, nom: "Classique" },
    { id: "contour-niv-5", niv: 5, nom: "Bronze" },
    { id: "contour-niv-10", niv: 10, nom: "Argent" },
    { id: "contour-niv-15", niv: 15, nom: "Or" },
    { id: "contour-niv-20", niv: 20, nom: "Améthyste" },
    { id: "contour-niv-30", niv: 30, nom: "Saphir" },
    { id: "contour-niv-40", niv: 40, nom: "Émeraude" },
    { id: "contour-niv-50", niv: 50, nom: "Rubis" },
    { id: "contour-niv-60", niv: 60, nom: "Diamant" },
    { id: "contour-niv-67", niv: 67, nom: "Mythique" }
];

function ouvrirModalePersonnalisation() {
    if (!window.auth || !window.auth.currentUser) return; // Sécurité
    
    document.getElementById("modale-personnalisation").style.display = "flex";
    
    let monNiveau = getNiveauEtProgression(xpGlobale).niveau;
    let htmlGrille = "";
    
    tousLesContours.forEach(c => {
        let estDebloque = monNiveau >= c.niv;
        let estSelectionne = (contourActuel === c.id);
        
        // --- NOUVEAU : Anti-Spoil ---
        // Si c'est débloqué, on met la vraie classe CSS, sinon on met une classe générique "mystere"
        let classes = "apercu-contour";
        if (estDebloque) {
            classes += ` ${c.id}`;
        } else {
            classes += " contour-mystere";
        }
        
        if (estSelectionne) classes += " selectionne";
        
        let clickAction = estDebloque ? `onclick="choisirContour('${c.id}')"` : `onclick="alert('🔒 Débloqué au niveau ${c.niv}')"`;
        
        // L'icône au centre : le bonhomme si débloqué, un point d'interrogation si bloqué
        let iconeInterne = estDebloque ? "👤" : "❓";
        let htmlBadge = estSelectionne ? `<span class="badge-selection">✅</span>` : "";
        
        htmlGrille += `<div class="${classes}" ${clickAction} title="${estDebloque ? c.nom : '???'} (Niv.${c.niv})">${iconeInterne}${htmlBadge}</div>`;
    });
    
    document.getElementById("grille-contours").innerHTML = htmlGrille;
}

async function choisirContour(idContour) {
    contourActuel = idContour; // On change localement
    
    // On sauvegarde dans Firebase
    const user = window.auth.currentUser;
    const { doc, setDoc } = window.firebaseModules;
    try {
        await setDoc(doc(window.db, "joueurs", user.uid), { contour: contourActuel }, { merge: true });
    } catch (e) {
        console.error("Erreur sauvegarde contour", e);
    }
    
    // On met à jour l'image en haut à gauche et on rafraîchit la grille pour déplacer le "✅"
    mettreAJourUI_XP();
    ouvrirModalePersonnalisation(); 
}

function traiterNouvelAvatar(event) {
    const file = event.target.files[0];
    if (!file) return; // Si le joueur a annulé

    // On prépare la lecture du fichier
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // 1. On crée une "toile" invisible pour redessiner l'image en plus petit
            const canvas = document.createElement("canvas");
            const MAX_SIZE = 150; // La taille miniature parfaite pour un avatar
            let width = img.width;
            let height = img.height;

            // 2. On calcule les nouvelles dimensions en gardant les proportions
            if (width > height) {
                if (width > MAX_SIZE) {
                    height *= MAX_SIZE / width;
                    width = MAX_SIZE;
                }
            } else {
                if (height > MAX_SIZE) {
                    width *= MAX_SIZE / height;
                    height = MAX_SIZE;
                }
            }

            canvas.width = width;
            canvas.height = height;

            // 3. On redessine l'image en petit
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            // 4. On transforme cette petite image en texte compressé (qualité 0.7)
            const imageReduite = canvas.toDataURL("image/jpeg", 0.7);

            // 5. On envoie ça à la base de données !
            sauvegarderAvatar(imageReduite);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

async function sauvegarderAvatar(base64Image) {
    if (!window.auth || !window.auth.currentUser) return;
    
    const user = window.auth.currentUser;
    const { doc, setDoc } = window.firebaseModules;
    
    try {
        // On sauvegarde l'image directement dans son profil
        await setDoc(doc(window.db, "joueurs", user.uid), { avatar: base64Image }, { merge: true });
        
        // On met à jour l'affichage en direct
        const monAvatar = document.getElementById("mon-avatar");
        monAvatar.style.backgroundImage = `url('${base64Image}')`;
        monAvatar.innerText = "";
        

        // Petit bonus : on vide l'input pour qu'il puisse re-cliquer sur la même image s'il veut
        document.getElementById("upload-avatar").value = "";
        
    } catch (e) {
        console.error("Erreur lors de la sauvegarde de l'avatar", e);
        alert("Oups ! L'image n'a pas pu être sauvegardée.");
    }
}

async function supprimerAvatar() {
    if (!window.auth || !window.auth.currentUser) return;
    
    if (!confirm("Voulez-vous vraiment supprimer votre photo de profil ?")) return;
    
    const user = window.auth.currentUser;
    const { doc, setDoc } = window.firebaseModules;
    
    try {
        // On remplace sa photo par du vide dans la base de données
        await setDoc(doc(window.db, "joueurs", user.uid), { avatar: "" }, { merge: true });
        
        // On met à jour l'affichage
        const monAvatar = document.getElementById("mon-avatar");
        monAvatar.style.backgroundImage = "none";
        monAvatar.innerText = "👤";
        
        // (L'AUTRE LIGNE QUI FAISAIT PLANTER A ÉTÉ SUPPRIMÉE ICI)
        
    } catch (e) {
        console.error("Erreur suppression avatar :", e);
    }
}

async function sauvegarderXP() {
    if (!window.auth || !window.auth.currentUser || xpNonSauvegardee === 0) return;
    
    const user = window.auth.currentUser;
    const { doc, setDoc } = window.firebaseModules;
    
    try {
        await setDoc(doc(window.db, "joueurs", user.uid), { xp: xpGlobale }, { merge: true });
        xpNonSauvegardee = 0; // On reset le tampon une fois envoyé
    } catch (e) {
        console.error("Erreur sauvegarde XP", e);
    }
}

// Fonction pour mettre à jour l'accès aux modes de jeu selon le niveau
function updateMenuUnlocks(currentLevel) {
    const btnPositions = document.getElementById('btn-mode-positions');
    const btnRanked = document.getElementById('btn-mode-ranked');

    // Gestion du Mode Positions (Niveau 2)
    if (currentLevel >= 2) {
        btnPositions.disabled = false;
        btnPositions.title = "";
        btnPositions.innerText = "Mode Positions"; // Retire le cadenas
    }

    // Gestion du Mode Classé (Niveau 3)
    if (currentLevel >= 3) {
        btnRanked.disabled = false;
        btnRanked.title = "";
        btnRanked.innerText = "Mode Classé"; // Retire le cadenas
    }
}

// Fonction à appeler quand le joueur gagne un niveau
function triggerLevelUpAnimation(newLevel) {
    const banner = document.getElementById('level-up-banner');
    const levelSpan = document.getElementById('new-level-span');
    const unlocksText = document.getElementById('level-up-unlocks');

    if (!banner) return; // Sécurité

    levelSpan.innerText = newLevel;

    // --- NOUVEAU : On gère les récompenses du niveau 3 ET du niveau 4 ---
    if (newLevel === 3) {
        unlocksText.innerText = "🏆 Le Mode Classé est débloqué ! 🏆";
    } else if (newLevel === 4) {
        unlocksText.innerText = "🕊️ Le Mode Libre est débloqué ! 🕊️";
    } else if ([5, 10, 15, 20, 30, 40, 50, 60, 67].includes(newLevel)) {
        // NOUVEAU : Félicite le joueur pour son nouveau contour !
        unlocksText.innerText = "✨ Nouveau contour de profil débloqué ! ✨";
    } else {
        unlocksText.innerText = ""; 
    }
    // --------------------------------------------------------------------

    // Lance l'animation
    banner.classList.add('show-banner');

    // Cache l'animation après 3.5 secondes
    setTimeout(() => {
        banner.classList.remove('show-banner');
    }, 3500);
}



// ==========================================
// SYSTÈME SOCIAL (AMIS & PROFILS)
// ==========================================

// Variable globale pour stocker la liste des joueurs pendant qu'on regarde le menu
let listeGlobaleJoueurs = []; 

async function ouvrirModaleAmis() {
    const modale = document.getElementById("modale-amis");
    modale.style.display = "flex";

    const divDemandes = document.getElementById("liste-demandes");
    const divAmis = document.getElementById("liste-amis");
    const divAutres = document.getElementById("liste-autres");
    
    divDemandes.innerHTML = "⏳ Chargement...";
    divAmis.innerHTML = "⏳ Chargement...";
    divAutres.innerHTML = "⏳ Chargement...";

    if (!window.auth || !window.auth.currentUser) return;
    const monUid = window.auth.currentUser.uid;
    const { collection, getDocs, doc, getDoc } = window.firebaseModules;
    const db = window.db;

    try {
        // 1. On récupère TOUS les joueurs
        const querySnapshot = await getDocs(collection(db, "joueurs"));
        listeGlobaleJoueurs = [];
        querySnapshot.forEach(doc => listeGlobaleJoueurs.push({ id: doc.id, ...doc.data() }));

        // 2. On isole MES données
        let monProfil = listeGlobaleJoueurs.find(j => j.id === monUid) || {};
        let mesAmis = monProfil.amis || [];
        let mesDemandes = monProfil.demandesRecues || [];

        // 3. On nettoie les affichages
        divDemandes.innerHTML = "";
        divAmis.innerHTML = "";
        divAutres.innerHTML = "";

        let nbDemandes = 0;
        let nbAmis = 0;

        // Fonction pour dessiner une ligne joueur
        function creerLigneJoueur(joueur, type) {
            let xp = joueur.xp || 0;
            let niveau = getNiveauEtProgression(xp).niveau;
            let pseudo = joueur.pseudo || joueur.email.split('@')[0];
            
            let htmlBoutons = ""; // On part d'une zone de boutons vide
            
            if (type === 'autre') {
                // S'il a déjà reçu une demande de ma part
                let sesDemandes = joueur.demandesRecues || [];
                if (sesDemandes.includes(monUid)) {
                    htmlBoutons = `<button class="btn-action-ami gris" disabled>En attente ⏳</button>`;
                } else {
                    htmlBoutons = `<button class="btn-action-ami" onclick="envoyerDemandeAmi('${joueur.id}')">➕ Ajouter</button>`;
                }
            } else if (type === 'demande') {
                htmlBoutons = `<button class="btn-action-ami vert" onclick="accepterAmi('${joueur.id}')">✅ Accepter</button>`;
            } else if (type === 'ami') {
                // NOUVEAU : Le bouton des scores n'est généré QUE si c'est un ami !
                htmlBoutons = `<button class="btn-action-ami gris" onclick="voirProfilJoueur('${joueur.id}')" title="Voir les scores">📊 Stats</button>`;
            }

            // NOUVEAU : S'ils ont un contour favori, on l'utilise, sinon on calcule le max possible
            let classeContour = joueur.contour || obtenirClasseContour(niveau);
            let htmlAvatar = "";
            
            if (joueur.avatar && joueur.avatar.trim() !== "") {
                htmlAvatar = `<div class="joueur-icone ${classeContour}" style="background-image: url('${joueur.avatar}');"></div>`;
            } else {
                htmlAvatar = `<div class="joueur-icone ${classeContour}">👤</div>`;
            }

            return `
                <div class="joueur-ligne">
                    <div class="joueur-info">
                        ${htmlAvatar}
                        <div>
                            <div class="joueur-pseudo">${pseudo}</div>
                            <span class="joueur-niveau">Niv. ${niveau}</span>
                        </div>
                    </div>
                    <div class="joueur-actions">${htmlBoutons}</div>
                </div>
            `;
        }

        // 4. On répartit les joueurs
        
        // --- NOUVEAU : Tes 3 bots sont officiellement sur liste noire ! ---
        const pseudosBots = ["bot1", "bot2", "bot3"]; 
        // ------------------------------------------------------------------

        listeGlobaleJoueurs.forEach(joueur => {
            if (joueur.id === monUid) return; // On ne s'affiche pas soi-même

            // --- NOUVEAU : Le videur qui empêche les bots d'entrer dans la liste ---
            let sonPseudo = joueur.pseudo || (joueur.email ? joueur.email.split('@')[0] : "");
            if (pseudosBots.includes(sonPseudo)) {
                return; // C'est un bot : on l'ignore et on passe au joueur suivant !
            }
            // -----------------------------------------------------------------------

            if (mesDemandes.includes(joueur.id)) {
                divDemandes.innerHTML += creerLigneJoueur(joueur, 'demande');
                nbDemandes++;
            } else if (mesAmis.includes(joueur.id)) {
                divAmis.innerHTML += creerLigneJoueur(joueur, 'ami');
                nbAmis++;
            } else {
                divAutres.innerHTML += creerLigneJoueur(joueur, 'autre');
            }
        });

        // Gestion de l'affichage de la zone des demandes
        document.getElementById("zone-demandes-amis").style.display = nbDemandes > 0 ? "block" : "none";
        
        if (nbAmis === 0) divAmis.innerHTML = "<p style='font-size:12px; color:#888;'>Vous n'avez pas encore d'amis.</p>";

    } catch (e) {
        console.error("Erreur chargement amis :", e);
    }
}

async function envoyerDemandeAmi(uidCible) {
    const { doc, getDoc, setDoc } = window.firebaseModules;
    const docRef = doc(window.db, "joueurs", uidCible);
    try {
        const snap = await getDoc(docRef);
        let data = snap.exists() ? snap.data() : {};
        let sesDemandes = data.demandesRecues || [];
        
        if (!sesDemandes.includes(window.auth.currentUser.uid)) {
            sesDemandes.push(window.auth.currentUser.uid);
            await setDoc(docRef, { demandesRecues: sesDemandes }, { merge: true });
        }
        ouvrirModaleAmis(); // Rafraîchit l'affichage
    } catch (e) { console.error(e); }
}

async function accepterAmi(uidDemandeur) {
    const monUid = window.auth.currentUser.uid;
    const { doc, getDoc, setDoc } = window.firebaseModules;
    
    try {
        // 1. Mettre à jour MON profil (ajouter l'ami, retirer la demande)
        const monRef = doc(window.db, "joueurs", monUid);
        const monSnap = await getDoc(monRef);
        let mesData = monSnap.data();
        let mesAmis = mesData.amis || [];
        let mesDemandes = mesData.demandesRecues || [];
        
        mesDemandes = mesDemandes.filter(id => id !== uidDemandeur);
        if (!mesAmis.includes(uidDemandeur)) mesAmis.push(uidDemandeur);
        await setDoc(monRef, { amis: mesAmis, demandesRecues: mesDemandes }, { merge: true });

        // 2. Mettre à jour SON profil (m'ajouter en ami)
        const sonRef = doc(window.db, "joueurs", uidDemandeur);
        const sonSnap = await getDoc(sonRef);
        if (sonSnap.exists()) {
            let sesData = sonSnap.data();
            let sesAmis = sesData.amis || [];
            if (!sesAmis.includes(monUid)) sesAmis.push(monUid);
            await setDoc(sonRef, { amis: sesAmis }, { merge: true });
        }

        ouvrirModaleAmis(); // Rafraîchit l'affichage
    } catch (e) { console.error(e); }
}

function voirProfilJoueur(uid) {

    if (!window.auth || !window.auth.currentUser) return;
    
    // --- NOUVELLE SÉCURITÉ : Vérifie qu'ils sont bien amis ---
    const monUid = window.auth.currentUser.uid;
    let monProfil = listeGlobaleJoueurs.find(j => j.id === monUid) || {};
    let mesAmis = monProfil.amis || [];
    
    if (!mesAmis.includes(uid)) {
        alert("🔒 Vous devez être amis pour voir ses statistiques !");
        return;
    }
    // ---------------------------------------------------------

    // On récupère le joueur dans la liste qu'on a déjà chargée
    const joueur = listeGlobaleJoueurs.find(j => j.id === uid);
    if (!joueur) return;

    document.getElementById("modale-profil-joueur").style.display = "flex";
    
    let pseudo = joueur.pseudo || joueur.email.split('@')[0];
    let xp = joueur.xp || 0;
    let niveau = getNiveauEtProgression(xp).niveau;
    let comboMax = joueur.meilleurCombo || 0; // NOUVEAU : On lit son record
    
    // MODIFIÉ : On ajoute le Combo Max avec un style bien voyant !
    document.getElementById("titre-profil-joueur").innerHTML = `
        Profil de ${pseudo} <br>
        <span style="font-size: 14px; font-weight: normal; color: #888;">
            Niv. ${niveau} • ⭐ ${xp} XP au total <br>
            <span style="color: #ff9800; font-weight: bold;">🔥 Combo Max : ${comboMax}</span>
        </span>
    `;

    const instruments = ['trombone', 'trompette', 'sousaphone', 'saxophone', 'libre'];
    let htmlNote = `<tr><td>🎵</td>`;
    let htmlPosition = `<tr><td>🎯</td>`;

    instruments.forEach(inst => {
        let scNote = joueur.scores && joueur.scores[`${inst}_note`] ? joueur.scores[`${inst}_note`] : '-';
        htmlNote += `<td><span class="cell-score">${scNote}</span></td>`;

        if (inst === 'saxophone' || inst === 'libre') {
            htmlPosition += `<td>-</td>`;
        } else {
            let scPos = joueur.scores && joueur.scores[`${inst}_position`] ? joueur.scores[`${inst}_position`] : '-';
            htmlPosition += `<td><span class="cell-score">${scPos}</span></td>`;
        }
    });

    let contenu = `
        <table class="table-records" style="width: 100%; margin-top: 15px;">
            <thead>
                <tr>
                    <th></th><th>🖇️</th><th>🎺</th><th>🐘</th><th>🎷</th><th>🕊️</th>
                </tr>
            </thead>
            <tbody>
                ${htmlNote}</tr>${htmlPosition}</tr>
            </tbody>
        </table>
    `;
    
    document.getElementById("contenu-profil-joueur").innerHTML = contenu;
}


// ==========================================
// MOTEUR D'ANIMATION DU FOND (60 FPS)
// ==========================================
let positionFond = 0;

function animerFondContinu() {
    // 1. Vitesse de base TOUJOURS active !
    let vitesse = 0.2; 
    
    // 2. On ajoute l'accélération SEULEMENT si l'option est cochée et que le combo est à 10
    if (animationFondActive && comboActuel >= 10) {
        vitesse += (comboActuel - 10) * 0.01;
    }
    
    positionFond += vitesse;
    
    const fond = document.getElementById("fond-mosaique");
    if (fond) {
        fond.style.backgroundPosition = `-${positionFond}px -${positionFond}px`;
    }
    
    requestAnimationFrame(animerFondContinu);
}

// On démarre le moteur
animerFondContinu();

// ==========================================
// SYSTÈME DE COMPTES (FIREBASE)
// ==========================================

// On attend que tout soit chargé (le HTML et la Base de données)
window.addEventListener('load', () => {
    // On récupère les outils Firebase qu'on a préparés dans database.js
    if (!window.auth) return; 
    
    // CORRECTION 1 : On remet les outils Firebase manquants !
    const { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } = window.firebaseModules;
    const auth = window.auth;

    // Récupération des éléments HTML principaux
    const modale = document.getElementById('modale-connexion');
    const btnOuvrir = document.getElementById('btn-ouvrir-connexion');
    const btnFermer = document.getElementById('fermer-modale');
    const btnConnexion = document.getElementById('btn-connexion');
    const btnInscription = document.getElementById('btn-inscription');
    const btnDeconnexion = document.getElementById('btn-deconnexion');
    const emailInput = document.getElementById('email-input');
    const mdpInput = document.getElementById('mdp-input');
    const pseudoInput = document.getElementById('pseudo-input');
    const messageErreur = document.getElementById('message-erreur');
    const infoJoueur = document.getElementById('info-joueur');

    // Éléments pour basculer les vues
    const titreModale = document.getElementById('titre-modale');
    const btnRetour = document.getElementById('btn-retour-connexion');
    const lienBascule = document.getElementById('lien-bascule-mode');

    // Fonction pour changer l'affichage à l'intérieur de la boîte
    function changerVueModale(vue) {
        messageErreur.innerText = ""; // On nettoie les erreurs
        if (vue === 'inscription') {
            titreModale.innerText = "Créer un compte";
            pseudoInput.style.display = "block"; // Affiche le pseudo
            btnConnexion.style.display = "none";
            btnInscription.style.display = "block";
            lienBascule.style.display = "none";
            btnRetour.style.display = "block"; // Affiche la flèche retour
        } else {
            titreModale.innerText = "Se connecter";
            pseudoInput.style.display = "none"; // Cache le pseudo
            btnConnexion.style.display = "block";
            btnInscription.style.display = "none";
            lienBascule.style.display = "block"; // Affiche le lien "Pas de compte ?"
            btnRetour.style.display = "none";
        }
    }

    // 1. Ouvrir / Fermer la fenêtre
    btnOuvrir.onclick = () => { 
        modale.style.display = "block"; 
        changerVueModale('connexion'); // Par défaut, on ouvre sur "Se connecter"
    }
    btnFermer.onclick = () => modale.style.display = "none";

    // Navigation à l'intérieur de la fenêtre
    lienBascule.onclick = () => changerVueModale('inscription');
    btnRetour.onclick = () => changerVueModale('connexion');

    // CORRECTION 2 : Suppression du 2ème "const pseudoInput" qui faisait tout planter.

   onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Par défaut, on prend le nom du profil ou le début de l'email
            let pseudoAffichage = user.displayName || user.email.split('@')[0];
            
            // ---------------------------------------------------------------------
            // DÉBUT DE LA ZONE À MODIFIER
            // On va chercher le vrai pseudo ET l'XP enregistrés dans la base de données !
            try {
                const { doc, getDoc } = window.firebaseModules;
                const db = window.db;
                const docRef = doc(db, "joueurs", user.uid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    // 1. On récupère le pseudo s'il existe
                    if (docSnap.data().pseudo) {
                        pseudoAffichage = docSnap.data().pseudo; 
                        const infoJoueur = document.getElementById("info-joueur");
                        if (infoJoueur) infoJoueur.innerText = pseudoAffichage;
                    }  
                    
                    // 2. On récupère l'XP s'il existe et on met la barre à jour !
                    if (docSnap.data().xp !== undefined) {
                        xpGlobale = docSnap.data().xp; 
                        mettreAJourUI_XP(); 
                    }

                    // 2bis. Récupération du combo
                    if (docSnap.data().meilleurCombo !== undefined) {
                        meilleurComboGlobal = docSnap.data().meilleurCombo;
                    }

                    // 3. On récupère l'Avatar et la bordure !
                    const monAvatar = document.getElementById("mon-avatar");
                    
                    // A. On gère l'image de profil
                    if (docSnap.data().avatar && docSnap.data().avatar.trim() !== "") {
                        monAvatar.style.backgroundImage = `url('${docSnap.data().avatar}')`;
                        monAvatar.innerText = "";
                    } else {
                        monAvatar.style.backgroundImage = "none";
                        monAvatar.innerText = "👤";
                    }

                    // B. On gère le choix du contour
                    if (docSnap.data().contour) {
                        contourActuel = docSnap.data().contour;
                    } else {
                        // S'il n'a encore rien choisi, on lui attribue son contour max par défaut
                        contourActuel = obtenirClasseContour(xpGlobale ? getNiveauEtProgression(xpGlobale).niveau : 1);
                    }
                }
            } catch (erreur) {
                console.log("Erreur lors de la récupération des données :", erreur);
            }
            // FIN DE LA ZONE À MODIFIER
            // ---------------------------------------------------------------------

            // On affiche le pseudo final
            infoJoueur.innerText = pseudoAffichage;
            infoJoueur.classList.add("joueur-connecte");
            btnOuvrir.style.display = "none";
            btnDeconnexion.style.display = "inline-block";
            document.getElementById("btn-amis").style.display = "inline-block";
            modale.style.display = "none";
            afficherTableauBord(); // On met à jour le tableau de bord personnel
        } else {
            infoJoueur.innerText = "Non connecté";
            infoJoueur.classList.remove("joueur-connecte");
            btnOuvrir.style.display = "inline-block";
            btnDeconnexion.style.display = "none";
            document.getElementById("btn-amis").style.display = "none";

            // --- NOUVEAU : On cache tout quand on se déconnecte ! ---
            const panneauPerso = document.getElementById("panneau-perso");
            if (panneauPerso) panneauPerso.style.display = "none";
            
            xpGlobale = 0; // On vide l'XP en mémoire
            document.getElementById("mon-avatar").style.backgroundImage = "none";
            document.getElementById("mon-avatar").innerText = "👤";
            document.getElementById("btn-supprimer-avatar").style.display = "none";
            mettreAJourUI_XP(); // On met à jour l'affichage (ce qui va reverrouiller le mode Classé)
            // ---------------------------------------------------------
        }
    });

    // 3. Bouton : Créer un compte (AVEC VÉRIFICATION DU PSEUDO)
    btnInscription.onclick = async () => {
        const pseudoVal = pseudoInput.value.trim();
        
        if (!pseudoVal) {
            messageErreur.innerText = "Veuillez choisir un pseudo.";
            return;
        }

        messageErreur.innerText = "Vérification du pseudo... ⏳";

        try {
            const { collection, query, where, getDocs, setDoc, doc, updateProfile, createUserWithEmailAndPassword } = window.firebaseModules;
            
            // A. On vérifie si le pseudo est déjà pris dans la base de données
            const requete = query(collection(db, "joueurs"), where("pseudo", "==", pseudoVal));
            const verif = await getDocs(requete);
            
            if (!verif.empty) {
                messageErreur.innerText = "❌ Ce pseudo est déjà pris par un autre joueur !";
                return;
            }

            // B. Le pseudo est libre ! On crée le compte
            messageErreur.innerText = "Création du compte... ⏳";
            const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, mdpInput.value);
            const user = userCredential.user;

            // C. On attache le pseudo à son profil Firebase
            await updateProfile(user, { displayName: pseudoVal });

            // D. On crée un document à son nom pour réserver ce pseudo pour toujours
            await setDoc(doc(db, "joueurs", user.uid), {
                pseudo: pseudoVal,
                email: user.email,
                score: 0
            });

            messageErreur.innerText = "";
            document.getElementById('modale-help').style.display = 'flex';
            
        } catch (erreur) {
            // Gestion des erreurs classiques
            if (erreur.code === 'auth/email-already-in-use') {
                messageErreur.innerText = "❌ Un compte existe déjà avec cet email.";
            } else {
                messageErreur.innerText = "❌ Erreur : Vérifiez votre email et mot de passe (6 car. min).";
            }
        }
    };

    // 4. Bouton : Se connecter
    btnConnexion.onclick = () => {
        messageErreur.innerText = "Connexion...";
        signInWithEmailAndPassword(auth, emailInput.value, mdpInput.value)
            .catch((error) => { messageErreur.innerText = "Erreur : Email ou mot de passe incorrect."; });
    };

    // 5. Bouton : Déconnexion
    btnDeconnexion.onclick = () => { signOut(auth); };

    afficherClassement();
});


// ==========================================
// AFFICHAGE DU CLASSEMENT (PANNEAU DROIT)
// ==========================================
async function afficherClassement() {
    const listeScores = document.getElementById("liste-scores");
    const titreClassement = document.getElementById("titre-classement");
    
    if (!listeScores || !titreClassement) return;
    listeScores.innerHTML = "<li>⏳ Chargement...</li>";

    // NOUVEAU : On structure le titre comme demandé
    const nomInstruMap = {
        'trombone': '🖇️ Trombone',
        'trompette': '🎺 Trompette / Eupho',
        'sousaphone': '🐘 Souba',
        'saxophone': '🎷 Saxophone',
        'libre': '🕊️ Mode Libre'
    };
    
    const nomInstru = nomInstruMap[instrumentActuel] || instrumentActuel;
    const modeEmoji = modeActuel === 'note' ? '🎵' : '🎯';
    const modeTexte = modeActuel === 'note' ? 'Notes' : 'Positions';

    titreClassement.innerHTML = `🏆 Classement<hr class="separateur" style="margin: 10px 0;"><span style="font-size: 16px; font-weight: bold;">${nomInstru}<br>${modeEmoji} ${modeTexte}</span>`;


    if (!window.firebaseModules) return;
    const { collection, getDocs, query, orderBy, limit } = window.firebaseModules;
    const db = window.db;

    try {
        const cleCategorie = `${instrumentActuel}_${modeActuel}`;
        // NOUVEAU : On ordonne Firebase spécifiquement sur le casier imbriqué "scores.trombone_note"
        const requete = query(collection(db, "joueurs"), orderBy(`scores.${cleCategorie}`, "desc"), limit(10));
        const querySnapshot = await getDocs(requete);
        
        listeScores.innerHTML = ""; 
        let rang = 1;

        querySnapshot.forEach((doc) => {
            const donnees = doc.data();
            const pseudo = donnees.pseudo || donnees.email.split('@')[0]; 
            const scoreJoueur = donnees.scores[cleCategorie]; 
            
            // --- NOUVEAU : On récupère l'avatar, l'XP et le contour du joueur ---
            let xp = donnees.xp || 0;
            let niveau = getNiveauEtProgression(xp).niveau;
            let classeContour = donnees.contour || obtenirClasseContour(niveau);
            
            let htmlAvatar = "";
            // On utilise un scale(0.8) pour rétrécir l'avatar et ses bordures épiques proprement
            if (donnees.avatar && donnees.avatar.trim() !== "") {
                htmlAvatar = `<div class="joueur-icone ${classeContour}" style="background-image: url('${donnees.avatar}'); transform: scale(0.8); margin: 0 -5px;"></div>`;
            } else {
                htmlAvatar = `<div class="joueur-icone ${classeContour}" style="transform: scale(0.8); margin: 0 -5px;">👤</div>`;
            }
            // --------------------------------------------------------------------

            let medaille = rang === 1 ? "🥇" : (rang === 2 ? "🥈" : (rang === 3 ? "🥉" : `<span style="display:inline-block; width:20px;">#${rang}</span>`));
            
            // --- NOUVEAU : On modifie la ligne pour intégrer l'avatar ---
            listeScores.innerHTML += `
                <li>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        ${medaille}
                        ${htmlAvatar}
                        <strong>${pseudo}</strong>
                    </div>
                    <span class="score-juste">${scoreJoueur} pts</span>
                </li>`;
            
            rang++;
        });

        if (rang === 1) listeScores.innerHTML = '<li class="aucun-score">Aucun score pour le moment</li>';
    } catch (erreur) {
        listeScores.innerHTML = '<li class="score-faute">Erreur de chargement</li>';
    }
}

// ==========================================
// TABLEAU DE BORD PERSONNEL (HAUT GAUCHE)
// ==========================================
async function afficherTableauBord() {
    const panneau = document.getElementById("panneau-perso");
    
    // S'il n'est pas connecté, on cache le tableau et on s'arrête
    if (!window.auth || !window.auth.currentUser) {
        panneau.style.display = "none";
        return;
    }
    
    panneau.style.display = "block";
    
    // NOUVEAU : Met à jour le texte du combo !
    const affichageCombo = document.getElementById("affichage-meilleur-combo");
    if (affichageCombo) affichageCombo.innerText = "🔥 Meilleur Combo : " + meilleurComboGlobal;

    const user = window.auth.currentUser;
    const db = window.db;
    const { collection, getDocs } = window.firebaseModules;

    try {
        // Pour pouvoir calculer son rang dans CHAQUE catégorie d'un coup, on récupère le classement global
        const querySnapshot = await getDocs(collection(db, "joueurs"));
        let tousLesJoueurs = [];
        querySnapshot.forEach(doc => tousLesJoueurs.push({ id: doc.id, ...doc.data() }));

        const instruments = ['trombone', 'trompette', 'sousaphone', 'saxophone', 'libre'];
        
        let htmlNote = `<tr><td>🎵</td>`;
        let htmlPosition = `<tr><td>🎯</td>`;

        // On crée une petite fonction pour générer chaque case de la matrice
        function creerCase(instrument, mode) {
            // Le Saxo et le mode Libre n'ont pas de lecture de position
            if (mode === 'position' && (instrument === 'saxophone' || instrument === 'libre')) {
                return `<td>-</td>`;
            }

            let cle = `${instrument}_${mode}`;
            
            // On isole ceux qui ont un score dans cette catégorie, et on les trie
            let joueursFiltres = tousLesJoueurs.filter(j => j.scores && j.scores[cle] > 0);
            joueursFiltres.sort((a, b) => b.scores[cle] - a.scores[cle]);

            let monRang = -1;
            let monScore = 0;

            // On cherche notre place dans la liste triée
            for (let i = 0; i < joueursFiltres.length; i++) {
                if (joueursFiltres[i].id === user.uid) {
                    monRang = i + 1;
                    monScore = joueursFiltres[i].scores[cle];
                    break;
                }
            }

            if (monRang === -1) return `<td>-</td>`; // S'il n'a jamais joué ce mode

            let medaille = monRang === 1 ? "🥇" : (monRang === 2 ? "🥈" : (monRang === 3 ? "🥉" : `#${monRang}`));
            return `<td>
                        <div class="cell-score">${monScore}</div>
                        <div class="cell-rank">${medaille}</div>
                    </td>`;
        }

        // On remplit les colonnes
        instruments.forEach(inst => {
            htmlNote += creerCase(inst, 'note');
            htmlPosition += creerCase(inst, 'position');
        });

        document.getElementById("corps-records").innerHTML = htmlNote + "</tr>" + htmlPosition + "</tr>";

    } catch (erreur) {
        console.error("Erreur tableau de bord :", erreur);
    }
}

