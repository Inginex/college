package padaria;

import java.util.List;

public class ItensComanda {

    static void add(List<ItensComanda> itensComanda) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    private int id;
    private int id_comanda;
    private int quantidade;
    private int id_produto;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdCom() {
        return id_comanda;
    }

    public void setIdCom(int id_comanda) {
        this.id_comanda = id_comanda;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public int getProduto() {
        return id_produto;
    }

    public void setProduto(int id_produto) {
        this.id_produto = id_produto;
    }
}
