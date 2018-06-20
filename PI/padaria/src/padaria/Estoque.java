package padaria;

import java.sql.Connection;
import java.sql.DriverManager;

public class Estoque {

    private int id;
    private int quantidade;
    private int codigo_produto;
    private int nome_fun;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public int getProduto() {
        return codigo_produto;
    }

    public void setProduto(int codigo_produto) {
        this.codigo_produto = codigo_produto;
    }

    public int getFuncionario() {
        return nome_fun;
    }

    public void setFuncionario(int nome_fun) {
        this.nome_fun = nome_fun;
    }

    void add(Estoque estoque) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
