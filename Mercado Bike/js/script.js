function compra(){
    Swal.fire({
        title: "Adicionar ao carrinho?",
        text: "Gostaria de adicionar ao carrinho?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "sim!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Adicionado ao carrinho!",
            text: "Produto adicionado com sucesso",
            icon: "success"
          });
        }
      });
    }
    function ModalHtml(){
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        })};

        function CompraFinal(){
            Swal.fire({
                title: "Deseja finalizar a compra?",
                text: "Gostaria de finalizar sua compra?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "sim!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Compra finalizada!",
                    text: "Sua compra foi finalizada com sucesso",
                    icon: "success"
                  });
                }
              })};
         