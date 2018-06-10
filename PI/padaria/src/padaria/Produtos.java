package padaria;

public class Produtos {
 
 private double codigo_prod;
 private String descricao_prod;
 private double preco_un_prod;
 private double peso_un_prod;
 
 public double getId() {
 return codigo_prod;
 }
 
 public void setId(double codigo_prod) {
 this.codigo_prod = codigo_prod;
 }
 
 public String getProduto() {
 return descricao_prod;
 }
 
 public void setProduto(String descricao_prod) {
 this.descricao_prod = descricao_prod;
 }
 
 public double getPreco() {
 return preco_un_prod;
 }
 
 public void setPreco(double preco_un_prod) {
 this.preco_un_prod = preco_un_prod;
 }
 
 public double getPeso() {
 return peso_un_prod;
 }
 
 public void setPeso(double peso_un_prod) {
 this.peso_un_prod = peso_un_prod;
 }
}
