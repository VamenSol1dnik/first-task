function getBase64FromUrl(url) {
    return new Promise((resolve, reject) => {
      
      fetch(url)
        .then(response => {
          
          if (response.ok) return response.blob();
          throw new Error('Network response was not ok.');
        })
        .then(blob => {
          
          const reader = new FileReader();
          reader.onloadend = () => {
            
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
        .catch(reject);
    });
  }
  
  
  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
    .then(console.log)
    .catch(console.error);