package padaria;

public class ManipulaEstoque {

    public static void main(String args[]) {

        EstoqueDAO estoqueDAO = new EstoqueDAO();

        //Cria um comanda e salva no banco
        Estoque estoque = new Estoque();
        estoque.setId(1);
        estoque.setQuantidade(20);
        estoque.setProduto(1);
        estoque.setFuncionario(1);

        estoqueDAO.save(estoque);

        //Atualiza o comanda com id = 1 com os dados do objeto comanda1
        Estoque estoque1 = new Estoque();
        estoque1.setId(2);
        estoque1.setQuantidade(10);
        estoque1.setProduto(2);
        estoque1.setFuncionario(2);

        estoqueDAO.update(estoque);

        //Lista todos os comandas do banco de dados
        for (Estoque c : estoqueDAO.getEstoque()) {

            System.out.println("Estoque: " + c.getId());
        }
    }
}
