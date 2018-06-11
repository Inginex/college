package padaria;

public class Produtos {

    private int codigo_prod;
    private String descricao_prod;
    private double preco_un_prod;

    public double getId() {
        return codigo_prod;
    }

    public void setId(int id) {
        this.codigo_prod = id;
    }

    public String getProduto() {
        return descricao_prod;
    }

    public void setProduto(String nome) {
        this.descricao_prod = nome;
    }

    public double getPreco() {
        return preco_un_prod;
    }

    public void setPreco(double preco) {
        this.preco_un_prod = preco;
    }

}
