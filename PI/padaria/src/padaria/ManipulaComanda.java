package padaria;

import padaria.ComandaDAO;
import padaria.Comanda;

public class ManipulaComanda {
 
public static void main(String args[]){
 
 ComandaDAO comandaDAO = new ComandaDAO();
 
 //Cria um comanda e salva no banco
 Comanda comanda = new Comanda();
 comanda.setId(1);
 comanda.setQuantidade(20);
 comanda.setProduto(1);
 
 comandaDAO.save(comanda);
 
 //Atualiza o comanda com id = 1 com os dados do objeto comanda1
 Comanda comanda1 = new Comanda();
 comanda1.setId(2);
 comanda1.setQuantidade(10);
 comanda1.setProduto(2);
 
 comandaDAO.update(comanda1);
 
 //Lista todos os comandas do banco de dados
 
 for(Comanda c : comandaDAO.getComanda()){
 
 System.out.println("COMANDA: " + c.getId());
 }
 }
}
