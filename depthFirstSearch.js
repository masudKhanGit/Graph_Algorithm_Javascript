// const depthFirstPrint = (graph, soruce) => {
//     const stack = [ soruce ];

//     while(stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);

//         for(let neighbor of graph[current]) {
//             stack.push(neighbor);
//         }
//     }
// }

// const graph = {
//     a : ['c', 'b'],
//     b : ['d'],
//     c : ['e'],
//     d : ['f'],
//     e : [],
//     f : [],
// };

// depthFirstPrint(graph, 'a');

// ---------------------------------------------------

const depthFirstPrint = (graph, soruce) => {
    console.log(soruce);
    for(let neighbor of graph[soruce]) {
        depthFirstPrint(graph, neighbor);
    }
}

const graph = {
    a : ['b', 'c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : [],
};

depthFirstPrint(graph, 'a');