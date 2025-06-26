const telefone = document.getElementById("telefone");

telefone.addEventListener('input', () => {
      let valor = telefone.value.replace(/\D/g, '');
      
      telefone.value = valor;
      
      if (valor.length > 11) valor = valor.slice(0, 11);

      if (valor.length >= 7) {
        telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
      } else if (valor.length >= 3) {
        telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
      } else if (valor.length > 0) {
        telefone.value = `(${valor}`;
      }
    });