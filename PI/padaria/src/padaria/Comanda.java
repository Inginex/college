package padaria;

import java.util.Date;

public class Comanda {

    private int id_comanda;
    private int qtd_produto;
    private int id_produto;
    private int cpf;
    private int codigo_funcionario;
    private String nome_comprador;

    public int getId() {
        return id_comanda;
    }

    public void setId(int id_comanda) {
        this.id_comanda = id_comanda;
    }

    public int getQuantidade() {
        return qtd_produto;
    }

    public void setQuantidade(int qtd_produto) {
        this.qtd_produto = qtd_produto;
    }

    public int getProduto() {
        return id_produto;
    }

    public void setProduto(int id_produto) {
        this.id_produto = id_produto;
    }

    public int getCPF() {
        return cpf;
    }

    public void setCPF(int cpf) {
        this.cpf = cpf;
    }

    public int getCodigoFunc() {
        return codigo_funcionario;
    }

    public void setCodigoFunc(int codigo_funcionario) {
        this.codigo_funcionario = codigo_funcionario;
    }

    public String getNomeComp() {
        return nome_comprador;
    }

    public void setNomeComp(String nome_comprador) {
        this.nome_comprador = nome_comprador;
    }
}
