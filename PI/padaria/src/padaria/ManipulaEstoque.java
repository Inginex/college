package padaria;

public class ManipulaEstoque {

    public static void main(String args[]) {

        EstoqueDAO estoqueDAO = new EstoqueDAO();
          
        //Cria um comanda e salva no banco
        Estoque estoque = new Estoque();
        estoque.setId(5);
        estoque.setQuantidade(20);
        estoque.setProduto(1);
        estoque.setFuncionario(1);
        
        estoqueDAO.save(estoque);

        //Lista todos os comandas do banco de dados
        for (Estoque c : estoqueDAO.getEstoque()) {

            System.out.println("Estoque: " + c.getId());
        }
    }
}
