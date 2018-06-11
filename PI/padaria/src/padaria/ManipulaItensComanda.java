package padaria;

import padaria.ItensComandaDAO;
import padaria.ItensComanda;

public class ManipulaItensComanda {

    public static void main(String args[]) {
        ItensComandaDAO ItenscomandaDAO = new ItensComandaDAO();

        //Cria um comanda e salva no banco
        ItensComanda itensComanda = new ItensComanda();
        itensComanda.setIdCom(1);
        itensComanda.setQuantidade(20);
        itensComanda.setProduto(1);

        ItenscomandaDAO.save(itensComanda);

        //Atualiza o comanda com id = 1 com os dados do objeto comanda1
        ItensComanda itensComanda1 = new ItensComanda();
        itensComanda1.setIdCom(2);
        itensComanda1.setQuantidade(10);
        itensComanda1.setProduto(2);

        ItenscomandaDAO.update(itensComanda1);

        //Lista todos os comandas do banco de dados
        for (ItensComanda c : ItenscomandaDAO.getItensComanda()) {

            System.out.println("ITENS COMANDA: " + c.getId());
        }
    }
}
