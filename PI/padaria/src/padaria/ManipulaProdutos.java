package padaria;

import padaria.ProdutoDAO;
import padaria.Produtos;

public class ManipulaProdutos {
 
public static void main(String args[]){
 
 ProdutoDAO produtoDAO = new ProdutoDAO();
 
 //Cria um produto e salva no banco
 Produtos produto = new Produtos();
 produto.setProduto("Pao");
 produto.setPreco(2.50);
 produto.setPeso(0.20);
 
 produtoDAO.save(produto);
 
 //Atualiza o produto com id = 1 com os dados do objeto produto1
 Produtos produto1 = new Produtos();
 produto1.setId(1);
 produto1.setProduto("Dollynho");
 produto1.setPreco(5);
 produto1.setPeso(1);
 
 produtoDAO.update(produto1);
 
 //Remove o produto com id = 1
 
 produtoDAO.removeById(1);
 
 //Lista todos os produtos do banco de dados
 
 for(Produtos c : produtoDAO.getProdutos()){
 
 System.out.println("NOME: " + c.getProduto());
 }
 }
}
