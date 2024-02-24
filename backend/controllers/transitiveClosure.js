module.exports = {
    transitiveClosure: function(graph) {
        const transitiveRelations = {};
        if (!graph) {
            console.error("Graph is null or undefined");
            return transitiveRelations;
        }
        Object.keys(graph).forEach(node => {
            if (!node) {
                console.error("Node is null or undefined");
                return;
            }
            transitiveRelations[node] = [];
            const visited = new Set();
            dfs(node, node, visited);
        });

        function dfs(startNode, currentNode, visited) {
            if (!currentNode || !visited) {
                console.error("Invalid currentNode or visited set");
                return;
            }
            visited.add(currentNode);
            const neighbors = graph[currentNode];
            if (!neighbors || !Array.isArray(neighbors)) {
                console.error("Neighbors are null or not an array");
                return;
            }
            neighbors.forEach(neighborObj => {
                if (!neighborObj || !neighborObj.to || !neighborObj.hash || !visited) {
                    console.error("Invalid neighbor object or visited set");
                    return;
                }
                const neighbor = neighborObj.to;
                if (!visited.has(neighbor)) {
                    transitiveRelations[startNode].push(neighborObj);
                    dfs(startNode, neighbor, visited);
                }
            });
        }

        return transitiveRelations;
    }
};
