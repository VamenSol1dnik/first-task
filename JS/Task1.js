function nodeChildCount(node, deep = Infinity) {
    let count = 0;
  
    function countChildren(node, currentDepth) {
      if (currentDepth <= deep) {
        count += node.childNodes.length;
        node.childNodes.forEach(child => {
          countChildren(child, currentDepth + 1);
        });
      }
    }
  
    countChildren(node, 1);
    return count;
  }
  
  
  const div = document.createElement('div');
  const p = document.createElement('p');
  const span = document.createElement('span');
  p.appendChild(span);
  div.appendChild(p);
  
  console.log(nodeChildCount(div));  // 2
  console.log(nodeChildCount(div, 1));  // 1
  console.log(nodeChildCount(div, 2));  // 2